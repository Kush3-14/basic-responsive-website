import styles from "./TeacherExpert.module.css";

const TeacherExpert = () => {
  return (
    <div className={styles.teacherExpert}>
      <header className={styles.navbar}>
        <div className={styles.peopleFind} />
        <div className={styles.groups}>
          <img
            className={styles.hobbycueLogoIcon}
            loading="eager"
            alt=""
            src="/hobbycue-logo@2x.png"
          />
          </div>
          <div className={styles.searchbox}>
            <div className={styles.shoppingBasket} />
            <div className={styles.searchbox}>
            <div className={styles.shoppingBasket} />
            <input
              type="text"
              className={styles.searchField}
              placeholder="Search here..."
            />
            <button className={styles.rectangleParent} type="button">
              <div className={styles.frameChild} />
              <img
                className={styles.icons8Search1}
                alt=""
                src="/icons8-search-1.svg"
              />
            </button>
          </div>
        </div>
        <div className={styles.frameParent}>
          <div className={styles.exploreParent}>
            <img className={styles.exploreIcon} alt="" src="/explore.svg" />
            <div className={styles.explore}>Explore</div>
            <div className={styles.dropdown}>
              <img
                className={styles.icons8ExpandArrow1}
                alt=""
                src="/icons8-expand-arrow-1.svg"
              />
              <ul className={styles.dropdownContent}>
                <li><a href="#">People - Community</a></li>
                <li><a href="#">PLaces -  Venues</a></li>
                <li><a href="#">Programs - Events</a></li>
                <li><a href="#">Products - Store</a></li>
                <li><a href="#">Blogs</a></li>
              </ul>
            </div>
          </div>
          <div className={styles.hobbiesParent}>
            <div className={styles.hobbies}>
              <img className={styles.micIcon} alt="" src="/mic.svg" />
              <img
                className={styles.testimonialsIcon}
                alt=""
                src="/testimonials.svg"
              />
              
            </div>
            <img className={styles.hobbiesIcon} alt="" src="/hobbies.svg" />
            <div className={styles.hobbies1}>Hobbies</div>
            <img
              className={styles.icons8ExpandArrow11}
              alt=""
              src="/icons8-expand-arrow-1.svg"
            />
          </div>
          <ul className={styles.dropdownContent}>
                <li><a href="#">People - Community</a></li>
                <li><a href="#">PLaces -  Venues</a></li>
                <li><a href="#">Programs - Events</a></li>
                <li><a href="#">Products - Store</a></li>
                <li><a href="#">Blogs</a></li>
              </ul>
          <img
            className={styles.bookmarkBlack24dp1Icon}
            loading="eager"
            alt=""
            src="/bookmark-black-24dp-1.svg"
          />
          <img
            className={styles.notificationsBlack24dp1Icon}
            loading="eager"
            alt=""
            src="/notifications-black-24dp-1.svg"
          />
          <img className={styles.product3Icon} alt="" src="/product-3.svg" />
          <div className={styles.frameWrapper}>
            <div className={styles.rectangleGroup}>
              <div className={styles.frameItem} />
              <div className={styles.signIn}>Sign In</div>
            </div>
          </div>
          
        </div>
      </header>
    </div>
  );
};

export default TeacherExpert;
