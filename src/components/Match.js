import { useState, useContext } from "react";
import { HoroscopeContext } from "../context/HoroscopeContext";

const Match = () => {
  const [match, setMatch] = useState("false");
  const { sign } = useContext(HoroscopeContext);
  console.log(sign);
  function switchMatch() {
    if (match === "false") {
      setMatch("true");
    } else {
      setMatch("false");
    }
  }
  return (
    <div>
      <button onClick={switchMatch}>Match</button>

      {match === "true" && <div>{sign.match}</div>}
    </div>
  );
};

export default Match;
