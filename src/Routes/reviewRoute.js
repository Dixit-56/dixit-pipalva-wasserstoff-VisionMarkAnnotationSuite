import express from "express";
import { reviewController } from "../Controllers/reviewController.js";
const router = express.Router();

// Route for reviewing images
router.get("/", reviewController.reviewImages);

// Route for approving an image by ID
router.put("/approve/:imageId", reviewController.approveImage);

// Route for rejecting an image by ID
router.put("/reject/:imageId", reviewController.rejectImage);

export default {
  route: router,
};
