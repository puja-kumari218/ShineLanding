import styles from "./Footer.module.css";

const Footer = () => {
  return (
    
    <div className={styles.div}>
      <div className={styles.svgchakraIcon} />
      <div className={styles.div1}>
        <div className={styles.div2}>
          <div className={styles.policyInfo}>Policy Info</div>
          <div className={styles.ul}>
            <div className={styles.privacyPolicy}>Privacy Policy</div>
            <div className={styles.termsOfSale}>Terms of Sale</div>
            <div className={styles.termsOfUse}>Terms of Use</div>
            <div
              className={styles.reportAbuse}
            >{`Report Abuse & Takedown Policy`}</div>
            <div className={styles.faq}>FAQ</div>
          </div>
        </div>
        <div className={styles.div3}>
          <div className={styles.company}>Company</div>
          <div className={styles.ul1}>
            <div className={styles.careers}>Careers</div>
            <div className={styles.blog}>Blog</div>
            <div className={styles.sitemap}>Sitemap</div>
            <div className={styles.contactUs}>Contact Us</div>
          </div>
        </div>
        <div className={styles.div4}>
          <div className={styles.business}>Business</div>
          <div className={styles.ul2}>
            <div className={styles.shoppingApp}>Shopping App</div>
            <div className={styles.sellOnSite}>Sell on Site</div>
            <div className={styles.sitemap}>Media Enquiries</div>
          </div>
        </div>
        <div className={styles.div5}>
          <div className={styles.subscribe}>Subscribe</div>
          <div className={styles.input}>
            <div className={styles.divplaceholder}>
              <div className={styles.yourEmailAddress}>Your email address</div>
            </div>
          </div>
          <div className={styles.button}>
            <div className={styles.subscribe1}>Subscribe</div>
          </div>
          <div className={styles.registerNowTo}>
            Register now to get updates on promotions and
          </div>
          <div className={styles.couponsOrDownloadContainer}>
            <span>{`coupons. `}</span>
            <span className={styles.orDownloadApp}>Or Download App</span>
          </div>
        </div>
        <div className={styles.div6}>
          <div className={styles.popularLinks}>Popular Links</div>
          <div className={styles.ul3}>
            <div className={styles.shoppingApp}>Lorem Ipsum</div>
            <div className={styles.sellOnSite}>Lorem Ipsum</div>
            <div className={styles.sitemap}>Lorem Ipsum</div>
            <div className={styles.loremIpsum3}>Lorem Ipsum</div>
          </div>
        </div>
      </div>
    </div>

    
  );
};

export default Footer;
