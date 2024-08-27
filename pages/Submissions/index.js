import React from 'react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import styles from '../../styles/submissions.module.css'
import Image from 'next/image'
import { BiCurrentLocation } from 'react-icons/Bi'
import { FiMail } from 'react-icons/Fi'
import { BsFillTelephoneFill } from 'react-icons/Bs'

const index = () => {
  return (
    <div>
      <Navbar />
      <div className={styles.background}></div> 
      <div>
        <h1 className={styles.heading}>Call For Submissions</h1>
      </div>
      <div className={styles.flex}>
      <div className={styles.leftcontainer}>
        <p>Dear Writer, <br />  <br />
        We are Hyperglot Review and we are looking for writers and contributors for our website which will go live on or before 31 December, 2022. <br />  <br />
        Hyperglot Review invites submissions on reviews of Indian origin and Asian writers (fiction and poetry) as well as relevant discussions, ideas and insights into South Asian artists. <br />  <br />
        Our contributors are free to choose their own topics though we might share themes and discussion topics from time to time but they are in no way binding on our writers. We are looking for diverse and distinct voices, especially when it comes to that of women's art and literature particularly from women's perspective and marginalised sections. It will be our constant endeavour to amplify your voice to the greatest extent possible.</p>
      <h1 className={styles.subheading}>Submission Guidelines</h1>
      <p>
      1. Plagiarism free  <br /> <br />
      2. Word limit: 500-1000  <br /> <br />
      3. Payment per article: min. 800 INR (eight hundred rupees) per piece.  <br /> <br />
      If selected for the HOME page, 1500 INR (fifteen hundred rupees) per piece.  <br /> <br />
      Contributors are requested not to enquire regarding the page on which their submission(s) will be published.  <br /> <br />
      4. No simultaneous submissions or earlier submissions will be considered.  <br /> <br />
      5. All submissions should be in word format ONLY. Any other file types will not be considered.  <br /> <br />
      6. Writers are requested to share a short introduction about their works, profession and details of acceptances from other magazines, journals, websites, if any.  <br /> <br />
      7. Last date of submission: 15 January, 2023.  <br />
      </p>
      </div>
        <div className={styles.Adcontainer}>
            <Image className={styles.adimg} src={"/ads/TAGad/img.jpg"} width={300} height={700}  alt="sidead" />
        </div>
      </div>
      <div className={styles.boxcontainer}>
        <div className={styles.info}>
          <h4>ADDRESS INFO<BiCurrentLocation className={styles.icon}/></h4>
          <p>303 A, Hemkunt Chambers, Nehru Place 110089</p>
        </div>
        <div className={styles.info}>
          <h4>EMAIL INFO<FiMail className={styles.icon}/></h4>
          <p>editorial@hyperglotreview.com</p>
        </div>
        <div className={styles.info}>
          <h4>PHONE NUMBER<BsFillTelephoneFill className={styles.icon}/></h4>
          <p>+91 97171 89650 <br /> +91 97170 41038</p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default index