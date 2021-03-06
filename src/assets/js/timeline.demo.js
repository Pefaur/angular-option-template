/*
Template Name: Color Admin - Responsive Admin Dashboard Template build with Twitter Bootstrap 3.3.7 & Bootstrap 4.0.0-Alpha 6
Version: 3.0.0
Author: Sean Ngu
Website: http://www.seantheme.com/color-admin-v3.0/admin/angularjs4/
*/

var handleTimelineGoogleMapSetting = function() {
	"use strict";
	var mapDefault;
	var cobaltStyles  = [{"featureType":"all","elementType":"all","stylers":[{"invert_lightness":true},{"saturation":10},{"lightness":10},{"gamma":0.8},{"hue":"#293036"}]},{"featureType":"water","stylers":[{"visibility":"on"},{"color":"#293036"}]}];
    
	function initialize() {
		var mapOptions = {
			zoom: 6,
			center: new google.maps.LatLng(-33.397, 145.644),
			mapTypeId: google.maps.MapTypeId.ROADMAP,
            disableDefaultUI: true,
		};
		mapDefault = new google.maps.Map(document.getElementById('google-map'), mapOptions);
        mapDefault.setOptions({styles: cobaltStyles});
	}
	initialize();
	
};

var handleTimelineGoogleMapLoaded = function() {
    $(window).trigger("googleMapLoaded");
};

var handleLoadTimelineGoogleMap = function() {
    $.getScript("http://maps.google.com/maps/api/js?sensor=false&callback=handleGoogleMapLoaded");
};


var Timeline = function () {
	"use strict";
    return {
        //main function
        init: function () {
            $(window).unbind('googleMapLoaded');
            $(window).bind('googleMapLoaded', handleTimelineGoogleMapSetting);
            handleLoadTimelineGoogleMap();
        }
    };
}();

window.addEventListener('page-extra-timeline-ready', function(e) {
    Timeline.init();
});