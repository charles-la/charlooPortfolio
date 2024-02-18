function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Video starting when mouse is over ---------------------------------------------------

const videoContainers = document.querySelectorAll(".video-container");

videoContainers.forEach(container => {
  const video = container.querySelector(".custom-video");
  video.currentTime = 0;
  
  video.addEventListener("mouseover", function() {
    video.play();
  });

  video.addEventListener("mouseout", function() {
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

let previousIndex = null

function getRandomPastelColor(alpha) {
  const pastelColors = [
      '255, 182, 193',  // LightPink
      '135, 206, 235',  // SkyBlue
      '152, 251, 152',  // PaleGreen
      '255, 160, 122',  // LightSalmon
      '255, 215, 0',    // Gold
      '173, 216, 230',  // LightBlue
      '255, 105, 180',  // HotPink
      '216, 191, 216',  // Thistle
      '152, 251, 152',  // PaleGreen
      '135, 206, 250'   // LightSkyBlue
  ];

  do {
    randomIndex = Math.floor(Math.random() * pastelColors.length);
  } while (randomIndex === previousIndex);
  
  previousIndex = randomIndex;

  return `rgba(${pastelColors[randomIndex]}, ${alpha})`;
}

function changeColorPeriodically() {
  const element = document.querySelector('.contact-info-upper-container');
  setInterval(function () {
    // const color = getRandomAlphaColor(150, 240, 0.7, 20);
    const color = getRandomPastelColor(0.6);
    element.style.borderColor = color;
    element.style.background = color;
  }, 500); // Change the color every 500 milliseconds
}

// Change the color periodically after the page loads
window.addEventListener('load', changeColorPeriodically);


// Start on the left of the scroll video container

document.querySelector('.all-video-container').scrollLeft = 0;

const scrollContainer = document.querySelector('.all-video-container');
const dots = document.querySelectorAll('.dot');
setActiveDot(0)

scrollContainer.onscroll = function() {
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

// Scroll dot about

document.querySelector('.all-details-container').scrollLeft = 0;

const scrolldetailContainer = document.querySelector('.all-details-container');
const dotsAbout = document.querySelectorAll('.dot-about');
setActiveDotAbout(0)

scrolldetailContainer.onscroll = function() {
  // Get the vertical scroll position of the container
  const scrollPosition = scrolldetailContainer.scrollLeft;  
  const maxScrollLeft = scrolldetailContainer.scrollWidth - scrolldetailContainer.clientWidth;
  const dotNum = dotsAbout.length;
  var index = parseInt((scrollPosition - 1) / (maxScrollLeft / dotNum));
  setActiveDotAbout(index);
  
};

function setActiveDotAbout(index) {
  dotsAbout.forEach((dot, dotIndex) => {
    if (index === dotIndex) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });
}