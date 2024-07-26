import React from 'react'
import styles from '../../styles/youtube.module.css'
import Image from 'next/image'; 
import Link from 'next/link';
import youdata from '../../pages/api/youtube'

const youtubegrid = () => {

  return (
    <div className={styles.container}>
    {youdata.slice(0,8).reverse().map(data => {
      return (
        <div key={data.id} className={styles.videocontainer}>
        {/* <Link className={styles.link} href={`/Youtubepage/${data._id}`}> */}
        <div className={styles.imgcont}>
        <div className={styles.logocont}>
          <Image className={styles.imagelogo} src={'/videopreview/youtube.png'} width={400} height={180} alt='image'/>
          </div>
          <Image className={styles.image} src={data.url} width={400} height={180}/>
        </div>
        <div>
          <h3 className={styles.title}>{data.title}</h3>
          <p className={styles.desc}>{data.desc.slice(0,100)}...</p>
        </div>
        {/* </Link> */}

      </div>
      )
    })}

    </div>
  )
}

export default youtubegrid