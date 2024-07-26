import styles from "../../styles/category.module.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import data1 from "../api/art";
import Image from "next/image";
import Link from "next/link";

const category = () => {
  let wholedata = [];
  wholedata.push(...data1);
  const artarr = [
    "Art Galleries",
    "Featured Artist",
    "Emerging Artist",
    "Virtual Gallery",
  ];
  let featuredArt = [];
  let emergingArt = [];

  wholedata.filter((data) => {
    if (data.category === "Featured Artist") {
      featuredArt.push(data);
    } else if (data.category === "Emerging Artist") {
      emergingArt.push(data);
    }
  });

  return (
    <div>
      <Navbar />
      <div className={styles.background}></div>
      <h1 className={styles.heading}>ART</h1>
      <div className={styles.categoriessec}>
        {artarr.map((data) => {
          return (
            <div key={data} className={styles.cat}>
              {data}
            </div>
          );
        })}
      </div>

      <div>
        <h1 className={styles.subheading}>Featured Artist</h1>
        <div className={styles.flexcontainer}>
          <div className={styles.left}>
            {featuredArt && <div>
              <Image
                className={styles.img}
                src={featuredArt[featuredArt.length - 1].url[0]}
                width={300}
                height={700}
                alt="sidead"
              />
              <p className={styles.credit}>
                Image Credit - {featuredArt[featuredArt.length - 1].credit}
              </p>
              <p className={styles.name}>
                {featuredArt[featuredArt.length - 1].heading}
              </p>
              <p className={styles.desc}>
                {featuredArt[featuredArt.length - 1].info[0].slice(0, 300)}...
              </p>
            </div>}
            {featuredArt && featuredArt
              .reverse()
              .splice(1,3)
              .map((data) => (
                <div key={data.id} className={styles.listcontainer}>
                  <div className={styles.sublistimgcontainer}>
                    <Image
                      className={styles.sublistimg}
                      src={data.url[0]}
                      width={400}
                      height={400}
                      alt="image"
                    />
                  </div>
                  <div className={styles.listinfo}>
                    <Link
                      className={styles.link}
                      href={`/SinglePage/${data.id}`}
                    >
                      <h3>{data.heading}</h3>
                    </Link>
                    <p>{data.info[0].slice(0, 150)}...</p>
                    <Link
                      className={styles.link}
                      href={`/SinglePage/${data.id}`}
                    >
                      <button className={styles.button}>Read More</button>
                    </Link>
                  </div>
                </div>
              ))}
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
      </div>

      <div>
        <h1 className={styles.subheading}>Emerging Artist</h1>
        <div className={styles.flexcontainer}>
          <div className={styles.left}>
            {emergingArt && <div>
              <Image
                className={styles.img}
                src={emergingArt[emergingArt.length - 1].url[0]}
                width={300}
                height={700}
                alt="sidead"
              />
              <p className={styles.credit}>
                Image Credit - {emergingArt[emergingArt.length - 1].credit}
              </p>
              <p className={styles.name}>
                {emergingArt[emergingArt.length - 1].heading}
              </p>
              <p className={styles.desc}>
                {emergingArt[emergingArt.length - 1].info[0].slice(0, 300)}...
              </p>
            </div>}
            {emergingArt && emergingArt
              .reverse()
              .splice(1,3)
              .map((data) => (
                <div key={data.id} className={styles.listcontainer}>
                  <div className={styles.sublistimgcontainer}>
                    <Image
                      className={styles.sublistimg}
                      src={data.url[0]}
                      width={400}
                      height={400}
                      alt="image"
                    />
                  </div>
                  <div className={styles.listinfo}>
                    <Link
                      className={styles.link}
                      href={`/SinglePage/${data.id}`}
                    >
                      <h3>{data.heading}</h3>
                    </Link>
                    <p>{data.info[0].slice(0, 150)}...</p>
                    <Link
                      className={styles.link}
                      href={`/SinglePage/${data.id}`}
                    >
                      <button className={styles.button}>Read More</button>
                    </Link>
                  </div>
                </div>
              ))}
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
      </div>

      <Footer />
    </div>
  );
};

export default category;
