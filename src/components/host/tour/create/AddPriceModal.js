import Dialog from "@reach/dialog";
import React, { useEffect, useState } from "react";
import { Form } from "react-final-form";
import "../../../../common/css/dialog.css";
import { FieldInput, FieldSelect, FieldTextArea } from "./FieldsComponents";
import objectID from "bson-objectid";

function AddPriceModal({ close, fields, initialValues }) {
  const onSubmit = (formValues) => {
    if (formValues._id) {
      //update
      fields.update(initialValues.index, formValues);
    } else {
      //add
      fields.push({ ...formValues, _id: objectID().toString() });
    }
    close();
  };

  return (
    <Dialog onDismiss={close}>
      <Form
        onSubmit={onSubmit}
        validate={validation}
        initialValues={initialValues}
      >
        {(props) => (
          <form onSubmit={props.handleSubmit}>
            <div className="form-row">
              <div className="form-group mb-2">
                <FieldInput name="_id" htmlProperties={{ hidden: "true" }} />
                <label className="form-label">Nombre*</label>
                <FieldInput
                  name="name"
                  htmlProperties={{ className: "form-control" }}
                />
              </div>
              <div className="form-group mb-2">
                <label className="form-label">Descripción</label>
                <FieldTextArea name="description" />
              </div>
              <div className="form-group mb-2">
                <label className="form-label">Valido para x personas*</label>
                <FieldSelect
                  name="seatsQuantity"
                  options={[
                    { value: 1, text: "Valido para 1 persona" },
                    { value: 2, text: "Valido para 2 persona" },
                    { value: 3, text: "Valido para 3 persona" },
                    { value: 4, text: "Valido para 4 persona" },
                    { value: 5, text: "Valido para 5 persona" },
                    { value: 6, text: "Valido para 6 persona" },
                    { value: 7, text: "Valido para 7 persona" },
                    { value: 8, text: "Valido para 8 persona" },
                    { value: 9, text: "Valido para 9 persona" },
                    { value: 10, text: "Valido para 10 persona" },
                  ]}
                />
              </div>
              <div className="form-group mb-3">
                <label className="form-label ">Precio*</label>
                <FieldInput name="price" htmlProperties={{ type: "number" }} />
              </div>
            </div>
            <div class="modal-footer" style={{ padding: "0.5px" }}>
              <button className="btn btn-secondary" onClick={close}>
                Cerrar
              </button>
              {!initialValues?._id && (
                <button type="submit" className="btn btn-primary">
                  Guardar
                </button>
              )}
              {initialValues?._id && (
                <button type="submit" className="btn btn-primary">
                  Actualizar
                </button>
              )}
            </div>
          </form>
        )}
      </Form>
    </Dialog>
  );
}

const validation = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = "Este campo es requerido";
  }
  if (!values.seatsQuantity) {
    errors.seatsQuantity = "Este campo es requerido";
  }
  if (!values.price) {
    errors.price = "Este campo es requerido";
  }
  return errors;
};

export default AddPriceModal;
