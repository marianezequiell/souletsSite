import React, {useContext, useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import CartContext from './context/cart/CartContext';

const ItemCart = () => {
    const {state, setState} = useContext(CartContext);

    //Este estado nos sirve para actualizar el storage
    const [productSelected, setProductSelected] = useState(false)

    //Con esta función removemos el producto del carrito
    const removeProduct = (id) => (event) => {
        let stateAuxiliar = state;
        let cantItems = stateAuxiliar.length;
        for(let i = 0; i < cantItems; i++) {
            // eslint-disable-next-line eqeqeq
            if (stateAuxiliar[i].id == id) {
                stateAuxiliar[i].cantidad = 0;                
                setState([...stateAuxiliar])
                setProductSelected("1");
                i = 999;
            }
        }
    }

    //Acá actualizamos el storage
    useEffect(() => {
        if(state !== null) {
            window.sessionStorage.setItem("cart", JSON.stringify(state)); 
            setProductSelected("2");
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [productSelected])

    return (
        <>
            {
                state.length > 0 ? (
                    state.map(valor => {
                        return (
                            <div className="cajaItemCart" key={valor.id}>
                                <div className="detailsItemCart">
                                    <h4>Descripcion: {valor.descripcion}</h4>
                                    <h4>Cantidad: {valor.cantidad}</h4>
                                    <h4>Precio: ${valor.precio}</h4>
                                    <button onClick={removeProduct([valor.id])} className="btn btn-danger">Limpiar producto del carrito</button>
                                </div>
                                <Link to={`/item/${valor.id}`} className="boxImgItemCart">
                                    <img src={valor.img} alt="Imágen producto"/>
                                </Link>

                            </div>
                        )
                    })

                ) :
                <h1 className="titulo">No hay items en el carrito, <Link className="followPurchase" to="/">ver productos</Link></h1>
            }
        </>
    )
}

export default ItemCart