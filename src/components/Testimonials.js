import styles from "./Testimonials.module.css";

const Testimonials = () => {
  return (
    <section className={styles.testimonials}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.frameWrapper}>
          <div className={styles.quoteParent}>
            <img
              className={styles.quoteIcon}
              loading="eager"
              alt=""
              src="/quote@2x.png"
            />
            <h2 className={styles.testimonials1}>Testimonials</h2>
          </div>
        </div>
        <div className={styles.inAFastGrowingAndEverChaParent}>
          <div className={styles.inAFast}>
            In a fast growing and ever changing city like Bangalore, it
            sometimes becomes very difficult to find or connect with like minded
            people. Websites like hobbycue.com is a great service which helps me
            get in touch with, communicate, connect, and exchange ideas with
            other dancers. It also provides the extra benefit of finding
            products and services that I can avail, which I can be assured is
            going to be of great quality as it comes recommended by people of
            the hobbycue community. To have discussions, to get visibility, and
            to be able to safely explore various hobbies and activities in my
            city, all under one roof, is an excellent idea and I highly
            recommend it.
          </div>
          <div className={styles.audioTrackParent}>
            <div className={styles.audioTrack}>
              <div className={styles.audioTrackChild} />
              <div className={styles.ellipseParent}>
                <div className={styles.frameItem} />
                <img
                  className={styles.playArrowBlack24dp1Icon}
                  loading="eager"
                  alt=""
                  src="/play-arrow-black-24dp-1.svg"
                />
              </div>
              <div className={styles.audioTrackItem} />
              <img
                className={styles.audioTrackInner}
                loading="eager"
                alt=""
                src="/ellipse-26@2x.png"
              />
              <img
                className={styles.micBlack24dp1Icon}
                alt=""
                src="/mic-black-24dp-1.svg"
              />
              <div className={styles.rectangleGroup}>
                <div className={styles.frameInner} />
                <div className={styles.div}>0:00</div>
              </div>
            </div>
            <div className={styles.ellipseGroup}>
              <img
                className={styles.ellipseIcon}
                loading="eager"
                alt=""
                src="/ellipse-12@2x.png"
              />
              <div className={styles.shubhaNagarajanParent}>
                <div className={styles.shubhaNagarajan}>Shubha Nagarajan</div>
                <div className={styles.classicalDancer}>Classical Dancer</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
