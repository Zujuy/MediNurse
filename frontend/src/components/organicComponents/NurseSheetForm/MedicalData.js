import React from "react";
import useForm from "react-hook-form";
import { withRouter } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "../../../updateAction";
import {StyledSheet} from "../../../style/Components";


const MedicalData = props => {
    const { register, handleSubmit } = useForm();
    const { state, action } = useStateMachine(updateAction);
    const onSubit = data => {
    action(data);
    props.history.push("./medicalscales");
  };

  return(
    <StyledSheet>
      <form onSubmit={handleSubmit (onSubit)}>
          <h2>Hoja de enfermería</h2>
          <h3>Datos médicos</h3>
          <label>
            Frecuencia Cardiaca
            <input name="heart_rate" ref="" defaultValue=""/>
          </label>
          <label>
            Temperatura
            <input name="temperature" ref="" defaultValue=""/>
          </label>
          <label>
            Frecuencia Respiratoria
            <input name="breathing_frequency" ref="" defaultValue=""/>
          </label>
          <label>
            Presión arterial
            <input name="blood_pressure" ref="" defaultValue=""/>
          </label>
          <label>
            Presión arterial media
            <input name="mean_arterial_pressure" ref="" defaultValue=""/>
          </label>
          <label>
            Presión venosa central
            <input name="central_air_pressure" ref="" defaultValue=""/>
          </label>    
          <input type="submit"/>
      </form>
    </StyledSheet>
  )
};

export default withRouter(MedicalData);