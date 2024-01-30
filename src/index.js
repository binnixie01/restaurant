import contactLoad from "./contact";
import aboutLoad from "./about";
import homeLoad from "./home";
import menuLoad from "./menu"
import "./style.css"

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
    setActive(e.target)
    contactLoad(content)
})
about.addEventListener('click', (e) => {
    setActive(e.target)
    aboutLoad(content)
    
})
home.addEventListener('click', (e) => {
    setActive(e.target)
    homeLoad(content)
})
menu.addEventListener('click', (e) => {
    setActive(e.target)
    menuLoad(content)
})
const buttons = document.querySelectorAll("nav button")
const setActive=(button)=>{
    buttons.forEach(but=>but.classList.remove("active"))
    button.classList.add("active")

}

homeLoad(content)