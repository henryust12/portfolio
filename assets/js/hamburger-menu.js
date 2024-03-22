function toggleHamburgerMenu() {
    document.getElementById("burger").addEventListener("click", function () {
      var menu = document.getElementById("menu");
      if (menu.classList.contains("hidden")) {
        menu.classList.remove("hidden");
      } else {
        menu.classList.add("hidden");
      }
    });
  }
  
  export { toggleHamburgerMenu };
  