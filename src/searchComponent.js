import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import "./shop.js";
import {ResultListComponent} from"./ResultListComponent.js";
import {MapComponent} from"./reactMap.js";


export class SearchComponent extends React.Component {
  constructor(props) {
    super(props);
    this.shops = props.shops;
    this.onHover = props.resultHover;
    this.onClick = props.resultClick;
    this.visiMarkers = props.visiMarkers
    this.state = {hightlightIndex: -1}


  }

  resultClick(id) {
  console.log("You just clicked something with an id:" + id);
  }

  onResultHover(id) {
  console.log("onResultHover called " + id);
  this.setState({ hightlightIndex: id });
};
  
  render() {
    return (
      <div>
        <ResultListComponent shops={this.shops} resultHover={this.onHover} />
        <MapComponent shops={this.shops} resultHover={this.onHover} onResultClick={this.onClick} isVisible={this.visiMarkers}  />
      </div>
    );
  }
}


