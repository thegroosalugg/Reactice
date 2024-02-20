import { useState } from "react";

// custom hooks always must start with 'use'
export function useInput(defaultValue, validationFunction) {
  const [userData, setUserData] = useState(defaultValue);
  const [isEditting, setIsEditting] = useState(false);

  const validated = validationFunction(userData);

  function handleBlur() {
    setIsEditting(true);
  }

  function handleInputChange(event) {
    setUserData(event.target.value);
    setIsEditting(false);
  }

  return {
    value: userData,
    handleBlur,
    handleInputChange,
    error: isEditting && !validated, // has error if user is editing input field and value is not validated
  };
}
