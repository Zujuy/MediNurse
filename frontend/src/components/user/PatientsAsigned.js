import React, { Component } from 'react';
import { StyledPatients, StyledCard, Carousel } from '../../style/Components';
import PatientCards from '../../components/patient/PatientCards';

export default function PatientsAsigned() {
  return (
    <StyledPatients>
      <h2>Pacientes Asignados</h2>
      <div className="allpatients">
        <StyledCard>
          <Carousel>
            {/* solo cards de pacientes relacionadas a esa jefa de enfermera o medico*/}
            <PatientCards></PatientCards>
            <PatientCards></PatientCards>
            <PatientCards></PatientCards>
            <PatientCards></PatientCards>
          </Carousel>
        </StyledCard>
      </div>
    </StyledPatients>
  );
}
