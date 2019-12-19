const { Schema, model } = require('mongoose')
const PLM = require('passport-local-mongoose')

const appointmentSchema = new Schema(
    {
      place: {
          enum: ["Laboratorio", "Consultorio"]
      },
      time: String,
      day: String,
      lab: String,
      person:{
          enum:["Doctor", "lab"]
      },
    }
  )
  
  
  module.exports = model('Appointment', appointmentSchema)