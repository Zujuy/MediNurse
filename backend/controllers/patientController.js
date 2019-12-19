const Patient = require('../models/Patient');
const User = require('../models/User');

exports.createPatient = async (req, res, next) => {
  if (req.file) {
    const {
      name,
      last_name,
      photo,
      diagnostic,
      labs,
      medical_speciality,
      age,
      address,
      contact,
      phone,
      social_security,
      blood_type,
      gender,
      alergies,
      weight,
      height,
      nationality,
      medicAsigned,
      nurseAsigned
    } = req.body;

    const patient = await Patient.create({
      name,
      last_name,
      photo: req.file.secure_url,
      diagnostic,
      labs,
      medical_speciality,
      age,
      address,
      contact,
      phone,
      social_security,
      blood_type,
      gender,
      alergies,
      weight,
      height,
      nationality,
      medicAsigned,
      nurseAsigned
    })
      .then(patient => {
        res.header('Access-Control-Allow-Origin', 'http://localhost:3001');
        res.status(200).json({ patient });
      })
      .catch(err => {
        res.status(500).json({ err });
      });
  } else {
    res.status(401).json({ message: 'No hay foto' });
  }
};

exports.getMedicsAndNurses = async (req, res, next) => {
  const medicsAndNurses = await User.find({ role: ['Medico', 'Enfermera'] });
  res.status(201).json(medicsAndNurses);
};

exports.getPatients = async (req, res) => {
  const { _id } = req.user;
  const patientsAsigned = await Patient.find({ nurseAsigned: _id });
  res.status(200).json({ patientsAsigned });
};

exports.getPatient = async (req, res) => {
  const { id } = req.params;
  const patient = await Patient.findById(id).populate('patients');
  res.status(200).jason(patient);
};

exports.updatePatient = async (req, res) => {
  const {
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
  } = req.body;
  const { id } = req.params;
  const patient = Patient.findByIdAndUpdate(id, {
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
  res.status(200).json(patient);
};

exports.deletePatient = async (req, res) => {
  const { id } = req.params;
  await Patient.findByIdAndDelete(id);
  res.status(200).json({ mesaje: 'Paciente eleiminado' });
};