var $bathroomButton = document.querySelector('.bathroom');
var $balconyButton = document.querySelector('.balcony');
var $kitchenButton = document.querySelector('.kitchen');
var $familyBedroomButton = document.querySelector('.familyBedroom');
var $backBedroomButton = document.querySelector('.backBedroom');
var $narniaButton = document.querySelector('.narnia');
var $gearClosetButton = document.querySelector('.gearCloset');
var $laundryClosetButton = document.querySelector('.laundryCloset');
var $mainRoomButton = document.querySelector('.mainRoom');
var $hallwayButton = document.querySelector('.hallway');
var $entryButton = document.querySelector('.entry');
var $foundButton = document.querySelector('.btn-found');
var $william = document.querySelector('.btn-sound7');
var selection = "none";

$bathroomButton.addEventListener('click', function() {
    if (selection == "none"){
        $('#bathroom1').css({ fill: "#80CECC" });
        selection = "bathroom";
    }
    else if(selection == "bathroom"){
        $('#bathroom1').css({ fill: "#FEF3C2" });
        selection = "none";
    }
    else{
        selection = "bathroom";
        $('#hallway1').css({ fill: "#FEF3C2" });
        $('#entry1').css({ fill: "#FEF3C2" });
        $('#balcony1').css({ fill: "#FEF3C2" });
        $('#narnia1').css({ fill: "#FEF3C2" });
        $('#kitchen1').css({ fill: "#FEF3C2" });
        $('#laundryCloset1').css({ fill: "#FEF3C2" });
        $('#gearCloset1').css({ fill: "#FEF3C2" });
        $('#familyBedroom1').css({ fill: "#FEF3C2" });
        $('#backBedroom1').css({ fill: "#FEF3C2" });
        $('#mainRoom1').css({ fill: "#FEF3C2" });
        $('#bathroom1').css({ fill: "#80CECC" });
    }
	var audio = document.getElementById("bathroom-music");
	audio.paused ? audio.play() :  audio.play();
	var duration = 0.3,
      delay = 0.08;
	TweenMax.to($bathroomButton, duration, {scaleY: 1.1, ease: Expo.easeOut});
	TweenMax.to($bathroomButton, duration, {scaleX: 1, scaleY: 1, ease: Back.easeOut, easeParams: [1], delay: delay});
});

$balconyButton.addEventListener('click', function() {
    if (selection == "none"){
        $('#balcony1').css({ fill: "#80CECC" });
        selection = "balcony";
    }
    else if(selection == "balcony"){
        $('#balcony1').css({ fill: "#FEF3C2" });
        selection = "none";
    }
    else{
        selection = "balcony";
        $('#hallway1').css({ fill: "#FEF3C2" });
        $('#entry1').css({ fill: "#FEF3C2" });
        $('#balcony1').css({ fill: "#80CECC" });
        $('#narnia1').css({ fill: "#FEF3C2" });
        $('#kitchen1').css({ fill: "#FEF3C2" });
        $('#laundryCloset1').css({ fill: "#FEF3C2" });
        $('#gearCloset1').css({ fill: "#FEF3C2" });
        $('#familyBedroom1').css({ fill: "#FEF3C2" });
        $('#backBedroom1').css({ fill: "#FEF3C2" });
        $('#mainRoom1').css({ fill: "#FEF3C2" });
        $('#bathroom1').css({ fill: "#FEF3C2" });
    }
	var audio = document.getElementById("balcony-music");
	audio.paused ? audio.play() : audio.play();
	var duration = 0.3,
      delay = 0.08;
	TweenMax.to($balconyButton, duration, {scaleY: 1.6, ease: Expo.easeOut});
	//TweenMax.to($button, duration, {scaleX: 1.2, scaleY: 1, ease: Back.easeOut, easeParams: [3], delay: delay});
	TweenMax.to($balconyButton, duration * 1.25, {scaleX: 1, scaleY: 1, ease: Back.easeOut, easeParams: [6], delay: delay * 3 });
});

