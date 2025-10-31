import React from "react";

export default function FormField({ 
    fieldData, 
    fieldKey, 
    fieldValue, 
    handleChange // La función del padre (setValueForm) para actualizar el estado
}) {
    
    const { id: fieldId, name: fieldName, type: fieldType, label } = fieldData;
    
    let inputType = 'text';
    
    switch (fieldType) {
        case 'number':
            inputType = 'number';
            break;
        case 'mail':
            inputType = 'email';
            break;
        case 'phone':
            inputType = 'tel';
            break;
        case 'date':
            inputType = 'date';
            break;
    }
    
    

    if (fieldType === 'radio') {
        return (
            <fieldset className='mcb-flex mcb-ai-c mcb-gap-5' key={fieldKey}>
                <input 
                    type="radio"
                    id={fieldId} 
                    name={fieldName} 
                    value={label === 'Si' ? true : false}
                    onChange={handleChange} // El padre manejará el target.name/id
                    checked={fieldValue === (label === 'Si' ? true : false)}
                />
                <label htmlFor={fieldId}>{label}</label>
            </fieldset>
        );
    }
    
    return (
        <fieldset className='mcb-field' key={fieldKey}>
            <label htmlFor={fieldId} className='mcb-label'>{label}</label>
            <input
                type={inputType} 
                id={fieldId}
                name={fieldName} 
                placeholder={label}
                value={fieldValue}
                onChange={handleChange}
                className="mcb-input" 
            />
        </fieldset>
    );
}