import React from "react";

interface ISrat {
  size: number;
}
const Star = ({ size = 16 }: ISrat) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.6668 6.73331C14.7335 6.39998 14.4668 5.99998 14.1335 5.99998L10.3335 5.46665L8.60016 1.99998C8.5335 1.86665 8.46683 1.79998 8.3335 1.73331C8.00016 1.53331 7.60016 1.66665 7.40016 1.99998L5.7335 5.46665L1.9335 5.99998C1.7335 5.99998 1.60016 6.06665 1.5335 6.19998C1.26683 6.46665 1.26683 6.86665 1.5335 7.13331L4.26683 9.79998L3.60016 13.6C3.60016 13.7333 3.60016 13.8666 3.66683 14C3.86683 14.3333 4.26683 14.4666 4.60016 14.2666L8.00016 12.4666L11.4002 14.2666C11.4668 14.3333 11.6002 14.3333 11.7335 14.3333C11.8002 14.3333 11.8002 14.3333 11.8668 14.3333C12.2002 14.2666 12.4668 13.9333 12.4002 13.5333L11.7335 9.73331L14.4668 7.06665C14.6002 6.99998 14.6668 6.86665 14.6668 6.73331Z"
        fill="#FFCF55"
      />
    </svg>
  );
};

export default Star;