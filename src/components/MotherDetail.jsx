import React from 'react'

const MotherDetail = (props) => {
    const {product} = props;
  return (
    <div>
        <>
          <li>Socket: {product.Socket}</li>
          <li>Chipsets Principal: {product.ChipsetsPrincipal}</li>
          <li>Cantidad De Slot Pci-e 16X: {product["Cantidad De Slot Pci-e 16X"]}</li>
          <li>Cantidad De Slot Pci-e 1X: {product["Cantidad De Slot Pci-e 1X"]}</li>
          <li>Cantidad de hilos: {product.Hilos}</li>
          <li>Puertos Sata: {product["Puertos Sata"]}</li>       
          <li>Salidas Vga: {product["Salidas Vga"]}</li>       
          <li>Salidas Hdmi: {product["Salidas Hdmi"]}</li>
          <li>Cantidad De Slot De Memorias: {product["Cantidad De Slot De Memorias"]}</li>
        </>
    </div>
  )
}

export default MotherDetail