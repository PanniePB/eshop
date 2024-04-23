import styles from "./Footer.module.scss";
// import Facebook from "../../assets/Facebook.png";
// import Instagram from "../../assets/Instagram.png";
// import Twitter from "../../assets/Twitter.png";
// import Youtube from "../../assets/Youtube.png";
// import TikTok from "../../assets/TikTok.png";
// import Visa from "../../assets/Visa.png";
// import Mastercard from "../../assets/Mastercard.png";
// import AmericanExpress from "../../assets/AmericanExpress.png";
// import PayPal from "../../assets/PayPal.png";
// import AfterPay from "../../assets/AfterPay.png";
// import ApplePay from "../../assets/ApplePay.png";
// import GooglePay from "../../assets/GooglePay.png";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__content}>
        <section className={styles.footer__content__left}>
          <div className={styles.footer__content__left__col}>
            <h6>INFO</h6>
            <div>
              <p>About PB Fashion</p>
              <p>Careers</p>
              <p>Sustainability</p>
              <p>Student Discount</p>
            </div>
          </div>
          
          <div className={styles.footer__content__left__col}>
            <h6>CUSTOMER CARE </h6>
            <div>
              <p>Contact Us</p>
              <p>Secure Payment Method</p>
              <p>Bonus Point</p>
              <p>Donation</p>
            </div>
          </div>
        </section>
        
      </div>
    </footer>
  );
};

export default Footer;
