import styles from "../../styles/category.module.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import data1 from "../api/newsnevent";
import Image from "next/image";
import Link from "next/link";

const category = () => {
  let wholedata = [];
  wholedata.push(...data1);
  const newsarr = ["Art Events","Literary Events"]
  let art = [];
  let lit = [];

  wholedata.filter((data) => {
    if (data.category === "Art Events") {
      art.push(data);
    } else if (data.category === "Literary Events") {
      lit.push(data);
    }
  });

  return (
    <div>
      <Navbar />
      <div className={styles.background}></div>
      <h1 className={styles.heading}>NEWS</h1>
      <div className={styles.categoriessec}>
        {newsarr.map((data) => {
          return (
            <div key={data} className={styles.cat}>
              {data}
            </div>
          );
        })}
      </div>

      <div>
        <h1 className={styles.subheading}>Art Events</h1>
        <div className={styles.flexcontainer}>
          <div className={styles.left}>
            {art && <div>
              <Image
                className={styles.img}
                src={art[art.length - 1].url[0]}
                width={300}
                height={700}
                alt="sidead"
              />
              <p className={styles.credit}>
                Image Credit - {art[art.length - 1].credit}
              </p>
              <p className={styles.name}>
                {art[art.length - 1].heading}
              </p>
              <p className={styles.desc}>
                {art[art.length - 1].info[0].slice(0, 300)}...
              </p>
            </div>}
            {art && art
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
            {lit && <div>
              <Image
                className={styles.img}
                src={lit[lit.length - 1].url[0]}
                width={300}
                height={700}
                alt="sidead"
              />
              <p className={styles.credit}>
                Image Credit - {lit[lit.length - 1].credit}
              </p>
              <p className={styles.name}>
                {lit[lit.length - 1].heading}
              </p>
              <p className={styles.desc}>
                {lit[lit.length - 1].info[0].slice(0, 300)}...
              </p>
            </div>}
            {lit && lit
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