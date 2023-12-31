import React from 'react';
import { Button, Image} from '@chakra-ui/react'
import ItemCount from './ItemCount.jsx'
import './ItemDetail.css'
import ProceadorDetail from '../CatDetails/ProceadorDetail.jsx';
import MotherDetail from '../CatDetails/MotherDetail.jsx';
import FuenteDetail from '../CatDetails/FuenteDetail.jsx';
import RamDetail from '../CatDetails/RamDetail.jsx';

const ItemDetail = ({ GoBack, product, ID }) => {

const cuotas = () => {
  const result = product.Precio / 6;
  return result.toFixed(2);
};

  return (
  <div className='containerBody'>  
    <Button className='buttonVolver' onClick={GoBack}>
      Volver
    </Button>
    <div className='containerItem'>
      <div className='containerImg'>
        <Image src={product.Img} />
      </div>
      <div className='containerText'>
        <h1>
          {product.Nombre}
        </h1>
        <h4>
          {product.Familia}
          {product.ChipsetsPrincipal}
        </h4>
        <h2>
          ${product.Precio}
        </h2>
        
        {product.Categoria === 'Procesador' && <ProceadorDetail product={product} />}
        {product.Categoria === 'Mother' && <MotherDetail product={product} />}
        {product.Categoria === 'Fuente' && <FuenteDetail product={product} />}
        {product.Categoria === 'RAM' && <RamDetail product={product} />}

      </div>
      <div className='containerPay'>  
        <div className='payItemsTop'>
          <span>Mismo precio en 6 cuotas de ${cuotas ()}</span>
        </div>
        <div className='payItems'>
          <span>STOCK DISPONIBLE</span>
          <span>Cantidad</span>
          <ItemCount
            product={product}
          />
        </div>
      </div>
    </div>
  </div>    
  );
};

export default ItemDetail;
