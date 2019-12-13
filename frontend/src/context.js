import React, { Component, createContext } from 'react'
import AUTH_SERVICE from './services/AuthService'
import Swal from 'sweetalert2'

export const MyContext = createContext()

class MyProvider extends Component {
  state = {
    loggedUser: null,
    formSignup: {
    name: "String",
    last_name: "String",
    role:"",
    phone: "String",
    hospital: "String",
    especiality: "String",
    identification_card: "String",
    enrollment: "String",
    username: "String",
    password: "String",
    },
    loginForm: {
      username: '',
      password: ''
    },
    user: {}
  }

  componentDidMount() {
    if (document.cookie) {
      AUTH_SERVICE.getUser()
        .then(({ data }) => {
          this.setState({ loggedUser: true, user: data.user })
          Swal.fire(`Welcome back ${data.user.name} `, '', 'success')
        })
        .catch(err => console.log(err))
    }
  }

  handleInput = (e, obj) => {
    const a = this.state[obj]
    const key = e.target.name
    a[key] = e.target.value
    this.setState({ obj: a })
  }

  handleSignup = async e => {
    e.preventDefault()
    const { data } = await AUTH_SERVICE.signup(this.state.formSignup)
    Swal.fire(`Welcome ${data.user.name}`, '', 'success')
  }

  handleLogin = (e, cb) => {
    e.preventDefault()
    AUTH_SERVICE.login(this.state.loginForm)
      .then(({ data }) => {
        this.setState({ loggedUser: true, user: data.user })
        cb()
      })
      .catch(err => {
        Swal.fire(`Hay un error`, 'verifica tu información')
      })
  }

  handleLogout = async cb => {
    await AUTH_SERVICE.logout()
    window.localStorage.clear()
    this.setState({ loggedUser: false, user: {} })
    cb()
  }

  

  render() {
    console.log(this.state)
    return (
      <MyContext.Provider
        value={{
          loggedUser: this.state.loggedUser,
          formSignup: this.state.formSignup,
          loginForm: this.state.loginForm,
          handleInput: this.handleInput,
          handleSignup: this.handleSignup,
          handleLogin: this.handleLogin,
          handleLogout: this.handleLogout
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    )
  }
}

export default MyProvider