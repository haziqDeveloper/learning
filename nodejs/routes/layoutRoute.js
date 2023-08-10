import express from 'express';
import signupController from '../controllers/authController.js';
import { loginController } from '../controllers/authController.js';
import layoutController from '../controllers/layoutController.js';
import { upload } from '../controllers/layoutController.js';
import registerSchema from '../models/registerSchema.js';
import layoutSchema from '../models/layoutSchema.js';

const router = express.Router();
router.use(express.json());
router.post('/layouts', upload.single("profilePhoto"), layoutController);


router.get("/allLayouts", async (req, res) => {
  try {
    const layouts = await layoutSchema.find(); 
    res.status(200).json(layouts);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Server Error" });
  }
});

router.get('/allLayouts/:layout_id', async (req, res) => {
  

  try {
    const layout_id = req.params.layout_id;
    if (!layout_id) {
      return res.status(400).json({ error: "layout is required" });
    }
    const layout_id_find = await layoutSchema.findById(layout_id);
    if (!layout_id_find) {
      return res.status(404).json({ error: "layout not found" });
    }

    res.status(200).json(layout_id_find);
  } catch (err) {
    console.error("Error finding layout:", err);
    res.status(500).json({ error: "Server Error" });
  }
});



export default router;