const express = require("express");
const { togglePinQuestion, updateQuestionNote , addQuestionToSession } = require("../controllers/questionController.js");
const { protect } = require("../middlewares/authMiddleware.js");

const router = express.Router();

router.post('/add', protect, addQuestionToSession);
router.post('/:id/pin', protect, togglePinQuestion);
router.post('/:id/note', protect, updateQuestionNote);

module.exports = router;