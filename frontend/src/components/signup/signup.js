import React , {useState}from 'react'
import {StyledForms, StyledButton} from "../../style/components";
import { MyContext } from '../../context'

export default function Signup(props) {

    const [statusAct, setStausAct] = useState(false)
    const [statusNoAct, setStausNoAct] = useState(false)

    const handleStatusAct = () => {
        if(statusAct === false) setStausAct(true)
        if(statusAct === true) setStausAct(false)
    }
    const handleStatusNoAct = () => {
        if(statusNoAct === false) setStausNoAct(true)
        if(statusNoAct === true) setStausNoAct(false)
    }


  return (
    <MyContext.Consumer>
      {context => (
        <form
          onSubmit={e => {
            context.handleSignup(e)
            props.history.push('/login')
          }}
        >
        <StyledForms>
        <div className="formstyle">
        <h2>Sign Up</h2>
        <div> 
          <label htmlFor="name">Nombre</label>
          <input
              name="name"
              placeholder="Nombre"
              type="text"
              value={context.formSignup.name}
              onChange={e => context.handleInput(e, 'formSignup')}
            />
            <label htmlFor="last_name">Apellido</label>
            <input
              name="last_name"
              placeholder="Apellido"
              type="text"
              value={context.formSignup.last_name}
              onChange={e => context.handleInput(e, 'formSignup')}
            />
            </div> 

            <div>
            <label htmlFor="role">Role</label>
            <input
              // aqui va el select
            />
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
            <button type="submit">Sign Up</button>
            </div>

            </div>
        </StyledForms>
        </form>
      )}
      </MyContext.Consumer>
  )};

