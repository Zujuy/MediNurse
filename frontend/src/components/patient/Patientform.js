import React, { useState } from 'react';
import { StyledForms } from '../../style/Components';
import { MyContext } from '../../context';

export default function PatientForm(props) {
  const [statusAct, setStausAct] = useState(false);
  const [statusNoAct, setStausNoAct] = useState(false);

  const handleStatusAct = () => {
    if (statusAct === false) setStausAct(true);
    if (statusAct === true) setStausAct(false);
  };
  const handleStatusNoAct = () => {
    if (statusNoAct === false) setStausNoAct(true);
    if (statusNoAct === true) setStausNoAct(false);
  };

  return (
    <MyContext.Consumer>
      {context => (
        <form
          onSubmit={e => {
            context.handleCreatePatient(e);
            props.history.push('/profile');
          }}
        >
          <StyledForms>
            <div className="formstyle">
              <h2>Expediente Médico</h2>

              <div>
                <label htmlFor="name">Nombre/s</label>
                <input
                  name="name"
                  placeholder="Nombre(s)"
                  type="text"
                  value={context.patientForm.name}
                  onChange={e => context.handleInput(e, 'patientForm')}
                />
              </div>

              <div>
                <label htmlFor="last_name">Apellidos</label>
                <input
                  name="last_name"
                  placeholder="Apellidos"
                  type="text"
                  value={context.patientForm.last_name}
                  onChange={e => context.handleInput(e, 'patientForm')}
                />
              </div>

              <div>
                <label htmlFor="photo">Foto del paciente</label>
                <div className="photo">
                  <input
                    onChange={context.handleFile}
                    type="file"
                    name="photo"
                  />
                </div>

                <div>
                  <label htmlFor="diagnostic">Diagnóstico</label>
                  <input
                    name="diagnostic"
                    placeholder="Diagnóstico"
                    type="text"
                    value={context.patientForm.diagnostic}
                    onChange={e => context.handleInput(e, 'patientForm')}
                  />
                </div>

                <div>
                  <label htmlFor="labs">Laboratorios</label>
                  <input
                    name="Laboratorios"
                    placeholder="labs"
                    type="text"
                    value={context.patientForm.labs}
                    onChange={e => context.handleInput(e, 'patientForm')}
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
                    value={context.patientForm.medical_speciality}
                    onChange={e => context.handleInput(e, 'patientForm')}
                  />
                </div>

                <div>
                  <label htmlFor="age">Edad</label>
                  <input
                    name="age"
                    placeholder="Edad"
                    type="text"
                    value={context.patientForm.age}
                    onChange={e => context.handleInput(e, 'patientForm')}
                  />
                </div>

                <div>
                  <label htmlFor="address">Dirección</label>
                  <input
                    name="address"
                    placeholder="Dirección"
                    type="text"
                    value={context.patientForm.address}
                    onChange={e => context.handleInput(e, 'patientForm')}
                  />
                </div>

                <div>
                  <label htmlFor="contact">Familiar de contacto</label>
                  <input
                    name="contact"
                    placeholder="Familiar de contacto"
                    type="text"
                    value={context.patientForm.contact}
                    onChange={e => context.handleInput(e, 'patientForm')}
                  />
                </div>

                <div>
                  <label htmlFor="phone">Teléfono de contacto</label>
                  <input
                    name="phone"
                    placeholder="eléfono de contacto<"
                    type="text"
                    value={context.patientForm.phone}
                    onChange={e => context.handleInput(e, 'patientForm')}
                  />
                </div>

                <div>
                  <label htmlFor="social_security">
                    Número de Seguro Social
                  </label>
                  <input
                    name="social_security"
                    placeholder="Número de SS"
                    type="social_security"
                    value={context.patientForm.social_security}
                    onChange={e => context.handleInput(e, 'patientForm')}
                  />
                </div>

                <div>
                  <label htmlFor="blood_type">Tipo de sangre</label>
                  <input
                    name="blood_type"
                    placeholder="Tipo de sangre"
                    type="text"
                    value={context.patientForm.blood_type}
                    onChange={e => context.handleInput(e, 'patientForm')}
                  />
                </div>

                <div>
                  <label htmlFor="gender">Genero</label>
                  <input
                    name="gender"
                    placeholder="Género"
                    type="gender"
                    value={context.patientForm.gender}
                    onChange={e => context.handleInput(e, 'patientForm')}
                  />
                </div>

                <div>
                  <label htmlFor="alergies">Alergias</label>
                  <input
                    name="alergies"
                    placeholder="Alergias"
                    type="text"
                    value={context.patientForm.alergies}
                    onChange={e => context.handleInput(e, 'patientForm')}
                  />
                </div>

                <div>
                  <label htmlFor="weight">Peso</label>
                  <input
                    name="weight"
                    placeholder="Peso"
                    type="weight"
                    value={context.patientForm.weight}
                    onChange={e => context.handleInput(e, 'patientForm')}
                  />
                </div>

                <div>
                  <label htmlFor="height">Estatura</label>
                  <input
                    name="height"
                    placeholder="Estatura"
                    type="text"
                    value={context.patientForm.height}
                    onChange={e => context.handleInput(e, 'patientForm')}
                  />
                </div>

                <div>
                  <label htmlFor="weight">Peso</label>
                  <input
                    name="weight"
                    placeholder="Peso"
                    type="weight"
                    value={context.patientForm.weight}
                    onChange={e => context.handleInput(e, 'patientForm')}
                  />
                </div>

                <div>
                  <label htmlFor="role">Role</label>
                  <label>Activo</label>
                  <input
                    type="radio"
                    name="role"
                    checked={statusAct}
                    value={context.patientForm.role}
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
                </div>

                <div>
                  <button type="submit">Crear</button>
                </div>
              </div>
            </div>
          </StyledForms>
        </form>
      )}
    </MyContext.Consumer>
  );
}
