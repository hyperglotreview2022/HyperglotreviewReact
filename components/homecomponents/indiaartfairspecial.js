import React from 'react'
import styles from '../../styles/download.module.css'
import Image from 'next/image';

const indiaartfairspecial = () => {

  return (
    <div className={styles.section}>

      <h1 className={styles.artheading}>
      India Art Fair - Special Issue
      </h1>       

      <div className={styles.container}>
          <div className={styles.imgcontainer}>
              <Image className={styles.img} src="/../public/websitelogos/printissuecover.png" width={350} height={500} alt="image"></Image>
          </div>
          <div className={styles.infocontainer}>
            <h1>India Art Fair 2023 - Special Issue</h1>
            <p>In its special issue on India Art Fair 2023, Hyperglot Review highlights the significant role of South Asian artists in the global art market. This includes both renowned South Asian artists and emerging talents from galleries like 079 Stories, Chemould CoLab, and Dhi Artspace, Treasure Art Gallery and many more who present groundbreaking artworks. The fair represented a notable shift in the art world, where language and economic barriers are becoming less discriminatory, allowing for a diverse range of voices and perspectives. Featured artists, hailing from different countries and speaking various languages, exemplify the focus on art for art's sake, challenging traditional notions of exclusivity. Hyperglot Review captures these unprecedented aspects, promoting Indian artists, embracing diversity, and showcasing the evolving dynamics of the contemporary art scene.</p>
            <a download href="/websitelogos/issue.pdf">
          <button className={styles.btn} value="download">Click here to download</button>
          </a>
          </div>
      </div>

    </div>
  )
}

export default indiaartfairspecial