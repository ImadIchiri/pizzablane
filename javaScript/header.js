const toggleMenu = document.getElementById("toggle_menu");
const mainMenu = document.getElementById("main_menu");
const [...mainMenuItems] = document.querySelectorAll(".list .list_item a");

// Function To Add Event Listeners
const addEvent = (element, event, func) => {
  element.forEach((elem) => {
    elem.addEventListener(event, func);
  });
};

/*  ================== Toggle Active For mainMenuItems ==================  */
addEvent(mainMenuItems, "click", () => {});

mainMenuItems.forEach((elem) =>
  addEvent([elem], "click", () => {
    mainMenuItems.forEach((ele) => {
      ele.classList.remove("active");
    });
    elem.classList.add("active");
  })
);

/*  ================== Show & Hide The mainMenu ==================  */

// Add Click Event To The 'toggleMenu'
addEvent([toggleMenu], "click", () => {
  mainMenu.classList.toggle("visible");
});

// Add Click Event To The mainMenuItems
addEvent(mainMenuItems, "click", () => {
  mainMenu.classList.toggle("visible");
});
