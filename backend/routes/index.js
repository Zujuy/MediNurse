const express = require('express');
const router = express.Router();
const catchErrors = require('../middlewares/catchErrors');
const upload = require('../config/cloudinary');

const {
  createUser,
  getUser,
  updateUser,
  getUsers
} = require('../controllers/userControllers');

const {
  getNursingSheets,
  getNursingSheet,
  createNursingSheet,
  updateNursingSheet
} = require('../controllers/nurseSheetControllers');

/* GET home page */
router.get('/', (req, res, next) => {
  res.send('Bienvenido al 3er proyecto');
});

//User
router.get('/users', catchErrors(getUsers));
router.get('/users/:id', catchErrors(getUser));
router.post('/users', catchErrors(createUser));
router.patch('/users/:id', catchErrors(updateUser));

//upload photos
// router.get('/', (req, res, next) => {
//   res.render('index');
// });

router.post('/upload', upload.single('photo'), (req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3001');
  res.status(201).json({ file: req.file, data: { ...req.body } });
});

//nursing sheet
router.get('/nursingSheets', catchErrors(getNursingSheets));
router.get('/nursingSheets/:id', catchErrors(getNursingSheet));
router.get('/nursignSheets', catchErrors(createNursingSheet));
router.patch('/nursingSheets/:id', catchErrors(updateNursingSheet));

module.exports = router;
