"use strict";console.log("please work");var quizElement=document.querySelector(".quiz");quizData.forEach(function(e){console.log(e.prompt);var t=document.createElement("div");t.classList.add("question"),t.innerHTML+=e.prompt+"<br>",e.options.forEach(function(e){console.log(e),t.innerHTML+=e.choice+"<br>"}),t.innerHTML+="<br><br><br>",quizElement.appendChild(t)});var questionTrackingNumeralDevice=0;document.querySelector(".quiz .question").classList.add("active");var goToNextQuestion=function(){console.log("NEXT"),document.querySelector(".quiz .question.active").classList.remove("active"),questionTrackingNumeralDevice++,document.querySelectorAll(".quiz .question")[questionTrackingNumeralDevice]},nextButton=document.querySelector(".next-button");nextButton.addEventListener("click",goToNextQuestion);
//# sourceMappingURL=main.js.map