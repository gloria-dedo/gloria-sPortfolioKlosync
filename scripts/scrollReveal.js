

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Select all elements with the 'scroll-reveal' class
    const scrollElements = document.querySelectorAll('.scroll-reveal');
  
    // Function to check if an element is in viewport
    const isElementInViewport = (el, offset = 150) => {
      const rect = el.getBoundingClientRect();
      return (
        rect.top <= (window.innerHeight - offset || document.documentElement.clientHeight - offset) &&
        rect.bottom >= 0 &&
        rect.left <= (window.innerWidth || document.documentElement.clientWidth) &&
        rect.right >= 0
      );
    };
  
    // Function to handle scroll animation
    const displayScrollElement = (element) => {
      element.classList.add('scrolled');
    };
  
    // Function to hide elements initially
    const hideScrollElement = (element) => {
      element.classList.remove('scrolled');
    };
  
    // Initialize elements to be hidden
    scrollElements.forEach((el) => {
      hideScrollElement(el);
    });
  
    // Function to handle scroll events
    const handleScrollAnimation = () => {
      scrollElements.forEach((el) => {
        if (isElementInViewport(el)) {
          displayScrollElement(el);
        }
      });
    };
  
    // Add scroll event listener
    window.addEventListener('scroll', throttleScroll(handleScrollAnimation));
    
    // Run once to check for elements already in view on page load
    handleScrollAnimation();
    
    // Throttle scroll events for better performance
    function throttleScroll(callback, wait = 10) {
      let isThrottled = false;
      return function() {
        if (!isThrottled) {
          callback();
          isThrottled = true;
          setTimeout(function() {
            isThrottled = false;
          }, wait);
        }
      }
    }
  });
  
  // Add staggered animation for elements with the same parent
  document.addEventListener('DOMContentLoaded', function() {
    const staggeredParents = document.querySelectorAll('.staggered-parent');
    
    staggeredParents.forEach(parent => {
      const children = parent.querySelectorAll('.scroll-reveal');
      children.forEach((child, index) => {
        // Add increasing delay based on index
        child.style.transitionDelay = `${index * 0.15}s`;
      });
    });
  });