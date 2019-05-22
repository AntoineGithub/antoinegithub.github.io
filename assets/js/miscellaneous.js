function topnavMenu() {
    var x = document.getElementById("navBar");
    if (!x.classList.contains("open")) {
        x.classList.add("open");
    } else {
        x.classList.remove("open");
    }
}

function wip() {
    alert("! Page en cours de construction !")
}