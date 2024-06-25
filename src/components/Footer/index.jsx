import { Accordion, AccordionItem } from "@szhsin/react-accordion";
import styles from "./footer.module.scss";

export const Footer = () => {
  return (
    <section className={`${styles.root}`}>
      <div className={`${styles.body} container`}>
        <a className={`${styles.logo}`} href="#!">
          Gerey-Tuz
        </a>
        <Accordion>
          <AccordionItem header="Навигация">
            <ul>
              <li>
                <a href="#!">О нас</a>
              </li>
              <li>
                <a href="#!">Деятельность</a>
              </li>
              <li>
                <a href="#!"></a>
              </li>
              <li>
                <a href="#!"></a>
              </li>
            </ul>
            <a className={`${styles.item}`}></a>
          </AccordionItem>

          <AccordionItem header="Where does it come from?">
            <a className={`${styles.item}`}>
              Quisque eget luctus mi, vehicula mollis lorem. Proin fringilla vel
              erat quis sodales. Nam ex enim, eleifend venenatis lectus vitae,
              accumsan auctor mi.
            </a>
          </AccordionItem>

          <AccordionItem header="Why do we use it?">
            <a className={`${styles.item}`}>
              Suspendisse massa risus, pretium id interdum in, dictum sit amet
              ante. Fusce vulputate purus sed tempus feugiat.
            </a>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};
