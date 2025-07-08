'use client';

const Form = ({
  onSubmit,
  children,
  className = '',
  noValidate = true,
  autoComplete = 'off',
}) => {
  return (
    <form
      onSubmit={onSubmit}
      noValidate={noValidate}
      autoComplete={autoComplete}
      className={className}
    >
      {children}
    </form>
  );
};

export default Form;
