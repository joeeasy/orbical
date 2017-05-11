var modal = document.getElementById('myModal');
var myModal2 = document.getElementById('myModal2');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
    myModal2.style.display = 'none';
}

// When the user clicks on <span> (x), close the modal
span.onclick = function toggle() {
    modal.style.display = "none";
    myModal2.style.display = 'block';
}

// When the user clicks anywhere outside of the modal, close it
window.onload = function(event) {
    if (event.target == modal) {
        modal.style.display = "block";
    }

}
window.onload = modal.display = "block";
///

///
