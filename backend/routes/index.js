const express = require("express");
const router = express.Router();
const catchErrors = require("../middlewares/catchErrors");

const{
  createPatient,
  getPatient,
  updatePatient,
  deletePatient,
  getPatients
} = require('../controllers/patientController');


/* GET home page */
router.get("/", (req, res, next) => {
    res.send("Bienvenido al 3er proyecto");
  });

// Patient
router.get('/patients', catchErrors(getPatients));
router.get('/patients/:id', catchErrors(getPatient));
router.post('/patients', catchErrors(createPatient));
router.patch('/patients/:id', catchErrors(updatePatient));
router.delete('/projects/:id', catchErrors(deletePatient))


  module.exports = router;