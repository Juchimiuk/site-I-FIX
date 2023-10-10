// Função para verificar se o elemento está visível na tela
function isElementVisible(element) {
    var rect = element.getBoundingClientRect();
    var windowHeight = (window.innerHeight || document.documentElement.clientHeight);
  
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= windowHeight
    );
}

// Função para adicionar a classe de animação quando o elemento estiver visível
// Função para verificar se o elemento está visível na tela
function isElementVisible(element) {
    var rect = element.getBoundingClientRect();
    var windowHeight = (window.innerHeight || document.documentElement.clientHeight);
    var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    return (
        rect.top >= 0 &&
        rect.top <= windowHeight + scrollPosition
    );
}

// Função para adicionar a classe de animação quando o elemento estiver visível durante o scroll
function handleScrollAnimation() {
    var elements = document.querySelectorAll('.hidden');

    for (var i = 0; i < elements.length; i++) {
        if (isElementVisible(elements[i])) {
            elements[i].classList.remove('hidden');
        }
    }
}

// Evento de scroll da página
window.addEventListener('scroll', handleScrollAnimation);

function handleScrollAnimation() {
    var elements = document.querySelectorAll('.services');

    for (var i = 0; i < elements.length; i++) {
        if (isElementVisible(elements[i])) {
            elements[i].classList.remove('hidden');
        }
    }
}function handleScrollAnimation() {
    var elements = document.querySelectorAll('.contact-us');

    for (var i = 0; i < elements.length; i++) {
        if (isElementVisible(elements[i])) {
            elements[i].classList.remove('hidden');
        }
    }
}