const { Schema, model } = require('mongoose')
const PLM = require('passport-local-mongoose')

const userSchema = new Schema(
    {   
      name: String,
      last_name: String,
      photo: String,
      role:{

        enum: ["Servicio Social", "Asistente médica","Médico","Jefe enfermeros","Enfermeras",]
        
      },
      phone: String,
      hospital: String,
      especiality: String,
      identification_card: String,
      enrollment: String,
      username: String,
      password: String
    },
    
  )
  
  
  
  module.exports = model('User', userSchema)
  