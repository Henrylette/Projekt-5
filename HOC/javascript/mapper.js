
//åbner mapper på MUS-side
function openMapperskema() {
  var x = document.getElementById("mapper-skema");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

//åbner mapper på Note-side
function openMappernote() {
  var x = document.getElementById("mapper-noter");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}