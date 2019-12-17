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
        sheet_number: String,
        shift: {
            enum: ["Night", "Morning", "Afternoon"]
        },
        time: String,
        bed: String,
        // estos 3 parametros haran la grafica
        heart_rate: String,
        temperature: String,
        breathing_frequency: String,
        //
        blood_pressure: String,
        mean_arterial_pressure: String,
        central_air_pressure: String,
        glasgow: String,
        ramsay: String,
        visual_scale: String,
        risk_falls: String,
        ph: String,
        glucose: String,
        ketones: String,
        proteins: String,
        blood: String,
        density: String,
        solutions:{
            solution_name: String,
            solutions_time:String,
        },
        medicines:{
            medicine_name: String,
            medicines_time: String,
        },
        Food:{
            food_name: String,
            intake_time: String,
        },
        prescription_drugs:{
            drug_name:String,
            presentation: String,
            via: String,
            dose: String,
            presence: String,
            schedule: String,
        },
        assessment: String,
        diagnostic: String,
        interventions: String,
        response: String,
        observations: String,
        

        
    },
    
  )
  
  module.exports = model('Nursing_sheet', nursingSchema)