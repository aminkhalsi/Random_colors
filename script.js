var text_color;
var back_ground_color;
function randColor() {
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    //if backgroundColor is too bright set text color to black, else white
    if ((red + green + blue) / 3 > 127) {
        text_color = 'rgb(0,0,0)';
    }
    else {
        text_color = 'rgb(255,255,255)';
    };
    back_ground_color = "rgb(" + red + "," + green + "," + blue + ")";
}
document.addEventListener("DOMContentLoaded", () => {
    var ul = document.querySelector("ul");
    ul.addEventListener("click", (e) => {
        if (e.target.tagName == "LI") {
            randColor()
            e.target.style.backgroundColor = back_ground_color;
            e.target.style.color = text_color;
        }
    });
});