const styles = {
  footer: "text-gray-700 p-7 md:flex md:items-center md:justify-between md:p-10",
  copyright: "text-sm sm:text-center",
  menu: "flex flex-wrap items-center mt-3 text-sm  sm:mt-0",
  link: "hover:underline",
};

const navLinks: any = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
];

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
      {navLinks.map((link: any, index: number) => (
        <li key={index}>
          <a href={link.href} className={`${styles.link} ${index < navLinks.length - 1 && "mr-4 md:mr-6"}`}>
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  </footer>
);

export default Footer;
