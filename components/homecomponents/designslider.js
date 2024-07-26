import styles from '../../styles/design.module.css'
import React from "react";
import Slider from "react-slick";
import Image from 'next/image';

const designslider = ({ data1 }) => {

  let arr = [];
  data1.map(data => {
    if(data.subcategory[0] === "Featured Brands" || data.subcategory[0] === "Emerging Brands" || data.subcategory[0] === "Designers in Spotlight"){
      arr.push(data)
    }
  })

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className={styles.slider}>
    <Slider  {...settings}>
    { arr.reverse().slice(0,7).map(design =>{
          return(
          <div  key={design._id}>
                    <div className={styles.imgcontainer}>
                      <Image className={styles.img} src={design.photo[0]} width={1000} height={500} alt="image"/>
                    </div>
                    <div className={styles.info}>
                      <h2>{design.title}</h2>
                      <p>{design.desc[0].slice(0,250)}...</p>
                    </div>
                  </div>)}
    )}
    </Slider>
    </div>
  )
}

export default designslider;