const Home = () => {
  const homeSection = document.createElement("div");
  homeSection.setAttribute("id", "homePage");
  const intro = document.createElement("div");
  intro.innerText =
    "Welcome to the Binsonpaaji's Biryani House where spices dance and flavors unite—a world centered around the aromatic allure of biryani. Our platform is a homage to this culinary marvel, celebrating its rich history, diverse renditions, and the artistry behind its creation. From traditional recipes passed down through generations to modern interpretations that push the boundaries of taste, we invite you on a flavorful journey that transcends borders and brings people together. Join us as we explore, savor, and share the magic of biryani—one tantalizing spoonful at a time. Here you will taste the best biryani in the state.";

  homeSection.appendChild(intro);
  return homeSection;
};

const homeLoad = () => {
  const swap = document.getElementById("swap");
  swap.innerText = "";
  swap.appendChild(Home());
};

export default homeLoad;
