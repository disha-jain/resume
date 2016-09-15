var bloodTiesSummary = "A family feud explodes and Larissa and Vanessa Ravens, two innocent girls, are kidnapped to be used as weapons in an impeding family war.</br>An amnesiac is the only person with the ability to find them—-he just doesn't know it. </br>Jonathan Ravens is woken up one day with a feeling that something is wrong--Ryan Fields shows up on his door a few days later bearing the terrible news. </br>Isabella Highland is thrown out of her family and purposely put in the way of an old acquaintance--one who has every reason to hate her and everything she stands for--and Bradley Highland must suffer as a puppet while everyone he loves fights for their lives.</br>Old friendships are put to the test as history catches up with these teenagers and they fight to break the constraining bonds tradition has placed on them.";
var bloodTiesExcerpt = "The man in black looked at his watch, then covertly flipped the face up to reveal an age-old photograph. Sapphire blue eyes stared back at him, made unique by the gold flecks trapped in them. He traced his finger over the long, sleek, jet-black hair, curling past the young girls shoulders, the full red mouth drawn up in a wide smile. The woman he saw through the windshield, in the act of yelling at her blond companion, looked different, yes, but the eyes were the same. Faces could be altered; hair could be cut and straightened, but eyes? Eyes were always the same. Always. And these eyes were unique. One of a kind. This was the girl. This was the girl he hunted.</br>But the man in black was wrong. There were two girls; two girls with the same eyes, the same power. Twins…";
var hauntedHopeSummary = "Alyssia is scarred at a very young age by the disappearance of her siblings; she begins training as a pro assassin and spy in hopes that it will help her find the only family that has ever mattered to her. But when she is assigned to what may be her most difficult posting yet, she meets a boy from her past--a boy who has been searching for her for more than half his life--who brings all the memories she has tried for so long to suppress flooding back.";
var hauntedHopeExcerpt = "Black clouds rumble ominously over a stormy beach. The heavens open up to a hellish downpour, while the wind howls through the trees. This is the night of the full moon, but the darkness oppresses Selene’s light until all that is illuminated are the two young forms arguing. The girl and boy look very close to coming to blows, especially to the child hiding behind the rocks. The rain falls harder, pounding on the soaked little girl as she shivers – partly from cold, partly from fear. Her eyes whip back and forth between the girl who, if 8 years younger, could pass for her twin, and the boy who is, to her, the most handsome man in the world.</br>The older girl, her beautiful face lit up in a flash of lightning, yells something that is carried away in the wind; her red hair whips back and forth as her head shakes in response to something the boy is saying. The boy's golden eyes glint dangerously, and, apparently unsatisfied with the older girl’s reply, he closes the distance between him and his opponent. The redhead pulls a sword out of her waist belt, and the boy imitates her movement. They circle each other, their weapons at ready. The young girl behind the rocks screams as her brother lashes out at her sister, and, before the sword meets its target, the girl awakens, still screaming, crying, and covered in sweat.</br>•••••</br>My name is Alyssia and I know better than to believe in dreams.";
var strength = "The sun has the fiery strength</br>To do the same job every day.</br>Sometimes I wish that I, too</br>Could be like the sun.</br></br>Resilience—I must be strong</br>Failure is not an option</br>It is time to realize that I, too </br>Could be like the sun</br></br>When it seems too hard</br>To stay strong, day after dayI just remember that I, too</br>Could be like the sun</br></br>Today, I embrace myself</br>My faults and strengths</br>And recognize that I, too</br>Am like the sun";
var motion = "An endless corridor</br>Walking on and on</br>An object in motion stays in motion </br>What if I stop?</br></br>Whiteness—all around me</br>Stuck, in a blank oblivion</br>An object at rest stays at rest</br>Why did I stop?";
var searching = "I drift through the sky</br>That one lonely cloud</br>I float through the meadow</br>That one questing breeze</br>I soar through the stars</br>That one solitary comet</br>Always searching, always seeking</br>Never stopping, never ceasing</br></br>I run through the forest</br>That one hunted deer</br>I bound through the grasses</br>That one lost rabbit</br>I swim through the deepest sea</br>That one desperate fish</br>Always searching, always seeking</br>Never stopping, never ceasing</br></br>I spin through the old city</br>That one flash of memory</br>I blow through the empty house</br>That one deadly dream</br>I gallop through the fields of thought</br>That one powerful goddess</br>Always searching, always seeking</br>Never stopping, never ceasing</br></br>I freeze as the sun sets</br>That one ship stranded miles from shore</br>I sprint as the storm calls</br>That one person left behind</br>I look for a place to call home</br>That one lost child frantic for hearth</br>Always searching, always seeking</br>Never stopping, never ceasing";
var haiku = "Fire flies flit, swooping</br>here and there. Those fire flies fly,</br>dancing in the sky</br></br>Flowering blood red</br>Unfurling in the morning</br>Scarlet petals, rose</br></br>Golden grass ripples</br>Glowing emerald carpet</br>Shining in the sun</br></br>Weeping willow trees</br>Elegant, sweeping branches</br>With light, white, flowers</br></br>A bright red apple,</br>is glowing on the counter</br>I want to eat it</br></br>Snip, snap, open, close</br>Snapdragons--always hungry</br>Thriving in gardens</br></br>The gypsy stands in</br>Pools of colour--red, green, blue,</br>Amber, and gold flame</br></br>Memorial of</br>Love, lasting bond shown in white</br>Marble. Taj Mahal.</br></br>With a small smile</br>And a mysterious look.</br>The Mona Lisa</br></br>Vast, barren, shades of</br>Red, carved by a small river</br>The Grand Canyons looms</br></br>Hot, dry, in shades of</br>White, tan, and brown. Bitter winds</br>In the Sahara</br></br>Small white delicate</br>The snowflake falls on my tongue</br>Melting so slowly</br></br>Tan and gold, leaves are</br>Falling, dancing through the sky</br>Melancholy Fall</br></br>Watching the kites fly</br>A kaleidoscope of color </br>Walking in DC</br></br>Rain falls from the sky</br>Pattering on my window</br>Dripping, dripping, down</br></br>Crisp, fresh, leather bound</br>Pale pages covered in ink</br>My book speaks to me</br></br>Ink black, swirling night</br>With dancing fireflies</br>Lighting up the dark</br></br>Boom, snap, crackle, pop!</br>Hairs on my neck prickled</br>Lightning fried that tree";
$('.covers').click(function(event){
	$('#overlay').css('visibility','visible');
	$('#display').css('visibility','visible');
	var id = jQuery(this).attr("id");
	var title=document.getElementById("title");
	var summary = document.getElementById("summary");
	var excerpt = document.getElementById("excerpt");
	if(id == "bloodTies")
	{
		title.innerHTML = "Blood Ties";
		summary.innerHTML = bloodTiesSummary;
		excerpt.innerHTML = bloodTiesExcerpt;
	}
	else if(id == "hauntedHope")
	{
		title.innerHTML = "Haunted Hope";
		summary.innerHTML = hauntedHopeSummary;
		excerpt.innerHTML = hauntedHopeExcerpt;
	}
});

$('.petals').click(function(event){
	$('#overlay').css('visibility','visible');
	$('#display').css('visibility','visible');
	var id = jQuery(this).attr("id");
	var title=document.getElementById("title");
	var poem = document.getElementById("poem");
	if(id == "strength")
	{
		title.innerHTML = "Strength";
		poem.innerHTML = strength;
	}
	else if(id == "motion")
	{
		title.innerHTML = "Motion";
		poem.innerHTML = motion;
	}
	else if(id == "searching")
	{
		title.innerHTML = "Searching for Home";
		poem.innerHTML = searching;
	}
	else if(id == "haiku")
	{
		title.innerHTML = "Haiku";
		poem.innerHTML = haiku;
	}
});

$('#overlay').click(function(){
	$('#overlay').css('visibility','hidden');
	$('#display').css('visibility','hidden');
});
