

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
    var outputSkema1 = document.getElementById("input1").value; 
    var outputSkema2 = document.getElementById("input2").value;
    var outputSkema3 = document.getElementById("input3").value; 
    var outputSkema4 = document.getElementById("input4").value; 
    var outputSkema5 = document.getElementById("input5").value;
    
    //skema - Et stærkt team
    var outputSkema6 = document.getElementById("input6").value; 
    var outputSkema7 = document.getElementById("input7").value;
    var outputSkema8 = document.getElementById("input8").value; 
    var outputSkema9 = document.getElementById("input9").value; 
    var outputSkema10 = document.getElementById("input10").value;
    
    //skema - God karma
    var outputSkema11 = document.getElementById("input11").value; 
    var outputSkema12 = document.getElementById("input12").value;
    var outputSkema13 = document.getElementById("input13").value; 
    var outputSkema14 = document.getElementById("input14").value; 
    var outputSkema15 = document.getElementById("input15").value;
    
     //skema - Ha’ det sjovt
    var outputSkema16 = document.getElementById("input16").value; 
    var outputSkema17 = document.getElementById("input17").value;
    var outputSkema18 = document.getElementById("input18").value; 
    var outputSkema19 = document.getElementById("input19").value; 
    var outputSkema20 = document.getElementById("input20").value;
    
     //skema - Det kommende år
    var outputSkema21 = document.getElementById("input21").value; 
    var outputSkema22 = document.getElementById("input22").value;
    var outputSkema23 = document.getElementById("input23").value; 
    var outputSkema24 = document.getElementById("input24").value; 
    
     //skema - Dine mål
    var outputSkema25 = document.getElementById("input25").value; 
    var outputSkema26 = document.getElementById("input26").value;
    var outputSkema27 = document.getElementById("input27").value; 
    
    
    //Udviklingsplan
    var outputSkema28 = document.getElementById("input28").value; 
    var outputSkema29 = document.getElementById("input29").value;
    var outputSkema30 = document.getElementById("input30").value; 
    var outputSkema31 = document.getElementById("input31").value; 
    var outputSkema32 = document.getElementById("input32").value;

 
    //skema - Højt drive
    document.getElementById("output1").innerText = outputSkema1; 
    document.getElementById("output2").innerText = outputSkema2;
    document.getElementById("output3").innerText = outputSkema3;
    document.getElementById("output4").innerText = outputSkema4;
    document.getElementById("output5").innerText = outputSkema5;
    
    //skema - Et stærkt team
    document.getElementById("output6").innerText = outputSkema6; 
    document.getElementById("output7").innerText = outputSkema7;
    document.getElementById("output8").innerText = outputSkema8;
    document.getElementById("output9").innerText = outputSkema9;
    document.getElementById("output10").innerText = outputSkema10;
    
    //skema - God karma
    document.getElementById("output11").innerText = outputSkema11; 
    document.getElementById("output12").innerText = outputSkema12;
    document.getElementById("output13").innerText = outputSkema13;
    document.getElementById("output14").innerText = outputSkema14;
    document.getElementById("output15").innerText = outputSkema15;
    
    //skema - Ha' det sjovt
    document.getElementById("output16").innerText = outputSkema16; 
    document.getElementById("output17").innerText = outputSkema17;
    document.getElementById("output18").innerText = outputSkema18;
    document.getElementById("output19").innerText = outputSkema19;
    document.getElementById("output20").innerText = outputSkema20;

    //skema - Det kommende år
    document.getElementById("output21").innerText = outputSkema21; 
    document.getElementById("output22").innerText = outputSkema22;
    document.getElementById("output23").innerText = outputSkema23;
    document.getElementById("output24").innerText = outputSkema24;
    
    //skema - Dine mål 
    document.getElementById("output25").innerText = outputSkema25; 
    document.getElementById("output26").innerText = outputSkema26;
    document.getElementById("output27").innerText = outputSkema27;
    
    //skema - Udviklingsplan
    document.getElementById("output28").innerText = outputSkema28; 
    document.getElementById("output29").innerText = outputSkema29;
    document.getElementById("output30").innerText = outputSkema30;
    document.getElementById("output31").innerText = outputSkema31;
    document.getElementById("output32").innerText = outputSkema32;

}

