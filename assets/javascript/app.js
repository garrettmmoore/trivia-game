
$( document ).ready(function() {

function timer(questionDotCorrectImage,questionDotWrongAnswerText)
{
	var counter = 30;

	setInterval(function(questionDotCorrectImage,questionDotWrongAnswerText) 
	{
		counter--;
		if (counter >= 0) 
    	{
      		$("#time-box").html(counter);
    	}
    	// Display 'counter' wherever you want to display it.
		if (counter === 0) 
		{
	    	// alert("sorry!!");
	    // 	$("#correct-question-box").html("lost correct question box..lost");
	    // 	$(".question-choices-box").hide();
	    // 	$("#generate-image-box").html(questionDotCorrectImage);
	    // 	$("#wrong-answer-text-box").html(questionDotWrongAnswerText);
	    // 	$("#generate-image-box").show();
	    // 	$("#wrong-answer-text-box").show();
	    // 	loss++;
	    	
    	// 	setTimeout(function()
    	//     {
    	//     	$("#generate-image-box").hide();
    	//     	$("#wrong-answer-text-box").hide();
    	//     	$(".question-choices-box").show();
    	    	

		  	// }, 5000);
	    		// newQuestion(count++);
        
        	clearInterval(counter);
        	// newQuestion();

		}
    
	}, 1000);
}

// Declare Global Variables

var wins = 1;
var loss = 1;
var count = 1;

	function startGame(){
		$("#button1").click(function(){
			newQuestion();
			$(this).hide();
			timer();
			
		});
	}
	startGame();

	function Trivia(question, choice1, choice2, choice3, choice4, answer, image, wrongAnswer)
	{
		this.questionTitle = question;
		this.firstChoice = choice1;
		this.secondChoice = choice2;
		this.thirdChoice = choice3;
		this.fourthChoice = choice4;
		this.correctAnswer = answer;
		this.correctImage= image;
		this.wrongAnswerText = wrongAnswer;
	}


	var q1 = new Trivia("What year was nintendo founded?", "1994", "1996", "1997", "1998", "1994", "<img src='assets/images/mario.png'/>", "mario rocks");
	var q2 = new Trivia("What year was blizzard founded?", "1894", "1896", "1897", "1898", "1894", "<img src='assets/images/pikachu.png'/>", "Pikachu rocks");
	var q3 = new Trivia("What year was mario founded?", "1794", "1796", "1797", "1798", "1794", "<img src='assets/images/luigi.png'/>", "luigi rocks");
	var q4 = new Trivia("What year was riot founded?", "1694", "1696", "1597", "1498", "1394", "<img src='assets/images/kirby.png'/>", "kirby rocks");
	var q5 = new Trivia("What year was zelda founded?", "1594", "1596", "1597", "1598", "1594", "<img src='assets/images/bowser.png'/>", "bowser rocks");
	var q6 = new Trivia("What year was square enix founded?", "1494", "1496", "1497", "1498", "1494", "<img src='assets/images/donkey-kong.png'/>", "donkey kong rocks");
	var q7 = new Trivia("What year was bethesda founded?", "1394", "1396", "1397", "1398", "1394", "<img src='assets/images/toon-link.png'/>", "toon link rocks");
	var q8 = new Trivia("What year was naughty dog founded?", "1294", "1296", "1297", "1298", "1294", "<img src='assets/images/samus.png'/>", "samus rocks");


	function newQuestion()
	{
		timer();
		// // var i = 1
		// var i = Math.floor((Math.random() * 8) + 1);
		// console.log("i = : " + i);
		

		if(count === 1)
		{
			$("#correct-question-box").html(q1.questionTitle);
			$("#choice-one-box").html(q1.firstChoice);
			$("#choice-two-box").html(q1.secondChoice);
			$("#choice-three-box").html(q1.thirdChoice);
			$("#choice-four-box").html(q1.fourthChoice);

						// Question 1
			$("#choice-one-box").click(function()
			{
				// count++;
				answerHelper(q1.firstChoice, q1.correctAnswer, q1.correctImage, q1.wrongAnswerText);
				timer(q1.correctImage, q1.wrongAnswerText);

			});

			$("#choice-two-box").click(function()
			{
				// count++;
				answerHelper(q1.secondChoice, q1.correctAnswer, q1.correctImage, q1.wrongAnswerText);
				timer(q1.correctImage, q1.wrongAnswerText);
			});

			$("#choice-three-box").click(function()
			{
				// count++;
				answerHelper(q1.thirdChoice, q1.correctAnswer, q1.correctImage, q1.wrongAnswerText);
				timer(q1.correctImage, q1.wrongAnswerText);
			});

			$("#choice-four-box").click(function()
			{
				// count++;
				answerHelper(q1.fourthChoice, q1.correctAnswer, q1.correctImage, q1.wrongAnswerText);
				timer(q1.correctImage, q1.wrongAnswerText);
			});
			
		}
		if(count === 2)
		{
			$("#correct-question-box").html(q2.questionTitle);
			$("#choice-one-box").html(q2.firstChoice);
			$("#choice-two-box").html(q2.secondChoice);
			$("#choice-three-box").html(q2.thirdChoice);
			$("#choice-four-box").html(q2.fourthChoice);

					// Question 2

			$("#choice-one-box").click(function()
			{
				// count++;
				answerHelper(q2.firstChoice, q2.correctAnswer, q2.correctImage, q2.wrongAnswerText);
			});

			$("#choice-two-box").click(function()
			{
				// count++;
				answerHelper(q2.secondChoice, q2.correctAnswer, q2.correctImage, q2.wrongAnswerText);
			});

			$("#choice-three-box").click(function()
			{
				// count++;
				answerHelper(q2.thirdChoice, q2.correctAnswer, q2.correctImage, q2.wrongAnswerText);
			});

			$("#choice-four-box").click(function()
			{
				// count++;
				answerHelper(q2.fourthChoice, q2.correctAnswer, q2.correctImage, q2.wrongAnswerText);
			});
			
		}
		if(count===4)
		{
			$("#correct-question-box").html(q3.questionTitle);
			$("#choice-one-box").html(q3.firstChoice);
			$("#choice-two-box").html(q3.secondChoice);
			$("#choice-three-box").html(q3.thirdChoice);
			$("#choice-four-box").html(q3.fourthChoice);

					//Question 3
			$("#choice-one-box").click(function()
			{
				// count++;
				answerHelper(q3.firstChoice, q3.correctAnswer, q3.correctImage, q3.wrongAnswerText);
			});

			$("#choice-two-box").click(function()
			{
				// count++;
				answerHelper(q3.secondChoice, q3.correctAnswer, q3.correctImage, q3.wrongAnswerText);
			});

			$("#choice-three-box").click(function()
			{
				// count++;
				answerHelper(q3.thirdChoice, q3.correctAnswer, q3.correctImage, q3.wrongAnswerText);
			});

			$("#choice-four-box").click(function()
			{
				// count++;
				answerHelper(q3.fourthChoice, q3.correctAnswer, q3.correctImage, q3.wrongAnswerText);
			});
			
		}
		if(count===8)
		{
			$("#correct-question-box").html(q4.questionTitle);
			$("#choice-one-box").html(q4.firstChoice);
			$("#choice-two-box").html(q4.secondChoice);
			$("#choice-three-box").html(q4.thirdChoice);
			$("#choice-four-box").html(q4.fourthChoice);

					// Question 4

			$("#choice-one-box").click(function()
			{
				// count++;
				answerHelper(q4.firstChoice, q4.correctAnswer, q4.correctImage, q4.wrongAnswerText);
			});

			$("#choice-two-box").click(function()
			{
				// count++;
				answerHelper(q4.secondChoice, q4.correctAnswer, q4.correctImage, q4.wrongAnswerText);
			});

			$("#choice-three-box").click(function()
			{
				// count++;
				answerHelper(q4.thirdChoice, q4.correctAnswer, q4.correctImage, q4.wrongAnswerText);
			});

			$("#choice-four-box").click(function()
			{
				// count++;
				answerHelper(q4.fourthChoice, q4.correctAnswer, q4.correctImage, q4.wrongAnswerText);
			});
			
		}
		if(count===16)
		{
			$("#correct-question-box").html(q5.questionTitle);
			$("#choice-one-box").html(q5.firstChoice);
			$("#choice-two-box").html(q5.secondChoice);
			$("#choice-three-box").html(q5.thirdChoice);
			$("#choice-four-box").html(q5.fourthChoice);

					// Question 5

			$("#choice-one-box").click(function()
			{
				// count++;
				answerHelper(q5.firstChoice, q5.correctAnswer, q5.correctImage, q5.wrongAnswerText);
			});

			$("#choice-two-box").click(function()
			{
				// count++;
				answerHelper(q5.secondChoice, q5.correctAnswer, q5.correctImage, q5.wrongAnswerText);
			});

			$("#choice-three-box").click(function()
			{
				// count++;
				answerHelper(q5.thirdChoice, q5.correctAnswer, q5.correctImage, q5.wrongAnswerText);
			});

			$("#choice-four-box").click(function()
			{
				// count++;
				answerHelper(q5.fourthChoice, q5.correctAnswer, q5.correctImage, q5.wrongAnswerText);
			});
			
		}
		if(count===32)
		{
			$("#correct-question-box").html(q6.questionTitle);
			$("#choice-one-box").html(q6.firstChoice);
			$("#choice-two-box").html(q6.secondChoice);
			$("#choice-three-box").html(q6.thirdChoice);
			$("#choice-four-box").html(q6.fourthChoice);

					// Question 6

			$("#choice-one-box").click(function()
			{
				// count++;
				answerHelper(q6.firstChoice, q6.correctAnswer, q6.correctImage, q6.wrongAnswerText);
			});

			$("#choice-two-box").click(function()
			{
				// count++;
				answerHelper(q6.secondChoice, q6.correctAnswer, q6.correctImage, q6.wrongAnswerText);
			});

			$("#choice-three-box").click(function()
			{
				// count++;
				answerHelper(q6.thirdChoice, q6.correctAnswer, q6.correctImage, q6.wrongAnswerText);
			});

			$("#choice-four-box").click(function()
			{
				// count++;
				answerHelper(q6.fourthChoice, q6.correctAnswer, q6.correctImage, q6.wrongAnswerText);
			});
			
		}
		if(count===64)
		{
			$("#correct-question-box").html(q7.questionTitle);
			$("#choice-one-box").html(q7.firstChoice);
			$("#choice-two-box").html(q7.secondChoice);
			$("#choice-three-box").html(q7.thirdChoice);
			$("#choice-four-box").html(q7.fourthChoice);

					// Question 7

			$("#choice-one-box").click(function()
			{
				// count++;
				answerHelper(q7.firstChoice, q7.correctAnswer, q7.correctImage, q7.wrongAnswerText);
			});

			$("#choice-two-box").click(function()
			{
				// count++;
				answerHelper(q7.secondChoice, q7.correctAnswer, q7.correctImage, q7.wrongAnswerText);
			});

			$("#choice-three-box").click(function()
			{
				// count++;
				answerHelper(q7.thirdChoice, q7.correctAnswer, q7.correctImage, q7.wrongAnswerText);
			});

			$("#choice-four-box").click(function()
			{
				// count++;
				answerHelper(q7.fourthChoice, q7.correctAnswer, q7.correctImage, q7.wrongAnswerText);

			});
			
		}
		if(count===128)
		{
			$("#correct-question-box").html(q8.questionTitle);
			$("#choice-one-box").html(q8.firstChoice);
			$("#choice-two-box").html(q8.secondChoice);
			$("#choice-three-box").html(q8.thirdChoice);
			$("#choice-four-box").html(q8.fourthChoice);

					// Question 8

			$("#choice-one-box").click(function()
			{
				// count++;
				answerHelper(q8.firstChoice, q8.correctAnswer, q8.correctImage, q8.wrongAnswerText);
			});

			$("#choice-two-box").click(function()
			{
				// count++;
				answerHelper(q8.secondChoice, q8.correctAnswer, q8.correctImage, q8.wrongAnswerText);
			});

			$("#choice-three-box").click(function()
			{
				// count++;
				answerHelper(q8.thirdChoice, q8.correctAnswer, q8.correctImage, q8.wrongAnswerText);
			});

			$("#choice-four-box").click(function()
			{
				// count++;
				answerHelper(q8.fourthChoice, q8.correctAnswer, q8.correctImage, q8.wrongAnswerText);
			});
			
		}
		
	
		if(count>=150)
		{
			endGame();
		}
		
	}

	

	function answerHelper(questionDotChoice, questionDotAnswer, questionDotCorrectImage, questionDotWrongAnswerText)
	{
		    if(questionDotChoice.includes(questionDotAnswer))
		    {
		    	// alert("Yay it worked!!");
		    	
		    	$("#correct-question-box").html("Winner correct question box..Winner");
		    	$(".question-choices-box").hide();
		    	$("#generate-image-box").html(questionDotCorrectImage);
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
		    	$("#generate-image-box").html(questionDotCorrectImage);
		    	$("#wrong-answer-text-box").html(questionDotWrongAnswerText);
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