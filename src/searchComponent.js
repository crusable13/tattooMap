class SearchComponent extends React.Component {
  constructor(props) {
    super(props);
    this.shops = props.shops;
    this.onHover = props.resultHover;
  }
  render() {
    return (
      <div>
        <ResultListComponent shops={this.shops} resultHover={this.onHover} />
        <MapComponent shops={this.shops} onResultHover={this.onHover}/>
      </div>
    );
  }
}

ReactDOM.render(
  //  (<ResultListComponent shops={shops} resultHover={onResultHover} />
  <SearchComponent shops={shops} resultHover={onResultHover} />,
  //  <table>
  //     <ResultCellComponent shop={shops[0]} resultHover={onResultHover}/>
  //     <ResultCellComponent shop={shops[1]} resultHover={onResultHover}/>

  //  </table>
  rootElement
);