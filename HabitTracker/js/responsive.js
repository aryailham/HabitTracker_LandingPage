function myFunction() {
    var x = document.getElementById("navbar");
    if (x.className === "responsive") {
        x.className = "";
    } else {
        x.className = "responsive";
    }
}