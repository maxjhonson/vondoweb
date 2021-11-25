import React from "react";

function CreationStepThree(props) {
  return (
    <section className="py-5">
      <div className="container">
        <p className="subtitle text-primary">AGREGAR NUEVO TOUR</p>
        <h1 className="h2 mb-5">
          Fechas, Locaciones y Precios
          <span className="text-muted float-end">Paso 3</span>{" "}
        </h1>
        <form>
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
                  Fecha de Salida
                </label>
                <input className="form-control" name="name" id="form_name" />
              </div>
              <div className="mb-4">
                <label className="form-label" for="form_type">
                  Categoría
                </label>
                <select
                  className="selectpicker form-control"
                  name="type"
                  id="form_type"
                  data-style="btn-selectpicker"
                  title=""
                  multiple
                  aria-describedby="propertyTypeHelp"
                >
                  <option value="type_0">Acampar </option>
                  <option value="type_1">Playa </option>
                  <option value="type_2">Familiar </option>
                </select>
              </div>
              <div className="mb-4">
                <label className="form-label">¿Mascotas permitidas?</label>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="guests_0"
                    name="guests"
                  />
                  <label className="form-check-label" for="guests_0">
                    Si
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    id="guests_1"
                    name="guests"
                  />
                  <label className="form-check-label" for="guests_1">
                    No
                  </label>
                </div>
              </div>
              <div className="mb-4">
                <label className="form-label">Descripción del viaje</label>
                <div className="form-group">
                  <textarea classNameName="form-control" rows="8" />
                </div>
              </div>
            </div>
          </div>
          <div className="row form-block flex-column flex-sm-row">
            <div className="col text-center text-sm-start"></div>
            <div className="col text-center text-sm-end">
              <a className="btn btn-primary px-3" href="user-add-2.html">
                Siguiente paso<i className="fa-chevron-right fa ms-2"></i>
              </a>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default CreationStepThree;
