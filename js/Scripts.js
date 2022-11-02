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
    for (let i = 0; i <3; i++) {
        for (let j = 0; j < 3; j++) {
            var c=i.toString()+j.toString();
            document.getElementById(c).value="";
            var r="a";
            r+=c;
            document.getElementById(r).value="";
        }
        
    }
}

// Methods for Matrix double 
function add(){
    for (let i = 0; i <3; i++) {
        for (let j = 0; j < 3; j++) {
            var c=i.toString()+j.toString();
            var A="A"+c;
            var B="B"+c;
            var r="R"+c;
            let a=document.getElementById(A).value;
            let b=document.getElementById(B).value;
            document.getElementById(r).value= parseInt(a)+ parseInt(b);
        }
        
    }
}
function sub(){
    for (let i = 0; i <3; i++) {
        for (let j = 0; j < 3; j++) {
            var c=i.toString()+j.toString();
            var A="A"+c;
            var B="B"+c;
            var r="R"+c;
            let a=document.getElementById(A).value;
            let b=document.getElementById(B).value;
            document.getElementById(r).value= parseInt(a)-parseInt(b);
        }
        
    }
}
function div1(){
    for (let i = 0; i <3; i++) {
        for (let j = 0; j < 3; j++) {
            var c=i.toString()+j.toString();
            var A="A"+c;
            var B="B"+c;
            var r="R"+c;
            let a=document.getElementById(A).value;
            let b=document.getElementById(B).value;
            document.getElementById(r).value= parseInt(a)/parseInt(b);
        }
        
    }
}
function mul1(){
    for (let i = 0; i <3; i++) {
        for (let j = 0; j < 3; j++) {
            var c=i.toString()+j.toString();
            var A="A"+c;
            var B="B"+c;
            var r="R"+c;
            let a=document.getElementById(A).value;
            let b=document.getElementById(B).value;
            document.getElementById(r).value= parseInt(a)*parseInt(b);
        }
        
    }
}
function reset1(){
    for (let i = 0; i <3; i++) {
        for (let j = 0; j < 3; j++) {
            var c=i.toString()+j.toString();
            var A="A";
            A+=c;
            document.getElementById(A).value="";
            var B="B";
            B+=c;
            document.getElementById(B).value="";
            var r="R";
            r+=c;
            document.getElementById(r).value="";
        }
        
    }
}

//scientifc Cal
function sciCal(){
    var f=document.getElementById("f").value;
    var c=document.getElementById("c").value;
    var k=document.getElementById("k").value;

    if(f!=""){ 
        ftk=(((f-32)*5)/9)+273.15;
        ftc=((f-32)*5)/9;
        document.getElementById("c").value=ftc;
        document.getElementById("k").value=ftk;
    }

    if(c!=""){
        ctk=parseInt(c)+273.15;
        ctf=((c*9)/5)+32;
        document.getElementById("f").value=ctf;
        document.getElementById("k").value=ctk;
    }

    if(k!=""){
        ktc=k-273.15;
        ktf=(((k-273.15)*9)/5)+32;
        document.getElementById("c").value=ktc;
        document.getElementById("f").value=ktf;
    }
   
}
function srest() {
    document.getElementById("f").value="";
    document.getElementById("c").value="";
    document.getElementById("k").value="";
}