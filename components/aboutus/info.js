import React from 'react'
import styles from '../../styles/info.module.css'
import { BiCurrentLocation } from 'react-icons/Bi'
import { FiMail } from 'react-icons/Fi'
import { BsFillTelephoneFill } from 'react-icons/Bs'

const info = () => {
  return (
    <div className={styles.box}>
      <div className={styles.container}>
       <h3>ADDRESS INFO<BiCurrentLocation className={styles.icon}/></h3>
       <p>303 A, <br /> Hemkunt Chambers,<br /> Nehru Place 110019</p>
      </div>
      <div className={styles.container}>
       <h3>EMAIL INFO<FiMail className={styles.icon}/></h3>
       <h4>Editorial</h4>
       <p>editorial@hyperglotreview.com</p>
       <h4>Operations</h4>
       <p>operations@hyperglotreview.com</p>
       <h4>Sales & Marketing</h4>
       <p>info@hyperglotreview.com</p>
      </div>
      <div className={styles.container}>
        <h3>PHONE NUMBER<BsFillTelephoneFill className={styles.icon}/></h3>
        <h4>Landline</h4>
        <p>011 3569 1637</p>
        <h4>Operations</h4>
        <p>+91 97171 89650/ 659</p>
        <h4>Sales</h4>
        <p>+91 97170 41338</p>
        <h4>Editorial</h4>
        <p>+91 97171 89138</p>
      </div>
    </div>
  )
}

export default info