import React, { Component } from "react";
import {StyledForms} from "../../style/components";
import { MyContext } from '../../context'

export default class Login extends Component {
  componentDidMount() {
    console.log(this.context)
    if (this.context.loggedUser) {
      console.log(';lol')
      return this.props.history.push('/profile')
    }
  }

  render() {
    return (
      <MyContext.Consumer>
        {context => context ? <form
            onSubmit={e => {
              context.handleLogin(e, () => {
                this.props.history.push('/profile')
              })
            }}
            >    
      <StyledForms>
        <h2>Login</h2>
        <form>    
          <label htmlFor="username">Username</label>
          <input
            name="username"
            prefix={
              <icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />
            }
            placeholder="Email"
            type="email"
            value={context.loginForm.username}
            onChange={e => context.handleInput(e, 'loginForm')}
            />
          
    
          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="password"
            prefix={
              () => <icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />
            }
            placeholder="Password"
            value={context.loginForm.password}
            onChange={e => context.handleInput(e, 'loginForm')}
            />
          <button type="submit">Login</button>
          </form>
      </StyledForms>
      </form> : null }
      </MyContext.Consumer>
    )}
  }

