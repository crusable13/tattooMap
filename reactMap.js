

import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

var returnedValues = ["div", "h1", "h2"];
var jsx = ["h1", "h2", "div", "App", "SearchBox", "form", "input"];
var varl = ["h1", "h2", "div", "form", "input"]; // https://developer.mozilla.org/en-US/docs/Web/HTML/Element
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <SearchBox name="Nathan" showName={true} />
        <h1>Another header</h1>
        <SearchBox name="Chris" showName={true} />
        <h1> Mom's SearchBox </h1>
        <SearchBox name="Fran" showName={true} />
      </div>
    );
  }
}

class SearchBox extends React.Component {
  render() {
    return (
      <form>
        {this.props.showName === true ? this.props.name : "Nothing"}
        <input type="text" />
      </form>
    );
  }
}

class MapComponent extends React.Component {
  componentDidMount() {
    var google_script_tag = document.getElementById("google_api");
    console.log("google script tag=" + google_script_tag);

    if (google_script_tag === null) {
      window.googleReady = this.displayMap;
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
    console.log("this is a:" + this);
    console.log("displayMap called ");
    var map = new google.maps.Map(document.getElementById("map"), {
      zoom: 9,
      center: this.averageLoction()
    });
    if (this.props.shops != null) {
      console.log("about to add shop markers " );
      /// Add markers here///

      for (var i = 0; i < this.props.shops.length; i++) {
        /* Developer tool says that shops is undefined. Shops is defined but only inside of another frame. Forgot how to access the information of a frame that is not a parent. */
        var shop = this.props.shops[i]
        var marker = new google.maps.Marker({
          position: shop.location,
          map: map,
          title: shop.shopName,
          clickable: true,
          label: shop.shopName,
          zoom: 5
          /// Label allows for name to be seen at all times for every location. Find a way to have it show you less of them as you zoom out
        });

      }

    }
  }

  averageLoction() { 
    var lat = 0;
    var lng = 0;
    for( var i = 0; i < this.props.shops.length; i++) {
      console.log(i)
      lat = this.props.shops[i].location.lat + lat;
      lng = this.props.shops[i].location.lng + lng;
    }
    lat = lat/this.props.shops.length
    lng = lng/this.props.shops.length
    return {lat: lat, lng: lng}
  }

  constructor(props) {
    super(props);
    this.displayMap = this.displayMap.bind(this);
    console.log("constructor ")
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
        <div />
      </div>
    );
  }
}
var shops = [
  {
    id: "1",
    location:{ lat: 39.255, lng: -94.361 },
    shopName: "first Place"
  }
, 
{
  id: "2",
  location:{ lat: 39.5, lng: -94.361 },
  shopName: "seccond Name"
}];
var markers = [];
const rootElement = document.getElementById("root");
function resultClick(id) {
  console.log("You just clicked something with an id:" + id)
}

ReactDOM.render(<MapComponent shops={shops} onResultClick={resultClick}/>, rootElement);
