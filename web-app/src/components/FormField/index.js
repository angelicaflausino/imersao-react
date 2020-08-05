import React from 'react';

function FormField({ label, type, name, value, onChange }) {
    return(
        <div>
            <label>{label}:</label>
            <input 
              name={name}
              type={type}
              value={value}
              onChange={onChange}
              />
          </div>
    )
}

export default FormField;