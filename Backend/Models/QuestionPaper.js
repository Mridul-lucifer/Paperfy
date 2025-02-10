const mongoose = require('mongoose');

const questionPaperScheme = new mongoose.Schema({
    ownerId:  {
        type: Object,
        required: true
    },
    totalQuestion: {
        type: Number,
        required: false
    },
    questions: [
        {
            question : String,
            options : [
                {
                    option : Number,
                    value : String
                }
            ],
            answer : Number
        }
    ]
})
module.exports = mongoose.model('QuestionPaper', questionPaperScheme);