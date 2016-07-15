import React from 'react';
import {render} from 'react-dom';
import ResultCard from './Results/ResultCard';

class Results extends React.Component {
  searchByInput(){
    this.props.updateSearch(this.refs.search.value);
  }
  searchByTag(tag){
    this.props.updateSearch(tag);
  }
  render() {

    let searchVal;
    if(this.props.search === ''){
      searchVal = ' ';
    }else{
      searchVal = this.props.search;
    }

    let preFilteredCats = this.props.cats.filter((cat) => {
      let searchVal;
      if(this.props.search === ''){
        searchVal = ' ';
      }else{
        searchVal = this.props.search;
      }
        return cat.tags.includes(searchVal);
      });
    let filteredCats;

    if(preFilteredCats.length === 0){
      filteredCats = this.props.cats;
    }else{
      filteredCats = preFilteredCats;
    }
    console.log(preFilteredCats.length);
    return(
      <div className="container">
        <input type="text" ref="search" onChange={this.searchByInput.bind(this)} value={this.props.search} />
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
