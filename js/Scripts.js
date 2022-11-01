// Basic Calucaltions
function precal() {
    var p1=document.getElementById("pn").value;
    var p2=document.getElementById("pt").value;
    document.getElementById("pr").value=((p1/p2)*100);
}
function ctop() {
    var p1=document.getElementById("cn").value;
    document.getElementById("cr").value=(7.1 * p1) + 11
}

//Engineering Maths
function mul(){
    var p00=document.getElementById("00").value;
    var p01=document.getElementById("01").value;
    var p02=document.getElementById("02").value;
    var p10=document.getElementById("10").value;
    var p11=document.getElementById("11").value;
    var p12=document.getElementById("12").value;
    var p20=document.getElementById("20").value;
    var p21=document.getElementById("21").value;
    var p22=document.getElementById("22").value;

    document.getElementById("a00").value=(p00*2);
    document.getElementById("a01").value=(p01*2);
    document.getElementById("a02").value=(p02*2);
    document.getElementById("a10").value=(p10*2);
    document.getElementById("a11").value=(p11*2);
    document.getElementById("a12").value=(p12*2);
    document.getElementById("a20").value=(p20*2);
    document.getElementById("a21").value=(p21*2);
    document.getElementById("a22").value=(p22*2);
}
function raise(){
    var p00=document.getElementById("00").value;
    var p01=document.getElementById("01").value;
    var p02=document.getElementById("02").value;
    var p10=document.getElementById("10").value;
    var p11=document.getElementById("11").value;
    var p12=document.getElementById("12").value;
    var p20=document.getElementById("20").value;
    var p21=document.getElementById("21").value;
    var p22=document.getElementById("22").value;

    document.getElementById("a00").value=(p00*p00);
    document.getElementById("a01").value=(p01*p01);
    document.getElementById("a02").value=(p02*p02);
    document.getElementById("a10").value=(p10*p10);
    document.getElementById("a11").value=(p11*p11);
    document.getElementById("a12").value=(p12*p12);
    document.getElementById("a20").value=(p20*p20);
    document.getElementById("a21").value=(p21*p21);
    document.getElementById("a22").value=(p22*p22);
}
function Trans(){
    var p00=document.getElementById("00").value;
    var p01=document.getElementById("01").value;
    var p02=document.getElementById("02").value;

    var p10=document.getElementById("10").value;
    var p11=document.getElementById("11").value;
    var p12=document.getElementById("12").value;

    var p20=document.getElementById("20").value;
    var p21=document.getElementById("21").value;
    var p22=document.getElementById("22").value;

    document.getElementById("a00").value=(p00);
    document.getElementById("a01").value=(p10);
    document.getElementById("a02").value=(p20);

    document.getElementById("a10").value=(p01);
    document.getElementById("a11").value=(p11);
    document.getElementById("a12").value=(p21);

    document.getElementById("a20").value=(p02);
    document.getElementById("a21").value=(p12);
    document.getElementById("a22").value=(p22);
}
function reset() {
    document.getElementById("00").value="";
    document.getElementById("01").value="";
    document.getElementById("02").value="";
    document.getElementById("10").value="";
    document.getElementById("11").value="";
    document.getElementById("12").value="";
    document.getElementById("20").value="";
    document.getElementById("21").value="";
    document.getElementById("22").value="";

    document.getElementById("a00").value="";
    document.getElementById("a01").value="";
    document.getElementById("a02").value="";
    document.getElementById("a10").value="";
    document.getElementById("a11").value="";
    document.getElementById("a12").value="";
    document.getElementById("a20").value="";
    document.getElementById("a21").value="";
    document.getElementById("a22").value="";
}

