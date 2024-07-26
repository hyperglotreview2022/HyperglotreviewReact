import styles from '../../styles/gallery.module.css'
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

const gallery = ({data}) => {
  return (
    <div>
    <Navbar />
    <div className={styles.background}></div> 
    <div>
      <h1 className={styles.heading}>{data.title}</h1>
    </div>
    <div className={styles.container}>
    {data.photo.map(data => {
      return(
    <div className={styles.card}>
        <div className={styles.imgcontainer}>
          <Image className={styles.img} src={data.url} width={300} height={250} alt="image"/>
        </div>
      <div>
        <p className={styles.info}>{data.name} {data.name && "-"} {data.event}</p>
      </div>
    </div>
      )
    })}



    </div>
    <Footer />
    </div>
  )
}

export default gallery