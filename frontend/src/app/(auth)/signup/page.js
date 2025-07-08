'use client';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { InputPassword, InputText } from '@/app/components/form/form';
import Form from '@/app/components/form/form/form';
import patterns from '@/app/utils/regx/regx';


const schema = yup.object({
  firstName: yup.string().required('First name is required').min(3, 'Minimum 3 charateer must'),
  lastname: yup.string().notRequired(),
  gender: yup
    .string()
    .required('Gender is required')
    .oneOf(['male', 'female', 'other'], 'Gender must be male, female, or other'),

  password: yup.string().required('Password is required').matches(patterns.strongPassword, 'Password must be at least 8 characters, with upper, lower, number, and special character')
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
      <InputPassword
        label="First Nam Pwse"
        name="firstName"
        placeholder="Enter your first name"
        register={register}
        error={errors.firstName?.message}
        id="firstname"
        formGroupLayout='horizontal'
        errorMessageLayout = 'vertical'
        floatLabel = {false}
      />
      {/* <InputPassword
      id="Password"
        label="Password"
        name="password"
        placeholder="Enter your Password"
        register={register}
        error={errors.password?.message}
        toggleMask

      />

      <button
        type="submit"
        className=""
      >
        Submit
      </button> */}
    </Form>
  );
}
