import React from "react";
import useForm from "react-hook-form";
import { withRouter } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "../../../updateAction";
import {StyledSheet} from "../../../style/Components";


const Incomes = props => {
    const { register, handleSubmit } = useForm();
    const { state, action } = useStateMachine(updateAction);
    const onSubit = data => {
    action(data);
    props.history.push("./result");
  };

  return(
    <StyledSheet>
      <form onSubmit={handleSubmit (onSubit)}>
          <h2>Hoja de enfermería</h2>
          <h3>Ingresos</h3>
          <label>
            Nombre de la solución
            <input name="solution_name" ref="" defaultValue=""/>
          </label>
          <label>
            Hora de administración de la solución
            <input name="solutions_time" ref="" defaultValue=""/>
          </label>
          <label>
            Nombre de la medicina 
            <input name="medicine_name" ref="" defaultValue=""/>
          </label>
          <label>
            Hora de administración de la medicina
            <input name="medicines_time" ref="" defaultValue=""/>
          </label> 
          <label>
            Comida administrada
            <input name="food_name" ref="" defaultValue=""/>
          </label>
          <label>
            Hora de ingesta
            <input name="intake_time" ref="" defaultValue=""/>
          </label>   
          <label>
            Nombre del medicamento prescrito
            <input name="drug_name" ref="" defaultValue=""/>
          </label> 
          <label>
            Presentación del proyecto
            <input name="presentation" ref="" defaultValue=""/>
          </label>
          <label>
            Via
            <input name="via" ref="" defaultValue=""/>
          </label>
          <label>
            Dosis
            <input name="dose" ref="" defaultValue=""/>
          </label>
          <label>
            Presencia
            <input name="presence" ref="" defaultValue=""/>
          </label>
          <label>
            Horarios
            <input name="schedule" ref="" defaultValue=""/>
          </label>
          <input type="submit"/>
      </form>
    </StyledSheet>
  )
};

export default withRouter(Incomes);