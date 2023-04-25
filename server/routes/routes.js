const express = require('express');
const router = express.Router();
const User = require("../model/user");
const Control = require("../controller/controller")


// GET all users
router.get('/users',Control.getUser );

// GET single user by ID
router.get('/users/:id', (req, res) => {
  User.findById(req.params.id)
    .then(user => {
      if (!user) {
        return res.status(404).send('User not found');
      }
      res.json(user);
    })
    .catch(error => {
      console.error(error);
      res.status(500).send('Error retrieving user');
    });
});

// POST new user
router.post('/postuser', (req, res) => {
  const user = new User(req.body);

  user.save()
    .then(() => {
      res.status(201).send('User created successfully');
    })
    .catch(error => {
      console.error(error);
      res.status(500).send('Error creating user');
    });
});

// PUT update user by ID
router.put('/updateuser/:id', (req, res) => {
  User.findByIdAndUpdate(req.params.id, req.body)
    .then(user => {
      if (!user) {
        return res.status(404).send('User not found');
      }
      res.status(200).send('User updated successfully');
    })
    .catch(error => {
      console.error(error);
      res.status(500).send('Error updating user');
    });
});

// DELETE user by ID
router.delete('/removeuser/:id', (req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(user => {
      if (!user) {
        return res.status(404).send('User not found');
      }
      res.status(200).send('User deleted successfully');
    })
    .catch(error => {
      console.error(error);
      res.status(500).send('Error deleting user');
    });
});

module.exports = router;
