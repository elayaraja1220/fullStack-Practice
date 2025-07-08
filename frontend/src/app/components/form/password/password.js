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

const InputPassword = (userProps) => {
  const props = { ...commonInputProps, ...userProps };
  const [showPassword, setShowPassword] = React.useState("")
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
    togglePassword,
    ...restProps
  } = props;

  const variantClass = variantClassMap[variant] || '';
  const defaultSize = sizeClassMap[size] || '';
  const formLayout = layoutClassMap[formGroupLayout] || '';
  const floatLabelClass = floatLabelClassMap[floatLabel] || '';
  const errorMessageLayoutClass = errorMessageLayoutMap[errorMessageLayout] || '';

  const containerClassName = [
    'form-group',
    containerClass,
    defaultSize,
    floatLabelClass,
    formLayout
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={containerClassName}>
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

      <div className={errorMessageLayoutClass}>
        <input
          type={restProps.type ||  `${showPassword ? 'text' : 'password' }`}
          className={['form-control', variantClass, inputClass]
            .filter(Boolean)
            .join(' ')}
          {...restProps}
          {...(register && restProps.name && register(restProps.name))}
        />
        <button type="button" onClick={() => setShowPassword(!showPassword)}>{showPassword? "hide" : "show"}</button>
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
        {error && <div className="error-text">{error}</div>}
      </div>
    </div>
  );
};

export default InputPassword;
