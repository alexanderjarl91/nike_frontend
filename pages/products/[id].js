import Navbar from "../components/Navbar";
import styles from "../../styles/specificProducts.module.css";
import Footer from "../components/Footer";

export default function SpecificProduct({ product }) {
  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <img
          className={styles.specificProduct__image}
          src={product.productImg}
        />
        <h1 className={styles.title}>{product.productName}</h1>
        <div className={styles.container}>
          <p className={styles.description}>{product.productDescription}</p>
          <h1 className={styles.price}>{product.productPrice} kr</h1>
          {product.productOnSale ? (
            <p className={styles.description}>ON SALE!</p>
          ) : null}
        </div>
        <button className={styles.cartBtn}>ADD TO CART</button>
      </div>
      <Footer />
    </div>
  );
}

//fully dynamic data, fetches everytime user requests this page
export async function getServerSideProps(context) {
  const { id } = context.query;

  const res = await fetch(`https://efni-api.herokuapp.com/nike/${id}`);
  const product = await res.json();
  return {
    props: { product: product },
  };
}
