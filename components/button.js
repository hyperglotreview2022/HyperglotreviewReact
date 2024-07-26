import Button from '../styles/button.module.css'

const button = (props) => {
  return (
    <>        
    <div className={Button.btnsection}>
      <a href="#" className={`${Button.bbbutton} ${Button.bbbuttonsnake3} ${Button.bbbuttonalt}  ${Button.bbbuttontransp}`}>
        <span className={Button.bbbuttontext} style={{"font-size": "14px"}}>{props.text}</span>
      </a>
    </div>
  </>
  )
}

export default button