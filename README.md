# PROJECT OVERVIEW
---

## Project Schedule
---

| Day | Deliverable | Status |
|:---:|:-----------:|:------:|
|  M  | Project Worksheet | Incomplete |
|  T  | Core application structure and Grid Layout | Incomplete |
|  W  | MVP & Bug fixes  |  Incomplete |
|  R  | Work on PostMVPs | Incomplete |
|  F  | Presentation Day | Incomplete |


## Project Description
---
This project is a portfolio website for myself! It will highlight all my skills and abilities as well as any projects I have completed. 

It will be coded using HTML, CSS, Javascript and will include at least 1 of: animations, AJAX requests, Javascript logic, jQuery interactions. It will be deployed to Github Pages. It must made using mobile first design, and will be reactive to tablet and desktop dimensions.

## Wireframes
---
[Desktop Design](https://drive.google.com/file/d/1MoPlOMgtTHzdMg8VrrxzbluBhhEZ5IPf/view?usp=sharing)

[Mobile Design](https://drive.google.com/file/d/1ftCMPCuXda-5FJ51Bl-Gfp1X9Pg527az/view?usp=sharing)

## Time/Priority Matrix
---
[Time Priority Matrix](https://drive.google.com/file/d/1WW6vo7bAzL9Q_KPt6AeFOXrD1jPB-XlS/view?usp=sharing)

##### MVP
* Building the HTML shell
    * Creating the HTML, CSS, JS files
    * Format HTML
    * Fill in all the text
* Grid / Flexbox
    * Make grid
    * Put assign items to grid
    * Format grid placement
* CSS Styling
    * Style page so it looks nice
    * Add reactivity
* Javascript
    * Add animations to mobile design
    * Add animations to desktop design

##### PostMVP
* "Fun Mode" Button
    * Add button to change from professional mode to fun mode
    * Change information to reflect "fun" mode
* HTML Changes
    * Change information for containers
* CSS Changes
    * Change styling (backgrounds, texts, etc)


## Functional Components
---

##### MVP
| Component | Priority | Estimated Time | Actual Time |
|:---------:|:--------:|:--------------:|:-----------:|
| HTML shell |   H     |     2 hours    |      ?      |
| Hamburger Menu |  H  |     2 hours    |      ?      |
|   Photo   |    L     |     1 hour     |      ?      |
| Regular Nav |   H    |     1 hour     |      ?      |
| Filling in info |  M |     .5 hour    |      ?      |
| Grid formatting |  H |     3 hours    |      ?      |
| CSS styling |     M  |    2.5 hours   |      ?      |
| Reactivity  |    H   |    2 hours     |      ?      |
|  Footer    |    L    |    2 hours     |      ?      |
|   Total   |          |     16 hours   |      ?      |


##### PostMVP
| Component | Priority | Estimated Time | Actual Time |
|:---------:|:--------:|:--------------:|:-----------:|
| Fun mode button | L  |     3 hours    |      ?     |
| fun mode styling | L |     1 hours    |      ?     |
| fun mode info   |  L |     2 hours    |      ?     |
|  Total    |    L     |     6 hours    |      ?     |

## Additional Libraries
---
```
```

## Code Snippet
---
```
```

## Issues and Resolutions
---
```
```

## Contributions and Attributions
---

###### Images and Icons
HTML icon: https://cdn-icons-png.flaticon.com/512/136/136528.png

CSS icon: https://cdn-icons-png.flaticon.com/512/180/180841.png

Javascript icon: https://cdn-icons-png.flaticon.com/512/136/136530.png

Python icon: https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png

e-mail symbol: http://www.stickpng.com/img/icons-logos-emojis/email-icons/email-icon-orange

linked in symbol: https://blog-assets.hootsuite.com/wp-content/uploads/2018/09/In-2C-54px-R.png

hamburger menu: https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png

###### Code Chunks
```
   width: 200px;
    height: 300px;
    position: relative;
    overflow: hidden;
    border-radius: 50%;
}
```
The above code was used from [stack overflow](https://stackoverflow.com/questions/26421274/css-circular-cropping-of-rectangle-image) to help get my headshot to have an oval border.

```
/* Slideshow container */
.slideshow-container {
  max-width: 1000px;
  position: relative;
  margin: auto;
}

/* Next & previous buttons */
.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  padding: 16px;
  margin-top: -22px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
}

/* Position the "next button" to the right */
.next {
  right: 0;
  border-radius: 3px 0 0 3px;
}

/* On hover, add a black background color with a little bit see-through */
.prev:hover, .next:hover {
  background-color: rgba(0,0,0,0.8);
}

/* Caption text */
.text {
  color: #f2f2f2;
  font-size: 15px;
  padding: 8px 12px;
  position: absolute;
  bottom: 8px;
  width: 100%;
  text-align: center;
}

/* Number text (1/3 etc) */
.numbertext {
  color: #f2f2f2;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
}

/* The dots/bullets/indicators */
.dot {
  cursor: pointer;
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
}

.active, .dot:hover {
  background-color: #717171;
}

/* Fading animation */
.fade {
  -webkit-animation-name: fade;
  -webkit-animation-duration: 1.5s;
  animation-name: fade;
  animation-duration: 1.5s;
}

@-webkit-keyframes fade {
  from {opacity: .4} 
  to {opacity: 1}
}

@keyframes fade {
  from {opacity: .4} 
  to {opacity: 1}
}

/* On smaller screens, decrease text size */
@media only screen and (max-width: 300px) {
  .prev, .next,.text {font-size: 11px}
}
</style>
</head>
<body>

<div class="slideshow-container">

<div class="mySlides fade">
  <div class="numbertext">1 / 3</div>
  <img src="img_nature_wide.jpg" style="width:100%">
  <div class="text">Caption Text</div>
</div>

<div class="mySlides fade">
  <div class="numbertext">2 / 3</div>
  <img src="img_snow_wide.jpg" style="width:100%">
  <div class="text">Caption Two</div>
</div>

<div class="mySlides fade">
  <div class="numbertext">3 / 3</div>
  <img src="img_mountains_wide.jpg" style="width:100%">
  <div class="text">Caption Three</div>
</div>

<a class="prev" onclick="plusSlides(-1)">&#10094;</a>
<a class="next" onclick="plusSlides(1)">&#10095;</a>

</div>
<br>

<div style="text-align:center">
  <span class="dot" onclick="currentSlide(1)"></span> 
  <span class="dot" onclick="currentSlide(2)"></span> 
  <span class="dot" onclick="currentSlide(3)"></span> 
</div>

<script>
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

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
</script>
```
Above code used to make the image carousel in the projects section, found on w3schools

```
<a href="mailto:someone@example.com">
    <img src="" alt="">
</a>
```
Above code was found on w3schools

```
<div class="theme-switch-container">
                <label class="theme-slider" for="checkbox">
                    <input type="checkbox" id="checkbox" />
                    <div class="round slider"></div>
                </label>
                 
 
<p>use this slider to change theme</p>
 
 
            </div>

.theme-switch-container {
    display: flex;
    align-items: center;
}
 
.theme-slider {
    display: inline-block;
    height: 34px;
    position: relative;
    width: 60px;
}
 
.theme-slider input {
    display: none;
}
 
.slider {
    background-color: #ccc;
    bottom: 0;
    cursor: pointer;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    transition: .4s;
}
 
.slider:before {
    background-color: #fff;
    bottom: 4px;
    content: "";
    height: 26px;
    left: 4px;
    position: absolute;
    transition: .4s;
    width: 26px;
}
 
input:checked+.slider {
    background-color: #66bb6a;
}
 
input:checked+.slider:before {
    transform: translateX(26px);
}
 
.slider.round {
    border-radius: 34px;
}
 
.slider.round:before {
    border-radius: 50%;
}

const toggleSwitch =
    document.querySelector('.theme-slider input[type="checkbox"]');
 
/* Function to change theme */
function switchTheme(e) {
 
    /* Once checkbox is checked default theme change to dark */
    if (e.target.checked) {
        document.documentElement.setAttribute('theme', 'dark');
    }
 
    /* While page in dark mode and checkbox is
    checked then theme back to change light*/
    else {
        document.documentElement.setAttribute('theme', 'light');
    }
}
 
toggleSwitch.addEventListener('change', switchTheme, false);
```
Above code used to make theme slider was copied from [Geekforgeeks.org](https://www.geeksforgeeks.org/how-to-create-dark-theme-using-slider-in-css/).

# Portfolio-Webpage
