import React, { Fragment } from "react";
import { Field } from "react-final-form";

const renderErrors = (error) => {
  if (Array.isArray(error)) {
    return error.map((error) => (
      <React.Fragment>
        <span>{error}</span>
        <br />
      </React.Fragment>
    ));
  } else {
    return <span>{error}</span>;
  }
};

export const InputWitValidation = ({ input, meta, isValidated }) => {
  const invalidCss = isValidated && meta.error ? "is-invalid" : "";
  return (
    <React.Fragment>
      <input className={`form-control ${invalidCss}`} {...input} />
      <div className="invalid-feedback">
        {isValidated && meta.error && renderErrors(meta.error)}
      </div>
    </React.Fragment>
  );
};

export const RadioListWithValidation = ({
  name,
  values,
  isValidated,
  errors,
}) => {
  const invalidCss = isValidated && errors ? "is-invalid" : "";
  console.log(isValidated);

  const radioList = values.map((value) => {
    return (
      <div className={`form-check ${invalidCss}`}>
        <Field
          name={name}
          value={value.value}
          type="radio"
          render={(props) => (
            <RadioWithValidation
              input={{ ...props.input }}
              meta={props.meta}
              isValidated={isValidated}
            />
          )}
        />
        <label className="form-check-label">{value.label}</label>
      </div>
    );
  });
  return (
    <React.Fragment>
      {radioList}
      <div className="invalid-feedback">{renderErrors(errors)}</div>
    </React.Fragment>
  );
};

export const RadioWithValidation = ({ input, meta, isValidated }) => {
  const invalidCss = isValidated && meta.error ? "is-invalid" : "";
  return (
    <React.Fragment>
      <input
        type="radio"
        className={`form-check-input ${invalidCss}`}
        {...input}
      />
    </React.Fragment>
  );
};

export const TextAreaWithValidation = ({ input, meta, isValidated }) => {
  const invalidCss = isValidated && meta.error ? "is-invalid" : "";
  return (
    <React.Fragment>
      <textarea className={`form-control ${invalidCss}`} {...input} />
      <div className="invalid-feedback">
        {isValidated && meta.error && renderErrors(meta.error)}
      </div>
    </React.Fragment>
  );
};

export const SelectWithvalidation = ({ input, meta, isValidated, options }) => {
  const invalidCss = isValidated && meta.error ? "is-invalid" : "-";
  const parentDiv = document.getElementById(input.id);
  parentDiv?.parentNode?.classList?.remove("is-invalid");
  parentDiv?.parentNode?.classList?.add(invalidCss);
  const renderOptions = () => {
    return options.map((option) => {
      return (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      );
    });
  };
  return (
    <React.Fragment>
      <select
        title="Pendiente por Seleccionar"
        {...input}
        className={`selectpicker form-control`}
        data-style="btn-selectpicker"
      >
        {renderOptions()}
      </select>
      <div className="invalid-feedback">
        {isValidated && meta.error && <span>{renderErrors(meta.error)}</span>}
      </div>
    </React.Fragment>
  );
};
