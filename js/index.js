// Modal Variables
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

// Display modal on page load
window.onload = function() {
    modal.style.display = "block";
}

// Close modal when user clicks on X (span)
span.onclick = function() {
    modal.style.display = "none";
}

// Close modal when user clicks anywhere outside of modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}