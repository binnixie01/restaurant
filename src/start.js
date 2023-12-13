import aboutLoad from "./about";
import aboutPage from "./about";
import contactLoad from "./contact";
import homeLoad from "./home";
import Home from "./home";
import './style.css'
const createHeader = () => {
  const header = document.createElement("header");
  const restaurantName = document.createElement("h1");
  restaurantName.innerText = "Binson gi Biryani BB";
  header.appendChild(restaurantName);
  header.appendChild(navBar());
  header.classList.add("flex", "flex-col", "items-center", "gap-20");

  return header;
};

const navBar = () => {
  const nav = document.createElement("nav");
nav.classList.add()
  const home = document.createElement("button");
  home.classList.add("navButton");
  home.innerText = "Home";
  home.addEventListener("click", (e) => {
    setActive(home);
    homeLoad()
  });

  const menu = document.createElement("button");
  menu.classList.add("navButton");
  menu.innerText = "Menu";
  menu.addEventListener('click',(e)=>{
    setActive(menu)
  })

  const contact = document.createElement("button");
  contact.classList.add("navButton");
  contact.innerText = "Contact";
  contact.addEventListener('click',(e)=>{
    setActive(contact)
    contactLoad()
})
  const about = document.createElement("button");
  about.classList.add("navButton");
  about.innerText = "About this Project";
  about.addEventListener('click',(e)=>{
    setActive(about)
    aboutLoad()
})
  nav.appendChild(home);
  nav.appendChild(menu);
  nav.appendChild(contact);
  nav.appendChild(about)
  nav.classList.add("flex", "gap-10");
  return nav;
};


const setActive = (button) => {
  const buttons = document.querySelectorAll(".navButton");
  buttons.forEach((but) => {
    if (but !== button) {
      but.classList.remove("active");
    }
  });
  button.classList.add("active");
};


const createswap=()=>{
    const swapSection = document.createElement('div')
    swapSection.setAttribute('id','swap')
return swapSection
}

const initialPage = () => {
  const content = document.getElementById("content");

  content.appendChild(createHeader());
content.appendChild(createswap())
};

export default initialPage;
