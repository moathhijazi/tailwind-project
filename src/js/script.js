var menuBtn = document.getElementById('drop-btn');
var menu= document.getElementById('drop-menu');

menuBtn.addEventListener('click' , () => {
    menu.classList.toggle('hidden')
})