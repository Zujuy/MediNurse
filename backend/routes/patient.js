const express = require('express');
const router = express.Router();
const catchErrors = require('../middlewares/catchErrors');
const uploadPa = require('../config/cloudinary');

const {
  createPatient,
  getPatient,
  updatePatient,
  getPatients,
  getMedicsAndNurses
} = require('../controllers/patientController');

// Patient
router.get('/nurses&&medics', catchErrors(getMedicsAndNurses));
router.get('/all/asigned', catchErrors(getPatients));
router.post('/createpatient', uploadPa.single('photo'), createPatient);
router.get('/onepatient/:id', catchErrors(getPatient));
router.patch('/update/:id', catchErrors(updatePatient));

module.exports = router;
