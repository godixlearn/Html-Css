import { useState, useEffect } from "react";
import styles from "./Counter.module.css";

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Count value has changed:", count);
  }, [count]); 


  // useEffect(accept callback function, Dependency array)

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Count: {count}</h1>
      <div className={styles.buttonContainer}>
        <button
          className={`${styles.btn} ${styles.decrement}`}
          onClick={() => setCount(count - 1)}
        >
          Decrement
        </button>
        <button
          className={`${styles.btn} ${styles.increment}`}
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>
      </div>
    </div>
  );
}

export default Counter;
