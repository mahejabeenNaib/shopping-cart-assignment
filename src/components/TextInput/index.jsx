import React from 'react';

function TextInput({
  field: { name, value,placeholder, onChange, onBlur },
  form: { touched, errors },
  label,
  ...props
}) {
  return (
    <div className="field">  
      {touched[name] && errors[name] && (
        <p className="error-text">{errors[name]}</p>
      )}   
        <input
          type="text"
          name={name}
          id={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
          {...props}
        />
         <label htmlFor={name}>
        {label}  </label>
    
    
    </div>
  );
}

export default TextInput;
