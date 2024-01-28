import contactLoad from "./contact";
import aboutLoad from "./about";
import homeLoad from "./home";
import menuLoad from "./menu"

// header and nav
const header = document.querySelector("header")
const nav = document.querySelector("nav")
const home = document.createElement("button");
const menu = document.createElement("button");
const contact = document.createElement("button");
const about = document.createElement("button");
home.innerText = "Home";
menu.innerText = "Menu";
contact.innerText = "Contact";
about.innerText = "About this Project";

nav.appendChild(home);
nav.appendChild(menu);
nav.appendChild(contact);
nav.appendChild(about)

const content = document.getElementById("content")
contact.addEventListener('click', (e) => {
    contactLoad(content)
})
about.addEventListener('click', (e) => {
    aboutLoad(content)
})
home.addEventListener('click', (e) => {
    homeLoad(content)
})
menu.addEventListener('click', (e) => {
    menuLoad(content)
})
const buttons = document.querySelectorAll("nav button")
// buttons.forEach(button=>{})

homeLoad(content)