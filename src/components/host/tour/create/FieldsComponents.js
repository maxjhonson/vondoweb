import React, { Fragment, useEffect } from "react";
import ReactDatePicker from "react-datepicker";
import { Field } from "react-final-form";
import "react-datepicker/dist/react-datepicker.css";

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

export const InputWithValidation = ({ input, meta, isValidated }) => {
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

export const DatePickerWithValidation = ({
  input,
  meta,
  input: { value, onChange },
  isValidated,
}) => {
  const invalidCss = isValidated && meta.error ? "is-invalid" : "";
  console.log(input);
  return (
    <React.Fragment>
      <ReactDatePicker
        className={`form-control `}
        locale="de"
        placeholderText="Fecha"
        dateFormat="P"
        selected={value}
        disabledKeyboardNavigation
        {...input}
        onChange={(date) => {
          input.onChange(new Date(date));
        }}
      />
      <input className={`"form-control ${invalidCss}`} hidden />
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

export const FieldSelectMultiple = ({ name, options }) => {
  const renderOptions = options.map((option) => (
    <option key={option.value} value={option.value}>
      {option.text}
    </option>
  ));
  useEffect(() => {
    window.$(`#${name}`).selectpicker();
  }, []);
  return (
    <Field
      name={name}
      render={(props) => (
        <React.Fragment>
          <select
            multiple
            id={name}
            title="Pendiente por Seleccionar"
            {...props.input}
            className={`selectpicker form-control`}
            data-style="btn-selectpicker"
          >
            {renderOptions}
          </select>
        </React.Fragment>
      )}
    />
  );
};

export const FieldSelect = ({ name, options, htmlProperties }) => {
  const getClassName = (meta) => {
    return meta.error && meta.touched
      ? "form-control is-invalid"
      : "form-control";
  };
  const renderOptions = options.map((option) => (
    <option key={option.value} value={option.value}>
      {option.text}
    </option>
  ));
  return (
    <Field
      name={name}
      render={(props) => (
        <React.Fragment>
          <select
            {...props.input}
            {...htmlProperties}
            className={getClassName(props.meta)}
          >
            <option value="">Pendiente por Seleccionar</option>
            {renderOptions}
          </select>
          {props.meta.error && props.meta.touched && (
            <div class="invalid-feedback">{props.meta.error}</div>
          )}
        </React.Fragment>
      )}
    />
  );
};

export const FieldInput = ({ name, htmlProperties }) => {
  const getClassName = (meta) => {
    return meta.error && meta.touched
      ? "form-control is-invalid"
      : "form-control";
  };
  return (
    <Field
      name={name}
      render={(props) => (
        <React.Fragment>
          <input
            {...props.input}
            {...htmlProperties}
            className={getClassName(props.meta)}
          />
          {props.meta.error && props.meta.touched && (
            <div class="invalid-feedback">{renderErrors(props.meta.error)}</div>
          )}
        </React.Fragment>
      )}
    />
  );
};

export const FieldTextArea = ({ name, htmlProperties }) => {
  const getClassName = (meta) => {
    return meta.error && meta.touched
      ? "form-control is-invalid"
      : "form-control";
  };
  return (
    <Field
      name={name}
      render={(props) => (
        <React.Fragment>
          <textarea
            {...props.input}
            {...htmlProperties}
            className={getClassName(props.meta)}
          />
          {props.meta.error && props.meta.touched && (
            <div class="invalid-feedback">{renderErrors(props.meta.error)}</div>
          )}
        </React.Fragment>
      )}
    />
  );
};

export const FieldDisplayText = ({ name }) => {
  return (
    <Field
      name={name}
      render={(props) => {
        return <React.Fragment>{props.input.value}</React.Fragment>;
      }}
    />
  );
};

export const fieldAsText = ({ input, htmlProperties }) => {
  const value = "input.value";
  return <span>{value}</span>;
};
