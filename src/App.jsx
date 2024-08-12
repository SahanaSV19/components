import styles from "./CSS/App.module.css";
import "bootstrap/dist/css/bootstrap.css";

import WeatherWidget from "./WeatherWidget";
import Component from "./Component";
import FirstConatiner from "./FirstContainer";

function App() {
  let bodyContainer = document.querySelector("body");
  bodyContainer.classList.add("first");
  return (
    <div className={styles.wholeContainer}>
      <div className={styles.parentDiv}>
        <div className={styles.innerParent}>
          <div className={styles.weatherWidget}>
            <WeatherWidget />
            <br />
          </div>
          <div className={styles.childDiv}>
            <FirstConatiner />
            <br />
            <Component />
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
