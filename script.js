const noButton = document.getElementById('no');
const yesButton = document.getElementById('yes');
const heartsContainer = document.getElementById('hearts-container');

// Function to create heart emojis
function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.textContent = '❤️';

  // Randomize position and size for heart emojis
  heart.style.left = Math.random() * 100 + 'vw'; // Random horizontal position
  heart.style.fontSize = Math.random() * 2 + 1 + 'rem'; // Random size
  heart.style.animationDuration = Math.random() * 2 + 4 + 's'; // Slow floating effect

  // Add to hearts container
  heartsContainer.appendChild(heart);

  // Remove heart after animation
  setTimeout(() => {
    heart.remove();
  }, 8000); // Adjusted to match the slower animation time
}

// Explode heart emojis from bottom to top when clicking the "Yes" button
yesButton.addEventListener('click', () => {
  for (let i = 0; i < 50; i++) {
    createHeart();
  }
});

// Move "No" button away from the mouse pointer
noButton.addEventListener('mouseenter', () => {
  moveNoButton();
});

noButton.addEventListener('mousemove', (event) => {
  const rect = noButton.getBoundingClientRect();
  const distanceX = event.clientX - rect.left;
  const distanceY = event.clientY - rect.top;

  const threshold = 100; // The area in which the "No" button starts moving

  // If mouse is close enough, make the button move faster than the mouse
  if (Math.abs(distanceX) < threshold && Math.abs(distanceY) < threshold) {
    moveNoButton();
  }
});

noButton.addEventListener("mouseover", () => {
    const maxX = window.innerWidth - noButton.offsetWidth; // Max horizontal range
    const maxY = window.innerHeight - noButton.offsetHeight; // Max vertical range

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    // Adding a smooth transition effect
    noButton.style.transition = "left 0.5s ease, top 0.5s ease";
    noButton.style.position = "absolute";
    noButton.style.left = randomX + "px";
    noButton.style.top = randomY + "px";
});

// Function to move the "No" button away randomly (faster than mouse)
function moveNoButton() {
  // Move the "No" button a larger distance, faster than the mouse
  const moveX = Math.random() * 200 - 100; // Random horizontal move with larger distance
  const moveY = Math.random() * 200 - 100; // Random vertical move with larger distance
  
  // Apply the transformation to move the button
  noButton.style.transition = 'transform 0.1s ease-out'; // Quick transition for faster movement
  noButton.style.transform = `translate(${moveX}px, ${moveY}px)`;
  noButton.style.position = 'absolute';
}
