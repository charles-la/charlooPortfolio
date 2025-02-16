// function toggleMenu() {
//   const menu = document.querySelector(".menu-links");
//   const icon = document.querySelector(".hamburger-icon");
//   menu.classList.toggle("open");
//   icon.classList.toggle("open");
// }
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

// Video starting when mouse is over ---------------------------------------------------

const videoContainers = document.querySelectorAll(".video-container");

videoContainers.forEach(container => {
  const video = container.querySelector(".custom-video");
  video.currentTime = 0;

  video.addEventListener("mouseover", function () {
    video.play();
  });

  video.addEventListener("mouseout", function () {
    video.pause();
    video.currentTime = 0;
  });
});

// Open a new URL ----------------------------------------------------------------------

function openLinkInNewTab() {
  // Replace the URL with the link you want to open in a new tab
  const linkURL = "https://www.instagram.com/charloo._/";

  // Open the link in a new tab
  window.open(linkURL, "_blank");
}

// Over contact Color changing ---------------------------------------------------------

// let previousIndex = null;

// function getRandomPastelColor(alpha) {
//   const pastelColors = [
//       '255, 182, 193',  // LightPink
//       '135, 206, 235',  // SkyBlue
//       '152, 251, 152',  // PaleGreen
//       '255, 160, 122',  // LightSalmon
//       '255, 215, 0',    // Gold
//       '173, 216, 230',  // LightBlue
//       '255, 105, 180',  // HotPink
//       '216, 191, 216',  // Thistle
//       '152, 251, 152',  // PaleGreen repeated
//       '135, 206, 250'   // LightSkyBlue
//   ];

//   let randomIndex;
//   do {
//     randomIndex = Math.floor(Math.random() * pastelColors.length);
//   } while (randomIndex === previousIndex);

//   previousIndex = randomIndex;
//   return `rgba(${pastelColors[randomIndex]}, ${alpha})`;
// }

// function changeColorPeriodically() {
//   const element = document.querySelector('.contact-info-upper-container');

//   // Initialize with a color right after the page loads
//   const initialColor = getRandomPastelColor(0.6);
//   element.style.borderColor = initialColor;
//   element.style.background = initialColor;

//   setInterval(function () {
//     const color = getRandomPastelColor(0.6);
//     element.style.borderColor = color;
//     element.style.background = color;
//   }, 500); // Change the color every 500 milliseconds
// }

// // Change the color periodically after the page loads
// window.addEventListener('load', changeColorPeriodically);


// Project Section
// -----------------------------------------------------------------------------------//

// Dot
document.querySelector('.all-video-container').scrollLeft = 0;

const scrollContainer = document.querySelector('.all-video-container');
const dots = document.querySelectorAll('.dot');
setActiveDot(0)

scrollContainer.onscroll = function () {
  // Get the vertical scroll position of the container
  const scrollPosition = scrollContainer.scrollLeft;
  const maxScrollLeft = scrollContainer.scrollWidth - scrollContainer.clientWidth;
  const dotNum = dots.length;
  var index = parseInt((scrollPosition - 1) / (maxScrollLeft / dotNum));
  setActiveDot(index);

};

function setActiveDot(index) {
  dots.forEach((dot, dotIndex) => {
    if (index === dotIndex) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });
}

// About
// Scroll dot about row 1

document.querySelector('.details-containers-row1').scrollLeft = 0;

const scrolldetailContainer1 = document.querySelector('.details-containers-row1');
const dotsAbout1 = document.querySelectorAll('.dot-about-1');
setActiveDotAbout1(0)

scrolldetailContainer1.onscroll = function () {
  // Get the vertical scroll position of the container
  const scrollPosition = scrolldetailContainer1.scrollLeft;
  const maxScrollLeft = scrolldetailContainer1.scrollWidth - scrolldetailContainer1.clientWidth;
  const dotNum = dotsAbout1.length;
  var index = parseInt((scrollPosition - 1) / (maxScrollLeft / dotNum));
  setActiveDotAbout1(index);

};

function setActiveDotAbout1(index) {
  dotsAbout1.forEach((dot, dotIndex) => {
    if (index === dotIndex) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });
}

// Scroll dot about row 2

document.querySelector('.details-containers-row2').scrollLeft = 0;

const scrolldetailContainer2 = document.querySelector('.details-containers-row2');
const dotsAbout2 = document.querySelectorAll('.dot-about-2');
setActiveDotAbout2(0)

scrolldetailContainer2.onscroll = function () {
  // Get the vertical scroll position of the container
  const scrollPosition = scrolldetailContainer2.scrollLeft;
  const maxScrollLeft = scrolldetailContainer2.scrollWidth - scrolldetailContainer2.clientWidth;
  const dotNum = dotsAbout2.length;
  var index = parseInt((scrollPosition - 1) / (maxScrollLeft / dotNum));
  setActiveDotAbout2(index);

};

function setActiveDotAbout2(index) {
  dotsAbout2.forEach((dot, dotIndex) => {
    if (index === dotIndex) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });
}

// Project

$('input').on('change', function () {
  $('body').toggleClass('black');
});


// Music Listner
function togglePlay() {
  var audio = document.getElementById('audioPlayer');
  var button = document.getElementById('playPauseBtn');
  if (audio.paused) {
    audio.play();
    button.style.backgroundImage = "url('assets/icones/stop.png')"; // Change to stop icon
  } else {
    audio.pause();
    audio.currentTime = 0;
    button.style.backgroundImage = "url('assets/icones/play.png')"; // Change back to play icon
  }
}