import styles from "./End.module.css";

const End = () => {
  return (
    <div className={styles.end}>
      <div className={styles.endChild} />
      <div className={styles.header}>
        <h1 className={styles.yourHobbyYourContainer}>
          <span>{`Your `}</span>
          <span className={styles.hobby}>Hobby</span>
          <span>{`, Your `}</span>
          <span className={styles.community}>Community...</span>
        </h1>
        <div className={styles.container}>
          <div className={styles.brandingBox}>
            <div className={styles.navbar}>
              <div className={styles.inputWrapper}>
                <button className={styles.searchIcon}>
                  <div className={styles.getStarted}>Get started</div>
                </button>
              </div>
              
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frameBeta}>
        <div className={styles.rectangleShape}>
          <img
            className={styles.textTaglineIcon}
            loading="eager"
            alt=""
            src="/5820098-1.svg"
          />
          <img
            className={styles.contentGroupIcon}
            loading="eager"
            alt=""
            src="/5820000-1.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default End;
