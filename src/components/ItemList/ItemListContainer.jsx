import React, { useState, useEffect } from 'react';
import ItemList from './ItemList.jsx';
import { useParams } from 'react-router-dom';
import './Item.css'
import { getDocs, collection, getFirestore } from "firebase/firestore"

const ItemListContainer = () => {
  const [products, setProducts] = useState([])
  const { Categoria } = useParams();
  

  useEffect(() => {
    const db = getFirestore()
    const itemsCollection = collection(db, "Componentes")
    
    getDocs(itemsCollection).then((snapshot)=>{
      const docs = snapshot.docs.map((doc)=> doc.data())
      setProducts(docs)
    })
  },[])

    const filteredProducts = Categoria
      ? products.filter((product) => product.Categoria === Categoria)
      : products;
  
      let categoryTitle = 'Todos los productos';

      switch (Categoria) {
        case 'RAM':
          categoryTitle = 'Memorias RAM';
          break;
        case 'Mother':
          categoryTitle = 'Placas Base';
          break;
        case 'Fuente':
          categoryTitle = 'Fuentes';
          break;
        case 'Procesador':
          categoryTitle = 'Procesadores';
          break;
        default:
          break;
      }

  return (
    <div className='itemBody'> 
      <h1>{categoryTitle}</h1>     
      <ItemList
      products={filteredProducts}
       />     
    </div>    
  );
};

export default ItemListContainer;
