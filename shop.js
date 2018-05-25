
function loc(lat, lon) {
  this.lat = lat;
  this.lon = lon;
}

function shop(location, name, url) {
  this.location = location;
  this.shopName = name;
  this.url = url;
}

function getShops() {
  return [
    new shop(new loc(-25.363, 131.044), "myshop", "http://myshop.html"),
    new shop(new loc(-25.363, 132.044), "secondShop", "http://myshop2.html")
  ];
}

