const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

menuToggle.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

var typed= new Typed(".text", {
    strings:["Frontend Developer", "Web Developer"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});

function sendEmail() {
  emailjs.init( { publicKey: '4AP6A4TsvGrGhZ112'} );

const name = document.getElementById('name').value.trim();
const email = document.getElementById('email').value.trim();
const message = document.getElementById('message').value.trim();

const params = {
  from_name: name,
  from_email: email,
  message: message,
};
emailjs  
  .send('service_qvfk6b3', 'template_tesie4n', params)
  .then(function() {
   alert("Email sent!");
})
  .catch(function() {
  alert("Failed to sent!");
});
}
