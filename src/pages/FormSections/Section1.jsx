import React, {useState} from "react";
import FormField from "../../assets/components/FormField";
export default function Section1({
    title=null, 
    formValues=null, 
    setFormValues=null
}){

    const fields=[
        {
            id:'s1_q1',
            label:'Razón Social/Nombre completo (Apellido Paterno, Apellido Materno, Nombre(s))',
            type:'text',
        },
        { id:'s1_q2', label:'Número de Póliza', type:'number', },
    ]
    const handleChange = (e) => {
        let { id, name, value:inputValue, type, checked } = e.target;
        const key = name || id; 

        setFormValues(prevFormData => ({
            ...prevFormData,
            [id]: { value: inputValue, required:prevFormData[id].required}
        }));
    };

    return(
        <>
            <h2>{title}</h2>
            
            <section className="mcb-grid-2 mcb-ai-fe">
                {
                    fields.map((field, fieldIndex)=>(
                        <div key={fieldIndex}>
                            <FormField 
                                fieldData={field} 
                                fieldKey={fieldIndex} 
                                fieldValue={formValues[field.id].value} 
                                handleChange={handleChange}>
                            </FormField>
                        </div>
                    ))
                }
            </section>
        </>
    )
}