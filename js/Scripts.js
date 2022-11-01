// Precentage calculator
function precal() {
    var p1=document.getElementById("pn").value;
    var p2=document.getElementById("pt").value;
    document.getElementById("pr").value=((p1/p2)*100);
}

function ctop() {
    var p1=document.getElementById("cn").value;
    document.getElementById("cr").value=(7.1 * p1) + 11
}

