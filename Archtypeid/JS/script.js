document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".buy-button");
  const hamburger = document.querySelector(".hamburger");
  const menuList = document.querySelector(".menu-list");
  const menuItems = menuList.querySelectorAll("li a");
  const productImages = document.querySelectorAll(".product-item img");

  // Handle button interactions
  buttons.forEach((button) => {
    button.addEventListener("mouseover", () => {
      button.classList.add("hover");
    });

    button.addEventListener("mouseleave", () => {
      button.classList.remove("hover");
    });

    button.addEventListener("click", () => {
      alert("Product added to cart!");
      // Add additional logic here as needed, e.g., redirect to cart page
    });
  });

  // Handle hamburger menu interactions
  hamburger.addEventListener("click", () => {
    menuList.classList.toggle("active");
  });

  // Change individual menu item text color on mouseover and mouseleave
  menuItems.forEach((item) => {
    item.addEventListener("mouseover", () => {
      item.classList.add("hover");
    });

    item.addEventListener("mouseleave", () => {
      item.classList.remove("hover");
    });
  });

  // Optimize and enforce image size restrictions
  productImages.forEach((img) => {
    img.addEventListener("load", () => {
      if (img.naturalWidth > 100) {
        img.style.width = "100px"; // Set max width
        img.style.height = "auto"; // Maintain aspect ratio
      }
      if (img.naturalHeight > 130) {
        img.style.height = "130px"; // Set max height
        img.style.width = "auto"; // Maintain aspect ratio
      }
    });

    // Enlarge image on mouseover
    img.addEventListener("mouseover", () => {
      img.classList.add("enlarge");
    });

    img.addEventListener("mouseleave", () => {
      img.classList.remove("enlarge");
    });
  });
});
