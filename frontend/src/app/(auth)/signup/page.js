'use client';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { InputCheckBox, InputEmail, InputPassword, InputText } from '@/app/components/form/formList';
import Form from '@/app/components/form/form/form';
import patterns from '@/app/utils/regx/regx';


const schema = yup.object({
  firstName: yup.string()
    .required('First name is required')
    .min(3, 'Minimum 3 charateer must'),
  lastname: yup.string()
    .notRequired(),
  gender: yup.string()
    .required('Gender is required')
    .oneOf(['male', 'female', 'other'], 'Gender must be male, female, or other'),

  password: yup.string()
    .required('Password is required')
    .matches(patterns.strongPassword, 'Password must be at least 8 characters, with upper, lower, number, and one special character (@, $, !, %, *, ?, &)'),
  email: yup.string()
    .required('Email  is required')
    .matches(patterns.email, 'Invalid email format. Example: abc@gmail.com')
})

export default function SignupForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log('Form Submitted:', data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <InputText
      size="md"
        label="First Name"
        name="firstName"
        placeholder="Enter your first name"
        register={register}
        error={errors.firstName?.message}
        id="firstname"
        formGroupLayout='vertical'
        errorMessageLayout='vertical'
        variant = 'filled'
        floatLabel={true}
      />
      {/* <InputPassword
        id="Password"
        size="md"
        label="Password"
        name="password"
        placeholder="Enter your Password"
        register={register}
        error={errors.password?.message}
        toggleMask
        formGroupLayout='vertical'
        errorMessageLayout='vertical'
        floatLabel={false}
      />
      <InputEmail
        id="email"
        size="md"
        label="Email"
        name="email"
        placeholder="Enter your email address"
        register={register}
        error={errors.email?.message}
        formGroupLayout='vertical'
        errorMessageLayout='vertical'
        floatLabel={false}
      /> */}
       {/* <InputCheckBox
        id="checkbox"
        size="md"
        label="checkbox"
        name="checkbox"
        placeholder="Enter your checkbox"
        register={register}
        error={errors.checkbox?.message}
        formGroupLayout='vertical'
        errorMessageLayout='vertical'
        floatLabel={false}
        labelPosition = "right"
      />
       <InputCheckBox
        id="checkbox"
        size="md"
        label="checkbox"
        name="checkbox"
        placeholder="Enter your checkbox"
        register={register}
        error={errors.checkbox?.message}
        formGroupLayout='vertical'
        errorMessageLayout='vertical'
        floatLabel={false}
        labelPosition = "right"
      /> */}
      {/* <button
        type="submit"
        className=""
      >
        Submit
      </button> */}
    </Form>
  );
}
