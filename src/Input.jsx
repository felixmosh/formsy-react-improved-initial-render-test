import { withFormsy as currentWithFormsy } from "formsy-react";
import { withFormsy as improvedWithFormsy } from "./improved-formsy/formsy-react.cjs.development";
import React from "react";

class MyInput extends React.Component {
  constructor(props) {
    super(props);
    this.changeValue = this.changeValue.bind(this);
  }

  changeValue(event) {
    // setValue() will set the value of the component, which in
    // turn will validate it and the rest of the form
    // Important: Don't skip this step. This pattern is required
    // for Formsy to work.
    this.props.setValue(event.currentTarget.value);
  }

  render() {
    // An error message is passed only if the component is invalid
    const errorMessage = this.props.errorMessage;
    const { name, value } = this.props;

    return (
      <div>
        <input
          name={name}
          onChange={this.changeValue}
          type="text"
          value={value || ""}
        />
        {name}
        <span>{errorMessage}</span>
      </div>
    );
  }
}

export default (window.location.search.includes("improved")
  ? improvedWithFormsy
  : currentWithFormsy)(MyInput);
