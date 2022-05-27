// ScrollFade 0.1
export const scrollFade = () => {
  const fadeElements = document.getElementsByClassName('scrollFade');
  // const viewportBottom = window.scrollY + window.innerHeight;

  for (let index = 0; index < fadeElements.length; index++) {
    const element = fadeElements[index];
    const rect = element.getBoundingClientRect();

    const elementFourth = rect.height/4;
    const fadeInPoint = window.innerHeight - elementFourth;
    const fadeOutPoint = -(rect.height/2);

    if (rect.top <= fadeInPoint/2) {
      element.classList.add('scrollFade--visible');
      element.classList.add('scrollFade--animate');
      element.classList.remove('scrollFade--hidden');
    } else {
      element.classList.remove('scrollFade--visible');
      element.classList.add('scrollFade--hidden');
    }

    if (rect.top <= fadeOutPoint/2) {
      element.classList.remove('scrollFade--visible');
      element.classList.add('scrollFade--hidden');
    }
  }
}

export const initScrollFade = () => {
  if (typeof document !== 'undefined') {
    document.addEventListener('scroll', scrollFade);
    window.addEventListener('resize', scrollFade);
    document.addEventListener('DOMContentLoaded', function() {
      scrollFade();
    });
  }
}