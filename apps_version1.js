/*
        ARROW BUTTONS
*/
function aboutMeArrow() {
  $(".about_me_container").show();
  $(".skill_list").hide();
  $(".slideshow-container").hide();
}

function skillsArrow() {
  $(".about_me_container").hide();
  $(".skill_list").show();
  $(".slideshow-container").hide();
}

function projectsArrow() {
  $(".about_me_container").hide();
  $(".skill_list").hide();
  $(".slideshow-container").show();
}


//----------------------------------------------------------------------
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

//----------------------------------------------------------------------
/*
      Style Swap Slider
*/
let xi = "https://www.pngfind.com/pngs/m/83-837789_final-fantasy-portal-site-final-fantasy-xi-logo.png";
let xiv = "https://pbs.twimg.com/media/FJDlv6QUUAA3yYe.jpg";
let wow = "https://image.pngaaa.com/943/859943-middle.png";
let gi = "https://thumbs.dreamstime.com/b/genshin-impact-logo-elements-icons-set-saint-petersburg-russia-august-video-game-asian-anime-227420760.jpg";
let nw = "https://pbs.twimg.com/profile_images/1418273879722766339/kivE0YCI_400x400.png";
let lost = "https://d1glcu56fxkf6q.cloudfront.net/statics/2022-01-27/images/LostArkIcon.png";

const toggleSwitch =
document.querySelector('.theme-slider input[type="checkbox"]');

/* Function to change theme */
function switchTheme(e) {

/* Once checkbox is checked default theme change to dark */
if (e.target.checked) {
  document.documentElement.setAttribute('theme', 'gamer');
      /*Header*/
      $('.slider_bar_text').html("Swap to Professional mode.");
      $('.slider_bar_text').css('color', 'grey');
      $('.header_text').html("I'm Daniel, welcome to my gaming portfolio!");
      $('.header_text').css('color', 'grey');
      $('.navbar').hide();
      $('#hdr').css("background-color", "black");
      $('#tsc').css("background-color", "black");
      $('#sbt').css("background-color", "black");
      $('#ht').css("background-color", "black");
      /*About Me*/
      $('.about_me').css("background-color", "black").css('background-image', 'none');
      $('.about_me_text').css("background-color", "black");
      $('.photo').hide();
      $('.about_me h2').css('color', 'grey');
      $('.about_me_text').html("Hero. Villian. Honorary Ph.D majoring in Tonberries. I have been a lifelong gamer with a love of the MMO genre. Please see below for my various characters and links. Feel free to find me in game and say hello!");
      $('.about_me_text').css("color", "grey");
      /*Skills*/
      $('.skills').css("background-color", "black").css('background-image', 'none');
      $('.skill_list').css("background-color", "black")
      $('.skills h2').html("Games Playing");
      $('.skills').css('color', 'grey');
      $('item').css('border-radius', '0%');
      $('item').css('background-color','black')
                    /*skill list > Games playing changes*/
      $('.html #one').attr('src', xi);
      $('.html .skill_list_text').html('Final Fantasy XI');
      $('.css #two').attr('src', xiv);
      $('.css .skill_list_text').html('Final Fantasy XIV');
      $('.javascript #three').attr('src', wow);
      $('.javascript .skill_list_text').html('World of Warcraft (inactive)');
      $('.python #four').attr('src', gi);
      $('.python .skill_list_text').html('Genshin Impact');
                    /*next1 additions*/
      $('.next1').css("visibility", "visible");
      $('.next1 #five').attr('src', nw);
      $('.next1 .skill_list_text').text("New World");
                    /*next2 additions*/
      $('.next2').css("visibility", "visible");
      $('.next2 #six').attr('src', lost);
      $('.next2 .skill_list_text').text("Lost Ark");
      /*Projects*/
      $('.projects').css("background-color", "black").css('background-image', 'none');
      $('.slideshow-container').css("background-color", "black");
      $('.prev').css("color", "black");
      $('.next').css("color", "black");
      $('#p_title').html("Character Links");
      $('#p_title').css("color", "grey");
      $('#p1').attr("src", xi)
      $('#project_list_1 .text').html("https://www.ffxiah.com/player/Quetzalcoatl/Zebix")
      $('#p2').attr("src", xiv)
      $('#project_list_2 .text').html("https://na.finalfantasyxiv.com/lodestone/character/210852/")
      $('#p3').attr("src", wow)
      $('#project_list_3 .text').html("https://worldofwarcraft.com/en-us/character/us/proudmoore/genjibow")
      /*Footer*/
      $('footer').css("background-color", "black");
      $('footer').css("color", "grey");
}

/* While page in dark mode and checkbox is
checked then theme back to change light*/
else {
  document.documentElement.setAttribute('theme', 'professional');
      /*Header*/
      $('.slider_bar_text').html("Swap to Gamer mode.");
      $('.slider_bar_text').removeAttr('style');
      $('.header_text').html("Hi I'm Daniel, welcome to my webpage!");
      $('.header_text').removeAttr('style');
      $('.navbar').show()
      $('#hdr').removeAttr('style');
      $('#tsc').removeAttr('style');
      $('#sbt').removeAttr('style');
      $('#ht').removeAttr('style');
      /*About Me*/
      $('.photo').show();
      $('.about_me h2').removeAttr('style');
      $('.about_me').removeAttr('style');
      $('.about_me_text').removeAttr('style');
      $('.about_me_text').html("Software Developer and fledgling game designer with a <em>app</em>etite to learn and standing in front of the buffet of the world. Skilled in logstics management, hardware assembly, and with a proven skill of handling himself under pressure.");
      /*Skills*/
      $('item').css('border-radius', '50%');
      $('item').removeAttr('style')
      $('.skills h2').html("Skills");
      $('.skills').removeAttr('style');
      $('.skill_list').removeAttr('style')
      $('.html #one').attr('src', "https://cdn-icons-png.flaticon.com/512/136/136528.png");
      $('.html .skill_list_text').html('HTML');
      $('.css #two').attr('src', "https://cdn-icons-png.flaticon.com/512/180/180841.png");
      $('.css .skill_list_text').html('CSS');
      $('.javascript #three').attr('src', "https://cdn-icons-png.flaticon.com/512/136/136530.png");
      $('.javascript .skill_list_text').html('Javascript');
      $('.python #four').attr('src', "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png");
      $('.python .skill_list_text').html('Python');
      $('.next1').css("visibility", "hidden");
      $('.next2').css("visibility", "hidden");
      /*Projects*/
      $('.slideshow-container').removeAttr('style')
      $('.projects').removeAttr('style');
      $('.prev').removeAttr('style');
      $('.next').removeAttr('style');
      $('#p_title').html("Projects");
      $('#p_title').removeAttr('style');
      $('#p1').attr("src", "https://cdn-icons-png.flaticon.com/512/136/136528.png");
      $('#project_list_1 .text').html("This is an example of my HTML centric project.")
      $('#p2').attr("src", "https://cdn-icons-png.flaticon.com/512/180/180841.png")
      $('#project_list_2 .text').html("This is an example of complicated CSS project.")
      $('#p3').attr("src", "https://cdn-icons-png.flaticon.com/512/136/136530.png")
      $('#project_list_3 .text').html("This is an example of a solution using some complicated Javascript.")
/*Footer*/
      $('footer').removeAttr('style');
      
}
}

toggleSwitch.addEventListener('change', switchTheme, false);

//---------------------------------------------------------------------
/*

*/