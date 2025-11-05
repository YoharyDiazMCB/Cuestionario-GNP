import React, {useState} from "react";
import '../scss/_FormStepper.scss'
import Section1 from "../../pages/FormSections/Section1";
import Section2 from "../../pages/FormSections/Section2";
import Section3 from "../../pages/FormSections/Section3";
import Section4 from '../../pages/FormSections/Section4';

export default function FormContStep({stepsArray, activeStep, setActiveStep}){
    const lastStep=stepsArray.length-1;
    const nextStep=()=>{
        if (activeStep < lastStep) {
            setActiveStep(activeStep + 1);
        }
    }

    const prevStep=()=>{
        if (activeStep > 0) {
            setActiveStep(activeStep - 1);
        }
    }

    const defaultValues={
        // ? SECTION 1
        s1_q1: { value:'', required:true,},
        s1_q2: { value:'', required:false, },

        // ? section3
        s3_q1: { value: false , required:false, },
        

        // ? section 4
        s4_q1: { value:false, required:false, }, // ! radio
        s4_q2: { value:false, required:false, }, // ! radio
        s4_q3: { value:false, required:false, }, // ! radio
        s4_q4_1: { value:'', required:false, },
        s4_q4_2: { value:'', required:false, }, // ! radio
        s4_q4_2_1: { value:'', required:false, }, // ! radio
        s4_q4_2_2: { value:'', required:false, }, // ! radio
        s4_q4_3: { value:'', required:false, },
        s4_q4_4: { value:'', required:false, }, // ! radio
        s4_q4_4_1: { value:'', required:false, }, // ! radio
        s4_q4_4_2: { value:'', required:false, }, // ! radio
        s4_q4_5: { value:'', required:false, },
        

        // ? section 5
        s5_q1: { value:'', required:false, },
        s5_q2: { value:'', required:false, },
        s5_q3: { value:'', required:false, },
        s5_q4: { value:'', required:false, },
        s5_q5: { value:'', required:false, },
        s5_q6: { value:'', required:false, }, // ! radio
        s5_q6_1: { value:'', required:false, }, // ! radio
        s5_q6_2: { value:'', required:false, }, // ! radio
        s5_q6_3: { value:'', required:false, }, // ! radio

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
    const solicitanteDefault={
            s2_q1: { value:'Navarro', required:false, },
            s2_q2: { value:'Sanchez', required:false, },
            s2_q3: { value:'M', required:false, },
            s2_q4: { value:'', required:false, },
            s2_q5: { value:'', required:false, },
            s2_q6: { value:'', required:false, }, // ! RADIO
            s2_q6_1: { value:'', required:false, }, // ! RADIO
            s2_q6_2: { value:'', required:false, }, // ! RADIO
            s2_q7: { value:'', required:false, },
            s2_q8: { value:'', required:false, },
            s2_q9: { value:'', required:false, },
            s2_q10: { value:'', required:false, },
            s2_q11: { value:'', required:false, },
    }
    const solicitanteViajeroDefault={
        s2_1_q0: { value:'', required:false, },
        s2_1_q1: { value:'', required:false, },
        s2_1_q2: { value:'', required:false, },
        s2_1_q3: { value:'', required:false, },
        s2_1_q4: { value:'', required:false, },
        s2_1_q5: { value:'', required:false, },
        s2_1_q6: { value:'', required:false, },
        s2_1_q7: { value:'', required:false, },
    }
    const solicitanteS3Default={
        s3_q2: { value:'', required:false, },
        s3_q3: { value:'sample', required:false, },
        s3_q4: { value:'', required:false, },
        s3_q5: { value:'', required:false, },
    }
    const solicitanteS4Default={
        s4_q5_1: { value:'', required:false, },
        s4_q5_2: { value:'', required:false, },
        s4_q5_3: { value:'', required:false, },
        s4_q5_4: { value:'', required:false, },
        s4_q5_5: { value:'', required:false, }, // ! radio
        s4_q5_6: { value:'', required:false, },
        s4_q5_7: { value:'', required:false, },
        s4_q5_8: { value:'', required:false, },
        s4_q5_9: { value:'', required:false, },
    }
    const defaultValuesSolicitantes={
        solicitantes:[solicitanteDefault],
        solicitantesViajeros:[],
        solicitantesSeccion3:[],
        solicitantesSeccion4:[],
    }

    const [formValue, setFormValue]=useState(defaultValues)
    const [solicitantesValues, setSolicitantesValues]=useState(defaultValuesSolicitantes);

    const addSolicitante = ()=>{
        if(solicitantesValues.solicitantes.length<4){
            setSolicitantesValues(prev => ({
                ...prev,
                solicitantes:[
                    ...prev.solicitantes,
                    {...solicitanteDefault}
                ]
            }));
        }                             
    }

    const removeSolicitante = (indexToRemove) => {
        if(solicitantesValues.solicitantes.length>1){
            setSolicitantesValues(prev => ({
                ...prev,
                solicitantes: prev.solicitantes.filter((_, index) => index !== indexToRemove)
            }));
        }
    };

    const addViajero=()=>{
        if(solicitantesValues.solicitantesViajeros.length<solicitantesValues.solicitantes.length){
            setSolicitantesValues(prev => ({
                ...prev,
                solicitantesViajeros:[
                    ...prev.solicitantesViajeros,
                    {...solicitanteViajeroDefault}
                ]
            }));
        }
    }

    const removeViajero= (viajeroIndex)=>{
        setSolicitantesValues(prev => ({
            ...prev,
            solicitantesViajeros: prev.solicitantesViajeros.filter((_, index) => index !== viajeroIndex)
        }));
    }

    const renderSection=(selectedSection)=>{
        switch (selectedSection) {
            case 0:
                return(
                    <Section1 
                        title={stepsArray[0]} 
                        formValues={formValue} 
                        setFormValues={setFormValue}
                    ></Section1>
                ) 
            case 1:
                return(
                    <Section2 title={stepsArray[1]} 
                        solicitante={solicitantesValues} 
                        setSolicitante={setSolicitantesValues} 
                        addSolicitante={addSolicitante} 
                        removeSolicitante={removeSolicitante} 
                        addViajero={addViajero} 
                        removeViajero={removeViajero}
                    ></Section2>
                )
            case 2:
                return(
                    <Section3 title={stepsArray[2] }  
                        formValues={formValue} 
                        setFormValues={setFormValue} 
                        solicitante={solicitantesValues} 
                        setSolicitante={setSolicitantesValues} 
                        solicitanteS3Default={solicitanteS3Default}                 
                    ></Section3>
                )
            case 3:
                return(
                    <Section4 title={stepsArray[3]}
                        formValues={formValue} 
                        setFormValues={setFormValue} 
                        solicitante={solicitantesValues} 
                        setSolicitante={setSolicitantesValues} 
                        solicitanteS4Default={solicitanteS4Default}
                    >

                    </Section4>
                )
            default:
                return(
                    <p>Undefined section</p>
                )
        }
    }
    return(
        <section className="mcb-card">
            {renderSection(activeStep)}

            <div className="mcb-flex mcb-jc-fe mcb-gap-20 mqm-col">
                {activeStep !== 0 &&(
                    <button type="button" onClick={prevStep} className="mcb-gray-btn mcb-step-control-btn mcb-flex mcb-gap-5 mcb-ai-c">
                        <svg width="22" height="15" viewBox="0 0 22 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.07104 0.292744C7.68062 -0.0976805 7.04753 -0.0974824 6.65698 0.292744L0.292725 6.657C-0.0976871 7.04754 -0.0977616 7.68058 0.292725 8.07106L6.65698 14.4353C7.0475 14.8254 7.68065 14.8256 8.07104 14.4353C8.46143 14.0449 8.46116 13.4118 8.07104 13.0213L3.41382 8.36403H20.9998C21.552 8.36403 21.9996 7.91621 21.9998 7.36403C21.9998 6.81175 21.552 6.36403 20.9998 6.36403H3.41382L8.07104 1.70681C8.46123 1.3163 8.46136 0.683179 8.07104 0.292744Z" fill="white"/>
                        </svg>
                        Sección anterior
                    </button>
                )}

                {activeStep !== lastStep &&(
                    <button type="button" onClick={nextStep}  className="mcb-cta-btn mcb-step-control-btn mcb-flex mcb-gap-5 mcb-ai-c">
                        Siguiente sección
                        <svg width="22" height="15" viewBox="0 0 22 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.9287 0.292744C14.3191 -0.0976805 14.9522 -0.0974824 15.3428 0.292744L21.707 6.657C22.0974 7.04754 22.0975 7.68058 21.707 8.07106L15.3428 14.4353C14.9523 14.8254 14.3191 14.8256 13.9287 14.4353C13.5383 14.0449 13.5386 13.4118 13.9287 13.0213L18.5859 8.36403H1C0.44779 8.36403 0.000121357 7.91621 0 7.36403C3.62117e-08 6.81175 0.447715 6.36403 1 6.36403H18.5859L13.9287 1.70681C13.5385 1.3163 13.5384 0.683179 13.9287 0.292744Z" fill="white"/>
                        </svg>
                    </button>
                )}

                {activeStep === lastStep &&(
                    <button type="submit" className="mcb-cta-btn mcb-step-control-btn mcb-flex mcb-gap-5 mcb-ai-c">Enviar formulario</button>
                )}
            </div>
        </section>
    )
}