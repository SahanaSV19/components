import styles from "./CSS/Component.module.css";
const Component = () => {
  return (
    <div>
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
  );
};
export default Component;
