const linkItemsButtons = [
  {
    id: "emailLink",
    text: "SEND ME AN EMAIL",
    url: "mailto:gloriadedo100@gmail.com?subject=Hey%20Gloria%20Dedo,%20I%20would%20love%20to%20work%20with%20you",
    target: "_blank",
  },
  {
    id: "projectLink",
    text: "VIEW MY PROJECTS",
    url: "projects.html",
    target: "_blank",
  },
  {
    id: "knowMe",
    text: "GET TO KNOW ME MORE",
    url: "about.html",
    target: "_blank",
  },
];

function createButton(buttonData) {
  return `
    <div  ">
                            <a href="${buttonData.url}"
                            target="${buttonData.target}"
                            id="${buttonData.id}"
                            
                            class="spread-bg flex items-center relative overflow-hidden bg-[#262226] text-white px-4 py-3   rounded-full hover:bg-[#FF99FF] transition-colors duration-500  font-['Jost',sans-serif] hover:text-[#262226] group">
                            <div class="w-[20px] h-[15px] flex items-center justify-center mr-2 relative">
                                <i
                                    class="fas fa-long-arrow-right absolute opacity-0 transition-all duration-300 delay-100 group-hover:opacity-100 z-10"></i>
                                <span
                                    class="w-[20px] group-hover:opacity-0 group-hover:scale-75 h-[20px] rounded-full bg-[#FF99FF] transition-all duration-300"></span>
                            </div>
                            <span class="relative z-10 text-xs md:text-sm ">${buttonData.text}</span>
                        </a>
    </div>

    `;
}

// putting buttons on page based on the array index
function initButtons() {
  document.getElementById("emailButtonContainer").innerHTML = createButton(
    linkItemsButtons[0],

    document.getElementById("projectLinkContainer").innerHTML = createButton(
        linkItemsButtons[1],
    ),
    document.getElementById("moreAboutMe").innerHTML = createButton(
        linkItemsButtons[2]
    )
);
}