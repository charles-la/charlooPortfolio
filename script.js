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
  { src: 'assets/cover/cover_sample26.jpeg', audio: 'assets/audio/sample26.wav', title: 'Sample 26' },
  { src: 'assets/cover/cover_ocean.jpeg', audio: 'assets/audio/Ocean.wav', title: 'Ocean' }
];

let covers = [...COVERS];
let currentIndex = 0;
let isTransitioning = false;
let debounceTimeout;
let direction = 'right';

function updatePlayer() {
  if (isTransitioning) return;
  isTransitioning = true;

  const cover = document.getElementById('cover1');
  const audio = document.getElementById('audioPlayer');
  const title = document.getElementById('sampleTitle');

  if (!cover || !audio || !title) {
    console.error('One or more elements not found:', { cover, audio, title });
    return;
  }

  // Start fade out
  cover.style.opacity = 0;
  title.style.opacity = 0;

  // Wait for fade out to finish
  transitionEndPromise(cover).then(() => {
    audio.src = covers[currentIndex].audio;
    title.textContent = covers[currentIndex].title;

    const newImage = new Image();
    newImage.onload = function() {
      cover.src = newImage.src;

      // Wait for next repaint
      requestAnimationFrame(() => {
        cover.style.opacity = 1;
        title.style.opacity = 1;

        // Reset transitioning flag after fade in
        transitionEndPromise(cover).then(() => {
          isTransitioning = false;
        });
      });
    };

    newImage.src = covers[currentIndex].src;
  });

  updateIndex(direction);
}

function transitionEndPromise(element) {
  return new Promise(resolve => {
    const onTransitionEnd = () => {
      element.removeEventListener('transitionend', onTransitionEnd);
      resolve();
    };
    element.addEventListener('transitionend', onTransitionEnd);
  });
}

function updateIndex(direction) {
  if (direction === 'right') {
    currentIndex = (currentIndex + 1) % covers.length;
  } else if (direction === 'left') {
    currentIndex = (currentIndex - 1 + covers.length) % covers.length;
  }
}

function nextTrack() {
  var button = document.getElementById('playPauseBtn');
  button.style.backgroundImage = "url('assets/icones/play.png')";
  direction = 'right';
  updatePlayer();
}

function prevTrack() {
  var button = document.getElementById('playPauseBtn');
  button.style.backgroundImage = "url('assets/icones/play.png')";
  direction = 'left';
  updatePlayer();
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

// Adding event listener for when the audio ends
document.getElementById('audioPlayer').addEventListener('ended', function() {
  var button = document.getElementById('playPauseBtn');
  button.style.backgroundImage = "url('assets/icones/play.png')";
});