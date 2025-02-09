const QuestionPaper = require('../Models/QuestionPaper');
const createPaperFunction = async function (req,res) {
     const { questions} = req.body;
        const Paper = new QuestionPaper({
            OwnerId : 1,
            TotalQuestion : questions.length,
            Questions : questions
        })
        await Paper.save();
        res.status(200).json(Paper);
}

module.exports = {createPaperFunction}  