import React, { useState } from "react";
import { Field, useFormState } from "react-final-form";
import { useNavigate } from "react-router";

function CreationStepThree(props) {
  const [isValidated, setIsValidated] = useState(false);
  const navigate = useNavigate();
  const formState = useFormState();

  const onNextClick = () => {
    navigate("/paso-3");
  };
  return <section className="py-5"></section>;
}

export default CreationStepThree;
