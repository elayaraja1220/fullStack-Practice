'use client';
// You can customize these for Tailwind or your own framework
// import './form.scss';


export const commonInputProps = {
  size: 'md',
  containerClass: '',
  variant: 'outlined',
  formGroupLayout: 'vertical',
  errorMessageLayout: 'vertical',
  floatLabel: false,
  inputClass: '',
  label: '',
  labelClass: '',
  labelStyle: {},
  labelTitle: '',
  labelTabIndex: 0,
  labelId: '',
  register: null,
  error: '',
  children: null,
};

export const variantClassMap = {
  outlined: 'form-control-outline',
  filled: 'form-control-filled',
  underlined: 'form-control-underline',
};

export const sizeClassMap = {
  xs: 'form-group form-group-size-xs',
  sm: 'form-group form-group-size-sm',
  md: 'form-group form-group-size-md',
  lg: 'form-group form-group-size-lg',
  xl: 'form-group form-group-size-xl',
};

// export const sizeCheckboxClassMap = {
//   xs: 'form-group form-checkbox-size-xs',
//   sm: 'form-group form-checkbox-size-sm',
//   md: 'form-group form-checkbox-size-md',
//   lg: 'form-group form-checkbox-size-lg',
//   xl: 'form-group form-checkbox-size-xl',
// };

// export const sizeRadioButtonClassMap = {
//   xs: 'form-group form-radio-size-xs',
//   sm: 'form-group form-radio-size-sm',
//   md: 'form-group form-radio-size-md',
//   lg: 'form-group form-radio-size-lg',
//   xl: 'form-group form-radio-size-xl',
// };

export const layoutClassMap = {
    horizontal: 'form-layout-horizontal',
    vertical: 'form-layout-vertical'
}

export const errorMessageLayoutMap = {
    horizontal: 'form-message-horizontal',
    vertical: 'form-message-vertical'
}

export const floatLabelClassMap = {
  true: "form-group-floating",
  false: ""
}

const labelPosition = {
  left: "",
  right: ""
}