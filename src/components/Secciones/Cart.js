import React, {useContext, useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import ItemCart from '../ItemCart';
import CartContext from '../context/cart/CartContext';
import { getFirestore } from '../../firebase/index';
import firebase from "firebase/app"
import 'firebase/firestore';

const db = getFirestore();
const orders = db.collection("orders");

const Cart = () => {

    //Creamos estado y variables para usarlos con los estados debajo
    // eslint-disable-next-line no-unused-vars
    const {state, setState} = useContext(CartContext);
    let stateAuxiliar = (state);
    let precio = 0;
    let cantidad = 0;
    let tamañoArray = stateAuxiliar.length;

    //Creamos los estados para el precio y cantidad de unidades totales en el carrito
    const [precioTotal, setPrecioTotal] = useState(undefined)
    const [totalCantidad, setTotalCantidad] = useState(undefined);

    //Creamos estados para luego usarlos en larga de la orden
    const [orderId, setOrderId] = useState("")
    const [error, setError] = useState("")
    const [loading, setLoading] = useState("")
    console.log(orderId, error, loading);

    //En caso que el usuario sume o reste unidades actualizamos el estados de cantidad y precio
    useEffect(() => {
        for (var i = 0; i < tamañoArray; i++) {
            // eslint-disable-next-line react-hooks/exhaustive-deps
            precio = precio + (stateAuxiliar[i].precio * stateAuxiliar[i].cantidad);
            // eslint-disable-next-line react-hooks/exhaustive-deps
            cantidad = cantidad + stateAuxiliar[i].cantidad;
            if (i === (tamañoArray - 1)) {
                setPrecioTotal(precio)
                setTotalCantidad(cantidad)
            }
        }
    }, [state])

    //Creamos la función para cargar el pedido en FireBase
    const setOrder = (e) => {
        e.preventDefault();
        let buyerAux = {
            name: document.getElementById("nameBuyer").value,
            phone: document.getElementById("phoneBuyer").value,
            email: document.getElementById("emailBuyer").value
        }

        let newOrder = {
            buyer: (buyerAux),
            items: (state),
            date: firebase.firestore.Timestamp.fromDate(new Date ()),
            total: (precioTotal)
        }
        
        orders.add(newOrder).then(({id}) => {
            setOrderId(id);
        }).catch(err => {
            setError(err);
        }).finally(() => {
            setLoading(false)
        })

    }

    //En caso que haya más de 0 unidad en carrito, mostramos que hay o hubo cargado sino decimos que no hay nada
    return (
            <div id="cajaCart">
                <div id="cajaItemsCart">
                    {
                        totalCantidad !== 0 ?
                            <>
                                <h1>Productos cargados en el carrito</h1>
                                <ItemCart /> 
                                <h2>{`Precio total: $${precioTotal} - Cantidad total de productos: ${totalCantidad}`}</h2>
                                <div id="buy">
                                    <h2><Link to="/" className="followPurchase">Seguir comprando</Link></h2>
                                <div id="finish">
                                    <h2>Finalizar y cargar pedido</h2>
                                    {
                                        <form>
                                            <input type="text" id="nameBuyer" placeholder="Nombre y apellido"></input>
                                            <input type="number" id="phoneBuyer" placeholder="Número telefónico"></input>
                                            <input type="email" id="emailBuyer" placeholder="Correo electrónico"></input>
                                            <button onClick={setOrder} class="btn btn-success">Cargar pedido</button>
                                        </form>
                                    }
                                </div>
                                </div>
                            </>
                        :
                        <h1>No hay items en el carrito, <Link to="/">ver productos</Link></h1>
                    }
                </div>
            </div>
    )
}

export default Cart
