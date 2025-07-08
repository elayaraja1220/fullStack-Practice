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
  outlined: 'border border-gray-300 bg-white',
  filled: 'bg-gray-100 border border-transparent',
  underlined: 'border-b border-gray-400 bg-transparent',
};

export const sizeClassMap = {
  xs: 'form-group-xs text-xs py-1 px-2',
  sm: 'form-group-sm text-sm py-1.5 px-3',
  md: 'form-group-md text-base py-2 px-4',
  lg: 'form-group-lg text-lg py-2.5 px-4',
  xl: 'form-group-xl text-xl py-3 px-5',
};

export const layoutClassMap = {
    horizontal: 'flex flex-row',
    vertical: 'flex flex-col'
}

export const errorMessageLayoutMap = {
    horizontal: 'flex flex-row',
    vertical: 'flex flex-col'
}

export const floatLabelClassMap = {
  true: "float-label",
  false: ""
}
