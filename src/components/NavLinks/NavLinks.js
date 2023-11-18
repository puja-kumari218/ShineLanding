import styles from "./NavLinks.module.css";

const NavLinks = () => {
  return (
    <div className={styles.global1}>
      <div className={styles.withSuperfast5g}>
        <div className={styles.discover}>DISCOVER</div>
      </div>
      <div className={styles.frame}>
        <div className={styles.ulglobalnavList} />
        <div className={styles.ourOffersParent}>
          <div className={styles.ourOffers}>Our Offers</div>
          <div className={styles.features}>Features</div>
          <div className={styles.resources}>Resources</div>
          <div className={styles.blog}>Blog</div>
          <div className={styles.prices}>Prices</div>
        </div>
      </div>
      <div className={styles.frame1}>
        <b className={styles.littleThingsThat}>Team Expense Management</b>
        <b className={styles.littleThingsThat1}>Simplified Accounting</b>
      </div>
    </div>
  );
};

export default NavLinks;
