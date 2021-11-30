import React, { useState } from "react";
import { useFormState } from "react-final-form";
import { FieldArray } from "react-final-form-arrays";
import { useNavigate } from "react-router";
import AddPlaceModal from "./AddPlaceModal";
import AddPriceModal from "./AddPriceModal";
import { FieldInput, FieldSelect } from "./FieldsComponents";
import PlaceItem from "./PlaceItem";
import PriceItem from "./PriceItem";

const modalInitValues = {
  isOpen: false,
  formValues: null,
};

function CreationStepTwo() {
  const [isValidated, setIsValidated] = useState(false);
  const navigate = useNavigate();
  const formState = useFormState();
  const [addPlaceModalProps, setAddPlaceModalProps] = useState(modalInitValues);
  const [addPriceModalProps, setAddPriceModalProps] = useState(modalInitValues);

  const closeAddPlaceModal = () => {
    setAddPlaceModalProps((curr) => {
      return { ...curr, isOpen: false, formValues: null };
    });
  };

  const openAddPlaceModal = (index) => {
    const formValues = index >= 0 ? formState.values.places[index] : null;
    setAddPlaceModalProps((curr) => {
      return { ...curr, isOpen: true, formValues, index };
    });
  };

  const closeAddPrice = () => {
    setAddPriceModalProps((curr) => {
      return { ...curr, isOpen: false, formValues: null };
    });
  };

  const openAddPrice = (index) => {
    const formValues = index >= 0 ? formState.values.prices[index] : null;
    setAddPriceModalProps((curr) => {
      return { ...curr, isOpen: true, formValues: { ...formValues, index } };
    });
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
                <FieldSelect
                  name="currency"
                  htmlProperties={{ className: "form-control" }}
                  options={[
                    { value: "DOP", text: "DOP" },
                    { value: "USD", text: "USD" },
                  ]}
                />
              </div>
              <div className="form-group col-md-6">
                <label className="form-label">Cupos disponibles</label>
                <div className="input-group">
                  <FieldInput
                    name="quantity"
                    htmlProperties={{
                      className: "form-control",
                      type: "number",
                    }}
                  />
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
                  {addPriceModalProps.isOpen && (
                    <AddPriceModal
                      fields={fields}
                      close={closeAddPrice}
                      add={fields}
                      initialValues={addPriceModalProps.formValues}
                    />
                  )}

                  <label className="form-label">Detalle de Precios</label>
                  {fields.map((name, index) => {
                    return (
                      <PriceItem
                        index={index}
                        edit={() => openAddPrice(index)}
                        remove={fields.remove}
                        priceDetail={name}
                      />
                    );
                  })}
                  <div className=" text-end">
                    <button
                      class="btn btn-link btn-collapse ps-0 text-muted"
                      type="button"
                      onClick={() => openAddPrice()}
                    >
                      Agregar Precio
                    </button>
                  </div>
                </React.Fragment>
              )}
            </FieldArray>
            <div className="mb-4">
              <label className="form-label mb-3">Lugares de Salida</label>
              <FieldArray name="places">
                {({ fields }) => (
                  <React.Fragment>
                    {addPlaceModalProps.isOpen && (
                      <AddPlaceModal
                        add={fields.push}
                        update={fields.update}
                        close={closeAddPlaceModal}
                        initialValues={addPlaceModalProps.formValues}
                      />
                    )}
                    {fields.map((name, index) => (
                      <PlaceItem
                        nameField={name}
                        openAddPlaceModal={() => openAddPlaceModal(index)}
                        remove={() => fields.remove(index)}
                      />
                    ))}
                    <div className=" text-end">
                      <button
                        class="btn btn-link btn-collapse ps-0 text-muted"
                        type="button"
                        onClick={() => openAddPlaceModal()}
                      >
                        Agregar Lugar
                      </button>
                    </div>
                  </React.Fragment>
                )}
              </FieldArray>
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
