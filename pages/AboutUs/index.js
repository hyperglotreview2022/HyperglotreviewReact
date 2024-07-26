import React from 'react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import styles from '../../styles/aboutus.module.css'
import Image from 'next/image'
import Info from '../../components/aboutus/info'
import Map from '../../components/aboutus/map'

let array = [
  {
    "url":"/../public/editorialteam/EditorPic.jpg",
    "designation":"Founder & Editor",
    "name":"Dominic Biswas"
  },
  {
    "url":"/../public/editorialteam/managingeditor.jpg",
    "designation":"Managing Editor",
    "name":"Syam Sudhakar"
  },
  {
    "url":"/../public/editorialteam/deputyeditor.jpg",
    "designation":"Deputy Editor",
    "name":"Mandika Sinha",
    "desc":"Dr. Mandika Sinha is the Deputy Editor of Hyperglot Review and Assistant Professor and Head, PG Department of English at Southfield College, Darjeeling. Her doctoral research was on Scandinavian crime fiction and she has continued her foray into the field by exploring crime fiction from across the world."
  },
  {
    "url":"/../public/editorialteam/associateeditors.jpg",
    "designation":"Associate Editor",
    "name":"Priyanka Chatterjee",
    "desc":"Dr. Priyanka Chatterjee is an Associate Editor with Hyperglot Review. She is a Core Faculty and Coordinator for English at Centre for Distance and Online Education, University of North Bengal."
  },
  {
    "url":"/../public/editorialteam/vishakadiyali.jpg",
    "designation":"Associate Editor",
    "name":"Vishaka Diyali",
    "desc":"Vishaka Diyali (@laroux_vida) is an Associate Editor with Hyperglot Review. She is a faculty member of the Department of English at Southfield College.She loves reading and enjoys hanging out at cafés and restaurants that provide a great gastronomic experience."
  },
  {
    "designation":"Contributing Editor",
    "name":"Dipty Subba",
  },
  {
    "designation":"Contributing Editor",
    "name":"Priyadarshini Gupta",
  },
  {
    "designation":"Contributing Editor",
    "name":"Dronika Subba",
  },
  {
    "designation":"Creative Visualiser",
    "name":"Shruti Gupta",
  },
  {
    "designation":"Editorial Assistant",
    "name":"Yashita Mishra",
  },
]

const aboutus = () => {
  return (
    <div>
      <Navbar />
      <div className={styles.background}></div> 
      <div>
        <h1 className={styles.heading}>About Us</h1>
      </div>
      <div className={styles.flex}>
          <div className={styles.leftcontainer}>
            <p className={styles.info}>Hyperglot Review publishes reviews of Indian origin and Asian writers (fiction and poetry) as well as relevant discussions, ideas and insights into South Asian artists. Our magazine will give you access to exclusive content from some of the most talented writers, artists, and critics in the field. Our in-depth articles, interviews, and reviews will give you an insider's perspective on the world of art and literature, and keep you informed about the latest happenings in the industry. But it's not just about staying informed. Our magazine is also a great way to be inspired and challenged. We are looking for diverse and distinct voices, especially when it comes to that of women's art and literature particularly from women's perspective and marginalised sections. It will be our constant endeavour to amplify your voice to the greatest extent possible. Our diverse range of contributors will introduce you to new perspectives, styles, and genres, and help you discover new favorites.</p>
            <h1 className={styles.subheading}>Editorial</h1>
            <div>
            {
              array.map(data => {
                return(
                <div className={styles.boxflex}>
                  <div className={styles.imgcontainer}>
                    {data.url && <Image className={styles.img} src={data.url} height={300} width={300} alt="Image"/>}
                  </div>
                  <div>
                    <h2>{data.designation} - {data.name}</h2>
                    <p>{data.desc}</p>
                  </div>
                </div>
                )
              })
            }

            </div>
          </div>
            <div className={styles.Adcontainer}>
                <Image className={styles.adimg} src={"/../public/ads/TAGad/img.jpg"} width={300} height={700}  alt="sidead" />
            </div>
          </div>
          <Info />
          <Map />
      <Footer />
    </div>
  )
}

export default aboutus