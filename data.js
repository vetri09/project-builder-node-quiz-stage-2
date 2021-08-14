// // Create a database called quiz and create the following collections
// use quiz
// db.createCollection('questions')
// db.createCollection('options')
// db.createCollection('answers')

// inserted 5 questions ...
db.questions.insert({
    question1: 'what color is apple?'
})
db.questions.insert([
    {question2: 'what color is apple?'},
    {question3: 'what color is apple?'},
    {question4: 'what color is apple?'}
])
db.questions.update(
    {question4: 'what color is apple?'},
    {question4: 'what color is watermelon?'}
)
db.questions.insert({
    question5: 'what color is pomegranate?'
})
// options insert
db.options.insert([
    {
        option1:'red',
        option2:'yellow',
        option3:'light green',
        option4:'green'
    },
    {
        option1:'red',
        option2:'yellow',
        option3:'light green',
        option4:'green'
    },
    {
        option1:'red',
        option2:'yellow',
        option3:'light green',
        option4:'green'
    },
    {
        option1:'red',
        option2:'yellow',
        option3:'light green',
        option4:'green'
    },
    {
        option1:'red',
        option2:'yellow',
        option3:'light green',
        option4:'green'
    }
])
// answers insert
db.answers.insert([
    {answer:1},
    {answer:2},
    {answer:3},
    {answer:4},
    {answer:1}
])
// display questions
db.questions.find({},{_id:0})
