import React from 'react';
import { Input } from '@nextui-org/react';
import { useForm } from 'react-hook-form';

type ValidInputType = {
  attr: string;
  placeholder?: string;
};

const ValidInput = ({ attr, placeholder = 'placeholder' }: ValidInputType) => {
  const { register } = useForm();

  return <Input {...register(attr)} placeholder={placeholder} />;
};

export default ValidInput;
