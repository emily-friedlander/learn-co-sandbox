document.addEventListener("DOMContentLoaded", function()
{

document.querySelector('#mainP').innherHTML='I am created with JS'

for (var i=1;i<50;i++){
  let newDiv = document.createElement("div")
  newDiv.innerHTML = `I am div ${i}`;
  let mainTag = document.querySelector("#mainP");
  mainTag.appendChild(newDiv)
}

});