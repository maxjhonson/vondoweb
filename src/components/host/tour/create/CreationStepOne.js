import React, { useEffect, useState } from "react";
import ReactDatePicker from "react-datepicker";
import { Field, useFormState } from "react-final-form";
import { useNavigate } from "react-router";
import {
  DatePickerWithValidation,
  FieldInput,
  FieldSelectMultiple,
  InputWithValidation,
  RadioListWithValidation,
  SelectWithvalidation,
  TextAreaWithValidation,
} from "./FieldsComponents";

const CreationStepOne = () => {
  const navigate = useNavigate();
  const [isValidated, setIsValidated] = useState(false);
  const formState = useFormState();
  const [startDate, setStartDate] = useState(new Date());
  const onNextClick = () => {
    if (
      !formState.errors.title &&
      !formState.errors.categories &&
      !formState.errors.departureDate &&
      !formState.errors.returnDate &&
      !formState.errors.petFriendly &&
      !formState.errors.description
    ) {
      navigate("/paso-2");
    }
  };
  useEffect(() => {
    window.$("#categories_id").selectpicker();
  }, []);
  return (
    <section className="py-5">
      <div className="container">
        <p className="subtitle text-primary">AGREGAR NUEVO TOUR</p>
        <h1 className="h2 mb-5">
          Iformación Basica <span className="text-muted float-end">Paso 1</span>
        </h1>
        <div className="row form-block">
          <div className="col-lg-4">
            <h4>Básico</h4>
            <p className="text-muted text-sm">
              Digitar lo importante de tener una informacion basica clara.
            </p>
          </div>
          <div className="col-lg-7 ms-auto">
            <div className="mb-4">
              <label className="form-label">Nombre del Tour</label>
              <FieldInput name="title" />
            </div>
            <div className="mb-4">
              <label className="form-label" for="form_type">
                Categorías
              </label>
              <FieldSelectMultiple
                name="categories"
                options={[
                  { value: "fasfafs", text: "Acampar" },
                  { value: "fasfsadsf", text: "Internacional" },
                  { value: "fassfasfafa", text: "Aventura" },
                ]}
              />
            </div>
            <div className="row">
              <div className="col-lg-6">
                <label className="form-label">Fecha de Salida</label>
                <Field
                  name="departureDate"
                  type="input"
                  render={(props) => (
                    <DatePickerWithValidation
                      input={props.input}
                      isValidated={isValidated}
                      meta={props.meta}
                    />
                  )}
                />
              </div>
              <div className="col-lg-6">
                <label className="form-label">Fecha de Retorno</label>
                <Field
                  name="returnDate"
                  type="input"
                  render={(props) => (
                    <DatePickerWithValidation
                      input={props.input}
                      meta={props.meta}
                      isValidated={isValidated}
                    />
                  )}
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="form-label">¿Mascotas permitidas?</label>
              <RadioListWithValidation
                name="petFriendly"
                errors={formState.errors.petFriendly}
                isValidated={isValidated}
                values={[
                  { value: "yes", label: "yes" },
                  { value: "no", label: "no" },
                ]}
              />
            </div>
            <div className="mb-4">
              <label className="form-label">Descripción del viaje</label>
              <div className="form-group">
                <Field
                  name="description"
                  render={(props) => (
                    <TextAreaWithValidation
                      input={{ ...props.input, rows: 8 }}
                      meta={props.meta}
                      isValidated={isValidated}
                    />
                  )}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row form-block flex-column flex-sm-row">
          <div className="col text-center text-sm-start"></div>
          <div className="col text-center text-sm-end">
            <button
              type="submit"
              className="btn btn-primary px-3"
              href="user-add-2.html"
              onClick={onNextClick}
            >
              Siguiente paso<i className="fa-chevron-right fa ms-2"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreationStepOne;
