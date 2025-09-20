const Question = require("../models/Question.js");
const Session = require("../models/Session.js");

// @route POST /api/questions/add
// @access Private
exports.addQuestionToSession = async (req, res) => {
    console.log("✅ Reached addQuestionToSession route");

    try {
        const { sessionId, questions } = req.body;

        if (!sessionId || !questions || !Array.isArray(questions)) {
            return res.status(400).json({ message: "Invalid input data" });
        }

        const session = await Session.findById(sessionId);

        if (!session) {
            return res.status(404).json({ message: "Session not found" });
        }

        // Create new questions
        const createdQuestions = await Question.insertMany(
            questions.map((q) => ({
                sessionId: sessionId, // ✅ correct
                question: q.question,
                answer: q.answer
            }))
        );

        // Update session to include new question IDs
        session.questions.push(...createdQuestions.map((q) => q._id));
        await session.save();

        res.status(201).json(createdQuestions);
    } catch (error) {
        console.error("❌ Error in addQuestionToSession:", error);
        res.status(500).json({ message: "Server Error" });
    }
};

// @desc Pin or unpin a question
// @route POST /api/questions/:id/pin
exports.togglePinQuestion =  async(req, res) => {
    try{
        const question = await Question.findById(req.params.id);

        if(!question){
            return res.status(404).json({ success: false, message: "Question not found"});
        }

        questionisPinned = !question.isPinned;
        await question.save();

        res.status(200).json({ success: true, question });
    }catch(error){
        res.status(500).json({message: "Server Error"});
    }
};

// @desc Pin or unpin a question
// @route POST /api/questions/:id/pin
// @access Private
exports.updateQuestionNote = async (req, res) => {
    try{
        const { note } = req.body;
        const question = await Question.findById(req.params.id);
        
        if(!question){
            return res.status(404).json({ success: false, message: "Question Not Found"});
        }

        question.note = note || "";
        await question.save();

        res.status(200).json({ success : true, question });
    }
    catch(error){
        res.status(500).json({ message: "Server Error" });
    }
};