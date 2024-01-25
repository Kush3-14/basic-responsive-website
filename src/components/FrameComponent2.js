import styles from "./FrameComponent2.module.css";

const FrameComponent2 = () => {
  return (
    <section className={styles.homeScreenWrapper}>
      <form className={styles.homeScreen}>
        <div className={styles.homeScreenChild} />
        <div className={styles.frameParent}>
          <div className={styles.exploreYourHobbyOrPassionParent}>
            <h1 className={styles.exploreYourHobbyContainer}>
              <span className={styles.exploreYour}>Explore your</span>
              <span className={styles.hobby}> hobby</span>
              <span className={styles.or}>{` or `}</span>
              <span className={styles.passion}>passion</span>
            </h1>
            <div className={styles.signInToInteractWithAComParent}>
              <div className={styles.signInToInteract}>
                Sign-in to interact with a community of fellow hobbyists and an
                eco-system of experts, teachers, suppliers, classes, workshops,
                and places to practice, participate or perform.
              </div>
            </div>
          </div>
          <div className={styles.frameWrapper}>
            <div className={styles.signinjoininParent}>
              <div className={styles.signinjoinin}>
                <div className={styles.signInParent}>
                  <div className={styles.signIn}>Sign In</div>
                  <div className={styles.frameChild} />
                </div>
                <div className={styles.signInParent}>
                  <div className={styles.signIn}>Join In</div>
                  <div className={styles.frameChild} />
                </div>
              </div>
              <div className={styles.frameGroup}>
                <div className={styles.loginWithOtherAccountsParent}>
                  <button className={styles.loginWithOtherAccounts}>
                    <img
                      className={styles.googleIcon}
                      alt=""
                      src="/google.svg"
                    />
                    <div className={styles.continueWithGoogle}>
                      Continue with Google
                    </div>
                  </button>
                  <button className={styles.loginWithOtherAccounts1}>
                    <img
                      className={styles.facebookIcon}
                      alt=""
                      src="/facebook.svg"
                    />
                    <div className={styles.continueWithFacebook}>
                      Continue with Facebook
                    </div>
                  </button>
                </div>
                <div className={styles.connectWithSeparator}>
                  <div className={styles.connectWithSeparatorChild} />
                  <div className={styles.orConnectWith}>Or connect with</div>
                  <div className={styles.connectWithSeparatorItem} />
                </div>
                <div className={styles.inputFieldsParent}>
                  <div className={styles.inputFields}>
                    <input
                      className={styles.email}
                      placeholder="Email"
                      type="text"
                    />
                  </div>
                  <div className={styles.component7}>
                    <input
                      className={styles.password}
                      placeholder="Password"
                      type="text"
                    />
                    <img
                      className={styles.passwordIcon}
                      alt=""
                      src="/password.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.frameDiv}>
            <div className={styles.parent}>
              <img
                className={styles.icon}
                loading="eager"
                alt=""
                src="/5793404-1.svg"
              />
              <img
                className={styles.icon1}
                loading="eager"
                alt=""
                src="/5793401-1.svg"
              />
            </div>
          </div>
          <div className={styles.frameParent1}>
            <div className={styles.frameParent2}>
              <div className={styles.checkboxParent}>
                <input className={styles.checkbox} type="checkbox" />
                <div className={styles.rememberMe}>Remember me</div>
              </div>
              <div className={styles.lockBlack24dp1Parent}>
                <img
                  className={styles.lockBlack24dp1Icon}
                  alt=""
                  src="/lock-black-24dp-1.svg"
                />
                <div className={styles.forgotPassword}>Forgot password?</div>
              </div>
            </div>
            <button className={styles.buttons}>
              <div className={styles.continue}>Continue</div>
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default FrameComponent2;
