document.addEventListener("DOMContentLoaded", function() {
    var options = {
        strings: ["I'm a full stack developer", "I'm a software engineer"],
        typeSpeed: 50,
        backSpeed: 50,
        loop: true
    };
    var typed = new Typed("#typewriter-text", options);
    console.log(typed);
});
