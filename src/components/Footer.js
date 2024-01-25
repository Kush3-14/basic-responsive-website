import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerChild} />
      <div className={styles.frameSignUp}>
        <div className={styles.frameQuickLinks}>
          <div className={styles.hobbycueBox}>
            <div className={styles.frameTestimonials}>
              <b className={styles.hobbycue}>Hobbycue</b>
              <a href="#" className={styles.aboutUs}>About Us</a>
            </div>
            <div className={styles.frameTestimonials1}>
              <b className={styles.howDoI}>How Do I</b>
              <a href="#" className={styles.signUp}>Sign Up</a>
            </div>
            <div className={styles.frameTestimonials2}>
              <b className={styles.quickLinks}>Quick Links</b>
              <a href="#" className={styles.listings}>Listings</a>
            </div>
            <div className={styles.socialMediaParent}>
              <b className={styles.socialMedia}>Social Media</b>
              <div className={styles.frameParent}>
                <a href="/link-1">
                  <img
                    className={styles.frameChild}
                    loading="eager"
                    alt=""
                    src="/group-60.svg"
                  />
                </a>
                <a href="/link-2">
                  <img
                    className={styles.frameItem}
                    loading="eager"
                    alt=""
                    src="/group-61.svg"
                  />
                </a>
                <a href="/link-3">
                  <img
                    className={styles.frameInner}
                    loading="eager"
                    alt=""
                    src="/group-62.svg"
                  />
                </a>
                <a href="/link-4">
                  <img
                    className={styles.groupIcon}
                    loading="eager"
                    alt=""
                    src="/group-63.svg"
                  />
                </a>
                <a href="/link-5">
                  <img
                    className={styles.frameChild1}
                    loading="eager"
                    alt=""
                    src="/group-59.svg"
                  />
                </a>
                <a href="/link-6">
                  <img
                    className={styles.frameChild2}
                    loading="eager"
                    alt=""
                    src="/group-58.svg"
                  />
                </a>
                <a href="/link-7">
                  <img
                    className={styles.frameChild3}
                    loading="eager"
                    alt=""
                    src="/group-57.svg"
                  />
                </a>
                <a href="/link-8">
                  <img
                    className={styles.frameChild4}
                    alt=""
                    src="/group-56.svg"
                  />
                </a>
              </div>

            </div>
          </div>
          <div className={styles.frameGroup}>
  <div className={styles.ourServicesParent}>
    <a href="/our-services" className={styles.ourServices}>Our Services</a>
    <a href="/work-with-us" className={styles.workWithUs}>Work with Us</a>
    <a href="/faq" className={styles.faq}>FAQ</a>
    <a href="/contact-us" className={styles.contactUs}>Contact Us</a>
  </div>
  <div className={styles.addAListingParent}>
    <a href="/add-a-listing" className={styles.addAListing}>Add a Listing</a>
    <a href="/claim-listing" className={styles.claimListing}>Claim Listing</a>
    <a href="/post-a-query" className={styles.postAQuery}>Post a Query</a>
    <a href="/add-a-blog" className={styles.addABlog}>Add a Blog Post</a>
    <a href="/other-queries" className={styles.otherQueries}>Other Queries</a>
  </div>
  <div className={styles.blogPostsParent}>
    <a href="/blog-posts" className={styles.blogPosts}>Blog Posts</a>
    <a href="/shop-store" className={styles.shopStore}>Shop / Store</a>
    <a href="/community" className={styles.community}>Community</a>
  </div>
  <div className={styles.frameWrapper}>
    <div className={styles.inviteFriendsParent}>
      <b className={styles.inviteFriends}>Invite Friends</b>
      <div className={styles.rectangleParent}>
        <div className={styles.rectangleDiv} />
        <input
  type="text"
  placeholder="Email ID"
  className={styles.emailId}
/>

        <a href="/invite-friends" className={styles.rectangleGroup}>
          <div className={styles.frameChild5} />
          <div className={styles.invite}>Invite</div>
        </a>
      </div>
    </div>
  </div>
</div>

        </div>
      </div>
      <footer className={styles.rectangleContainer}>
        <div className={styles.frameChild6} />
        <div className={styles.purpleCuesPrivate}>
          © Purple Cues Private Limited
        </div>
      </footer>
    </div>
  );
};

export default Footer;
