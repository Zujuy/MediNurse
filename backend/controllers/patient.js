const Project = require("../models/Patient");
const user = require("../models/User");

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