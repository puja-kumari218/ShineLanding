import styles from "./ProAccountContainer.module.css";

const ProAccountContainer = () => {
  return (
    <div className={styles.frame}>
      <div className={styles.frame1}>
        <div className={styles.invoiceCashOut}>
          Invoice. Cash Out. Spend. Manage. Centralize. And much more.
        </div>
        <div className={styles.littleThingsThatContainer}>
          <span className={styles.littleThingsThatContainer1}>
            <b>{`The Pro Account `}</b>
            <span>That Does More</span>
          </span>
        </div>
        <img
          className={styles.figureunitImageIcon}
          alt=""
          src="/figureunitimage@2x.png"
        />
      </div>
    </div>
  );
};

export default ProAccountContainer;
