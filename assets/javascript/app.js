
$( document ).ready(function() {
$("#wrong-answer-text-box").hide();

var unanswered = 0;
var countDownInterval=null;

// Create a timer
function timer()
{
	var counter = 20;
	$("#time-box").html(counter);
	countDownInterval = setInterval(function() 
	{

		counter--;
		if (counter >= 0) 
    	{
      		$("#time-box").html(counter);
    	}

		if (counter === 0) 
		{
        	clearInterval(countDownInterval);
        	answerHelper("djhfsdla", questions[index-1]);
        	unanswered++;

		}
    
	}, 1000);
}

// Declare Global Variables

var wins = 0;
var loss = 0;
var count = 0;


	// Create a start function to begin game on click
	function startGame(){
		// Start button for user to click
		$("#button1").click(function(){
			clearInterval(countDownInterval);
			index = 0;

			count++;

			// Hide button after click
			$(this).hide();	

			// Generates new question on click
			newQuestion();
			// Start Timer
			
			
		});
	}
	// Call startGame function to get everything started on click
	startGame();

	// Create constructor object with these 8 parameters so the question objects(q1 - q8) can access these properties
	function Trivia(question, choices, answer, image, wrongAnswer)
	{

		this.questionTitle = question;
		this.choices = choices;
		this.correctAnswer = answer;
		this.correctImage= image;
		// Text that shows when answer was incorrect
		this.wrongAnswerText = wrongAnswer;
	}

	// Create new object for each question
	// Note the array of choices inside the object
	var q1 = new Trivia("What year was nintendo founded?", ["1950", "1889", "1982", "1970"], "1889", "<img src='assets/images/mario.png'/>", "The correct answer was 1889.");
	var q2 = new Trivia("What was the first Pokemon game released in Japan?", ["Red", "Blue", "Yellow", "Green"], "Green", "<img src='assets/images/pikachu.png'/>", "The correct answer was Green.");
	var q3 = new Trivia("Which of these titles was Luigi's first game?", ["Mario 64", "Luigi's Dream Castle", "Luigi and Peach", "Luigi's Mansion"], "Luigi's Mansion", "<img src='assets/images/luigi.png'/>", "The correct answer was Luigi's Mansion.");
	var q4 = new Trivia("What color did Miyamoto originally want Kirby to be?", ["Red", "White", "Yellow", "Pink"], "Yellow", "<img src='assets/images/kirby.png'/>", "The correct answer was Yellow.");
	var q5 = new Trivia("Which of these characters didn't speak until Super Mario Sunshine?", ["Yoshi", "Toad", "Mario", "Bowser"], "Bowser", "<img src='assets/images/bowser.png'/>", "The correct answer was Bowser.");
	var q6 = new Trivia("Which of these characters was the first villain in Mario?", ["Bowser", "Yoshi", "Donkey Kong", "Ganondorf"], "Donkey Kong", "<img src='assets/images/donkey-kong.png'/>", "The correct answer was Donkey Kong.");
	var q7 = new Trivia("Which of these titles was released on the Nintendo Gamecube for The Legend of Zelda?", ["Majora's Mask", "Ocarina of Time", "Wind Waker", "A Link to the Past"], "Wind Waker", "<img src='assets/images/toon-link.png'/>", "The correct answer was Wind Waker.");
	var q8 = new Trivia("The character Samus is a ?", ["Man", "Alien", "Unknown", "Woman"], "Woman", "<img src='assets/images/samus.png'/>", "The correct answer was Woman.");

	// create an array of questions
	var questions = [q1, q2, q3, q4, q5, q6, q7, q8];

	// declare variable to reference the index of the questions in the array
	var index = 0;


	// Create newQuestion function that will choose the question to display 
	function newQuestion()
	{
		timer();
		if(index >= questions.length)
		{
					
			
			endGame();
			
		}
		else
		{
			
			$("#correct-question-box").html(questions[index].questionTitle);

						
						var question = questions[index];
						console.log("index: " + index);
						var choicesHtml = $(".choices");
						for(var i = 0; i < choicesHtml.length; i++)
						{
							// Updates the choices to the HTML page
							var choiceHTML = $(choicesHtml[i]);
							var selection = questions[index].choices[i];
							$(choiceHTML).html(selection);

							//This code below did not work..
							//$(choiceHTML).html(selection);

							// choiceHTML.off("click");
							// choiceHTML.on("click", function()
							// {
							// 	// count++;
							// 	answerHelper(selection, question);
								
							// 	clearInterval(countDownInterval);
							// });
						}



							// Turns click off
							$(".choices").off("click");


							$("#choice-one-box.choices").on("click", function()
							{
								// count++;
								var userSelection = questions[index-1].choices[0];
								answerHelper(userSelection, question);
								
								clearInterval(countDownInterval);
								
							});

							$("#choice-two-box.choices").on("click", function()
							{
								// count++;
								var userSelection = questions[index-1].choices[1];
								answerHelper(userSelection, question);
								
								clearInterval(countDownInterval);
								
							});

							$("#choice-three-box.choices").on("click", function()
							{
								// count++;
								var userSelection = questions[index-1].choices[2];
								answerHelper(userSelection, question);
								
								clearInterval(countDownInterval);
								
							});

							$("#choice-four-box.choices").on("click", function()
							{
								// count++;
								var userSelection = questions[index-1].choices[3];
								answerHelper(userSelection, question);
								
								clearInterval(countDownInterval);
								
							});
			index++;
		}
			
	}

	function answerHelper(userSelection, question)
	{
		    if(userSelection.includes(question.correctAnswer))
		    {
		    	
		    	$("#correct-question-box").html("Correct!");
		    	$(".question-choices-box").hide();
		    	$("#generate-image-box").html(question.correctImage);
		    	$("#generate-image-box").show();
		    	wins++;
		    	
		    		setTimeout(function()
		    	    {
		    	    	$("#generate-image-box").hide();
		    	    	$(".question-choices-box").show();
		    	    	newQuestion();
				  	}, 3500);	

		    }
		    else
		    {
		    	// update HTML
		    	$("#correct-question-box").html("Incorrect..sorry.");
		    	$(".question-choices-box").hide();
		    	$("#generate-image-box").html(question.correctImage);
		    	$("#wrong-answer-text-box").html(question.wrongAnswerText);
		    	$("#generate-image-box").show();
    	    	$("#wrong-answer-text-box").show();
		    	loss++;
		    	
		    		setTimeout(function()
		    	    {
		    	    	$("#generate-image-box").hide();
		    	    	$("#wrong-answer-text-box").hide();
		    	    	$(".question-choices-box").show();
		    	    	newQuestion();
				  	}, 3500);

		    }
		    count++;
		    console.log("Wins: " + wins);
		    console.log("Loss: " + loss);
		    console.log("Count: " + count);

		    
	}
	
	console.log("Count: " + count);


function endGame(){
		$("#correct-question-box").html("All Done, Here's How You Did!");
		$("#button1").show();
		$("#choice-one-box").html("Correct Answers: " + wins);
		$("#choice-two-box").html("Inorrect Answers: " + loss);
		$("#choice-three-box").html("Unanswered: " + unanswered);
		$("#choice-four-box").html("Click Start to play again!");
		count = 0;
		win = 0;
		loss = 0;
		unanswered = 0;
		index = 0;
		clearInterval(countDownInterval);
		console.log(index);
		startGame();
}


	// }
});



























// //Create object
// var question =
// {
// 	// functions
// 	function start()
// 	{

// 		// prompt new question
// 		// prompt new timer countdown

// 	}

// 	function play()
// 	{
// 		start();

// 	}

// 	function answer()
// 	{
// 		// start new mini timer and overwrite the other timer...maybe like 5 seconds
// 		if(/* answer is correct*/)
// 		{
// 			// change html to display image
// 			// 
// 			win++;
// 			count++;
// 			start();
			
// 		}
// 		else if(/*answer is wrong*/)
// 		{
// 			// change html to show correct answer
// 			loss++;
// 			count++;
// 			start(); // generate new question
			
// 		}

// 	}

// 	function end()
// 	{
// 		// end game if this is true
// 		if(count === 8){
// 		// stop timer
// 		// change html to display correct, incorrect, unanswered
// 		}

// 	}



// 		$().on("click", function ()
// 		{
// 			//reset array function
// 			//call start

// 		}
	

// 	// call functions
// 	// constantly call function to end the game when count reaches a certain point
// 	end();
// }