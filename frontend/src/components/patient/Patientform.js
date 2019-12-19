import React, { Component } from 'react';
import { StyledForms } from '../../style/Components';
import { MyContext } from '../../context';
import PATIENT_SERVICE from '../../services/patientsService';

export default class PatientForm extends Component {
  state = {
    file: {},
    patientForm: {
      status: '',
      name: '',
      last_name: '',
      photo: '',
      diagnostic: '',
      labs: '',
      medical_speciality: '',
      age: '',
      address: '',
      contact: '',
      phone: '',
      //   appointment: appointmentSchema.Types.ID,
      social_security: '',
      blood_type: '',
      gender: '',
      alergies: '',
      weight: '',
      height: '',
      medicAsigned: '',
      nurseAsigned: ''
    },
    userAbailables: [{}]
  };

  componentDidMount() {
    
      PATIENT_SERVICE.getMedicsAndNurses()
        .then(({ data }) => {
          this.setState({ userAbailables: data });
        })
        .catch(err => console.log(err));
  }

  handleCreatePatient = async e => {
    e.preventDefault();
    const { patientForm } = this.state;
    const formDataP = new FormData();

    for (let key in this.state.patientForm) {
      formDataP.append(key, this.state.patientForm[key]);
    }
    formDataP.append('photo', this.state.file);

    const { patient } = await PATIENT_SERVICE.createPatient(formDataP);

    this.setState({
      patientForm: {
        name: '',
        last_name: '',
        photo: '',
        diagnostic: '',
        labs: '',
        medical_speciality: '',
        age: '',
        address: '',
        contact: '',
        phone: '',
        //   appointment: appointmentSchema.Types.ID,
        social_security: '',
        blood_type: '',
        gender: '',
        alergies: '',
        weight: '',
        height: '',
        nationality: '',
        medicAsigned: '',
        nurseAsigned: ''
      }
    });
  };

  inputChange = ({ target: { value, name } }) => {
    this.setState({
      ...this.state,
      patientForm: {
        ...this.state.patientForm,
        [name]: value
      }
    });
  };

  handleFile = e => {
    this.setState({ file: e.target.files[0] });
  };

