"use client";
import { useState } from "react";
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
const Video = ({
  src,
  autoPlay,
  loop,
  muted,
  playsInline,
  className,
  onClick,
}: any) => {
  const [playing, setPlaying] = useState(autoPlay);

  const handleVideoClick = () => {
    setPlaying(!playing);
    if (onClick) {
      onClick();
    }
  };

  return (
    <video
      src={src}
      autoPlay={autoPlay}
      loop={loop}
      muted={muted}
      playsInline={playsInline}
      className={className}
      onClick={handleVideoClick}
    />
  );
};

export default function FirstSection() {
  const [videoPlaying, setVideoPlaying] = useState(false);

  const handleVideoClick = () => {
    setVideoPlaying(!videoPlaying);
  };

  return (
    <section className={`${classes.section} container`}>
      <div className={`${classes.videoSection} container`}>
      <div className={classes.transparentLayer} onClick={handleVideoClick}></div>

        <div className={classes.coverImage}>
          <Image
            src="/assets/Images/Section_1/video-cover.jpg"
            alt="Cover Image"
            layout="fill"
            className={classes.coverImageMob}
          />
          <Image
            src="/assets/Images/Section_1/cover-image-laptop.jpg"
            alt="Cover Image"
            layout="fill"
            className={classes.coverImageLaptop}
          />
          {!videoPlaying && (
            <button onClick={handleVideoClick} className={classes.playbtn}>
              <svg
                width="91"
                height="91"
                viewBox="0 0 91 91"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_b_637_1149)">
                  <path
                    d="M45.5 0C20.3 0 0 20.3 0 45.5C0 70.7 20.3 91 45.5 91C70.7 91 91 70.7 91 45.5C91 20.3 70.7 0 45.5 0ZM66.3 48.8L36 66.5C35.4 66.9 34.7 67 34.1 67C33.5 67 32.8 66.9 32.2 66.5C31.1 65.9 30.3 64.6 30.3 63.2V27.8C30.3 26.4 31.1 25.1 32.2 24.5C33.3 23.9 34.9 23.9 36 24.5L66.4 42.2C67.5 42.8 68.2 44.1 68.2 45.5C68.2 46.9 67.4 48.2 66.3 48.8Z"
                    fill="white"
                    fill-opacity="0.5"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_b_637_1149"
                    x="-40"
                    y="-40"
                    width="171"
                    height="171"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feGaussianBlur in="BackgroundImageFix" stdDeviation="20" />
                    <feComposite
                      in2="SourceAlpha"
                      operator="in"
                      result="effect1_backgroundBlur_637_1149"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_backgroundBlur_637_1149"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </button>
          )}
        </div>
        {videoPlaying && (
          <Video
            src="assets/Images/Section_1/lizaFirstvideo.webm"
            autoPlay
            loop
            muted
            playsInline
            className={classes.video}
            onClick={handleVideoClick}
          />
        )}
        <div onClick={handleVideoClick} className={classes.videoText}>
          <h2 className={classes.heading}>
            Strength in Leadership, Resilience in Mind
          </h2>
          <p className={classes.dec}>
            Liza’s compelling story of overcoming trauma and adversity inspires
            you and your team to transform and triumph. Whether live or virtual,
            Liza creates memorable events that motivate meaningful outcomes.
          </p>
          <div className={classes.knowMore}>
            <button className={classes.circle} aria-label="Learn more">
              <Link href="/speaking">
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
                  <path
                    className={classes.first}
                    d="M12.7344 16.7144L19.6506 24.6735L27.0609 16.7144"
                    stroke="white"
                  />
                  <path
                    className={classes.second}
                    d="M12.7344 16.7144L19.6506 24.6735L27.0609 16.7144"
                    stroke="white"
                  />
                </svg>
              </Link>
            </button>
            <Link href="/speaking">
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
              src={`/assets/Images/Section_1/${logo.src}`}
              alt={logo.alt}
              layout="fill"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
