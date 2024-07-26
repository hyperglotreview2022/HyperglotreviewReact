import Artcss from '../../styles/art.module.css';
import NewsGrid from './newsgrid'

const newsnevents = () => {
  return (
    <div className={Artcss.litsection}>

      <h1 className={Artcss.newsheading}>
        Events
      </h1>       
      <NewsGrid />

    </div>
  )
}

export default newsnevents