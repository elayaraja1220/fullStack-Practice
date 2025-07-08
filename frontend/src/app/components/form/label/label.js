'use client';

const FormLabel = (props) => {
  const sizeClassMap = {
    xs: 'form-label-xs',
    sm: 'form-label-small',
    md: 'form-label-md',
    lg: 'form-label-lg',
    xl: 'form-label-xl',
  };
  const defaultSize = sizeClassMap[props.size || '']
  const containerClass = [
    'form-label',
    props.labelClass,
    defaultSize
  ].filter(Boolean).join(' ')
  return (
    <label
      htmlFor={props.htmlFor}           
      id={props.id}                    
      className={[containerClass].filter(Boolean).join(' ')}
      style={props.style}
      title={props.title} 
      tabIndex={props.tabIndex} 
    >
      {props.children} 
    </label>
  );
};

export default FormLabel;
