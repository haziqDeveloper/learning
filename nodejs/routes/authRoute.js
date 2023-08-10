import express from 'express';
import signupController from '../controllers/authController.js';
import { loginController, domainController, ImageController, getImageController } from '../controllers/authController.js';
import layoutController from '../controllers/layoutController.js';
import { upload } from '../controllers/layoutController.js';
import { uploading } from '../controllers/authController.js';
import registerSchema from '../models/registerSchema.js';
import layoutSchema from '../models/layoutSchema.js';
import TemplateModel from '../models/templateModelSchema.js';

const app = express();

const router = express.Router();

router.use(express.urlencoded({ extended: false }));
router.use(express.json());
router.get('/', (req, res)=>{
    res.send('Home Page')
})

router.post('/register', signupController);
router.post('/login', loginController);
router.post('/api/v1/auth/checkDomain', domainController);
router.post('/image', uploading.single("image"), ImageController);
router.get('/images', getImageController);
// router.post('/layouts', upload.single("profilePhoto"), layoutController);

router.get("/users", async (req, res) => {
  try {
    const users = await registerSchema.find(); 
    res.status(200).json(users);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Server Error" });
  }
});

router.get('/users/:userId', async (req, res) => {
  const userId = req.params.userId;

  try {
    if (!userId) {
      return res.status(400).json({ error: "userId is required" });
    }
    const user = await registerSchema.findById(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json(user);
  } catch (err) {
    console.error("Error finding user:", err);
    res.status(500).json({ error: "Server Error" });
  }
});

// router.get("/allLayouts", async (req, res) => {
//   try {
//     const layouts = await layoutSchema.find(); 
//     res.status(200).json(layouts);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ error: "Server Error" });
//   }
// });

// router.get('/allLayouts/:layout_id', async (req, res) => {
  

//   try {
//     const layout_id = req.params.layout_id;
//     if (!layout_id) {
//       return res.status(400).json({ error: "layout is required" });
//     }
//     const layout_id_find = await layoutSchema.findById(layout_id);
//     if (!layout_id_find) {
//       return res.status(404).json({ error: "layout not found" });
//     }

//     res.status(200).json(layout_id_find);
//   } catch (err) {
//     console.error("Error finding layout:", err);
//     res.status(500).json({ error: "Server Error" });
//   }
// });

const storage = multer.diskStorage({
  destination: './uploads',
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

app.post('/templateUpdate', upload.single('image'), async (req, res) => {
  try {
    const { name, phone, email, address,description,chooseColor } = req.body;
    const image = req.file ? req.file.filename : '';
    const imageUpload = req.file ? req.file.filename : '';
    const imageUploadBackgroud = req.file ? req.file.filename : '';

    const templateModel = new TemplateModel({
      name,
      phone,
      email, 
      image,
      imageUpload,
      imageUploadBackgroud,
      address,
      description,
      chooseColor
    });

    await templateModel.save();

    res.status(201).json({ message: 'Template saved successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});




export default router;