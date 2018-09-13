jQuery(document).ready(function(){
    "use strict";
// Preloader Js
jQuery(window).on('load', function() {
    jQuery("#status").fadeOut();
    jQuery("#preloader").delay(200).fadeOut("slow");
});

});