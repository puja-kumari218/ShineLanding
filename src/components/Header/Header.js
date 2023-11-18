import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.asideacLocaleswitcher}>
      <div className={styles.div}>
        <div className={styles.div1}>
          <div className={styles.aacLsContinue}>
            <div className={styles.search}>Search</div>
          </div>
          <div className={styles.divacLsDropdownSelect}>
            <div className={styles.span}>
              <div className={styles.searchProductsStores}>
                Search products, stores etc...
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className={styles.vectorIcon} alt="" src="/vector.svg" />
    </div>
  );
};

export default Header;
