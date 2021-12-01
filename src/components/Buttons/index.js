import React, { useCallback, useState } from "react";

const Button1 = React.memo(({ label }) => {
  console.log("btn1 rendered");
  return <button>{label}</button>;
});

const Button2 = React.memo(({ label, onClick }) => {
  console.log("btn2 rendered");
  return <button onClick={onClick}>{label}</button>;
});

export const Buttons = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <>
      <Button1 label="BTN1" />
      <Button2 label="BTN2" onClick={handleClick} />
      <h3>{count}</h3>
    </>
  );
};
