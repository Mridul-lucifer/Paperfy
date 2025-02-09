const mongoose = require('mongoose');

const questionPaperScheme = new mongoose.Schema({
    OwnerId:  {
        type: String,
        required: true
    },
    TotalQuestion: {
        type: Number,
        required: false
    },
    Questions: [
        {
            Question : String,
            Options : [
                {
                    Option : Number,
                    Value : String
                }
            ],
            Answer : Number
        }
    ]
})
module.exports = mongoose.model('QuestionPaper', questionPaperScheme);