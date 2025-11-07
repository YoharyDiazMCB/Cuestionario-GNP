import React, {useState} from "react"
import { AddButton } from "../../assets/components/AddButton"
import { RemoveButton } from "../../assets/components/RemoveButton"
import FormField from "../../assets/components/FormField"

export default function Section2({
    title=null, 
    solicitante=null, 
    setSolicitante=null, 
    addSolicitante=null,
    removeSolicitante=null ,
    addViajero=null, 
    removeViajero=null,
}){
    const fields=[
        { id:'s2_q1', label:'Apellido Paterno', type:'text', },
        { id:'s2_q2', label:'Apellido Materno', type:'text', },
        { id:'s2_q3', label:'Nombre(s)', type:'text', },
        { id:'s2_q4', label:'Parentesco', type:'text', },
        { id:'s2_q5', label:'Fecha de Nacimiento', type:'date', },
        { id: 's2_q6', name:'s2_q6', label: 'Género', type: 'radioOptions', radioOptions:[
            { id:'s2_q6_1', type:'radio', label:'Masculino' },
            { id:'s2_q6_2', type:'radio', label:'Femenino' },
        ]},
        { id:'s2_q7', label:'Estatura (metros)', type:'number', },
        { id:'s2_q8', label:'Peso (kilogramos)', type:'number', },
        { id:'s2_q9', label:'Ocupación (sólo mayor de edad)', type:'text', },
        { id:'s2_q10', label:'RFC', type:'text', },
        { id:'s2_q11', label:'CURP', type:'text', },
    ]
    
    const viajeroFields=[
        { id:'s2_1_q1', label:'Apellido Paterno', type:'text', },
        { id:'s2_1_q2', label:'Apellido Materno', type:'text', },
        { id:'s2_1_q3', label:'Nombre(s)', type:'text', },
        { id:'s2_1_q4', label:'Certificado', type:'text', },
        { id:'s2_1_q5', label:'Fecha de inicio de viaje', type:'date', },
        { id:'s2_1_q6', label:'Fecha de fin de viaje', type:'date', },
        { id:'s2_1_q7', label:'Destino', type:'text', },
    ]


    const letraSolicitante=['A','B','C','D'];

    const handleChange = (e, solicitanteIndex, radioValue=null) => {
        let { id, name, value: inputValue, type, checked } = e.target;
        let key = name || id;
        if(radioValue != null){
            key=radioValue;
        }
        
        setSolicitante(prevFormData => {
            const nuevosSolicitantes = [...prevFormData.solicitantes];
            const solicitanteAActualizar = { ...nuevosSolicitantes[solicitanteIndex] };

            solicitanteAActualizar[key] = { 
                ...solicitanteAActualizar[key],
                value: inputValue,              // Actualizar 'value'
            };

            nuevosSolicitantes[solicitanteIndex] = solicitanteAActualizar;
            
            return {
                ...prevFormData,
                solicitantes: nuevosSolicitantes
            };
        });
    };

    const handleViajero = (e, viajeroIndex) => {
        let { id, name, value: inputValue, type, checked } = e.target;
        const key = name || id;
        
        setSolicitante(prevFormData => {
            const nuevoViajero = [...prevFormData.solicitantesViajeros];
            
            const viejerosAux = { ...nuevoViajero[viajeroIndex] };
            
            viejerosAux[key] = { 
                ...viejerosAux[key], 
                value: inputValue,
            };
            
            nuevoViajero[viajeroIndex] = viejerosAux;
            
            return {
                ...prevFormData,
                solicitantesViajeros: nuevoViajero
            };
        });
    }

    return(
        <>
            <h2>{title}</h2>
            
            {solicitante.solicitantes.map((i, index)=>(
                <div key={index} className="mcb-flex-c mcb-gap-20">
                    <div className="mcb-flex mcb-gap-30 mcb-jc-sb">
                        <p className="mcb-fs-20 mcb-fw-6">Solicitante {letraSolicitante[index]}</p>
                        {solicitante.solicitantes.length>1 &&(
                            <RemoveButton title={'Eliminar solicitante'} onClick={()=>removeSolicitante(index)}></RemoveButton>                        
                        )}
                    </div>
                    <section className="mcb-grid-4">
                        {
                            fields.map((field, fieldIndex)=>{
                                if(field.id!=='s2_q6'){
                                    return(
                                        <div key={fieldIndex}>
                                            <FormField 
                                                fieldData={field} 
                                                fieldKey={fieldIndex} 
                                                fieldValue={i[field.id].value} 
                                                handleChange={(e)=>handleChange(e, index)}>
                                            </FormField>
                                        </div>
                                    )
                                }else{
                                    return(
                                        <div key={fieldIndex}>
                                            <FormField 
                                                fieldData={field} 
                                                fieldKey={index} 
                                                fieldValue={i[field.id].value} 
                                                handleChange={(e)=>handleChange(e, index , field.id)}>
                                            </FormField>
                                        </div>
                                    )
                                }
                            })}
                    </section>
                    {solicitante.solicitantes.length>1 &&(
                        <hr />

                    )}
                    {/* <p>{solicitante.solicitantes[index].s2_q6.value}</p> */}
                </div>
            ))}

            {solicitante.solicitantes.length<4 && (
                <AddButton title='Agregar solicitante' onClick={addSolicitante}></AddButton>
            )}
            
            <p className='mcb-fs-20 mcb-fw-6'>Viajes al extranjero</p>
            <p className='mcb-color-b3'>Si alguno de los Solicitantes va a viajar al extranjero en los próximos 6 meses con una permanencia mayor a 3 meses, indíquelo a continuación anotando la letra del solicitante que corresponda (A,B,C,D)</p>
            
            {solicitante.solicitantesViajeros.map((i, index)=>(
                <section key={index} className="mcb-grid-4 mcb-ai-fe">
                    <fieldset className="mcb-flex-c mcb-gap-10">
                        <label htmlFor="s2_1_q0" className="mcb-label">Solicitante que viaja</label>
                        <select name="s2_1_q0" id="s2_1_q0" value={i.s2_1_q0.value}  onChange={(e)=>handleViajero(e, index)} className='mcb-input'>
                            <option value="" disabled>Seleccione una opción</option>
                            {solicitante.solicitantes.map((i, index)=>(
                                <option key={index} value={index}>Solicitante {letraSolicitante[index]}</option>
                            ))}
                        </select>
                    </fieldset>
                    {i.s2_1_q0.value !== '' && (
                        viajeroFields.map((field, fieldIndex)=>{
                            if(field.id === 's2_1_q1'){
                                return(
                                    <div key={fieldIndex} className="mcb-field">
                                        <p className="mcb-label">{field.label}</p>
                                        <p className="mcb-pd-10">{solicitante.solicitantes[i.s2_1_q0.value].s2_q1.value}</p>
                                    </div> 
                                )
                            }else if(field.id === 's2_1_q2'){
                                return(
                                    <div key={fieldIndex} className="mcb-field">
                                        <p className="mcb-label">{field.label}</p>
                                        <p className="mcb-pd-10">{solicitante.solicitantes[i.s2_1_q0.value].s2_q2.value}</p>
                                        {/* <FormField 
                                            fieldData={field} 
                                            fieldKey={fieldIndex} 
                                            fieldValue={solicitante.solicitantes[i.s2_1_q0.value].s2_q2.value} 
                                            handleChange={(e)=>handleViajero(e, index)}>
                                        </FormField> */}
                                    </div>
                                )
                            }else if(field.id === 's2_1_q3'){
                                return(
                                    <div key={fieldIndex} className="mcb-field">
                                        <p className="mcb-label">{field.label}</p>
                                        <p className="mcb-pd-10">{solicitante.solicitantes[i.s2_1_q0.value].s2_q3.value}</p>
                                    </div>
                                )
                            }else{
                                return(
                                    <div key={fieldIndex}>
                                        <FormField 
                                            fieldData={field} 
                                            fieldKey={fieldIndex} 
                                            fieldValue={i[field.id].value} 
                                            handleChange={(e)=>handleViajero(e, index)}>
                                        </FormField>
                                    </div>
                                )
                            }
                        })  
                    )}
                    <RemoveButton title={'Eliminar solicitante viajero'} onClick={()=>removeViajero(index)}></RemoveButton>
                </section>
            ))}
            <AddButton title='Agregar solicitante que viaja' onClick={addViajero}></AddButton>
        </>
    )
}