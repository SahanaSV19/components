import styles from "./CSS/App.module.css";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./Navbar";
function App() {
  let bodyContainer = document.querySelector("body");
  bodyContainer.classList.add("first");
  return (
    <div className={styles.wholeContainer}>
      <div className={styles.parentDiv}>
        <div className={styles.innerParent}>
          <div className={styles.weatherWidget}>
            <h2>Bengaluru Weather</h2>
            <br />
            {/* You can integrate a weather API here for real data */}
          </div>
          <div className={styles.childDiv}>
            <header className={styles.header}>
              <div className={styles.logo}>
                <span className={`${styles.text} ${styles.textH}`}>HARRY</span>
                <span className={`${styles.text} ${styles.textP}`}>POTTER</span>
              </div>
              {/* <div className={styles.nav}> */}
              <Navbar />
              {/* </div> */}
            </header>
            <br />
            <p className={styles.contentCont}>
              <h2>Create a unique, professional logo for your business</h2>
              <p class={`${styles.leadCont} lead`}>
                Kickstart your brand with business card designs, social media
                graphics, app icons, letter heads and more
              </p>
            </p>
            <br />
            <button className={styles.Button}>Create My Logo</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
