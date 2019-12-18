import React, {Component} from "react";
import {StyledSheet} from "../../../style/Components"


export default class NurseSheetForm extends Component {
    constructor(props) {
      super(props)
      this.state = {
        currentStep: 1,
        entry:  '',
        days_stay: '',
        sheet_number: '', 
        shifts: '', 
        bed: '',
        heart_rate: '', 
        temperature: '', 
        breathing_frequency: '', 
        blood_pressure: '', 
        mean_arterial_pressure: '', 
        central_air_pressure: '', 
        glasgow: '', 
        ramsay: '', 
        visual_scale: '', 
        risk_falls:'',
        ph: '', 
        glucose: '', 
        ketones: '', 
        proteins: '', 
        blood: '', 
        density: '', 
        solution_name: '', 
        solutions_time: '', 
        medicine_name: '', 
        medicines_time: '', 
        food_name: '', 
        intake_time: '', 
        drug_name: '', 
        presentation:'',
        via: '', 
        dose: '', 
        presence: '', 
        schedule: '', 
        assessment: '', 
        diagnostic: '', 
        interventions: '', 
        response: '',
        observations: '', 
      }
    }
  
    handleChange = event => {
      const {name, value} = event.target
      this.setState({
        [name]: value
      })    
    }
     
    handleSubmit = event => {
      event.preventDefault()
      const {
        entry, 
        days_stay, 
        sheet_number, 
        shifts,
        bed, 
        heart_rate,
        temperature, 
        breathing_frequency, 
        blood_pressure, 
        mean_arterial_pressure, 
        central_air_pressure, 
        glasgow, 
        ramsay, 
        visual_scale, 
        risk_falls,
        ph, 
        glucose, 
        ketones, 
        proteins, 
        blood, 
        density, 
        solution_name, 
        solutions_time, 
        medicine_name, 
        medicines_time, 
        food_name, 
        intake_time, 
        drug_name,
        presentation, 
        via, 
        dose, 
        presence, 
        schedule, 
        assessment, 
        diagnostic, 
        interventions, 
        response,
        observations, } = this.state
      alert(`Datos básicos: \n 
             Fecha de ingreso: ${entry} \n 
             Días de estancia: ${days_stay} \n
             No. de hoja: ${sheet_number}\n
             Turno: ${shifts}\n
             Cama: ${bed}\n
             Frecuencia cardiaca: ${heart_rate}\n
             Temperatura: ${temperature}\n
             Frecuencia respiratoria: ${breathing_frequency}\n
             Presión arterial: ${blood_pressure}\n
             Presión arterial media: ${mean_arterial_pressure}\n
             Presión venosa central: ${central_air_pressure}\n
             Glasgow: ${glasgow}\n
             Ramsay: ${ramsay}\n
             Escala Visual Análoga /EVA: ${visual_scale}\n
             Riego de caidas: ${risk_falls}\n
             pH: ${ph}\n
             Glucosa: ${glucose}\n
             Cetonas: ${ketones}\n
             Proteinas: ${proteins}\n
             Sangre: ${blood}\n
             Densidad: ${density}\n
             Nombr de la solución: ${solution_name}\n
             Hora de administración de la solución: ${solutions_time}\n
             Nombre de la medicina: ${medicine_name}\n
             Hora de administración de la medicina: ${medicines_time}\n
             Comida administrada: ${food_name}\n
             Hora de ingesta: ${intake_time}\n
             Nombre del medicamento prescrito: ${drug_name}\n
             Presentación del proyecto: ${presentation}\n
             Via: ${via}\n
             Dosis: ${dose}\n
             Presencia: ${presence}\n
             Horarios: ${schedule}\n
             Valoraciones: ${assessment}\n
             Diagnostico: ${diagnostic}\n
             Intervenciones: ${interventions}\n
             Respuesta-Evolucion: ${response}\n
             Observaciones: ${observations}
             `)
    }
    
