import React from "react";
import useForm from "react-hook-form";
import { withRouter } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "../../../updateAction";
import {StyledSheet} from "../../../style/Components";

const FunctionalPatterns = props => {
    const { register, handleSubmit } = useForm();
    const { state, action } = useStateMachine(updateAction);
    const onSubit = data => {
    action(data);
    props.history.push("./medicalobservations");
  };

  return(
    <StyledSheet>
      <form onSubmit={handleSubmit (onSubit)}>
          <h2>Hoja de enfermería</h2>
          <h3>Patrones Funcionales</h3>
          <label>
            pH
            <input name="ph" ref="" defaultValue=""/>
          </label>
          <label>
            Glucosa
            <input name="glucose" ref="" defaultValue=""/>
          </label>
          <label>
            Cetonas 
            <input name="ketones" ref="" defaultValue=""/>
          </label>
          <label>
            Proteinas
            <input name="proteins" ref="" defaultValue=""/>
          </label> 
          <label>
            Sangre
            <input name="blood" ref="" defaultValue=""/>
          </label>
          <label>
            Densidad
            <input name="density" ref="" defaultValue=""/>
          </label>    
          <input type="submit"/>
      </form>
    </StyledSheet>
  )
};

export default withRouter(FunctionalPatterns);