import React from "react";
import { useNavigate } from "react-router";

function GettingStart(props) {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <section className="py-5 py-lg-7">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <p className="subtitle text-primary">Agregar Nuevo Tour</p>
              <h1 className="h2 mb-5">¡Empecemos!</h1>
              <p className="text-muted">
                His room, a proper human room although a little too small, lay
                peacefully between its four familiar walls. A collection of
                textile samples lay spread out on the table.
              </p>
              <p className="text-muted mb-5">
                Samsa was a travelling salesman - and above it there hung a
                picture that he had recently cut out of an illustrated magazine
                and housed in a nice, gilded frame.
              </p>
              <p className="mb-5 mb-lg-0">
                {" "}
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    navigate("/paso-1");
                  }}
                >
                  Agregar Tour
                </button>
              </p>
            </div>
            <div className="col-lg-5 ms-auto d-flex align-items-center">
              <img
                className="img-fluid"
                src="img/illustration/undraw_celebration_0jvk.svg"
                alt=""
                style={{ width: "400px;" }}
              />
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default GettingStart;
