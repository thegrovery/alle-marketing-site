

function SmoothScrollSetEventListeners(){
	let elements = document.querySelectorAll('a[href^="#"]');
    elements.forEach(element => {
        element.addEventListener('click', function(e){
            e.preventDefault();
            let target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({ behavior: 'smooth' });
        });
    });
}



document.addEventListener("DOMContentLoaded", function(e){
	//runs code after DOM load
    SmoothScrollSetEventListeners();
});