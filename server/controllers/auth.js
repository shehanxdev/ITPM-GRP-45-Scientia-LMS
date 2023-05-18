const Jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("./../models/User.js");

//REGISTERING CONTROLLER
const register = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      picturePath = "",
      role,
      enrolledCourses = [],
      publishedCourses = [],
    } = req.body;

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);
    console.log(hashedPassword);

    const newUser = new User({
      firstName,
      lastName,
      email,
      hashedPassword,
      password,
      picturePath,
      role,
      enrolledCourses,
      publishedCourses,
    });

    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

//LOGIN IN CONTROLLER
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });

    if (!user) {
      return res.status(400).json({ msg: "User does not exist" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    // if (!isMatch) {

    //   return res.status(400).json({ msg: "Invalid credentials" });
    // }

    const token = Jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "20d",
    });
    delete user.password;
    res.status(200).json({ token, user });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

module.exports = { login, register };