$kitchenButton.addEventListener('click', function() {
    if (selection == "none"){
        $('#kitchen1').css({ fill: "#80CECC" });
        selection = "kitchen";
    }
    else if(selection == "kitchen"){
        $('#kitchen1').css({ fill: "#FEF3C2" });
        selection = "none";
    }
    else{
        selection = "kitchen";
        $('#hallway1').css({ fill: "#FEF3C2" });
        $('#entry1').css({ fill: "#FEF3C2" });
        $('#balcony1').css({ fill: "#FEF3C2" });
        $('#narnia1').css({ fill: "#FEF3C2" });
        $('#kitchen1').css({ fill: "#80CECC" });
        $('#laundryCloset1').css({ fill: "#FEF3C2" });
        $('#gearCloset1').css({ fill: "#FEF3C2" });
        $('#familyBedroom1').css({ fill: "#FEF3C2" });
        $('#backBedroom1').css({ fill: "#FEF3C2" });
        $('#mainRoom1').css({ fill: "#FEF3C2" });
        $('#bathroom1').css({ fill: "#FEF3C2" });
    }
	var audio = document.getElementById("kitchen-music");
	audio.paused ? audio.play() : audio.play();
	var duration = 0.3,
      delay = 0.08;
	TweenMax.to($kitchenButton, duration, {scaleX: 1.1, ease: Expo.easeOut});
	TweenMax.to($kitchenButton, duration * 1.25, {scaleX: 1, scaleY: 1, ease: Back.easeOut, easeParams: [3], delay: delay * 3 });
});

$familyBedroomButton.addEventListener('click', function() {
    if (selection == "none"){
        $('#familyBedroom1').css({ fill: "#80CECC" });
        selection = "familyBedroom";
    }
    else if(selection == "familyBedroom"){
        $('#familyBedroom1').css({ fill: "#FEF3C2" });
        selection = "none";
    }
    else{
        selection = "familyBedroom";
        $('#hallway1').css({ fill: "#FEF3C2" });
        $('#entry1').css({ fill: "#FEF3C2" });
        $('#balcony1').css({ fill: "#FEF3C2" });
        $('#narnia1').css({ fill: "#FEF3C2" });
        $('#kitchen1').css({ fill: "#FEF3C2" });
        $('#laundryCloset1').css({ fill: "#FEF3C2" });
        $('#gearCloset1').css({ fill: "#FEF3C2" });
        $('#familyBedroom1').css({ fill: "#80CECC" });
        $('#backBedroom1').css({ fill: "#FEF3C2" });
        $('#mainRoom1').css({ fill: "#FEF3C2" });
        $('#bathroom1').css({ fill: "#FEF3C2" });
    }
	var audio = document.getElementById("familyBedroom-music");
	audio.paused ? audio.play() : audio.play();
	var duration = 0.3,
      delay = 0.08;
	TweenMax.to($familyBedroomButton, duration, {scaleX: 1.1, ease: Expo.easeOut});
	TweenMax.to($familyBedroomButton, duration * 1.25, {scaleX: 1, scaleY: 1, ease: Back.easeOut, easeParams: [3], delay: delay * 3 });
});

$backBedroomButton.addEventListener('click', function() {
    if (selection == "none"){
        $('#backBedroom1').css({ fill: "#80CECC" });
        selection = "backBedroom";
    }
    else if(selection == "backBedroom"){
        $('#backBedroom1').css({ fill: "#FEF3C2" });
        selection = "none";
    }
    else{
        selection = "backBedroom";
        $('#hallway1').css({ fill: "#FEF3C2" });
        $('#entry1').css({ fill: "#FEF3C2" });
        $('#balcony1').css({ fill: "#FEF3C2" });
        $('#narnia1').css({ fill: "#FEF3C2" });
        $('#kitchen1').css({ fill: "#FEF3C2" });
        $('#laundryCloset1').css({ fill: "#FEF3C2" });
        $('#gearCloset1').css({ fill: "#FEF3C2" });
        $('#familyBedroom1').css({ fill: "#FEF3C2" });
        $('#backBedroom1').css({ fill: "#80CECC" });
        $('#mainRoom1').css({ fill: "#FEF3C2" });
        $('#bathroom1').css({ fill: "#FEF3C2" });
    }
	var audio = document.getElementById("backBedroom-music");
	audio.paused ? audio.play() : audio.play();
	var duration = 0.3,
      delay = 0.08;
	TweenMax.to($backBedroomButton, duration, {scaleX: 1.1, ease: Expo.easeOut});
	TweenMax.to($backBedroomButton, duration * 1.25, {scaleX: 1, scaleY: 1, ease: Back.easeOut, easeParams: [3], delay: delay * 3 });
});

