// Scroll Js
document.addEventListener("DOMContentLoaded", function () {
  const section = document.querySelector(".feature-collection-main_wrapper");
  if (!section) return;

  const titles = section.querySelectorAll(".scroll-collection-title");
  const images = section.querySelectorAll(".thumb-image");
  const descs = section.querySelectorAll(".feature-collection-desc");

  function changeSlide(index) {

    images.forEach(function (image, i) {
      image.classList.toggle("active", i === index);
    });

    descs.forEach(function (desc, i) {
      desc.classList.toggle("active", i === index);
    });

    titles.forEach(function (title, i) {
      title.classList.toggle("active", i === index);
    });
  }

  changeSlide(0);

  titles.forEach(function (title) {
    title.addEventListener("mouseenter", function () {
      const index = Number(title.getAttribute("data-index"));
      changeSlide(index);
    });
  });
});





