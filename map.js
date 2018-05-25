
function initMap() {
  var myLatLng = {lat: -25.363, lng: 130.044};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: myLatLng
  });

  shops = getShops();
  for(i = 0; i < shops.length; i++) {
    var shop = shops[i];
    new google.maps.Marker({
      position: {lat: shop.location.lat, lng: shop.location.lon},
      map:map,
      title: shop.shopName,
      clickable:true,
      label: shop.shopName
      /// Label allows for name to be seen at all times for every location. Find a way to have it show you less of them as you zoom out.
    });


  }

  var marker = new google.maps.Marker({
    position: myLatLng,
    map:map,
    title: 'Can you see'
  });
}

