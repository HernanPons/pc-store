import React from 'react'

const ProceadorDetail = (props) => {
    const {product} = props;
  return (
    <div>
        <>
          <li>Socket: {product.Socket}</li>
          <li>Cantidad de núcleos: {product.Núcleos}</li>
          <li>Proceso de fabricación: {product["Proceso De Fabricación"]}</li>
          <li>Chipset GPU: {product["Chipset Gpu"]}</li>
          <li>Cantidad de hilos: {product.Hilos}</li>
          <li>Frecuencia Turbo: {product["Frecuencia Turbo"]} RPM</li>
        </>
    </div>
  )
}

export default ProceadorDetail