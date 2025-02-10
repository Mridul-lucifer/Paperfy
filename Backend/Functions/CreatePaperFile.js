const QuestionPaper = require('../Models/QuestionPaper');
const createPaperFunction = async function (req,res) {
    const { data} = req.body;
    const questions = data.questions;
    const Paper = new QuestionPaper({
        ownerId : req.userId,
        totalQuestion : questions.length,
        questions : questions
    })
        await Paper.save();
        res.status(200).json(Paper);
}

module.exports = {createPaperFunction}  