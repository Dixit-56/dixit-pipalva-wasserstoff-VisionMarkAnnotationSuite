import express from "express";
import { imageController } from "../Controllers/imageController.js";
import multer from "multer";
const router = express.Router();
const upload = multer({ dest: "src/uploads/" });

// Route for uploading images
router.post("/upload", upload.array("images"), imageController.uploadImage);

// Route for getting all images
router.get("/", imageController.getImages);

// Route for getting a single image by ID
router.get("/:id", imageController.getImageById);

// Route for deleting an image by ID
router.delete("/:id", imageController.deleteImageById);

export default {
  route: router,
};
