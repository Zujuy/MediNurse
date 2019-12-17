const Nursing_sheet= require ("../models/ Nursing_sheet")

exports.createNursingSheet = async(req, res)=>{
    const{
    patient,
    user,
    entry,
    days_stay,
    sheet_number,
    shift,
    time,
    bed,
    // estos 3 parametros haran la grafica
    heart_rate,
    temperature,
    breathing_frequency,
    //
    blood_pressure,
    mean_arterial_pressure,
    central_air_pressure,
    glasgow,
    ramsay,
    visual_scale,
    risk_falls,
    ph,
    glucose,
    ketones,
    proteins,
    blood,
    density,
    solutions:{
        solution_name,
        solutions_time,
    },
    medicines:{
        medicine_name,
        medicines_time,
    },
    Food:{
        food_name,
        intake_time,
    },
    prescription_drugs:{
        drug_name,
        presentation,
        via,
        dose,
        presence,
        schedule,
    },
    assessment,
    diagnostic,
    interventions,
    response,
    observations,
    } = req.body

    const nursingSheet= await nursingSheet.create({
    patient,
    user,
    entry,
    days_stay,
    sheet_number,
    shift,
    time,
    bed,
    // estos 3 parametros haran la grafica
    heart_rate,
    temperature,
    breathing_frequency,
    //
    blood_pressure,
    mean_arterial_pressure,
    central_air_pressure,
    glasgow,
    ramsay,
    visual_scale,
    risk_falls,
    ph,
    glucose,
    ketones,
    proteins,
    blood,
    density,
    solutions:{
        solution_name,
        solutions_time,
    },
    medicines:{
        medicine_name,
        medicines_time,
    },
    Food:{
        food_name,
        intake_time,
    },
    prescription_drugs:{
        drug_name,
        presentation,
        via,
        dose,
        presence,
        schedule,
    },
    assessment,
    diagnostic,
    interventions,
    response,
    observations,
    });

    res.status(201).json(user);
}

exports.getNursingSheets = async (get, res) =>{
    const nursingSheets= await NursingSheets.find().populate(nursingSheets);
    res.status(200).jason({nursingSheets})

};

exports.getNursingSheet = async (req, res) =>{
    const {id} = res.params;
    const nursingSheet = await nursingSheet.findById(id).populate("nursingSheets");
    res.status(200).jason(nursingSheet)
};

exports.updateNursingSheet = async (req, res) => {
    const {
    shift,
    time,
    bed,
    // estos 3 parametros haran la grafica
    heart_rate,
    temperature,
    breathing_frequency,
    //
    blood_pressure,
    mean_arterial_pressure,
    central_air_pressure,
    glasgow,
    ramsay,
    visual_scale,
    risk_falls,
    ph,
    glucose,
    ketones,
    proteins,
    blood,
    density,
    solutions:{
        solution_name,
        solutions_time,
    },
    medicines:{
        medicine_name,
        medicines_time,
    },
    Food:{
        food_name,
        intake_time,
    },
    prescription_drugs:{
        drug_name,
        presentation,
        via,
        dose,
        presence,
        schedule,
    },
    assessment,
    diagnostic,
    interventions,
    response,
    observations,
    }=req.body;
const {id} = req.params;
const nursingSheet = nursingSheet.findById (id, {
    shift,
    time,
    bed,
    // estos 3 parametros haran la grafica
    heart_rate,
    temperature,
    breathing_frequency,
    //
    blood_pressure,
    mean_arterial_pressure,
    central_air_pressure,
    glasgow,
    ramsay,
    visual_scale,
    risk_falls,
    ph,
    glucose,
    ketones,
    proteins,
    blood,
    density,
    solutions:{
        solution_name,
        solutions_time,
    },
    medicines:{
        medicine_name,
        medicines_time,
    },
    Food:{
        food_name,
        intake_time,
    },
    prescription_drugs:{
        drug_name,
        presentation,
        via,
        dose,
        presence,
        schedule,
    },
    assessment,
    diagnostic,
    interventions,
    response,
    observations})
    res.status(200).jason(nursingSheet);
};

