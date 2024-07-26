import Image from 'next/image'
import Herocss from '../../styles/heroslider.module.css'
import { useEffect, useState } from 'react'
import Automatictext from './automatictext'

const [image1, image2, image3, image4, image5] = [ "/topsliderimg/herosliderimg (1).JPG",
"/topsliderimg/herosliderimg (6).JPG", "/topsliderimg/herosliderimg (3).JPG",
"/topsliderimg/herosliderimg (4).JPG","/topsliderimg/herosliderimg (5).JPG",
]

const heroslider = () => {

  const [selectedImage, setSelectedImage] = useState(0)
  const [allImages, setAllImages] = useState([image1, image2, image3, image4, image5])

  useEffect(() => {
    setInterval(() => {
      setSelectedImage(selectedImage => selectedImage < 4 ? selectedImage + 1 : 0)
    }, 8000)
  }, [])


  return (
    <div className={Herocss.slideshowcontainer}>
      <Image className={Herocss.sliderimg} width={2400} height={1600} src={allImages[selectedImage]} alt="image"/> <br />
      {/* <Automatictext/> */}
    </div>
  )
}

export default heroslider