import express from "express";
import { annotationController } from "../Controllers/annotationController.js";

const router = express.Router();

// POST route to add annotation to an image
router.post("/add", annotationController.addAnnotation);

// Route to get annotated images by status
router.get("/images/:status", annotationController.getAnnotatedImagesByStatus);

export default {
  route: router,
};
