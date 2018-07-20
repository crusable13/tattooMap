

import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

var shops = getShops();
var centerLoc = averageLocOfShops(shops);



class initMap2() {
    /*var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 9,
        center: centerLoc
    });
    var markers = [];
	*/
	// Everything above is what I tried to implement in the constructor. 
	// Please let me know I am misusing the constructor, or if I am not implementing this correctly. Thank you. Sorry I didn't get much done before the BBQ
	constructor(props) {
		this.map = {new google.maps.Map(document.getElementById('map'), {
			zoom: 9,
			center: centerLoc
		})};

		this.markers = {[]};

	} 

    for (i = 0; i < shops.length; i++) {
        var shop = shops[i];

        marker = new google.maps.Marker({
            position: { lat: shop.location.lat, lng: shop.location.lon },
            map: map,
            title: shop.shopName,
            clickable: true,
            label: shop.shopName,
            zoom: 5
            /// Label allows for name to be seen at all times for every location. Find a way to have it show you less of them as you zoom out
        });

        marker.setClickable(true);
        shop.callOutName();
        console.log("shop url " + shop.url);

        urlShop(shop, marker);
         markers.push(marker);
    }

    map.addListener('zoom_changed', function() {
        if (map.getZoom() < 9) {
            for(i = 0; i < markers.length; i++) {
                markers[i].setLabel(undefined);
            }
        } else {
            for(i = 0; i < markers.length; i++) {
                markers[i].setLabel(shops[i].shopName)
            }
        }
        console.log("zoom_changed event fired on map:" + map.getZoom() )
    });


    var marker = new google.maps.Marker({
        position: centerLoc,
        map: map,
        label: 'Home'
    })

}




function averageLocOfShops(shops) {
	lat = 0
	lon = 0
	for (var i = 0; i < shops.length; i++) {
        lat = lat + shops[i].location.lat;
        lon = lon + shops[i].location.lon;
    }
    console.log("location " + lat + " " + lon);
    // find the mean location or use KC
    if (shops.length == 0) {
        lat = 39.255
        lon = -94.361
    } else {
        lat = lat / shops.length
        lon = lon / shops.length
    }
    console.log("location " + lat + " " + lon);
    return { lat: lat, lng: lon };
}

function urlShop(aShop, aMarker) {
    aMarker.addListener('click', function(clickEvent) {
        window.location.href = aShop.url
    })
}

function visiMarker(aMarker) {
    // Replaced google.maps.event with aMarker
    aMarker.event.addListener(map, 'zoom_changed', function() {
        var zoom = marker[i].getZoom();
        for (i = 0; i < locations.length; i++) {
            marker[i].setVisible(zoom <= 15);
        }
    });
};