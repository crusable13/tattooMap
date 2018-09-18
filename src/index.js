import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import locations from "./shop.js";
import MapComponent from "./reactMap.js"

function myBind(aFunction, obj) {
  return function () {
    console.log("this inside mybind " + this)
    aFunction.call(obj)
  }
}

function visiMarkers(aMarker) {
  aMarker.event.addListener(aMarker, "zoom_changed", function () {
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