    _next = () => {
      let currentStep = this.state.currentStep
      currentStep = currentStep >= 5? 6: currentStep + 1
      this.setState({
        currentStep: currentStep
      })
    }
      
    _prev = () => {
      let currentStep = this.state.currentStep
      currentStep = currentStep <= 1? 1: currentStep - 1
      this.setState({
        currentStep: currentStep
      })
    }
  
  /*
  * the functions for our button
  */
  previousButton() {
    let currentStep = this.state.currentStep;
    if(currentStep !==1){
      return (
        <StyledSheet>
        <button 
          className="btn btn-secondary" 
          type="button" onClick={this._prev}>
        Atras
        </button>
        </StyledSheet>
      )
    }
    return null;
  }
  
  nextButton(){
    let currentStep = this.state.currentStep;
    if(currentStep <6){
      return (
        <StyledSheet>
        <button 
          className="btn btn-primary float-right" 
          type="button" onClick={this._next}>
        Siguiente
        </button>  
        </StyledSheet>     
      )
    }
    return null;
  }
    
    render() {    
      return (
        <React.Fragment>
        <StyledSheet>
        <h1>Hoja de enfermería</h1>
        <p>Datos del paciente - parte {this.state.currentStep}</p> 
        </StyledSheet>
        <form onSubmit={this.handleSubmit}>
        {/* 
          render the form steps and pass required props in
        */}
          <Step1 
            currentStep={this.state.currentStep} 
            handleChange={this.handleChange}
            entry={this.state.entry}
            days_stay={this.state.days_stay}
            sheet_number={this.state.sheet_number}
            shift={this.state.shifts}
            bed={this.state.bed}

          />
          <Step2 
            currentStep={this.state.currentStep} 
            handleChange={this.handleChange}
            heart_rate={this.state.heart_rate}
            temperature={this.state.heart_temperature}
            breathing_frequency={this.state.breathing_frequency}
            blood_pressuree={this.state.blood_pressure}
            mean_arterial_pressure={this.state.mean_arterial_pressure}
            central_air_pressure={this.state.central_air_pressure}
          />
          <Step3 
            currentStep={this.state.currentStep} 
            handleChange={this.handleChange}
            glasgow={this.state.glasgow}
            ramsay={this.state.ramsay}
            visual_scale={this.state.visual_scale}
            risk_falls={this.state.risk_falls}
          />
           <Step4 
            currentStep={this.state.currentStep} 
            handleChange={this.handleChange}
            ph={this.state.ph}
            ketones={this.state.ketones}
            proteins={this.state.proteins}
            blood={this.state.blood}
            density={this.state.density}
          />
           <Step5 
            currentStep={this.state.currentStep} 
            handleChange={this.handleChange}
            solution_name={this.state.solution_name}
            solutions_time={this.state.solutions_time}
            medicine_name={this.state.medicine_name}
            medicines_time={this.state.medicines_time}
            food_name={this.state.food_name}
            intake_time={this.state.intake_time}
            drug_name={this.state.drug_name}
            presentation={this.state.presentation}
            via={this.state.via}
            dose={this.state.dose}
            presence={this.state.presence}
            schedule={this.state.schedule}
          />
          <Step6 
            currentStep={this.state.currentStep} 
            handleChange={this.handleChange}
            assessment={this.state.assessment}
            diagnostic={this.state.diagnostic}
            interventions={this.state.interventions}
            responsee={this.state.response}
            observations={this.state.observations}
          />
          {this.previousButton()}
          {this.nextButton()}
  
        </form>
        </React.Fragment>
      );
    }
  }
  
  function Step1(props) {
    if (props.currentStep !== 1) {
      return null
    } 
    return(
      <StyledSheet>
      <div className="form-group">
        <div>
        <label htmlFor="entry">Fecha de ingreso</label>
        <input
          className="form-control"
          id="entry"
          name="entry"
          type="date"
          placeholder="Fecha de ingeso"
          value={props.entry}
          onChange={props.handleChange}
          />
        </div>
        <div>
        <label htmlFor="days_stay">Días de estancia</label>
        <input
          className="form-control"
          id="days_stay"
          name="days_stay"
          type="text"
          placeholder="Días de estancia"
          value={props.days_stay}
          onChange={props.handleChange}
          />
        </div>
        <div>
        <label htmlFor="sheet_number">No. de hoja</label>
        <input
          className="form-control"
          id="sheet_number"
          name="sheet_number"
          type="text"
          placeholder="No. de hoja"
          value={props.sheet_number}
          onChange={props.handleChange}
          />
        </div>
        <div>
        <label htmlFor="shifts">Turno</label>
        <input
          className="form-control"
          id="shifts"
          name="shifts"
          type="text"
          placeholder="Turno"
          value={props.shifts}
          onChange={props.handleChange}
          />
        </div>
        <div>
        <label htmlFor="bed">No. de cama</label>
        <input
          className="form-control"
          id="bed"
          name="bed"
          type="text"
          placeholder="No. de Cama"
          value={props.bed}
          onChange={props.handleChange}
          />
        </div>
      </div>
      </StyledSheet>
    );
  }

  
  function Step2(props) {
    if (props.currentStep !== 2) {
      return null
    } 
    return(
      <StyledSheet>
      <div className="form-group">
        <div>
        <label htmlFor="heart_rate">Frecuencia cardiaca</label>
        <input
          className="form-control"
          id="heart_rate"
          name="heart_rate"
          type="text"
          placeholder="Frecuencia cradiaca"
          value={props.heart_rate}
          onChange={props.handleChange}
          />
        </div>
        <div>
        <label htmlFor="temperature">Temperatura</label>
        <input
          className="form-control"
          id="temperature"
          name="temperature"
          type="text"
          placeholder="Temperatura"
          value={props.temperature}
          onChange={props.handleChange}
          />
        </div>
        <div>
        <label htmlFor="breathing_frequency">Frecuencia respiratoria</label>
        <input
          className="form-control"
          id="breathing_frequency"
          name="breathing_frequency"
          type="text"
          placeholder="Frecuencia respiratoria"
          value={props.breathing_frequency}
          onChange={props.handleChange}
          />
        </div>
        <div>
        <label htmlFor="blood_pressure">Presión arterial</label>
        <input
          className="form-control"
          id="blood_pressure"
          name="blood_pressure"
          type="text"
          placeholder="Presión arterial"
          value={props.blood_pressure}
          onChange={props.handleChange}
          />
        </div>
        <div>
        <label htmlFor="mean_arterial_pressure">Presión arterial media</label>
        <input
          className="form-control"
          id="mean_arterial_pressure"
          name="mean_arterial_pressure"
          type="text"
          placeholder="Presión arterial media"
          value={props.mean_arterial_pressure}
          onChange={props.handleChange}
          />
        </div>
        <div>
        <label htmlFor="central_air_pressure">Presión venosa central</label>
        <input
          className="form-control"
          id="central_air_pressure"
          name="central_air_pressure"
          type="text"
          placeholder="Presión venosa central"
          value={props.central_air_pressure}
          onChange={props.handleChange}
          />
        </div>
      </div>
      </StyledSheet>
    );
  }
  
  function Step3(props) {
    if (props.currentStep !== 3) {
      return null
    } 
    return(
      <StyledSheet>
      <div className="form-group">
        <div>
        <label htmlFor="glasgow">Glasgow</label>
        <input
          className="form-control"
          id="glasgow"
          name="glasgow"
          type="text"
          placeholder="Glasgow"
          value={props.glasgow}
          onChange={props.handleChange}
          />  
        </div>
        <div>
        <label htmlFor="ramsay">Ramsay</label>
        <input
          className="form-control"
          id="ramsay"
          name="ramsay"
          type="text"
          placeholder="Ramsay"
          value={props.ramsay}
          onChange={props.handleChange}
          /> 
        </div>
        <div>
        <label htmlFor="visual_scale">Escala Visual Análoga /EVA</label>
        <input
          className="form-control"
          id="visual_scale"
          name="visual_scale"
          type="text"
          placeholder="Escala Visual Análoga /EVA"
          value={props.visual_scale}
          onChange={props.handleChange}
          /> 
        </div>
        <div>
        <label htmlFor="risk_falls">Riesgo de caidas</label>
        <input
          className="form-control"
          id="risk_falls"
          name="risk_falls"
          type="text"
          placeholder="Riesgo de caidas"
          value={props.risk_falls}
          onChange={props.handleChange}
          />   
        </div>
      </div>
      </StyledSheet>
    );
  }

  function Step4(props) {
    if (props.currentStep !== 4) {
      return null
    } 
    return(
      <StyledSheet>
      <div className="form-group">
        <div>
        <label htmlFor="ph">pH</label>
        <input
          className="form-control"
          id="ph"
          name="ph"
          type="text"
          placeholder="pH"
          value={props.ph}
          onChange={props.handleChange}
          /> 
        </div>
        <div>
        <label htmlFor="glucose">Glucosa</label>
        <input
          className="form-control"
          id="glucose"
          name="glucose"
          type="text"
          placeholder="Glucosa"
          value={props.glucose}
          onChange={props.handleChange}
          /> 
        </div> 
        <div>
        <label htmlFor="ketones">Cetonas</label>
        <input
          className="form-control"
          id="ketones"
          name="ketones"
          type="text"
          placeholder="Cetonas"
          value={props.ketones}
          onChange={props.handleChange}
          /> 
        </div>
        <div>
        <label htmlFor="proteins">Proteinas</label>
        <input
          className="form-control"
          id="proteins"
          name="proteins"
          type="text"
          placeholder="Proteinas"
          value={props.proteins}
          onChange={props.handleChange}
          /> 
        </div>
        <div>
        <label htmlFor="blood">Sangre</label>
        <input
          className="form-control"
          id="blood"
          name="blood"
          type="text"
          placeholder="Sangre"
          value={props.blood}
          onChange={props.handleChange}
          /> 
        </div> 
        <div>
        <label htmlFor="density">Dencidad</label>
        <input
          className="form-control"
          id="density"
          name="density"
          type="text"
          placeholder="Dencidad"
          value={props.density}
          onChange={props.handleChange}
          /> 
        </div>
      </div>
      </StyledSheet>
    );
  }
  
  function Step5(props) {
    if (props.currentStep !== 5) {
      return null
    } 
    return(
      <StyledSheet>
      <div className="form-group">
        <div>
        <label htmlFor="solution_name">Nombre de la solución</label>
        <input
          className="form-control"
          id="solution_name"
          name="solution_name"
          type="text"
          placeholder="Nombre de la solución"
          value={props.solution_name}
          onChange={props.handleChange}
          />  
        </div>
        <div>
        <label htmlFor="solutions_time">Hora de administración de la solución</label>
        <input
          className="form-control"
          id="solutions_time"
          name="solutions_time"
          type="time"
          placeholder="Hora de administración"
          value={props.solutions_time}
          onChange={props.handleChange}
          /> 
        </div>
        <div>
        <label htmlFor="medicine_name">Nombre del medicamento</label>
        <input
          className="form-control"
          id="medicine_name"
          name="medicine_name"
          type="text"
          placeholder="Nombre del medicamento"
          value={props.medicine_name}
          onChange={props.handleChange}
          /> 
        </div>
        <div>
        <label htmlFor="medicines_time">Hora de la administración del medicamento</label>
        <input
          className="form-control"
          id="medicines_time"
          name="medicines_time"
          type="time"
          placeholder="Hora de administración"
          value={props.medicines_time}
          onChange={props.handleChange}
          /> 
        </div>
        <div>
        <label htmlFor="food_name">Comida administrada</label>
        <input
          className="form-control"
          id="food_name"
          name="food_name"
          type="text"
          placeholder="Comida administrada"
          value={props.food_name}
          onChange={props.handleChange}
          />
        </div>
        <div>
        <label htmlFor="intake_time">Hora de ingesta</label>
        <input
          className="form-control"
          id="intake_time"
          name="intake_time"
          type="time"
          placeholder="Hora de ingesta"
          value={props.intake_time}
          onChange={props.handleChange}
          /> 
        </div>
        <div>
        <label htmlFor="drug_name">Nombre del medicamento prescrito</label>
        <input
          className="form-control"
          id="drug_name"
          name="drug_name"
          type="text"
          placeholder="Nombre del medicamento"
          value={props.drug_name}
          onChange={props.handleChange}
          /> 
        </div>
        <div>
        <label htmlFor="presentation">Presentación del medicamento</label>
        <input
          className="form-control"
          id="presentation"
          name="presentation"
          type="text"
          placeholder="Presentación del medicamento"
          value={props.presentation}
          onChange={props.handleChange}
          /> 
        </div>
        <div>
        <label htmlFor="via">Vía</label>
        <input
          className="form-control"
          id="via"
          name="via"
          type="text"
          placeholder="Vía"
          value={props.via}
          onChange={props.handleChange}
          /> 
        </div>
        <div>
        <label htmlFor="dose">Dosis</label>
        <input
          className="form-control"
          id="dose"
          name="dose"
          type="text"
          placeholder="Dosis"
          value={props.intake_time}
          onChange={props.handleChange}
          /> 
        </div>
        <div>
        <label htmlFor="presence">Presencia</label>
        <input
          className="form-control"
          id="presence"
          name="presence"
          type="text"
          placeholder="Presencia"
          value={props.presence}
          onChange={props.handleChange}
          /> 
        </div>
        <div>
        <label htmlFor="schedule">Horarios</label>
        <input
          className="form-control"
          id="schedule"
          name="schedule"
          type="text"
          placeholder="Horarios"
          value={props.schedule}
          onChange={props.handleChange}
          />
        </div> 
      </div>
      </StyledSheet>
    );
  }

  function Step6(props) {
    if (props.currentStep !== 6) {
      return null
    } 
    return(
      <React.Fragment>
      <StyledSheet>
      <div className="form-group">
        <div>
        <label htmlFor="assessment">Valoraciones</label>
        <input
          className="form-control"
          id="assessment"
          name="assessment"
          type="text"
          placeholder="Valoraciones"
          value={props.assessment}
          onChange={props.handleChange}
          /> 
        </div>
        <div>
        <label htmlFor="diagnostic">Diagnostico</label>
        <input
          className="form-control"
          id="diagnostic"
          name="diagnostic"
          type="text"
          placeholder="Diagnostico"
          value={props.diagnostic}
          onChange={props.handleChange}
          /> 
        </div> 
        <div>
        <label htmlFor="interventions">Intervenciones</label>
        <input
          className="form-control"
          id="interventions"
          name="interventions"
          type="text"
          placeholder="Intervenciones"
          value={props.interventions}
          onChange={props.handleChange}
          />
        </div>
        <div>
        <label htmlFor="response">Respuesta-Evolución</label>
        <input
          className="form-control"
          id="response"
          name="response"
          type="text"
          placeholder="Respuesta-Evolución"
          value={props.response}
          onChange={props.handleChange}
          />
        </div> 
        <div>
        <label htmlFor="observations">Observaciones</label>
        <input
          className="form-control"
          id="observations"
          name="observations"
          type="text"
          placeholder="Observaciones"
          value={props.observations}
          onChange={props.handleChange}
          />
        </div>   
      </div>
      <button className="btn btn-success btn-block">Enviar</button>
      </StyledSheet>
      </React.Fragment>
    );
  }
  
 