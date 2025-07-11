import React from 'react';
import { fn } from 'storybook/test';
import InputText from './input';

export default {
  title: 'Form/InputText',
  component: InputText,
  tags: ['autodocs'],
  parameters: {
    layout: 'full-screen',
  },
  argTypes: {
    label: { control: 'text' },
    inputId: { control: 'text' }, // ✅ Made inputId controllable
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
    inputClass: { control: 'text' },
    containerClass: { control: 'text' },
    type: { control: 'text' },
    name: { control: 'text' },
  },
  args: {
    onClick: fn(),
    label: 'Input Label',
    name: 'username',
    placeholder: 'Enter text',
    floatLabel: false,
    type: 'text',
    inputId: 'input-default', // ✅ default inputId
  },
};

export const Default = {
  args: {
    inputId: 'input-default',
    label: 'Username',
    placeholder: 'Enter your username',
  },
};

export const WithFloatingLabel = {
  args: {
    inputId: 'input-floating',
    floatLabel: true,
    label: 'Email',
    type: 'email',
    placeholder: '',
  },
};

export const WithError = {
  args: {
    inputId: 'input-error',
    label: 'Password',
    type: 'password',
    error: 'Password is required',
  },
};

export const Sizes = () => (
  <div className="space-y-4">
    <InputText inputId="xsSize" size="xs" label="Extra Small" />
    <InputText inputId="smSize" size="sm" label="Small" />
    <InputText inputId="mdSize" size="md" label="Medium" />
    <InputText inputId="lgSize" size="lg" label="Large" />
  </div>
);

export const Variants = () => (
  <div className="space-y-4">
    <InputText inputId="variant-outlined" variant="outlined" label="Outlined" />
    <InputText inputId="variant-underlined" variant="underlined" label="Underlined" />
    <InputText inputId="variant-filled" variant="filled" label="Filled" />
  </div>
);
