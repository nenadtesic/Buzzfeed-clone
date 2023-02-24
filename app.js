const questionDisplay = document.querySelector('#questions')
const answerDisplay = document.querySelector('#answer')

const questions = [
    {
        id: 0,
        text: "Pick a vacation destination",
        answers: [
            {
                text: "New York",
                image: "https://images.unsplash.com/photo-1500916434205-0c77489c6cf7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
                alt: "Photo of New York",
                credit: "Robert Bye"
            },
            {
                text: "Austin",
                image: "https://images.unsplash.com/photo-1531218150217-54595bc2b934?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1228&q=80",
                alt: "The Austin skyline",
                credit: "Carlos Alfonso"
            },
            {
                text: "Portland",
                image: "https://images.unsplash.com/photo-1530891671629-3a053324e4f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80",
                alt: "The view from the Pittock Mansion in Portland, Oregon",
                credit: "Umit Aslan"
            },
            {
                text: "New Orleans",
                image: "https://images.unsplash.com/photo-1572491769738-23bcba94e2a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
                alt: "New Orleans, LA",
                credit: "Ben Dutton"
            }
        ]
    },
    {
        id: 1,
        text: "Pick some food",
        answers: [
            {
                text: "Pizza",
                image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
                alt: "Pepperoni Pizza",
                credit: "Fernando Andrade"
            },
            {
                text: "Sandwich",
                image: "https://images.unsplash.com/photo-1559466273-d95e72debaf8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",
                alt: "Homemade sandwich with sweet chilli turkey and salad.",
                credit: "Monika Grabkowska"
            },
            {
                text: "Pasta",
                image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
                alt: "Pasta in tomato sause",
                credit: "Ben Lei"
            },
            {
                text: "Hamburger",
                image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=699&q=80",
                alt: "burger",
                credit: "amirali mirhashemian"
            }
        ]
    },
    {
        id: 2,
        text: "Pick a Home",
        answers: [
            {
                text: "Tradiotional",
                image: "https://images.unsplash.com/photo-1562312902-76fc8c1e0e55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
                alt: "Rural home",
                credit: "Rural Explorer"
            },
            {
                text: "Modern",
                image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
                alt: "Modern home",
                credit: "Jaroslav Aleksenko"
            },
            {
                text: "House",
                image: "https://images.unsplash.com/photo-1586175554766-77513ac248d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
                alt: "House in Divljak, BiH",
                credit: "A T"
            },
            {
                text: "Cabin",
                image: "https://images.unsplash.com/photo-1519302959554-a75be0afc82a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1184&q=80",
                alt: "In Norway",
                credit: "Vidar Nordli-Mathisen"
            }
        ]
    }
]

const answers = [
    {
        combinations: ["New York", "Pizza", "Traditional"],
        text: "Blue Cheese",
        image: "https://images.unsplash.com/photo-1452195100486-9cc805987862?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
        alt: "blue cheese"
    },
    {
        combinations: ["Austin", "Pasta", "Modern"],
        text: "Cheddar",
        image: "https://images.unsplash.com/photo-1618164435735-413d3b066c9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        alt: "cheddar"
    },
    {
        combinations: ["Portland", "Sandwich", "House"],
        text: "Feta Cheese",
        image: "https://images.unsplash.com/photo-1559561853-08451507cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=957&q=80",
        alt: "feta cheese"
    },
    {
        combinations: ["New Orleans", "Hamburger", "Cabin"],
        text: "Halloumi",
        image: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80",
        alt: "halloumi"
    }
]
const unansweredQuestions = []
const chosenAnswers = []

const populateQuestions = () => {
    questions.forEach(question => {
        const titleBlock = document.createElement('div')
        titleBlock.id = question.id
        titleBlock.classList.add('title-block')
        const titleHeading = document.createElement('h2')
        titleHeading.textContent = question.text
        titleBlock.append(titleHeading)

        questionDisplay.append(titleBlock)

        const answersBlock = document.createElement('div')
        answersBlock.id = question.id + "-questions"
        answersBlock.classList.add('answer-options')


        unansweredQuestions.push(question.id)

        question.answers.forEach(answer => {
            const answerBlock = document.createElement('div')
            answerBlock.classList.add('answer-block')
            answerBlock.addEventListener('click', () => handleClick(question.id, answer.text))
            
            const answerImage = document.createElement('img')
            answerImage.setAttribute('src', answer.image)
            answerImage.setAttribute('alt', answer.alt)

            const answerTitle = document.createElement('h3')
            answerTitle.textContent = answer.text
            
            const answerInfo = document.createElement('p')
            const imageLink = document.createElement('a')
            imageLink.setAttribute('href', answer.credit)
            imageLink.textContent = answer.credit
            const sourceLink = document.createElement('a')
            sourceLink.textContent = "Unsplash"
            sourceLink.setAttribute('src', 'https://www.unsplash.com')
            answerInfo.append(imageLink, ' to ', sourceLink)

            answerBlock.append(answerImage, answerTitle, answerInfo)
            answersBlock.append(answerBlock)
        })

        questionDisplay.append(answersBlock)
    })
}

populateQuestions()

const handleClick = (questionId, chosenAnswer) => {
    if (unansweredQuestions.includes(questionId))
    chosenAnswers.push(chosenAnswer)
    const itemToRemove = unansweredQuestions.indexOf(questionId)
    
    if (itemToRemove > -1) {
        unansweredQuestions.splice(itemToRemove, 1)
    }

    // disableQuestionBlock(questionId, chosenAnswer)

    const lowestQuestionId = Math.min(...unansweredQuestions) 
    location.href = "#" + lowestQuestionId

    if (!unansweredQuestions.length) {
        //scroll to answer div
        // showAnswer()
    }
}

const showAnswer = () => {
    let result
    answers.forEach(answer => {
        if (
            chosenAnswers.includes(answer.combination[0]) +
            chosenAnswers.includes(answer.combination[1]) +
            chosenAnswers.includes(answer.combination[2]) 
        ) {
            result = answer
        } else {
            //first answer object is default
            result = answers[0]
        }
    })

    console.log(result)

    const answerBlock = document.createElement('div')
    answerBlock.classList.add('result-block')
    const answerTitle = document.createElement('h3')
    answerTitle.textContent = result.text
    const answerImage = document.createElement('img')
    answerImage.setAttribute('src', result.image)
    answerImage.setAttribute('alt', result.alt)

    answerBlock.append(answerTitle, answerImage)
    answerDisplay.append(answerBlock)
}