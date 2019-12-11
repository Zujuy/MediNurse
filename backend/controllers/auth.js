const User = require("../models/User");

// Bcrypt to encrypt passwords
const bcrypt = require("bcrypt");
const bcryptSalt = 10;

exports.signup = (req, res, next) => {

  const password = req.body.password;
  const { name, last_name, phone, photo, role, hospital, especiality, identification_card, enrollment, username} = req.body
  if (username === "" || password === "") {
    res.json({ message: "Indicate username and password" });
    return;
  }

  User.findOne({ username }, "username", (err, user) => {
    if (user !== null) {
      res.json({ message: "The username already exists" });
      return;
    }

    const salt = bcrypt.genSaltSync(bcryptSalt);
    const hashPass = bcrypt.hashSync(password, salt);

    const newUser = new User({
        name,
        last_name,
        photo,
        role,
        phone,
        hospital,
        especiality,
        identification_card,
        enrollment,
        username,
        password: hashPass
    });

    newUser
      .save()
      .then(() => {
        res.status(201).json(newUser);
      })
      .catch(err => {
        res.status(500).json({ message: "Something went wrong" });
      });
  });
};

exports.logout = (req, res) => {
  req.logout();
  res.redirect("/");
};

exports.login = (req, res) => {
  const { user } = req;
  res.status(200).json(user);
};

exports.current = (req, res) => {
  const { user } = req;
  res.status(200).json(user);
};
