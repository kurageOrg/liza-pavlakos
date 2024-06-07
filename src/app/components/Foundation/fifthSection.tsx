import classes from "@/app/styles/components/Foundation/fifthSection.module.scss";
import Image from "next/image";
import React from "react";

const FifthSection = React.memo(() => {
  const data = [
    {
      id: 1,
      imageSrc: "liza_support_one.jpeg",
      heading: "Women",
      description:
        "''Grace to be Born'' is a maternity home and nursery providing a temporary shelter for unwed pregnant mothers and an orphanage for children born there. Grace to be Born is a haven for babies to be born in and a place where their mothers can have a chance for emotional and spiritual rebirth.||| Our foundation has assisted in supplying nappies and providing one-on-one coaching services with the girls through our counseling provider Positive Breakthroughs.",
    },
    {
      id: 2,
      imageSrc: "liza_support_two.jpg",
      heading: "Children",
      description:
        "Our Lady of Perpetual Help Children’s Home in the province of Batangas, Philippines, is a home for socio-economic deprived young girls.||| Our foundation has assisted through financial assistance for the children’s education and providing educational materials and relief goods.",
    },
    {
      id: 3,
      imageSrc: "liza_support_three.jpeg",
      heading: "Mental Health support & victims of violence",
      description:
        "We provide mental health services for marginalised communities who otherwise may not afford them. For example, we have provided free counseling to the Yazidi women Isis kidnapped through our counseling service Positive Breakthroughs.",
    },
  ];

  return (
    <section className={`${classes.section} `}>
      <section className={`${classes.fifthSection} `}>
        <div className={`${classes.content}  container`}>
          <div className={classes.head}>
          WHO WE SUPPORT
          </div>
          <div className={classes.dec}>
            <h1 className={classes.text}>Discover more about the initiatives we've launched and the charities we've partnered with.
</h1>{" "}
            <button className={classes.hire}>KNOW MORE</button>
          </div>{" "}
          <div className={`${classes.cards} `}>
            {data.map((item) => {
              const descriptionParts = item.description
                ? item.description.split("|||")
                : [];

              return (
                <div key={item.id} className={classes.singleItem}>
                  <div className={classes.image}>
                    <Image
                      src={`/assets/Images/foundation/${item.imageSrc}`}
                      alt={item.heading}
                      fill
                    />
                  </div>
                  <h1 className={classes.heading}>{item.heading}</h1>
                  <p className={classes.dec}>
                  {descriptionParts.map((part, index) => (
                <React.Fragment key={index}>
                  {part}
                  {index < descriptionParts.length - 1 && <br />}
                </React.Fragment>
              ))}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </section>
  );
});

export default FifthSection;
