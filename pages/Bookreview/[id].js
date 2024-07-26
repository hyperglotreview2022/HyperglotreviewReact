import React from 'react'
import styles from '../../styles/recentreleases.module.css';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import data from "../api/literature";
import Image from 'next/image';
import {useState} from 'react';

export function getServerSideProps(context) {
  return {
    props: { params: context.params },
  };
}

const Review = ({ params }) => {
  const { id } = params;
  const [show,setShow] = useState(true)
  const [show1,setShow1] = useState(true)

  const newdata = data.filter((book) => {
    if (Number(book.id) == id) return book;
  });

  return (
    <div>
    <Navbar />
      <div className={styles.background}></div> 
        <div>
          <h1 className={styles.heading}>{newdata[0].category}</h1>
        </div>
          <div className={styles.flex}>
          <div className={styles.imagescontainer}>
            {newdata[0].url[1] && <Image className={styles.authorimage} src={newdata[0].url[1]} height={400} width={400}></Image>}
            {newdata[0].url[1] && <p className={styles.credits}>Image Credit - {newdata[0].credit}</p>}
            <Image className={styles.bookcover} src={newdata[0].url[0]} height={400} width={200}></Image>
          </div>
          <div className={styles.midcontainer}>
          <div className={styles.topcontainer}>
          <h2 className={styles.booktitle}>{newdata[0].title} ({newdata[0].heading})</h2>
            <h3>{newdata[0].reviewtype}</h3>
            {newdata[0].reviewtype === "Early Review" && <div>
              <p className={styles.credits}>This review is the initial impression of our editorial team after reading approximately one-tenth of the book.</p>
              <p className={styles.credits}>DISCLAIMER: The opinions expressed in the Early Review might not necessarily have a correlation with the Final Review of the book.</p>
            </div>}
            <p>{show ? newdata[0].info[0].slice(0,380) : newdata[0].info[0]}{show && "..." }</p>
            {newdata[0].info.slice(1).map(data => {
             return(newdata[0] && <p>{!show && newdata[0]}</p> )
            })}
          <button className={styles.button} onClick={()=>{setShow(!show)}}>{show ? "Show More":"Show less"}</button>
          </div>
          <div className={styles.topcontainer}>
            <p><b>Original Title</b> : {newdata[0].details[0]}</p>
            <p><b>ISBN</b> : {newdata[0].details[1]}</p>
            <p><b>Edition language</b> : {newdata[0].details[2]}</p>
            {newdata[0].details[4] && <p><b>Literary Awards</b> : {newdata[0].details[4]}</p>}
            <p><b>Published</b> : {newdata[0].details[3]}</p>
          </div>
          <div>
            <h3>Summary</h3>
            <p>{show1 ? newdata[0].summary[0].slice(0,300) : newdata[0].summary[0]}{show1 && "..."}</p>
            <button className={styles.button} onClick={()=>{setShow1(!show1)}}>{show1 ? "Show More":"Show less"}</button>
          </div>

          </div>
          <div className={styles.Adcontainer}>
            <Image className={styles.adimg} src={"/../public/ads/TAGad/img.jpg"} width={300} height={700}  alt="sidead" />
          </div>
          </div>
    <Footer />  
    </div>
  )
}

export default Review;