/* ===== =================================== ===== */
/* ===== Main Function - Simple Event Pusher ===== */
/* ===== =================================== ===== */

function SimpleAnalyticsEvent(event_name){
    //console log tester
    console.groupCollapsed("===== Dynamically-Named Analytics Event Triggered =====");
    console.log("Event Name: [dynamic_event_name]");
    console.log("Event Detail: ["+event_name+"]");
    console.log("NOTES: To QA events, look under: Google Analytics Container > Realtime > Event Count by Event Name");
    console.groupEnd();

    try {
        //Push event to datalayer
        window.dataLayer = window.dataLayer || [];
        dataLayer.push({
            'event': "dynamic_event_name",
            'event_detail': event_name,
        });
        console.log("===== Dynamically-Named Analytics Event Pushed =====");
    } catch (e) {
        console.log("===== Dynamically-Named Analytics Event Error =====");
    }
};  

function SimpleAnalyticsEventListeners(){
    //Standard click events
    let clickElements = document.querySelectorAll('[data-click-event]');
    clickElements.forEach(element => {
        element.addEventListener('click', function() {
            let event_name = element.getAttribute("data-click-event");
            SimpleAnalyticsEvent(event_name);
        }, false);
    });
}



document.addEventListener("DOMContentLoaded", function(e){
	//runs code after DOM load
    SimpleAnalyticsEventListeners();
});