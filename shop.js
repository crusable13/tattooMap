
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
  new shop(new loc(39.255, -94.361), "Exile Tattoo", "exiletattoo.net"),    
  new shop(new loc(39.340, -94.345), "The Mercy Seat", "http://www.mercyseattattoo.com"),
  new shop(new loc(38.593, -94.354), "Irezumi Tattoo", "http://irezumitattookc.com/"),
  new shop(new loc(39.354, -94.357), "Ink Parlor", 
  "http://www.theinkparlor.com"),
  new shop(new loc(38.564, -94.350),"Beautiful Body Tattoo","http://www.beautifulbodytattoo.com"),

  new shop(new loc(39.136, -94.343), "A1 Tattoo Co",
  "https://www.facebook.com/A1-Tattoo-Co-1384699290-94/"),

  new shop(new loc(39.519, -94.352), "Old Souls tattoo Parlor",
  "http://oldsoulstattoo.com/home.html"),

  new shop(new loc(39.258, -94.356), "Stormy Tattoo", "www.stormytattoo.com"),

  new shop(new loc(39.531, -94.358), "Windhorse Tattoo and Gallery",
    
  "www.NOWEBSITE.ORG"),

  new shop(new loc(39.320, -94.354), "Hand and Dagger Tattoo", 
  "https://www.handanddaggertattoo.com")
  ]

}



