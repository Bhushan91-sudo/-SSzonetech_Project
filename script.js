function editContact() {
    document.getElementById("phone").readOnly = false;
    document.getElementById("email").readOnly = false;
    document.getElementById("phone").focus();
}


var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

document.addEventListener("DOMContentLoaded", function() {
  // Get all navigation links
  var navLinks = document.querySelectorAll("nav ul li a");

  // Loop through each link
  navLinks.forEach(function(link) {
      // Add click event listener
      link.addEventListener("click", function(event) {
          // Remove "active" class from all links
          navLinks.forEach(function(link) {
              link.classList.remove("active");
          });

          // Add "active" class to the clicked link
          event.target.classList.add("active");
      });
  });

  // Additional handling for the "Log In" link
  var loginLink = document.querySelector("nav ul li a.login");
  if (loginLink) {
      loginLink.addEventListener("click", function(event) {
          // Remove "active" class from all links
          navLinks.forEach(function(link) {
              link.classList.remove("active");
          });

          // Add "active" class to the "Log In" link
          event.target.classList.add("active");
      });
  }
});