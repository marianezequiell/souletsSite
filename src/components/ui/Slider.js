import React from 'react'
import Img1 from '../img/slider/img1.png'
import Img2 from '../img/slider/img2.jpg'
import Img3 from '../img/slider/img3.jpg'


const Slider = () => {

    //Usamos BootsTrap
    return (
        <>
            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src={Img1} class="d-block w-100" alt="Diseño" />
                    <div class="carousel-caption d-none d-md-block">
                    <h5 style={{color: "black"}}>Innovación y diseño</h5>
                    <p style={{color: "black"}}>Los dos fuertes que nos diferencian</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src={Img2} class="d-block w-100" alt="Fabrica" />
                    <div class="carousel-caption d-none d-md-block">
                    <h5>La inversión no se detiene</h5>
                    <p>Nuevo centro de ensamble en Rosario</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src={Img3} class="d-block w-100" alt="Tienda" />
                    <div class="carousel-caption d-none d-md-block">
                    <h5>Atención personalizada</h5>
                    <p>En nuestras tiendas puedes despejar tus dudas con nuestros asesores antes de comprar</p>
                    </div>
                </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}

export default Slider
