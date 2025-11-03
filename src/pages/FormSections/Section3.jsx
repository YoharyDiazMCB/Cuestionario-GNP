export default function Section3({title=null}){
    return(
        <>
            <h2>{title}</h2>

            {/* 
            
            <>
                            <h2>{sectionData.title}</h2>
                            <p className='mcb-color-b3'>Indique si alguno de los Solicitantes se dedica o trabaja en alguna de las siguientes actividades:</p>
                            <fieldset className="mcb-flex mcb-gap-30">
                                {renderField(sectionData.fields[0])}
                                {renderField(sectionData.fields[1])}
                            </fieldset>
                            
                            <ol>
                                {sectionData.options.map((option, optionIndex)=>(
                                    <li key={optionIndex}>{option.label}</li>
                                ))}
                            </ol>
                            { valueForm.s3_q1.value === 'true' && (
                                <>
                                    <p className='mcb-color-b3'>Proporcione la siguiente información</p>
                                    <article className="mcb-grid-4">
                                        {sectionData.fields.slice(2).map((field, fieldIndex)=>(
                                        renderField(field, fieldIndex)
                                    ))}
                                    </article>
                                </>
                            )}
                        </>
            */}
        secccion3
        </>
    )
}