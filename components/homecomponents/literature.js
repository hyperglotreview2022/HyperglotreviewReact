import Artcss from '../../styles/art.module.css';
import Litslider from './litslider'

const literature = ({data2}) => {
  return (
    <div className={Artcss.litsection}>

      <h1 className={Artcss.litheading}>
        Literature
      </h1>       
      <Litslider />

    </div>
  )
}

export default literature