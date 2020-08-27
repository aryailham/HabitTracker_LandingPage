// function burgerMenu() {
//     var x = document.getElementById("check");
//     if (x.className === "responsive") {
//         x.className = "";
//     } else {
//         x.className = "responsive";
//     }
// }

// document.getElementById("check").onclick = function() {
//     var menu = document.getElementById("navigationMenu")
//     if (this.checked) {
//         menu.style.left = "0";
//     } else {
//         menu.style.left = "-100%"
//     }
// }

$(document).ready(function() {
    $('#check').click(function() {
        if ($(this).prop("checked") == true) {
            var menu = document.getElementById("navigationMenu")
            menu.style.right = "0";
        } else {
            var menu = document.getElementById("navigationMenu")
            menu.style.right = "-100%";
        }
    });

    $('li').click(function() {
        var menu = document.getElementById("navigationMenu")
        menu.style.right = "-100%";
    });
});

$(window).scroll(function() {
    if (('#check:checkbox:checked').length != 0) {
        $('#check').prop('checked', false);
        var menu = document.getElementById("navigationMenu")
        menu.style.right = "-100%";
    }
});