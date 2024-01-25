import FrameComponent1 from "./FrameComponent1";
import styles from "./FrameComponent.module.css";

const FrameComponent = () => {
  return (
    <section className={styles.shoppingbasketdp}>
      <div className={styles.feature1}>
        <div className={styles.feature1Child} />
        <div className={styles.groupParent}>
          <FrameComponent1
            groupsBlack24dp11="/groups-black-24dp-1-1.svg"
            people="People"
            findATeacherCoachOrExpert="Find a teacher, coach, or expert for your hobby interest in your locality.  Find a partner, teammate, accompanist or collaborator."
            connect="Connect"
            locationOnBlack24dp1="/location-on-black-24dp-1.svg"
            place="Place"
            findAClassSchoolPlaygroun="Find a class, school, playground, auditorium, studio, shop or an event venue.  Book a slot at venues that allow booking through hobbycue."
            meetUp="Meet up"
            propHeight="81px"
            propPadding="var(--padding-xs) var(--padding-11xl) var(--padding-xs) var(--padding-10xl)"
            propGap="32px"
            propPadding1="var(--padding-xs) var(--padding-9xl) var(--padding-xs) 31px"
          />
          <FrameComponent1
            groupsBlack24dp11="/shopping-basket-black-24dp-2-1.svg"
            people="Product"
            findATeacherCoachOrExpert="Find equipment or supplies required for your hobby.  Buy, rent or borrow from shops, online stores or from community members."
            connect="Get it"
            locationOnBlack24dp1="/event-available-black-24dp-2.svg"
            place="Program"
            findAClassSchoolPlaygroun="Find events, meetups and workshops related to your hobby.  Register or buy tickets online."
            meetUp="Attend"
            propHeight="unset"
            propPadding="var(--padding-xs) var(--padding-19xl) var(--padding-xs) var(--padding-22xl)"
            propGap="59px"
            propPadding1="0px 0px 0px 12px"
            propWidth="121px"
          />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
