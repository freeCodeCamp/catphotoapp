import React from 'react';
import {render} from 'react-dom';
import {cats} from './cats';
import ResultCard from './ResultCard';

let local = Lockr.get('cats'),
    allCats;

if(local){
  allCats = local;
}else{
  cats.cats.forEach(function(ourCat){
    Lockr.sadd('cats', ourCat);
    allCats = Lockr.get('cats');
  });
}
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
            {Object.keys(allCats).map(function(key) {
              return <ResultCard key={key} cat={allCats[key]} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}
export default Results;
