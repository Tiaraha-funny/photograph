function Slider(slider) {
    if (!slider) {
      throw Error('No Gallerry Found!!!');
  }
  const images = Array.from(slider.querySelectorAll('img'));
  const bigImageDisplay = document.querySelector('.ChoosenImg');
  
  function showImage(el) {
    if (!el) {
      console.info('no image to show');
      return;
    };
    bigImageDisplay.querySelector('img').src = el.src;

    images.forEach(image => {

      if(image.classList.contains("selected-thumbnil")) {
        image.classList.remove("selected-thumbnil");
      }
    });
    el.classList.add("selected-thumbnil");
    console.log("source",  el.src);
    }

  images.forEach(image => {
    image.addEventListener('click', e => showImage(e.currentTarget));
  });
}
const mySlider = Slider(document.querySelector('.sliders'));
