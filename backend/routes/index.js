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

const{
  createUser,
  getUser,
  updateUser,
  deleteUser,
  getUsers,
}=require('../controllers/userControllers')


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

//User
router.get('/users', catchErrors(getUsers));
router.get('/users/:id', catchErrors(getUser));
router.post('/users', catchErrors(createUser));
router.patch('/users/:id', catchErrors(updateUser));
router.delete('/users/:id', catchErrors(deleteUser))

module.exports = router;