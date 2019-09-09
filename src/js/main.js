console.log(`please work`)

/*  BUILD PHASE */

let quizElement = document.querySelector('.quiz')

quizData.forEach(function(question, i) { // happens 5 times
	console.log(question.prompt);

	let questionDiv = document.createElement('div')
	questionDiv.classList.add('question')

	questionDiv.innerHTML += i + '. ' + question.prompt + '<br>';

	question.options.forEach(function(option) { // happens 6 times (total of 30)
		console.log(option)

		questionDiv.innerHTML += '<input type="radio" value="' + option.name + '" name="question-' + i + '">' + option.choice + '<br>';
	})

	questionDiv.innerHTML += '<br><br><br>';

	quizElement.appendChild(questionDiv)

});

let startButton = document.querySelector('.start-button')
startButton.addEventListener('click', quizElement)

/* SHIT HAPPENING PHASE */

document.querySelector('.quiz .question').classList.add('active')
let currentQuestionIndex = 0

let goToNextQuestion = function(){
	console.log("NEXT")
	
	// take the active class off the one its on
	let oldQuestion = document.querySelector('.quiz .question.active')
	oldQuestion.classList.remove('active')

	// increase the question Index by 1
	currentQuestionIndex++


	if (currentQuestionIndex < quizData.length ) {

		console.log('show next question number', currentQuestionIndex)
	 
		// gets all of the questions
		let allQuestions = document.querySelectorAll('.quiz .question')
		// finds the next question in the array by using the current question index
		let nextQuestion = allQuestions[currentQuestionIndex]
		// add active class to the next question
		nextQuestion.classList.add('active')

	} else {

		console.log('go to answer page')
		countValues()
	}
}

let nextButton = document.querySelector('.next-button')
nextButton.addEventListener('click', goToNextQuestion)


/* RESULTS HAPPENING PHASE */

let countValues = function() {
	let firstAnswer = document.querySelector('input[type="radio"][name="question-0"]:checked').value;
	console.log('hey im checked', firstAnswer)
	answerTotals[firstAnswer]++

	let secondAnswer = document.querySelector('input[type="radio"][name="question-1"]:checked').value;
	console.log('hey im checked', secondAnswer)
	answerTotals[secondAnswer]++

	let thirdAnswer = document.querySelector('input[type="radio"][name="question-2"]:checked').value;
	console.log('hey im checked', thirdAnswer)
	answerTotals[thirdAnswer]++

	let fourthAnswer = document.querySelector('input[type="radio"][name="question-3"]:checked').value;
	console.log('hey im checked', fourthAnswer)
	answerTotals[fourthAnswer]++

	let fifthAnswer = document.querySelector('input[type="radio"][name="question-4"]:checked').value;
	console.log('hey im checked', fifthAnswer)
	answerTotals[fifthAnswer]++

	console.log(answerTotals)

	if (answerTotals.leslie < answerTotals.leslie ||
		answerTotals.leslie < answerTotals.ron || 
		answerTotals.leslie < answerTotals.tom || 
		answerTotals.leslie < answerTotals.ann || 
		answerTotals.leslie < answerTotals.andy || 
		answerTotals.leslie < answerTotals.april ) {
		// leslie loses
		delete answerTotals.leslie
	}
	if (answerTotals.ron < answerTotals.leslie ||
		answerTotals.ron < answerTotals.ron || 
		answerTotals.ron < answerTotals.tom || 
		answerTotals.ron < answerTotals.ann || 
		answerTotals.ron < answerTotals.andy || 
		answerTotals.ron < answerTotals.april ) {
		// ron loses
		delete answerTotals.ron
	}

	if (answerTotals.tom < answerTotals.leslie ||
		answerTotals.tom < answerTotals.ron || 
		answerTotals.tom < answerTotals.tom || 
		answerTotals.tom < answerTotals.ann || 
		answerTotals.tom < answerTotals.andy || 
		answerTotals.tom < answerTotals.april ) {
		// tom loses
		delete answerTotals.tom
	}

	if (answerTotals.ann < answerTotals.leslie ||
		answerTotals.ann < answerTotals.ron || 
		answerTotals.ann < answerTotals.tom || 
		answerTotals.ann < answerTotals.ann || 
		answerTotals.ann < answerTotals.andy || 
		answerTotals.ann < answerTotals.april ) {
		// ann loses
		delete answerTotals.ann
	}

	if (answerTotals.andy < answerTotals.leslie ||
		answerTotals.andy < answerTotals.ron || 
		answerTotals.andy < answerTotals.tom || 
		answerTotals.andy < answerTotals.ann || 
		answerTotals.andy < answerTotals.andy || 
		answerTotals.andy < answerTotals.april ) {
		// andy loses
		delete answerTotals.andy
	}

	if (answerTotals.april < answerTotals.leslie ||
		answerTotals.april < answerTotals.ron || 
		answerTotals.april < answerTotals.tom || 
		answerTotals.april < answerTotals.ann || 
		answerTotals.april < answerTotals.andy || 
		answerTotals.april < answerTotals.april ) {
		// april loses
		delete answerTotals.april
	}

	let winnerName = Object.keys( answerTotals )[0]

	console.log( 'the winner is', winnerName )


	/*

	img/andy.jpg
	img/ann.jpg
	img/april.jpg
	img/leslie.jpg
	img/ron.jpg
	img/tom.jpg


	*/
	let img = document.createElement("img");
    img.src = "dist/img/"+winnerName+".jpg";
    img.style.height = '100px';
    img.style.width = '200px';

    // This next line will just add it to the <body> tag
    document.body.appendChild(img);
}

let resultsButton = document.querySelector('.results-button')
resultsButton.addEventListener('click', countValues)

// assign a value to the anwser
let answerTotals = {
	leslie: 0,
	ron: 0,
	tom: 0,
	ann: 0,
	andy: 0,
	april: 0,
}









