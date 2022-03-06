import React, { useState } from "react";
import "./App.css";
import "./index.css";

function App() {
  //useState Hook for input fields
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });
  //Handler functions or input
  const HandleNameInput = (event) => {
    setValues({ ...values, name: event.target.value });
  };

  const HandleEmailInput = (event) => {
    setValues({ ...values, email: event.target.value });
  };
  const HandlePasswordInput = (event) => {
    setValues({ ...values, password: event.target.value });
  };
  //useState Hook for Submit
  const [submitted, setSubmitted] = useState(false);

  // useState Hook for Form Validity
  const [valid, setValid] = useState(false);

  //Submit Handler
  const HandleSubmit = (event) => {
    event.preventDefault();
    if (values.name && values.email && values.password) {
      setValid(true);
    }

    setSubmitted(true);
  };

  return (
    <>
      <div className="form-container">
        <form className="register-form" onSubmit={HandleSubmit}>
          {submitted && valid ? (
            <div className="Success-text">Success! Account Created.</div>
          ) : null}

          <input
            onChange={HandleNameInput}
            type="text"
            className="form-field"
            id="name"
            placeholder="Enter Name"
            name="name"
            value={values.name}
          />
          {submitted && !values.name ? (
            <span id="name-error">Please enter a valid name</span>
          ) : null}

          <input
            onChange={HandleEmailInput}
            type="email"
            className="form-field"
            id="email"
            placeholder="Enter email"
            name="email"
            value={values.email}
          />
          {submitted && !values.email ? (
            <span id="email-error">Please enter a valid email address </span>
          ) : null}
          <input
            onChange={HandlePasswordInput}
            type="password"
            className="form-field"
            id="password"
            placeholder="Enter Password"
            name="password"
            value={values.password}
          />
          {submitted && !values.password ? (
            <span id="password-error">Please enter a valid password</span>
          ) : null}

          <button className="form-field" type="submit">
            REGISTER
          </button>
        </form>
      </div>
    </>
  );
}

export default App;
