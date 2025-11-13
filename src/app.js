import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here

  let pronouns = ['the', 'our'];
  let adj = ['great', 'big'];
  let nouns = ['jogger', 'racoon'];
  let tld = ['.com']

  const container = this.document.querySelector("#domains");


  for (const pronoun of pronouns) {
    for (const adjective of adj) {
      for (const noun of nouns) {
        for (const extention of tld) {
          let domain = `${pronoun}${adjective}${noun}${extention}`;
          console.log(domain);
          container.innerHTML += `<p>${domain}</p>`;
        }
      }
    }
  }










};
