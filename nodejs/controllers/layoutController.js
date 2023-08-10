import express from "express";
import layoutSchema from "../models/layoutSchema.js";
import multer from "multer";
import { hashPassword } from "../helpers/authHelper.js";

const router = express.Router(); // Use the Router from Express

// Multer setup
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads"); // Destination folder for image uploads
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + file.originalname;
    cb(null, uniqueSuffix); // Set a unique filename for each uploaded image
  },
});

// Custom file filter to allow only images
const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image/")) {
    cb(null, true); // Accept the file if it's an image
  } else {
    cb(new Error("Only images are allowed!"), false); // Reject the file if it's not an image
  }
};

// Multer configuration with the custom file filter and size limit (2MB)
export const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 2 * 1024 * 1024, // Limit file size to 2MB (2 * 1024 * 1024 bytes)
  },
});
export const layoutController = async (req, res) => {
  try {
    const { profilePhoto, profilePhotoPath, layoutName, profileLink1, profileLink2, profileLink3, socialMedia } = req.body;

    // if (!layoutName) {
    //   return res.status(422).json({ error: "Empty Fields" });
    // }

    const newLayout = new layoutSchema({
      layoutName,
      profileLink1,
      profileLink2,
      profileLink3,
      socialMedia,
      // profilePhoto: req.file.filename,
      // profilePhotoPath: req.file.path,
    });

    const savedLayout = await newLayout.save();
    if (savedLayout) {
      res.status(201).json({ message: 'layout successfully' });
    } else {
      res.status(500).json({ error: 'layout failed' });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Server Error" });
  }
};

export default layoutController;
