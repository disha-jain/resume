var playing = false;
var timeVar;
var timeOnTimer = "5:00";
var playButton;
var score = 0;
var capital = "";
var index = -1;
var curStateName = "";
var scoreLabel;
var checkLabel;

var states = ["alabama_montgomery", "alaska_juneau", "arizona_phoenix","arkansas_little rock", "california_sacramento", 
"colorado_denver","connecticut_hartford", "delaware_dover", "florida_tallahassee",
"georgia_atlanta", "hawaii_honolulu", "idaho_boise","illinois_springfield", "indiana_indianapolis", "iowa_des moines", 
"kansas_topeka", "kentucky_frankfort","louisiana_baton rouge", "maine_augusta", 
"maryland_annapolis", "massachusetts_boston", "michigan_lansing","minnesota_saint paul, st paul", "mississippi_jackson", 
"missouri_jefferson city", "montana_helena", "nebraska_lincoln","nevada_carson city", "newhampshire_concord", 
"newjersey_trenton", "newmexico_santa fe", "newyork_albany","northcarolina_raleigh", "northdakota_bismarck", "ohio_columbus", 
"oklahoma_oklahoma city", "oregon_salem","pennsylvania_harrisburg", "rhodeisland_providence", "southcarolina_columbia", 
"southdakota_pierre", "tennessee_nashville","texas_austin", "utah_salt lake city", "vermont_montpelier", 
"virginia_richmond", "washington_olympia","westvirginia_charleston", "wisconsin_madison", "wyoming_cheyenne"];
var correctStates = [-1];
function dealWihKeyboard(e)
{
	if(e.charCode == "13")
	{
		checkAnswers();
	}
}
function quit()
{
	var temp = score;
	score = 0;
	gameOver(temp);
}
function correctAnswer(answer)
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
function checkAnswers()
{
	var answerBox = document.getElementById("answerBox");
	var ans = answerBox.value;
	var correct = false;
	var answer = "-1";
	ans = ans.toLocaleLowerCase();
	if(ans.length == 0)
	{
		return;
		console.log("nope");
	}
	if(capital.indexOf(",") != -1)
	{
		var cap1 = capital.substring(0, capital.indexOf(","));
		var cap2 = capital.substring(capital.indexOf(",") + 1);
		console.log(ans == cap1 || ans == cap2);
		if(((ans == cap1) || (ans == cap2)) == true)
		{
			correctStates.push(index);
			document.getElementById(curStateName).style.fill="#00FF00";			
			correctAnswer(curStateName);
			score++;
			if(score == 50)
			{
				gameOver(score);
			}
		}
		answerBox.value = "";
	}
	else if(ans == capital)
	{
		correctStates.push(index);
		document.getElementById(curStateName).style.fill="#00FF00";
		if(curStateName == "michigan")
			document.getElementById("michiganx").style.fill="#00FF00";
		score++;
		scoreLabel.innerHTML = "Score: " + score;
		answerBox.value = "";
		correctAnswer(curStateName);
		checkLabel.innerHTML = "YAY, that was the right capital! Keep going!";
		if(score == 50)
		{
			gameOver(score);
		}
	}
	else if(ans != capital)
	{
		document.getElementById(curStateName).style.fill="#FF0000";
		if(curStateName == "michigan")
			document.getElementById("michiganx").style.fill="#FF0000";
		checkLabel.innerHTML = "Sorry, the capital of that state is not " + ans + ". Keep going!";
		//alert("Sorry, that is not the right capital! Keep going!");
		answerBox.value = "";
	}
	promptForState();
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
			correctStates = [-1];
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
			correctStates = [-1];
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
		promptForState();

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
		document.getElementById(curStateName).style.fill="#E0E0E0";
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
		playButton.innerHTML = "Try Again!";
		playing = false;
		clearInterval(timeVar);
		gameOver(score);
	}
	else if(tens != 0)
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
	index = Math.floor(Math.random() * 50);;
	console.log(index + ": " + correctStates);
	while(correctStates.indexOf(index) != -1 && score != 50)
	{
		
		index =  Math.floor(Math.random() * 50);
		console.log(index + ": " + correctStates);
	}
	var cur = states[index];
	curStateName = cur.substring(0, cur.indexOf("_"));
	capital = cur.substring(cur.indexOf("_") + 1);
	var curState = document.getElementById(curStateName);
	curState.style.fill="#66CCFF";
	if(curStateName == "michigan")
	{
		document.getElementById("michiganx").style.fill="#66CCFF";
	}
	this.addEventListener("keypress", dealWihKeyboard, false);

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
	for( k = 0; k < states.length; k++)
	{
		curStateName = states[k].substring(0, states[k].indexOf("_"));
		var temp = document.getElementById(curStateName);
		temp.style.fill = "#E0E0E0";
	}
	document.getElementById("michiganx").style.fill = "E0E0E0";
	if(s == 50)
	{
		checkLabel.innerHTML = "Congratulations! You got all 50 states in less than 5 minutes! Can you do it again?";

	}
	else if(s < 50)
	{
		checkLabel.innerHTML = "Game Over! Your score was " + (correctStates.length - 1) + "! Try again?";
	}
}