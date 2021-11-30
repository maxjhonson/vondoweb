import React, { useEffect, useState } from "react";
import {
  GoogleMap,
  LoadScript,
  Autocomplete,
  Marker,
} from "@react-google-maps/api";
import { Field, Form } from "react-final-form";
import { InputWithValidation } from "./FieldsComponents";
import { getAdreessObj } from "../../../../common/utility";
const containerStyle = {
  width: "100%",
  height: "400px",
};

function AddPlaceModal(props) {
  const [autocomplete, setAutoComplete] = useState(null);
  const [markerPosition, setMarkerPosition] = useState({}); //{lat,lng}
  const [center, setCenter] = useState({
    lat: 18.4725357,
    lng: -69.8923817,
  });

  const onLoad = (autocomplete) => {
    console.log("autocomplete: ", autocomplete);
    setAutoComplete(autocomplete);
  };

  const onPlaceChangedMutator = (args, state, utils) => {
    const placeComponent = autocomplete.getPlace();
    console.log(placeComponent);
    if (!placeComponent) return;
    const addressComponets = placeComponent.address_components;
    const address = getAdreessObj(addressComponets);
    const lat = placeComponent.geometry.location.lat();
    const lng = placeComponent.geometry.location.lng();
    setMarkerPosition({ lat, lng });
    setCenter({ lat, lng });
    utils.changeValue(state, "lat", () => lat);
    utils.changeValue(state, "lng", () => lng);
    utils.changeValue(state, "place", () => autocomplete.getPlace()?.name);
    utils.changeValue(state, "street", () => address.street);
    utils.changeValue(state, "number", () => address.streetNumber);
    utils.changeValue(state, "city", () => address.locality);
    utils.changeValue(state, "state", () => address.administrativeArea);
  };

  const renderMarker = () => {
    return <Marker position={markerPosition}></Marker>;
  };

  const onSubmit = (formValues) => {
    console.log(formValues);
  };

  const onSubmit = () => {
    const errorList = validate({ place, street, number, city, state });
    if (Object.keys(errorList).length === 0) {
    } else {
      console.log(errorList);
      setErrors(errorList);
    }
  };

  return (
    <div
      class="modal fade"
      id="addPlaceModal"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              New message
            </h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <Form
            mutators={{
              onPlaceChanged: onPlaceChangedMutator,
            }}
            onSubmit={onSubmit}
            validate={validate}
          >
            {(props) => (
              <form onSubmit={props.handleSubmit}>
                <div class="modal-body">
                  <LoadScript googleMapsApiKey="" libraries={["places"]}>
                    <Autocomplete
                      onLoad={onLoad}
                      onPlaceChanged={props.form.mutators.onPlaceChanged}
                      restrictions={{ country: ["do"] }}
                    >
                      <div class="mb-3 row">
                        <label className="form-label">Geolocalizacióna*</label>
                        <div class="col-sm-12">
                          <Field
                            name="geolocalization"
                            render={(props) =>
                              InputWithValidation(
                                props.input,
                                props.meta,
                                false
                              )
                            }
                          />
                        </div>
                        <div class="invalid-feedback">{}</div>
                      </div>
                    </Autocomplete>
                    <GoogleMap
                      mapContainerStyle={containerStyle}
                      center={center}
                      zoom={10}
                      // onDblClick={(e) =>
                      //   setMarkerPosition({
                      //     lat: e.latLng.lat(),
                      //     lng: e.latLng.lng(),
                      //   })
                      // }
                    >
                      {renderMarker()}
                    </GoogleMap>
                  </LoadScript>
                  <p style={{ lineHeight: "15px" }}>
                    <small>
                      NOTA: Si uno de los siguientes campos no se completó de
                      forma correcta favor corregirlos
                    </small>
                  </p>
                  <div class="mt-2 row">
                    <div className="col-md-12">
                      <label className="form-label">
                        Nombre del lugar/edificio*
                      </label>
                      <Field name="place">
                        {(props) => (
                          <InputWithValidation
                            input={props.input}
                            meta={props.meta}
                            isValidated={props.meta?.touched}
                          />
                        )}
                      </Field>
                    </div>
                  </div>
                  <div class="mt-2 row">
                    <div className="col-md-8">
                      <label className="form-label">Calle*</label>
                      <Field name="street">
                        {(props) => (
                          <InputWithValidation
                            input={props.input}
                            meta={props.meta}
                            isValidated={props.meta.touched}
                          />
                        )}
                      </Field>
                    </div>
                    <div className="col-md-4">
                      <label className="form-label">Numero</label>
                      <Field name="number">
                        {(props) => (
                          <InputWithValidation
                            input={props.input}
                            meta={props.meta}
                            isValidated={props.meta.touched}
                          />
                        )}
                      </Field>
                    </div>
                  </div>
                  <div class="mt-2 row">
                    <div className="col-md-6">
                      <label className="form-label">Ciudad*</label>
                      <Field name="city">
                        {(props) => (
                          <InputWithValidation
                            input={props.input}
                            meta={props.meta}
                            isValidated={props.meta.touched}
                          />
                        )}
                      </Field>
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Provincia*</label>
                      <Field name="state">
                        {(props) => (
                          <InputWithValidation
                            input={props.input}
                            meta={props.meta}
                            isValidated={props.meta.touched}
                          />
                        )}
                      </Field>
                    </div>
                  </div>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Cerrar
                  </button>
                  <button
                    type="button"
                    onClick={props.handleSubmit}
                    class="btn btn-primary"
                  >
                    Guardar
                  </button>
                </div>
              </form>
            )}
          </Form>
        </div>
      </div>
    </div>
  );
}

const validate = (formValues) => {
  const errors = {};
  if (!formValues.place) errors.place = "Este campo es requerido";
  if (!formValues.street) errors.street = "Este campo es requerido";
  if (!formValues.city) errors.city = "Este campo es requerido";
  if (!formValues.state) errors.state = "Este campo es requerido";
  return errors;
};

export default AddPlaceModal;
