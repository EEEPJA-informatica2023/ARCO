document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector(".carrosel-menu-container");
    const prevButton = document.querySelector(".btn1-carrosel");
    const nextButton = document.querySelector(".btn2-carrosel");

    const cardWidth = document.querySelector(".card-carrosel").offsetWidth; // Largura do card
    const cardMargin = 20; // Espaçamento entre os cards

    let position = 0;
    const wrapperWidth = document.querySelector(".section2").offsetWidth;
    const numCards = document.querySelectorAll(".card-carrosel").length;
    const totalWidth = (cardWidth + cardMargin) * numCards - cardMargin; // Largura total dos cards

    function moveCarousel() {
        carousel.style.transform = `translateX(${position}px)`;
    }

    nextButton.addEventListener("click", function() {
      const maxPosition = wrapperWidth - totalWidth - 1100; // Posição máxima com margem de segurança

        if (position > maxPosition) {
            position -= cardWidth + cardMargin; // Mover para o próximo card
            if (position < maxPosition) {
              position = maxPosition; // Ajustar para a posição máxima se necessário
            }
            moveCarousel();
        }
    });

    prevButton.addEventListener("click", function() {
        if (position < 0) {
            position += cardWidth + cardMargin; // Mover para o card anterior
            if (position > 0) {
              position = 0; // Ajustar para a posição inicial se necessário
            }
            moveCarousel();
        }
    });
});

const botao_section1 = document.querySelector(".btn-section1")
botao_section1.addEventListener("click", () => {
    window.scroll(0, 550)
})

console.log(botao_section1)
