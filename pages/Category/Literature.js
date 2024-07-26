import styles from "../../styles/category.module.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import data2 from "../api/literature";
import Image from "next/image";
import Link from "next/link";

const category = () => {
  let wholedata = [];
  wholedata.push(...data2);
  const litarr = ["Featured Authors","Emerging Authors","Virtual Gallery"];
  let featured = [];
  let emerging = [];

  wholedata.filter((data) => {
    if (data.category === "Featured Authors") {
      featured.push(data);
    } else if (data.category === "Emerging Authors") {
      emerging.push(data);
    }
  });

  const staticdata = [{
    "url":"/literatureimages/bannerimages/chitradevakurni.jpeg",
    "credit":"Hyperglot Review",
    "topic":"Chitra Banerjee Divakaruni in conversation with Aanchal Malhotra at Jaipur Lit Fest 2023",
    "description":"Celebrated writer and academic Chitra Banerjee Divakaruni's novel, Independence, is a moving tale of three sisters and their individual yet intertwined experience of the Partition of 1947."
  },
  {
    "url":"/literatureimages/bannerimages/sharayana.JPG",
    "credit":"Hyperglot Review",
    "topic":"Sharayana Bhattacharya in Bangalore Literature Festival",
    "description":"Shrayana Bhattacharya is the winner in the best adult fiction and nonfiction categories respectively."
  }]

  return (
    <div>
      <Navbar />
      <div className={styles.background}></div>
      <h1 className={styles.heading}>LITERATURE</h1>
      <div className={styles.categoriessec}>
        {litarr.map((data) => {
          return (
            <div key={data} className={styles.cat}>
              {data}
            </div>
          );
        })}
      </div>

      <div>
        <h1 className={styles.subheading}>Featured Authors</h1>
        <div className={styles.flexcontainer}>
          <div className={styles.left}>
            <div>
              <Image
                className={styles.img}
                src={staticdata[0].url}
                width={300}
                height={700}
                alt="sidead"
              />
              <p className={styles.credit}>
                Image Credit - {staticdata[0].credit}
              </p>
              <p className={styles.name}>
                {staticdata[0].topic}
              </p>
              <p className={styles.desc}>
                {staticdata[0].description.slice(0, 300)}...
              </p>
            </div>
            {featured && featured
              .reverse()
              .splice(0,3)
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
                      href={`/Bookreview/${data.id}`}
                    >
                      <h3>{data.heading}</h3>
                    </Link>
                    <p>{data.info[0].slice(0, 150)}...</p>
                    <Link
                      className={styles.link}
                      href={`/Bookreview/${data.id}`}
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
            <div>
              <Image
                className={styles.img}
                src={staticdata[1].url}
                width={300}
                height={700}
                alt="sidead"
              />
              <p className={styles.credit}>
                Image Credit - {staticdata[1].credit}
              </p>
              <p className={styles.name}>
                {staticdata[1].topic}
              </p>
              <p className={styles.desc}>
                {staticdata[1].description.slice(0, 300)}...
              </p>
            </div>
            {emerging && emerging
              .reverse()
              .splice(0,3)
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
                      href={`/Bookreview/${data.id}`}
                    >
                      <h3>{data.heading}</h3>
                    </Link>
                    <p>{data.info[0].slice(0, 150)}...</p>
                    <Link
                      className={styles.link}
                      href={`/Bookreview/${data.id}`}
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