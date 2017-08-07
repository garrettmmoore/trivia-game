
$( document ).ready(function() {

var countDownInterval=null;
// Create a timer and pass these two values
function timer()
{
	var counter = 30;
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

		}
    
	}, 1000);
}

// Declare Global Variables

var wins = 1;
var loss = 1;
var count = 0;

	// Create a start function to begin game on click
	function startGame(){
		// Start button for user to click
		$("#button1").click(function(){
			// Increase count so that first question can be called
			count++;
			// Generates new question on click
			newQuestion();
			// Start Timer
			
			// Hide button after click
			$(this).hide();	
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
	var q1 = new Trivia("What year was nintendo founded?", ["1950", "1889", "1982", "1970"], "1889", "<img src='assets/images/mario.png'/>", "mario rocks");
	var q2 = new Trivia("What was the first Pokemon game released in Japan?", ["Red", "Blue", "Yellow", "Green"], "Green", "<img src='assets/images/pikachu.png'/>", "Pikachu rocks");
	var q3 = new Trivia("Which of these titles was Luigi's first game?", ["Mario 64", "Luigi's Dream Castle", "Luigi and Peach", "Luigi's Mansion"], "Luigi's Mansion", "<img src='assets/images/luigi.png'/>", "luigi rocks");
	var q4 = new Trivia("What color did Miyamoto originally want Kirby to be?", ["Red", "White", "Yellow", "Pink"], "Yellow", "<img src='assets/images/kirby.png'/>", "kirby rocks");
	var q5 = new Trivia("Which of these characters didn't speak until Super Mario Sunshine?", ["Yoshi", "Toad", "Bowser", "Mario"], "Bowser", "<img src='assets/images/bowser.png'/>", "bowser rocks");
	var q6 = new Trivia("Which of these characters was the first villain in Mario?", ["Bowser", "Yoshi", "Donkey Kong", "Ganondorf"], "Donkey Kong", "<img src='assets/images/donkey-kong.png'/>", "donkey kong rocks");
	var q7 = new Trivia("Which of these titles was released on the Nintendo Gamecube for The Legend of Zelda?", ["Majora's Mask", "Ocarina of Time", "Wind Waker", "A Link to the Past"], "Wind Waker", "<img src='assets/images/toon-link.png'/>", "toon link rocks");
	var q8 = new Trivia("The character Samus is a ?", ["Man", "Alien", "Unknown", "Woman"], "Woman", "<img src='assets/images/samus.png'/>", "samus rocks");


	var questions = [q1, q2, q3, q4, q5, q6, q7, q8];
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

						// Question 1
						var question = questions[index];
						var choicesHtml = $(".choices")
						for(var i = 0; i < choicesHtml.length; i++){

							var choiceHTML = $(choicesHtml[i]);
							var selection = questions[index].choices[i];
							$(choiceHTML).html(selection);

							choiceHTML.off("click");
							choiceHTML.on("click", function()
							{
								// count++;
								answerHelper(selection, question);
								
								clearInterval(countDownInterval);
							});
						}

			index++;
		}
			
	}

	

	function answerHelper(choice, question)
	{
		    if(choice.includes(question.correctAnswer))
		    {
		    	// alert("Yay it worked!!");

		    	$("#correct-question-box").html("Winner correct question box..Winner");
		    	$(".question-choices-box").hide();
		    	$("#generate-image-box").html(question.correctImage);
		    	// $("#wrong-answer-text-box").html(questionDotWrongAnswerText);
		    	$("#generate-image-box").show();
    	    	// $("#wrong-answer-text-box").show();
		    	wins++;
		    	
		    		setTimeout(function()
		    	    {
		    	    	$("#generate-image-box").hide();
		    	    	// $("#wrong-answer-text-box").hide();
		    	    	$(".question-choices-box").show();
		    	    	newQuestion();
				  	}, 5000);	
				  		// newQuestion();
		    }
		    else
		    {
		    	// alert("sorry!!");
		    	$("#correct-question-box").html("lost correct question box..lost");
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
				  	}, 5000);
		    		// newQuestion(count++);
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
		$("#choice-three-box").html("Unanswered: ");
		$("#choice-four-box").html("Click Start to play again!");
		count = 0;
		win = 0;
		loss = 0;
		index = 0;
		clearInterval(countDownInterval);
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