window.onload = function() {
  var flag = false;
  var nameNum = 0;
  var inName = document.getElementById('inName');
  var nameBox = document.getElementsByClassName('namebox');
  var abc = new Array("A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z");
  var myName = new Array();

  for (var i = 0; i < inName.innerHTML.length; i++) {
    myName[i] = inName.innerHTML.charAt(i);
  }

  inName.innerHTML = "";

  for (var i = 0; i < myName.length; i++) {
    inName.innerHTML += "<span class='namebox'></span>";
  }

  function randomChange() {
    for (var i = 0; i < myName.length; i++) {
      var random = Math.floor( Math.random() * 22 );
      if(flag) {
        nameBox[i].innerHTML = abc[random];
      }
      if(!flag) {
        try {
          nameBox[nameNum + i].innerHTML = abc[random];
        } catch(e) {
          // for no alert
        }
      }
    }
  }

  function setName() {
    var random = Math.floor( Math.random() * myName.length );
    nameBox[nameNum].innerHTML = myName[nameNum];
    nameNum++;
    // if end of random change logic
    if (nameNum == myName.length) {
      flag = "";
      return;
    }
    setTimeout(setName,100);
  }

  setInterval(randomChange,50);
  setName();
}