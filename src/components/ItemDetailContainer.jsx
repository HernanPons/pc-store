import React, { useEffect, useState, lazy } from 'react';
/* import productosData from '../data/Productos.json'; */
import { useParams, useNavigate } from 'react-router-dom';


const ItemDetail = lazy(() => import('./ItemDetail.jsx'));


const ItemDetailContainer = () => {
  const { ID } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/src/data/Productos.json');
        const productosData = await response.json();
        const selectedProduct = productosData.Componentes.find((p) => p.ID === ID);
        setProduct(selectedProduct);
        setLoading(false);
      } catch (error) {
        console.log('Error al obtener los archivos:', error);
      }
    };

    fetchData();
  }, [ID]);

  if (loading) {
    return <div>Cargando...</div>;
  }
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