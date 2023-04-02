let form = document.querySelector("form");
let button = document.querySelector(".submit-button");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (document.querySelector("p")) {
    let p = document.querySelector("p");
    p.textContent = "";
  }

  let BASE_URL = "https://animechan.vercel.app/api/random/";
  let input = document.getElementById("search-field").value;

  fetch(`${BASE_URL}character?name=${input}`)
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("search-field").value = "";

      let quote = data.quote;
      // console.log(quote);

      if (input.toUpperCase()) {
        let p = document.querySelector("p");
        p.textContent = `"${quote}" - ${input.toUpperCase()}`;
      } else {
        let p = document.querySelector("p");
        p.textContent = "Character Not Found.";
      }
    })

    .catch((err) => console.error(err));
});

// quotes for character cards

// GOKU

let gokuQuote = document.querySelector(".Goku-quote");
fetch(`https://animechan.vercel.app/api/random/character?name=Goku`)
  .then((response) => response.json())
  .then((data) => {
    let quote = data.quote;
    gokuQuote.textContent = `"${quote}"`;
  });

// KENPACHI

let kenpachiQuote = document.querySelector(".kenpachi-quote");
fetch(`https://animechan.vercel.app/api/random/character?name=kenpachi`)
  .then((response) => response.json())
  .then((data) => {
    let quote = data.quote;
    kenpachiQuote.textContent = `"${quote}"`;
  });

// ITACHI

let itachiQuote = document.querySelector(".itachi-quote");
fetch(`https://animechan.vercel.app/api/random/character?name=itachi`)
  .then((response) => response.json())
  .then((data) => {
    let quote = data.quote;
    itachiQuote.textContent = `"${quote}"`;
  });

// HOLLOW ICHIGO

let hollowIchigoQuote = document.querySelector(".hollowIchigo-quote");
fetch(`https://animechan.vercel.app/api/random/character?name=hollow ichigo`)
  .then((response) => response.json())
  .then((data) => {
    let quote = data.quote;
    hollowIchigoQuote.textContent = `"${quote}"`;
  });

// ED ELRIC

let edwardElricQuote = document.querySelector(".edwardElric-quote");
fetch(`https://animechan.vercel.app/api/random/character?name=Elric`)
  .then((response) => response.json())
  .then((data) => {
    let quote = data.quote;
    edwardElricQuote.textContent = `"${quote}"`;
  });

// YORUICHI

let yoruichiQuote = document.querySelector(".yoruichi-quote");
fetch(`https://animechan.vercel.app/api/random/character?name=yoruichi`)
  .then((response) => response.json())
  .then((data) => {
    let quote = data.quote;
    yoruichiQuote.textContent = `"${quote}"`;
  });

// VEGETA

let vegetaQuote = document.querySelector(".vegeta-quote");
fetch(`https://animechan.vercel.app/api/random/character?name=vegeta`)
  .then((response) => response.json())
  .then((data) => {
    let quote = data.quote;
    vegetaQuote.textContent = `"${quote}"`;
  });

// NARUTO

let narutoQuote = document.querySelector(".naruto-quote");
fetch(`https://animechan.vercel.app/api/random/character?name=naruto`)
  .then((response) => response.json())
  .then((data) => {
    let quote = data.quote;
    narutoQuote.textContent = `"${quote}"`;
  });

// URAHARA

let kisukeUraharaQuote = document.querySelector(".kisukeUrahara-quote");
fetch(`https://animechan.vercel.app/api/random/character?name=Urahara`)
  .then((response) => response.json())
  .then((data) => {
    let quote = data.quote;
    kisukeUraharaQuote.textContent = `"${quote}"`;
  });
