import React, { useEffect } from "react";
import PrincipalHeader from "../../../PrincipalHeader";
import CreationStepOne from "./CreationStepOne";
import GettingStart from "./GettingStart";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import CreationStepTwo from "./CreationStepTwo";
import { Form, Field, useFormState } from "react-final-form";
import validator from "validator";
import arrayMutators from "final-form-arrays";
import AddPlaceModal from "./AddPlaceModal";
import CreationStepThree from "./step-3/CreationStepThree";

function CreateTour(props) {
  const onSubmit = (formValues) => {
    console.log("onsubmint, createtor", formValues);
  };

  return (
    <React.Fragment>
      <PrincipalHeader />
      <Form
        onSubmit={onSubmit}
        mutators={{ ...arrayMutators }}
        validate={validate}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
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
  const titleErrors = [];
  const descriptionErrors = [];

  if (validator.isEmpty(value.title ?? "", { ignore_whitespace: true })) {
    titleErrors.push("Este campo no puede quedar vacío");
  }
  if (
    !validator.isByteLength(value.title?.trim() ?? "", { min: 6, max: 100 })
  ) {
    titleErrors.push(
      "La longitud de este campo debe ser entre 6 y 100 caracteres"
    );
  }
  if (!value.categories || value.categories?.length <= 0) {
    errors.categories = "Este campo no puede quedar vacío";
  }
  if (!value.petFriendly) {
    errors.petFriendly = "Este Campo no puede quedar vacío";
  }
  if (!value.description) {
    descriptionErrors.push("Este Campo no puede quedar vacío");
  }
  if (
    !validator.isByteLength(value.description?.trim() ?? "", {
      min: 50,
      max: 2000,
    })
  ) {
    descriptionErrors.push(
      "La longitud de este campo debe ser entre 50 y 2000 caracteres"
    );
  }

  if (!validator.isAfter(value.departureDate?.toString() ?? "")) {
    errors.departureDate = "Este campo debe ser mayor a la fecha de hoy";
  }

  if (
    validator.isBefore(
      value.returnDate?.toString() ?? "",
      value.departureDate?.toString() ?? ""
    )
  ) {
    errors.returnDate = "La Fecha de retorno debe ser mayor a la salida";
  }

  if (validator.isEmpty(value.currency ?? "")) {
    errors.currency = "Este campo no puede quedar vacío";
  }

  if (!value.prices && !Array.isArray(value.prices)) {
    errors.prices = "Debe definir al menos un precio";
  }

  if (titleErrors.length > 0) errors.title = titleErrors;
  if (descriptionErrors.length > 0) errors.description = descriptionErrors;
  return errors;
};

export default CreateTour;
