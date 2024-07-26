import React from 'react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import styles from '../../styles/event.module.css'
import Slider from '../../components/eventpage/eventslider'
import Slide from '../../components/eventpage/eventslide'
import Artsection from '../../components/eventpage/artsection'
import Litsection from '../../components/eventpage/literaturesection'


export const getStaticProps = async () => {
  const [res1,res2,res4] = await Promise.all([
  fetch("http://localhost:5000/api/posts"),
  fetch("http://localhost:5000/api/bookreviews"),
  fetch("http://localhost:5000/api/newss"),
]);
  const [data1,data2,data4] = await Promise.all([
    res1.json(),
    res2.json(),
    res4.json(),
  ])

  return {
    props: {
      data1,
      data2,
      data4,
    },
  };
};

const index = ({data1,data2,data4}) => {
  return (
    <div>
      <Navbar />
      <div className={styles.background}></div> 
      <Slider />
      <div className={styles.bigcontainer}>
        <div>
          <h1 className={styles.heading}>Upcoming Events</h1>
        </div>
        <Slide data1={data1}/>
        <div>
          <h1 className={styles.heading}>Art Events</h1>
        </div>
        <Artsection data4={data4}/>
        <div>
          <h1 className={styles.heading}>Art Events</h1>
        </div>
        <Litsection data4={data4}/>
      </div>

      <Footer />
    </div>
  )
}

export default index