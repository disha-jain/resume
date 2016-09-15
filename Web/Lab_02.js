var playing = false;
var timeVar;
var timeOnTimer = "5:00";
var playButton;
var score = 0;
var stateNames = ["alabama", "alaska", "arizona","arkansas", "california", "colorado","connecticut", "delaware", "florida",
"georgia", "hawaii", "idaho","illinois", "indiana", "iowa", "kansas", "kentucky","louisiana", "maine", 
"maryland", "massachusetts", "michigan","minnesota", "mississippi", "missouri", "montana", "nebraska","nevada", "newhampshire", 
"newjersey", "newmexico", "newyork","northcarolina", "northdakota", "ohio", "oklahoma", "oregon","pennsylvania", "rhodeisland", 
"southcarolina", "southdakota", "tennessee","texas", "utah", "vermont", "virginia", "washington","westvirginia", "wisconsin", "wyoming"];
var stateAb = ["AL", "AK", "AZ","AR", "CA", "CO","CT", "DE", "FL", "GA", "HI", "ID","IL", "IN", "IO", "KS", "KY","LA", "ME",  "MD", "MA", "MI","MN", "MS", "MO", "MT", "NE","NV", "NH", 
"NJ", "NM", "NY","NC", "ND", "OH", "OK", "OR","PA", "RI", "SC", "SD", "TN","TX", "UT", "VT", "VA", "WA","WV", "WI", "WY"];
var guessed = ["m"];
var scoreLabel;
var checkLabel;
this.addEventListener("keyup", checkAnswers, false);
function quit()
{
	var temp = score;
	score = 0;
	gameOver(temp);
}
function correctAnswer( answer)
{
	var element = document.getElementById(answer);
	if(element != null)
	{
		element.style.fill = "#00FF00";
	}
	if(answer == "michigan")
	{
		var extra = document.getElementById("michiganx");
		extra.style.fill = "#00FF00";
	}
}
function checkAnswers(e)
{
	var answerBox = document.getElementById("answerBox");
	var ans = answerBox.value;
	var correct = false;
	var answer = "-1";
	if(ans.length > 2)
		ans = ans.toLocaleLowerCase();
	ans = ans.replace(/\s+/g, '') + "";
	console.log(guessed.indexOf(stateNames[stateAb.indexOf(ans)]));
	if((guessed.indexOf(ans) == -1 && stateNames.indexOf(ans) != -1) || (stateAb.indexOf(ans) != -1 && (guessed.indexOf(stateNames[stateAb.indexOf(ans)]) == -1)))
	{
		if(stateNames.indexOf(ans) != -1)
		{
			guessed.push(ans);
			answer = ans;
		}
		else if(stateAb.indexOf(ans) != -1)
		{
			var temp = stateNames[stateAb.indexOf(ans)];
			guessed.push(temp);
			answer = temp;
		}
	}
	console.log(guessed);
	if(answer != "-1")
	{
		correctAnswer(answer);
		answerBox.value = "";
		score++;
		scoreLabel.innerHTML = "Score: " + score;
		if(score == 50)
		{
			gameOver(score);
		}
	}
}
function start(){
	scoreLabel = document.getElementById("scoreLabel");	
	checkLabel = document.getElementById("checkLabel");	
	var timer = document.getElementById("timer");
	var answerHead = document.getElementById("answerHead");
	playButton = document.getElementById("playButton");
	if(playing === false)
	{
		scoreLabel.style.visibility = "initial";
		checkLabel.style.visibility = "initial";
		document.getElementById("answerBox").focus();
		answerHead.style.visibility = "initial";
		playing = true;
		if(playButton.innerHTML == "Resume")
			console.log(true);
		else if(document.getElementById("quitButton") == null)
		{
			scoreLabel.innerHTML = "Score: 0";
			checkLabel.innerHTML = "";
			guessed = ["m"];
			var quitButton = document.createElement("button");
			var t = document.createTextNode("Quit");
			quitButton.appendChild(t);
			quitButton.id="quitButton";
			var div = document.getElementById("quitSpot");
			div.appendChild(quitButton);
			quitButton = document.getElementById("quitButton");
			quitButton.addEventListener("click", quit, false);
			timer.innerHTML = "5:00";
		}
		else if(document.getElementById("quitButton") != null)
		{
			scoreLabel.innerHTML = "Score: 0";
			checkLabel.innerHTML = "";
			document.getElementById("quitButton").style.visibility="visible";	
			timer.style.visibility = "visible";
			score = 0;
			guessed = ["m"];
			timer.innerHTML = "5:00";
		}
		playButton.innerHTML = "Pause";
		if(timeOnTimer=="5.00")
		{
			timer.innerHTML = "5:00";
		}
		else
			timer.innerHTML = timeOnTimer;
		timerStart();
	}
	else if(playing === true)
	{
		scoreLabel.style.visibility = "hidden";
		checkLabel.style.visibility = "hidden";
		answerHead.style.visibility="hidden";
		playButton.innerHTML = "Resume";
		clearInterval(timeVar);
		timeOnTimer = timer.innerHTML;
		playing = false;
	}
}
function timerStart()
{
	timeVar = setInterval(function() {myTimer();}, 1000);
}
function myTimer() 
{
	var timer = document.getElementById("timer");
	var time = timer.innerHTML;
	var min = parseInt("" + time.charAt(0));
	var tens = parseInt("" + time.charAt(2));
	var ones = parseInt("" + time.charAt(3));
	var sec = (tens * 10) + ones;
	if(document.getElementById("quitButton")==null)
	{
		timer.innerHTML = "5:00";
	}
	if(min == 0 && tens == 0 && (ones == 0 || ones == 1))
	{
		playButton = document.getElementById("playButton");
		timeOnTimer == "5:00";
		gameOver(score);
		playButton.innerHTML = "Try Again!";
		playing = false;
		clearInterval(timeVar);
	}
	if(tens != 0)
	{
		if(sec == 10)
		{
			timer.innerHTML = min + ":09";
		}
		else
		{
			sec = sec - 1;
			timer.innerHTML = min + ":" + sec;
		}
	}
	else if(tens == 0 && ones != 0)
	{
		ones = ones - 1;
		timer.innerHTML = min + ":0" + ones;
	}
	else if(tens == 0 && ones ==0)
	{
		sec = 59;
		min = min - 1;
		timer.innerHTML = min + ":" + sec;
	}
}
function reply_click(clicked_id)
{
	console.log(clicked_id + "");
}
function promptForState()
{
	curState = prompt("Which state is this?","");
}
function gameOver(s)
{
	playButton.innerHTML = "Try Again!";
	playing = false;
	quitButton.style.visibility= "hidden";
	clearInterval(timeVar);
	var answerHead = document.getElementById("answerHead");
	answerHead.style.visibility="hidden";
	var timer = document.getElementById("timer");
	timer.innerHTML = "5:00";
	timeOnTimer = "5:00";
	timer.style.visibility= "hidden";
	for( k = 0; k < stateNames.length; k++)
	{
		var temp = document.getElementById(stateNames[k]);
		temp.style.fill = "#E0E0E0";
	}
	document.getElementById("wyoming").style.fill="#E0E0E0";
	document.getElementById("michiganx").style.fill = "#E0E0E0";
	if(s == 50)
	{
		checkLabel.innerHTML = "Congratulations! You got all 50 states in less than 5 minutes! Can you do it again?";

	}
	else if(s < 50)
	{
		checkLabel.innerHTML = "Game Over! Your score was " + (correctStates.length - 1) + "! Try again?";
	}
}