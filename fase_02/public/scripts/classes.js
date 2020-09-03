// HTML Selectors:
const body = document.querySelector('body');
const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card');

// Script:
// Making cards in section cards prompt the modal.
for (let card of cards) { // Adds Click Event Listeners to every div.card in section.cards.
    card.addEventListener('click', () => {
        const videoId = card.querySelector('.card_image-container img').src.split('/')[4]; // Gets clicked video's ID.

        body.classList.add('active'); // Adds 'active' class to body to make modal visible.
        modalOverlay.classList.add('active'); // Adds 'active' class to modalOverlay to  make modal visible.
        modalOverlay.querySelector('iframe').src = `https://www.youtube.com/embed/${videoId}` // Puts the clicked video inside the modal.
    })
}

// Making the modal closeable.
document.querySelector('.close-modal').addEventListener('click', () => { // Adds Click Event Listener to i.close-modal.
    body.classList.remove('active'); // Removes 'active' class from body to make modal invisible.
    modalOverlay.classList.remove('active'); // Removes 'active' class from modalOverlay to make modal invisible.
    modalOverlay.querySelector('iframe').src = ""; // Resets iframe.
})