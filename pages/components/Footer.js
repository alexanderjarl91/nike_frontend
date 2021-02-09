import styles from "../../styles/Footer.module.css";

export default function Footer() {
    return (
        <div className={styles.container}>
            <div className={styles.icons}>
                <img src="https://i0.wp.com/voxeuropae.com/wp-content/uploads/2019/02/SKq9yH-black-and-white-instagram-logo-png.png?ssl=1" alt=""/>
                <img src="https://www.freepnglogos.com/uploads/logo-facebook-png/logo-facebook-facebook-logo-png-transparent-svg-vector-bie-supply-18.png" alt=""/>
            </div>
            <p className={styles.footerText}>Built with NextJS & Matter Headless CMS by Alexander Jarl</p>
        </div>
    )
}
