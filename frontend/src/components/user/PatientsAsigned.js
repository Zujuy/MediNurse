import React, { Component } from 'react';
import { StyledPatients, StyledCard, Carousel } from '../../style/Components';
import PatientCards from '../../components/patient/PatientCards';
import PATIENT_SERVICE from '../../services/patientsService';

export default class PatientsAsigned extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    patients: [{}]
  };

  componentDidMount() {
    if (document.cookie)
      PATIENT_SERVICE.getPatientsAsigned()
        .then(({ data }) => {
          this.setState({ patients: [data] });
        })
        .catch(err => console.log(err));
  }

  render() {
    if (this.state.patients.length === 0) {
      return null;
    }
    let asignedPatients = [];
    this.state.patients.forEach(e => {
      asignedPatients.push(e);
    });

    let cardPatient = asignedPatients.map((e, i) => (
      <PatientCards
        name={[e.patientsAsigned][i]}
        value={e._id}
        key={i}
      ></PatientCards>
    ));

    return (
      <StyledPatients>
        <h2>Pacientes Asignados</h2>
        <div className="allpatients">
          <StyledCard>
            <Carousel>
              {cardPatient}
            </Carousel>
          </StyledCard>
        </div>
      </StyledPatients>
    );
  }
}