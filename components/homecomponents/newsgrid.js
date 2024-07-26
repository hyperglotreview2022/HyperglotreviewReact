import styles from '../../styles/newsgrid.module.css'
import React from "react";
import Image from 'next/image';
import Link from 'next/link';
import newseventsdata from '../../pages/api/newsnevent'

const newsgrid = ({ data4 }) => {

  return (
    <div className={styles.container}>
    {newseventsdata.reverse().slice(0,9).map(function(events){
        return(
        <div key={events._id} className={styles.imagecontainer}>
        <Link href={`/NewsPage/${events.id}`}>
        <div className={styles.imgcontainer}>
          <Image className={styles.img} src={events.url[0]} width={400} height={400} alt="image"/>
        </div>
        <div className={styles.info}>
          <h3>{events.heading}</h3>
          <p>{events.info[0].slice(0,130)}...</p>
          <p>Image Credit - {events.credit}</p>
        </div>
        </Link>
      </div>  )}
      )}
    </div>
  )
}

export default newsgrid;