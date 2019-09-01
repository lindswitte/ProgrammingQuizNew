console.log(`please work`)

/* [QUIZ ENGINE] */
let quiz = {
  draw : function () {
  // quiz.draw() : draw the quiz

    // Fetch the HTML quiz wrapper
    let wrapper = document.getElementById("quiz-wrap");

    // Loop through all the questions
    // Create all the necessary HTML elements
    for (let index in questions) {
      let number = parseInt(index) + 1; // The current question number
      let qwrap = document.createElement("div"); // A div wrapper to hold this question and options
      qwrap.classList.add("question"); // CSS class, for cosmetics

      // The question - <h1> header
      let question = document.createElement("h1");
      question.innerHTML = number + ") " + questions[index]['q'];
      qwrap.appendChild(question);

      // The options - <input> radio buttons and <label>
      for (let oindex in questions[index]['o']) {
        // The <label> tag
        let label = document.createElement("label");
        qwrap.appendChild(label);

        // The <option> tag
        let option = document.createElement("input");
        option.type = "radio";
        option.value = oindex;
        option.required = true;
        option.classList.add("oquiz"); // Will explain this later in function submit below

        // Remember that a radio button group must share the same name
        option.name = "quiz-" + number;
        label.appendChild(option);

        // Add the option text
        let otext = document.createTextNode(questions[index]['o'][oindex]);
        label.appendChild(otext);
      }

      // Finally, add this question to the main HTML quiz wrapper
      wrapper.appendChild(qwrap);
    }

    // Attach submit button + event handler to the quiz wrapper
    let submitbutton = document.createElement("input");
    submitbutton.type = "submit";
    wrapper.appendChild(submitbutton);
    wrapper.addEventListener("submit", quiz.submit);
  },

  submit : function (evt) {
  // quiz.submit() : Handle the calculations when the user submits to quiz

    // Stop the form from submitting
    evt.preventDefault();
    evt.stopPropagation();

    // Remember that we added an "oquiz" class to all the options?
    // We can easily get all the selected options this way
    let selected = document.querySelectorAll(".oquiz:checked");

    // Get the score
    let score = 0;
    for (let index in questions) {
      if (selected[index].value == questions[index]['a']) {
        score++;
      }
    }

    // We can calculate the score now
    let total = selected.length;
    let percent = score / total ;

    // Update and show the score
    // Instead of creating elements, we can also directly alter the inner HTML
    let html = "<h1>";
    if (percent>=0.7) {
      html += "WELL DONE!";
    } else if (percent>=0.4) {
      html += "NOT BAD!";
    } else {
      html += "TRY HARDER!";
    }
    html += "</h1>";
    html += "<div>You scored " + score + " out of " + total + ".</div>";
    document.getElementById("quiz-wrap").innerHTML = html;
  }
};

/* [INIT] */
window.addEventListener("load", quiz.draw);