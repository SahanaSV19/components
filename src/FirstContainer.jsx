import Navbar from "./Navbar";
import styles from "./CSS/FirstConatiner.module.css";

const FirstConatiner = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>
          <span className={`${styles.text} ${styles.textH}`}>HARRY</span>
          <span className={`${styles.text} ${styles.textP}`}>POTTER</span>
        </div>

        <Navbar />
      </header>
    </>
  );
};
export default FirstConatiner;
