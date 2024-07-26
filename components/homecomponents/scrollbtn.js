import React from 'react'
import styles from '../../styles/scrollbtn.module.css'

const scrollbtn = () => {

  const scrollto = () =>{
    window.scrollTo({
      top: 900, 
      behavior: 'smooth'
    });
  };

  return (
    <div onClick={scrollto} className={styles.container}>Click To Scroll</div>
  )
}

export default scrollbtn