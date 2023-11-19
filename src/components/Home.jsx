import React, { useRef, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Home.css'


const Home = () => {
  const sliderRef = useRef(null);
  
  const CustomPrevArrow = ({ onClick }) => (
    <div className="custom-arrow prev" onClick={onClick}>
      {'<'}
    </div>
  );
  const CustomNextArrow = ({ onClick }) => (
    <div className="custom-arrow next" onClick={onClick}>
      {'>'}
    </div>
  );
  // Configuración del carrusel
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Cambia de imagen cada 2 segundos
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };


  // Lista de URLs de imágenes
  const imageUrls = [
    "https://imgur.com/BPr5jdZ.jpeg" ,
    "https://imgur.com/hCGk895.jpeg" ,
    "https://imgur.com/HSd79mE.jpeg" ,
  ];

  // Función para detener el carrusel cuando el componente se desmonta
  useEffect(() => {
    return () => {
      if (sliderRef.current) {
        sliderRef.current.slickPause();
      }
    };
  }, []);

  return (
    <Slider {...settings} ref={sliderRef}>
      {imageUrls.map((url, index) => (
        <div key={index}>
          <img src={url} alt={`Slide ${index + 1}`} className='carruselBanner'/>
        </div>
      ))}
    </Slider>
  );
};


export default Home