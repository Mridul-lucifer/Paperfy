import React from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import axios from 'axios';

const CreatingExam = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      questions: [],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'questions',
  });
  const onSubmit = async (data) => {
    const payload = {
      questions: data.questions.map((q) => ({
        question: q.question,
        options: q.options.map((opt, index) => ({
          option: index + 1,
          value: opt.value,
        })),
        answer: Number(q.answer),
      })),
    };

    try {
     const response = await axios.post('http://localhost:5000/CreatePaper', payload);
      alert('Exam successfully created!');
    } catch (err) {
      console.error('Error submitting exam:', err);
    }
  };

  return (
    <div className="p-5">
      <h2 className="text-xl font-bold">CREATE AN EXAM</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {fields.map((item, questionIndex) => (
          <div key={item.id} className="mt-4 border p-3 rounded-md">
            <label className="font-bold">QUESTION {questionIndex + 1}:</label>
            <input
              type="text"
              placeholder="Enter question"
              {...register(`questions.${questionIndex}.question`, {
                required: 'Question is required',
              })}
              className="border rounded px-2 py-1 w-full mt-2"
            />
            {errors?.questions?.[questionIndex]?.question && (
              <p className="text-red-500">
                {errors.questions[questionIndex].question.message}
              </p>
            )}

            {/* Render 4 option inputs */}
            <div className="grid grid-cols-2 gap-2 mt-2">
              {Array.from({ length: 4 }).map((_, optionIndex) => (
                <div key={optionIndex}>
                  <label className="font-bold">OPTION {optionIndex + 1}:</label>
                  <input
                    type="text"
                    placeholder={`Enter option ${optionIndex + 1}`}
                    {...register(
                      `questions.${questionIndex}.options.${optionIndex}.value`,
                      {
                        required: 'Option is required',
                      }
                    )}
                    className="border rounded px-2 py-1 w-full"
                  />
                  {errors?.questions?.[questionIndex]?.options?.[optionIndex]?.value && (
                    <p className="text-red-500">
                      {errors.questions[questionIndex].options[optionIndex].value.message}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* Answer input */}
            <div className="mt-2">
              <label className="font-bold">ANSWER (1 TO 4):</label>
              <input
                type="number"
                min="1"
                max="4"
                placeholder="Enter correct option number"
                {...register(`questions.${questionIndex}.answer`, {
                  required: 'Answer is required',
                  min: {
                    value: 1,
                    message: 'Answer must be between 1 and 4',
                  },
                  max: {
                    value: 4,
                    message: 'Answer must be between 1 and 4',
                  },
                })}
                className="border rounded px-2 py-1 w-full"
              />
              {errors?.questions?.[questionIndex]?.answer && (
                <p className="text-red-500">
                  {errors.questions[questionIndex].answer.message}
                </p>
              )}
            </div>

            {/* Remove question button */}
            <button
              type="button"
              onClick={() => remove(questionIndex)}
              className="bg-red-500 text-white px-3 py-1 rounded mt-3 hover:bg-red-600"
            >
              Remove Question
            </button>
          </div>
        ))}

        {/* Add new question button */}
        <button
          type="button"
          onClick={() =>
            append({
              question: '',
              options: Array.from({ length: 4 }).map(() => ({
                option: 0,
                value: '',
              })),
              answer: '',
            })
          }
          className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Add Question
        </button>

        {/* Submit button */}
        <button type="submit" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 ml-2">
          Submit Exam
        </button>
      </form>
    </div>
  );
};

export default CreatingExam;
