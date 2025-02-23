// Mobile menu ------------------------------------------------------------------------
function toggleMenu() {
  var element = document.querySelector('.menu-links');
  if (element.classList.contains('visible')) {
    element.classList.add('fade-out'); // Begin fade-out animation
    setTimeout(() => {
      element.classList.remove('visible', 'fade-out');
      element.style.display = 'none'; // Hide the menu after animation completes
    }, 650); // Match the timeout to the duration of the fade-out animation
  } else {
    element.style.display = 'flex'; // Set display to flex before adding 'visible' for animation to work
    element.classList.add('visible');
  }
}

document.querySelectorAll('.menu-links a').forEach(link => {
  link.addEventListener('click', () => {
    var menu = document.querySelector('.menu-links');
    menu.classList.add('fade-out');
    setTimeout(() => {
      menu.classList.remove('visible', 'fade-out');
      menu.style.display = 'none';
      document.querySelector('.menu').classList.remove('opened');
      document.querySelector('.menu').setAttribute('aria-expanded', 'false');
    }, 650); // Ensure this matches the duration of the fade-out animation
  });
});


// Contact Button Link ----------------------------------------------------------------
function openLinkInNewTab() {
  // Replace the URL with the link you want to open in a new tab
  const linkURL = "https://www.instagram.com/charloo._/";

  // Open the link in a new tab
  window.open(linkURL, "_blank");
}


// Music Listner ----------------------------------------------------------------
const COVERS = [
  { src: 'assets/cover/cover_sample20.jpeg', audio: 'assets/audio/sample20.wav', title: 'Sample 20' },
  { src: 'assets/cover/cover1.jpeg', audio: 'assets/audio/sample20.wav', title: 'Sample 21' },
  { src: 'assets/cover/cover_empty.PNG', audio: 'assets/audio/sample20.wav', title: 'Coming soon ...' }
];

let covers = [...COVERS];
let currentIndex = 0;
let isTransitioning = false;
let debounceTimeout;
let direction = 'right';

function updatePlayer() {
  if (isTransitioning) return;
  // Ensure currentIndex stays within bounds
  if (currentIndex >= covers.length) {
    currentIndex = 0;
  } else if (currentIndex < 0) {
    currentIndex = covers.length - 1;
  }

  const cover = document.getElementById('cover1');
  const audio = document.getElementById('audioPlayer');
  const title = document.getElementById('sampleTitle');

  if (!cover || !audio || !title) {
    console.error('One or more elements not found:', { cover, audio, title });
    return;
  }

  isTransitioning = true;

  // Add slide-out class based on direction
  cover.classList.add(direction === 'left' ? 'slide-out-left' : 'slide-out-right');
  title.classList.add('opacity-transition');

  // Listen for the end of the slide-out transition
  cover.addEventListener('transitionend', function handleSlideOut() {
    // Remove slide-out class
    cover.classList.remove(direction === 'left' ? 'slide-out-left' : 'slide-out-right');

    // Move the image off-screen to the opposite side
    cover.classList.add(direction === 'left' ? 'off-screen-right' : 'off-screen-left');

    // Force reflow to apply the off-screen position
    void cover.offsetWidth;

    // Update the source and text content
    cover.src = covers[currentIndex].src;
    audio.src = covers[currentIndex].audio;
    title.textContent = covers[currentIndex].title;

    // Add slide-in class based on the opposite direction
    cover.classList.remove(direction === 'left' ? 'off-screen-right' : 'off-screen-left');
    cover.classList.add(direction === 'left' ? 'slide-in-right' : 'slide-in-left');

    // Force reflow to restart the animation
    void cover.offsetWidth;

    // Add slide-in class to move the image into view
    cover.classList.add('slide-in');

    // Remove slide-in classes after the transition completes
    cover.addEventListener('transitionend', function handleSlideIn() {
      cover.classList.remove('slide-in-left', 'slide-in-right', 'slide-in');
      isTransitioning = false;
      cover.removeEventListener('transitionend', handleSlideIn);
    }, { once: true });
    // Remove the event listener to avoid multiple triggers
    cover.removeEventListener('transitionend', handleSlideOut);

    // Remove opacity-transition class after the transition completes
    title.classList.remove('opacity-transition');
  }, { once: true });
}


// Debounce function to prevent multiple rapid calls
function debounceUpdatePlayer() {
  clearTimeout(debounceTimeout);
  debounceTimeout = setTimeout(updatePlayer, 200); // Adjust the debounce delay as needed
}

function nextTrack() {
  direction = 'right';
  currentIndex++;
  debounceUpdatePlayer();
}

function prevTrack() {
  direction = 'left';
  currentIndex--;
  debounceUpdatePlayer();
}

function togglePlay() {
  var audio = document.getElementById('audioPlayer');
  var button = document.getElementById('playPauseBtn');
  if (audio.paused) {
    audio.play();
    button.style.backgroundImage = "url('assets/icones/stop.png')";
  } else {
    audio.pause();
    audio.currentTime = 0;
    button.style.backgroundImage = "url('assets/icones/play.png')";
  }
}

