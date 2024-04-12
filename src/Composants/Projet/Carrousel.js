import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Flechegauche from '../../Photos/flechegauche.png'
import Flechedroite from '../../Photos/flechedroite.png'

const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="flechegauche" onClick={onClick}>
        <img src={Flechegauche} alt="Previous" />
      </div>
    );
  };

  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="flechedroite" onClick={onClick}>
        <img src={Flechedroite} alt="Next" />
      </div>
    );
  };

  //si + de 1 images création du carrousel
  
export default function ImageCarousel({ pictures }) {
  
  const shouldRenderSlider = pictures.length >= 2;

  if (!shouldRenderSlider) {

    return <img src={pictures[0]} alt={`projet 1`} />;
  }

  
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />, 
    nextArrow: <NextArrow />,
    
};


  return (
    <div className="custom-carousel">
    <Slider {...settings}>
      {pictures.map((picture, index) => (
        <div key={index}>
          <img src={picture} alt={`projet ${index + 1}`} />
        </div>
      ))}
    </Slider>
    </div>
  );
}