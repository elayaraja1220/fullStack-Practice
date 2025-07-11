import React from 'react';
import { fn } from 'storybook/test';
import InputPassword from './password';

export default {
  title: 'Form/InputPassword',
  component: InputPassword,
  tags: ['autodocs'],
  parameters: {
    layout: 'full-screen',
  },
  argTypes: {
    label: { control: 'text' },
    inputId: { control: 'text' }, // ✅ Added control
    placeholder: { control: 'text' },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    floatLabel: {
      control: 'boolean',
    },
    variant: {
      control: 'select',
      options: ['outlined', 'underlined', 'filled'],
    },
    error: { control: 'text' },
    toggleMask: { control: 'boolean' },
    inputClass: { control: 'text' },
    containerClass: { control: 'text' },
    name: { control: 'text' },
  },
  args: {
    onClick: fn(),
    inputId: 'password-default', // ✅ Default ID
    label: 'Password',
    name: 'password',
    placeholder: 'Enter your password',
    floatLabel: false,
    type: 'password',
    toggleMask: true,
  },
};

export const Default = {
  args: {
    inputId: 'password-default',
    label: 'Password',
    placeholder: 'Enter your password',
  },
};

export const WithFloatingLabel = {
  args: {
    inputId: 'password-floating',
    label: 'Password',
    floatLabel: true,
    placeholder: '',
  },
};

export const WithToggleMask = {
  args: {
    inputId: 'password-mask',
    label: 'Password',
    toggleMask: true,
    placeholder: '•••••••',
  },
};

export const WithError = {
  args: {
    inputId: 'password-error',
    label: 'Password',
    error: 'Password is required',
    toggleMask: true,
  },
};

export const AllSizes = () => (
  <div className="space-y-4">
    <InputPassword inputId="pwd-xs" size="xs" label="Password XS" name="pwd-xs" />
    <InputPassword inputId="pwd-sm" size="sm" label="Password SM" name="pwd-sm" />
    <InputPassword inputId="pwd-md" size="md" label="Password MD" name="pwd-md" />
    <InputPassword inputId="pwd-lg" size="lg" label="Password LG" name="pwd-lg" />
  </div>
);

export const AllVariants = () => (
  <div className="space-y-4">
    <InputPassword inputId="pwd-outlined" variant="outlined" label="Outlined" name="pwd-outlined" />
    <InputPassword inputId="pwd-underlined" variant="underlined" label="Underlined" name="pwd-underlined" />
    <InputPassword inputId="pwd-filled" variant="filled" label="Filled" name="pwd-filled" />
  </div>
);
