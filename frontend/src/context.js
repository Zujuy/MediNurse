import React, { Component, createContext } from 'react'
import AUTH_SERVICE from './services/AuthService'
import Swal from 'sweetalert2'
import PatientService from './services/patientsService'
import axios from 'axios'

export const MyContext = createContext()

class MyProvider extends Component {
  state = {
    loggedUser: null,

    formSignup: {
    name: '',
    last_name: '',
    role: '',
    phone: '',
    hospital: '',
    especiality: '',
    identification_card: '',
    enrollment: '',
    username: '',
    password: '',
    },

    loginForm: {
      username: '',
      password: ''
    },
    user: {},

    patientForm: {
      status:'',
      name: '',
      last_name: '',
      photo:'',
      diagnostic: '',
      labs: '',
      medical_speciality: '',
      age: '',
      address: '',
      contact: '',
    //   appointment: appointmentSchema.Types.ID,
      social_security:'',
      blood_type: '',
      gender: '',
      alergies: '',
      weight: '',
      height: '',
      userAsigned: ''
    },
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

  handleCreatePatient = async e =>{
    e.preventDefault()
    const {data} = await PatientService.createPatient(this.state.patientForm)
    Swal.fire(`Patient ${data.user.name} created`, '', 'success')
  }

  handleFile = e => {
    this.setState({ file: e.target.files[0] })
  }

  handleSubmit = async e => {
    e.preventDefault()
    const formData = new FormData()
    for (let key in this.state.fakeData) {
      formData.append(key, this.state.fakeData[key])
    }
    formData.append('photo', this.state.file)
    const { data } = await axios.post('http://localhost:3000/upload', formData)
    console.log(data)
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
          handleLogout: this.handleLogout,
          patientForm: this.state.patientForm,
          handleCreatePatient: this.handleCreatePatient,
          handleFile: this.handleFile,
          handleSubmit: this.handleSubmit,

        }}
      >
        {this.props.children}
      </MyContext.Provider>
    )
  }
}

export default MyProvider