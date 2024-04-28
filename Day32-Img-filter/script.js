const tabs = document.querySelector(".tabs");
const gallery = document.querySelectorAll(".images");

tabs.addEventListener("click", (event) => {
  console.log(event.target.dataset.category);
  if (event.target.dataset.category !== undefined) {
    fliterSearch(event.target.dataset.category);
  }
});

const fliterSearch = (value) => {
  gallery.forEach((curElem) => {
    console.log(curElem.dataset.category);
    if (curElem.dataset.category === value || value === "all") {
      curElem.style.display = "block";
    } else {
      curElem.style.display = "none";
    }
  });
};
