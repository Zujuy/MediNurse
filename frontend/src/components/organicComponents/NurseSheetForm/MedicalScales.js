import React from "react";
import useForm from "react-hook-form";
import { withRouter } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "../../../updateAction";
import {StyledSheet} from "../../../style/Components"

const MedicalScales = props => {
    const { register, handleSubmit } = useForm();
    const { state, action } = useStateMachine(updateAction);
    const onSubit = data => {
    action(data);
    props.history.push("./functionalPatterns");
  };

  return(
    <StyledSheet>
      <form onSubmit={handleSubmit (onSubit)}>
          <h2>Hoja de enfermería</h2>
          <h3>Escalas médicas</h3>
          <label>
            Glasgow
            <input name="glasgow" ref="" defaultValue=""/>
          </label>
          <label>
            Ramsay
            <input name="ramsay" ref="" defaultValue=""/>
          </label>
          <label>
            Escala Visual Análoga /EVA
            <input name="visual_scale" ref="" defaultValue=""/>
          </label>
          <label>
            Riego de caidas
            <input name="risk_falls" ref="" defaultValue=""/>
          </label>   
          <input type="submit"/>
      </form>
    </StyledSheet>
  )
};

export default withRouter(MedicalScales);