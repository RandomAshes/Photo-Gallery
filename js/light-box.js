//Ashley's Jquery LightBox

var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p class='caption'></p>");
var $leftButton = $('<button class="arrow-l"></button>');
var $rightButton = $('<button class="arrow-r"></button>');


// CREATE, APPEND, AND SHOW OVERLAY

		// An image to overlay
		$overlay.append($image);

		// Add Left Button
		$overlay.append($leftButton);
		// Add Right Button
		$overlay.append($rightButton);

		// A caption to overlay
		$overlay.append($caption);

			
		// Add overlay
		$("body").append($overlay);
			

		// Capture the click event on the link to an image
		$(".gallery a").click(function(event){
			event.preventDefault();
			var imageLocation = $(this).attr("href");
			// Update overlay with the image linked in the link.
			$image.attr("src", imageLocation);

			// Show the overlay.
			$overlay.show();

			// Get child's alt attribute and set caption.
			var captionText = $(this).attr("title");
			$caption.text(captionText);

		});	

//DISABLE OVERLAY

		//When overlay is clicked
		$overlay.click(function(){
			// Hide the overlay
			$overlay.hide();
		});