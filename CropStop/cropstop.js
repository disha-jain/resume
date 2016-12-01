$('#menu').click(function(){
	console.log('menu clicked');
	$('#overlay').css('opacity','.4');
	$('#display').css('left','0px');
	$('#overlay').css('left','0px');
	$('#display').css('top','0px');
	$('#overlay').css('top','0px');
	$('#overlay').css('visibility','visible');
/*	$('#headerBackButton').css('visibility', 'visible');
	$('#headerBackButton').click(function(){
		$('#overlay').css('background-color','#FFF');	
		$('#overlay').css('opacity','0');
		$('#display').css('left','calc(0px - 75%)');
		$('#overlay').css('visibility','hidden');
		$('#headerBackButton').css('visibility', 'hidden');
		$('#headerBackButton').click('index.html');
	});*/
	$('#profile').css('visibility', 'visible');
});
$('#sort_button').click(function(){
	$('#overlay').css('opacity','.4');
	$('#overlay').css('left','0px');
	$('#overlay').css('top','0px');
	$('#overlay').css('visibility','visible');
	$('#sort_display').css('visibility','visible');
	$('#sort_display').css('opacity','1');
});
$('#overlay').click(function(){
	$('#overlay').css('opacity','0'); 
	$('#display').css('left','calc(0px - 50vh)');
	$('#overlay').css('visibility','hidden');
//	$('#headerBackButton').css('visibility', 'hidden');
	$('profile').css('visibility', 'hidden');
	$('#sort_display').css('visibility','hidden');
	$('#sort_display').css('opacity','0');
});
