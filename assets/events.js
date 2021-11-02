//calling the function in window.onload to make sure the HTML is loaded
window.onload = function() {
    var btn = document.getElementById("demo");
    btn.addEventListener("click", myFunction);

    function myFunction() {
        alert(Math.random());
        btn.removeEventListener("click", myFunction);
    }
};