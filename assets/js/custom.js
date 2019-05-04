jQuery(document).ready(function () {
    "use strict";

    // Preloader Js
    jQuery(window).on('load', function () {
        jQuery("#status").fadeOut();
        jQuery("#preloader").delay(200).fadeOut("slow");
    });

    //Shehada gallery
    $("#shehada_site").click(function () {
        let s_url = window.location.protocol + '//' + window.location.hostname;
        $.fancybox.open([
            {
                'src': s_url + '/assets/images/shehada/shehada1.png',
                'padding': 10,
                'transitionIn': 'none',
                'transitionOut': 'none',
                'type': 'image',
                'changeFade': 0
            },
            {
                'src': s_url + '/assets/images/shehada/shehada11.png',
                'padding': 10,
                'transitionIn': 'none',
                'transitionOut': 'none',
                'type': 'image',
                'changeFade': 0
            },
            {
                'src': s_url + '/assets/images/shehada/shehada2.png',
                'padding': 10,
                'transitionIn': 'none',
                'transitionOut': 'none',
                'type': 'image',
                'changeFade': 0
            },
            {
                'src': s_url + '/assets/images/shehada/shehada21.png',
                'padding': 10,
                'transitionIn': 'none',
                'transitionOut': 'none',
                'type': 'image',
                'changeFade': 0
            },
            {
                'src': s_url + '/assets/images/shehada/shehada3.png',
                'padding': 10,
                'transitionIn': 'none',
                'transitionOut': 'none',
                'type': 'image',
                'changeFade': 0
            },
            {
                'src': s_url + '/assets/images/shehada/shehada31.png',
                'padding': 10,
                'transitionIn': 'none',
                'transitionOut': 'none',
                'type': 'image',
                'changeFade': 0
            },
        ]);
    });

});