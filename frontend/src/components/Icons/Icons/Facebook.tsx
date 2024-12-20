import React from "react";
import styles from "../page.module.scss";

const Facebook = () => {
  return (
    <svg
      className={styles.icon__svg}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 12.0558C2 17.0275 5.61083 21.1617 10.3333 22V14.7775H7.83333V12H10.3333V9.7775C10.3333 7.2775 11.9442 5.88917 14.2225 5.88917C14.9442 5.88917 15.7225 6 16.4442 6.11083V8.66667H15.1667C13.9442 8.66667 13.6667 9.2775 13.6667 10.0558V12H16.3333L15.8892 14.7775H13.6667V22C18.3892 21.1617 22 17.0283 22 12.0558C22 6.525 17.5 2 12 2C6.5 2 2 6.525 2 12.0558Z"
        fill="#70737C"
      />
    </svg>
  );
};

export default Facebook;
