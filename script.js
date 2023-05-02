var image = document.getElementById("image");
var texte = document.getElementById("texte");
var titre =  document.getElementById("titre");
var marge =  document.getElementById("marge");
var originalLeft = image.style.left;


image.addEventListener("mouseover", function() {
  titre.style.display = "none";
  marge.style.display = "block";
  image.style.left = "-197px";
  texte.style.display = "block";
});

image.addEventListener("mouseout", function() {
  marge.style.display = "none";
  titre.style.display = "block";
  image.style.left = originalLeft;
  texte.style.display = "none";
});


var image1 = document.getElementById("image1");
var texte1 = document.getElementById("texte1");
var titre1 =  document.getElementById("titre1");
var marge1 =  document.getElementById("marge1");
var originalLeft = image1.style.left;

image1.addEventListener("mouseover", function() {
  titre1.style.display = "none";
  marge1.style.display = "block";
  image1.style.left = "-197px";
  texte1.style.display = "block";
});

image1.addEventListener("mouseout", function() {
  marge1.style.display = "none";
  titre1.style.display = "block";
  image1.style.left = originalLeft;
  texte1.style.display = "none";
});

var image2 = document.getElementById("image2");
var texte2 = document.getElementById("texte2");
var titre2 =  document.getElementById("titre2");
var marge2 =  document.getElementById("marge2");
var originalLeft = image2.style.left;

image2.addEventListener("mouseover", function() {
  titre2.style.display = "none";
  marge2.style.display = "block";
  image2.style.left = "-197px";
  texte2.style.display = "block";
});

image2.addEventListener("mouseout", function() {
  marge2.style.display = "none";
  titre2.style.display = "block";
  image2.style.left = originalLeft;
  texte2.style.display = "none";
});
var image3 = document.getElementById("image3");
var texte3 = document.getElementById("texte3");
var titre3 =  document.getElementById("titre3");
var marge3 =  document.getElementById("marge3");
var originalLeft = image3.style.left;

image3.addEventListener("mouseover", function() {
  titre3.style.display = "none";
  marge3.style.display = "block";
  image3.style.left = "-197px";
  texte3.style.display = "block";
});

image3.addEventListener("mouseout", function() {
  marge3.style.display = "none";
  titre3.style.display = "block";
  image3.style.left = originalLeft;
  texte3.style.display = "none";
});

var image4 = document.getElementById("image4");
var texte4 = document.getElementById("texte4");
var titre4 =  document.getElementById("titre4");
var marge4 =  document.getElementById("marge4");
var originalLeft = image4.style.left;

image4.addEventListener("mouseover", function() {
  titre4.style.display = "none";
  marge4.style.display = "block";
  image4.style.left = "-197px";
  texte4.style.display = "block";
});

image4.addEventListener("mouseout", function() {
  marge4.style.display = "none";
  titre4.style.display = "block";
  image4.style.left = originalLeft;
  texte4.style.display = "none";
});