import React, { useState } from "react";

function Toggle() {
  const [isOn, setIsOn] = useState(false);
  const handleClick = () => setIsOn(!isOn);

  return <button onClick={handleClick} style={{ background: isOn ? "red" : "white" }}>{isOn ? "ON" : "OFF"}</button>;
}

export default Toggle;
