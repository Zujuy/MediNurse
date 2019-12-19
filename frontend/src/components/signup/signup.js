import React, { Component, useState } from 'react';
import { StyledForms } from '../../style/Components';
import { MyContext } from '../../context';
import AUTH_SERVICE from '../../services/AuthService';
import Swal from 'sweetalert2';

export default class Signup extends Component {
  state = {
    file: {},
    formSignup: {
      name: '',
      lastName: '',
      role: '',
      photo: '',
      phone: '',
      hospital: '',
      especiality: '',
      identification_card: '',
      enrollment: '',
      email: '',
      password: ''
    }
  };

  handleSignup = async e => {
    e.preventDefault();
    const { formSignup } = this.state;
    const formData = new FormData();

    for (let key in this.state.formSignup) {
      formData.append(key, this.state.formSignup[key]);
    }
    formData.append('photo', this.state.file);

    const { user } = await AUTH_SERVICE.signup(formData);
    //console.log(user);
    //Swal.fire(`Welcome ${user.user.name}`, '', 'success');

    this.setState({
      formSignup: {
        name: '',
        last_name: '',
        role: '',
        photo: '',
        phone: '',
        hospital: '',
        especiality: '',
        identification_card: '',
        enrollment: '',
        email: '',
        password: ''
      }
    });
  };

  inputChange = ({ target: { value, name } }) => {
    this.setState({
      ...this.state,
      formSignup: {
        ...this.state.formSignup,
        [name]: value
      }
    });
  };

  handleFile = e => {
    this.setState({ file: e.target.files[0] });
  };

  render() {
    return (
      <MyContext.Consumer>
        {context => (
          <form
            onSubmit={e => {
              this.handleSignup(e);
              this.props.history.push('/login');
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
                    value={this.state.formSignup.name}
                    onChange={this.inputChange}
                  />
                </div>

                <div>
                  <label htmlFor="lastName">Apellidos</label>
                  <input
                    name="lastName"
                    placeholder="Apellidos"
                    type="text"
                    value={this.state.formSignup.last_name}
                    onChange={this.inputChange}
                  />
                </div>

                <div>
                  <label htmlFor="role">Role</label>
                  <select
                    value={this.state.formSignup.role}
                    name="role"
                    onChange={this.inputChange}
                  >
                    <option value="">Elige un Rol</option>
                    <option value="Servicio Social">Servicio Social</option>
                    <option value="Asistente medica">Asistente medica</option>
                    <option value="Medico">Medico</option>
                    <option value="Jefe enfermeros">Jefe enfermeros</option>
                    <option value="Enfermera">Enfermeras</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="phone">Teléfono</label>
                  <input
                    name="phone"
                    placeholder="Teléfono"
                    type="text"
                    value={this.state.formSignup.phone}
                    onChange={this.inputChange}
                  />
                </div>

                <div>
                  <label htmlFor="hospital">Hospital</label>
                  <input
                    name="hospital"
                    placeholder="Hospital"
                    type="text"
                    value={this.state.formSignup.hospital}
                    onChange={this.inputChange}
                  />
                </div>

                <div>
                  <label htmlFor="speciality">Especialidad</label>
                  <input
                    name="speciality"
                    placeholder="Especialidad"
                    type="text"
                    value={this.state.formSignup.speciality}
                    onChange={this.inputChange}
                  />
                </div>

                <div>
                  <label htmlFor="identification_card">Cédula</label>
                  <input
                    name="identification_card"
                    placeholder="Cédula"
                    type="text"
                    value={this.state.formSignup.identification_card}
                    onChange={this.inputChange}
                  />
                </div>

                <div>
                  <label htmlFor="enrollment">Matrícula</label>
                  <input
                    name="enrollment"
                    placeholder="Matrícula"
                    type="text"
                    value={this.state.formSignup.enrollment}
                    onChange={this.inputChange}
                  />
                </div>

                <div>
                  <label htmlFor="photo">Foto</label>
                  <input
                    name="photo"
                    placeholder="Foto"
                    type="file"
                    value={this.state.formSignup.photo}
                    onChange={this.handleFile}
                  />
                </div>

                <div>
                  <label htmlFor="emaail">Mail de usuario</label>
                  <input
                    name="email"
                    placeholder="Mail de usuario"
                    type="text"
                    value={this.state.formSignup.email}
                    onChange={this.inputChange}
                  />
                </div>

                <div>
                  <label htmlFor="password">Contraseña</label>
                  <input
                    name="password"
                    placeholder="Contraseña"
                    type="password"
                    value={this.state.formSignup.password}
                    onChange={this.inputChange}
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
}

Signup.contextType = MyContext;
