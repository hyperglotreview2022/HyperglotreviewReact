import React from 'react'
import styles from '../../styles/info.module.css'

const map = () => {
  return (
    <div  className={styles.boxcontainer}>
      <div>
        <h2>Location Map</h2>
        <div>
        <iframe className={styles.map} src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14016.061496468565!2d77.25089885!3d28.56930105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1685951274852!5m2!1sen!2sin" width={600} height={450} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
      <div>
        <h2>Contact Us</h2>
        <form className={styles.form}>
          <input className={styles.input} type="text" name="name" placeholder="Full name" />
          <input className={styles.input} type="email" name="email" placeholder="Email Address" />
          <textarea cols="40" rows="10" name="message" placeholder="Write Message"></textarea>
          <button className={styles.button} type="submit">Submit Message</button>
        </form>
      </div>
    </div>
  )
}

export default map