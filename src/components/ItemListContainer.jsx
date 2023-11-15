import React, { useState, useEffect } from 'react';
import ItemList from './ItemList.jsx';
import { useParams } from 'react-router-dom';
import productosData from '../data/Productos.json';



const ItemListContainer = () => {

    const [products, setProducts] = useState([]);
    
    useEffect(() => {
      setProducts(productosData.Componentes);
    }, []);
    
    const { Categoria } = useParams();
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
