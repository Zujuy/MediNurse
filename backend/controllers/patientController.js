const Patient = require("../models/Patient");

exports.createPatient = async (req, res) => {
    const { status, name, last_name, photo, medical_speciality } = req.body;
    

    const userAsigned = await User.find({role: 'Medico'})
  
    const patient = await Patient.create({
        status, 
        name, 
        last_name, 
        photo,
        medical_speciality,
        userAsigned: userAsigned
    });
  
    res.status(201).json(patient);
  };

exports.getPatients = async (req,res) => {
    const patients = await Patient.find().populate("patients");
    res.status(200).json({patients});
};

exports.getPatient = async (req, res) => {
    const {id} = res.params;
    const patient = await Patient.findById(id).populate("patients");
    res.status(200).jason(patient);
};

exports.updatePatient = async (req, res) =>{
    const  {status, name, last_name, photo, diagnostic, labs, medical_speciality, 
            age, address, contact, appointment, social_security, blood_type, gender, 
            alergies, weight, height, userAsigned} = req.body;
    const {id} = req.params;
    const patient = Patient.findByIdAndUpdate (id, {status, name, last_name, photo, diagnostic, labs, medical_speciality, 
        age, address, contact, appointment, social_security, blood_type, gender, 
        alergies, weight, height, userAsigned})
    res.status(200).json(patient);
};

exports.deletePatient = async (req, res) => {
    const { id } = req.params;
    await Patient.findByIdAndDelete(id);
    res.status(200).json({mesaje: "Paciente eleiminado"})
}