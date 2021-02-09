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

export async function getStaticProps() {
  const res = await fetch("http://efni-api.herokuapp.com/nike");
  const products = await res.json();

  return {
    props: {
      products,
    },
  };
}
