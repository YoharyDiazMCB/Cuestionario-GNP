import React, {useEffect, useState} from "react";
import FormField from "../../assets/components/FormField";
import { AddButton } from "../../assets/components/AddButton";
import { RemoveButton } from "../../assets/components/RemoveButton";

export default function Section4({
    title,    
    formValues=null, 
    setFormValues=null,
    solicitante=null, 
    setSolicitante=null, 
    solicitanteS4Default=null,
}){
    const questions=[
        {
            id: 's4_q1', 
            name:'s4_q1', 
            label:'¿Algún Solicitante padece o ha padecido alguna enfermedad como?: Hipertensión arterial, infarto, hepatitis, diabetes, epilepsia, esclerosis, fiebre reumática, SIDA, cáncer, tumores, enfermedades mentales, pulmonares, renales, neurológicas y cardiovasculares',
            type: 'yesOrNot'
        },
        {
            id: 's4_q2', 
            name:'s4_q2', 
            label:'¿Algún Solicitante ha sido hospitalizado, o le han hecho alguna cirugía (incluyendo cirugías ambulatorias) por cualquier enfermedad o accidente?',
            type: 'yesOrNot'
        },
        {
            id: 's4_q3', 
            name:'s4_q3', 
            label:'¿Algún Solicitante adece alguna enfermedad no referida en el apartado 1, está en tratamiento, tiene programada atención médica',
            type: 'yesOrNot'
        }
    ];
    
    const fields=[ 
        { id:'s4_q5_1', label:'Solicitante', type:'selectSolicitante', },
        { id:'s4_q5_2', label:'Enfermedad o accidente', type:'text', },
        { id:'s4_q5_3', label:'Mes', type:'select', },
        { id:'s4_q5_4', label:'Año', type:'number', },
        { id:'s4_q5_5', name:'s4_q5_5', label:'¿Estuvo hospitalizado?', type:'yesOrNot', },
        { id:'s4_q5_6', label:'Tipo de tratamiento (quirúrgico, médico o de rehabilitación). Especifique', type:'text', },
        { id:'s4_q5_7', label:'Estado actual de salud', type:'text', },
        { id:'s4_q5_8', name:'s4_q5_8', label:'¿Quedó con alguna complicación?', type:'yesOrNot', },
        { id:'s4_q5_9', label:'¿Actualmente toma algún medicamento?. Especifique', type:'text', },
    ];
    
    const addSolicitanteS4=()=>{
        if(solicitante.solicitantesSeccion4.length < solicitante.solicitantes.length){
            setSolicitante(prev => ({
                ...prev,
                solicitantesSeccion4:[
                    ...prev.solicitantesSeccion4,
                    {...solicitanteS4Default}
                ]
            }));
            
        }
    }
    
    const clearSolicitanteS4 = () => {
        setSolicitante(prev => ({
            ...prev,
            solicitantesSeccion4: []
        }));
    };

    const removeSolicitanteS4= (solicitanteIndex)=>{
        setSolicitante(prev => ({
            ...prev,
            solicitantesSeccion4: prev.solicitantesSeccion4.filter((_, index) => index !== solicitanteIndex)
        }));
    }
    
    const verifyNoInputs=()=>{
        if( formValues.s4_q1.value=='false' && 
            formValues.s4_q2.value==='false' && 
            formValues.s4_q3.value==='false'
        ){
            clearSolicitanteS4();
        }
    }

    useEffect(()=>{
        verifyNoInputs()
    },[formValues.s4_q1, formValues.s4_q2, formValues.s4_q3  ]);

    const handleChangeQuestions = (e) => {
        let { id, name, value: inputValue, type, checked } = e.target;
        let key = name || id;
        
        setFormValues(prevFormData=> ({
            ...prevFormData,
            [key]:{value:inputValue, required:prevFormData[key].required}
        }))
        if (inputValue==='true' && solicitante.solicitantesSeccion4.length === 0) {
            addSolicitanteS4();
        }
    };

    const handleChange = (e, solicitanteIndex, fieldId=null) => {
        let { id, name, value: inputValue, type, checked } = e.target;
        let key = name || id;
        
        if(fieldId != null){
            key=fieldId;
        }
        
        setSolicitante(prevFormData => {
            const nuevosSolicitantes = [...prevFormData.solicitantesSeccion4];
            
            const solicitantesAux = { ...nuevosSolicitantes[solicitanteIndex] };
            
            solicitantesAux[key] = { 
                ...solicitantesAux[key], 
                value: inputValue,
            };
            
            nuevosSolicitantes[solicitanteIndex] = solicitantesAux;
            return {
                ...prevFormData,
                solicitantesSeccion4: nuevosSolicitantes
            };
        });
    }

    const letraSolicitante=['A','B','C','D'];
    
    return(
        <>
            <h2>{title}</h2>
            { questions.map((q, qIndex)=>(
                <FormField 
                    key={qIndex}
                    fieldData={q} 
                    fieldValue={formValues[q.id].value} 
                    handleChange={(e)=>handleChangeQuestions(e)}>
                </FormField>
            ))}

            {solicitante.solicitantesSeccion4.map((i, index)=>(
                <div key={index} className="mcb-flex-c mcb-gap-20">
                    <div className="mcb-flex mcb-gap-20 mcb-jc-sb">
                        <p className="mcb-fs-18 mcb-fw-6">Información médica del Solicitante {letraSolicitante[i.s4_q5_1.value]}</p>
                        <RemoveButton title={'Descartar solicitante'} onClick={()=>removeSolicitanteS4(index)}></RemoveButton>
                    </div>
                    <section className="mcb-grid-4 mcb-ai-fe" >
                        {fields.map((field, fieldIndex)=>{
                            if(fieldIndex<=4){
                                return(
                                    <FormField 
                                        key={fieldIndex}
                                        fieldData={field} 
                                        fieldKey={fieldIndex} 
                                        fieldValue={i[field.id].value} 
                                        solicitantes={solicitante} 
                                        arrayDatos={'solicitantesSeccion4'}
                                        handleChange={(e)=>handleChange(e, index, field.id)}
                                    >
                                    </FormField>
                                )
                            }
                            // ! renderizado en caso de que el solicitante haya sido hospitalizado
                            if( fieldIndex===5 && i['s4_q5_5'].value ==='true'){
                                return(
                                    <FormField 
                                        key={fieldIndex}
                                        fieldData={field} 
                                        fieldKey={fieldIndex} 
                                        fieldValue={i[field.id].value} 
                                        solicitantes={solicitante} 
                                        arrayDatos={'solicitantesSeccion4'}
                                        handleChange={(e)=>handleChange(e, index, field.id)}
                                    >
                                    </FormField>
                                )
                            }
                            if(fieldIndex>5){
                                return(
                                    <FormField 
                                        key={fieldIndex}
                                        fieldData={field} 
                                        fieldKey={fieldIndex} 
                                        fieldValue={i[field.id].value} 
                                        solicitantes={solicitante} 
                                        arrayDatos={'solicitantesSeccion4'}
                                        handleChange={(e)=>handleChange(e, index, field.id)}
                                    >
                                    </FormField>
                                )
                            }
                        })}
                        
                    </section>
                    {solicitante.solicitantesSeccion4.length>1 &&( <hr /> )}
                </div>
            ))}
            {(solicitante.solicitantesSeccion4.length>0 && solicitante.solicitantesSeccion4.length<solicitante.solicitantes.length) && (
                <AddButton title={'Agregar otro solicitante'} onClick={addSolicitanteS4}></AddButton>
            )}
        </>
    )
}