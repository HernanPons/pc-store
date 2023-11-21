import React from 'react'

const FuenteDetail = (props) => {
    const {product} = props;
  return (
    <div>
        <>
            <li>Watts Nominal: {product["Watts Nominal"]}</li>
            <li>Watts Reales: {product["Watts Reales"]}</li>
            <li>Compatible Con Posición Inferior: {product["Compatible Con Posición Inferior"]}</li>       
            <li>Certificacion 80 Plus: {product["Certificacion 80 Plus"]}</li>       
            <li>Modo Híbrido: {product["Modo Híbrido"]}</li>           
            <li>Ampers En Línea +12V: {product["Ampers En Línea +12V"]}</li>
            <li>Tipo De Cableado: {product["Tipo De Cableado"]}</li>
            <li>Color: {product.Color}</li>
            <li>Iluminación: {product.Iluminación}</li>
            <li>Fuente Digital: {product["Fuente Digital"]}</li>
        </>
    </div>
  )
}


export default FuenteDetail