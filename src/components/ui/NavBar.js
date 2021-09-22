import React, {useContext, useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import CartContext from '../context/cart/CartContext';
import Logo from './Logo';

const NavBar = () => {

    const {state, setState} = useContext(CartContext);

    const [tamañoArray, setTamañoArray] = useState(0);

    let cartSS = [];
    let cantidad = 0;

    const [totalCantidad, setTotalCantidad] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            // eslint-disable-next-line react-hooks/exhaustive-deps
            cartSS = JSON.parse(window.sessionStorage.getItem("cart")); 
            setTamañoArray(cartSS.length);
            for (let i = 0; i < tamañoArray; i++) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                cantidad = cantidad + cartSS[i].cantidad;
                if (i === (tamañoArray - 1)) {
                    setTotalCantidad(cantidad)
                }
            }    
        }, 5)
    }, [state, cartSS, setState])

    return  (
                <nav id="nav">
                    <div id="subCajaNav">
                        <Link className="cajaLogo" to="/"><Logo /></Link>
                        <div id="cajaListaNav">
                            <ul>
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/categories">Categorias</Link>
                                </li>
                                <li>
                                    <Link to="/faq">Preguntas frecuentes</Link>
                                </li>
                                <li>
                                    <Link to="/aboutus">Nosotros</Link>
                                </li>
                                <li>
                                    {totalCantidad !== 0 ?                                     
                                        <Link to="/cart">
                                            <img src="https://img.icons8.com/nolan/64/shopping-cart.png" alt="" />
                                            <span style={{color: "darkblue", fontWeight: 800}}>{totalCantidad}</span>
                                        </Link>
                                        :
                                        <></>
                                    }
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            )
}

export default NavBar;