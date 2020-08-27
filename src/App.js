import React, { useState } from "react";
import "./styles.css";
import CurrentFormsy from "formsy-react";
import ImprovedFormsy from "./improved-formsy/formsy-react.umd";
import { Inputs } from "./Inputs";

export default function App() {
  const [isValid, setValid] = useState(false);

  const Formsy = window.location.search.includes("improved")
    ? ImprovedFormsy
    : CurrentFormsy;

  return (
    <div className="App">
      <div>{isValid ? "valid" : "invalid"}</div>
      <Formsy
        onValid={() => setValid(true)}
        onInvalid={() => {
          debugger;
          setValid(false);
        }}
      >
        <Inputs />
      </Formsy>
    </div>
  );
}
