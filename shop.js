function loc(lat, lon) {
    this.lat = lat;
    this.lon = lon;
}

function shop(location, name, url) {
    this.location = location;
    this.shopName = name;
    this.url = url;
    this.callOutName = function() {
      console.log(this.shopName);
    }
}

// returns an array of shops
function getShops() {
    return [
        new shop(new loc(39.255528, -94.36172512), "Exile Tattoo", "exiletattoo.net"),
        new shop(new loc(39.340398, -94.34508404), "The Mercy Seat", "http://www.mercyseattattoo.com"),
        new shop(new loc(38.5937748, -94.35402324), "Irezumi Tattoo", "http://irezumitattookc.com/"),
        new shop(new loc(39.354291, -94.357378), "Ink Parlor",
            "http://www.theinkparlor.com"),
        new shop(new loc(38.564756, -94.350016), "Beautiful Body Tattoo", "http://www.beautifulbodytattoo.com"),
        new shop(new loc(39.133669, -94.3432163), "A1 Tattoo Co",
            "https://www.facebook.com/A1-Tattoo-Co-1384699290-94/"),
        new shop(new loc(39.519890, -94.352230), "Old Souls tattoo Parlor",
            "http://oldsoulstattoo.com/home.html"),
        new shop(new loc(39.2584988, -94.356986), "Stormy Tattoo", "www.stormytattoo.com"),
        new shop(new loc(39.53165, -94.358289), "Windhorse Tattoo and Gallery",
            "www.NOWEBSITE.ORG"),
        new shop(new loc(39.32095, -94.3548678), "Hand and Dagger Tattoo",
            "https://www.handanddaggertattoo.com")
    ]
}