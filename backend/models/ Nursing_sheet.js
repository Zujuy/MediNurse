const { Schema, model } = require('mongoose')
const PLM = require('passport-local-mongoose')

const nursingSchema = new Schema(
    {
        patient: {
            type: Schema.Types.ObjectId,
            ref: "Patient"
        },
        user: [{
            type: Schema.Types.ObjectId,
            ref: "User"
        }], 
        entry: String,
        days_stay: String,
        actual_day: String,
        labs: String,
        shift: {
            enum: ["Night", "Morning", "Afternoon"]
        },
        time: String,
        bed: String,
        heart_rate: String,
        temperature: String,
        breathing_frequency: String,
        
    },
    
  )
  
  module.exports = model('Nursing_sheet', nursingSchema)