import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail';
import { getFirestore } from '../../firebase/index';

const Item = () => {

    //Según los params sabemos que producto mostrar según la id
    let {idItem} = useParams();
    let idItemNum = parseInt(idItem);
    let itemSeleccionado = undefined;

    //Llamamos a FireBase y del producto seleccionado, hacemos un filter del estado y lo cargamos en itemSeleccionado
    const [products, setProducts] = useState([]);
    
    useEffect(()=> {
        const db = getFirestore();
        const productsCollection = db.collection("products");

        productsCollection
        .get()
        .then(
            (querySnapshot) => {
                if (querySnapshot === 0) {
                    console.log("No categories")
                } 
                setProducts(querySnapshot.docs.map((document) => document.data()))
            }
        )
        .catch((error) => console.log(error))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    itemSeleccionado = products.filter(funcion => funcion.idProduct === idItemNum);

    return (
            <div id="cajaCatalogo">
                <div id="catalogo">
                { 
                    itemSeleccionado.length !== 0 ? 
                            <>
                                <ItemDetail descripcion={itemSeleccionado[0].description} 
                                    stock={itemSeleccionado[0].stock} 
                                    precio={itemSeleccionado[0].price} 
                                    imagen={itemSeleccionado[0].img}
                                    id={itemSeleccionado[0].idProduct}
                                    key={itemSeleccionado[0].idProduct}
                                    mostrar="si"/>
                                <div id="itemDetails" style={{display: "flex", flexDirection: "column"}}>
                                    <h2>Características</h2>
                                    <p>Colores: {itemSeleccionado[0].colors}</p>
                                    <p>Peso: {itemSeleccionado[0].weight}</p>
                                    <p>Materiales: {itemSeleccionado[0].materials}</p>
                                    <p>Descripción: {itemSeleccionado[0].text}</p>
                                    <p>Origen: {itemSeleccionado[0].made}</p>
                                </div>
                            </>
                        : 
                        <></>
                }
                </div>
            </div>
    )
}

export default Item;