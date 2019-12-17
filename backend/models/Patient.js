const { Schema, model } = require('mongoose')
const PLM = require('passport-local-mongoose')

const patientSchema = new Schema(
    {
      status:String,
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
      social_security:String,
      blood_type: String,
      gender: String,
      alergies: String,
      weight: String,
      height: String,
      userAsigned: [{
          type: Schema.Types.ObjectId,
          ref:"User"
      }]

    
    },
    
  )
  
  
  
  module.exports = model('Patient', patientSchema)