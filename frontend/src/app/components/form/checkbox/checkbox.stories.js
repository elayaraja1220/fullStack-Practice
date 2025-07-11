import React from 'react';
import { fn } from 'storybook/test';
import InputCheckBox from './checkbox';

export default {
  title: 'Form/InputCheckBox',
  component: InputCheckBox,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    label: { control: 'text' },
    labelPosition: {
      control: 'inline-radio',
      options: ['left', 'right'],
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg'],
    },
    variant: {
      control: 'select',
      options: ['outlined', 'filled'],
    },
    error: { control: 'text' },
    inputClass: { control: 'text' },
    containerClass: { control: 'text' },
    name: { control: 'text' },
    multiline: { control: 'boolean' },
  },
  args: {
    onClick: fn(),
    name: 'checkbox',
    label: 'Accept Terms',
    labelPosition: 'right',
    type: 'checkbox',
    variant: 'outlined',
  },
};

export const Default = {
  args: {
    label: 'I agree to the terms and conditions',
    labelPosition: 'right',
  },
};

export const LabelOnLeft = {
  args: {
    label: 'Remember Me',
    labelPosition: 'left',
  },
};

export const WithError = {
  args: {
    label: 'Subscribe to newsletter',
    error: 'You must check this box',
    labelPosition: 'right',
  },
};

export const MultilineWithStartContent = {
  args: {
    multiline: true,
    label: '',
    startContent: (
      <div className="text-sm text-gray-600">
        I agree to the <a className="text-blue-600 underline">privacy policy</a> and data usage.
      </div>
    ),
    endContent: <span className="text-green-500 text-xs ml-2">Required</span>,
  },
};

export const AllSizes = () => (
  <div className="space-y-4">
    <InputCheckBox inputId="xsSize" size="xs" label="XS Size" name="chk-xs" />
    <InputCheckBox inputId="smSize"  size="sm" label="SM Size" name="chk-sm" />
    <InputCheckBox inputId="mdSize"  size="md" label="MD Size" name="chk-md" />
    <InputCheckBox inputId="lgSize"  size="lg" label="LG Size" name="chk-lg" />
  </div>
);

export const AllVariants = () => (
  <div className="space-y-4">
    <InputCheckBox inputId="outlined" variant="outlined" label="Outlined Variant" name="chk-outlined" />
    <InputCheckBox inputId="filled" variant="filled" label="Filled Variant" name="chk-filled" />
  </div>
);
