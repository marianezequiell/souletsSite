import React, {useEffect, useState} from 'react';
// import ItemListCategories from './desuso/ItemListCategories';
import { getFirestore } from '../firebase/index';
import { Link } from 'react-router-dom';

const ListCategories = () => {
    
    //Acá cargamos el listado de categorías solicitado a FireBase
    const [categories, setCategories] = useState([]);
    
    useEffect(()=> {
        const db = getFirestore();
        const categoriesCollection = db.collection("categories");

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
        .catch((error) => console.log(error))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
            <div id="cajaListaCategorias">
                <ul>
                    {categories.map(prod => {
                        return (
                                <li>
                                    <Link to={`/categories/${prod.id}`} key={prod.id} categoria={prod.name}>
                                        {prod.name}
                                    </Link>
                                </li>
                        )
                    })}
                </ul>
            </div>
    )
}
                                
export default ListCategories;