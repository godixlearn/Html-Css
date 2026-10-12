import styles from "./Testimonials.module.css";

const reviews = [
  {
    id: 1,
    name: "Aravindh",
    image:
      "https://imgs.search.brave.com/i6AY9_PG19EQrEzTjmX6w9v3FHXh5u8DpVukq2WPW8k/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/c2h1dHRlcnN0b2Nr/LmNvbS9pbWFnZS1w/aG90by9tYW4tcG9y/dHJhaXQtc21pbGUt/b3V0ZG9vci1zZWxm/aWUtNjAwbnctMjQ5/MDQxNjIzNS5qcGc",
    review:
      "Honestly, one of the juiciest burgers I’ve eaten in a long time! Every single bite was packed with flavor.",
  },
  {
    id: 2,
    name: "Priya",
    image:
      " https://imgs.search.brave.com/uDQpAlh9VJ_aOABdrIoAUWR-dBEx864r25h4nwVEA1Q/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/cHJvZmlsZXBpY3R1/cmUuYWkvbGFuZGlu/Zy9hZnRlci0xLmpw/Zw",
    review:
      "The ideal mix of taste, texture, and satisfaction. Will visit again!",
  },
  {
    id: 3,
    name: "kishore kumar",
    image:
      "https://imgs.search.brave.com/bjNTcs1msGeglDBRBa-6yHV9ovP7S0tcuwgPq5tU_Wk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNzIv/MjQwLzA5Mi9zbWFs/bC9vdXRkb29yLXBv/cnRyYWl0LW9mLWhh/bmRzb21lLXlvdW5n/LW1hbi1pbi1uYXR1/cmFsLWxpZ2h0LXBo/b3RvLmpwZWc",
    review: "Great food, friendly staff and a wonderful experience.",
  },
];

function Testimonials() {
  return (
    <section className={styles.testimonials}>
      <div className={styles.header}>
        <h2>What Our Customers Say</h2>
        <p>Real stories from people who love our food</p>
      </div>

      <div className={styles.container}>
        {reviews.map((item) => (
          <div className={styles.card} key={item.id}>
            <img src={item.image} alt={item.name} className={styles.profile} />

            <div className={styles.content}>
              <div className={styles.stars}>★★★★★</div>

              <p className={styles.review}>"{item.review}"</p>

              <h4>{item.name}</h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
