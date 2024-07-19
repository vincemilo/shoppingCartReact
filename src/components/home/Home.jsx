import styles from "../../styles.module.css";
import image from "../../assets/businessGuy.png";

export default function Home() {
  return (
    <div className={styles.home}>
      <h1>Welcome to Da Shop Zone</h1>
      <img className={styles.hero} src={image} />
      <div className={styles.blurb}>
        <h3>Discerning Taste. Unrivaled Quality. Bad Name.</h3>
        <p>
          <span className={styles.bold}>
            Your curated destination for exquisite products.
          </span>{" "}
          We cater to those who appreciate exceptional craftsmanship and
          impeccable design. Explore a collection meticulously chosen for the
          discerning individual, where every item embodies luxury and timeless
          elegance.
        </p>
        <p>
          <span className={styles.bold}>Indulge in the finest:</span> Discover a
          world of rare finds, from a random backpack, to a weird dragon
          bracelet, to a hard drive for some reason. Each piece is a testament
          to artistry and quality, ensuring you acquire not just a possession,
          but a legacy.
        </p>
        <p>
          <span className={styles.bold}>Effortless Shopping:</span> Browse our
          thoughtfully curated collections at your leisure. Our intuitive
          interface and exceptional customer service guarantee a seamless
          shopping experience, allowing you to focus on what truly matters -
          acquiring the extraordinary.
        </p>
        <p>
          <span className={styles.bold}>The Name:</span> We understand, "Da Shop
          Zone" is not a very good name. We have heard your numerous complaints
          loud and clear. However, as we have explained many times, our nephew
          controls the trademark and won't let us change it. It's a long story
          but we hope it will not prevent you from enjoying your luxury shopping
          experience.
        </p>
        <p>
          <a href="https://fakestoreapi.com/" target="_blank">
            Powered by Fake Store API
          </a>
        </p>
      </div>
    </div>
  );
}
