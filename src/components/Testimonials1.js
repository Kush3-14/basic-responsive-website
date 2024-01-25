import styles from "./Testimonials1.module.css";

const Testimonials1 = () => {
  return (
    <section className={styles.testimonials}>
      
      <div className={styles.testimonials1}>
        <div className={styles.rectangleGroup}>
          <div className={styles.instanceChild} />
          <div className={styles.frameParent}>
            <div className={styles.addParent}>
              <img className={styles.addIcon1} alt="" src="/add-1.svg" />
              <h2 className={styles.addYourOwn1}>Add your own</h2>
            </div>
            <div className={styles.areYouA1}>
              Are you a teacher or expert? Do you sell or rent out equipment,
              venue or event tickets? Or, you know someone who should be on
              hobbycue? Go ahead and Add your Own page
              
            </div>
            <button className={styles.addNewContainer}>
              <div className={styles.addNew1}>Add new</div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials1;
