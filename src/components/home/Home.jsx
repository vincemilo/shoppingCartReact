import styles from "../../styles.module.css";
import image from "../../assets/businessGuy.png";

export default function Home() {
  return (
    <div className={styles.home}>
      <h1>Welcome to Da Shop Zone</h1>
      <img className={styles.hero} src={image} />
      <div className={styles.blurb}>
        Discerning Taste. Unrivaled Quality.
        <p>
          Your curated destination for exquisite products. We cater to those who
          appreciate exceptional craftsmanship and impeccable design. Explore a
          collection meticulously chosen for the discerning individual, where
          every item embodies luxury and timeless elegance.
        </p>
        <p>
          Indulge in the finest: Discover a world of rare finds, from a random
          backpack, to a weird dragon bracelet, to a hard drive for some reason.
          Each piece is a testament to artistry and quality, ensuring you
          acquire not just a possession, but a legacy.
        </p>
        <p>
          Effortless Shopping: Browse our thoughtfully curated collections at
          your leisure. Our intuitive interface and exceptional customer service
          guarantee a seamless shopping experience, allowing you to focus on
          what truly matters - acquiring the extraordinary.
        </p>
      </div>
    </div>
  );
}
