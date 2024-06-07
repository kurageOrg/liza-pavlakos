"use client";
import Image from "next/image";
import classes from "@/app/styles/components/Home/firstSection.module.scss";
import Link from "next/link";

const logoData = [
  { src: "lizaMicrosoft.svg", alt: "Microsoft Logo" },
  { src: "lizaCocacola.svg", alt: "Coca Cola Logo" },
  { src: "lizaEmirates.svg", alt: "Emirates Logo" },
  { src: "lizaLenovo.svg", alt: "Lenovo Logo" },
  { src: "lizaDell.svg", alt: "Dell Logo" },
  { src: "lizaOberoi.svg", alt: "Oberoi Logo" },
  { src: "lizaVista.svg", alt: "Vista Logo" },
  { src: "lizaQatar.svg", alt: "Qatar Airways Logo" },
];

export default function FirstSection() {



  return (
    <section className={`${classes.section} container`}>
      <div className={`${classes.videoSection} container`}>
        <video autoPlay loop muted playsInline className={classes.video}>
          <source
            src="assets/Images/Section_1/lizaFirstvideo.mp4"
            type="video/mp4"
          />
          <source
            src="assets/Images/Section_1/lizaFirstvideo.webm"
            type="video/webm"
          />
          {/* For browsers that prefer WebM */}
        </video>
        <div className={classes.videoText}>
          <h2 className={classes.heading}>
            Strength in Leadership, Resilience in Mind
          </h2>
          <p className={classes.dec}>
            Liza’s compelling story of overcoming trauma and adversity inspires
            you and your team to transform and triumph. Whether live or virtual,
            Liza creates memorable events that motivate meaningful outcomes.
          </p>
          <div className={classes.knowMore}>
            <button
              className={classes.circle}
              aria-label="Learn more"
            >
              <Link href='/speaking'>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="39"
                height="39"
                viewBox="0 0 39 39"
                fill="none"
              >
                <g filter="url(#filter0_b_384_838)">
                  <circle
                    cx="19.5"
                    cy="19.5"
                    r="19.5"
                    fill="black"
                    fillOpacity="0.2"
                  />
                  <circle
                    cx="19.5"
                    cy="19.5"
                    r="19.25"
                    stroke="white"
                    strokeOpacity="0.6"
                    strokeWidth="0.5"
                  />
                </g>
                <path className={classes.first}
                  d="M12.7344 16.7144L19.6506 24.6735L27.0609 16.7144"
                  stroke="white"
                />
                <path className={classes.second}
                  d="M12.7344 16.7144L19.6506 24.6735L27.0609 16.7144"
                  stroke="white"
                />
              </svg>
              </Link>
            </button>
            <Link href='/speaking'>
            <p className={classes.text}>KNOW MORE</p>
            </Link>
          </div>
        </div>
      </div>
      <div className={`${classes.mob_videoText} container`}>
          <h2 className={classes.heading}>
            Strength in Leadership, Resilience in Mind
          </h2>
          <p className={classes.dec}>
            Liza’s compelling story of overcoming trauma and adversity inspires
            you and your team to transform and triumph. Whether live or virtual,
            Liza creates memorable events that motivate meaningful outcomes.
          </p>

        </div>
      <div className={`${classes.brands} container`}>
        {logoData.map((logo, index) => (
          <div className={classes.logos} key={index}>
            <Image
              src={`assets/Images/Section_1/${logo.src}`}
              alt={logo.alt}
              layout="fill"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
