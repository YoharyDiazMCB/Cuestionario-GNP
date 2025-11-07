import FormField from "../../assets/components/FormField";
import { AddButton } from "../../assets/components/AddButton";
import { RemoveButton } from "../../assets/components/RemoveButton";

export default function Section3({
    title,    
    formValues=null, 
    setFormValues=null,
    solicitante=null, 
    setSolicitante=null, 
    solicitanteS3Default=null,

}){
    const activities=[
            { id:'op1', label:'Operador de maquinaria pesada', },
            { id:'op2', label:'Trabaja con explosivos, solventes, productos quimicos peligrosos', },
            { id:'op3', label:'Visita o asiste a obras o construcciones', },
            { id:'op4', label:'Utiliza, maneja o su trabajo está relacionado con la utilización o portación de armas de fuego, seguridad, rescate', },
            { id:'op5', label:'Agrícola con uso de fertilizantes, pesticidas, herbicidas, etc.', },
        ];

    const ifActivities={ 
        id: 's3_q1', 
        name:'s3_q1', 
        label: 'Indique si alguno de los Solicitantes se dedica o trabaja en alguna de las siguientes actividades:', 
        type: 'yesOrNot'
    };
    const fields=[
            { id:'s3_q2', label:'Seleccione el Solicitante que se dedica o trabaja en alguna de las siguientes actividades:', type:'selectSolicitante', },
            { id:'s3_q3', label:'Número de actividad', type:'text', },
            { id:'s3_q4', label:'Describa las funciones que realiza', type:'text', },
            { id:'s3_q5', label:'Actividad o giro de la empresa', type:'text', },
        ];

    const addSolicitanteS3=()=>{
        if(solicitante.solicitantesSeccion3.length < solicitante.solicitantes.length){
            setSolicitante(prev => ({
                ...prev,
                solicitantesSeccion3:[
                    ...prev.solicitantesSeccion3,
                    {...solicitanteS3Default}
                ]
            }));
            
        }
    }
    
    const clearSolicitanteS3 = () => {
        setSolicitante(prev => ({
            ...prev,
            solicitantesSeccion3: []
        }));
    };

    const removeSolicitanteS3= (solicitanteIndex)=>{
        setSolicitante(prev => ({
            ...prev,
            solicitantesSeccion3: prev.solicitantesSeccion3.filter((_, index) => index !== solicitanteIndex)
        }));
    }

    const handleChangeFormvalues = (e) => {
        let { id, name, value: inputValue, type, checked } = e.target;
        let key = name || id;

        if (inputValue==='true' && solicitante.solicitantesSeccion3.length === 0) {
            addSolicitanteS3();
        }
        if (inputValue==='false' && solicitante.solicitantesSeccion3.length > 0) {
            clearSolicitanteS3();
        }
        setFormValues(prevFormData=> ({
            ...prevFormData,
            [key]:{value:inputValue, required:prevFormData[key].required}
        }))
    };

    const handleChange = (e, solicitanteIndex) => {
        let { id, name, value: inputValue, type, checked } = e.target;
        const key = name || id;
        
        setSolicitante(prevFormData => {
            const nuevosSolicitantes = [...prevFormData.solicitantesSeccion3];
            
            const solicitantesAux = { ...nuevosSolicitantes[solicitanteIndex] };
            
            solicitantesAux[key] = { 
                ...solicitantesAux[key], 
                value: inputValue,
            };
            
            nuevosSolicitantes[solicitanteIndex] = solicitantesAux;
            return {
                ...prevFormData,
                solicitantesSeccion3: nuevosSolicitantes
            };
        });
    }
    const letraSolicitante=['A','B','C','D'];

    return(
        <>
            <h2>{title}</h2>
            <FormField 
                fieldData={ifActivities} 
                fieldValue={formValues.s3_q1.value} 
                handleChange={(e)=>handleChangeFormvalues(e)}>
            </FormField>
            
            <ol>
                {activities.map((i, index)=>(
                    <li key={index}>{i.label}</li>
                ))}
            </ol>
            
            {solicitante.solicitantesSeccion3.map((i, index)=>(
                <div className="mcb-flex-c mcb-gap-20" key={index}>
                    <div className="mcb-flex mcb-gap-20 mcb-jc-sb">
                        <p className="mcb-fs-18 mcb-fw-6">Información de la ocupación del Solicitante {letraSolicitante[i.s3_q2.value]}</p>
                        <RemoveButton title={'Descartar solicitante'} onClick={()=>removeSolicitanteS3(index)}></RemoveButton>
                    </div>
                    <section className="mcb-grid-4 mcb-ai-fe">
                        { fields.map((field, fieldIndex)=>(
                            <FormField 
                                key={fieldIndex}
                                fieldData={field} 
                                fieldKey={fieldIndex} 
                                fieldValue={i[field.id].value} 
                                solicitantes={solicitante} 
                                arrayDatos={'solicitantesSeccion3'}
                                handleChange={(e)=>handleChange(e, index)}
                            >
                            </FormField>
                        ))}
                    </section>
                    {solicitante.solicitantesSeccion3.length>1 &&(
                        <hr />
                    )}
                </div>
            ))}

            {(solicitante.solicitantesSeccion3.length<solicitante.solicitantes.length && formValues.s3_q1.value==='true' ) &&(
                <AddButton title={'Agregar otro solicitante'} onClick={addSolicitanteS3}></AddButton>
            )}
        </>
    )
}