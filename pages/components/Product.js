import React from "react";
import styles from "../../styles/product.module.css";

export default function Product({ products }) {
  return (
    <div className={styles.grid}>
      {products.map((product) => {
        return (
          <div key={product._id} className={styles.product}>
            <img className={styles.product__image} src={product.productImg} />
            <h2 className={styles.product__title}>{product.productName}</h2>
            <h2 className={styles.product__price}>{product.productPrice} kr</h2>
            {product.productOnSale ? (
              <p className={styles.product__onSale}>on sale!</p>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
