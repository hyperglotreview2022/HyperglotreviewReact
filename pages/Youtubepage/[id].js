import React from 'react'
import styles from '../../styles/youtube.module.css'
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Image from 'next/image';

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:5000/api/posts");
  const items = await res.json();

  const paths = items.map((item) =>{
    return{
      params:{
        id : item._id.toString(),
      } 
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(`http://localhost:5000/api/posts/${id}`)
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

const youtube = ({ data }) => {
  return (
    <div>
    <Navbar />
    <div className={styles.background}></div> 
    <div>
      <h1 className={styles.heading}>{data.title}</h1>
    </div>
    <div className={styles.flex}>
          <div className={styles.topcontainer}>
            <div className={styles.topimgcontainer}>
              <iframe class="video" width="800" height="450" src={data.photo[1]} title={data.title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              <div className={styles.info}>
              <h4>{data.title}</h4>
              <p>{data.desc}</p>
              </div>
            </div>
          </div>
            <div className={styles.Adcontainer}>
                <Image className={styles.adimg} src={"/ads/TAGad/img.jpg"} width={300} height={700}  alt="sidead" />
            </div>
          </div>
    <Footer />
    </div>
  )
}

export default youtube