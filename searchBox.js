Search Box Comp




class onSearchEnter extends React.Component {
	Render () {
		service = new google.maps.places.PlacesService(map);
		service.textSearch(request, callback);
	}
}


/*
/// Helpful example code taken from https://developers.google.com/maps/documentation/javascript/places#TextSearchRequests
/// I understand that my search box will need the Places Library to make the search box work. 
///But In this example code it is being built inside of the map itself and I don't understand how to transfer that to the proper searchBox code. Maybe I am not understanding this right?

function initialize() {
  var pyrmont = new google.maps.LatLng(-33.8665433,151.1956316);

  map = new google.maps.Map(document.getElementById('map'), {
      center: pyrmont,
      zoom: 15
    });

  var request = {
    location: pyrmont,
    radius: '500',
    query: 'restaurant'
  };

  service = new google.maps.places.PlacesService(map);
  service.textSearch(request, callback);
}

function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      var place = results[i];
      createMarker(results[i]);
    }
  }
}
*/ 