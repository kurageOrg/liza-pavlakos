import classes from "@/app/styles/components/Layout/footer.module.scss";
import Link from "next/link";
import Image from "next/image";
import { useMemo } from "react";

const Footer = () => {
  const memoizedLogo = useMemo(
    () => (
      <Image
        src="assets/logo/lizaLogo.svg"
        width={157}
        height={140}
        alt="Liza's Logo"
        priority
        placeholder="blur"
        blurDataURL="data:image/svg+xml;base64,..."
      />
    ),
    []
  );
  return (
    <>
      <footer className={`${classes.footer} `}>
        <div className={`${classes.footer__content} container `}>
          <div className={classes.left}>
            <Link href="/">{memoizedLogo}</Link>
            <p className={classes.dec}>
              © 2024 Liza Pavlakos, All Rights Reserved.{" "}
            </p>
          </div>
          <div className={classes.right}>
            <div className={classes.column}>
              <h3 className={classes.heading}>PAGES</h3>
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/speaking">Speaking</Link>
              <Link href="/corporate-showreel">Corporate showreel</Link>
              <Link href="/book">The book</Link>
              <Link href="/contact">Hire</Link>
              <Link href="/contact">Contact</Link>
            </div>
            <div className={classes.column}>
              <h3 className={classes.heading}>WELFARE</h3>
              <Link href="/foundation">Liza Pavlakos Foundation</Link>
              <Link
                passHref
                target="_blank"
                rel="noopener noreferrer"
                href="https://mindhubdirectory.com/"
              >
                Mind Hub Directory
              </Link>{" "}
            </div>
            <div className={classes.column}>
              <h3 className={classes.heading}>USEFUL LINKS</h3>
              <Link
                href="https://melbourneluxurytailoring.com.au/"
                passHref
                target="_blank"
                rel="noopener noreferrer"
              >
                Melbourne Luxury Tailoring
              </Link>
              <Link href="/privacy-policy">Privacy Policy</Link>
            </div>
            <Link
              passHref
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.kurage.in/"
            >
              <p className={classes.dec}>Designed & Developed by KURAGE</p>
            </Link>
          </div>
        </div>
        <div className={`${classes.footer__mob_content} container `}>
          <div className={classes.column}>
            <h3 className={classes.heading}>PAGES</h3>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/speaking">Speaking</Link>
            <Link href="/corporate-showreel">CORPORATE SHOWREEL</Link>
            <Link href="/book">THE BOOK</Link>
            <Link href="/contact">Hire</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <div className={classes.column}>
            <h3 className={classes.heading}>WELFARE</h3>
            <Link href="/foundation">Liza Pavlakos Foundation</Link>
            <Link
              passHref
              target="_blank"
              rel="noopener noreferrer"
              href="https://mindhubdirectory.com/"
            >
              Mind Hub Directory
            </Link>
          </div>
          <div className={classes.column}>
            <h3 className={classes.heading}>USEFUL LINKS</h3>
            <Link
              href="https://melbourneluxurytailoring.com.au/"
              passHref
              target="_blank"
              rel="noopener noreferrer"
            >
              Melbourne Luxury Tailoring
            </Link>
            <Link href="/privacy-policy">Privacy Policy</Link>
          </div>
          <div className={classes.dec}>
            <p className={classes.text}>
              {" "}
              © 2024 Liza Pavlakos, All Rights Reserved.
            </p>
            <Link
              passHref
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.kurage.in/"
            >
              <p className={classes.text}>Designed & Developed by KURAGE</p>
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
