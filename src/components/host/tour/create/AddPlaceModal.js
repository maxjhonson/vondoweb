import React, { useEffect, useState } from "react";
import {
  GoogleMap,
  LoadScript,
  Autocomplete,
  Marker,
} from "@react-google-maps/api";
import { Field, Form } from "react-final-form";
import { InputWithValidation } from "./FieldsComponents";
const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 18.4725357,
  lng: -69.8923817,
};

const getAdreessObj = (addressComponents) => {
  console.log("cd", addressComponents);
  const dirrectionObj = {
    street: null,
    streetNumber: null,
    locality: null,
    administrativeArea: null,
  };
  if (!addressComponents || !Array.isArray(addressComponents))
    return { ...dirrectionObj };

  addressComponents.forEach((element) => {
    if (element.types.includes("route")) {
      dirrectionObj.street = element.long_name;
    } else if (element.types.includes("street_number")) {
      dirrectionObj.streetNumber = element.long_name;
    } else if (element.types.includes("locality")) {
      dirrectionObj.locality = element.long_name;
    } else if (element.types.includes("administrative_area_level_1")) {
      dirrectionObj.administrativeArea = element.long_name;
    }
  });
  return { ...dirrectionObj };
};

function AddPlaceModal(props) {
  const [autocomplete, setAutoComplete] = useState(null);
  const [erros, setErrors] = useState({});
  const [place, setPalce] = useState("");
  const [street, setStreet] = useState("");
  const [number, setNumber] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [geolocation, setGeolocation] = useState("");

  const onPlaceChanged = () => {
    if (autocomplete !== null) {
      const autocompletePlace = autocomplete.getPlace();
      if (!autocompletePlace) return;
      const adreessObj = getAdreessObj(autocompletePlace?.address_components);
      setPalce(autocompletePlace.name);
      setStreet(adreessObj.street);
      setNumber(adreessObj.streetNumber);
      setCity(adreessObj.locality);
      setState(adreessObj.administrativeArea);
      console.log(autocomplete.getPlace()?.name);
    } else {
      console.log("Autocomplete is not loaded yet!");
    }
  };

  const onLoad = (autocomplete) => {
    console.log("autocomplete: ", autocomplete);
    setAutoComplete(autocomplete);
    //this.autocomplete = autocomplete
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
              onPlaceChanged: (args, state, utils) => {
                console.log(args);
                utils. (state, "street", () => "Calle");
                console.log(state);
              },
            }}
            onSubmit={onSubmit}
          >
            {(props) => (
              <form onSubmit={props.handleSubmit}>
                <div class="modal-body">
                  <LoadScript
                    googleMapsApiKey=""
                    libraries={["places"]}
                  >
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
                      onDblClick={(e) => console.log(e)}
                    >
                      <Marker
                        position={{ lat: 18.4636456, lng: -69.91726280000002 }}
                      ></Marker>
                      <Marker
                        position={{ lat: 16.4636456, lng: -69.91726280000002 }}
                      ></Marker>
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
                      <Field
                        name="place"
                        render={(props) =>
                          InputWithValidation(props.input, props.meta, false)
                        }
                      />
                    </div>
                  </div>
                  <div class="mt-2 row">
                    <div className="col-md-8">
                      <label className="form-label">Calle*</label>
                      <Field
                        name="street"
                        render={(props) =>
                          InputWithValidation(props.input, props.meta, false)
                        }
                      />
                    </div>
                    <div className="col-md-4">
                      <label className="form-label">Numero</label>
                      <Field
                        name="number"
                        render={(props) =>
                          InputWithValidation(props.input, props.meta, false)
                        }
                      />
                    </div>
                  </div>
                  <div class="mt-2 row">
                    <div className="col-md-6">
                      <label className="form-label">Ciudad*</label>
                      <Field
                        name="city"
                        render={(props) =>
                          InputWithValidation(props.input, props.meta, false)
                        }
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Provincia*</label>
                      <Field
                        name="state"
                        render={(props) =>
                          InputWithValidation(props.input, props.meta, false)
                        }
                      />
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
                    class="btn btn-primary"
                    onClick={props.form.mutators.onPlaceChanged}
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
