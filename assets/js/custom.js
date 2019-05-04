jQuery(document).ready(function(){
    "use strict";

    // Preloader Js
    jQuery(window).on('load', function() {
        jQuery("#status").fadeOut();
        jQuery("#preloader").delay(200).fadeOut("slow");
    });

    //Shehada gallery
    $("#shehada_site").click(function() {
        $.fancybox.open([
            {
            'src':             './images/shehada/shehada1.png',
            'padding'			: 0,
            'transitionIn'		: 'none',
            'transitionOut'		: 'none',
            'type'              : 'image',
            'changeFade'        : 0
        }]);
    });

});