import React, {useEffect, useState} from 'react'
import CartContext from './CartContext'

const CartState = (props) => {
    const [state, setState] = useState(null);
    const [productSelected, setProductSelected] = useState([]);
    let onCart = JSON.parse(window.sessionStorage.getItem("onCart"));

    //Si el usuario ingresa por primera vez al sitio, creamos en sessionStorage el cart para luego actualizarlo

    if (state === null && onCart !== true) {
        let i = [];
        window.sessionStorage.setItem("cart", JSON.stringify(i));
    }

    //Y cargamos en el estado lo que se encuentra en el storage
    useEffect(() => {
            let cartInitial = JSON.parse(window.sessionStorage.getItem("cart"));
            setState(cartInitial);
    }, [])    

    return (
        <CartContext.Provider value={{state, setState, productSelected, setProductSelected}}>
            {props.children}    
        </CartContext.Provider>
    )
}

export default CartState