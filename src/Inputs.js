import React, { useState } from "react";
import Input from "./Input";

export const Inputs = () => {
  const [counter, setCounter] = useState(150);

  return (
    <>
      <div>total: {counter}</div>
      <button type="button" onClick={() => setCounter(counter + 1)}>
        Add item
      </button>
      {Array.from(Array(counter)).map((_, i) => (
        <Input
          name={"name_" + i}
          required={true}
          validations="isNumeric"
          key={i}
          value={i > 150 ? undefined : `${i}`}
        />
      ))}
    </>
  );
};
