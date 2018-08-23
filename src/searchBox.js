import React from 'react';
import ReactDOM from 'react-dom';


class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {searchParam: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({searchParam: event.target.value});
    this.props.onSearchUpdate(event.target.value)
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSearchEnter(this.state.searchParam)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.searchParam} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

ReactDOM.render(
  <SearchForm 
    onSearchUpdate={(searchTerm) => console.log(searchTerm)}
    onSearchEnter={(searchTerm) => console.log("searching for: " + searchTerm )}
    />,
  document.getElementById('root')
);