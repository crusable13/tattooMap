
import React from "react";
import ReactDOM from "react-dom";




class MapComponent extends React.Component {
  componentDidMount() {
    var google_script_tag = document.getElementById("google_api");
    console.log("google script tag=" + google_script_tag);

    if (google_script_tag === null) {
//      window.googleReady = this.displayCallback;
      const script = document.createElement("script");
      script.defer = true;
      script.id = "google_api";
      script.src =
        "https://maps.googleapis.com/maps/api/js?key=AIzaSyAPL1Ofx-vSERWL0kk3JYTtugha2sgv_Xs&callback=googleReady";
      script.async = true;
      document.body.appendChild(script);
    }
    console.log("Did mount");
  }

  displayMap() {
    console.log("this inside displayMap :" + this);
    console.log("displayMap called ");
    var map = new google.maps.Map(document.getElementById("map"), {
      zoom: 9,
      center: this.averageLoction()
    });
    if (this.props.shops != null) {
      console.log("about to add shop markers ");
      /// Add markers here///
      
      for (var i = 0; i < this.props.shops.length; i++) {
        /* Developer tool says that shops is undefined. Shops is defined but only inside of another frame. Forgot how to access the information of a frame that is not a parent. */
        var shop = this.props.shops[i];
        var marker = new google.maps.Marker({
          position: shop.location,
          map: map,
          title: shop.shopName,
          clickable: true,
          label: shop.shopName,
          zoom: 5
          /// Label allows for name to be seen at all times for every location. Find a way to have it show you less of them as you zoom out
        });
        this.addClickHandler(shop, marker, this.props.onResultClick)
        this.addHoverHandler(shop, marker, this.props.onResultHover)
      }
    }
  }

  addHoverHandler(aShop, aMarker, hoverFunction) {
    aMarker.addListener("mouseover", function (event){
      hoverFunction(aShop.id);
    });
  }
  
  addClickHandler(aShop, aMarker, clickFunction) {
    aMarker.addListener("click", function (event) {
 //     this.props.onResultClick(shop.id)
      clickFunction(aShop.id);
    });
  } 

  averageLoction() {
    var lat = 0;
    var lng = 0;
    for (var i = 0; i < this.props.shops.length; i++) {
      console.log(i);
      lat = this.props.shops[i].location.lat + lat;
      lng = this.props.shops[i].location.lng + lng;
    }
    lat = lat / this.props.shops.length;
    lng = lng / this.props.shops.length;
    return { lat: lat, lng: lng };
  }

  constructor(props) {
    super(props);
//   this.displayCallback = this.displayMap.bind(this);
    window.googleReady = this.displayMap.bind(this)
    console.log("constructor ");
    // intentionally empty
  }
  render() {
    const style = {
      width: "100vw",
      height: "100vh",
      backgroundColor: "blue"
    };
    return (
      <div>
        <div style={style} id="map">
          Map here
        </div>
        <div >
      </div>
    );
  }
}

function myBind(aFunction, obj) {
  return function () {
    console.log("this inside mybind " + this)
    aFunction.call(obj)
  }
}


function visiMarkers(aMarker) {
  aMarker.event.addListener(map, "zoom_changed", function () {
    var i;
    var zoom = markers[i].getZoom();
    for (i = 0; i < locations.length; i++) {
      markers[i].setVisible(zoom <= 15);
      console.log("Your stuff is visible:" + markers[i].setVisible);
    }
  });
}

var shops = [
  {
    id: "1",
    location: { lat: 39.255, lng: -94.361 },
    shopName: "first Place"
  },
  {
    id: "2",
    location: { lat: 39.5, lng: -94.361 },
    shopName: "seccond Name"
  }
];
var markers = [];
const rootElement = document.getElementById("root");
function resultClick(id) {
  console.log("You just clicked something with an id:" + id);
}
function hover(id) {
  console.log("You just hovered:" + id);
}

ReactDOM.render(
  <MapComponent
    shops={shops}
    onResultClick={resultClick}
    onResultHover={hover}
    isVisible={visiMarkers}
  />,
  rootElement
);
