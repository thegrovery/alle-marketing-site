

function SmoothScrollSetEventListeners(){
    console.log("SmoothScrollSetEventListeners started");
	let elements = document.querySelectorAll('a[href*="#"]');
    elements.forEach(element => {
        console.log("SmoothScrollSetEventListeners element found");
        element.setAttribute('data-smooth-scroll', 'true');
        element.addEventListener('click', function(e){
            console.log("SmoothScrollSetEventListeners element clicked");
            // Get the current page path and the link's path
            const currentPath = window.location.pathname;
            const linkPath = this.getAttribute('href').split('#')[0];
            
            // Check if we're on the same page (either both root "/" or matching paths)
            if (currentPath === "" || currentPath === "/") {
                e.preventDefault();
                console.log("SmoothScrollSetEventListeners - same page, scrolling to element");
                let target = document.querySelector(this.getAttribute('href').replace(/^\//, ''));
                console.log(target);
                target.scrollIntoView({ behavior: 'smooth' });
            } else{
                // If different page, let the default link behavior happen
                console.log("SmoothScrollSetEventListeners - different page, default link behavior");
                
            }
            
        });
    });
    console.log("SmoothScrollSetEventListeners finished");
}



document.addEventListener("DOMContentLoaded", function(e){
	//runs code after DOM load
    console.log("DOM loaded");
    SmoothScrollSetEventListeners();
    console.log("Functions Ran");
});