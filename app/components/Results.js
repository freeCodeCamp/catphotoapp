import React from 'react';
import {render} from 'react-dom';
import Card from './Results/Card';

export default class Results extends React.Component {
  constructor() {
    super();
    this.state = {
      animateClass: ""
    };
  }

  searchByInput() {
    this.props.updateSearch(this.refs.search.value.toLowerCase());
    if (this.props.search.length > 1){
      this.setState({animateClass: "animate"});
    }
  }

  searchByTag(tag) {
    this.props.updateSearch(tag.toLowerCase());
    this.setState({animateClass: "animate"});
  }

  render() {
    let preFilteredCats = this.props.cats.filter((cat) => {
      let lowerTags = [];
      let formatTags = cat.tags.forEach((tag) => {
        lowerTags.push(tag.toLowerCase());
      });
      return (lowerTags.indexOf(this.props.search) !== -1);
    });

    let filteredCats;

    if (preFilteredCats.length === 0) {
      filteredCats = this.props.cats;
    } else {
      filteredCats = preFilteredCats;
    }
    return(
      <div className="container">
        <div className="row">
          <div className="input-field col s12">
            <img
              className={"clear-icon prefix " + (this.state.animateClass)}
              src="public/img/icons/ic_loupe_black_24px.svg"
              onClick={this.props.clearSearch}
              />
            <input type="text"
              placeholder="Search for cat tags here, or click on a cat tag..."
              ref="search"
              id="searchBar"
              onChange={this.searchByInput.bind(this)}
              value={this.props.search}
              />
          </div>
        </div>
        <div className="results">
          <div className="row">
            {filteredCats.map((cat) => {
              return <Card
                      searchByTag={this.searchByTag.bind(this)}
                      key={cat.id}
                      cat={cat}
                      />;
            })}
          </div>
        </div>
      </div>
    );
  }
}
