function Cmove() {
    var elem = document.getElementById("CBar");   
    var width = 0;
    var id = setInterval(frame, 0);
    function frame() {
      if (width >= 75) {
        clearInterval(id);
      } else {
        width++; 
        elem.style.width = width + '%'; 
        document.getElementById("Clabel").innerHTML = width * 1  + '%';
      }
    }
  }
  function C1move() {
    var elem = document.getElementById("C1Bar");   
    var width = 0;
    var id = setInterval(frame, 0);
    function frame() {
      if (width >= 80) {
        clearInterval(id);
      } else {
        width++; 
        elem.style.width = width + '%'; 
        document.getElementById("C1label").innerHTML = width * 1  + '%';
      }
    }
  } 
  function javamove() {
    var elem = document.getElementById("javaBar");   
    var width = 0;
    var id = setInterval(frame, 0);
    function frame() {
      if (width >= 90) {
        clearInterval(id);
      } else {
        width++; 
        elem.style.width = width + '%'; 
        document.getElementById("javalabel").innerHTML = width * 1  + '%';
      }
    }
  } 

  function hcjmove() {
    var elem = document.getElementById("hcjBar");   
    var width = 0;
    var id = setInterval(frame, 0);
    function frame() {
      if (width >= 90) {
        clearInterval(id);
      } else {
        width++; 
        elem.style.width = width + '%'; 
        document.getElementById("hcjlabel").innerHTML = width * 1  + '%';
      }
    }
  } 