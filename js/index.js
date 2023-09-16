const openMenuBtn = document.querySelector(".open-menu-btn");
const closeMenuBtn = document.querySelector(".close-menu-btn");
const menu = document.querySelector(".mob-menu");

const box = "Hello world";

const handleOpenMenu = (event) => {
  document.body.style.overflow = "hidden";
  menu.classList.add("visible");
  console.log(box);
};

const handleCloseMenu = (event) => {
  document.body.style.overflow = "auto";
  menu.classList.remove("visible");
};

openMenuBtn.addEventListener("click", handleOpenMenu);
closeMenuBtn.addEventListener("click", handleCloseMenu);

// =================SEARCH-FORM======================

const search = document.querySelector(".header-search");
const searchInput = document.querySelector(".header-search-input");
const searchImg = document.querySelector(".header-search-searchImg");
const closeImg = document.querySelector(".header-search-closeImg");

// const handleToggleSearch = (event) => {
//   const elements = event.currentTarget.children;

//   for (let element of elements) {
//     if (element.name === "searchInput") {
//       console.log(element);
//       element.className.includes("visible")
//         ? element.classList.remove("visible")
//         : element.classList.add("visible");
//     }
//   }

//   // search.classList.add("visible");
// };

const handleToggleSearch = (event) => {
  const btn = event.currentTarget;

  switch (btn.name) {
    case "searchImg":
      searchImg.classList.add("inVisible");
      closeImg.classList.remove("inVisible");
      searchInput.classList.add("visible");
      break;
    case "closeImg":
      closeImg.classList.add("inVisible");
      searchImg.classList.remove("inVisible");
      searchInput.classList.remove("visible");
      break;
    default:
      break;
  }
};

searchImg.addEventListener("click", handleToggleSearch);
closeImg.addEventListener("click", handleToggleSearch);
