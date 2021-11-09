import React from "react";

import "./styles.css";

export const Button = (props) => {
  const { onPress, label, draw } = props;
  // ...
  console.log(props);
  return (
    <button className="my-button" onPress={onPress}>
      {draw('button')}
    </button>
  );
};
