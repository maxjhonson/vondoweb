import React from "react";
import { Field } from "react-final-form";
import { fieldAsText } from "./FieldsComponents";

function PlaceItem({ nameField, openAddPlaceModal, remove }) {
  return (
    <div class="text-block">
      <div class="row">
        <div class="col-sm-9">
          <div class="d-flex text-sm text-muted">
            <i class="fa fa-address-book fa-fw flex-shrink-0 me-2"></i>
            <div class="mt-n1">
              <Field
                name={`${nameField}.place`}
                render={(props) => <>{props.input.value}</>}
              />
              {" | "}
              <Field
                name={`${nameField}.street`}
                render={(props) => <>{props.input.value}</>}
              />
              {", "}
              <Field
                name={`${nameField}.state`}
                render={(props) => <>{props.input.value}</>}
              />
            </div>
          </div>
        </div>
        <div class="col-sm-3 text-end">
          <div class="mt-n1">
            <button
              style={{ paddingTop: "0px" }}
              class="btn btn-link  text-primary"
              type="button"
              onClick={openAddPlaceModal}
            >
              Actualizar
            </button>
            <button
              class="btn btn-link ps-0 text-danger collapsed"
              type="button"
              onClick={remove}
              style={{ paddingTop: "0px" }}
            >
              Eliminar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlaceItem;
