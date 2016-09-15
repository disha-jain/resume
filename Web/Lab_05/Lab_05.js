var elements=["Tamora Pierce", "JK Rowling", "Kirsten Cashore", "Margaret Peterson Haddix"];
var option1=["Alanna the Lioness", "Trickster's Choice", "Daine the Wildmage", "Protector of the Small"];
var option2=["Sorcerer's Stone", "Chamber of Secrets", "Prisoner of Azkaban", "Goblet of Fire", "Order of the Pheonix", "Half-Blood Prince","Deathly Hallows"];
var option3=["Graceling", "Fire", "Bitterblue"];
var option4=["Among the Hidden", "Among the Barons", "Among the Enemy","Among the Imposters","Among the Brave", "Among the Betrayed", "Just Ella",
 "Double Identity", "Palace of Mirrors", "Uprising"];
 var chosen;
//context.Response.ContentType = "application/json";
function checkValue()
{
	var e = window.event;
	var x = e.target;
	var div1 = document.getElementById("list1");
	while (div1.children.length > 0)
		div1.removeChild(div1.firstChild);	
	var select = document.createElement('select');
	select.id="selector";
	if(x.id =="radio1")
	{
		if(document.getElementById("radio2").checked)
		{
			document.getElementById("radio2").checked=false;
		}
		var size = 1;
		select.size = size;
	}
	else if(x.id == "radio2")
	{
		if(document.getElementById("radio1").checked)
		{
			document.getElementById("radio1").checked=false;
		}
		var size = 4;
		select.size = size;
	}
	for(var k = 0; k < 4; k++)
	{
		var option = document.createElement('option');
		option.value=option.textContent=elements[k];
		var num = k+1;
		var id = "option" + num;
		option.id= id;
		select.appendChild(option);
	}
	select.onchange=clicked;
	div1.appendChild(select);
}
function clicked()
{
	var e = window.event;
	var x = e.target;
	chosen = x.value;
	var index = elements.indexOf(chosen);
	var elements2;
	if(index == 0)
	{
		elements2 = option1;
	}
	else if(index == 1)
	{
		elements2 = option2;
	}
	else if(index == 2)
	{
		elements2 = option3;
	}
	else if(index == 3)
	{
		elements2 = option4;
	}
	var div2 = document.getElementById("list2");
	while (div2.children.length > 0)
		div2.removeChild(div2.firstChild);	
	var select = document.createElement('select');
	select.id="selector2";
	var size = elements2.length;
	select.size = size;
	for(var k = 0; k < size; k++)
	{
		var option = document.createElement('option');
		option.value=option.textContent=elements2[k];
		var num = k+1;
		var id = "o" + num;
		option.id= id;
		select.appendChild(option);
	}
	select.onchange=secondClick;
	div2.appendChild(select);

}
function secondClick()
{
	var e = window.event;
	var x = e.target;
	var chosenTitle = x.value;
	$.get('Lab_05_HttpHandler.ashx', 
		{ bookAuthor: chosen, bookTitle: chosenTitle }
	, function (data) {
	}
	);
}