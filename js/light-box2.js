//Ashley's Jquery LightBox


// Elements to append
var $overlay = $('<div id="overlay"></div>');
var $overlayContent = $('<div id="overlayContent"></div>');
var $image = $('<img class="overlay-img">');
var $caption = $("<p class='caption'></p>");
var $leftButton = $('<button class="arrow-l"></button>');
var $rightButton = $('<button class="arrow-r"></button>');

// Variable to keep track of which overlay
// image is in use
var $index = 0;

// Get number of images on page
// (needed so we know when we are at last image)
var $galleryLength = $("#gallery a").length -1;

console.log($galleryLength);


// CREATE and APPEND Overlay
	
			// Add Left Button
		$overlayContent.append($leftButton);

		// An image to overlay
		$overlayContent.append($image);

		// Add Right Button
		$overlayContent.append($rightButton);

		// A caption to overlay
		$overlayContent.append($caption);
		
		$overlay.append($overlayContent);

		// Add overlay
		$("body").append($overlay);
		

//Function to update overlay image and caption
var updateImage = function(imageLocation, imageCaption){
	  //update image
	  $image.attr("src", imageLocation);
	  //update caption
	  $caption.text(imageCaption);
}


// SHOW OVERLAY

		// Capture the click event on the link to an image
		$(".gallery a").click(function(event){
				event.preventDefault();

				var imageLocation = $(this).attr("href");
				var imageCaption = $(this).attr("title");

				// give index the current images index value	
  			$index = $(this).parent().index(); 
  			console.log($index);

				/* Update overlay image and caption
				   with the image that was clicked on
				   by using updateImage function */
				updateImage(imageLocation, imageCaption);

				// Show the overlay
				$overlay.css("display", "flex");
		});	

// MAKE ARROWS WORK

			//Arrows function
			var arrows = function( left ) {
			  //set arrows to true to move backwards in the index

			  // if left arrow is clicked, add
			  if(!left) { $index++; }
			  else { $index--; }

			  //if at the end of gallery,
			  //jump to beginning & vice versa
			  if ($index < 0) { $index = $galleryLength;}
			  if ($index > $galleryLength) { $index = 0; }

			  //Grab the element by index and then get the link
			  var newImgSelected = $(".gallery a").get($index);

			  //grab link information
			  var imageLocation = $(newImgSelected).attr("href");
			  var imageCaption =  $(newImgSelected).attr("title");

			  //Update Overlay
			  updateImage(imageLocation, imageCaption);
			}

			console.log($index);

			//Button events

			$(".arrow-l").click(function(event){
			  arrows(true);
			  console.log($index + ' left');
			});

			$(".arrow-r").click(function(event){
			  arrows();
			  console.log($index + ' right');
			});





//DISABLE OVERLAY

		// //When overlay is clicked
		// $overlay.click(function(){
		// 	// Hide the overlay
		// 	$overlay.hide();
		// });