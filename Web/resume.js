var achieve = "<h2>Honors</h2>Girl Scout Gold Award<br>Girl Scout President's Award in Honor of Ethel G. Harvey<br><h2>Publications</h2>";
var experience = "";
var about = "";
var misc = "";
var extra = "";
var reader; //GLOBAL File Reader object for demo purpose only
var filePath = "planning.txt";
    /**
     * Check for the various File API support.
     */
function checkFileAPI() {
    if (window.File && window.FileReader && window.FileList && window.Blob) {
        reader = new FileReader();
        return true; 
    } else {
        alert('The File APIs are not fully supported by your browser. Fallback required.');
        return false;
    }
}

    /**
     * read text input
     */
function readText(filePath) {
    var output = ""; //placeholder for text output
    if(filePath.files && filePath.files[0]) {           
        reader.onload = function (e) {
            output = e.target.result;
            

        };//end onload()
        reader.readAsText(filePath.files[0]);
    }//end if html5 filelist support
    else if(ActiveXObject && filePath) { //fallback to IE 6-8 support via ActiveX
        try {
            reader = new ActiveXObject("Scripting.FileSystemObject");
            var file = reader.OpenTextFile(filePath, 1); //ActiveX File Object
            output = file.ReadAll(); //text contents of file
            file.Close(); //close file "input stream"


        } catch (e) {
            if (e.number == -2146827859) {
                alert('Unable to access local files due to browser security settings. ' + 
                'To overcome this, go to Tools->Internet Options->Security->Custom Level. ' + 
                'Find the setting for "Initialize and script ActiveX controls not marked as safe" and change it to "Enable" or "Prompt"'); 
            }
        }       
    }
    else { //this is where you could fallback to Java Applet, Flash or similar
        return false;
    }       
    return true;
}   
function displayText(petal){
/*	var title = "";
	var innertext = "";
	if(petal == 1){
		title = "Special Achievements";
		innertext = achieve;
	}
	else if(petal == 2){
		title = "CS Experience";
		innertext = experience;
	}
	else if(petal == 3){
		title = "About";
		innertext = about;
	}
	else if(petal == 5){
		title = "Miscellaneous";
		innertext = misc;
	}
	else if(petal == 4){
		title = "Extra Curriculars";
		innertext = extra;
	}
	$('#title').css('visibility','visible');
	$('#text').css('visibility','visible');*/
//	document.getElementById('title').innerHTML = title;
//	document.getElementById('text').innerHTML = innertext;
}

    /**
     * display content using a basic HTML replacement
     */
$('#petal1').hover(function(){
	$('#petal1').css('background','#1abc9c');
	$('#petal3').css('background','#24a7b6');
	$('#petal2').css('background','#24a7b6');
	$('#petal4').css('background','#3498db');
	$('#petal5').css('background','#3498db');
},resetPetals);

$('#petal2').hover(function(){
	$('#petal2').css('background','#1abc9c');
	$('#petal3').css('background','#24a7b6');
	$('#petal1').css('background','#24a7b6');
	$('#petal4').css('background','#24a7b6');
	$('#petal5').css('background','#3498db');
},resetPetals);

$('#petal3').hover(function(){
	$('#petal3').css('background','#1abc9c');
	$('#petal2').css('background','#24a7b6');
	$('#petal4').css('background','#24a7b6');
	$('#petal1').css('background','#3498db');
	$('#petal5').css('background','#3498db');
},resetPetals);

$('#petal4').hover(function(){
	$('#petal4').css('background','#1abc9c');
	$('#petal3').css('background','#24a7b6');
	$('#petal5').css('background','#24a7b6');
	$('#petal2').css('background','#24a7b6');
	$('#petal1').css('background','#3498db');
},resetPetals);

$('#petal5').hover(function(){
	$('#petal5').css('background','#1abc9c');
	$('#petal3').css('background','#24a7b6');
	$('#petal4').css('background','#24a7b6');
	$('#petal2').css('background','#3498db');
	$('#petal1').css('background','#3498db');
},resetPetals);

function resetPetals(){
	$('.petals').css('background','#1abc9c');
}
$('.petals').click(function(){
	$('#overlay').css('visibility','visible');
	$('#display').css('visibility','visible');
});
$('#overlay').click(function(){
	$('#overlay').css('visibility','hidden');
	$('#display').css('visibility','hidden');
	$('#title').css('visibility','hidden');
	$('#text').css('visibility','hidden');
});
$('#petal1').click(function(){displayText(1)});
$('#petal2').click(function(){displayText(2)});
$('#petal3').click(function(){displayText(3)});
$('#petal4').click(function(){displayText(4)});
$('#petal5').click(function(){displayText(5)});

