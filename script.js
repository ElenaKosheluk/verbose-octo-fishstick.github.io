const singInButtonElement = document.querySelector('.button_come');
const modalElement = document.querySelector('.modal__overlay');
const closeButtonElement = document.querySelector('.close-button');
const burgerButtonElement = document.querySelector('.burger-button');
const burgerMenuElement = document.querySelector('.navigation');

function openModal() {
   modalElement.classList.add('modal_visible');
}
function closeModal() {
    modalElement.classList.remove('modal_visible');
}
function handleCloseModalByEscape(event) {
    if(event.key === 'Escape'){
        closeModal();
    }
}
function handleCloseByOverlay(event) {
    if(event.target === modalElement) {
        closeModal();
    }   
}
function toggleBurgerMenu( ) {
    burgerMenuElement.classList.toggle('navigation_visible');
    burgerButtonElement.classList.toggle('burger-button_opened');
}

  
singInButtonElement.addEventListener('click', openModal);
document.addEventListener('keydown', handleCloseModalByEscape);
modalElement.addEventListener('click', handleCloseByOverlay);
closeButtonElement.addEventListener('click', closeModal);
burgerButtonElement.addEventListener('click', toggleBurgerMenu);