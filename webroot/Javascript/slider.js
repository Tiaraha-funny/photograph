function Slider(slider) {
  const images = Array.from(slider.querySelectorAll("img"));
  const bigImageDisplay = document.querySelector(".ChoosenImg");

  if (!slider) {
    throw Error("No Gallerry Found!!!");
  }

  function showImage(el) {
    if (!el) {
      console.info("no image to show");
      return;
    }
    bigImageDisplay.querySelector("img").src = el.src;

    images.forEach((image) => {
      image.classList.add("selected-thumbnil");
      if (image.classList.contains("selected-thumbnil")) {
        image.classList.remove("selected-thumbnil");
        images[0].style.opacity = "0.5";
      }
    });
    el.classList.add("selected-thumbnil");
    console.log("source", el.src);
  }

  images[0].style.opacity = "1";

  images.forEach((image) => {
    image.addEventListener("click", (e) => showImage(e.currentTarget));
  });
}
const mySlider = Slider(document.querySelector(".sliders"));
