import React, {useEffect, useState} from 'react'
import ItemDetailContainer from '../ItemDetailContainer'
import { getFirestore } from '../../firebase/index';
import Slider from '../ui/Slider';

const Home = () => {

    //Acá cargamos lo solicitado a FireBase
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
    }, [])

    //El catálogo se lo pasamos al container
    return (
        <div>
            <Slider />
            <ItemDetailContainer titulo="Catálogo de productos" dato={products} mostrarCount="no"/>
        </div>
    )
}

export default Home
