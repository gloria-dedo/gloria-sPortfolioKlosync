
const uiItems = [
    {
        icon: './images/uiuxIcon.svg',
        title: 'UI/UX Design'
    },
    {
        icon: './images/protoTypIcon.svg',
        title: 'Prototyping'
    },
    {
        icon: './images/GraohicDesign.svg',
        title: 'Graphic Design'
    },
    {
        icon: './images/typography.svg',
        title: 'Typography'
    },
    {
        icon: './images/branding.svg',
        title: 'Branding'
    },
    {
        icon: './images/uxresearch.svg',
        title: 'User Research'
    },
]

function loadUIitems(){
    let uiHtml = "";
    uiItems.forEach((item)=>{
        uiHtml += `
        <div class=" group flex flex-col  border-pink-300 bg-transparent border  rounded-3xl p-8  items-start justify-between min-h-[100px] md:min-h-[200px] hover:bg-linear-65 from-purple-500 to-pink-400 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 cursor-pointer">
                    <img src="${item.icon}" class=" w-8 h-8 md:w-10 md:h-10 mb-6  group-hover:invert group-hover:brightness-200">
                    <h3 class="text-white text-xs md:text-lg font-medium">${item.title}</h3>
                   </div>
        `
    });
    document.getElementById('expertiseContentUI').innerHTML = uiHtml;
}
document.addEventListener("DOMContentLoaded", function(){
    loadUIitems();
});