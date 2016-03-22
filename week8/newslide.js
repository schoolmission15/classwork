var imgs = ["monkey.jpg",
            "pelican.jpg",
            "tiger.jpg"
           ];

var labels = [
            "Im a monkey",
            "Feed me",
            "No Games Here"
];

var slideshow = document.createElement("div");
slideshow.id = "slideshow";
console.log(document.getElementById("container"));
document.getElementById("container").appendChild(slideshow);

var slides =[];

for (var i = 0; i < imgs.length; i++) {
var d = document.createElement("div");
    d.className = "slide";
    d.id = "s"+i;
    var im  = new Image();
    im.src =  "images/" + imgs[i];
    var l = document.createElement("div");
    l.className = "label";
    l.innerHTML = labels[i];
    console.log(im.src);
    d.appendChild(im);
    d.appendChild(l);
    slideshow.appendChild(d);
    console.log(d);
    slides.push(d);
}
console.log(slides);
slides[Math.floor(Math.random()*slides.length)].style.display = "block";

console.log(slides);
