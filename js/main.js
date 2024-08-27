
//Variables
let openBtn = document.getElementById('open-btn');
let modalContainer = document.getElementById('modal-container');
let closeBtin = document.getElementById('close-btn');

//Event Listeners

//click on button to open the hidden menu

openBtn.addEventListener('click', function(){
    modalContainer.style.display = 'block';
});

// click on button to close  the hidden menu

closeBtin.addEventListener('click', function(){
    modalContainer.style.display = 'none';
});

// click any where on the browser window to close the hidden menu
window.addEventListener('click', function(e){
    // the e.target essentially returns the element that triggers the event which in this case is going to be our window element.
    if (e.target === modalContainer){
        modalContainer.style.display = 'none';
    }
});










 