import React from "react";

export default function FormField({ 
    fieldData, 
    fieldKey=null, 
    fieldValue,
    solicitantes=null, 
    arrayDatos=null, 
    handleChange
}) {
    
    const { id: fieldId, name: fieldName, type: fieldType, label, radioOptions } = fieldData;
    const letraSolicitante=['A','B','C','D'];
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
    
    if((fieldType === 'radioOptions')){
        return (
            <fieldset className="mcb-field">
                <p className="mcb-label">{label}</p>
                <div className="mcb-flex mcb-gap-20">
                    {radioOptions.map((i, index)=>(
                        <div key={index} className="mcb-flex mcb-gap-5">
                            <input 
                                type="radio"
                                id={i.id} 
                                name={fieldName + '_' + fieldKey} 
                                value={i.label}
                                onChange={handleChange} 
                                checked={fieldValue === i.label}
                                
                            />
                            <label htmlFor={i.id}>{i.label}</label>
                        </div>
                    ))}
                </div>
            </fieldset>
        )
    }
    
    if(fieldType=== 'selectSolicitante'){
        if(solicitantes!==null){
            const formDataArray = solicitantes[arrayDatos];
            
            const selectedValues = formDataArray
            .map(item => item[fieldId].value)
            .filter(value => value !== "" && value !== undefined);
            
            const usedValuesExcludingCurrent = selectedValues.filter(
                value => value !== fieldValue
            );
            return (
                <fieldset>
                    <label htmlFor={fieldId} className="mcb-label">{label}</label>
                    <select value={fieldValue} id={fieldId} className="mcb-input" onChange={handleChange}>
                        <option value="" disabled>Seleccione una opción</option>
                        {solicitantes.solicitantes.map((i, index) => {
                            const optionValue = index.toString();
                            if (usedValuesExcludingCurrent.includes(optionValue)) {
                                return null;
                            }
                            
                            return (
                                <option value={optionValue} key={index}>
                                    Solicitante {letraSolicitante[index]}
                                </option>
                            );
                        })}
                    </select>
                </fieldset>
            )
        }else{
            return
        }
    }

    if (fieldType === 'yesOrNot') {
        const options=[
            { label: 'Si', value: 'true' },
            { label: 'No', value: 'false' },
        ];
        return (
            <fieldset className='mcb-field' key={fieldKey}>
                <p>{label}</p>
                <div className="mcb-flex mcb-gap-20">
                    {options.map((i, index)=>(
                        <div key={index} className="mcb-flex mcb-gap-5">
                            <input 
                                type="radio"
                                id={fieldKey !== null ? fieldId + '_' + fieldKey : fieldId+'_'+index } 
                                name={ fieldKey !== null ? fieldName + '_' + fieldKey : fieldName } 
                                value={i.value}
                                onChange={handleChange} 
                                checked={fieldValue === i.value}
                            />
                            <label htmlFor={fieldKey !== null ? fieldId + '_' + fieldKey : fieldId+'_'+index}>{i.label}</label>
                        </div>
                    ))}
                </div>
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