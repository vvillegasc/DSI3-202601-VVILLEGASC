// Carrusel vanilla JavaScript
class Carousel {
  constructor(containerSelector, carouselClass, btnClass) {
    this.container = document.querySelector(containerSelector);
    if (!this.container) {
      console.error(`Container ${containerSelector} not found`);
      return;
    }

    console.log(`Initializing carousel for ${containerSelector}`);
    this.carousel = this.container.querySelector(`.${carouselClass}`);
    this.prevBtn = this.container.querySelector(`.${btnClass}.prev`);
    this.nextBtn = this.container.querySelector(`.${btnClass}.next`);
    this.cards = this.container.querySelectorAll(".itemCard");
    console.log(`Found ${this.cards.length} cards in ${containerSelector}`);

    this.currentIndex = 0;
    this.cardWidth = 0;
    this.gap = 20;
    this.visibleCards = this.getVisibleCards();
    this.isResizing = false;

    if (
      !this.carousel ||
      !this.prevBtn ||
      !this.nextBtn ||
      this.cards.length === 0
    ) {
      console.error(`Carousel elements not found in ${containerSelector}`);
      return;
    }

    this.init();
  }

  init() {
    this.updateCardWidth();
    this.updateCarousel();
    this.addEventListeners();

    let resizeTimeout;
    window.addEventListener("resize", () => {
      if (this.isResizing) return;

      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        const newVisibleCards = this.getVisibleCards();
        if (newVisibleCards !== this.visibleCards) {
          this.isResizing = true;
          this.visibleCards = newVisibleCards;
          this.updateCardWidth();
          this.currentIndex = 0;
          this.updateCarousel();
          setTimeout(() => {
            this.isResizing = false;
          }, 100);
        }
      }, 300);
    });
  }

  getVisibleCards() {
    const width = window.innerWidth;
    if (width >= 1400) return 4;
    if (width >= 1000) return 3;
    if (width >= 650) return 2;
    return 1;
  }

  updateCardWidth() {
    if (this.cards.length > 0) {
      this.cardWidth = this.cards[0].offsetWidth + this.gap;
    }
  }

  addEventListeners() {
    this.prevBtn.addEventListener("click", (e) => {
      e.preventDefault();
      console.log("Prev button clicked");
      if (!this.isResizing) {
        this.prev();
      }
    });
    this.nextBtn.addEventListener("click", (e) => {
      e.preventDefault();
      console.log("Next button clicked");
      if (!this.isResizing) {
        this.next();
      }
    });
  }

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.updateCarousel();
    }
  }

  next() {
    const maxIndex = this.cards.length - this.visibleCards;
    if (this.currentIndex < maxIndex) {
      this.currentIndex++;
      this.updateCarousel();
    }
  }

  updateCarousel() {
    const offset = -this.currentIndex * this.cardWidth;
    this.carousel.style.transform = `translateX(${offset}px)`;

    this.prevBtn.disabled = this.currentIndex === 0;
    const maxIndex = this.cards.length - this.visibleCards;
    this.nextBtn.disabled = this.currentIndex >= maxIndex;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM loaded, initializing carousels...");
  const drinksCarousel = new Carousel(
    ".drinks-container",
    "carrusel",
    "carousel-btn",
  );
  console.log("Drinks carousel initialized");
  const foodCarousel = new Carousel(
    ".food-container",
    "carrusel",
    "carousel-btn",
  );
  console.log("Food carousel initialized");
});
