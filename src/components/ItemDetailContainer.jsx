import React, { useEffect, useState, lazy } from 'react';
import productosData from '../data/Productos.json';
import { useParams, useNavigate } from 'react-router-dom';


const ItemDetail = lazy(() => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(import('./ItemDetail.jsx'));
      }, 2000);
    });
  });


const ItemDetailContainer = () => {
  const { ID } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const selectedProduct = productosData.Componentes.find((p) => p.ID === ID);
    setProduct(selectedProduct);
  }, [ID]);

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  const GoBack = () => {
    navigate(-1);
  };

  return (
    <React.Suspense fallback={<div>Cargando...</div>}>
      <ItemDetail 
      GoBack={GoBack} 
      product={product} 
      id={ID} 
      />
    </React.Suspense>
  )
}

export default ItemDetailContainer