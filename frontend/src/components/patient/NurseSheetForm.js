import React , {useState}from 'react'
import {StyledSheet} from "../../style/Components";

export default function NurseSheetForm(props){
    return (
        <StyledSheet>
            <div className="formstyle">
                <h2>Hoja de enfermería</h2>

                <div>
                    <label htmlFor="entry">Fecha de ingreso</label>
                    <input
                        name="entry"
                        placeholder="Día de ingreso"
                        type="date"
                    />

                    <label htmlFor="days_stay">Días de estancia</label>
                    <input
                        name="days_stay"
                        placeholder="Días de estancia"
                        type="text"
                    />
                    
                    <label htmlFor="sheet_number">Hoja No.</label>
                    <input
                        name="sheet_number"
                        placeholder="Hoja No."
                        type="text"
                    />
                </div>

                <div>
                <label htmlFor="shift">Turno</label>
                    <input
                        name="shift"
                        placeholder="Turno"
                        type="text"
                    />
            
                <label htmlFor="time">Hora</label>
                    <input
                        name="time"
                        placeholder="Hora"
                        type="time"
                    />

                <label htmlFor="bed">Cama</label>
                    <input
                        name="bed"
                        placeholder="Cama"
                        type="text"
                    />
                </div>

                <div>
                <label htmlFor="heart_rate">Frecuencia Cardiaca</label>
                    <input
                        name="heart_rate"
                        placeholder="Frecuencia Cardiaca"
                        type="text"
                    />
                <label htmlFor="temperature">Temperatura</label>
                    <input
                        name="temperature"
                        placeholder="Temperatura"
                        type="text"
                    />
                <label htmlFor="breathing_frequency">Frecuencia Respiratoría</label>
                    <input
                        name="breathing_frequency"
                        placeholder="Frecuencia Respiratoría"
                        type="text"
                    />    
                </div>

                <div>
                <label htmlFor="blood_pressure">Presión arterial</label>
                    <input
                        name="blood_pressure"
                        placeholder="Presión arterial"
                        type="text"
                    />  
                <label htmlFor="mean_arterial_pressure">Presión arterial media</label>
                    <input
                        name="mean_arterial_pressure"
                        placeholder="Presión arterial media"
                        type="text"
                    />
                <label htmlFor="central_air_pressure">Presión Venosa Central</label>
                    <input
                        name="central_air_pressure"
                        placeholder="Presión Venosa Central"
                        type="text"
                    />  
                </div> 

                <div>
                <label htmlFor="glasgow">Glasgow</label>
                    <input
                        name="glasgow"
                        placeholder="Glasgow"
                        type="text"
                    />  
                <label htmlFor="ramsay">Ramsay</label>
                    <input
                        name="ramsay"
                        placeholder="Ramsay"
                        type="text"
                    /> 
                <label htmlFor="visual_scale">Esacala Visual Analoga /EVA </label>
                    <input
                        name="visual_scale"
                        placeholder="EVA"
                        type="text"
                    /> 
                </div>

                <div>
                <label htmlFor="risk_falls">Riesgo de caidas </label>
                    <input
                        name="risk_falls"
                        placeholder="Risgo de caidas"
                        type="text"
                    />  
                <label htmlFor="ph">pH</label>
                    <input
                        name="ph"
                        placeholder="pH"
                        type="text"
                    />
                <label htmlFor="glucose">Glucosa</label>
                    <input
                        name="glucose"
                        placeholder="Glucosa"
                        type="text"
                    />
                </div>

                <div>
                <label htmlFor="ketones">Cetonas</label>
                    <input
                        name="ketines"
                        placeholder="Cetonas"
                        type="text"
                    />  
                <label htmlFor="proteins">Proteinas</label>
                    <input
                        name="proteins"
                        placeholder="Proteinas"
                        type="text"
                    />
                <label htmlFor="blood">Sangre</label>
                    <input
                        name="blood"
                        placeholder="Sangre"
                        type="text"
                    />
                </div>

                <div>
                <label htmlFor="density">Densidad</label>
                    <input
                        name="density"
                        placeholder="Densidad"
                        type="text"
                    />  
                <label htmlFor="solution_name">Nombre de la solución</label>
                    <input
                        name="solution_name"
                        placeholder="Nombre de la solución"
                        type="text"
                    />   
                <label htmlFor="solution_time">Hora de aplicación de solución</label>
                    <input
                        name="solution_time"
                        placeholder="Hora de aplicación de solución"
                        type="text"
                    /> 
                </div>

                <div>
                <label htmlFor="medicine_name">Nombre de la medicamento</label>
                    <input
                        name="medicine_name"
                        placeholder="Nombre del medicamento"
                        type="text"
                    />  
                <label htmlFor="medicines_time">Hora de la medicamento</label>
                    <input
                        name="medicines_time"
                        placeholder="Hora del medicamento"
                        type="text"
                    /> 
                <label htmlFor="medicine_name">Nombre de la medicamento</label>
                    <input
                        name="medicine_name"
                        placeholder="Nombre del medicamento"
                        type="text"
                    /> 
                </div>
        
            </div>

        </StyledSheet>
    )
}