

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
      window.displayMap = this.displayMap;
      const script = document.createElement("script");
      script.defer = true;
      script.id = "google_api";
      script.src =
        "https://maps.googleapis.com/maps/api/js?key=AIzaSyAPL1Ofx-vSERWL0kk3JYTtugha2sgv_Xs&callback=displayMap";
      script.async = true;
      document.body.appendChild(script);
    }
    console.log("Did mount");
  }
  displayMap() {
    console.log("this is a:" + this);
    console.log("displayMap called");
    var map = new google.maps.Map(document.getElementById("map"), {
      zoom: 9,
      center: { lat: 39.255, lng: -94.361 }
    });
    if (this.props.shops != null) {
      console.log("about to add shop markers");
      /// Add markers here///

      
    }
  }

  constructor(props) {
    super(props);
    this.displayMap = this.displayMap.bind(this);
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
var shops = [{ lat: 39.255, lng: -94.361 }, { lat: 39.5, lng: -94.361 }];

const rootElement = document.getElementById("root");

ReactDOM.render(<MapComponent shops={shops} />, rootElement);
