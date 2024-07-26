import styles from '../styles/footer.module.css';
import {FaFacebookSquare} from 'react-icons/Fa';
import {BsInstagram , BsTwitter , BsYoutube , BsLinkedin} from 'react-icons/Bs'

const footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}><p>Submissions</p><p>About Us</p></div>
      <p>Follow Us On:</p>
      <div className={styles.top}>
        <a href='https://www.instagram.com/hyperglotreview/?igshid=YmMyMTA2M2Y%3D'>
          <BsInstagram className={styles.icon}/>Instagram
        </a>
        <a href='https://www.facebook.com/people/Hyperglot-Review/100089166761501/?mibextid=ZbWKwL'>
          <FaFacebookSquare className={styles.icon}/>Facebook
        </a>
        <a href='https://twitter.com/HyperglotReview'>
          <BsTwitter className={styles.icon}/>Twitter
        </a>
      </div>
      <div className={styles.top}>
        <a href='https://www.linkedin.com/company/hyperglot-review/'>
          <BsLinkedin className={styles.icon}/>LinkedIn
        </a>
        <a href='https://www.youtube.com/@HyperglotReview/featured'>
          <BsYoutube className={styles.icon}/>Youtube
        </a>
      </div>
      <div className={styles.span}><span >@2022 Hyperglot Solutions OPC Private Limited . All Rights Reserved.</span></div>
    </div>
  )
}

export default footer;