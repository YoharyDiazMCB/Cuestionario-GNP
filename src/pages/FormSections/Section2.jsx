import React, {useState} from "react"
import { AddButton } from "../../assets/components/AddButton"
import FormField from "../../assets/components/FormField"

export default function Section2({title=null}){
    const defaultValues={
        s2_q1: { value:'', required:false, },
        s2_q2: { value:'', required:false, },
        s2_q3: { value:'', required:false, },
        s2_q4: { value:'', required:false, },
        s2_q5: { value:'', required:false, },
        s2_q6_1: { value:'', required:false, }, // ! RADIO
        s2_q6_2: { value:'', required:false, }, // ! RADIO
        s2_q7: { value:'', required:false, },
        s2_q8: { value:'', required:false, },
        s2_q9: { value:'', required:false, },
        s2_q10: { value:'', required:false, },
        s2_q11: { value:'', required:false, },
        // solicitantes:[solicitante],

        s2_1_q0: { value:'', required:false, },
        s2_1_q1: { value:'', required:false, },
        s2_1_q2: { value:'', required:false, },
        s2_1_q3: { value:'', required:false, },
        s2_1_q4: { value:'', required:false, },
        s2_1_q5: { value:'', required:false, },
        s2_1_q6: { value:'', required:false, },
        s2_1_q7: { value:'', required:false, },

        // solicitantesViajeros:[solicitanteViajero],
    }
    
    const fields=[
        { id:'s2_q1', label:'Apellido Paterno', type:'text', },
        { id:'s2_q2', label:'Apellido Materno', type:'text', },
        { id:'s2_q3', label:'Nombre(s)', type:'text', },
        { id:'s2_q4', label:'Parentesco', type:'text', },
        { id:'s2_q5', label:'Fecha de Nacimiento', type:'date', },
        { name:'s2_q6', id:'s2_q6_1', type:'radio', label:'Masculino' },
        { name:'s2_q6', id:'s2_q6_2', type:'radio', label:'Femenino' },
        { id:'s2_q7', label:'Estatura (metros)', type:'number', },
        { id:'s2_q8', label:'Peos (kilogramos)', type:'number', },
        { id:'s2_q9', label:'Ocupación (sólo mayor de edad)', type:'text', },
        { id:'s2_q10', label:'RFC', type:'text', },
        { id:'s2_q11', label:'CURP', type:'text', },
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

    const addSolicitante = ()=>{
        console.log('temp')
        // if(valueForm.solicitantes.length<4){
        //     setValueForm(prev => ({
        //         ...prev,
        //         solicitantes:[
        //             ...prev.solicitantes,
        //             {...solicitante}
        //         ]
        //     }));
        // }                             
    }

    return(
        <>
            <div className="mcb-flex mcb-gap-30 mcb-jc-sb">
                <h2>{title}</h2>
                <AddButton title='Agregar solicitante' onClick={addSolicitante}></AddButton>
            </div>
            
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