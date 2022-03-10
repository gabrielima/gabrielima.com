import { useState } from "react";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

const styles = {
  navWrapper: "max-w-7xl mx-auto relative pt-6 px-4 sm:px-6 lg:px-8",
  nav: "relative flex items-center justify-between sm:h-10",
  desktopNav: {
    links: "hidden md:block md:pr-4 md:space-x-8",
    link: "font-medium text-gray-500 hover:text-gray-900",
    socialLinks: "hidden md:flex md:pr-4 md:space-x-8 justify-around items-center",
    socialLink: "rounded text-gray-700 hover:text-gray-900 hover:bg-gray-100 p-3",
  },
  mobileNav: {
    container: "absolute z-10 top-0 inset-x-0 transition transform origin-top-right md:hidden",
    box: "rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden",
    close: "px-2 pt-2 flex items-center justify-between",
    links: "px-2 pt-2 pb-3 space-y-1",
    link: "block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50",
    socialLinks: "px-5 py-1 space-y-1 border-t-2 flex justify-around items-center",
    socialLink: "rounded text-gray-700 hover:text-gray-900 hover:bg-gray-100 p-3",
  },
  openCloseNavButton:
    "bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-500",
};
const navLinks: any = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
];
const social_media = [
  {
    href: "https://twitter.com/rabeloglr",
    label: "twitter",
    icon: <FaTwitter />,
  },
  { href: "https://github.com/gabrielima", label: "github", icon: <FaGithub /> },
  {
    href: "https://www.linkedin.com/in/gabrielima",
    label: "linkedin",
    icon: <FaLinkedin />,
  },
];

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className={styles.navWrapper}>
      <nav className={styles.nav} aria-label="Global">
        <NavHamburgerButton setNavOpen={setNavOpen} />
        <DesktopNav />
        <MobileNav navOpen={navOpen} setNavOpen={setNavOpen} />
      </nav>
    </div>
  );
};

const DesktopNav = () => (
  <>
    <div className={styles.desktopNav.links}>
      {navLinks.map((link: any, index: number) => (
        <a href={link.href} className={styles.desktopNav.link} key={index}>
          {link.label}
        </a>
      ))}
    </div>
    <div className={styles.desktopNav.socialLinks}>
      {social_media.map((link: any, index: number) => (
        <a
          href={link.href}
          className={styles.desktopNav.socialLink}
          target="_blank"
          rel="noreferrer noopener nofollow"
          key={index}
          aria-label={link.label}>
          {link.icon}
        </a>
      ))}
    </div>
  </>
);

const MobileNav = ({ navOpen, setNavOpen }: any) => (
  <div className={`${styles.mobileNav.container} ${navOpen ? "" : "hidden"}`}>
    <div className={styles.mobileNav.box}>
      <div className={styles.mobileNav.close}>
        <button className={styles.openCloseNavButton} type="button" onClick={() => setNavOpen(false)}>
          <span className="sr-only">Close main menu</span>
          <CloseNavIcon />
        </button>
      </div>

      <div className={styles.mobileNav.links}>
        {navLinks.map((link: any, index: number) => (
          <a href={link.href} className={styles.mobileNav.link} key={index}>
            {link.label}
          </a>
        ))}
      </div>

      <div className={styles.mobileNav.socialLinks}>
        {social_media.map((link: any, index: number) => (
          <a
            href={link.href}
            className={styles.mobileNav.socialLink}
            target="_blank"
            rel="noreferrer noopener nofollow"
            key={index}
            aria-label={link.label}>
            {link.icon}
          </a>
        ))}
      </div>
    </div>
  </div>
);

const NavHamburgerButton = ({ setNavOpen }: any) => (
  <div className="flex items-center flex-grow flex-shrink-0 md:hidden">
    <div className="-mr-2 flex items-center">
      <button
        type="button"
        className={styles.openCloseNavButton}
        aria-expanded="false"
        onClick={() => setNavOpen(true)}>
        <span className="sr-only">Open main menu</span>
        <OpenNavIcon />
      </button>
    </div>
  </div>
);

const OpenNavIcon = () => (
  <svg
    className="h-6 w-6"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    aria-hidden="true">
    <path strokeLinecap="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const CloseNavIcon = () => (
  <svg
    className="h-6 w-6"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    aria-hidden="true">
    <path strokeLinecap="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export default Header;
