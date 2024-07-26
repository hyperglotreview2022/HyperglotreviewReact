import Artcss from '../../styles/art.module.css';
import Artslider from './artslider'

const art = () => {
  return (
    <div className={Artcss.section}>

      <h1 className={Artcss.artheading}>
        Art
      </h1>       
      <Artslider />

    </div>
  )
}

export default art