import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ItemDetail from './ItemDetail.jsx';
import { collection, doc, getDocs, getFirestore, query, where } from "firebase/firestore"
import Loader from '../Loader.jsx';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({})
  const navigate = useNavigate()
  const { ID } = useParams()
  const [loading, setLoading] = useState(true)
  window.scrollTo(0, 0);

  useEffect(() => {
    const fetchProduct = async () => {
    const db = getFirestore();
    const itemsCollection = collection(db, "Componentes");
    const q = query(itemsCollection, where("ID", "==", ID));
        
      try {
        const oneItem = await getDocs(q);
  
        if (oneItem.size > 0) {
          const docData = oneItem.docs[0].data();
          setProduct(docData);
        } else {
          console.log("Producto no encontrado");
        }
      } catch (error) {
        console.error("Error al obtener el documento:", error);
      } finally {
        setLoading(false);
  
      }
    };
        
    fetchProduct();
  }, [ID]);


  const GoBack = () => {
    navigate(-1);
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <ItemDetail 
      GoBack={GoBack} 
      product={product} 
      id={ID} 
    />
  );
};

export default ItemDetailContainer;
