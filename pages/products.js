import Head from "next/head";

import Navbar from "./components/Navbar";
import Product from "./components/Product";
import Footer from "./components/Footer";
export default function Products({ products }) {
  return (
    <>
      <Head>
        <title>Just DO it | Products</title>
        <link rel="icon" href="https://wallpaperaccess.com/full/830452.jpg" />
      </Head>

      <Navbar />
      <Product products={products} />
      <Footer />
    </>
  );
}

//fetch data for a pre-rendered page (fetches on build and on every request with a once a minute maximum (i.e. revalidates data with 60 second intervals if requests are being made))
export async function getStaticProps() {
  const res = await fetch("http://efni-api.herokuapp.com/nike");
  const products = await res.json();

  return {
    props: {
      products,
    },
    revalidate: 60,
  };
}
