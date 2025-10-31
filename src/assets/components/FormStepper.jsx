import React, { useState } from 'react';
import '../scss/_FormStepper.scss'

export default function FormStepper({stepsArray, activeStep, setActiveStep}){
    const lastStep=stepsArray.length - 1;
    
    return(
        <div className="mcb-flex mcb-ai-c mcb-jc-c mcb-stepper-cont">
                {stepsArray.map((step, stepIndex)=>(
                    <div key={stepIndex} className={`mcb-flex mcb-ai-c ${activeStep === stepIndex ? 'mcb-active-step':''}`}>
                        <button className="mcb-step-circle" onClick={()=>setActiveStep(stepIndex)}></button>
                        { stepIndex !== lastStep &&(
                            <hr className='mcb-step-l' />
                        )}
                    </div>
                ))}
        </div>
    );
}