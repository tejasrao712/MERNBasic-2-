const express = require("express")
const User = require("../model/user")

exports.getUser= async (req, res) => {
    const users = await User.find()
      .then(users => {
        res.json(users);
      })
      .catch(error => {
        console.error(error);
        res.status(500).send('Error retrieving users');
      });
  };