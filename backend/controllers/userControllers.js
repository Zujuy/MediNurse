const User = require ("../models/User");

exports.createUser = async(req, res)=>{
    const { 
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
    } = req.body;

    const user= await User.create({
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
    });

    res.status(201).json(user);

};

exports.getUsers = async (req, res) =>{
    const users= await User.find().populate("users");
    res.status(200).jason({users});
};

exports.getUser = async (req, res) =>{
    const {id} = res.params;
    const user = await User.findById(id).populate("users");
    res.status(200).jason(user)
};

exports.updateUser = async (req, res) => {
    const {
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
        password}= req.body;
    const {id} = req.params;
    const user = User.findByIdAndUpdate (id, {name,
        last_name,
        photo,
        role,
        phone,
        hospital,
        especiality,
        identification_card,
        enrollment,
        username,
        password})
        res.status(200).json(user);
    };


