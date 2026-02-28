// Carrusel vanilla JavaScript con BEM
class Carousel {
  constructor(containerSelector, trackClass, btnClass) {
    this.container = document.querySelector(containerSelector);
    if (!this.container) {
      console.error(`Container ${containerSelector} not found`);
      return;
    }

    this.carousel = this.container.querySelector(`.${trackClass}`);
    this.prevBtn = this.container.querySelector(`.${btnClass}--prev`);
    this.nextBtn = this.container.querySelector(`.${btnClass}--next`);
    this.cards = this.container.querySelectorAll(".card");

    if (
      !this.carousel ||
      !this.prevBtn ||
      !this.nextBtn ||
      this.cards.length === 0
    ) {
      console.error(`Carousel elements not found in ${containerSelector}`);
      console.log("Carousel:", this.carousel);
      console.log("Prev button:", this.prevBtn);
      console.log("Next button:", this.nextBtn);
      console.log("Cards:", this.cards.length);
      return;
    }

    this.currentIndex = 0;
    this.cardWidth = 0;
    this.gap = 20;
    this.visibleCards = this.getVisibleCards();
    this.isResizing = false;

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
      if (!this.isResizing) {
        this.prev();
      }
    });
    this.nextBtn.addEventListener("click", (e) => {
      e.preventDefault();
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

    // Deshabilitar botones en los extremos
    this.prevBtn.disabled = this.currentIndex === 0;
    const maxIndex = this.cards.length - this.visibleCards;
    this.nextBtn.disabled = this.currentIndex >= maxIndex;
  }
}

// Inicializar los carruseles cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", () => {
  console.log("Initializing carousels...");
  const drinksCarousel = new Carousel(
    ".carousel--drinks",
    "carousel__track",
    "carousel__button",
  );
  const foodCarousel = new Carousel(
    ".carousel--food",
    "carousel__track",
    "carousel__button",
  );
  console.log("Carousels initialized");
});
