import React from 'react'
import Image from 'next/image'
import styles from '../../styles/eventslide.module.css'
import Link from 'next/link'

const artsection = ({data4}) => {

  let arr = [];
  data4.map(data => {
    (data.subcategory.map(a => {
      if(a === 'Art Events'){
        arr.push(data)
      }
    }) 
    )
  })

  return (
    <div className={styles.container}>
    {arr.reverse().slice(0,3).map(data => {
      return(
      <Link className={styles.link} href={`/NewsPage/${data._id}`}>
      <div key={data._id} className={styles.card}>
      <div className={styles.imgcontainer}>
        {data.photo[0] && <Image className={styles.img} src={data.photo[0]} width={500} height={350}/>}
      </div>
       {data.details && <div className={styles.info}>
          <h2>{data.title}</h2>
          <h5>Dates : {data.details[0]}</h5>
          <p>Venue : {data.details[1]}</p>
       </div>}
      </div>
      </Link>
      )
    })}
    </div>
  )
}

export default artsection