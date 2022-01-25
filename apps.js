/*
        SLIDESHOW CONTAINER
*/
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

/*
        Style Swap Slider
*/
const toggleSwitch =
	document.querySelector('.theme-slider input[type="checkbox"]');

/* Function to change theme */
function switchTheme(e) {

	/* Once checkbox is checked default theme change to dark */
	if (e.target.checked) {
		document.documentElement.setAttribute('theme', 'gamer');
        $('slide_text').html("Swap to Professional mode.")
	}

	/* While page in dark mode and checkbox is
	checked then theme back to change light*/
	else {
		document.documentElement.setAttribute('theme', 'professional');
        $('slide_text').html("Swap to Gamer mode.")
	}
}

toggleSwitch.addEventListener('change', switchTheme, false);
