function openExpert(evt, expertType) {
    evt.preventDefault();
    evt.stopPropagation();
    // Declare all variables
    var i, tabContent, tabLinks;

    // Get all elements with class="tabContent" and hide them
    tabContent = document.getElementsByClassName("tabContent");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tabLinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tabLinks.length; i++) {
        tabLinks[i].classList.remove("text-pink-400", "border-pink-400");
        tabLinks[i].classList.remove("text-pink-400", "border-pink-400");
        // tabLinks[i].className = tabLinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(expertType).style.display = "block";

    // Style the active button
    evt.currentTarget.classList.remove("text-gray-400", "border-transparent");
    evt.currentTarget.classList.add("text-pink-400", "border-pink-400");
    // evt.currentTarget.className += " active";
}

// Show the first tab by default
document.addEventListener('DOMContentLoaded', function() {
    // Set initial active state
    document.querySelector('.tablinks').classList.add("text-pink-400", "border-pink-400");
    document.querySelector('.tablinks').classList.remove("text-gray-400", "border-transparent");
    
    // Show first tab content
    document.getElementById('design').style.display = "block";
});

