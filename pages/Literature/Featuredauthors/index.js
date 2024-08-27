import Navbar from '@/components/navbar'
import Link from 'next/link';
import Footer from '@/components/footer'
import styles from '../../../styles/list.module.css'
import Image from 'next/image';
import data from '../../api/literature'

export default function index() {
  let itemdata = [];

  data.filter(data=>{if(data.category === "Featured Authors"){itemdata.push(data)}})

  const staticdata = [{
    "url":"/literatureimages/bannerimages/chitradevakurni.jpeg",
    "credit":"Hyperglot Review",
    "topic":"Chitra Banerjee Divakaruni in conversation with Aanchal Malhotra at Jaipur Lit Fest 2023",
    "description":"Celebrated writer and academic Chitra Banerjee Divakaruni's novel, Independence, is a moving tale of three sisters and their individual yet intertwined experience of the Partition of 1947."
  },
  {
    "url":"/literatureimages/bannerimages/sharayana.JPG",
    "credit":"Hyperglot Review",
    "topic":"Sharayana Bhattacharya in Bangalore Literature Festival",
    "description":"Shrayana Bhattacharya is the winner in the best adult fiction and nonfiction categories respectively."
  }]
  
  return (
    <div>
        <Navbar />
            <div className={styles.background}></div> 
        <div className={styles.bigcontainer}>
            <h1 className={styles.heading}>Featured Authors</h1>
    <div className={styles.flex}>
      <div className={styles.container}>
      <div className={styles.topcontainer}>
        <div className={styles.topimgcontainer}>
          <Image className={styles.topbannerimg} src={staticdata[1].url} width={700} height={400} alt="image" />
        </div>
        <div className={styles.topinfo} key={staticdata[1].id}>
          <h3>{staticdata[1].topic}</h3>
          <p>{staticdata[1].description.slice(0,300)}...</p>
        </div>
      </div>
    {itemdata.reverse().slice(1).map((data) => {
      return(
          <div key={data.id} className={styles.listcontainer}>
            <div className={styles.sublistimgcontainer}>
              <Image className={styles.sublistimg} src={data.url[0]} width={400} height={400} alt="image" />
            </div>
            <div className={styles.listinfo}>
              <Link className={styles.link} href={`/Bookreview/${data.id}`}><h3>{data.heading}</h3></Link>
              <p>{data.info[0].slice(0,150)}...</p>
              <Link className={styles.link} href={`/Bookreview/${data.id}`}><button className={styles.button}>Read More</button></Link>
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
    </div>
    </div>
    <Footer />
    </div>
  )
}
