// You can add JavaScript to enhance the popup's behavior,
// such as smooth animations or dynamic content.

const recipePopup = document.querySelector('.recipe-popup');

recipeItem.addEventListener('mouseover', () => {
  recipePopup.style.opacity = 0; // Initially hide the popup
  recipePopup.style.display = 'block'; // Show the popup
  setTimeout(() => {
    recipePopup.style.opacity = 1; // Fade in the popup
  }, 10);
});

recipeItem.addEventListener('mouseout', () => {
  recipePopup.style.opacity = 0;
  setTimeout(() => {
    recipePopup.style.display = 'none';
  }, 300);
});