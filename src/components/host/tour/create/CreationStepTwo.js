import { setIn } from "final-form";
import React, { useState } from "react";
import { Field, useFormState } from "react-final-form";
import { FieldArray } from "react-final-form-arrays";
import { useNavigate } from "react-router";
import AddPriceModal from "./AddPriceModal";
import {
  InputWithValidation,
  TextAreaWithValidation,
} from "./FieldsComponents";

function CreationStepTwo() {
  const [isValidated, setIsValidated] = useState(false);
  const navigate = useNavigate();
  const formState = useFormState();
  const [currentIndex, setCurrentIndex] = useState({});

  const onNextClick = () => {
    window.$("#pricesModal").modal("show");

    //navigate("/paso-3");
  };
  const addPrice = () => {
    setCurrentIndex(-1);
    window.$("#pricesModal").modal("show");
  };
  return (
    <section className="py-5">
      <div className="container">
        <p className="subtitle text-primary">AGREGAR NUEVO TOUR</p>
        <h1 className="h2 mb-5">
          Precios y Lugares de Salida
          <span className="text-muted float-end">Paso 2</span>
        </h1>
        <div className="row form-block">
          <div className="col-lg-4">
            <h4>Detalles</h4>
            <p className="text-muted text-sm">
              Digitar lo importante detalles importantes.
            </p>
          </div>

          <div className="col-lg-7 ms-auto">
            <div className="row mb-3">
              <div className="form-group col-md-6">
                <label className="form-label">Moneda</label>
                <input className="form-control" type="text"></input>
              </div>
              <div className="form-group col-md-6">
                <label className="form-label">Cantidad de cupos</label>
                <div className="input-group">
                  <input className="form-control" type="text"></input>
                  <div className="input-group-append">
                    <span className="input-group-text">Personas</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal add prices */}
            <FieldArray name="prices">
              {({ fields }) => (
                <React.Fragment>
                  <AddPriceModal fields={fields} currentIndex={currentIndex} />
                  <label className="form-label">Detalle de Precios</label>
                  <table className="table table-striped table-sm">
                    <thead class="thead-light">
                      <tr>
                        <th style={{ width: "60%" }}>
                          <small>Titulo</small>
                        </th>
                        <th style={{ width: "20%" }}>
                          <small>Cupos</small>
                        </th>
                        <th style={{ width: "20%" }}>
                          <small> Precio</small>{" "}
                        </th>
                        <th style={{ width: "20%" }}></th>
                        <th style={{ width: "20%" }}></th>
                      </tr>
                    </thead>
                    <tbody>
                      {fields.map((name, index) => (
                        <tr>
                          <td>
                            <Field
                              name={`${name}.name`}
                              readonly
                              render={(props) => (
                                <span>
                                  <small> {props.input.value}</small>{" "}
                                </span>
                              )}
                            />
                          </td>
                          <td>
                            <Field
                              name={`${name}.seatsQuantity`}
                              readonly
                              render={(props) => (
                                <span>
                                  <small> {props.input.value}</small>{" "}
                                </span>
                              )}
                            />
                          </td>
                          <td>
                            <Field
                              name={`${name}.price`}
                              readonly
                              render={(props) => (
                                <span>
                                  <small> {props.input.value}</small>{" "}
                                </span>
                              )}
                            />
                          </td>
                          <td>
                            <button
                              type="button"
                              class="btn btn-primary btn-sm"
                              onClick={() => {
                                setCurrentIndex(index);
                                window.$("#pricesModal").modal("show");
                              }}
                              //onClick={() => fields.remove(index)}
                            >
                              <i class="fa fa-edit"></i>
                            </button>
                          </td>
                          <td>
                            <button
                              type="button"
                              class="btn btn-danger btn-sm"
                              onClick={() => fields.remove(index)}
                            >
                              <i class="fa fa-trash"></i>
                            </button>
                          </td>
                        </tr>
                      ))}
                      <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td colSpan={2}>
                          <button
                            onClick={addPrice}
                            className="btn btn-primary btn-sm"
                          >
                            Agregar
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </React.Fragment>
              )}
            </FieldArray>
            <div className="mb-4">
              <label className="form-label">Lugares de Salida</label>
              <div className="form-group">
                <Field
                  name="included"
                  render={(props) => (
                    <InputWithValidation
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
              onClick={() => {
                setIn(formState, "xd", "hola");
                console.log(formState);
              }}
            >
              Siguiente paso<i className="fa-chevron-right fa ms-2"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CreationStepTwo;
