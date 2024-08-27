import React from "react";
import styles from "../../styles/singlepage.module.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Image from "next/image";
import data from "../api/art";

export function getServerSideProps(context) {
  return {
    props: { params: context.params },
  };
}

const Page = ({ params }) => {

  const { id } = params;

  const newdata = data.filter((art) => {
    if (Number(art.id) == id) return art;
  });

  console.log(id, newdata);

//   let a;
//   function compare(){
//       if(newdata[0].url.length > newdata[0].info.length){
//     return a = newdata[0].url.length;
//   }
//   else {
//     return a =  newdata[0].info.length;
//   }
//   }

//   compare();

//   let items = []
//   for (let i = 0; i < a; i++) {
//     items.push(
//     <div className={styles.imgdesc} key={i}>
//      { newdata[0].url[i] && <Image className={styles.img} src={newdata[0].url[i]} width={800} height={800} alt="Image"/>}
//      { newdata[0].url[i] && <p className={styles.credit}>Image Credit - {newdata[0].credit}</p>}
//       { newdata[0].info[i] && <p className={styles.desc}>{newdata[0].info[i]}</p>}
//     </div>
//     )
//   }
  return (
    <div>
      <Navbar />
      <div className={styles.background}></div>
      <div>
        <h1 className={styles.heading}>{newdata[0].heading}</h1>
      </div>
      <div className={styles.flex}>
        {/* <div>{items.map(data => data)}</div> */}
        <div className={styles.topartistcontainer}>
        <div className={styles.imagesartistcontainer}>
            <Image className={styles.artistprofileimages} src={newdata[0].url[0]} width={800} height={700} alt="sidead"/>
            <p className={styles.credit}>Image Credit - {newdata[0].credit}</p>
        </div>
        <div>
            <p>{newdata[0].info.map(data => <div>{data}<br/><br/></div>)}</p>
        </div>
        </div>
        <div className={styles.Adcontainer}>
          <Image
            className={styles.adimg}
            src={"/ads/TAGad/img.jpg"}
            width={300}
            height={700}
            alt="sidead"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
