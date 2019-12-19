const { Schema, model } = require('mongoose');
const PLM = require('passport-local-mongoose');

const patientSchema = new Schema({
  status: {
    type: String,
    default: 'Activo'
  },
  name: String,
  last_name: String,
  photo: String,
  diagnostic: String,
  labs: String,
  medical_speciality: String,
  age: String,
  address: String,
  contact: String,
  phone: String,
  //   appointment: appointmentSchema.Types.ID,
  social_security: String,
  blood_type: String,
  gender: String,
  alergies: String,
  weight: String,
  height: String,
  nationality: String,
  medicAsigned: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  ],
  nurseAsigned: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  ]
});

module.exports = model('Patient', patientSchema);
