import React from 'react';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount'

const ItemDetail = ({descripcion, stock, precio, imagen, id, mostrar}) => {

    return (<>
                <div className="itemCatalogo">
                    <Link to={`/item/${id}`}>
                        <div id="cajaImgItem">
                            <img src={imagen} alt="imágen"></img>
                        </div>
                        <div>
                            <h2>{descripcion}</h2>
                            <p>AR$ {precio}</p>
                            <p> {stock > 0 ? 
                                <span className="conStock">Stock: {stock} unidades</span>  
                                : 
                                <span className="sinStock">Sin stock disponible</span> }
                            </p>
                        </div>
                    </Link>

                    {
                        mostrar === "si" ?
                        <>
                            <ItemCount descripcion={descripcion} stock={stock} precio={precio} imagen={imagen} id={id}/>
                        </> :
                        <></>
                    }
                </div>    
            </>
    )
}

export default ItemDetail;