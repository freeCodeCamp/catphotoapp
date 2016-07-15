import React from 'react';
import {render} from 'react-dom';
import ResultCard from './Results/ResultCard';

class Results extends React.Component {
  searchByInput(){
    this.props.updateSearch(this.refs.search.value.toLowerCase());
  }
  searchByTag(tag){
    this.props.updateSearch(tag.toLowerCase());
  }
  render() {

    let searchVal;
    if(this.props.search === ''){
      searchVal = ' ';
    }else{
      searchVal = this.props.search;
    }

    let preFilteredCats = this.props.cats.filter((cat) => {
      let lowerTags = [],
          formatTags = cat.tags.forEach(function(tag){
            lowerTags.push(tag.toLowerCase());
          });
        return lowerTags.includes(this.props.search);
      });
    let filteredCats;

    if(preFilteredCats.length === 0){
      filteredCats = this.props.cats;
    }else{
      filteredCats = preFilteredCats;
    }
    return(
      <div className="container">
        <input type="text"
          placeholder="Search for cat tags here, or click on a cat tag..."
          ref="search" onChange={this.searchByInput.bind(this)}
          value={this.props.search}
                                     />
        <div className="results">
          <div className="row">
            {filteredCats.map((cat) => {
              return <ResultCard searchByTag={this.searchByTag.bind(this)} key={cat.id} cat={cat} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Results;
