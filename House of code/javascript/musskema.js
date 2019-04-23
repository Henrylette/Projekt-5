
//Funktion som viser en del af skemaet
var currentSkema = 0; 
showTab(currentSkema); 

function showTab(n){
    
    var x = document.getElementsByClassName("mus-skema-box"); 
    x[n].style.display = "table"; 
}

// Funktion som viser hvert step i skemaet ved brug af knapperne
function next(n){

var x = document.getElementsByClassName("mus-skema-box"); 
 
  x[currentSkema].style.display = "none";

  currentSkema = currentSkema + n;
    
 showTab(currentSkema); 
}

//Funktion som viser den skrevende tekst når brugeren trykker på preview 

function showPreview() {

    
    //skema - Højt drive
    var indputSkema1 = document.getElementById("input1").value; 
    var indputSkema2 = document.getElementById("input2").value;
    var indputSkema3 = document.getElementById("input3").value; 
    var indputSkema4 = document.getElementById("input4").value; 
    var indputSkema5 = document.getElementById("input5").value;
    
    //skema - Et stærkt team
    var indputSkema6 = document.getElementById("input6").value; 
    var indputSkema7 = document.getElementById("input7").value;
    var indputSkema8 = document.getElementById("input8").value; 
    var indputSkema9 = document.getElementById("input9").value; 
    var indputSkema10 = document.getElementById("input10").value;
    
    //skema - God karma
    var indputSkema11 = document.getElementById("input11").value; 
    var indputSkema12 = document.getElementById("input12").value;
    var indputSkema13 = document.getElementById("input13").value; 
    var indputSkema14 = document.getElementById("input14").value; 
    var indputSkema15 = document.getElementById("input15").value;
    
     //skema - Ha’ det sjovt
    var indputSkema16 = document.getElementById("input16").value; 
    var indputSkema17 = document.getElementById("input17").value;
    var indputSkema18 = document.getElementById("input18").value; 
    var indputSkema19 = document.getElementById("input19").value; 
    var indputSkema20 = document.getElementById("input20").value;
    
     //skema - Det kommende år
    var indputSkema21 = document.getElementById("input21").value; 
    var indputSkema22 = document.getElementById("input22").value;
    var indputSkema23 = document.getElementById("input23").value; 
    var indputSkema24 = document.getElementById("input24").value; 
    
     //skema - Dine mål
    var indputSkema25 = document.getElementById("input25").value; 
    var indputSkema26 = document.getElementById("input26").value;
    var indputSkema27 = document.getElementById("input27").value; 
    
    
    //Udviklingsplan
    var indputSkema28 = document.getElementById("input28").value; 
    var indputSkema29 = document.getElementById("input29").value;
    var indputSkema30 = document.getElementById("input30").value; 
    var indputSkema31 = document.getElementById("input31").value; 
    var indputSkema32 = document.getElementById("input32").value;

 
    //skema - Højt drive
    document.getElementById("output1").innerText = indputSkema1; 
    document.getElementById("output2").innerText = indputSkema2;
    document.getElementById("output3").innerText = indputSkema3;
    document.getElementById("output4").innerText = indputSkema4;
    document.getElementById("output5").innerText = indputSkema5;
    
    //skema - Et stærkt team
    document.getElementById("output6").innerText = indputSkema6; 
    document.getElementById("output7").innerText = indputSkema7;
    document.getElementById("output8").innerText = indputSkema8;
    document.getElementById("output9").innerText = indputSkema9;
    document.getElementById("output10").innerText = indputSkema10;
    
    //skema - God karma
    document.getElementById("output11").innerText = indputSkema11; 
    document.getElementById("output12").innerText = indputSkema12;
    document.getElementById("output13").innerText = indputSkema13;
    document.getElementById("output14").innerText = indputSkema14;
    document.getElementById("output15").innerText = indputSkema15;
    
    //skema - Ha' det sjovt
    document.getElementById("output16").innerText = indputSkema16; 
    document.getElementById("output17").innerText = indputSkema17;
    document.getElementById("output18").innerText = indputSkema18;
    document.getElementById("output19").innerText = indputSkema19;
    document.getElementById("output20").innerText = indputSkema20;

    //skema - Det kommende år
    document.getElementById("output21").innerText = indputSkema21; 
    document.getElementById("output22").innerText = indputSkema22;
    document.getElementById("output23").innerText = indputSkema23;
    document.getElementById("output24").innerText = indputSkema24;
    
    //skema - Dine mål 
    document.getElementById("output25").innerText = indputSkema25; 
    document.getElementById("output26").innerText = indputSkema26;
    document.getElementById("output27").innerText = indputSkema27;
    
    //skema - Udviklingsplan
    document.getElementById("output28").innerText = indputSkema28; 
    document.getElementById("output29").innerText = indputSkema29;
    document.getElementById("output30").innerText = indputSkema30;
    document.getElementById("output31").innerText = indputSkema31;
    document.getElementById("output32").innerText = indputSkema32;

}

