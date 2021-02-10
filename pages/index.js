import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Just DO it</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <span>
        <img
          style={{ width: "100vw", maxWidth: "1500px" }}
          src="https://images.squarespace-cdn.com/content/v1/58d7088eebbd1aac62f99821/1507150489998-VK5IHN2HHDK54X68TY0O/ke17ZwdGBToddI8pDm48kNvT88LknE-K9M4pGNO0Iqd7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UU_i9-ln4sAC0TGEmkfMFKJn5Kcyb6Y0O9dBHu3N61jtpC969RuPXvt2ZwyzUXQf7Q/nike_airmaxday.gif?format=2500w"
          alt=""
        />
      </span>
      <Footer />
    </div>
  );
}
