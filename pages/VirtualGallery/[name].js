import Navbar from '../../components/navbar'
import Link from 'next/link';
import Footer from '@/components/footer'
import styles from '../../styles/list.module.css'
import Image from 'next/image';
import { useRouter } from "next/router";

export default function art({dataExport}) {

  const router = useRouter();
  const { name } = router.query;
  let arr = [];
  dataExport.map(data =>{
  data.subcategory.map(a =>{
    if(a === name){
      arr.push(data)
    }
  })
  })
  let array = arr.reverse()



  return (
    <div>
        <Navbar />
            <div className={styles.background}></div> 
        <div className={styles.bigcontainer}>
            <h1 className={styles.heading}>Virtual Gallery - {name}</h1>
      {  array[0] ? <div className={styles.flex}>
      <div className={styles.container}>
      <div className={styles.topcontainer}>
        <div className={styles.topimgcontainer}>
          <Image className={styles.topbannerimg} src={array[0].photo[0].url} width={700} height={400} alt="image" />
        </div>
        <div className={styles.topinfo} key={array[0]._id}>
          <Link className={styles.link} href={`/Gallery/${array[0]._id}`}><h3>{array[0].title}</h3></Link>
          <p>{array[0].desc[0].slice(0,400)}...</p>
        </div>
      </div>
    {array.slice(1).map((data) => {
      return(
          <div key={data._id} className={styles.listcontainer}>
            <div className={styles.sublistimgcontainer}>
              <Image className={styles.sublistimg} src={data.photo[0].url} width={400} height={400} alt="image" />
            </div>
            <div className={styles.listinfo}>
              <Link className={styles.link} href={`/Gallery/${data._id}`}><h3>{data.title}</h3></Link>
              <p>{data.desc[0].slice(0,150)}...</p>
              <Link className={styles.link} href={`/Gallery/${data._id}`}><button className={styles.button}>Read More</button></Link>
            </div>
          </div>
        )
    })}
    </div>
    <div>
      <div className={styles.Adcontainer}>
        <Image className={styles.adimg} src={"/ads/TAGad/img.jpg"} width={300} height={700}  alt="sidead" />
      </div>
      </div>
    </div> : <div className={styles.errorcontainer}>
      <h1 className={styles.error}>Something Went Wrong!</h1>
    </div>}
    </div>
    <Footer />
    </div>
  )
}

export async function getServerSideProps() {
  const url = "http://localhost:5000/api/posts";
  const res = await fetch(url);
  const dataExport = await res.json();
  return { props: { dataExport } };
}