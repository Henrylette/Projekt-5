
//åbner mapper på MUS-side
function openMapperskema() {
  var x = document.getElementById("mapper-skema");
    
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

//åbner mapper på Note-side
function openMappernote() {
  var x = document.getElementById("mapper-noter");
    
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}