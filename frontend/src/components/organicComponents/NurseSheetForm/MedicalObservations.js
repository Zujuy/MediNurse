import React from "react";
import useForm from "react-hook-form";
import { withRouter } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "../../../updateAction";
import {StyledSheet} from "../../../style/Components";

const MedicalObservations = props => {
    const { register, handleSubmit } = useForm();
    const { state, action } = useStateMachine(updateAction);
    const onSubit = data => {
    action(data);
    props.history.push("./patientprofile");
  };

  return(
    <StyledSheet>
      <form onSubmit={handleSubmit (onSubit)}>
          <h2>Hoja de enfermería</h2>
          <h3>PObservaciones médicas</h3>
          <label>
            Valoraciones
            <input name="assessment" ref="" defaultValue=""/>
          </label>
          <label>
            Diagnostico
            <input name="diagnostic" ref="" defaultValue=""/>
          </label>
          <label>
            Intervenciones 
            <input name="interventions" ref="" defaultValue=""/>
          </label>
          <label>
            Respuesta-Evolucion 
            <input name="response" ref="" defaultValue=""/>
          </label> 
          <label>
            Observaciones
            <input name="observations" ref="" defaultValue=""/>
          </label>  
          <input type="submit"/>
      </form>
    </StyledSheet>
  )
};

export default withRouter(MedicalObservations);