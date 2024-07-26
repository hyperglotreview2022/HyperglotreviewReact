import React from 'react'
import Image from 'next/image'
import styles from '../../styles/eventslide.module.css'
import Link from 'next/link'

const eventslide = ({data1}) => {

  let arr = [];
  data1.map(data => {
    if(data.subcategory[0] === "Events"){
      arr.push(data)
    }
  })

  return (
    <div className={styles.container}>
    {arr.slice(0,3).reverse().map(data => {
      return(
        <Link className={styles.link} href={`/EventPage/${data._id}`}>
        <div key={data._id} className={styles.card}>
      <div className={styles.imgcontainer}>
        {data.photo[0] && <Image className={styles.img} src={data.photo[0]} width={500} height={350}/>}
      </div>
       <div className={styles.info}>
          <h2>{data.title}</h2>
          <h5>Dates : {data.details[0]}</h5>
          <p>Venue : {data.details[1]}</p>
       </div>
      </div>
        </Link>

      )
    })}
    </div>
  )
}

export default eventslide