import React, { useState } from 'react';
import FormStepper from './FormStepper';
import FormContStep from './FormContStep';

export default function MagicForm(){    
    const steps=[
        'I. Datos del contratante', 
        'II. Solicitantes', 
        'III. Ocupación', 
        'IV. Información Médica', 
        'V. Deportes y/o aficiones que practica', 
        'Declaracion y consentimiento', 
        'Datos del agente'

    ];
    
    const [activeStep, setActiveStep]=useState(0);
    return(
        <div className="mcb-flex-c mcb-gap-30">
            <FormStepper stepsArray={steps} activeStep={activeStep} setActiveStep={setActiveStep}></FormStepper>
            <form>
                <FormContStep stepsArray={steps} activeStep={activeStep} setActiveStep={setActiveStep}></FormContStep>
            </form>
        </div>
    );
}