'use client';

import React from "react";
import {
  commonInputProps,
  errorMessageLayoutMap,
  floatLabelClassMap,
  layoutClassMap,
  sizeClassMap,
  variantClassMap
} from "../formStyleMap/formStyleMap";
import FormLabel from "../label/label";

const InputEmail = (userProps) => {
  const props = { ...commonInputProps, ...userProps };

  const {
    size,
    containerClass,
    variant,
    formGroupLayout,
    errorMessageLayout,
    floatLabel,
    inputClass,
    label,
    labelClass,
    labelStyle,
    labelTitle,
    labelTabIndex,
    labelId,
    register,
    error,
    children, 
    ...restProps
  } = props;

  const variantClass = variantClassMap[variant] || '';
  const defaultSize = sizeClassMap[size] || '';
  const formLayout = layoutClassMap[formGroupLayout] || '';
  const floatLabelClass = floatLabelClassMap[floatLabel] || '';
  const errorMessageLayoutClass = errorMessageLayoutMap[errorMessageLayout] || '';

  const containerClassName = [
    containerClass,
    defaultSize,
    floatLabelClass,
    formLayout
  ]
    .filter(Boolean)
    .join(' ');

  // Only add placeholder if variant is not 'underlined'
  const inputProps = {
    ...restProps,
    ...(register && restProps.name ? register(restProps.name) : {}),
  };
const [value, setValue] = React.useState('');

  return (
    <div className={`${containerClassName} form-group-email`}>
      {/* Top Label (standard layout only) */}
      {label && !floatLabel && (
        <FormLabel
          htmlFor={restProps.id}
          labelClass={labelClass}
          style={labelStyle}
          title={labelTitle}
          tabIndex={labelTabIndex}
          id={labelId}
        >
          {label}
        </FormLabel>
      )}

      <div className={`${errorMessageLayoutClass}`}>
        <input
          type={restProps.type || 'email'}
          className={['form-control', variantClass, inputClass, value ? 'has-value' : '']
            .filter(Boolean)
            .join(' ')}
          {...inputProps}
        />

        {/* Floating Label (if enabled) */}
        {label && floatLabel && (
          <FormLabel
            htmlFor={restProps.id}
            labelClass={labelClass}
            style={labelStyle}
            title={labelTitle}
            tabIndex={labelTabIndex}
            id={labelId}
            
          >
            {label}
          </FormLabel>
        )}

        {/* Error Message */}
        {error && <div className="form-message error-text">{error}</div>}
      </div>
    </div>
  );
};

export default InputEmail;
