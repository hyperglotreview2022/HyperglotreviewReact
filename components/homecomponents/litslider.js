import styles from '../../styles/litslider.module.css'
import React from "react";
import Slider from "react-slick";
import Image from 'next/image';
import Link from 'next/link';
import litdata from '../../pages/api/literature'

const litslider = () => {

  const settings = {
    dots: true,
    centerMode: false,
    infinite: true,
    centerPadding: "20px",
    slidesToShow: 5,
    responsive: [
      {
        breakpoint: 1380,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className={styles.container}>
        <Slider {...settings} className={styles.slider}>
        {litdata.reverse().slice(0,9).map((lit) =>{
          return(
            <div key={lit.id} className={styles.card}>
            <Link href={`/Bookreview/${lit.id}`} className={styles.imagecontainer}>
            <div className={styles.imagecontainer}>
                            
                              <div className={styles.images}>
                                <Image className={styles.image} src={lit.url[0]} width={1200} height={800} alt="image"/>
                              </div>
                              <div className={styles.infocontainer}>
                                <div className={styles.cardinfo}>
                                  <h2 className={styles.cardheading}><b>{lit.heading}</b></h2>
                                  <p className={styles.para}> {lit.info[0].slice(0,120)}..... <span className={styles.span}>Click to read more...</span>
                                  </p>
                                </div>
                              </div>
                              
            </div>
</Link>
                            </div>
          )}
           )}
        </Slider>
        </div>
  )
}

export default litslider;