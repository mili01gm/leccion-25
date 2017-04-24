function newDiv(useURL){
  var contenedor = document.getElementById("contenedor");
  var div = document.createElement("div");
  var img = document.createElement("img");
  img.setAttribute("src",useURL);
  div.classList.add("contenedor-imagen");
  div.appendChild(img);
  contenedor.appendChild(div);
  return contenedor;
}

var inputUrl = document.getElementById("url");
function getURL(e){
  if(e.keyCode == 13){
    newDiv(this.value);
    // this.value = "";
  }
}
inputUrl.onkeydown = getURL;
