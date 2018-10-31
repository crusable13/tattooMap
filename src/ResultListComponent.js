import React from "react";
import ReactDOM from "react-dom";


export class ResultCellComponent extends React.Component {
  componentDidMount() {
    console.log("componentDidMount Called " + this.props.shop.id)

    var rowElement = document.getElementById(this.props.idPrefix + this.props.shop.id)
    var innerResultHover = this.props.resultHover;
    var shop = this.props.shop;
    rowElement.addEventListener('mouseover', function() {
      innerResultHover(shop.id)
    })
  };
  constructor(props) {
    super(props)

  };
  render() {
    const style = {
      width: "100vw",
      height: "10vh",
      backgroundColor: this.props.color,
      border: "2px solid black"
    };
    return (
      <tr id={this.props.idPrefix + this.props.shop.id}>
        <td style={style}>
          {this.props.shop.shopName}
        </td>
      </tr>
    );
  };
};
const shops = [
  {
    id: 0,
    shopName: "My shop",
    location: { lat: 134, lng: 200 }
  },
  {
    id: 1,
    shopName: "Tat shop",
    location: { lat: 155, lng: 200 }
  }
]
const rootElement = document.getElementById("root")


export class ResultListComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hightlightIndex: props.hightlightIndex };
  }

  onResultHover(id) {
  console.log("onResultHover called " + id);
  this.setState({ hightlightIndex: id });
};

  render() {
    var cells = [];
    var color = "red";
    for (var i = 0; i < this.props.shops.length; i++) {
      if (this.state.hightlightIndex === i) {
        color = "green";
      } else {
        color = "red";
      }
      var cell = (
        <ResultCellComponent
          idPrefix="first"
          key={shops[i].id}
          shop={shops[i]}
          resultHover={this.onResultHover.bind(this)}
          color={color}
        />
      );
      cells.push(cell);
    }

    return (
  
      <table >
        <tbody>
          {cells}
        </tbody>
      </table>
    )
  }
};

ReactDOM.render(
  (<ResultListComponent 
    shops={shops} 
    resultHover={this.onResultHover}
     />
    
  ),
  rootElement
);


