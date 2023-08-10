import express from "express";
import RegisterSchema from '../models/registerSchema.js';
import Template from '../models/templateSchema.js';
import bcrypt from "bcrypt"
import { hashPassword } from "../helpers/authHelper.js";
import multer from 'multer';
import path from 'path';
const app = express();


export const signupController = async (req, res) => {

  try {
    const { fname,lname, email, password} = req.body;
    if (!fname || !lname || !email || !password) {
      console.log(req.body);
      return res.status(422).json({ error: "Empty Fields" });
      
    }

    const userAlreadyExists = await RegisterSchema.findOne({ email });

    if (userAlreadyExists) {
      return res.status(422).json({ error: "Email already exists" });
    }
    else{
      const hashedPassword = await hashPassword(password);
      const newUser = new RegisterSchema({
      fname,
      lname,
      email,
      password:hashedPassword,
    });

    const savedUser = await newUser.save();
    if (savedUser) {
      res.status(201).json({ message: 'User registered successfully' });
    } else {
      res.status(500).json({ error: 'Failed to register user' });
    }
  }} catch (err) {
    console.log(err);
    res.status(500).json({ error: "Server Error" });
  }
};

export const loginController = async (req, res) => {
    console.log("LOGIN")
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      
      return res.status(422).json({ error: "Empty Fields" });
    }
    const user = await RegisterSchema.findOne({ email});
    if (user) {
      const hashedPassword = await hashPassword(password);
      const findPassword = await bcrypt.compare(password,hashedPassword)
      if(findPassword){
        res.status(200).json({ message: 'Sign in successfully' });
      }
      else{
        res.status(401).json({ error: 'Invalid credentials' });
      } 
    }
    else {
      res.status(401).json({ error: 'Invalid credentials' });
    }
  } catch (err) {
    console.log(err);
  }
};

export const domainController = async (req, res) => {
}

const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

export const uploading = multer({ storage });

// Define the ImageController function
export const ImageController = async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No image file provided' });
  }
  res.json({ imageUrl: req.file.path });
};

export const getImageController = async (req, res) => {
  try {
    const template = await Template.find(); 
    console.log("Tem",template);
    res.status(200).json(template);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Server Error" });
  }
};

export default signupController;