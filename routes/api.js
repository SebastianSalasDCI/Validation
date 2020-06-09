const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');
const checkAuthToken = require('../middleware/auth');

const User = require('../models/User');


router.post( '/login',
    [   
      check('email', 'Please include a valid email').isEmail(),
      check(
        'password',
        'Please enter a password with 6 or more characters'
      ).isLength({ min: 6 })
    ],
    async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
  
      const {email, password } = req.body;
  
      try {
        let user = await User.findOne({ email });
  
        if (!user) {
          return res
            .status(400)
            .json({ errors: [{ msg: 'Email is not registered' }] });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res
            .status(400)
            .json({ errors: [{ msg: 'Invalid Credentials' }] });
        }
  
        //Everything is fine, the user can log in
        const payload = {
          user: {
            id: user._id
          }
        }

        jwt.sign(payload,process.env.JWTSECRET,{ expiresIn: 360000 }, (err,token) =>{
          if(err){
            res.status(500).send({error: true, msg: err.message})
          }

          res.status(200).send({error: false, msg:'User logged in', token})

        })

        

      } catch (err) {
        console.error(err.message);
        res.status(500).send({error: true, msg:err.message});
      }
    }
);
  



router.post( '/registration',
    [
      check('name', 'Name is required')
        .not()
        .isEmpty(),
      check('email', 'Please include a valid email').isEmail(),
      check(
        'password',
        'Please enter a password with 6 or more characters'
      ).isLength({ min: 6 })
    ],
    async (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
  
      const { name, email, password } = req.body;
  
      try {
        let user = await User.findOne({ email });
  
        if (user) {
          return res
            .status(400)
            .json({ errors: [{ msg: 'User already exists' }] });
        }
  
        user = new User({
          name,
          email,
          password
        });
  
        const salt = await bcrypt.genSalt(10);
  
        user.password = await bcrypt.hash(password, salt);
  
        let saved_user = await user.save();

        const payload = {
            user:{
              id: saved_user._id
            }
        }

        jwt.sign(payload,process.env.JWTSECRET, {expiresIn: 360000},(err, token)=>{
          if(err){
            res.status(500).send({error: true, msg: err.message})
          }

          res.status(200).send({error: false, msg:'User registered', token})

        })
  
        

      } catch (err) {
        console.error(err.message);
        res.status(500).send({error: true, msg:err.message});
      }
    }
);


router.get('/info',checkAuthToken, async (req, res) => {

  try {
    
    const info = await User.findById(req.user.id);

    if(!info){

      res.status(400).send({error: true, msg: 'Error obtaining information from user'})

    }

    res.status(200).send({error: false,  msg: 'User found', name: info.name})

  } catch (error) {

    res.status(500).send({error: true, msg: error.message})
    
  }


})



module.exports = router;










