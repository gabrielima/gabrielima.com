const styles = {
  footer: "p-7 md:flex md:items-center md:justify-between md:p-10",
  copyright: "text-sm sm:text-center",
  menu: "flex flex-wrap items-center mt-3 text-sm  sm:mt-0",
};

const Footer = () => (
  <footer className={styles.footer}>
    <span className={styles.copyright}>
      © 2022{" "}
      <a href="https://flowbite.com" className="hover:underline">
        gabrielima.com
      </a>
      . All Rights Reserved.
    </span>
    <ul className={styles.menu}>
      <li>
        <a href="#" className="mr-4 hover:underline md:mr-6 ">
          About
        </a>
      </li>
      <li>
        <a href="#" className="mr-4 hover:underline md:mr-6">
          Privacy Policy
        </a>
      </li>
      <li>
        <a href="#" className="mr-4 hover:underline md:mr-6">
          Licensing
        </a>
      </li>
      <li>
        <a href="#" className="hover:underline">
          Contact
        </a>
      </li>
    </ul>
  </footer>
);

export default Footer;
