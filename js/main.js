"use strict";

let margem_seguranca
if( window.innerWidth > 1000){
    margem_seguranca = 700
}else{
    margem_seguranca = 200
}

document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector(".carrosel-menu-container");
    const prevButton = document.querySelector(".btn1-carrosel");
    const nextButton = document.querySelector(".btn2-carrosel");

    let position = 0;
    let cardWidth;
    let cardMargin;
    let wrapperWidth;
    let numCards;
    let totalWidth;

    function updateDimensions() {
        cardWidth = document.querySelector(".card-carrosel").offsetWidth; // Largura do card
        cardMargin = 40; // Espaçamento entre os cards
        wrapperWidth = document.querySelector(".section2").offsetWidth;
        numCards = document.querySelectorAll(".card-carrosel").length;
        totalWidth = (cardWidth + cardMargin) * numCards - cardMargin; // Largura total dos cards
    }

    function moveCarousel() {
        carousel.style.transform = `translateX(${position}px)`;
    }

    function nextSlide() {
        const maxPosition = wrapperWidth - totalWidth - margem_seguranca; // Posição máxima com margem de segurança
        if (position > maxPosition) {
            position -= cardWidth + cardMargin; // Mover para o próximo card
            if (position < maxPosition) {
                position = maxPosition; // Ajustar para a posição máxima se necessário
            }
            moveCarousel();
        }
    }

    function prevSlide() {
        if (position < 0) {
            position += cardWidth + cardMargin; // Mover para o card anterior
            if (position > 0) {
                position = 0; // Ajustar para a posição inicial se necessário
            }
            moveCarousel();
        }
    }

    nextButton.addEventListener("click", nextSlide);
    prevButton.addEventListener("click", prevSlide);

    window.addEventListener("resize", () => {
        updateDimensions();
        moveCarousel();
    });

    updateDimensions();

    const botaoSection1 = document.querySelector(".btn-section1");
    botaoSection1.addEventListener("click", () => {
        window.scroll(0, 550);
    });
});

const botao_section1 = document.querySelector(".btn-section1")
botao_section1.addEventListener("click", () => {
    window.scroll(0, 550)
})

document.addEventListener("DOMContentLoaded", () => {
    const screen_width = window.innerWidth
    const mural_imagens = document.getElementById("mural-images")

    if(screen_width <= 1000){
        mural_imagens.innerHTML = `
        <div class="mural-images" id="mural-images">
        <div class="first-row-images">
            <img src="images/pessoa1.png" alt="foto do Ailton Krenak" class="images-colagem">
            <img src="images/pessoa2.png" alt="foto do Chico Science" class="images-colagem">
            <img src="images/pessoa5.png" alt="foto do Ailton Krenak" class="images-colagem">
            <img src="images/pessoa6.png" alt="foto do Chico Science" class="images-colagem">
            <img src="images/pessoa7.png" alt="foto do Chico Science" class="images-colagem">
        </div>
        <div class="second-row-images">
            <img src="images/pessoa3.png" alt="foto do Ailton Krenak" class="images-colagem">
            <img src="images/pessoa4.png" alt="foto do Chico Science" class="images-colagem">
            <img src="images/pessoa8.png" alt="foto do Ailton Krenak" class="images-colagem">
            <img src="images/pessoa9.png" alt="foto do Chico Science" class="images-colagem">
            <img src="images/pessoa10.png" alt="foto do Chico Science" class="images-colagem">
        </div>
    </div>   
        `
    }
})


window.addEventListener("resize", () => location.reload());