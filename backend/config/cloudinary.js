const cloudinary = require('cloudinary');
const cloudinaryStorage = require('multer-storage-cloudinary');
const multer = require('multer');
require('dotenv').config();

cloudinary.config({
  cloud_name: 'zujuy',
  api_key: '281974532858776',
  api_secret: '0yi7x3T6DIak7jRAmpR0wimUU8U'
});

const storage = cloudinaryStorage({
  cloudinary,
  folder: 'photos',
  allowedFormats: ['jpg', 'png', 'gif'],
  filename: function(req, file, cb) {
    cb(null, file.originalname);
  }
});

module.exports = multer({ storage });
