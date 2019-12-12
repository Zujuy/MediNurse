import React from 'react'
import {StyledForms} from "../../style/components";
import { MyContext } from '../../context'

export default function SignupContainer(props) {
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
        <h2>Sign Up</h2>
        <form>    
          <label htmlFor="username">Username</label>
          <input
              name="username"
              prefix={<icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
              type="text"
              value={context.formSignup.name}
              onChange={e => context.handleInput(e, 'formSignup')}
            />
        </form>
        </StyledForms>
        </form>
      )}
      </MyContext.Consumer>
  )};