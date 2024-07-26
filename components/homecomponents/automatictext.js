import Herocss from '../../styles/heroslider.module.css'
import { TypeAnimation } from 'react-type-animation';
import Button from '../button'

const automatictext = () => {
  return (
    <>
    <div className={Herocss.section}>

    <div className={Herocss.description}>
        {/* <h1>Some Kind of Text</h1> */}
        <h2>Subscribe to our Monthly Newsletter & Magazine Subsciption.</h2>
        <div className={Herocss.buttoncontainer}>
           <Button text="Sign Up for Newsletter"/>
           <Button text="Buy Magazine Subscription"/>
        </div>
      </div>

      {/* <div className={Herocss.textcontainer}>

    <TypeAnimation 
      sequence={[
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 
        2000, 
      ]}
      wrapper="span"
      cursor={true}
      repeat={1}
      style={{ fontSize: '1em',
      display: 'block',
      color: 'white',
      }}
    />
      </div> */}


    </div>
     
    </>
  )
}

export default automatictext