import React, { Component } from 'react';
import { StyledForms } from '../../style/components';
import { MyContext } from '../../context';

export default class Login extends Component {
  componentDidMount() {
    if (this.context.loggedUser) {
      return this.props.history.push('/profile');
    }
  }

  render() {
    return (
      <MyContext.Consumer>
        {(context) => (
          <form
            onSubmit={(e) => {
              context.handleLogin(e, () => {
                this.props.history.push('/profile');
              });
            }}
          >
            <StyledForms>
              <h2>Login</h2>
              <div className="formstyle">
                <div>
                  <label htmlFor="email">Mail de usuario</label>
                  <input
                    name="email"
                    placeholder="Mail de usuario"
                    type="email"
                    value={context.loginForm.email}
                    onChange={(e) => context.handleInput(e, 'loginForm')}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="password">Password</label>
                  <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    value={context.loginForm.password}
                    onChange={(e) => context.handleInput(e, 'loginForm')}
                    required
                  />
                </div>

                <div>
                  <button type="submit">Login</button>
                </div>
              </div>
            </StyledForms>
          </form>
        )}
      </MyContext.Consumer>
    );
  }
}

Login.contextType = MyContext;
