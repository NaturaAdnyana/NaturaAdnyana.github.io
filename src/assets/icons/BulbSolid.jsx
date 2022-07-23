import React from "react";

const BulbSolid = (props) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        {...props}
      >
        <path d="M 10 6 z z z z z M 8 16 v -1 h 4 v 1 a 2 2 0 1 1 -4 0 z M 12 14 c 0.015 -0.34 0.208 -0.646 0.477 -0.859 a 4 4 0 1 0 -4.954 0 c 0.27 0.213 0.462 0.519 0.476 0.859 h 4.002 z" />
      </svg>
    </>
  );
};

export default BulbSolid;
