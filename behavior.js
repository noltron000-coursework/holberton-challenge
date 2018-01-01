document.addEventListener("DOMContentLoaded", function(event) {
	var thumbnailElement = document.getElementById("smart_thumbnail");
	thumbnailElement.addEventListener("click", function() {
		var thumbnailElement = document.getElementById("smart_thumbnail");
		if(thumbnailElement.className == "small") {
			thumbnailElement.className = "big";
		} else {
			thumbnailElement.className = "small";
		}
	});
});