  render() {
    let medics = [];
    let nurses = [];
    this.state.userAbailables.forEach(e => {
      if (e.role === 'Medico') {
        medics.push(e);
      } else {
        nurses.push(e);
      }
    });

    let optionMedics = medics.map((e, i) => (
      <option value={e._id} key={i}>
        {e.name}
      </option>
    ));
    let optionNurses = nurses.map((e, i) => (
      <option value={e._id} key={i}>
        {e.name}
      </option>
    ));

    return (
      <MyContext.Consumer>
        {context => (
          <form
            onSubmit={e => {
              this.handleCreatePatient(e);
              this.props.history.push('/profile');
            }}
          >
            <StyledForms>
              <h2>Expediente Médico</h2>
              <div className="formstyle">
                <div>
                  <label htmlFor="name">Nombre/s</label>
                  <input
                    name="name"
                    placeholder="Nombre(s)"
                    type="text"
                    value={this.state.patientForm.name}
                    onChange={this.inputChange}
                  />
                </div>

                <div>
                  <label htmlFor="last_name">Apellidos</label>
                  <input
                    name="last_name"
                    placeholder="Apellidos"
                    type="text"
                    value={this.state.patientForm.last_name}
                    onChange={this.inputChange}
                  />
                </div>

                <div>
                  <label htmlFor="photo">Foto del paciente</label>
                  <input
                    name="photo"
                    placeholder="Foto"
                    type="file"
                    value={this.state.patientForm.photo}
                    onChange={this.handleFile}
                  />
                </div>

                <div>
                  <label htmlFor="diagnostic">Diagnóstico</label>
                  <input
                    name="diagnostic"
                    placeholder="Diagnóstico"
                    type="text"
                    value={this.state.patientForm.diagnostic}
                    onChange={this.inputChange}
                  />
                </div>

                <div>
                  <label htmlFor="labs">Laboratorios</label>
                  <input
                    name="labs"
                    placeholder="labs"
                    type="text"
                    value={this.state.patientForm.labs}
                    onChange={this.inputChange}
                  />
                </div>

                <div>
                  <label htmlFor="medical_speciality">
                    Especialidad Médica
                  </label>
                  <input
                    name="medical_speciality"
                    placeholder="Especialidad"
                    type="text"
                    value={this.state.patientForm.medical_speciality}
                    onChange={this.inputChange}
                  />
                </div>

                <div>
                  <label htmlFor="age">Edad</label>
                  <input
                    name="age"
                    placeholder="Edad"
                    type="text"
                    value={this.state.patientForm.age}
                    onChange={this.inputChange}
                  />
                </div>

                <div>
                  <label htmlFor="address">Dirección</label>
                  <input
                    name="address"
                    placeholder="Dirección"
                    type="text"
                    value={this.state.patientForm.address}
                    onChange={this.inputChange}
                  />
                </div>

                <div>
                  <label htmlFor="contact">Familiar de contacto</label>
                  <input
                    name="contact"
                    placeholder="Familiar de contacto"
                    type="text"
                    value={this.state.patientForm.contact}
                    onChange={this.inputChange}
                  />
                </div>

                <div>
                  <label htmlFor="phone">Teléfono de contacto</label>
                  <input
                    name="phone"
                    placeholder="Teléfono de contacto"
                    type="text"
                    value={this.state.patientForm.phone}
                    onChange={this.inputChange}
                  />
                </div>

                <div>
                  <label htmlFor="social_security">
                    Número de Seguro Social
                  </label>
                  <input
                    name="social_security"
                    placeholder="Número de SS"
                    type="text"
                    value={this.state.patientForm.social_security}
                    onChange={this.inputChange}
                  />
                </div>

                <div>
                  <label htmlFor="blood_type">Tipo de sangre</label>
                  <input
                    name="blood_type"
                    placeholder="Tipo de sangre"
                    type="text"
                    value={this.state.patientForm.blood_type}
                    onChange={this.inputChange}
                  />
                </div>

                <div>
                  <label htmlFor="gender">Genero</label>
                  <input
                    name="gender"
                    placeholder="Género"
                    type="text"
                    value={this.state.patientForm.gender}
                    onChange={this.inputChange}
                  />
                </div>

                <div>
                  <label htmlFor="alergies">Alergias</label>
                  <input
                    name="alergies"
                    placeholder="Alergias"
                    type="text"
                    value={this.state.patientForm.alergies}
                    onChange={this.inputChange}
                  />
                </div>

                <div>
                  <label htmlFor="weight">Peso</label>
                  <input
                    name="weight"
                    placeholder="Peso"
                    type="text"
                    value={this.state.patientForm.weight}
                    onChange={this.inputChange}
                  />
                </div>

                <div>
                  <label htmlFor="height">Estatura</label>
                  <input
                    name="height"
                    placeholder="Estatura"
                    type="text"
                    value={this.state.patientForm.height}
                    onChange={this.inputChange}
                  />
                </div>

                <div>
                  <label htmlFor="nationality">Nacionalidad</label>
                  <input
                    name="nationality"
                    placeholder="Nacionalidad"
                    type="nationality"
                    value={this.state.patientForm.nationality}
                    onChange={this.inputChange}
                  />
                </div>

                <div>
                  <label htmlFor="medicAsigned">Asigna un Médico</label>
                  <select
                    value={this.state.patientForm.medicAsigned}
                    name="medicAsigned"
                    onChange={this.inputChange}
                  >
                    <option value="">Elige un Médico</option>
                    {optionMedics}
                  </select>
                </div>

                <div>
                  <label htmlFor="nurseAsigned">Asigna un Enfermera</label>
                  <select
                    value={this.state.patientForm.nurseAsigned}
                    name="nurseAsigned"
                    onChange={this.inputChange}
                  >
                    <option value="">Elige un Enfermera(o)</option>
                    {optionNurses}
                  </select>
                </div>

                {/* <div>
                  <label htmlFor="role">Role</label>
                  <label>Activo</label>
                  <input
                    type="radio"
                    name="role"
                    checked={statusAct}
                    value={this.state.patientForm.role}
                    onClick={handleStatusAct}
                  />
                  <label>No activo</label>
                  <input
                    type="radio"
                    name="role"
                    checked={statusNoAct}
                    value={context.patientForm.role}
                    onClick={handleStatusNoAct}
                  />
                </div> */}

                <div>
                  <button type="submit">Crear</button>
                </div>
              </div>
            </StyledForms>
          </form>
        )}
      </MyContext.Consumer>
    );
  }
}

PatientForm.contextType = MyContext;