$narniaButton.addEventListener('click', function() {
    if (selection == "none"){
        $('#narnia1').css({ fill: "#80CECC" });
        selection = "narnia";
    }
    else if(selection == "narnia"){
        $('#narnia1').css({ fill: "#FEF3C2" });
        selection = "none";
    }
    else{
        selection = "narnia";
        $('#hallway1').css({ fill: "#FEF3C2" });
        $('#entry1').css({ fill: "#FEF3C2" });
        $('#balcony1').css({ fill: "#FEF3C2" });
        $('#narnia1').css({ fill: "#80CECC" });
        $('#kitchen1').css({ fill: "#FEF3C2" });
        $('#laundryCloset1').css({ fill: "#FEF3C2" });
        $('#gearCloset1').css({ fill: "#FEF3C2" });
        $('#familyBedroom1').css({ fill: "#FEF3C2" });
        $('#backBedroom1').css({ fill: "#FEF3C2" });
        $('#mainRoom1').css({ fill: "#FEF3C2" });
        $('#bathroom1').css({ fill: "#FEF3C2" });
    }
	var audio = document.getElementById("narnia-music");
	audio.paused ? audio.play() : audio.play();
	var duration = 0.3,
      delay = 0.08;
	TweenMax.to($narniaButton, duration, {scaleX: 1.1, ease: Expo.easeOut});
	TweenMax.to($narniaButton, duration * 1.25, {scaleX: 1, scaleY: 1, ease: Back.easeOut, easeParams: [3], delay: delay * 3 });
});

$gearClosetButton.addEventListener('click', function() {
    if (selection == "none"){
        $('#gearCloset1').css({ fill: "#80CECC" });
        selection = "gearCloset";
    }
    else if(selection == "gearCloset"){
        $('#gearCloset1').css({ fill: "#FEF3C2" });
        selection = "none";
    }
    else{
        selection = "gearCloset";
        $('#hallway1').css({ fill: "#FEF3C2" });
        $('#entry1').css({ fill: "#FEF3C2" });
        $('#balcony1').css({ fill: "#FEF3C2" });
        $('#narnia1').css({ fill: "#FEF3C2" });
        $('#kitchen1').css({ fill: "#FEF3C2" });
        $('#laundryCloset1').css({ fill: "#FEF3C2" });
        $('#gearCloset1').css({ fill: "#80CECC" });
        $('#familyBedroom1').css({ fill: "#FEF3C2" });
        $('#backBedroom1').css({ fill: "#FEF3C2" });
        $('#mainRoom1').css({ fill: "#FEF3C2" });
        $('#bathroom1').css({ fill: "#FEF3C2" });
    }
	var audio = document.getElementById("gearCloset-music");
	audio.paused ? audio.play() :  audio.play();
	var duration = 0.3,
      delay = 0.08;
	TweenMax.to($gearClosetButton, duration, {scaleY: 1.1, ease: Expo.easeOut});
	TweenMax.to($gearClosetButton, duration, {scaleX: 1, scaleY: 1, ease: Back.easeOut, easeParams: [1], delay: delay});
});

