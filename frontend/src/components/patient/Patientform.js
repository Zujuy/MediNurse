import React, {Component} from "react";
import PatientsService from "../../services/patientsService";

const patientsService= new PatientsService();

export default class AddPatient extends Component {

    state ={
        status:"",
        name: "",
        last_name: "",
        photo: "",
        diagnostic: "",
        labs: "",
        medical_speciality: "",
        age: "",
        address: "",
        contact: "",
        appointment: "",
        social_security: "",
        blood_type: "",
        gender: "",
        alergies: "",
        weight: "",
        height: "",
        userAsigned: ""
    };

    inputChange = ({target, 
                    status, 
                    name, 
                    last_name, 
                    photo, 
                    diagnostic,
                    labs, 
                    medical_speciality, 
                    age, 
                    address,
                    contact,
                    appointment,
                    social_security,
                    blood_type,
                    gender,
                    alergies,
                    weight,
                    height,
                    userAsigned,}) => {
        this.setState({
            ...this.state,
            [name]: value
        });
        };

    addPatient = async e => {
        e.preventDefault();
        const {target, 
            status, 
            name, 
            last_name, 
            photo, 
            diagnostic,
            labs, 
            medical_speciality, 
            age, 
            address,
            contact,
            appointment,
            social_security,
            blood_type,
            gender,
            alergies,
            weight,
            height,
            userAsigned,} = this.state;
        const Patient = await patientsService.createPatient({
            target, 
            status, 
            name, 
            last_name, 
            photo, 
            diagnostic,
            labs, 
            medical_speciality, 
            age, 
            address,
            contact,
            appointment,
            social_security,
            blood_type,
            gender,
            alergies,
            weight,
            height,
            userAsigned
        });
        alert("Paciente creado");
        this.setState({
            status:"",
            name: "",
            last_name: "",
            photo: "",
            diagnostic: "",
            labs: "",
            medical_speciality: "",
            age: "",
            address: "",
            contact: "",
            appointment: "",
            social_security: "",
            blood_type: "",
            gender: "",
            alergies: "",
            weight: "",
            height: "",
            userAsigned: ""
        });

        Button.propTypes = {
            variant: PropTypes
              .oneOf([ 'active', 'no active'])
              .isRequired,
          };
    };

    render(){
    }
}