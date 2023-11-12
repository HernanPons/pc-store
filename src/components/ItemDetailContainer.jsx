import React, { useState, useEffect, Suspense, lazy } from 'react';
import ItemDetail from './ItemDetail.jsx';



const ItemDetailContainer = () => {
  const [mostrarItemDetail, setMostrarItemDetail] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMostrarItemDetail(true);
    },);

    return () => 
      clearTimeout(timer);
  }, []);

  return (
    <Suspense fallback={<div>Cargando...</div>}>
    <div>
      {mostrarItemDetail && (
          <ItemDetail />
      )}
    </div>
    </Suspense>
  );
};

export default ItemDetailContainer;
