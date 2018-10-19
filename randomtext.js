let nameNum = 0;
const inName = document.getElementById('inName');
const nameBox = document.getElementsByClassName('namebox');
const abc = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const myName = inName.innerHTML.split("");

inName.innerHTML = '';

myName.map(()=> inName.innerHTML += "<span class='namebox'></span>");

function randomChange() {
  myName.map((name, i)=> {
    let random = Math.floor( Math.random() * abc.length );
    if (nameBox[nameNum + i]) nameBox[nameNum + i].innerHTML = abc[random];
  });
}

function setName() {
  let random = Math.floor( Math.random() * myName.length );
  if (nameBox[nameNum]) nameBox[nameNum].innerHTML = myName[nameNum];
  nameNum++;
}

setInterval(randomChange, 50);
setInterval(setName, 100);
