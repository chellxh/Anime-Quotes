function oneCheck(checkbox) {
  let checkboxes = document.getElementsByName("check");
  checkboxes.forEach((item) => {
    if (item !== checkbox) item.checked = false;
  });
}
let main = document.querySelector("main");

document.querySelector("button").addEventListener("click", (event) => {
  event.preventDefault();

  let checkY = document.getElementById("yes");
  let checkN = document.getElementById("no");
  if (checkY) {
    let p = document.createElement("p");
    p.append(document.querySelector("form"));
  } else if (checkN) {
    let p = document.createElement("p");
    p.append(document.querySelector("form"));
  }
});
