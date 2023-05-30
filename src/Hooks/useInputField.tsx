import { ChangeEvent } from "react";

const useInputField = () => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>, values: any) => {
    return {
      ...values,
      [e.target.id]: e.target.value,
    };
  };

  return { handleChange };
};

export default useInputField;
