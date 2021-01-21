'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript is connected");
		$('#testjs').text("Please wait...");

		$('.jumbotron p').toggleClass("active");
	});
	$("a.thumbnail").click(projectClick);

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
	
	//$('#myelement').click(changeText);
	//$('#myelement').append("<p>New Text</p>"");
	//$('#myelement').html("<p>New Text</p>"");
	//$('#myelement').text("<p>New Text</p>"");
	//$('#myelement').remove();
/*
	$('#project1').animate({
		"width": 500
	}, 1000)

	var description = $(".description");
	
	description.click(function(e) {
		$(this).toggleClass("active");
	});*/

}

function projectClick(e) {
	// prevent the page from reloading   
	console.log("Project clicked");
    e.preventDefault();
    // In an event handler, $(this) refers to     
    // the object that triggered the event     
	$(this).css("background-color", "#7fff00");
	
	var containingProject = $(this).closest(".project");
	var description = $(containingProject).find(".project-description");
    if (description.length == 0) {
       $(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>");
    } else {
	   //description.html("<p>Stop clicking on me! You just did it at " + (new Date()) + "</p>");
	   description.toggle()
    }
}

function changeText(event) {
	console.log("hehe changing text");
	$(this).text("Changed text");
}

//on slide 39