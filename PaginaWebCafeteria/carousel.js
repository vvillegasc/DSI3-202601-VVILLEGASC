// Carrusel vanilla JavaScript
class Carousel {
  constructor() {
    this.carousel = document.querySelector(".carrusel");
    this.prevBtn = document.querySelector(".carousel-btn.prev");
    this.nextBtn = document.querySelector(".carousel-btn.next");
    this.cards = document.querySelectorAll(".itemCard");
    this.currentIndex = 0;
    this.cardWidth = 0;
    this.gap = 20;
    this.visibleCards = this.getVisibleCards();
    this.isResizing = false;

    this.init();
  }

  init() {
    if (
      !this.carousel ||
      !this.prevBtn ||
      !this.nextBtn ||
      this.cards.length === 0
    ) {
      console.error("Carousel elements not found");
      return;
    }

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
    console.log("Window width:", width);
    if (width >= 1400) return 4;
    if (width >= 1000) return 3;
    if (width >= 650) return 2;
    return 1;
  }

  updateCardWidth() {
    if (this.cards.length > 0) {
      this.cardWidth = this.cards[0].offsetWidth + this.gap;
      console.log(
        "Card width updated:",
        this.cardWidth,
        "Visible cards:",
        this.visibleCards,
      );
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
    console.log(
      "Next clicked - Current:",
      this.currentIndex,
      "Max:",
      maxIndex,
      "Total cards:",
      this.cards.length,
      "Visible:",
      this.visibleCards,
    );
    if (this.currentIndex < maxIndex) {
      this.currentIndex++;
      this.updateCarousel();
    } else {
      console.log("Already at max index");
    }
  }

  updateCarousel() {
    const offset = -this.currentIndex * this.cardWidth;
    this.carousel.style.transform = `translateX(${offset}px)`;
    console.log(
      "Moving to offset:",
      offset,
      "px (index:",
      this.currentIndex,
      ")",
    );

    // Deshabilitar botones en los extremos
    this.prevBtn.disabled = this.currentIndex === 0;
    const maxIndex = this.cards.length - this.visibleCards;
    this.nextBtn.disabled = this.currentIndex >= maxIndex;
  }
}

// Inicializar el carrusel cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", () => {
  new Carousel();
});
