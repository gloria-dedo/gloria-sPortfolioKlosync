
function createNavbar() {
    return `

    <nav class="z-50 top-0 left-0 right-0 fixed flex justify-between items-center p-4 md:p-12 w-full">

            <!-- Sound Icon -->
            <div class="flex items-center">
                <i class="fas fa-volume-xmark fa-xl text-lg sm:text-xl md:text-2xl lg:text-3xl text-white hover:text-gray-300 transition-colors cursor-pointer"
                    aria-hidden="true"></i>
            </div>

            <!-- Menu Button (All Devices) -->
            <div class="flex items-center">
                <button id="menuButton"
                    class="text-white text-2xl focus:outline-none hover:scale-110 transition-transform">
                    <img src="./images/tabmenu.svg" alt="Menu Icon"
                        class="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10" id="menu-icon">
                </button>
            </div>
    </nav>

    <!-- Menu Overlay (All Devices) -->
        <div id="mobileMenu" class="fixed inset-0 z-40 menu-backdrop menu-transition opacity-0 invisible">
            <div class="flex items-center justify-center min-h-screen px-4">
                <div class="flex flex-col md:flex-row justify-around text-left gap-8 w-full max-w-5xl mx-auto ">

                    <!-- Menu Links -->
                    <div class=" flex flex-col gap-6 md:gap-10 mt-8 font-['Jost',sans-serif] ">
                        <a href="#home"
                            class="block link-item text-white text-lg md:text-3xl lg:text-4xl hover:text-pink-400 transition-colors menu-link">Home</a>
                        <a href="#about"
                            class="block link-item text-white text-lg md:text-3xl lg:text-4xl hover:text-pink-300 transition-colors menu-link">About
                            Me</a>
                        <a href="#projects"
                            class="block link-item text-white text-lg  md:text-3xl lg:text-4xl hover:text-pink-300 transition-colors menu-link">Projects</a>
                        <a href="#contact"
                            class="block link-item text-white text-lg  md:text-3xl lg:text-4xl hover:text-pink-300 transition-colors menu-link">Contact</a>
                    </div>

                    <!-- CTA Section -->
                    <div class=" pt-8 space-y-6">
                        <p class="text-white text-xl font-[Rubik,sans-serif]  md:text-2xl font-normal">Let's talk</p>
                        <p class="text-white font-normal text-xl  md:text-xl leading-relaxed">
                            I deliver experiences that resonate<br>
                            deeply with you and your audience,<br>
                            creating a timeless impact.
                        </p>
                        <h4 class="flex items-center">
                            <span
                                class="w-[10px] h-[10px] rounded-full bg-[#FF99FF] inline-block align-middle mr-2"></span>
                            <span class="text-white text-sm md:text-base">Available for work</span>
                        </h4>

                        <div id="emailButtonContainer" class="flex w-1/2 md:w-[70%]">                           
                        </div>
                        
                    </div>

                    <!-- Close Button -->
                    <button id="close-icon"
                        class="hidden text-white text-xl hover:text-pink-300 transition-colors mt-8">
                        <i class="fas fa-times fa-2x"></i>
                    </button>
                </div>
            </div>
        </div>

    
    
    `

}
function loadNavbar() {
    document.getElementById('navbar').innerHTML = createNavbar();
    initButtons();
    // initNavbar(); 
}
loadNavbar();