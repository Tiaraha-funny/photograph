function Slider(slider) {
    if (!slider) {
      throw Error('No Gallerry Found!!!');
  }
  const images = Array.from(slider.querySelectorAll('img'));
  const modal = document.querySelector('.ChoosenImg');
  
  function showImage(el) {
    if (!el) {
      console.info('no image to show');
      return;
    };
    modal.querySelector('img').src = el.src;
    currentImage = el;
    openModal();
    closeModal();
    }

  images.forEach(image => {
    image.addEventListener('click', e => showImage(e.currentTarget));
  });

  function openModal() {
    console.info('Open this modal ....')

    if (modal.matches('.open')) {
      console.info('Modal already open');
      return;
    }

    modal.classList.add('open');
  }

  function closeModal() {
    modal.classList.remove('open');
  }
}
const mySlider = Slider(document.querySelector('.sliders'));
