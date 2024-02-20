document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector(".carrosel-menu-container");
    const prevButton = document.querySelector(".btn1-carrosel");
    const nextButton = document.querySelector(".btn2-carrosel");
  
    let position = 0;
    const cardWidth = document.querySelector(".card-carrosel").offsetWidth + 20; // Largura do card + espaçamento
  
    function moveCarousel() {
      carousel.style.transform = `translateX(${position}px)`;
    }
  
    nextButton.addEventListener("click", function() {
      const wrapperWidth = document.querySelector(".section2").offsetWidth;
      const numCards = document.querySelectorAll(".card-carrosel").length;
      const maxPosition = -((cardWidth * numCards) - wrapperWidth); // Posição máxima ajustada
      if (position > maxPosition) {
        position -= cardWidth; // Mover para o próximo card
        moveCarousel();
      }
    });
  
    prevButton.addEventListener("click", function() {
      if (position < 0) {
        position += cardWidth; // Mover para o card anterior
        moveCarousel();
      }
    });
  });
  