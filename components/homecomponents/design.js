import styles from '../../styles/design.module.css';
import Designslider from './designslider'

const design = ({data1}) => {
  return (
    <div className={styles.container}>

      <h1 className={styles.designheading}>
        Design
      </h1>       
      <hr className={styles.horizontalline}/>
      <Designslider data1={data1}/>

    </div>
  )
}

export default design
