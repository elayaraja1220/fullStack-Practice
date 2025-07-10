'use client';
import {
  commonInputProps,
  errorMessageLayoutMap,
  floatLabelClassMap,
  layoutClassMap,
  sizeClassMap,
  variantClassMap
} from "../formStyleMap/formStyleMap";
import FormLabel from "../label/label";

const InputCheckBox = (userProps) => {
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
    labelPosition = "left",
    ...restProps
  } = props;

  const variantClass = variantClassMap[variant] || '';
  const defaultSize = sizeClassMap[size] || '';
  const formLayout = layoutClassMap[formGroupLayout] || '';
  const errorMessageLayoutClass = errorMessageLayoutMap[errorMessageLayout] || '';
  
  const containerClassName = [
    
    containerClass,
    defaultSize,
    formLayout
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={containerClassName}>
      {/* Top Label (standard layout only) */}
      {label && labelPosition === "left" && (
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
          type={restProps.type || 'checkbox'}
          className={['form-control', variantClass, inputClass]
            .filter(Boolean)
            .join(' ')}
          {...restProps}
          {...(register && restProps.name && register(restProps.name))}
        />

       
         {label && labelPosition === "right" && (
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

export default InputCheckBox;
