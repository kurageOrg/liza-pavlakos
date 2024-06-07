import classes from "@/app/styles/components/Speaking/firstSection.module.scss";
import Image from "next/image";
import React from "react";

const FirstSection = React.memo(() => {
  return (
    <section className={`${classes.section} container`}>
      <div className={classes.left}>
        <h3 className={classes.heading}>Speaking</h3>
        <h1 className={classes.sub_heading}>
          Insightful, Actionable and Authentic
        </h1>
        <p className={classes.dec}>
          Experience the transformative impact of forgiveness in leadership,
          strengthening team dynamics and employee engagement. Overcome
          obstacles with resilience-building strategies and agile approaches,
          preparing your team to face any challenge with confidence and
          adaptability.
        </p>
      </div>
      <div  className={classes.right}>
        <Image
          src="/assets/Images/speaking/Liza_Speaking.png"
          fill
          alt="Liza_Speaking"
        />
      </div>
      <div className={`${classes.mob_right} `}>
        <Image
          src="/assets/Images/speaking/Liza_Speaking_mob.png"
          fill
          alt="Liza_Speaking"
        />
      </div>
    </section>
  );
});

export default FirstSection;
