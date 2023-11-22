import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ItemDetail from './ItemDetail.jsx';

const ItemDetailContainer = () => {
  const { ID } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/Productos.json');
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
    <ItemDetail 
      GoBack={GoBack} 
      product={product} 
      id={ID} 
    />
  );
};

export default ItemDetailContainer;
