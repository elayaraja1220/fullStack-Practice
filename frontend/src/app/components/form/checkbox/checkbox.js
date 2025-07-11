'use client';
import {
  commonInputProps,
  errorMessageLayoutMap,
  layoutClassMap,
  sizeClassMap,
  CheckBoxvariantClassMap
} from "../style/formStyleMap/formStyleMap";
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
    startContent,
    endContent, // ✅ Required for multiline content
    multiline,
    labelPosition = "left",
    inputId,
    ...restProps
  } = props;

  const variantClass = CheckBoxvariantClassMap[variant] || '';
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
    <div className={`${containerClassName} form-group-checkbox`}>
      <div className={errorMessageLayoutClass}>
        {multiline && !label ? (
          <div className="flex items-center gap-2">
            {startContent && <div>{startContent}</div>}

            <input
              type={restProps.type || 'checkbox'}
              id={inputId}
              className={['form-control', variantClass, inputClass]
                .filter(Boolean)
                .join(' ')}
              {...restProps}
              {...(register && restProps.name && register(restProps.name))}
            />

            {endContent && <div>{endContent}</div>}

            {error && <div className="error-text">{error}</div>}
          </div>
        ) : (
          <div className="flex items-center gap-2">
            {label && labelPosition === "left" && (
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

            <input
              type={restProps.type || 'checkbox'}
              id={inputId}
              className={['form-control', variantClass, inputClass]
                .filter(Boolean)
                .join(' ')}
              {...restProps}
              {...(register && restProps.name && register(restProps.name))}
            />

            {label && labelPosition === "right" && (
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

            {error && <div className="error-text">{error}</div>}
          </div>
        )}
      </div>
    </div>
  );
};

export default InputCheckBox;
