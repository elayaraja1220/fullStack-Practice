'use client';


import FormLabel from "../label/label";

const InputEmail = ({
  size = 'md',
  containerClass,
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
  ...props
}) => {
  const sizeClassMap = {
    xs: 'form-group-xs',
    sm: 'form-group-small',
    md: 'form-group-md',
    lg: 'form-group-lg',
    xl: 'form-group-xl',
  };

  const defaultSize = sizeClassMap[size] || sizeClassMap.md;

  const containerClassName = ['form-group', containerClass, defaultSize]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={containerClassName}>
      {label && (
        <FormLabel
          htmlFor={props.id}
          labelClass={labelClass}
          style={labelStyle}
          title={labelTitle}
          tabIndex={labelTabIndex}
          id={labelId}
          type="email"
          
        >
          {label}
        </FormLabel>
      )}

      <input
        type={props.type || 'text'}
        className={inputClass || ''}
        {...props}
        {...(register && props.name && register(props.name))}
      />

      {error && <div className="error-text">{error}</div>}
    </div>
  );
};

export default InputEmail;
