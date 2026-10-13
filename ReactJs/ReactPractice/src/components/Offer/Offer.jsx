import styles from './offer.module.css'
function Offer() { 
  return (
    <div>
      <div className={styles.offercontent}>
         <h3 className={styles.offerTitle}>Special Offers</h3>
        <h1>Get  <span className={styles.discount}>20% off</span></h1>
        <p>On your first order.use code <span className={styles.code}>FOODIE20</span></p>
      
        <button className={styles.orderButton}>Order Now →</button>
      </div>  
    </div>
     
  )
}

export default Offer;
