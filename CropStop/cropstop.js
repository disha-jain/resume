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
$('#my_reviews').click(function(){
	$('#overlay').css('opacity','.4');
	$('#overlay').css('left','0px');
	$('#overlay').css('top','0px');
	$('#overlay').css('visibility','visible');
	$('#review_display').css('visibility','visible');
	$('#review_display').css('opacity','1');
});
$('#help').click(function(){
	$('#display').css('left','calc(0px - 50vh)');
	$('#help_display').css('visibility','visible');
	$('#help_display').css('opacity','1');
});
$('#search').click(function(){
	$('#display').css('left','calc(0px - 50vh)');
	$('#search_display').css('visibility','visible');
	$('#search_display').css('opacity','1');
});
$('#overlay').click(function(){
	$('#overlay').css('opacity','0'); 
	$('#display').css('left','calc(0px - 50vh)');
	$('#overlay').css('visibility','hidden');
//	$('#headerBackButton').css('visibility', 'hidden');
	$('profile').css('visibility', 'hidden');
	$('#sort_display').css('visibility','hidden');
	$('#sort_display').css('opacity','0');
	$('#help_display').css('visibility','hidden');
	$('#help_display').css('opacity','0');
	$('#search_display').css('visibility','hidden');
	$('#search_display').css('opacity','0');
	$('#review_display').css('visibility','hidden');
	$('#review_display').css('opacity','0');
});
