import React from "react";

export const InputWitValidation = ({ input, meta, isValidated }) => {
  console.log(meta);
  const invalidCss = isValidated && meta.error ? "is-invalid" : "";
  return (
    <React.Fragment>
      <input className={`form-control ${invalidCss}`} {...input} />
      <div class="invalid-feedback">
        {isValidated && meta.error && <span>{meta.error}</span>}
      </div>
    </React.Fragment>
  );
};

export const SelectWithvalidation = ({ input, meta, isValidated, options }) => {
  const renderOptions = () => {
    return options.map((option) => {
      return <option value={option.value}>{option.label}</option>;
    });
  };
  return (
    <React.Fragment>
      <select
        title="Seleccione"
        {...input}
        className="selectpicker form-control"
        data-style="btn-selectpicker"
        multiple
      >
        {renderOptions()}
      </select>
    </React.Fragment>
  );
};
