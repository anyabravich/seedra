"use client";

import { FC } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

import styles from "./page.module.scss";
import Icons from "../Icons";
import { IRangeSlider } from "./types";

const RangeSlider: FC<IRangeSlider> = ({
  value = [0, 100],
  onChange,
  min = 0,
  max = 100,
  className,
}) => {
  const [from, to] = value;

  const handleFromChange = (newFrom: number) => {
    if (onChange) {
      onChange([Math.min(newFrom, to), to]);
    }
  };

  const handleToChange = (newTo: number) => {
    if (onChange) {
      onChange([from, Math.max(newTo, from)]);
    }
  };

  const handleSliderChange = (sliderValue: number | number[]) => {
    if (onChange && Array.isArray(sliderValue)) {
      onChange([sliderValue[0], sliderValue[1]]);
    }
  };

  return (
    <div className={`${styles.root} ${className || ""}`}>
      <div className={styles.fields}>
        <div className={styles.field}>
          <label className={`regular-14 text-secondary`}>From</label>
          <div className={styles.inputWrapper}>
            <input
              className={styles.input}
              type="number"
              value={from}
              min={min}
              max={max}
              onChange={e => handleFromChange(parseInt(e.target.value) || min)}
            />
          </div>
        </div>
        <div className={styles.line}>
          <Icons iconName="range-line" />
        </div>
        <div className={styles.field}>
          <label className={`regular-14 text-secondary`}>To</label>
          <div className={styles.inputWrapper}>
            <input
              className={styles.input}
              type="number"
              value={to}
              min={min}
              max={max}
              onChange={e => handleToChange(parseInt(e.target.value) || max)}
            />
          </div>
        </div>
      </div>
      <Slider
        className={styles.slider}
        range
        value={[from, to]}
        min={min}
        max={max}
        onChange={handleSliderChange}
      />
    </div>
  );
};

export default RangeSlider;
export type { IRangeSlider } from "./types";
