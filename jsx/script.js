if (
  document.getElementById("anoAtual") &&
  document.getElementById("idadeAtual")
) {
  function getAge(dateString) {
    const today = new Date();
    const birthDate = new Date(dateString);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();

    if (m < 0 || (m === 0) & (today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }
  let anoAtual = new Date().getFullYear();
  document.getElementById("anoAtual").innerHTML = anoAtual;
  document.getElementById("idadeAtual").innerHTML = getAge("1986/05/15");
}
let nav = document.querySelector("#navFooter").clientHeight;
let footer = document.getElementById("footer");
footer.style.marginBottom = nav + "px";
