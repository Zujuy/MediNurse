import React , {useState}from 'react'
import {StyledForms} from "../../style/Components";

export default function PatientForm(props) {

  const [role, setRole] = useState('')

  const handleChange = (event) => {
    setRole(event.target.value);
  }

  return (
      <form>  
        <StyledForms>
        <div className="formstyle">
        <h2>expediente médico</h2>
        <div> 
          <label htmlFor="name">Nombre</label>
          <input
              name="name"
              placeholder="Nombre"
              type="text"
              value={}
              onChange={}
            />
            <label htmlFor="last_name">Apellido</label>
            <input
              name="last_name"
              placeholder="Apellido"
              type="text"
              value={context.formSignup.last_name}
              onChange={}
            />
            </div> 

            <div>
            <label htmlFor="role">Role</label>
             <select value={role.value} onChange={handleChange}>
            <option value="Servicio Social">Servicio Social</option>
            <option value="Asistente medica">Asistente medica</option>
            <option value="Medico">Medico</option>
            <option value="Jefe enfermeros">Jefe enfermeros</option>
            <option value="Enfermeras">Enfermeras</option>

          </select>
            <label htmlFor="phone">Teléfono</label>
            <input
              name="phone"
              placeholder="Teléfono"
              type="text"
              value={}
              onChange={}
            />
            </div>

            <div>
            <label htmlFor="hospital">Hospital</label>
            <input
              name="hospital"
              placeholder="Hospital"
              type="text"
              value={}
              onChange={}
            />
            <label htmlFor="speciality">Especialidad</label>
            <input
              name="speciality"
              placeholder="Especialidad"
              type="text"
              value={}
              onChange={}
            />
            </div>

            <div>
            <label htmlFor="identification_card">Cédula</label>
            <input
              name="identification_card"
              placeholder="Cédula"
              type="text"
              value={}
              onChange={}
            />
            <label htmlFor="enrollment">Matrícula</label>
            <input
              name="enrollment"
              placeholder="Matrícula"
              type="text"
              value={}
              onChange={}
            />
            </div>

            <div>
            <label htmlFor="username">Mail de usuario</label>
            <input
              name="username"
              placeholder="Mail de usuario"
              type="text"
              value={}
              onChange={}
            />
            <label htmlFor="password">Contraseña</label>
            <input
              name="password"
              placeholder="Contraseña"
              type="password"
              value={}
              onChange={}
            />
            </div>

            <div>
            <button type="submit">Sign Up</button>
            </div>

            </div>
        </StyledForms>
        </form>
      )
    }
