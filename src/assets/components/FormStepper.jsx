import '../scss/_FormStepper.scss'
const steps=['primera fase','Segunda fase', 'tercera fase'];

export const FormStepper=({})=>{
    return(
        <div className="mcb-flex-c mcb-ai-c">
            {steps.map((step, stepIndex)=>(
                <div key={stepIndex} className="mcb-flex mcb-gap-10">
                    <div className="mcb-step-circle"></div>
                </div>
            ))}
        </div>
    );
}