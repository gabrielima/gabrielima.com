const styles = {
  hero: "max-w-7xl mx-auto lg:w-full pb-8 sm:pb-16 lg:pb-18 xl:pb-20 px-4 sm:px-6 lg:px-8 mt-10 sm:mt-12 md:mt-16 lg:mt-20 xl:mt-28",
  title: "text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl",
  subtitle: "mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl mx-auto md:mt-5 md:text-xl",
  button:
    "w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md",
  button1: "text-white bg-sky-600 hover:bg-sky-700 md:text-lg",
  button2: "text-sky-700 bg-sky-100 hover:bg-sky-200 md:text-lg",
  buttonGroup: "mt-5 sm:mt-8 sm:flex justify-center",
};

const Hero = () => (
  <section id="hero" className={styles.hero}>
    <div className="text-center">
      <h1 className={styles.title}>
        <span>Gabriel</span> <span className="text-sky-600">Lima</span>
      </h1>

      <p className={styles.subtitle}>Computer scientist. Full-stack developer. All things web.</p>

      <div className={styles.buttonGroup}>
        <div className="rounded-md shadow">
          <a href="#contact" className={`${styles.button} ${styles.button1}`}>
            Contact
          </a>
        </div>
        <div className="mt-3 sm:mt-0 sm:ml-3">
          <a href="#" className={`${styles.button} ${styles.button2}`}>
            Resume
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
