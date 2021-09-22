import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import ItemDetailContainer from '../ItemDetailContainer';
import { getFirestore } from '../../firebase/index';


const Categories = () => {

    //Estos params nos sirven para saber el id de la categoría
    let {id} = useParams();
    let idNum = parseInt(id);

    //Estas dos variables nos van a ser útiles para luego según la categoría que seleccione el usuario pasársela al container
    let newCategories = undefined;
    let newProducts = undefined;

    //Aquí cargaremos lo solicitado a firebase (categorías y productos)
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([])

    useEffect(()=> {
        const db = getFirestore();
        const categoriesCollection = db.collection("categories");
        const productsCollection = db.collection("products");

        categoriesCollection
        .get()
        .then(
            (querySnapshot) => {
                if (querySnapshot === 0) {
                    console.log("No categories")
                } 
                setCategories(querySnapshot.docs.map((document) => document.data()))
            }
        )
        .catch((error) => console.log(error));

        productsCollection
        .get()
        .then(
            (querySnapshot) => {
                if (querySnapshot === 0) {
                    console.log("No products")
                } 
                setProducts(querySnapshot.docs.map((document) => document.data()))
            }
        )
        .catch((error) => console.log(error));
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    //Actualizamos las variables con un filter, según los params
    newCategories = categories;

    newProducts = products.filter(categoria => categoria.idCategory === idNum)
    newCategories = categories.filter(categoria => categoria.id === idNum)

    return (
        <>
            { 
                newProducts.length !== 0 ? 
                    <ItemDetailContainer titulo={newCategories[0].name} dato={newProducts} mostrarCount="no"/> 
                : 
                    <></>
            }
        </>
    )
}

export default Categories;