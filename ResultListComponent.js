import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class ResultCellComponent extends React.Component {
  componentDidMount() {
    console.log("componentDidMount Called " + this.props.shop.id)
    var rowElement = document.getElementById(this.props.shop.id)
    var innerResultHover = this.props.resultHover;
    var shop = this.props.shop;
    rowElement.addEventListener('mouseover', function () {
      innerResultHover(shop.id)
    })
  };
  constructor(props) {
    super(props)

  };
  render() {
    const style = {
      width: "100vw",
      height: "100vh",
      backgroundColor: "blue",
      border: "1px" "solid black";
    };
    return (
      <tr id={this.props.shop.id}>
        <td>
          {this.props.shop.shopName}
        </td>
      </tr>
    );
  };
};
const shops = [
  {
    id: 1,
    shopName: "My shop",
    location: { lat: 134, lng: 200 }
  },
  {
    id: 2,
    shopName: "Tat shop",
    location: { lat: 155, lng: 200 }
  }
]
const rootElement = document.getElementById("root")

function onResultHover(id) {
  console.log("onResultHover called " + id);
};


class ResultListComponent extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    var cells = [];
    for (var i = 0; i < this.props.shops.length; i++) {
      var cell = <ResultCellComponent key={shops[i].id} shop={shops[i]} resultHover={onResultHover} />
      cells.push(cell)
    }
    return (
      /*
      <style>
        thead {color: green;}
tbody {color: blue;}
tfoot {color: red;}
        
table, th, td {
          border: 1px solid black;
    }
</style>  */  // I got this idea from example code at https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_tbody but for some reason no matter which render I put it in it won't work
      <table >
        <tbody>
          {cells}
        </tbody>
      </table>
    )
  }
};

ReactDOM.render(
  (<ResultListComponent shops={shops} resultHover={onResultHover} />
    //  <table>
    //     <ResultCellComponent shop={shops[0]} resultHover={onResultHover}/>
    //     <ResultCellComponent shop={shops[1]} resultHover={onResultHover}/>

    //  </table>
  ),
  rootElement
);

