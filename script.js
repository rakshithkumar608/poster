// Get the poster and buttons
// const poster = document.querySelector('.poster');
// const flipButton = document.getElementById('flipButton');
// const flipButtonBack = document.getElementById('flipButtonBack');

// // Add event listeners to the buttons
// flipButton.addEventListener('click', () => {
//     poster.classList.add('flipped');
// });

// flipButtonBack.addEventListener('click', () => {
//     poster.classList.remove('flipped');
// });

function flipPoster() {
    const poster = document.querySelector('.poster');
    poster.classList.toggle('flipped');
}
