window.Popper = require("popper.js").default;
window.$ = window.jQuery = require("jquery");

require("bootstrap");


// menu-bar
document.querySelector('.menu-bar').addEventListener('click', function(e){
    this.classList.toggle('rotate');  
    document.querySelector('.sidebar').classList.toggle('show');
})