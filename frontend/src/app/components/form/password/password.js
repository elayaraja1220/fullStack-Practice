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
  const [toggleMaskState, setToggleMaskState] = React.useState(false);
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
    toggleMask, 
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

  return (
    <div className={containerClassName}>
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
            type={toggleMaskState ? 'text' : 'password'}
            className={['form-control', variantClass, inputClass]
              .filter(Boolean)
              .join(' ')}
            {...restProps}
            {...(register && restProps.name && register(restProps.name))}
          />
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

          {toggleMask && (
            <button
              type="button"
              className="btn-toggle-password"
              onClick={() => setToggleMaskState(prev => !prev)}
              
            >
              {toggleMaskState ? 'Hide' : 'Show'}
            </button>
          )}
        

        
        {error && <div className="error-text">{error}</div>}
      </div>
    </div>
  );
};

export default InputPassword;
