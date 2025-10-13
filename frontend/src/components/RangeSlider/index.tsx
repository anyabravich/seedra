"use client";

import React, { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

import styles from "./page.module.scss";
import Icons from "../Icons";

const RangeSlider = () => {
  const [from, setFrom] = useState(0);
  const [to, setTo] = useState(100);
  return (
    <div className={styles["range-slider"]}>
      <div className={styles["range-slider__fields"]}>
        <div className={styles["range-slider__field"]}>
          <label
            className={`${styles["range-slider__label"]} regular-14 text-secondary`}
          >
            From
          </label>
          <div className={styles["range-slider__input-wrapper"]}>
            <input
              className={styles["range-slider__input"]}
              type="number"
              value={from}
              onChange={(e) => setFrom(parseInt(e.target.value))}
            />
          </div>
        </div>
        <div className={styles["range-slider__line"]}>
          <Icons iconName="range-line" />
        </div>
        <div className={styles["range-slider__field"]}>
          <label
            className={`${styles["range-slider__label"]} regular-14 text-secondary`}
          >
            To
          </label>
          <div className={styles["range-slider__input-wrapper"]}>
            <input
              className={styles["range-slider__input"]}
              type="number"
              value={to}
              onChange={(e) => setFrom(parseInt(e.target.value))}
            />
          </div>
        </div>
      </div>
      <Slider
        defaultValue={from}
        value={[from, to]}
        min={0}
        max={100}
        onChange={(value) => {
          setFrom(Array.isArray(value) ? value[0] : value);
        }}
      />
    </div>
  );
};

export default RangeSlider;
