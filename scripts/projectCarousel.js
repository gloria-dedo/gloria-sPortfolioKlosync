// Project images data
const projectImages = [
    {
        image: "./images/echoFarmcarousel.svg",
        name: "Echo Farms"
    },
    {
        image: "./images/MentorFirstPrototype.svg",
        name: "Mentor Hub"
    }
];

// Current image index
let currentIndex = 1; // Start with Mentor Hub (index 1)

// DOM elements
const carouselImage = document.getElementById('carousel-image');
const projectName = document.getElementById('project-name');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const dotsContainer = document.getElementById('dots-container');

// Initialize carousel
// function initCarousel() {
//     // Create dots
//     createDots();
//     // Set initial image and name
//     updateCarousel();
// }

// Create navigation dots
// function createDots() {
//     dotsContainer.innerHTML = '';
//     projectImages.forEach((_, index) => {
//         const dot = document.createElement('div');
//         dot.className = 'carousel-dot';
//         dot.addEventListener('click', () => goToSlide(index));
//         dotsContainer.appendChild(dot);
//     });
// }

// Update carousel display
function updateCarousel() {
    // Fade out effect
    // carouselImage.style.opacity = '0';
    
    setTimeout(() => {
        // Update image and name
        carouselImage.src = projectImages[currentIndex].image;
        projectName.textContent = projectImages[currentIndex].name;
        
        // Fade in effect
        carouselImage.onload =() =>{
            carouselImage.classList.remove('fade-out');
            carouselImage.classList.add('fade-in')
        }
        // carouselImage.style.opacity = '1';
        
        // Update dots
        // updateDots();
    }, 150);
}

// Update active dot
function updateDots() {
    const dots = dotsContainer.querySelectorAll('.carousel-dot');
    dots.forEach((dot, index) => {
        if (index === currentIndex) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

// Go to specific slide
function goToSlide(index) {
    currentIndex = index;
    updateCarousel();
}

// Previous slide
function prevSlide() {
    currentIndex = (currentIndex - 1 + projectImages.length) % projectImages.length;
    updateCarousel();
}

// Next slide
function nextSlide() {
    currentIndex = (currentIndex + 1) % projectImages.length;
    updateCarousel();
}

// Event listeners
prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        prevSlide();
    } else if (e.key === 'ArrowRight') {
        nextSlide();
    }
});

// Auto-play carousel (optional - remove if not needed)
let autoPlayInterval;

function startAutoPlay() {
    autoPlayInterval = setInterval(nextSlide, 3000); // Change slide every 5 seconds
}

function stopAutoPlay() {
    clearInterval(autoPlayInterval);
}

// Start auto-play when page loads
// startAutoPlay();

// Stop auto-play when user interacts
prevBtn.addEventListener('click', stopAutoPlay);
nextBtn.addEventListener('click', stopAutoPlay);
dotsContainer.addEventListener('click', stopAutoPlay);

// Initialize carousel when DOM is loaded
document.addEventListener('DOMContentLoaded', initCarousel);