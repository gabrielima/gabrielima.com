import section from "../../styles/section";

const styles = {
  contact: "bg-sky-50",
  button:
    "w-full flex items-center justify-center px-20 py-4 rounded-md text-white bg-sky-600 hover:bg-sky-700 text-xl md:text-2xl font-bold",
  buttonGroup: "mt-10 sm:mt-14 mb-4 sm:mb-8 sm:flex justify-center",
};

const Contact = ({ email }: any) => (
  <section id="contact" className={styles.contact}>
    <div className={section.container}>
      <h3 className={section.title}>
        Contact
        <span className={section.titleUnderline}></span>
      </h3>

      <div className={styles.buttonGroup}>
        <div className="rounded-md shadow">
          <a href={`mailto:${email}`} className={`${styles.button}`}>
            {email}
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
