import React from 'react'
const Faqs = () => {

    const faqs = [
        {   id: 1,
            pregunta: "Se puede abonar con tarjeta?",
            respuesta: "Sí, previo a la entrega abonas con cualquier tarjeta de crédito o débito"},
        {   id: 2,
            pregunta: "El precio que figura en la web tiene descuento por pago en efectivo?",
            respuesta: "Si seleccionaste la opción de pago en efectivo, en la factura se calculará un descuento del 10%"},
        {   id: 3,
            pregunta: "Cuando se realizaría la entrega?",
            respuesta: "Entregamos mercadería de Lunes a Sábado de 09:00 a 18:00 hs"},
        {   id: 4,
            pregunta: "Cuanto demora la entrega del producto?",
            respuesta: "Dependiendo de donde te encuentres, puede demorar hasta 3 días hábiles"},
        {   id: 5,
            pregunta: "Si llueve se suspende la entrega?",
            respuesta: "Sólo en caso de inundación extrema"}      
    ]
    
    return (<>
            <h1 className="titulo">Preguntas frecuentes</h1>
            {
                faqs.map(valor => {
                    return (
                        <div key={valor.id} className="itemFaqs">
                            <h2>{valor.pregunta}</h2>
                            <p>{valor.respuesta}</p>
                        </div>
                    )}
                )
            }
        </>
    )
}

export default Faqs 