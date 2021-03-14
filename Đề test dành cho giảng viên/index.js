var videoModal = document.getElementById("myModal");
var videoOpenBtn = document.querySelector(".playVideo");
var videoCloseBtn = document.getElementsByClassName("close")[0];

var close1 = document.getElementsByClassName("close1")[0];
var modal1 = document.getElementById("myModal-1");
var btn1 = document.querySelector("#modal-1");

var modal2 = document.getElementById("myModal-2");
var btn2 = document.querySelector("#modal-2");
var close2 = document.getElementsByClassName("close2")[0];

var close3 = document.getElementsByClassName("close3")[0];
var modal3 = document.getElementById("myModal-3");
var btn3 = document.querySelector("#modal-3");

var close4 = document.getElementsByClassName("close4")[0];
var modal4 = document.getElementById("myModal-4");
var btn4 = document.querySelector("#modal-4");

function addModelEvent(openButton, closeButton, modal) {
  openButton.onclick = function (){
    modal.style.display = "block"
  }

  closeButton.onclick = function (){
    modal.style.display = "none"
  }
}

addModelEvent(videoOpenBtn, videoCloseBtn, videoModal)

addModelEvent(btn1, close1, modal1)

addModelEvent(btn2, close2, modal2)

addModelEvent(btn3, close3, modal3)

addModelEvent(btn4, close4, modal4)



