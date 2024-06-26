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


(function () {
    emailjs.init({publickey:'q1R_ZvmI-TukCIw_r'}); // Replace with your user ID from EmailJS
})();

document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const serviceID = 'service_iu4r9wa'; // Replace with your service ID from EmailJS
    const templateID = 'template_7esykyo'; // Replace with your template ID from EmailJS

    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            alert('Message sent successfully!');
        }, (err) => {
            alert(JSON.stringify(err));
        });
});