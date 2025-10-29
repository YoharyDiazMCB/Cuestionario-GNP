import React, { useState } from 'react'
import './assets/scss/_GNPForm.scss'
import { AddButton } from './assets/components/AddButton';

export default function Cuestionario(){
    const solicitante={
        fields:[
            {
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
            }
        ]
    }
    const defaultValues={
        // ? SECTION 1
        s1_q1: { value:'', required:false,},
        s1_q2: { value:'', required:false, },

        // ? SECTION 2
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
        
        solicitantes:[solicitante],

        // ? section3
        s3_q1: { value:'', required:false, },
        s3_q2: { value:'', required:false, },
        s3_q3: { value:'', required:false, },
        s3_q4: { value:'', required:false, },
        s3_q5: { value:'', required:false, },

        // ? section 4
        s4_q1_1: { value:'', required:false, }, // ! radio
        s4_q1_2: { value:'', required:false, }, // ! radio
        s4_q2_1: { value:'', required:false, }, // ! radio
        s4_q2_2: { value:'', required:false, }, // ! radio
        s4_q3_1: { value:'', required:false, }, // ! radio
        s4_q3_2: { value:'', required:false, }, // ! radio
        s4_q4_1: { value:'', required:false, },
        s4_q4_2: { value:'', required:false, }, // ! radio
        s4_q4_3: { value:'', required:false, },
        s4_q4_4: { value:'', required:false, }, // ! radio
        s4_q4_5: { value:'', required:false, },
        s4_q5_1: { value:'', required:false, },
        s4_q5_2: { value:'', required:false, },
        s4_q5_3: { value:'', required:false, },
        s4_q5_4: { value:'', required:false, },
        s4_q5_5: { value:'', required:false, }, // ! radio
        s4_q5_6: { value:'', required:false, },
        s4_q5_7: { value:'', required:false, },
        s4_q5_8: { value:'', required:false, },
        s4_q5_9: { value:'', required:false, },

        // ? section 5
        s5_q1: { value:'', required:false, },
        s5_q2: { value:'', required:false, },
        s5_q3: { value:'', required:false, },
        s5_q4: { value:'', required:false, },
        s5_q5: { value:'', required:false, },
        s5_q6: { value:'', required:false, }, // ! radio

        // ? section 6
        s6_q1: { value:'', required:false, }, // ! radio
        s6_q2: { value:'', required:false, },
        s6_q3: { value:'', required:false, },
        s6_q4: { value:'', required:false, },
        s6_q5: { value:'', required:false, },

        // ? section 7
        s7_q1: { value:'', required:false, },
        s7_q2: { value:'', required:false, },
        s7_q3: { value:'', required:false, },
        s7_q4: { value:'', required:false, },
        s7_q5: { value:'', required:false, },
        s7_q6: { value:'', required:false, },
        s7_q7: { value:'', required:false, },
        s7_q8: { value:'', required:false, },
    };

    const [valueForm, setValueForm]=useState(defaultValues);
    

    const [sections, setSections]=useState(
        [
            // ? SECTION 1
            {
                section:'s1',
                title:'I. Datos del contratante',
                fields:[
                    {
                        id:'s1_q1',
                        label:'Razón Social/Nombre completo (Apellido Paterno, Apellido Materno, Nombre(s))',
                        type:'text',
                    },
                    { id:'s1_q2', label:'Número de Póliza', type:'number', },
                ]
            },
            // ? SECTION 2
            {
                section:'s2',
                title:'II. Solicitantes',
                fields:[
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
            },
            // ? SECTION 3
            {
                section:'s3',
                title:'III. Ocupación',
                options:[
                    { id:'op1', label:'Operador de maquinaria pesada', },
                    { id:'op2', label:'Trabaja con explosivos, solventes, productos quimicos peligrosos', },
                    { id:'op3', label:'Visita o asiste a obras o construcciones', },
                    { id:'op4', label:'Utiliza, maneja o su trabajo está relacionado con la utilización o portación de armas de fuego, seguridad, rescate', },
                    { id:'op5', label:'Agrícola con uso de fertilizantes, pesticidas, herbicidas, etc.', },
                ],
                fields:[
                    { name:'s3_q1', id:'s3_q1_1', type:'radio', label:'Si', },
                    { name:'s3_q1', id:'s3_q1_2', type:'radio', label:'No', },
                    { id:'s3_q2', label:'Solicitante', type:'text', },
                    { id:'s3_q3', label:'Número de actividad', type:'text', },
                    { id:'s3_q4', label:'Describa las funciones que realiza', type:'text', },
                    { id:'s3_q5', label:'Actividad o giro de la empresa', type:'text', },
                ]
            },
            // ? SECTION 4
            {
                section:'s4',
                title:'IV. Información Médica',
                fields:[
                    // * 1
                    { name:'s4_q1', id: 's4_q1_1', label: 'Si', type: 'radio' },
                    { name:'s4_q1', id: 's4_q1_2', label: 'No', type: 'radio' },
                    //  * 2
                    { name:'s4_q2', id: 's4_q2_1', label: 'Si', type: 'radio' },
                    { name:'s4_q2', id: 's4_q2_2', label: 'No', type: 'radio' },
                    // * 3
                    { name:'s4_q3', id: 's4_q3_1', label: 'Si', type: 'radio' },
                    { name:'s4_q3', id: 's4_q3_2', label: 'No', type: 'radio' },
                    //  * 4. exclusivo para mujeres
                    { id: 's4_q4_1', label: 'Solicitante', type: 'select'},
                    { name:'s4_q4_2', id: 's4_q4_2_1', label: 'Si', type: 'radio' },
                    { name:'s4_q4_2', id: 's4_q4_2_2', label: 'No', type: 'radio' },
                    { id: 's4_q4_3', label: 'Meses de gestación', type:'number'}, 
                    { name:'s4_q4_4', id: 's4_q4_4_1', label: 'Si', type: 'radio' },
                    { name:'s4_q4_4', id: 's4_q4_4_2', label: 'No', type: 'radio' },
                    { id: 's4_q4_5', label: 'Especifique', type:'text'}, 
                    // * 5. detalle
                    { id:'s4_q5_1', label:'Solicitante', type:'select', },
                    { id:'s4_q5_2', label:'Enfermedad o accidente', type:'text', },
                    { id:'s4_q5_3', label:'Mes', type:'select', },
                    { id:'s4_q5_4', label:'Año', type:'numberber', },
                    // * ¿Estuvo hospitalizado?
                    { name:'s4_q5_5', id:'s4_q5_5_1', label:'Si', type:'radio', },
                    { name:'s4_q5_5', id:'s4_q5_5_2', label:'No', type:'radio', },
                    { id:'s4_q5_6', label:'Tipo de tratamiento (quirúrgico, médico o de rehabilitación). Especifique', type:'text', },
                    { id:'s4_q5_7', label:'Estado actual de salud', type:'text', },
                    { id:'s4_q5_8', label:'¿Quedó con alguna complicación?', type:'text', },
                    { id:'s4_q5_9', label:'¿Actualmente toma algún medicamento?. Especifique', type:'text', },
                ],
                questions:[
                    { id: 'q1', question:'¿Algún Solicitante padece o ha padecido alguna enfermedad como?: Hipertensión arterial, infarto, hepatitis, diabetes, epilepsia, esclerosis, fiebre reumática, SIDA, cáncer, tumores, enfermedades mentales, pulmonares, renales, neurológicas y cardiovasculares' },
                    { id: 'q2', question:'¿Algún Solicitante ha sido hospitalizado, o le han hecho alguna cirugía (incluyendo cirugías ambulatorias) por cualquier enfermedad o accidente?' },
                    { id: 'q3', question:'¿Algún Solicitante adece alguna enfermedad no referida en el apartado 1, está en tratamiento, tiene programada atención médica' },
                ],
            },
            // ? SECTION 5
            {
                section:'s5',
                title:'V. Deportes y/o aficiones que practica',
                fields:[
                    { id:'s5_q1', label:'Solicitante', type:'select', },
                    { id:'s5_q2', label:'¿Qué deportes y/o aficiones practica?', type:'text', },
                    { id:'s5_q3', label:'No profesional', type:'checkbox', },
                    { id:'s5_q4', label:'Profesional', type:'checkbox', },
                    { id:'s5_q5', label:'Número de veces', type:'number', },
                    { name:'s5_q6', id:'s5_q6_1', label:'Semanal', type:'radio', },
                    { name:'s5_q6', id:'s5_q6_2', label:'Mensual', type:'radio', },
                    { name:'s5_q6', id:'s5_q6_3', label:'Anual', type:'radio', },
                ]
            },
            // ? SECTION 6
            {
                section:'s6',
                title:'Declaracion y consentimiento',
                fields:[
                    { name:'s6_q1', id:'s6_q1_1', label:'Si', type:'radio' },
                    { name:'s6_q1', id:'s6_q1_2', label:'No', type:'radio' },
                    
                    { id:'s6_q2', label:'Lugar', type:'text', },
                    { id:'s6_q3', label:'Fecha', type:'date', },
                    { id:'s6_q4', label:'Nombre del Solicitante', type:'text', },
                    { id:'s6_q5', label:'Firma del Solicitante', type:'text', },
                ]
            },
            // ? SECTION 7
            {
                section: 's7',
                title: 'Datos del Agente',
                fields: [
                    { id:'s7_q1', label:'Clave del Agente', type:'text' },
                    { id:'s7_q2', label:'Nombre del Agente', type:'text' },
                    { id:'s7_q3', label:'Número de folio', type:'text' },
                    { id:'s7_q4', label:'Porcentaje de participación', type:'text' },
                    { id:'s7_q5', label:'Direccion de Agencia', type:'text' },
                    { id:'s7_q6', label:'Correo electronico', type:'mail' },
                    { id:'s7_q7', label:'Telefono', type:'phone' },
                    { id:'s7_q8', label:'Firma del Agente', type:'text' },
                ]
            }

        ]
    );
    const handleChange = (e) => {
        const { id, value } = e.target;
        setValueForm(e => ({
            ...prevFormData,
            [id]: value,
        }));
    };

    const renderField = (field, fieldKey)=>{
        const fieldId= field.id;
        const fieldName= field.name;
        const fieldType= field.type;

        const fieldState=valueForm[fieldId];

        if (!fieldState) {
            console.error(`Campo no definido en defaultValues: ${fieldId}`);
            return null; 
        }

        let currentValue = fieldState.value;
        const required = fieldState.required;
        
        let inputType = 'text';

        switch (fieldType) {
            case 'number':
                inputType = 'text'; 
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
            default:
                inputType = 'text';
        }

        if(fieldType=== 'radio'){
            return(
                <div className='mcb-flex mcb-ai-c mcb-gap-5' key={fieldKey}>
                    <input 
                        type="radio"
                        id={fieldId} 
                        name={fieldName} 
                        required={required}
                    />
                    <label htmlFor={fieldName}>{field.label}</label>
                </div>
            )
        }
        
        return (
            <div className='mcb-field' key={fieldKey}>
                <label htmlFor={field} className='mcb-label'>{field.label}</label>
                <input
                    type={inputType} 
                    id={fieldId}
                    name={fieldName} 
                    placeholder={field.label}
                    value={currentValue}
                    required={required}
                    onChange={handleChange}
                    className="mcb-input" 
                    pattern={fieldType === 'numberber' || fieldType === 'number' ? '[0-9]*' : undefined} 
                />
            </div>
        );
    }
    

    const addSolicitante = ()=>{
        if(valueForm.solicitantes.length<4){
            setValueForm(prev => ({
                ...prev,
                solicitantes:[
                    ...prev.solicitantes,
                    {...solicitante}
                ]
            }));
        }                             
    }

    const letraSolicitante=['A','B','C','D'];

    return(
        <main className='mcb-flex-c mcb-gap-20'><h1 className='mcb-txt-c'>Cuestionario Médico de Seguro Colectivo</h1>
            {sections.map((sectionData, sectionIndex) => (
                <section className='mcb-card' key={sectionIndex}>
                    {sectionData.section === 's1' && (
                        <>
                            <h2>{sectionData.title}</h2>
                            <article className="mcb-grid-2 mcb-ai-fe">
                                {sectionData.fields.map((field, fieldIndex)=>(
                                renderField(field, fieldIndex)
                            ))}
                            <p>value: {useState[valueForm.s1_q1]}</p>
                            </article>
                        </>
                        
                    )}

                    {/* {sectionData.section === 's2' && (
                        <>
                            <div className="mcb-flex mcb-gap-30 mcb-jc-sb">
                                <h2>{sectionData.title}</h2>
                                <AddButton title='Agregar solicitante' onClick={addSolicitante}></AddButton>
                            </div>
                            {valueForm.solicitantes.map((solicitante, solicitanteIndex)=>(
                                <div key={solicitanteIndex}>
                                    <p className='mcb-fs-20 mcb-fw-6'>Solicitante {letraSolicitante[solicitanteIndex]}</p>
                                    <p>Q1: {solicitante.fields.s2_q1}</p>
                                    <article className='mcb-grid-4'>
                                        {sectionData.fields.map((field, fieldIndex)=>(
                                            renderField(field, fieldIndex)
                                        ))}
                                    </article>
                                </div>
                            ))}
                            <hr />
                            
                            <p className='mcb-fs-20 mcb-fw-6'>Viajes al extranjero</p>
                            <div className="mcb-flex mcb-gap-30 mqm-col">
                                <p className='mcb-color-b3'>Si alguno de los Solicitantes va a viajar al extranjero en los próximos 6 meses con una permanencia mayor a 3 meses, indíquelo a continuación anotando la letra del solicitante que corresponda (A,B,C,D)</p>
                                <AddButton title='Agregar solicitante que viaja'></AddButton>
                            </div>
                            <div className="mcb-field">
                                <label htmlFor="" className="mcb-label">Solicitante que viaja</label>
                                <select name="" id="" className='mcb-input'>
                                    <option value="" disabled selected>Seleccione una opción</option>
                                    {valueForm.solicitantes.map((solicitante, solicitanteIndex)=>(
                                        <option key={solicitanteIndex} value={solicitanteIndex}>Solicitante {letraSolicitante[solicitanteIndex]}</option>
                                    ))}
                                </select>
                            </div>
                        </>
                    )} */}

                    {sectionData.section === 's3' && (
                        <>
                        </>
                    )}
                </section>
            ))}
        </main>
    );
}