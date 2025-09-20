const Session = require("../models/Session.js");
const Question = require("../models/Question.js");

//@desc Create a new session and linked questions
//@route POST /api/sessions/create
//@access Private

exports.createSession = async(req, res) => {
    try{
        const {  role , experience , topicsToFocus , description , questions } = req.body;
        const userId = req.user._id; //Assuming you have a middleware setting req.user
        console.log("Received:", req.body);
        const session = await Session.create({
            user : userId,
            role,
            experience,
            topicsToFocus,
            description,
        });

        const questionDocs = await Promise.all(
            questions.map(async (q) => {
                const question = await Question.create({
                    session : session._id,
                    question : q.question,
                    answer: q.answer
                });
                return question._id;
            })
        );

        session.questions = questionDocs;
        await session.save();

        res.status(201).json( { success: true, session } );

    }catch(error){
        res.status(500).json({ success: false, message: "Server Error" });
    }
};

// @desc Get all sessions for  the logged-in user
// @route GET api/sessions/my-sessions
// @access Private
exports.getMySessions = async(req, res) => {
    try{
        const sessions = await Session.find({ user: req.user._id })
        .sort({ createdAt: -1 })
        .populate({ path: "questions", model: "Question" });
        res.status(200).json(sessions);
    }catch(error){
        console.error("getMySessions error:", error);
        res.status(500).json({ success: false, message: "Server Error" });
    }
}

// @desc Get a session by ID with populated questions 
// @route GET /api/sessions/:id
// @access Private
exports.getSessionById = async(req, res) => {
    try{
        const session = await Session.findById(req.params.id)
        .populate({
            path: "questions",
            model : "Question",
            options: { sort : { isPinned: -1, createdAt: 1}}
        })
        .exec();

        if(!session){
            return res
            .status(404)
            .json({success: false, message : "Session not found"});
        }

        res.status(200).json({ success: true, session});
        
    }catch(error){
        console.error("getSessionById error:", error);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};

// @route Delete a session and it`s questions
// @route DELETE /api/sessions/:id
// @access Private
exports.deleteSession = async (req, res) => {
    try{
        const session = await Session.findById(req.params.id);

        if(!session){
            return res.status(404).json({ message: "Session not found" });
        }

        //Check whether the logged-in user owns this session or not
        if(session.user.toString() !== req.user.id){
            return res.status(401).json({ message: "Not authorized to delete this session "});
        } 
            //First delete all questions linked to this  session
        await Question.deleteMany({ session : session._id });

            //Then, delete the session 
        await session.deleteOne();

            res.status(200).json({ message: "Session delete successsfully" });

    }catch(error){
        res.status(500).json({ success: false, message: "Server Error" });
    }
};

// module.exports = {};