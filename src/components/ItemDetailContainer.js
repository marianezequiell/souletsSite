import React from 'react';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = ({titulo, dato, mostrarCount}) => {

    //Recibimos el listado de productos y se lo pasamos uno a uno a ItemDetail
    return  (<div>
                <h1 className="titulo">{titulo}</h1>        
                <div id="cajaCatalogo">
                    <div id="catalogo">
                        {
                            dato.length === 0 ? 
                                <img src="https://codigofuente.io/wp-content/uploads/2018/09/progress.gif" alt="cargando"/>
                            :
                            dato.map(prod => {
                                return (<>
                                            <ItemDetail key={prod.idProduct} mostrar={mostrarCount} id={prod.idProduct}descripcion={prod.description} stock={prod.stock} precio={prod.price} imagen={prod.img}></ItemDetail>
                                        </>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
    )
}

export default ItemDetailContainer;