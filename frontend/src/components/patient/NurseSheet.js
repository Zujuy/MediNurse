import React, { Component } from 'react';
import {StyledChart, StyledNurseSheet, StyledTables} from '../../style/Components';
import TemperatureChart from '../organicComponents/graphic/TemperatureGraphic';
import CardiacChart from '../organicComponents/graphic/CardiacGraphic';
import BreathChart from '../organicComponents/graphic/BreathGraphic';
import PressureTable from '../organicComponents/tables/PressuresTable';
import FunctionalPatternsTable from '../organicComponents/tables/FunctionalPatternsTable';
import ScalesTable from '../organicComponents/tables/ScalesTable';
import EntryTable from '../organicComponents/tables/EntryTable'
import AssestmentsTable from '../organicComponents/tables/AssestmentsTable'

export default function NurseShett() {
    return(
    <StyledNurseSheet>
        <div className="header">
            <h2>Instituto Mexicano del Seguro Social</h2>
            <h4>Unidad de Atención Médica</h4>
            <h4>Registros clínicos, esquema terapeutico e intervenciones de enfermería en terapia intensiva</h4>
        </div>
        <hr/>
        <div className="PatientData">
            <h3>Nombre del paciente: Julio Baltazar García</h3>
            <p>Edad:</p>
            <p>Género:</p>
            <p>Número de Seguridad Social:</p>
            <p>Grupo Sanguíneo y RH:</p>
            <p>Alergias:</p>
            <p>Peso:</p>
            <p>Talla:</p>
        </div>
        <div className="PatientAsigned">
            <p>Especialidad Médica:</p>
            <p>Fecha de ingreso:</p>
            <p>Días de estancia:</p>
            <p>Cama:</p>
            <p>No. de Hoja:</p>
            <p>Diagnóstico:</p>
        </div>

        <hr/>
        <StyledChart>
        <h2>SIGNOS VITALES</h2>
        <TemperatureChart />
        <CardiacChart />
        <BreathChart />
        </StyledChart>
        <StyledTables>
        <PressureTable/>
        </StyledTables>

        <hr/>

        <StyledTables>
        <h2>PATRONES FUNCIONALES</h2>
        <FunctionalPatternsTable/>
        </StyledTables>

        <hr/>

        <StyledTables>
            <h2>Escalas</h2>
        <ScalesTable/>    
        </StyledTables>

        <hr/>

        <StyledTables>
            <h2>Ingresos</h2>
            <EntryTable/>
        </StyledTables>

        <hr/>
        <StyledTables>
            <h2>Valoraciones</h2>
            <AssestmentsTable/>
        </StyledTables>
    </StyledNurseSheet>
    )
}