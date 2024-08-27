import Navbar from '../../components/navbar'
import Link from 'next/link';
import Footer from '@/components/footer'
import styles from '../../styles/list.module.css'
import Image from 'next/image';
import { useRouter } from "next/router";

export default function art({dataExport}) {

  const router = useRouter();
  const { name } = router.query;
  const subcategory = name.split('_').join(' ');
  let arr = [];
  dataExport.map(data =>{
  data.subcategory.map(a =>{
    if(a === subcategory){
      arr.push(data)
    }
  })
  })
  let array = arr.reverse()


  const staticdata = [{
    "url":"/../public/literatureimages/bannerimages/chitradevakurni.jpeg",
    "credit":"Hyperglot Review",
    "topic":"Chitra Banerjee Divakaruni in conversation with Aanchal Malhotra at Jaipur Lit Fest 2023",
    "description":"Celebrated writer and academic Chitra Banerjee Divakaruni's novel, Independence, is a moving tale of three sisters and their individual yet intertwined experience of the Partition of 1947."
  },
  {
    "url":"/../public/literatureimages/bannerimages/sharayana.JPG",
    "credit":"Hyperglot Review",
    "topic":"Sharayana Bhattacharya in Bangalore Literature Festival",
    "description":"Shrayana Bhattacharya is the winner in the best adult fiction and nonfiction categories respectively."
  }]

  return (
    <div>
        <Navbar />
            <div className={styles.background}></div> 
        <div className={styles.bigcontainer}>
            <h1 className={styles.heading}>Recent Releases - {subcategory}</h1>
 <div className={styles.flex}>
      <div className={styles.container}>
      <div className={styles.topcontainer}>
        <div className={styles.topimgcontainer}>
          <Image className={styles.topbannerimg} src={subcategory === "Fiction" ? staticdata[0].url : staticdata[1].url} width={700} height={400} alt="image" />
        </div>
        <div className={styles.topinfo}>
          <div className={styles.link}><h3>{subcategory === "Fiction" ? staticdata[0].topic : staticdata[1].topic}</h3></div>
          <p>{subcategory === "Fiction" ? staticdata[0].description : staticdata[1].description}</p>
        </div>
      </div>
    {array.map((data) => {
      return(
          <div key={art.id} className={styles.listcontainer}>
            <div className={styles.listimgcontainer}>
              <Image className={styles.listimg} src={data.photo[0]} width={400} height={400} alt="image" />
            </div>
            <div className={styles.listinfo}>
              <Link className={styles.link} href={`/Bookreview/${data._id}`}><h3>{data.name}</h3></Link>
              <p>{data.desc[0].slice(0,250)}...</p>
              <Link className={styles.link} href={`/Bookreview/${data._id}`}><button className={styles.button}>Read More</button></Link>
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

export async function getServerSideProps() {
  const url = "http://localhost:5000/api/bookreviews";
  const res = await fetch(url);
  const dataExport = await res.json();
  return { props: { dataExport } };
}