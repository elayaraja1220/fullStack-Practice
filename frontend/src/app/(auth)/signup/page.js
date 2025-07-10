'use client';

import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import {
  InputCheckBox,
  InputEmail,
  InputPassword,
  InputText
} from '@/app/components/form/formList';

import Form from '@/app/components/form/form/form';
import patterns from '@/app/utils/regx/regx';

const schema = yup.object({
  firstName: yup.string()
    .required('First name is required')
    .min(3, 'Minimum 3 characters required'),
  lastname: yup.string().notRequired(),
  gender: yup.string()
    .required('Gender is required')
    .oneOf(['male', 'female', 'other'], 'Gender must be male, female, or other'),
  password: yup.string()
    .required('Password is required')
    .matches(
      patterns.strongPassword,
      'Password must be at least 8 characters, with upper, lower, number, and one special character (@, $, !, %, *, ?, &)'
    ),
  email: yup.string()
    .required('Email is required')
    .matches(patterns.email, 'Invalid email format. Example: abc@gmail.com')
});

export default function SignupForm() {
  const methods = useForm({
    resolver: yupResolver(schema),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit = (data) => {
    console.log('Form Submitted:', data);
  };

  return (
    <FormProvider {...methods}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputText
          size="md"
          label="First Name"
          name="firstName"
          placeholder="Enter your first name"
          register={register}
          error={errors.firstName?.message}
          id="firstname"
          formGroupLayout="vertical"
          errorMessageLayout="vertical"
          variant="outlined"
          floatLabel
        />

        <InputPassword
          size="md"
          label="Password"
          name="password"
          placeholder="Enter your password"
          register={register}
          error={errors.password?.message}
          id="password"
          formGroupLayout="vertical"
          errorMessageLayout="vertical"
          variant="outlined"
          floatLabel
          toggleMask
        />

        <InputEmail
          size="md"
          label="Email"
          name="email"
          placeholder="Enter your Email"
          register={register}
          error={errors.email?.message}
          id="email"
          formGroupLayout="vertical"
          errorMessageLayout="vertical"
          variant="outlined"
          floatLabel
        />

        <button type="submit">Submit</button>
      </Form>
    </FormProvider>
  );
}
