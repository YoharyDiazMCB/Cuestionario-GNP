 <>
                            <h2>{sectionData.title}</h2>
                            {sectionData.questions.map((q, qIndex)=>(
                                <div key={qIndex}>
                                    <p className="mcb-color-b3">{q.question}</p>
                                    <fieldset className="mcb-flex mcb-gap-30" >
                                        {q.fields.map((field, fieldIndex)=>(
                                            renderField(field, fieldIndex)
                                        ))}
                                        
                                    </fieldset>
                                </div>
                            ))}

                            {(
                                valueForm.s4_q1.value === 'true' || 
                                valueForm.s4_q2.value === 'true' || 
                                valueForm.s4_q3.value === 'true') &&(
                                    <div className='mcb-grid-4'>
                                        {sectionData.fields.map((field, fieldIndex)=>(
                                            renderField(field, fieldIndex)
                                        ))}
                                    </div>
                            )}
                            <p className="mcb-fs-20 mcb-fw-6">{sectionData.pregnantSection.question}</p>
                            <fieldset className="mcb-flex mcb-gap-30">
                                {sectionData.pregnantSection.radioFields.map((field, fieldIndex)=>(
                                    renderField(field, fieldIndex)
                                ))}
                            </fieldset>
                            {valueForm.s4_q4_2.value==='true' && (
                                <div className='mcb-grid-4'>
                                    {sectionData.pregnantSection.fields.map((field, fieldIndex)=>(
                                        renderField(field, fieldIndex)
                                    ))}
                                </div>
                            )}
                        </>