import styles from '../../styles/eventpage.module.css'
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Image from 'next/image';

export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:5000/api/posts");
  const items = await res.json();

  const paths = items.map((item) =>{
    return{
      params:{
        id : item._id.toString(),
      } 
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(`http://localhost:5000/api/posts/${id}`)
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

const eventpage = ({data}) => {
  return (
    <div>
    <Navbar />      
    <div className={styles.background}></div> 
    <div>
      <h1 className={styles.heading}>{data.title}</h1>
    </div>
    <div className={styles.flex}>
          <div>
            <div>
            <Image className={styles.img} src={data.photo[0]} width={800} height={800} alt="Image"/>
            <p className={styles.desc}>{data.desc[0]}</p>
            </div>
            <div className={styles.details}>
            <h2>Event Details</h2>
            <p> <b>Dates</b> : {data.details[0]}</p>
            <p> <b>Venue </b> : {data.details[1]}</p>
            <p> <b>Timings </b> : {data.details[2]}</p>
            <p> <b>Website </b> : www.hyperglotreview.com</p>
            <p> <b>Email </b> : info@hyperglotreview.com</p>
            <p> <b>Phone </b> : 011-397171 89650/650</p>
            </div>
            <div className={styles.details}>
            <h2>Company Profile</h2>
            <p className={styles.desc}>Hyperglot Solutions (OPC) Private Limited is a culmination of years of research and study to address a gap in the market to provide marketing and promotional services to artists, writers, and designers who often are not able to get the level of exposure and visibility due to certain economic and demographic constraints. At Hyperglot, we believe in the adage l'art pour l'art (art for art's sake) and, therefore, we wish to promote not just established artists but also emerging artists, especially in the wake of COVID-19 pandemic which has severely impacted artists in particular. <br /> <br />
            In our efforts to build our network of clients, we have covered major art and literature events.
            </p>
            <Image className={styles.img1} src={'/../public/eventimages/artforpaws/eventcoverage (2).png'} width={800} height={800} alt="Image"/>
            </div>
            <div className={styles.details}>
            <h2>Our Partners</h2>
            <p className={styles.desc}>We are already in talks with more than 20 brands who have shown interest in sponsoring the event since this event provides them with the opportunity to position themselves as a brand which supports both established and emerging artists and their imaginative creations. <br /> <br />
            Further, our founders have an eminent clientele due to their first venture which mostly involved helping students prepare for admissions into the best universities in the world for the better part of two decades. As a result, artists will have the opportunity to directly interact with art patrons and prospective buyers who would be interested in purchasing their works
            </p>
            <Image className={styles.img1} src={'/../public/eventimages/artforpaws/eventcoverage (3).png'} width={800} height={800} alt="Image"/>
            </div>
            <div className={styles.details}> 
              <p className={styles.desc}>
              In addition, we also provide extensive coverage of exhibitions, book launches, signings and other kinds of cultural events to support regional writers and artists. Encouraged by the positive response from artists and art galleries, Hyperglot has decided to take the next logical step to promote artists and their artworks by organising its own inaugural art exhibition. We are confident that the huge support we have received due to our efforts will make the event a roaring success.
              </p>
              <Image className={styles.img1} src={'/../public/eventimages/artforpaws/eventcoverage (1).png'} width={800} height={800} alt="Image"/>
            </div>
          </div>

            <div className={styles.Adcontainer}>
                <Image className={styles.adimg} src={"/ads/TAGad/img.jpg"} width={300} height={700}  alt="sidead" />
            </div>
          </div>
    <Footer />

    </div>
  )
}

export default eventpage