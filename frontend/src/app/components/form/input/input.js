'use client';

import React from "react";
import {
  commonInputProps,
  errorMessageLayoutMap,
  floatLabelClassMap,
  layoutClassMap,
  sizeClassMap,
  variantClassMap
} from "../style/formStyleMap/formStyleMap";
import FormLabel from "../label/label";

const InputText = (userProps) => {
  const props = { ...commonInputProps, ...userProps };

  const {
    size,
    containerClass,
    variant,
    formGroupLayout,
    errorMessageLayout,
    floatLabel,
    inputClass,
    inputId,
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

  const inputProps = {
    ...restProps,
    ...(register && restProps.name ? register(restProps.name) : {}),
  };

  const [value, setValue] = React.useState('');

  return (
    <div className={`${containerClassName} form-group-input`}>
      {/* Standard label (non-floating layout) */}
      {label && !floatLabel && (
        <FormLabel
          htmlFor={inputId}
          labelClass={labelClass}
          style={labelStyle}
          title={labelTitle}
          tabIndex={labelTabIndex}
          id={labelId}
        >
          {label}
        </FormLabel>
      )}

      <div className={errorMessageLayoutClass}>
        <input
          type={restProps.type || 'text'}
          id={inputId}
          className={[
            'form-control',
            variantClass,
            inputClass,
          ]
            .filter(Boolean)
            .join(' ')}
          {...inputProps}
        />

        {/* Floating Label (if enabled) */}
        {label && floatLabel && (
          <FormLabel
            htmlFor={inputId}
            labelClass={`${labelClass}`}
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

export default InputText;
