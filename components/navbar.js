import Image from 'next/image'
import styles from '../styles/navbar.module.css'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import {FaFacebookSquare} from 'react-icons/Fa';
import {BsInstagram , BsTwitter , BsYoutube , BsLinkedin} from 'react-icons/Bs'

const navbar = () => {

  const[color,setColor] = useState(false);
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const[toggle,setToggle] = useState(false) 

  const changecolor = () => {
    if(window.scrollY>=20){
      setColor(true);
    }
    else{
      setColor(false);
    }
  }

  const controlNavbar = () => {
    if (typeof window !== 'undefined') { 
      if (window.scrollY > lastScrollY) { // if scroll down hide the navbar
        setShow(false); 
      } else { // if scroll up show the navbar
        setShow(true);  
      }

      // remember current page location to use in the next move
      setLastScrollY(window.scrollY); 
    }
  };

  useEffect(() => {   
    window.addEventListener('scroll',changecolor);
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }  

  }, [lastScrollY]);

  function clickfn2(){
    setToggle(!toggle)
  }


  return (
    <div className={`${styles.navbar} ${ color ? styles.bg : styles.bgnone }  ${show ? styles.display : styles.none} `}>

      <div>

       <Image className={styles.logo} src="/../public/websitelogos/newestlogo.png" width={400} height={400} alt="logo"/>
     
     </div>

     <div className={styles.nav}>

      <ul>

        <li>
          <Link className={styles.link} href='/'>Home</Link>
        </li> 

        <li>
          <div className={styles.dropdown}>
            <Link className={styles.link} href='/Category/Art'>Art</Link>
            <div className={styles.dropdowncontent}>
             <Link className={styles.droplinks} href='/News/Art_Galleries'>Art Galleries</Link>
             <Link className={styles.droplinks} href="/Art/Featuredartist">Featured Artists</Link>
             <Link className={styles.droplinks} href="/Art/Emergingartist">Emerging Artists</Link>
             <Link className={styles.droplinks} href="/VirtualGallery/Art">Virtual Gallery</Link>
            </div>
          </div>
        </li> 

        <li>
          <div className={styles.dropdown}>
            <Link className={styles.link} href='/Category/Literature'>Literature</Link>
            <div className={styles.dropdowncontent}>
             {/* <div className={`${styles.droplinks} ${styles.extradrop}`}>
              <div>Recent Releases</div>
              <div className={styles.extradoplinks}>
                <Link className={styles.droplinks} href="/RecentReleases/Fiction">Fiction</Link>
                <Link className={styles.droplinks} href="/RecentReleases/Non-Fiction">Non - Fiction</Link>
              </div>
             </div> */}
             <Link className={styles.droplinks} href="/Literature/Featuredauthors">Featured Authors</Link>
             <Link className={styles.droplinks} href="/Literature/Emergingauthors">Emerging Authors</Link>
             {/* <Link className={styles.droplinks} href="/subcategory/Authors_in_Spotlight">Authors in Spotlight</Link> */}
             <Link className={styles.droplinks} href="/VirtualGallery/Literature">Virtual Gallery</Link>
            </div>
          </div>
        </li> 

        {/* <li>
          <div className={styles.dropdown}>
            <Link className={styles.link} href='/Category/Design'>Design</Link>
            <div className={styles.dropdowncontent}>
             <Link className={styles.droplinks} href="/subcategory/Featured_Brands">Featured Brands</Link>
             <Link className={styles.droplinks} href="/subcategory/Emerging_Brands">Emerging Brands</Link>
             <Link className={styles.droplinks} href="/subcategory/Designers_in_Spotlight">Designers in Spotlight</Link>
             <Link className={styles.droplinks} href="/VirtualGallery/Design">Virtual Gallery</Link>
            </div>
          </div>
        </li>  */}

        <li>
            <Link className={styles.link} href='/Events/'>Events</Link>
        </li> 

        <li>
          <div className={styles.dropdown}>
            <Link className={styles.link} href='/Category/News'>News</Link>
            <div className={styles.dropdowncontent}>
             <Link className={styles.droplinks} href="/News/Artevent">Art Events</Link>
             <Link className={styles.droplinks} href="/News/Literaryevent">Literary Events</Link>
             {/* <Link className={styles.droplinks} href="/subcategory/Culture_&_Lifestyle">Culture & Lifestyle</Link> */}
            </div>
          </div>
        </li> 

        <li><Link className={styles.link} href='/AboutUs/'>About Us</Link></li> 
        {/* <li><Link className={styles.link} href='/Submissions/'>Subsmissions</Link></li>  */}
        <li>
          <div className={styles.dropdown}>
            <Link className={styles.link} href='/'>Follow Us</Link>
            <div className={styles.dropdowncontent}>
             <Link className={styles.droplinks} href="https://www.instagram.com/hyperglotreview/?igshid=YmMyMTA2M2Y%3D">
              <BsInstagram className={styles.icon}/>Instagram
             </Link>
             <Link className={styles.droplinks} href="https://www.facebook.com/people/Hyperglot-Review/100089166761501/?mibextid=ZbWKwL">
              <FaFacebookSquare className={styles.icon}/>Facebook
             </Link>
             <Link className={styles.droplinks} href="https://twitter.com/HyperglotReview">
              <BsTwitter className={styles.icon}/>Twitter
             </Link>
             <Link className={styles.droplinks} href="https://www.linkedin.com/company/hyperglot-review/">
              <BsLinkedin className={styles.icon}/>LinkedIn
             </Link>
             <Link className={styles.droplinks} href="https://www.youtube.com/@HyperglotReview/featured">
              <BsYoutube className={styles.icon}/>Youtube
              </Link>
            </div>
          </div>
        </li> 


      </ul>

      <div className={styles.menubutton} onClick={clickfn2}>
      <div className={styles.btnscontainer}>
          <button onClick={()=>{setToggle(!toggle)}} className={toggle ? `${styles.menu} ${styles.opened}` : `${styles.menu}`} aria-label="Main Menu">
            <svg width="100" height="100" viewBox="0 0 100 100">
                <path className={`${styles.line} ${styles.line1}`} d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
                <path className={`${styles.line} ${styles.line2}`} d="M 20,50 H 80" />
                <path className={`${styles.line} ${styles.line3}`} d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
              </svg>
          </button>
    </div>
    </div>

     </div>

    </div>
  )
}

export default navbar