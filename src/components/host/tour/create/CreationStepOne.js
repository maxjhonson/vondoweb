import React, { useEffect, useState } from "react";
import { Field, useFormState } from "react-final-form";
import { useNavigate } from "react-router";
import {
  InputWitValidation,
  RadioListWithValidation,
  SelectWithvalidation,
  TextAreaWithValidation,
} from "./FieldsComponents";

const CreationStepOne = () => {
  const navigate = useNavigate();
  const [isValidated, setIsValidated] = useState(false);
  const formState = useFormState();

  const onNextClick = () => {
    setIsValidated(true);
    if (!formState.errors.title) {
      navigate("/paso-2");
    }
  };
  useEffect(() => {
    window.$("#categories_id").selectpicker();
    window.$("#rr").datepicker();
  }, []);
  return (
    <section className="py-5">
      <input id="rr" />
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
              <label className="form-label" for="form_name">
                Nombre del Tour
              </label>
              <Field
                name="title"
                className="form-control is-invalid"
                render={(props) => (
                  <InputWitValidation
                    input={props.input}
                    meta={props.meta}
                    isValidated={isValidated}
                  />
                )}
              />
            </div>
            <div className="mb-4">
              <label className="form-label" for="form_type">
                Categorías
              </label>
              <Field
                name="categories"
                id="los"
                type="select"
                multiple
                render={(props) => (
                  <SelectWithvalidation
                    input={{ ...props.input, id: "categories_id" }}
                    meta={props.meta}
                    isValidated={isValidated}
                    options={[
                      { value: "fasfafs", label: "Acampar" },
                      { value: "fasfsadsf", label: "Internacional" },
                      { value: "fassfasfafa", label: "Aventura" },
                    ]}
                  />
                )}
              />
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
