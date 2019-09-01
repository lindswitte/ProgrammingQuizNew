console.log(`please work`)

// for (var i = 0; i < 5; i++) {
// 	question = question + i;
// 	// console.log(i)
// 	console.log(quiz[i])
// }


/*  BUILD PHASE */

let quizElement = document.querySelector('.quiz')

quizData.forEach(function(question) { // happens 5 times
	console.log(question.prompt);

	let questionDiv = document.createElement('div')
	questionDiv.classList.add('question')

	questionDiv.innerHTML += question.prompt + '<br>';

	question.options.forEach(function(option) { // happens 6 times (total of 30)
		console.log(option)

		questionDiv.innerHTML += option.choice + '<br>';
	})

	questionDiv.innerHTML += '<br><br><br>';

	quizElement.appendChild(questionDiv)

});


/* SHIT HAPPENING PHASE */

let questionTrackingNumeralDevice = 0
document.querySelector('.quiz .question').classList.add('active')


let goToNextQuestion = function(){
	console.log("NEXT")
	
	// take the active class off the one its on
	let oldQuestion = document.querySelector('.quiz .question.active')
	oldQuestion.classList.remove('active')

	// add active class to the next question
	questionTrackingNumeralDevice++

	let newQuestion = document.querySelectorAll('.quiz .question')

	 .question.classList.add('newQuestion');

}

let nextButton = document.querySelector('.next-button')
nextButton.addEventListener('click', goToNextQuestion)












