import Accordion from "../Accordion";
import styles from "./page.module.scss";
import Checkbox from "../Checkbox";
import { checkboxes } from "./data";
import { IFilters } from "./types";

import RangeSlider from "../RangeSlider";

const Filters = ({ hideMobile }: IFilters) => {
  return (
    <aside className={`${styles.filters} ${hideMobile && styles.hideMobile}`}>
      <p className={`${styles.title} regular-14 ttu`}>Filters</p>
      <Accordion title="Seed type">
        <div className={styles.checkboxes}>
          {checkboxes.map(({ label }) => (
            <Checkbox label={label} key={label} name="seed-type" />
          ))}
        </div>
      </Accordion>
      <Accordion title="Featured">
        <div className={styles.checkboxes}>
          {checkboxes.map(({ label }) => (
            <Checkbox label={label} key={label} name="featured" />
          ))}
        </div>
      </Accordion>
      <Accordion title="Growing Conditions">
        <div className={styles.checkboxes}>
          {checkboxes.map(({ label }) => (
            <Checkbox label={label} key={label} name="condition" />
          ))}
        </div>
      </Accordion>
      <Accordion title="Price">
        <RangeSlider />
      </Accordion>
      <Accordion title="Use">
        <div className={styles.checkboxes}>
          {checkboxes.map(({ label }) => (
            <Checkbox label={label} key={label} name="use" />
          ))}
        </div>
      </Accordion>
      <Accordion title="Additional Characteristic">
        <div className={styles.checkboxes}>
          {checkboxes.map(({ label }) => (
            <Checkbox label={label} key={label} name="characteristic" />
          ))}
        </div>
      </Accordion>
    </aside>
  );
};

export default Filters;
