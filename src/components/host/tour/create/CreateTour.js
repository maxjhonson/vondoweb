import React from "react";
import PrincipalHeader from "../../../PrincipalHeader";
import CreationStepOne from "./CreationStepOne";
import GettingStart from "./GettingStart";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import CreationStepTwo from "./CreationStepTwo";
import CreationStepThree from "./CreationStepThree";
import { Form, Field } from "react-final-form";

function CreateTour(props) {
  const onSubmit = (formValues) => {
    console.log(formValues);
  };
  return (
    <React.Fragment>
      <PrincipalHeader />
      <Form
        onSubmit={onSubmit}
        validate={validate}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <button type="submit">Try</button>
            <Field
              name="firstName"
              component="input"
              placeholder="First Name"
            />
            <MemoryRouter>
              <Routes>
                <Route path="/" element={<GettingStart />} />
                <Route path="/paso-1" element={<CreationStepOne />} />
                <Route path="/paso-2" element={<CreationStepTwo />} />
                <Route path="/paso-3" element={<CreationStepThree />} />
              </Routes>
            </MemoryRouter>
          </form>
        )}
      ></Form>
    </React.Fragment>
  );
}

const validate = (value) => {
  const errors = {};
  if (!value.title) {
    errors.title = "Este campo no puede quedar vacío";
  }
  return errors;
};

export default CreateTour;
