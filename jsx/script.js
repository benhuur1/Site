let anoAtual = new Date().getFullYear();
document.getElementById("anoAtual").innerHTML = anoAtual;
let idadeAtual = 2023-1986;
document.getElementById("idadeAtual").innerHTML = anoAtual;
let nav = document.querySelector("#navFooter").clientHeight;
let footer = document.getElementById("footer");
footer.style.marginBottom = nav + "px";
$(document).ready(function () {
  $("").fadeIn("slow/400/fast", function () {});
});

document
  .getElementById("whats-chat")
  .addEventListener("mouseover", showchatbox);
document
  .getElementById("chat-top-right")
  .addEventListener("click", closechatbox);
document.getElementById("send-btn").addEventListener("click", sendmsg);
window.addEventListener("load", showchatboxtime);

function showchatbox() {
  document.getElementById("chat-box").style.right = "8%";
}

function closechatbox() {
  document.getElementById("chat-box").style.right = "-500px";
}

function showchatboxtime() {
  setTimeout(launchbox, 3000);
}

function launchbox() {
  document.getElementById("chat-box").style.right = "8%";
}

function sendmsg() {
  var msg = document.getElementById("whats-in").value;
  var relmsg = msg.replace(/ /g, "%20");
  window.open(
    "https://api.whatsapp.com/send?phone=5515997950067&text=" + relmsg,
    "_blank",
  );
}
