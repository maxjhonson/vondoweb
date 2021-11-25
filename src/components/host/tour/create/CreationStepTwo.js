import React from "react";
import { useNavigate } from "react-router";

function CreationStepTwo(props) {
  const navigate = useNavigate();
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
                  <textarea className="form-control" rows="4" />
                </div>
              </div>
              <div className="mb-4">
                <label className="form-label">Recomendaciones</label>
                <div className="form-group">
                  <textarea className="form-control" rows="4" />
                </div>
              </div>
              <div className="mb-4">
                <label className="form-label">Notas Importantes</label>
                <div className="form-group">
                  <textarea className="form-control" rows="4" />
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
                onClick={() => navigate("/paso-3")}
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

export default CreationStepTwo;
