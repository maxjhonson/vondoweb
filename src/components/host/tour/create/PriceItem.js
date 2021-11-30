import { getIn } from "final-form";
import React from "react";
import { FieldDisplayText } from "./FieldsComponents";

function PriceItem({ priceDetail, edit, remove, index }) {
  return (
    <div class="text-block" style={{ padding: "0", marginBottom: "5px" }}>
      <div className="row">
        <div className="col-md-9">
          <p class="text-sm text-muted">
            <i class="fa fa-info fa-fw me-2"></i>{" "}
            <FieldDisplayText name={`${priceDetail}.name`} />
            <br />
            <i class="fa fa-users fa-fw me-2"></i>Valido para{" "}
            <FieldDisplayText name={`${priceDetail}.seatsQuantity`} /> Personas
            <br />
            <i class="fa fa-credit-card fa-fw me-2"></i>{" "}
            <FieldDisplayText name={`${priceDetail}.price`} />
          </p>
        </div>
        <div className="col-sm-3">
          <div class="col-sm-3 text-end">
            <button
              class="btn btn-link ps-0 text-primary collapsed"
              type="button"
              onClick={() => edit(index)}
              style={{ paddingTop: "0px" }}
            >
              Actualizar
            </button>
            <button
              class="btn btn-link ps-0 text-danger collapsed"
              type="button"
              onClick={() => remove(index)}
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

export default PriceItem;
