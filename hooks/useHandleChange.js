import { useState } from 'react';

export default function useHandleChange(initialValues) {
  const [values, setValues] = useState(initialValues);
  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.values,
    });
  };
  return {
    values,
    handleChange,
  };
}
