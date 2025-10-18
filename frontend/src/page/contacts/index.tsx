import Input from "@/components/Input";
import styles from "./page.module.scss";
import cn from "classnames";
import Textarea from "@/components/Textarea";
import Button from "@/components/Button";
import Icons from "@/components/Icons";
import { contactsData } from "./data";
import { ContactItem } from "./types";

const ContactsPage = () => {
  return (
    <section className={styles.contactsPage}>
      <div className={styles.content}>
        <h1 className={cn(styles.title, "h1")}>Contact us</h1>
        <p className={cn(styles.text, "light-16")}>
          Send for us your request and we will get in touch with you as soon as
          possible
        </p>

        <ul className={styles.contacts}>
          {contactsData.map((contact: ContactItem) => (
            <li key={contact.id} className={styles.contact}>
              <div className={styles.icon}>
                <Icons iconName={contact.icon} />
              </div>
              <a
                className={cn(styles.link, "h3 text-secondary")}
                href={contact.href}
              >
                {contact.text}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <form className={styles.form} action="">
        <div className={styles.inputs}>
          <Input
            type="text"
            name="name"
            label="Name"
            placeholder="Your name"
            className={styles.input}
          />
          <Input
            type="text"
            name="email"
            label="E-mail"
            placeholder="Your email"
            className={styles.input}
          />
          <Textarea
            label="Message"
            placeholder="Your message"
            className={styles.textarea}
          />
        </div>

        <div className={styles.formFooter}>
          <Button className={cn(styles.button, "medium-16")} type="submit">
            Send request
          </Button>

          <p className={cn(styles.privacy, "regular-14 text-secondary")}>
            By sending request you agree to out Pivacy&Policy
          </p>
        </div>
      </form>
    </section>
  );
};

export default ContactsPage;
