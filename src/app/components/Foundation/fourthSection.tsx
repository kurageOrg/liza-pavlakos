import classes from "@/app/styles/components/Foundation/fourthSection.module.scss";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const FourthSection = React.memo(() => {
  return (
    <section className={`${classes.section} `}>
      <div className={`${classes.content}  container`}>
        <div className={classes.left}>
          <h1 className={classes.heading}>Join Our Regular Giving Program</h1>
          <h1 className={classes.sub_heading}>
            Your donation will help support the most vulnerable people in
            Australia and all over the world.
          </h1>
          <p className={classes.dec}>
            Donate today and transform the lives of marginalised and
            underprivileged women and children. By joining our regular giving
            program, you can keep a child in school or provide counselling
            support for a young woman fleeing sexual assault or domestic
            violence. Thank you for your support. Together we can make a
            difference.  With PayPal or a credit card, you can make a secure
            donation. You can change or cancel your donation at any time.
          </p>
          <Link
            href="https://betterunite.com/thelizapavlakosfoundation-alwayson"
            passHref
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className={classes.donate}> DONATE</button>
          </Link>
        </div>
        <div className={classes.right}>
          <Image
            src={`/assets/Images/foundation/liza_fourth.jpeg`}
            alt={"liza_third"}
            fill
          />
        </div>
      </div>
    </section>
  );
});

export default FourthSection;
