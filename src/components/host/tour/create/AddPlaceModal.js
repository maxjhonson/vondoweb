import React, { useEffect, useState } from "react";
import {
  GoogleMap,
  LoadScript,
  Autocomplete,
  Marker,
} from "@react-google-maps/api";
import { Field, Form } from "react-final-form";
<<<<<<< HEAD
import { FieldInput, InputWithValidation } from "./FieldsComponents";
import { getAddressFormatted } from "../../../../common/utility";
import reactDom from "react-dom";
import { Dialog, DialogOverlay, DialogContent } from "@reach/dialog";
import "../../../../common/css/dialog.css";

=======
import { InputWithValidation } from "./FieldsComponents";
import { getAdreessObj } from "../../../../common/utility";
>>>>>>> 6d0cef8e60e42b3cddc32b244051afcccc94f3d4
const containerStyle = {
  width: "100%",
  height: "400px",
};

<<<<<<< HEAD
function AddPlaceModal({ close, initialValues, add, update }) {
=======
function AddPlaceModal(props) {
>>>>>>> 6d0cef8e60e42b3cddc32b244051afcccc94f3d4
  const [autocomplete, setAutoComplete] = useState(null);
  const [markerPosition, setMarkerPosition] = useState({}); //{lat,lng}
  const [center, setCenter] = useState({
    lat: 18.4725357,
    lng: -69.8923817,
  });

  const onLoad = (autocomplete) => {
    setAutoComplete(autocomplete);
  };

  const onPlaceChangedMutator = (args, state, utils) => {
    const placeComponent = autocomplete.getPlace();
    if (!placeComponent) return;
    const addressFormatted = getAddressFormatted(placeComponent);
    updateFields(state, utils, addressFormatted);
  };

  const updateFields = (state, utils, placeObj) => {
    utils.changeValue(state, "lat", () => placeObj.lat);
    utils.changeValue(state, "lng", () => placeObj.lng);
    utils.changeValue(state, "place", () => placeObj.place);
    utils.changeValue(state, "street", () => placeObj.street);
    utils.changeValue(state, "number", () => placeObj.number);
    utils.changeValue(state, "city", () => placeObj.city);
    utils.changeValue(state, "state", () => placeObj.state);
    utils.changeValue(state, "geolocalization", () => placeObj.geolocalization);
    setCenter({ lat: placeObj.lat, lng: placeObj.lng });
  };

  const renderMarker = (values) => {
    const { lat, lng } = values;
    return <Marker position={{ lat, lng }}></Marker>;
  };

  const onMapDobleClickMutator = async (args, state, utils) => {
    const lat = args[0].latLng.lat();
    const lng = args[0].latLng.lng();
    utils.changeValue(state, "lat", () => lat);
    utils.changeValue(state, "lng", () => lng);
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${process.env.REACT_APP_GOOGLEMAPS_API}`
    );
    const mapsComponent = await response.json();
    const addressFormatted = getAddressFormatted(mapsComponent.results[0]);
    updateFields(state, utils, { ...addressFormatted, lat, lng });
  };

  const onSubmit = (formValues) => {
    if (initialValues) {
      update(initialValues.index, formValues);
    } else {
      add(formValues);
    }
    close();
  };

  return (
    <Dialog
      style={{ padding: "0px", maxWidth: "500px" }}
      onDismiss={close}
      isOpen={true}
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Registrar Lugar de Salida</h5>
            <button
              type="button"
              class="close"
              aria-label="Close"
              onClick={close}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <Form
            mutators={{
              onPlaceChanged: onPlaceChangedMutator,
              onMapDobleClick: onMapDobleClickMutator,
            }}
            onSubmit={onSubmit}
            validate={validate}
<<<<<<< HEAD
            initialValues={initialValues}
=======
>>>>>>> 6d0cef8e60e42b3cddc32b244051afcccc94f3d4
          >
            {(props) => (
              <form onSubmit={props.handleSubmit}>
                <div class="modal-body">
                  <LoadScript
                    googleMapsApiKey={process.env.REACT_APP_GOOGLEMAPS_API}
                    libraries={["places"]}
                  >
                    <Autocomplete
                      onLoad={onLoad}
                      onPlaceChanged={props.form.mutators.onPlaceChanged}
                      restrictions={{ country: ["do"] }}
                    >
                      <div class="mb-3 row">
                        <label className="form-label">Geolocalización*</label>
                        <div class="col-sm-12">
                          <FieldInput name="geolocalization" />
                        </div>
                        <div class="invalid-feedback">{}</div>
                      </div>
                    </Autocomplete>
                    <GoogleMap
                      mapContainerStyle={containerStyle}
                      center={center}
                      zoom={10}
<<<<<<< HEAD
                      onDblClick={props.form.mutators.onMapDobleClick}
                    >
                      {renderMarker(props.values)}
=======
                      // onDblClick={(e) =>
                      //   setMarkerPosition({
                      //     lat: e.latLng.lat(),
                      //     lng: e.latLng.lng(),
                      //   })
                      // }
                    >
                      {renderMarker()}
>>>>>>> 6d0cef8e60e42b3cddc32b244051afcccc94f3d4
                    </GoogleMap>
                  </LoadScript>
                  <p style={{ lineHeight: "15px" }}>
                    <small>
                      NOTA: Si uno de los siguientes campos no se completó de
                      forma correcta favor corregirlos
                    </small>
                  </p>
<<<<<<< HEAD
                  <div className="col-md-12">
                    <label className="form-label">
                      Nombre del lugar/edificio*
                    </label>
                    <FieldInput name="place" />
=======
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
>>>>>>> 6d0cef8e60e42b3cddc32b244051afcccc94f3d4
                  </div>
                  <div class="mt-2 row">
                    <div className="col-md-8">
                      <label className="form-label">Calle*</label>
<<<<<<< HEAD
                      <FieldInput name="street" />
                    </div>
                    <div className="col-md-4">
                      <label className="form-label">Numero</label>
                      <FieldInput name="number" />
=======
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
>>>>>>> 6d0cef8e60e42b3cddc32b244051afcccc94f3d4
                    </div>
                  </div>
                  <div class="mt-2 row">
                    <div className="col-md-6">
                      <label className="form-label">Ciudad*</label>
<<<<<<< HEAD
                      <FieldInput name="city" />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Provincia*</label>
                      <FieldInput name="state" />
=======
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
>>>>>>> 6d0cef8e60e42b3cddc32b244051afcccc94f3d4
                    </div>
                  </div>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    onClick={close}
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
    </Dialog>
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
