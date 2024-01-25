var form = document.getElementById("mainForm");

mainForm.addEventListener("submit", function(e){
  e.preventDefault();
  var total = document.getElementById("totalBalas");
  var real = document.getElementById("realBalas");
  
  
  var prob = parseInt((real.value/total.value)*100);
  var result = document.getElementById("resultProb");
  result.innerHTML = ('São '+prob+'% de chances de ser uma bala real');
  
});
