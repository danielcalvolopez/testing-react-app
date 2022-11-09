import React, { useState } from "react";
import Output from "./Output";

const Header = () => {
  const [changedText, setChangedText] = useState(false);

  const changTextHandler = () => {
    setChangedText(!changedText);
  };

  return (
    <div>
      <h2>Header!</h2>
      {!changedText ? (
        <Output>This is the description</Output>
      ) : (
        <Output>This text has changed</Output>
      )}
      <button onClick={changTextHandler}>Change Text</button>
    </div>
  );
};

export default Header;
