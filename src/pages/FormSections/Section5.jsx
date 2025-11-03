<>
                            <h2>{sectionData.title}</h2>

                            <div className="mcb-grid-4">
                                {sectionData.fields.map((field, fieldIndex)=>(
                                    renderField(field, fieldIndex)
                                ))}
                            </div>
                        </>