$laundryClosetButton.addEventListener('click', function() {
    if (selection == "none"){
        $('#laundryCloset1').css({ fill: "#80CECC" });
        selection = "laundryCloset";
    }
    else if(selection == "laundryCloset"){
        $('#laundryCloset1').css({ fill: "#FEF3C2" });
        selection = "none";
    }
    else{
        selection = "laundryCloset";
        $('#hallway1').css({ fill: "#FEF3C2" });
        $('#entry1').css({ fill: "#FEF3C2" });
        $('#balcony1').css({ fill: "#FEF3C2" });
        $('#narnia1').css({ fill: "#FEF3C2" });
        $('#kitchen1').css({ fill: "#FEF3C2" });
        $('#laundryCloset1').css({ fill: "#80CECC" });
        $('#gearCloset1').css({ fill: "#FEF3C2" });
        $('#familyBedroom1').css({ fill: "#FEF3C2" });
        $('#backBedroom1').css({ fill: "#FEF3C2" });
        $('#mainRoom1').css({ fill: "#FEF3C2" });
        $('#bathroom1').css({ fill: "#FEF3C2" });
    }
	var audio = document.getElementById("laundryCloset-music");
	audio.paused ? audio.play() :  audio.play();
	var duration = 0.3,
      delay = 0.08;
	TweenMax.to($laundryClosetButton, duration, {scaleY: 1.1, ease: Expo.easeOut});
	TweenMax.to($laundryClosetButton, duration, {scaleX: 1, scaleY: 1, ease: Back.easeOut, easeParams: [1], delay: delay});
});

$mainRoomButton.addEventListener('click', function() {
    if (selection == "none"){
        $('#mainRoom1').css({ fill: "#80CECC" });
        selection = "mainRoom";
    }
    else if(selection == "mainRoom"){
        $('#mainRoom1').css({ fill: "#FEF3C2" });
        selection = "none";
    }
    else{
        selection = "mainRoom1";
        $('#hallway1').css({ fill: "#FEF3C2" });
        $('#entry1').css({ fill: "#FEF3C2" });
        $('#balcony1').css({ fill: "#FEF3C2" });
        $('#narnia1').css({ fill: "#FEF3C2" });
        $('#kitchen1').css({ fill: "#FEF3C2" });
        $('#laundryCloset1').css({ fill: "#FEF3C2" });
        $('#gearCloset1').css({ fill: "#FEF3C2" });
        $('#familyBedroom1').css({ fill: "#FEF3C2" });
        $('#backBedroom1').css({ fill: "#FEF3C2" });
        $('#mainRoom1').css({ fill: "#80CECC" });
        $('#bathroom1').css({ fill: "#FEF3C2" });
    }
	var audio = document.getElementById("mainRoom-music");
	audio.paused ? audio.play() :  audio.play();
	var duration = 0.3,
      delay = 0.08;
	TweenMax.to($mainRoomButton, duration, {scaleX: 1.1, ease: Expo.easeOut});
	TweenMax.to($mainRoomButton, duration *1.25, {scaleX: 1, scaleY: 1, ease: Back.easeOut, easeParams: [3], delay: delay * 3});
});

$hallwayButton.addEventListener('click', function() {
    if (selection == "none"){
        $('#hallway1').css({ fill: "#80CECC" });
        selection = "hallway";
    }
    else if(selection == "hallway"){
        $('#hallway1').css({ fill: "#FEF3C2" });
        selection = "none";
    }
    else{
        selection = "hallway";
        $('#hallway1').css({ fill: "#80CECC" });
        $('#entry1').css({ fill: "#FEF3C2" });
        $('#balcony1').css({ fill: "#FEF3C2" });
        $('#narnia1').css({ fill: "#FEF3C2" });
        $('#kitchen1').css({ fill: "#FEF3C2" });
        $('#laundryCloset1').css({ fill: "#FEF3C2" });
        $('#gearCloset1').css({ fill: "#FEF3C2" });
        $('#familyBedroom1').css({ fill: "#FEF3C2" });
        $('#backBedroom1').css({ fill: "#FEF3C2" });
        $('#mainRoom1').css({ fill: "#FEF3C2" });
        $('#bathroom1').css({ fill: "#FEF3C2" });
    }
	var audio = document.getElementById("hallway-music");
	audio.paused ? audio.play() :  audio.play();
	var duration = 0.3,
      delay = 0.08;
	TweenMax.to($hallwayButton, duration, {scaleY: 1.1, ease: Expo.easeOut});
	TweenMax.to($hallwayButton, duration, {scaleX: 1, scaleY: 1, ease: Back.easeOut, easeParams: [1], delay: delay});
});


