import React, {useState} from "react";
import FormField from "../../assets/components/FormField";
export default function Section1({title=null}){

    const defaultValues={
        s1_q1: { value:'', required:true,},
        s1_q2: { value:'', required:false, },
    }
    const fields=[
        {
            id:'s1_q1',
            label:'Razón Social/Nombre completo (Apellido Paterno, Apellido Materno, Nombre(s))',
            type:'text',
        },
        { id:'s1_q2', label:'Número de Póliza', type:'number', },
    ]
    const [valueForm, setValueForm]=useState(defaultValues);

    const handleChange = (e) => {
        let { id, name, value:inputValue, type, checked } = e.target;
        const key = name || id; 
        
        // const inputValue = type === 'checkbox' ? checked : value;
        setValueForm(prevFormData => ({
            ...prevFormData,
            [id]: { value: inputValue, required:prevFormData[id].required}
        }));
    };

    return(
        <>
            <h2>{title}</h2>
            <section className="mcb-grid-2">
                {
                    fields.map((field, fieldIndex)=>(
                        <div key={fieldIndex}>
                            <FormField 
                                fieldData={field} 
                                fieldKey={fieldIndex} 
                                fieldValue={valueForm[field.id].value} 
                                handleChange={handleChange}>
                            </FormField>
                        </div>
                    ))
                }
            </section>
        </>
    )
}