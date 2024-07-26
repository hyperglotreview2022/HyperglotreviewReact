import Navbar from '@/components/navbar'
import Link from 'next/link';
import Footer from '@/components/footer'
import styles from '../../../styles/list.module.css'
import Image from 'next/image';
import data from '../../api/art'

export default function index() {
  let itemdata = [];

  data.filter(data=>{if(data.category === "Emerging Artist"){itemdata.push(data)}})


  return (
    <div>
        <Navbar />
            <div className={styles.background}></div> 
        <div className={styles.bigcontainer}>
            <h1 className={styles.heading}>Emerging Artist</h1>
    <div className={styles.flex}>
      <div className={styles.container}>
      <div className={styles.topcontainer}>
        <div className={styles.topimgcontainer}>
          <Image className={styles.topbannerimg} src={itemdata[itemdata.length-1].url[0]} width={700} height={400} alt="image" />
        </div>
        <div className={styles.topinfo} key={itemdata[itemdata.length-1].id}>
          <Link className={styles.link} href={`/SinglePage/${itemdata[itemdata.length-1].id}`}><h3>{itemdata[itemdata.length-1].heading}</h3></Link>
          <p>{itemdata[itemdata.length-1].info[0].slice(0,300)}...</p>
        </div>
      </div>
    {itemdata.reverse().slice(1).map((data) => {
      return(
          <div key={data.id} className={styles.listcontainer}>
            <div className={styles.sublistimgcontainer}>
              <Image className={styles.sublistimg} src={data.url[0]} width={400} height={400} alt="image" />
            </div>
            <div className={styles.listinfo}>
              <Link className={styles.link} href={`/SinglePage/${data.id}`}><h3>{data.heading}</h3></Link>
              <p>{data.info[0].slice(0,150)}...</p>
              <Link className={styles.link} href={`/SinglePage/${data.id}`}><button className={styles.button}>Read More</button></Link>
            </div>
          </div>
        )
    })}
    </div>
    <div>
      <div className={styles.Adcontainer}>
        <Image className={styles.adimg} src={"/../public/ads/TAGad/img.jpg"} width={300} height={700}  alt="sidead" />
      </div>
      </div>
    </div>
    </div>
    <Footer />
    </div>
  )
}
