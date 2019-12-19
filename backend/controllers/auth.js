const User = require('../models/User');

// Bcrypt to encrypt passwords

exports.signup = async (req, res, next) => {
  if (req.file) {
    const {
      name,
      lastName,
      role,
      photo,
      phone,
      hospital,
      especiality,
      identification_card,
      enrollment,
      email
    } = req.body;

    const user = await User.register(
      {
        name,
        lastName,
        role,
        photo: req.file.secure_url,
        phone,
        hospital,
        especiality,
        identification_card,
        enrollment,
        email
      },
      req.body.password
    )
      .then(user => {
        res.header('Access-Control-Allow-Origin', 'http://localhost:3001');
        res.status(200).json({ user });
      })
      .catch(err => {
        res.status(500).json({ err });
      });
  } else {
    res.status(403).json({ message: 'Falto la foto' });
  }
};

exports.logout = (req, res) => {
  req.logout();
  res.clearCookie('connect.sid');
  res.status(200).json({ msg: 'Logged Out' });
};

exports.login = async (req, res, next) => {
  res.status(200).json({ user: req.user });
};

exports.getProfile = async (req, res, next) => {
  const user = await User.findById(req.user._id);
  res.status(200).json({ user });
};
