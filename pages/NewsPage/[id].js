import React from 'react'
import styles from '../../styles/singlepage.module.css';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Image from 'next/image';
import Link from 'next/link';
import newseventsdata from '../api/newsnevent';

export function getServerSideProps(context) {
  return {
    props: { params: context.params },
  };
}

const singlepage = ({ params }) => {
  const { id } = params;

  const data = newseventsdata.filter((news) => {
    if (Number(news.id) == id) return news;
  });

  let a;
  function compare(){
      if(data[0].url.length > data[0].info.length){
    return a = data[0].url.length;
  }
  else {
    return a =  data[0].info.length;
  }
  }

  compare();

  // let pages = [];
  // if(data.event){
  //   data2.map(item => {
  //     if(item.event === data.event){
  //       pages.push(item)
  //     }
  //   })
  // }
  // let array = pages.reverse()

  let items = [];
  for (let i = 0; i < a; i++) {
    items.push(            
    <div className={styles.imgdesc} key={i}>
     { data[0].url[i] && <Image className={styles.img} src={data[0].url[i]} width={800} height={800} alt="Image"/>}
     { data[0].url[i] && <p className={styles.credit}>Image Credit - {data[0].credit}</p>}
      { data[0].info[i] && <p className={styles.desc}>{data[0].info[i]}</p>}
    </div>
    )
  }




  return (
    <div>
    <Navbar />
      <div className={styles.background}></div> 
        <div>
          <h1 className={styles.heading}>{data[0].heading} {data[0].subheading && <spam className={styles.subtitle}>-</spam>} <spam className={styles.subtitle}>{data[0].subheading}</spam></h1>
        </div>
          <div className={styles.flex}>
          <div>
        {data[0].artists && <div className={styles.container}>
                  <div className={styles.topcontainer}>
                    <div className={styles.topimgcontainer}>
                      <Image className={styles.topbannerimg} src={data[0].url[0]} width={700} height={400} alt="image" />
                    </div>
                    <div className={styles.topinfo} key={data[0].id}>
                      <h3>{data[0].heading}</h3>
                      <p>{data[0].info[0]} <br /><br /> {data[0].info[1]}</p>
                    </div>
                  </div>
                </div>}
            {data[0].artists ? <div>{data[0].artists.map(data => {
              return <div key={data.id} className={styles.listcontainer}>
              <div className={styles.sublistimgcontainer}>
              <Image className={styles.sublistimg} src={data.url[0]} width={400} height={400} alt="image" />
            </div>
            <div className={styles.listinfo}>
              <Link className={styles.link} href={data.id>83 ? `/ArtistPage/${data.id}` : `/SinglePage/${data.id}`}><h3>{data.heading}</h3></Link>
              <p>{data.info[0].slice(0,150)}...</p>
              <Link className={styles.link} href={data.id>83 ? `/ArtistPage/${data.id}` : `/SinglePage/${data.id}`}><button className={styles.button}>Read More</button></Link>
            </div>
              </div>
            })}</div> : <div>{items}</div>}
          </div>

            <div className={styles.Adcontainer}>
                <Image className={styles.adimg} src={"/ads/TAGad/img.jpg"} width={300} height={700}  alt="sidead" />
            </div>
          </div>
    <Footer />  
    </div>
  )
}

export default singlepage;
