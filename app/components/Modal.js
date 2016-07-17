import React from 'react';
import {render} from 'react-dom';

class Modal extends React.Component {
  constructor(){
    super();
    this.state ={
      validTitle: "validate",
      catId: "NotUpdated"
    };
  }

  isTitleValid(){
    let id = this.refs.title.value.replace(/\s+/g, ''),
        existingIds = [];
    this.props.cats.forEach((cat) =>{
      existingIds.push(cat.id);
    });
    if(existingIds.indexOf(id) === -1){
      this.setState({catId: id});
      this.setState({validTitle: "validate valid"});
    }else{
      this.setState({validTitle: "validate invalid"});
    }
  }
uploadedUserCat(e){
  e.preventDefault();
  let tags = this.refs.tags.value.split(','),
      cleanTags = [],
      formatTags = tags.forEach(function(tag){
        cleanTags.push(tag.trim());
      });
      for(var a = 0; a<cleanTags.length; a++){
        if(cleanTags[a] === "" ||
        (cleanTags[a].match(/\s*/) &&
        !cleanTags[a].match(/[\w\.\\,\/\#\!\?\£<\>\$\%\^\&\*\;\:\{\}\=\-\_\`\~\(\)]/i))){
          cleanTags.splice(a, 1);
          a=0;
        }
      }
  let url = this.refs.url.value,
      cleanUrl;
  if(url.match(/(jpg|png|gif)$/i)){
    cleanUrl = url;
  }else{
    cleanUrl = "public/img/replacementCat.jpg";
  }
  let newCat =[{
        id: this.state.catId,
        title: this.refs.title.value,
        url: cleanUrl,
        tags: cleanTags,
        likes: 1
        }];
      this.props.addUserCat(newCat);
      // Clear form fields
      this.refs.title.value = '';
      this.refs.url.value = '';
      this.refs.tags.value = '';
    }

  render(){
      return(
        <div className="container">
      		<div id="addCatModal" className="modal">
      			<div className="modal-content">
      				<h4>Add Cat Photo</h4>
              <form onSubmit={this.uploadedUserCat.bind(this)}>
      					<div className="row">
      						<div className="input-field col s12">
      							<input className={this.state.validTitle}
                      onChange={this.isTitleValid.bind(this)}
                      placeholder="Enter Title" ref="title" id="title" type="text" required />
      							<label htmlFor="title" data-error="Cat title has been taken" data-success="Cat title is free to use">Title</label>
      						</div>
      					</div>
      					<div className="row">
      						<div className="input-field col s12">
      							<input placeholder="Enter URL" ref="url" id="url" type="url" className="validate" required />
      							<label htmlFor="url" data-error="Please upload a GIF, PNG or JPG" data-success="Thats a URL for sure! I hope it ends in GIF, PNG or JPG...">Cat Photo URL</label>
      						</div>
      					</div>
      					<div className="row">
      						<div className="input-field col s6">
      							<input placeholder="Separate tags with a comma" ref="tags" id="tags" type="text" required />
      							<label htmlFor="tags">Tags</label>
      						</div>
      					</div>
      					<div className="row">
      						<button id="submit-btn" className="btn waves-effect waves-blue blue darken-1 submit" type="submit" name="action">
      							<i className="fa fa-send"></i>
      							&nbsp;Submit
      						</button>
      					</div>
      				</form>
      			</div>
      		</div>
      	</div>
      );
  }
}
export default Modal;
