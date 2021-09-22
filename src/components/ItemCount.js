import React, {useEffect, useState} from 'react';
import { useContext } from 'react';
import CartContext from './context/cart/CartContext';

const ItemCount = ({descripcion, stock, precio, imagen, id}) => {

    //Estos estados nos sirven para actualizar lo que el usuario sume o reste unidades al carrito
    const [unidades, setUnidades] = useState(0);
    const {state, setState} = useContext(CartContext) 
    const [item, setItem] = useState({})
    const [productSelected, setProductSelected] = useState(false)
    const [cambioEnUnidades, setCambioEnUnidades] = useState(0);
    const [sinStock, setSinStock] = useState("none")

    //Si hay cambios, se actualiza lo seleccionado por el usuario
    useEffect(() => {
        setItem([{id: id, descripcion: descripcion, precio: precio, cantidad: unidades, img: imagen}]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [descripcion, id, precio, unidades, cambioEnUnidades])

    //Función para sumar unidades a cargar
    const onAdd = () => {
        setCambioEnUnidades(cambioEnUnidades + 1)
        if (unidades < stock) {
            setUnidades(unidades + 1);
        }
    }

    //Función para restar unidades a cargar
    const onRemove = () => {
        if (unidades > 0) {
            setUnidades(unidades - 1)
        }
    }

    //Acá cargamos producto al carrito según si no está cargado ya, si hay stock o 
    //si ya está cargado y hay que sumar sólo unidades
    const getProduct = (aux, id) => (event) => {
        if (state.length === 0) {
            setState(aux);
            let i = JSON.stringify(aux)
            window.sessionStorage.setItem("cart", i)
            window.sessionStorage.setItem("onCart", JSON.stringify(true))
        } else {
            let stateAuxiliar = (state);
            let cantItems = stateAuxiliar.length;
            let coincidencia = false;
            for(let i = 0; i < cantItems; i++) {
                let sumaStock = (aux[0].cantidad + stateAuxiliar[i].cantidad);
                // eslint-disable-next-line eqeqeq
                if (stateAuxiliar[i].id == id) {
                    coincidencia = true;
                    if (stock >= sumaStock) {
                        stateAuxiliar[i].cantidad = stateAuxiliar[i].cantidad + aux[0].cantidad;
                        setState([...stateAuxiliar]);
                        window.sessionStorage.setItem("cart", JSON.stringify(state));
                    } 
                    else {
                        setSinStock("block")
                    }        
                    i = 999;    
                }     
            }
            if (coincidencia !== true) {
                setState(state.concat(aux));
                setProductSelected("1");
            } 
            coincidencia = false
        }
    }    
    
    useEffect(() => {    
        setTimeout(() => {
            setSinStock("none")
        }, 3000)
    }, [sinStock])

    //Acá retiramos el producto del carrito
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

    //Acá limpiamos el carrito
    const clearCart = () => {

        let stateAuxiliar = state;
        let cantItems = stateAuxiliar.length;
        for(let i = 0; i < cantItems; i++) {
                stateAuxiliar[i].cantidad = 0;                
            setState([...stateAuxiliar])
            setProductSelected("1");
        }
    }

    useEffect(() => {
        if(state !== null) {
        window.sessionStorage.setItem("cart", JSON.stringify(state)); 
        setProductSelected("2");
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [productSelected])


    const [display, setDisplay] = useState("none")
    useEffect(() => {
        setTimeout(() => {
            setDisplay("block");
        }, 5)    
        
    }, [])

    return ( <>
                <div id="cajaProducto" style={{display: display}}>
                    <div id="cajaBotones">
                        <button onClick={onAdd} className="btn btn-primary">Añadir</button>
                        <button onClick={onRemove} className="btn btn-warning">Restar</button>
                    </div>
                    <h3>Unidades en el carrito: <span>{unidades}</span></h3>
                    <div id="cajaBotones2">
                        <button onClick={getProduct(item, [id])} className="btn btn-success" id="add">Añadir</button>
                        <h3 style={{display: sinStock}}>Sin stock suficiente</h3>
                        <button onClick={removeProduct([id])} className="btn btn-secondary" id="remove">Retirar del carrito</button>
                        <button onClick={clearCart} className="btn btn-danger" id="clear">Limpiar todo el carrito</button>
                    </div>
                </div>    
            </>
    )
}

export default ItemCount;