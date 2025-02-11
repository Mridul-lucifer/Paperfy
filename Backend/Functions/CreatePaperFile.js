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
        res.status(200).json({
            Link : 'https://localhost:5173/paper'+Paper._id,
            msg : "Succuessfull Submited"
        });
}

const PaperFind = async function (req, res) {
    const id = req.params.id; 
    try {
      const Paper = await QuestionPaper.findById(id); 
      if (!Paper) {
        return res.status(404).json({ message: 'Paper not found' }); 
      }
      res.status(200).json({
        Paper: Paper, 
      });
    } catch (error) {
      console.error(error); 
      res.status(500).json({ message: 'An error occurred while fetching the paper' }); 
    }
  };
  

module.exports = {createPaperFunction,PaperFind}  