$('#petal2').hover(function(){
	$('#petal2').css('background','#1abc9c');
	$('#petal1').css('background','#3498db');
	$('#petal3').css('background','#3498db');
},resetPetals);
$('#petal1').hover(function(){
	$('#petal1').css('background','#1abc9c');
	$('#petal2').css('background','#3498db');
	$('#petal3').css('background','#3498db');
},resetPetals);
$('#petal3').hover(function(){
	$('#petal3').css('background','#1abc9c');
	$('#petal2').css('background','#3498db');
	$('#petal1').css('background','#3498db');
},resetPetals);

function resetPetals(){
	$('.petals').css('background','#1abc9c');
}
