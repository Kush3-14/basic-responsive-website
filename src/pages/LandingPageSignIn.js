import TeacherExpert from "../components/TeacherExpert";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent from "../components/FrameComponent";
import Testimonials1 from "../components/Testimonials1";
import Testimonials from "../components/Testimonials";
import End from "../components/End";
import Footer from "../components/Footer";
import styles from "./LandingPageSignIn.module.css";
import GoToTopButton from "../components/GoToTheTop";

const LandingPageSignIn = () => {
  return (
    <div className={styles.landingPageSignIn}>
      <TeacherExpert />
      <main className={styles.frameParent}>
        <FrameComponent2 />
        <FrameComponent />
        <Testimonials1 />
        <Testimonials />
      </main>
      <End />
      <Footer />
      <GoToTopButton/>
    </div>
  );
};

export default LandingPageSignIn;
