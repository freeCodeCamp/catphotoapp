import React from 'react';
import {render} from 'react-dom';
import {cats} from './cats';
import ResultCard from './ResultCard';

function mapObject(object, callback) {
  return Object.keys(object).map(function (key) {
    return callback(key, object[key]);
  });
}

class Results extends React.Component {
  render() {
    return(
      <div className="container">
        <div className="results">
          <div className="row">
            {Object.keys(cats.cats).map(function(key) {
              console.log(key, cats.cats[key]);
              return <ResultCard key={key} cat={cats.cats[key]} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}
export default Results;
