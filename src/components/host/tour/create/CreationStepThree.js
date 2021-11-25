import React, { useState } from "react";
import { Field, useFormState } from "react-final-form";
import { useNavigate } from "react-router";
import { TextAreaWithValidation } from "./FieldsComponents";

function CreationStepThree(props) {
  const [isValidated, setIsValidated] = useState(false);
  const navigate = useNavigate();
  const formState = useFormState();

  const onNextClick = () => {
    navigate("/paso-3");
  };
  return (
    <section className="py-5">
      <div className="container">
        <p className="subtitle text-primary">AGREGAR NUEVO TOUR</p>
        <h1 className="h2 mb-5">
          Detalles Importantes
          <span className="text-muted float-end">Paso 2</span>
        </h1>
        <form>
          <div className="row form-block">
            <div className="col-lg-4">
              <h4>Detalles extras</h4>
              <p className="text-muted text-sm">
                Digitar lo importante detalles importantes.
              </p>
            </div>
            <div className="col-lg-7 ms-auto">
              <div className="mb-4">
                <label className="form-label">Incluye</label>
                <div className="form-group">
                  <Field
                    name="included"
                    render={(props) => (
                      <TextAreaWithValidation
                        input={{ ...props.input, rows: 4 }}
                        meta={props.meta}
                        isValidated={isValidated}
                      />
                    )}
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="form-label">Recomendaciones</label>
                <div className="form-group">
                  <Field
                    name="recommendation"
                    render={(props) => (
                      <TextAreaWithValidation
                        input={{ ...props.input, rows: 4 }}
                        meta={props.meta}
                        isValidated={isValidated}
                      />
                    )}
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="form-label">Notas Importantes</label>
                <div className="form-group">
                  <Field
                    name="importantNote"
                    render={(props) => (
                      <TextAreaWithValidation
                        input={{ ...props.input, rows: 4 }}
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
            <div class="col text-center text-sm-start">
              <button
                type="button"
                class="btn btn-link text-muted"
                onClick={() => navigate("/paso-1")}
              >
                <i class="fa-chevron-left fa me-2"></i>Atrass
              </button>
            </div>
            <div className="col text-center text-sm-end">
              <button
                type="button"
                className="btn btn-primary px-3"
                href="user-add-2.html"
                onClick={onNextClick}
              >
                Siguiente paso<i className="fa-chevron-right fa ms-2"></i>
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default CreationStepThree;
