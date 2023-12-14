//Get the button
let mybutton = document.getElementById("scroll-to-top-btn");

window.onscroll = function() {
    scroll();
};

function scroll() {
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
        mybutton.style.display = "block";

    } else {
        mybutton.style.display = "none";
    }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", scrollToTop);

function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
