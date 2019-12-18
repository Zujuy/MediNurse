const User = require('../models/User');

// Bcrypt to encrypt passwords

exports.signup = async (req, res, next) => {
  const user = await User.register({ ...req.body }, req.body.password)
    .then(user => {
      res.status(200).json({ user });
    })
    .catch(err => {
      res.status(500).json({ err });
    });
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