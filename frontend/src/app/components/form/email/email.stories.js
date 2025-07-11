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
    placeholder: { control: 'text' },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg','xl'],
    },
    floatLabel: {
      control: 'boolean',
    },
    variant: {
      control: 'select',
      options: ['outlined', 'underlined', 'filled'], // depends on your variantClassMap
    },
    error: { control: 'text' },
    inputClass: { control: 'text' },
    containerClass: { control: 'text' },
    type: { control: 'text' },
    name: { control: 'text' },
  },
  args: {
    onClick: fn(),
    label: 'Email',
    name: 'email',
    placeholder: 'Enter your email',
    floatLabel: false,
    type: 'email',
  },
};

export const Default = {
  args: {
    label: 'Email Address',
    placeholder: 'Enter your email',
  },
};

export const WithFloatingLabel = {
  args: {
    floatLabel: true,
    label: 'Email Address',
    placeholder: '', // hide placeholder when using floating label
  },
};

export const WithError = {
  args: {
    label: 'Email Address',
    error: 'Invalid email address',
    type: 'email',
  },
};

export const AllSizes = () => (
  <div className="space-y-4">
    <InputEmail size="xs" label="Email XS" name="email-xs" placeholder="xs" />
    <InputEmail size="sm" label="Email SM" name="email-sm" placeholder="sm" />
    <InputEmail size="md" label="Email MD" name="email-md" placeholder="md" />
    <InputEmail size="lg" label="Email LG" name="email-lg" placeholder="lg" />
  </div>
);

export const AllVariants = () => (
  <div className="space-y-4">
    <InputEmail variant="outlined" label="Outlined" name="email-outlined" />
    <InputEmail variant="underlined" label="Underlined" name="email-underlined" />
    <InputEmail variant="filled" label="Filled" name="email-filled" />
  </div>
);
