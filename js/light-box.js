//ASHLEY's JQUERY LIGHTBOX -- March 2016

// Elements to append
var $overlay = $('<div id="overlay"></div>');
var $overlayContent = $('<div id="overlayContent"></div>');
var $image = $('<img class="overlay-img">');
var $caption = $("<p class='caption'></p>");
var $XButton = $('<button class="x-button"></button>'); 
var $leftButton = $('<button class="arrow-l"></button>');
var $rightButton = $('<button class="arrow-r"></button>');

// Variable to keep track of which overlay
// image is in use
var $index = 0;

// Get number of images on page
// (needed so we know when we are at last image)
var $galleryLength = $("#gallery a").length -1;

//Function to update overlay image and caption
var updateImage = function(imageLocation, imageCaption){
  //update image
  $image.attr("src", imageLocation);
  //update caption
  $caption.text(imageCaption);
};

// CREATE and APPEND Overlay

// Add Left Button to overlayContent
$overlayContent.append($leftButton);

// Add image to overlayContent
$overlayContent.append($image);

// Add Right Button to overlayContent
$overlayContent.append($rightButton);

// Add caption to overlayContent
$overlayContent.append($caption);

// Add exit-overlay button to overlay
$overlay.append($XButton);

// Add overlayContent to overlay
$overlay.append($overlayContent);

// Add overlay to index.html
$("body").append($overlay);
		
// SHOW OVERLAY and UPDATE INDEX

// Capture click when gallery image is clicked on
$(".gallery a").click(function(event){
	event.preventDefault();

	var imageLocation = $(this).attr("href");
	var imageCaption = $(this).attr("title");

	// give $index the current image's index value	
	$index = $(this).index();

	/* Update overlay image and caption
	   with the image that was clicked on
	   by using updateImage function */
	updateImage(imageLocation, imageCaption);

	// Show the overlay
	$overlay.css("display", "flex");
});	

// LIGHTBOX ARROWS

//Arrows function
var arrows = function( left ) {
  //set arrows to true to move backwards in the index

  // if right arrow is clicked, add 1 to index
  // else (if left arrow is clicked) subtract 1
  if(!left) { $index++; }
  else { $index--; }

  //if at the end of gallery,
  //jump to beginning & vice versa
  if ($index < 0) { $index = $galleryLength;}
  if ($index > $galleryLength) { $index = 0; }

  // Get next <a>
  var newImgSelected = $(".gallery a").get($index);

  //grab link information
  var imageLocation = $(newImgSelected).attr("href");
  var imageCaption =  $(newImgSelected).attr("title");

  //Update Overlay
  updateImage(imageLocation, imageCaption);
};

//BUTTON EVENTS
	// if left arrow or key 37 is pressed, go left
	// if right arrow or key 39 is pressed, go right

$(document).on( "keydown", function( event ) {

	if ( $overlay.css('display') === 'flex' ) {
		// left keydown
		if (event.which === 37) {
			arrows(true);
	  	console.log($index + ' left');
		}
		// right keydown
		if (event.which === 39) {
			arrows();
	  	console.log($index + ' right');
		}
	}
});

// left arrow click
$(".arrow-l").click(function(event){
  arrows(true);
  console.log($index + ' left');
});

// right arrow click
$(".arrow-r").click(function(event){
  arrows();
  console.log($index + ' right');
});

//DISABLE OVERLAY

//When exit button is clicked
$XButton.click(function(){
	// Hide the overlay
	$overlay.hide();
});