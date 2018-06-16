shops = getShops();
centerLoc = averageLocOfShop(shops);

function averageLocOfShop(shops) {
    // adding all lats togher and all lon together
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


function initMap2() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 9,
        center: centerLoc
    });

    for (i = 0; i < shops.length; i++) {
        /* Developer tool says that shops is undefined. Shops is defined but only inside of another frame. Forgot how to access the information of a frame that is not a parent. */
        var shop = shops[i];
        marker = new google.maps.Marker({
            position: { lat: shop.location.lat, lng: shop.location.lon },
            map: map,
            title: shop.shopName,
            clickable: true,
            label: shop.shopName,
            zoom: 5,
            /// Label allows for name to be seen at all times for every location. Find a way to have it show you less of them as you zoom out.
        });

        marker.setClickable(true);
        shop.callOutName();
        console.log("shop url " + shop.url);

        urlShop(shop, marker);
    }


    var marker = new google.maps.Marker({
        position: centerLoc,
        map: map,
        label:'Home'
    })

}

