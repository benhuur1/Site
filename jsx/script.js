if(document.getElementById("anoAtual") && document.getElementById("idadeAtual")){
  let anoAtual = new Date().getFullYear();
document.getElementById("anoAtual").innerHTML = anoAtual;
let idadeAtual = 2023-1986;
document.getElementById("idadeAtual").innerHTML = idadeAtual;
}
let nav = document.querySelector("#navFooter").clientHeight;
let footer = document.getElementById("footer");
footer.style.marginBottom = nav + "px";