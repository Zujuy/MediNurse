import React, { useState } from 'react';
import { StyledForms } from '../../style/Components';
import { MyContext } from '../../context';

export default function Signup(props) {
  return (
    <MyContext.Consumer>
      {context => (
        <form
          onSubmit={e => {
            context.handleSignup(e);
            props.history.push('/login');
          }}
        >
          <StyledForms>
          <h2>Registro</h2>
            <div className="formstyle">
              <div>
                <label htmlFor="name">Nombre/s</label>
                <input
                  name="name"
                  placeholder="Nombre/s"
                  type="text"
                  value={context.formSignup.name}
                  onChange={e => context.handleInput(e, 'formSignup')}
                />
              </div>

              <div>
                <label htmlFor="last_name">Apellidos</label>
                <input
                  name="last_name"
                  placeholder="Apellidos"
                  type="text"
                  value={context.formSignup.last_name}
                  onChange={e => context.handleInput(e, 'formSignup')}
                />
              </div>

              <div>
                <label htmlFor="role">Role</label>
                <select
                  value={context.formSignup.role}
                  name="role"
                  onChange={e => context.handleInput(e, 'formSignup')}
                >
                  <option value="Servicio Social">Servicio Social</option>
                  <option value="Asistente medica">Asistente medica</option>
                  <option value="Medico">Medico</option>
                  <option value="Jefe enfermeros">Jefe enfermeros</option>
                  <option value="Enfermeras">Enfermeras</option>
                </select>
                </div>

              <div>
                <label htmlFor="phone">Teléfono</label>
                <input
                  name="phone"
                  placeholder="Teléfono"
                  type="text"
                  value={context.formSignup.phone}
                  onChange={e => context.handleInput(e, 'formSignup')}
                />
              </div>

              <div>
                <label htmlFor="hospital">Hospital</label>
                <input
                  name="hospital"
                  placeholder="Hospital"
                  type="text"
                  value={context.formSignup.hospital}
                  onChange={e => context.handleInput(e, 'formSignup')}
                />
              </div>

              <div>
                <label htmlFor="speciality">Especialidad</label>
                <input
                  name="speciality"
                  placeholder="Especialidad"
                  type="text"
                  value={context.formSignup.speciality}
                  onChange={e => context.handleInput(e, 'formSignup')}
                />
              </div>

              <div>
                <label htmlFor="identification_card">Cédula</label>
                <input
                  name="identification_card"
                  placeholder="Cédula"
                  type="text"
                  value={context.formSignup.identification_card}
                  onChange={e => context.handleInput(e, 'formSignup')}
                />
              </div>

              <div>
                <label htmlFor="enrollment">Matrícula</label>
                <input
                  name="enrollment"
                  placeholder="Matrícula"
                  type="text"
                  value={context.formSignup.enrollment}
                  onChange={e => context.handleInput(e, 'formSignup')}
                />
              </div>

              <div>
                <label htmlFor="username">Mail de usuario</label>
                <input
                  name="username"
                  placeholder="Mail de usuario"
                  type="text"
                  value={context.formSignup.username}
                  onChange={e => context.handleInput(e, 'formSignup')}
                />
              </div>

              <div>
                <label htmlFor="password">Contraseña</label>
                <input
                  name="password"
                  placeholder="Contraseña"
                  type="password"
                  value={context.formSignup.password}
                  onChange={e => context.handleInput(e, 'formSignup')}
                />
              </div>

              <div>
                <button type="submit">Registrarse</button>
              </div>
              </div>
              
            
          </StyledForms>
        </form>
      )}
    </MyContext.Consumer>
  );
}
