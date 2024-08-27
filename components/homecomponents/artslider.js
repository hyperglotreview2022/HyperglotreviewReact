import React, { useEffect, useState} from "react";
import Styles from "../../styles/artslider.module.css";
import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";
import data from "../../pages/api/art";

const artslider = () => {
  const settings = {
    dots: true,
    centerMode: false,
    infinite: true,
    centerPadding: "20px",
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1380,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={Styles.container}>
      <Slider {...settings}>
        {data.reverse().slice(0,7).map((data) => (
          <div key={data.id}>
            <Link href={data.id>83 ? `/ArtistPage/${data.id}` : `/SinglePage/${data.id}`}>
              <div className={Styles.imagecontainer}>
                <div className={Styles.images}>
                  <Image
                    className={Styles.image}
                    src={data.url[0]}
                    width={1200}
                    height={800}
                    alt="image"
                  />
                </div>
                <div className={Styles.infocontainer}>
                  <div className={Styles.cardinfo}>
                    <h2 className={Styles.cardheading1}>{data.category}</h2>
                    <h2 className={Styles.cardheading}>
                      <b>{data.heading}</b>
                    </h2>
                    <p>
                      {" "}
                      {data.info[0].slice(0, 200)}.....{" "}
                      <span className={Styles.span}>Click to read more...</span>
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default artslider;
