"use client";

import { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

import styles from "./page.module.scss";
import Icons from "../Icons";

const RangeSlider = () => {
  const [from, setFrom] = useState(0);
  const [to, setTo] = useState(100);
  return (
    <div className={styles.root}>
      <div className={styles.fields}>
        <div className={styles.field}>
          <label
            className={`regular-14 text-secondary`}
          >
            From
          </label>
          <div className={styles.inputWrapper}>
            <input
              className={styles.input}
              type="number"
              value={from}
              onChange={(e) => setFrom(parseInt(e.target.value))}
            />
          </div>
        </div>
        <div className={styles.line}>
          <Icons iconName="range-line" />
        </div>
        <div className={styles.field}>
          <label
            className={`regular-14 text-secondary`}
          >
            To
          </label>
          <div className={styles.inputWrapper}>
            <input
              className={styles.input}
              type="number"
              value={to}
              onChange={(e) => setTo(parseInt(e.target.value))}
            />
          </div>
        </div>
      </div>
      <Slider
        className={styles.slider}
        range
        defaultValue={[from, to]}
        value={[from, to]}
        min={0}
        max={100}
        onChange={(value) => {
          if (Array.isArray(value)) {
            setFrom(value[0]);
            setTo(value[1]);
          } else {
            setFrom(value);
          }
        }}
      />
    </div>
  );
};

export default RangeSlider;
