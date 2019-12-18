import React from "react";
import useForm from "react-hook-form";
import { withRouter } from "react-router-dom";
import { useStateMachine } from "little-state-machine";
import updateAction from "../../../updateAction";
import {StyledSheet} from "../../../style/Components"

const PatientData = props => {
    const {register, handleSubmit} = useForm();
    const {state, action} = useStateMachine(updateAction);
    const onSubit = data => {
        action(data);
        props.history.push("./medicaldata");
    };

    return (
        <StyledSheet>
        <form onSubmit={handleSubmit(onSubit)}>
            <h2>Hoja de enfermería</h2>
            <h3>Datos básicos</h3>
            <label>
                Fecha de ingreso
                <input name="entry" ref="" defaultValue=""/>
            </label>
            <label>
                Días de estancia
                <input name="days_stay" ref="" defaultValue=""/>
            </label>
            <label>
                No. de Hoja
                <input name="sheet_number" ref="" defaultValue=""/>
            </label>
            <label>
                Turno
                <input name="shift" ref="" defaultValue=""/>
            </label>
            <label>
                Cama
                <input name="bed" ref="" value=""/>
            </label>
            <input type="submit"/>
        </form>
        </StyledSheet>
    )
};

export default withRouter(PatientData);