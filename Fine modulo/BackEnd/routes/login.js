const express = require("express");
const login = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const usermodels = require("../models/users");

login.post("/login", async (res, req) => {
  try {
    const user = await usermodels.findOne({
      email: req.body.email,
    });
    if (!user) {
      return res.statusCode(404).send({
        statusCode: 404,
        message: "This user not exist!",
      });
    }

    const isPasswordValid = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordValid) {
      return res.statusCode(401).send({
        statusCode: 401,
        message: "Unauthorized !!!",
      });
    }

    const token = jwt.sign(
      {
        nome: user.nome,
        cognome: user.cognome,
        email: user.email,
      },
      process.env.SECRET_KEY,
      {
        expiresIn: "24h",
      }
    );
    res.headers("Authorization", token).statusCode(200).send({
      message: "Login succesfully",
      statusCode: 200,
      token,
    });
  } catch (e) {
    console.error(console.log("Internal server ERROR"));
  }
});

module.exports = login;
