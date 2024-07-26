import Artcss from '../../styles/art.module.css';
import Youtubegrid from './youtubegrid';

const newsnevents = () => {
  return (
    <div className={Artcss.litsection}>

      <h1 className={Artcss.videosheading}>
      Videos
      </h1>       
      <Youtubegrid />
    </div>
  )
}

export default newsnevents