$entryButton.addEventListener('click', function() {
    if (selection == "none"){
        $('#entry1').css({ fill: "#80CECC" });
        selection = "entry";
    }
    else if(selection == "entry"){
        $('#entry1').css({ fill: "#FEF3C2" });
        selection = "none";
    }
    else{
        selection = "entry";
        $('#entry1').css({ fill: "#80CECC" });
        $('#hallway1').css({ fill: "#FEF3C2" });
        $('#balcony1').css({ fill: "#FEF3C2" });
        $('#narnia1').css({ fill: "#FEF3C2" });
        $('#kitchen1').css({ fill: "#FEF3C2" });
        $('#laundryCloset1').css({ fill: "#FEF3C2" });
        $('#gearCloset1').css({ fill: "#FEF3C2" });
        $('#familyBedroom1').css({ fill: "#FEF3C2" });
        $('#backBedroom1').css({ fill: "#FEF3C2" });
        $('#mainRoom1').css({ fill: "#FEF3C2" });
        $('#bathroom1').css({ fill: "#FEF3C2" });
    }
	var audio = document.getElementById("entry-music");
	audio.paused ? audio.play() :  audio.play();
	var duration = 0.3,
      delay = 0.08;
	TweenMax.to($entryButton, duration, {scaleY: 1.1, ease: Expo.easeOut});
	TweenMax.to($entryButton, duration, {scaleX: 1, scaleY: 1, ease: Back.easeOut, easeParams: [1], delay: delay});
});

$foundButton.addEventListener('click', function() {
    
    selection = "none";
    $('#entry1').css({ fill: "#FEF3C2" });
    $('#hallway1').css({ fill: "#FEF3C2" });
    $('#balcony1').css({ fill: "#FEF3C2" });
    $('#narnia1').css({ fill: "#FEF3C2" });
    $('#kitchen1').css({ fill: "#FEF3C2" });
    $('#laundryCloset1').css({ fill: "#FEF3C2" });
    $('#gearCloset1').css({ fill: "#FEF3C2" });
    $('#familyBedroom1').css({ fill: "#FEF3C2" });
    $('#backBedroom1').css({ fill: "#FEF3C2" });
    $('#mainRoom1').css({ fill: "#FEF3C2" });
    $('#bathroom1').css({ fill: "#FEF3C2" });
    startit();
	var audio = document.getElementById("found-music");
	audio.paused ? audio.play() :  audio.play();
	var duration = 0.3,
      delay = 0.08;
	TweenMax.to($foundButton, duration, {scaleY: 1.1, ease: Expo.easeOut});
	TweenMax.to($foundButton, duration, {scaleX: 1, scaleY: 1, ease: Back.easeOut, easeParams: [1], delay: delay});
});

$william.addEventListener('click', function() {
	var audio = document.getElementById("william");
    if (audio.paused){
        audio.play();
        document.getElementById('btn-sound7').src = "images/wp.png";
    }
    else{
        audio.pause();
        document.getElementById('btn-sound7').src = "images/w.png";
    }
});


function mark(ID) { //creates border
    var childImages = document.getElementById("plushies").children;
    var i;
    // clear any other borders that might be set
    for ( i = 0; i < childImages.length; i++ ) {
       childImages[i].style.border = '';
    }
    // Then set the one that got clicked.
    document.getElementById(ID).style.border="3px solid #AE967B";
}





