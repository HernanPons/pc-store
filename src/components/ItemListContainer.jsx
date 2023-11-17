import React, { useState, useEffect } from 'react';
import ItemList from './ItemList.jsx';
import { useParams } from 'react-router-dom';



const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const { Categoria } = useParams();
    
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('./Productos.json');
          const productosData = await response.json();
          setProducts(productosData.Componentes);
        } catch (error) {
          console.log('Error al obtener los archivos:', error);
        }
      };
  
      fetchData();
    }, []);
    
    const filteredProducts = Categoria
      ? products.filter((product) => product.Categoria === Categoria)
      : products;
  
    const {ID} = useParams ()

  return (
    <div>      
      <ItemList
      products={filteredProducts}
      categoria={Categoria}
      id={ID}
       />     
    </div>    
  );
};

export default ItemListContainer;
