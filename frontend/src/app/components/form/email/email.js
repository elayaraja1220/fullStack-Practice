import React from 'react';
import { fn } from 'storybook/test';
import InputEmail from './email';

export default {
  title: 'Form/InputEmail',
  component: InputEmail,
  tags: ['autodocs'],
  parameters: {
    layout: 'full-screen',
  },
  argTypes: {
    label: { control: 'text' },
    inputId: { control: 'text' }, // ✅ Added control for inputId
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
    inputClass: { control: 'text' },
    containerClass: { control: 'text' },
    type: { control: 'text' },
    name: { control: 'text' },
  },
  args: {
    onClick: fn(),
    inputId: 'email-default', // ✅ Default inputId
    label: 'Email',
    name: 'email',
    placeholder: 'Enter your email',
    floatLabel: false,
    type: 'email',
  },
};

export const Default = {
  args: {
    inputId: 'email-default',
    label: 'Email Address',
    placeholder: 'Enter your email',
  },
};

export const WithFloatingLabel = {
  args: {
    inputId: 'email-floating',
    floatLabel: true,
    label: 'Email Address',
    placeholder: '',
  },
};

export const WithError = {
  args: {
    inputId: 'email-error',
    label: 'Email Address',
    error: 'Invalid email address',
    type: 'email',
  },
};

export const AllSizes = () => (
  <div className="space-y-4">
    <InputEmail inputId="email-xs" size="xs" label="Email XS" name="email-xs" placeholder="xs" />
    <InputEmail inputId="email-sm" size="sm" label="Email SM" name="email-sm" placeholder="sm" />
    <InputEmail inputId="email-md" size="md" label="Email MD" name="email-md" placeholder="md" />
    <InputEmail inputId="email-lg" size="lg" label="Email LG" name="email-lg" placeholder="lg" />
  </div>
);

export const AllVariants = () => (
  <div className="space-y-4">
    <InputEmail inputId="email-outlined" variant="outlined" label="Outlined" name="email-outlined" />
    <InputEmail inputId="email-underlined" variant="underlined" label="Underlined" name="email-underlined" />
    <InputEmail inputId="email-filled" variant="filled" label="Filled" name="email-filled" />
  </div>
);
