document.querySelectorAll(".vertical-tab .each-tab").forEach(function (tab) {
  tab.addEventListener("click", function () {
    const dataTarget = this.dataset.target;

    document.querySelectorAll(".vertical-tab .each-tab").forEach(function (item) {
      item.classList.remove("active");
    });

    this.classList.add("active");

    document.querySelectorAll(".vertical-tab-wrapper .search-tabs-main_item").forEach(function (content) {
      content.style.display = "none";
      content.classList.remove("active");
    });

    const targetContent = document.querySelector(dataTarget);

    if (targetContent) {
      targetContent.style.display = "block";
      targetContent.classList.add("active");
    }
  });
});





