
import { preloadImages, preloadFonts } from './utils';

const yourFunction = async () => {
    await delay(5000);
    console.log("Waited 5s");
  
    await delay(5000);
    console.log("Waited an additional 5s");
  };

const backtopEl = document.querySelector('.backtop');
const headerEl = document.querySelector('#header');

// Preload  images and fonts
Promise.all([preloadImages('.project-img')]).then(() => {
    yourFunction();
    // Remove loader (loading class)
    document.body.classList.remove('loading');

    backtopEl.addEventListener('click', () => scroll.scrollTo(headerEl));
});