"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import classes from "../../styles/components/Nav/nav.module.scss";

const Nav: React.FC = () => {
  const [navOpen, setNavOpen] = useState<boolean>(false);
  const navRef = useRef<HTMLDivElement>(null);

  const handleOutsideClick = (event: MouseEvent) => {
    if (navRef.current && !navRef.current.contains(event.target as Node)) {
      setNavOpen(false);
    }
  };

  useEffect(() => {
    if (navOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [navOpen]);

  const handleLinkClick = () => {
    setNavOpen(false);
  };

  return (
    <div className={classes.nav} ref={navRef}>
      <div className={classes.navcontainer}>
        <div className={classes.navbar}>
          <div
            className={classes.menu_toggle}
            onClick={() => setNavOpen(!navOpen)}
          >
            {!navOpen ? (
              <svg
                width="35"
                height="12"
                viewBox="0 0 35 12"
                xmlns="http://www.w3.org/2000/svg"
                className={classes.burger}
              >
                <g stroke="white">
                  <g style={{ cursor: "pointer" }}>
                    <path d="M0 2H17" />
                    <path d="M0 6H17" />
                    <path d="M0 10H9" />
                  </g>
                </g>
              </svg>
            ) : (
              <svg
                width="39"
                height="25"
                viewBox="0 0 39 25"
                xmlns="http://www.w3.org/2000/svg"
                className={classes.close}
              >
                <g stroke="#CBBD70">
                  <path d="M6.137 18.157L18.158 6.136" />
                  <path d="M18.867 18.157L6.846 6.136" />
                </g>
              </svg>
            )}
            <svg
              width="35"
              height="12"
              viewBox="0 0 35 12"
              xmlns="http://www.w3.org/2000/svg"
              className={classes.line}
            >
              <g stroke="white">
                <path d="M34 12V0" strokeWidth="0.5" />
              </g>
            </svg>
          </div>
        </div>

        <div
          className={`${classes.nav_overlay} container`}
          style={{ display: !navOpen ? "none" : "flex" }}
        >
          <ul className={` ${classes.nav_links}`}>
            <li className={classes.nav_item}>
              <div className={classes.title}>
                <div className={classes.heading}>pages</div>
                <div className={classes.content}>
                  <Link
                    className={classes.text}
                    href="/"
                    onClick={handleLinkClick}
                  >
                    HOME
                  </Link>
                  <Link
                    className={classes.text}
                    href="/about"
                    onClick={handleLinkClick}
                  >
                    ABOUT
                  </Link>
                  <Link
                    className={classes.text}
                    href="/speaking"
                    onClick={handleLinkClick}
                  >
                    SPEAKING
                  </Link>
                  <Link
                    className={classes.text}
                    href="/corporate-showreel"
                    onClick={handleLinkClick}
                  >
                    CORPORATE SHOWREEL
                  </Link>
                  <Link
                    className={classes.text}
                    href="/book"
                    onClick={handleLinkClick}
                  >
                    THE BOOK
                  </Link>
                  <Link
                    className={classes.text}
                    href="/contact"
                    onClick={handleLinkClick}
                  >
                    CONTACT
                  </Link>
                  <Link href="/contact" onClick={handleLinkClick}>
                    {" "}
                    <button className={classes.book}>
                      {" "}
                      BOOK LIZA TO SPEAK
                    </button>
                  </Link>
                </div>
              </div>
            </li>
            <li className={classes.nav_item}>
              <div className={classes.title}>
                <div className={classes.heading}>WELFARE</div>
                <div className={classes.content}>
                  <Link
                    className={classes.text}
                    href="/foundation"
                    onClick={handleLinkClick}
                  >
                    LIZA PAVLAKOS FOUNDATION
                  </Link>
                  <Link
                    className={classes.text}
                    passHref
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://mindhubdirectory.com/"
                    onClick={handleLinkClick}
                  >
                    MIND HUB DIRECTORY
                  </Link>
                </div>
              </div>
            </li>
            <li className={classes.nav_item}>
              <div className={classes.title}>
                <div className={classes.heading}> USEFUL LINKS</div>
                <div className={classes.content}>
                  <Link
                    className={classes.text}
                    href="https://melbourneluxurytailoring.com.au/"
                    passHref
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleLinkClick}
                  >
                    MELBOURNE LUXURY TAILORING
                  </Link>
                  <Link
                    className={classes.text}
                    href="/privacy-policy"
                    onClick={handleLinkClick}
                  >
                    PRIVACY POLICY
                  </Link>
                </div>
              </div>
            </li>
          </ul>

          <div className={classes.right}>
            <Image
              src={`/assets/Images/foundation/liza_third.jpeg`}
              alt={"liza_third"}
              fill
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
