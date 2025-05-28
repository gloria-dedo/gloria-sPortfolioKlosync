// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Menu functionality
    const menuButton = document.getElementById('menuButton');
    const mobileMenu = document.getElementById('mobileMenu');
    const menuLinks = document.querySelectorAll('.menu-link');
    
    // You need to declare this variable
    let isMenuOpen = false;

    console.log('Menu elements:', { menuButton, mobileMenu }); // Debug log

    // Toggle menu
    function toggleMenu() {
        console.log('Toggle menu called, current state:', isMenuOpen); // Debug log
        
        if (!isMenuOpen) {
            // OPEN MENU
            console.log('Opening menu');
            
            // Show menu overlay
            mobileMenu.classList.remove('opacity-0', 'invisible');
            mobileMenu.classList.add('visible');
            document.body.style.overflow = 'hidden';
            
            // Change button to close icon
            menuButton.innerHTML = '<i class="fas fa-times text-white text-2xl"></i>';
            
            isMenuOpen = true;
            
        } else {
            // CLOSE MENU
            console.log('Closing menu');
            
            // Hide menu overlay
            mobileMenu.classList.add('opacity-0', 'invisible');
            mobileMenu.classList.remove('visible');
            document.body.style.overflow = 'auto';
            
            // Change button back to menu icon
            menuButton.innerHTML = '<img src="./images/tabmenu.svg" alt="Menu Icon" class="w-8 h-8">';
            
            isMenuOpen = false;
        }
    }

    // Event listeners
    if (menuButton) {
        menuButton.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Menu button clicked'); // Debug log
            toggleMenu();
        });
    }

    // Close menu when clicking on menu links
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (isMenuOpen) {
                toggleMenu();
            }
        });
    });

    // Close menu when clicking outside
    if (mobileMenu) {
        mobileMenu.addEventListener('click', (e) => {
            if (e.target === mobileMenu && isMenuOpen) {
                toggleMenu();
            }
        });
    }

    // Handle escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && isMenuOpen) {
            toggleMenu();
        }
    });
});
