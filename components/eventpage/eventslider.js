import Image from 'next/image'
import styles from '../../styles/eventslider.module.css'
import { useEffect, useState } from 'react'


const [image1, image2, image3, image4, image5] = [ "/../public/eventimages/TAG/TAG.PNG","/../public/eventimages/dhoomimal/dhoomimal.JPG",
"/../public/eventimages/kolkatalitmeet/kolkatalitmeet (3).JPG","/../public/eventimages/muskanlitfest/muskaan1.JPG"
,"/../public/eventimages/indiadesign2023/indiadesign2023.JPG"
]



const heroslider = () => {

  const [selectedImage, setSelectedImage] = useState(0)
  const [allImages, setAllImages] = useState([image1, image2, image3, image4, image5])

  useEffect(() => {
    setInterval(() => {
      setSelectedImage(selectedImage => selectedImage < 4 ? selectedImage + 1 : 0)
    }, 3000)
  }, [])


  return (
    <div className={styles.slideshowcontainer}>
      <Image className={styles.sliderimg} width={2400} height={1600} src={allImages[selectedImage]} alt="image"/> <br />
    </div>
  )
}

export default heroslider