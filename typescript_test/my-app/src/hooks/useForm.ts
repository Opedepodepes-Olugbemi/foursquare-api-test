import { useState } from 'react';

type FormValues = {
  query1: string;
  query2: string;
};

export const useForm = (callback: () => void, initialState: FormValues) => {
  const [values, setValues] = useState(initialState);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await callback();
  };

  return { values, onChange, onSubmit };
};
