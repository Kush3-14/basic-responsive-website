import { useMemo } from "react";
import styles from "./FrameComponent1.module.css";

const FrameComponent1 = ({
  groupsBlack24dp11,
  people,
  findATeacherCoachOrExpert,
  connect,
  locationOnBlack24dp1,
  place,
  findAClassSchoolPlaygroun,
  meetUp,
  propHeight,
  propPadding,
  propGap,
  propPadding1,
  propWidth,
}) => {
  const findATeacherStyle = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const frameButtonStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const groupDivStyle = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  const frameButton1Style = useMemo(() => {
    return {
      padding: propPadding1,
      width: propWidth,
    };
  }, [propPadding1, propWidth]);

  return (
    <div className={styles.frameParent}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.frameGroup}>
          <div className={styles.groupsBlack24dp11Parent}>
            <img
              className={styles.groupsBlack24dp11}
              loading="eager"
              alt=""
              src={groupsBlack24dp11}
            />
            <h2 className={styles.people}>{people}</h2>
          </div>
          <div className={styles.findATeacher} style={findATeacherStyle}>
            {findATeacherCoachOrExpert}
          </div>
        </div>
        <div className={styles.frameWrapper}>
          <button className={styles.connectWrapper} style={frameButtonStyle}>
            <div className={styles.connect}>{connect}</div>
          </button>
        </div>
      </div>
      <div className={styles.rectangleGroup} style={groupDivStyle}>
        <div className={styles.frameItem} />
        <div className={styles.frameContainer}>
          <div className={styles.locationOnBlack24dp1Parent}>
            <img
              className={styles.locationOnBlack24dp1Icon}
              loading="eager"
              alt=""
              src={locationOnBlack24dp1}
            />
            <h2 className={styles.place}>{place}</h2>
          </div>
          <div className={styles.findAClass}>{findAClassSchoolPlaygroun}</div>
        </div>
        <div className={styles.frameDiv}>
          <button className={styles.meetUpWrapper} style={frameButton1Style}>
            <div className={styles.meetUp}>{meetUp}</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
