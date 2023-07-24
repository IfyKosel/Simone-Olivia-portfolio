//	the tooltip onhover for the icons
$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
});

//	changing the different texts on the home page
var typingEffect = new Typed(".multiText", {
    strings: ["Simone Olivia", "a Designer", "a Coder", "a Programmer"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 500,
})

//	the number counting in the about section
var count = document.getElementsByClassName("num");
var inc = [];
function numberCount() {
    for (let i = 0; i < count.length; i++) {
        inc.push(1);
        if (inc[i] != count[i].getAttribute("data-val")) {
            inc[i]++;
        }
        count[i].innerHTML = inc[i];
    }
}
var start = document.getElementById("about3");
window.onscroll = function () {
    var timer = setInterval(() => {
        var startCount = start.offsetTop;
        var endCount = start.offsetTop + start.clientHeight;
        var topScreen = window.pageYOffset;
        var btmScreen = window.pageYOffset + window.innerHeight;
        if (btmScreen > startCount && topScreen < endCount) {
            numberCount();
        }
        else {
            clearInterval(timer);
            for (let i = 0; i < count.length; i++) {
                count[i].innerHTML = 1;
                inc = [];
            }
        }
    }, 200);
}		