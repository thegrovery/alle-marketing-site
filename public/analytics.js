/* ===== =================================== ===== */
/* ===== Main Function - Simple Event Pusher ===== */
/* ===== =================================== ===== */
function AnalyticsBundle(){
    let consoleLogPrefix = "SimpleAnalyticsEvent |";

    function SimpleAnalyticsEvent(event_name){
        console.log(`${consoleLogPrefix} event triggered: ${event_name}`);

        try {
            //Push event to datalayer
            window.dataLayer = window.dataLayer || [];
            dataLayer.push({
                'event': "dynamic_event_name",
                'event_detail': event_name,
            });
            console.log(`${consoleLogPrefix} event push success: ${event_name}`);
        } catch (e) {
            console.log(`${consoleLogPrefix} event push error: ${event_name}`);
        }
    };  

    function SimpleAnalyticsEventListeners(){
        //Standard click events
        let clickElements = document.querySelectorAll('[data-click-event]');
        clickElements.forEach(element => {
            let event_name = element.getAttribute("data-click-event");
            console.log(`${consoleLogPrefix} event element ready: ${event_name}`);
            element.addEventListener('click', function() {
                SimpleAnalyticsEvent(event_name);
            }, false);
        });
    }

    //Run event listeners
    SimpleAnalyticsEventListeners();

    
};

document.addEventListener("DOMContentLoaded", function(e){
    //runs code after DOM load
    AnalyticsBundle();
});