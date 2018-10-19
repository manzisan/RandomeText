let replaceCount = 0;
const inName = document.getElementById('inName');
const nameBox = document.getElementsByClassName('namebox');
const abc = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const myName = inName.innerHTML.split("");

inName.innerHTML = '';

myName.map(() => inName.innerHTML += "<span class='namebox'></span>");

function randomChange() {
  myName.map((name, i) => {
    let random = Math.floor(Math.random() * abc.length);
    if (nameBox[replaceCount + i]) nameBox[replaceCount + i].innerHTML = abc[random];
  });
}

function setName() {
  let random = Math.floor(Math.random() * myName.length);
  if (nameBox[replaceCount]) nameBox[replaceCount].innerHTML = myName[replaceCount];
  replaceCount++;
}

setInterval(randomChange, 50);
setInterval(setName, 100);