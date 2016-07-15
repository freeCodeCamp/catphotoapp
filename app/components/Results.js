import React from 'react';
import {render} from 'react-dom';
import ResultCard from './ResultCard';

class Results extends React.Component {
  constructor() {
    super();
    this.state = {
      search: ''
    }
  }
  updateSearch(event) {
    this.setState({search: event.target.value});
  }
  render() {
    let filtered = this.props.cats.filter((cat) => {
      return cat.tags.indexOf(this.state.search) !== -1;
    });
    return(
      <div className="container">
        <input type="text" onChange={this.updateSearch.bind(this)} value={this.state.search} />
        <div className="results">
          <div className="row">
            {filtered.map((cat) => {
              return <ResultCard key={cat.id} cat={cat} />
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Results;
