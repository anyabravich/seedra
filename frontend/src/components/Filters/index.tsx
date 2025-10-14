import Accordion from "../Accordion";
import styles from "./page.module.scss";
import Input from "../Input";
import { checkboxes } from "./data";
import { IFilters } from "./types";

import RangeSlider from "../RangeSlider";

const Filters = ({ hideMobile }: IFilters) => {
  return (
    <aside
      className={`${styles.filters} ${hideMobile && styles.hideMobile}`}
    >
      <p className={`${styles.title} regular-14 ttu`}>Filters</p>
      <Accordion title="Seed type">
        <div className={styles.checkboxes}>
          {checkboxes.map(({ label }) => (
            <Input label={label} key={label} type="checkbox" name="seed-type" />
          ))}
        </div>
      </Accordion>
      <Accordion title="Featured">
        <div className={styles.checkboxes}>
          {checkboxes.map(({ label }) => (
            <Input label={label} key={label} type="checkbox" name="featured" />
          ))}
        </div>
      </Accordion>
      <Accordion title="Growing Conditions">
        <div className={styles.checkboxes}>
          {checkboxes.map(({ label }) => (
            <Input label={label} key={label} type="checkbox" name="condition" />
          ))}
        </div>
      </Accordion>
      <Accordion title="Price">
        <RangeSlider />
      </Accordion>
      <Accordion title="Use">
        <div className={styles.checkboxes}>
          {checkboxes.map(({ label }) => (
            <Input label={label} key={label} type="checkbox" name="use" />
          ))}
        </div>
      </Accordion>
      <Accordion title="Additional Characteristic">
        <div className={styles.checkboxes}>
          {checkboxes.map(({ label }) => (
            <Input
              label={label}
              key={label}
              type="checkbox"
              name="characteristic"
            />
          ))}
        </div>
      </Accordion>
    </aside>
  );
};

export default Filters;
