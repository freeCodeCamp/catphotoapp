(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _cats = require('./components/cats');

var _Navbar = require('./components/Navbar');

var _Navbar2 = _interopRequireDefault(_Navbar);

var _Modal = require('./components/Modal');

var _Modal2 = _interopRequireDefault(_Modal);

var _Results = require('./components/Results');

var _Results2 = _interopRequireDefault(_Results);

var _Footer = require('./components/Footer');

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    // retrieve cats from local storage

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(App).call(this));

    var local = Lockr.get('cats'),
        allCats = void 0;
    if (local) {
      allCats = local;
    } else {
      // if not cats in local storage, put them there
      _cats.cats.cats.forEach(function (ourCat) {
        Lockr.sadd('cats', ourCat);
        allCats = Lockr.get('cats');
      });
    }
    _this.state = {
      cats: allCats,
      search: '',
      validTitle: ''
    };
    return _this;
  }

  _createClass(App, [{
    key: 'storeCats',
    value: function storeCats(cats) {
      Lockr.flush();
      cats.forEach(function (localCat) {
        Lockr.sadd('cats', localCat);
      });
    }
  }, {
    key: 'addUserCat',
    value: function addUserCat(newCat) {
      this.setState({ cats: newCat.concat(this.state.cats) });
      this.storeCats(this.state.cats);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      var prevState = arguments.length <= 0 || arguments[0] === undefined ? this.state.cats : arguments[0];

      this.storeCats(this.state.cats);
    }
  }, {
    key: 'updateSearch',
    value: function updateSearch(newSearch) {
      newSearch.toLowerCase();
      this.setState({ search: newSearch });
    }
  }, {
    key: 'isTitleValid',
    value: function isTitleValid(valid) {
      this.setState({ validTitle: valid });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Navbar2.default, null),
        _react2.default.createElement(_Modal2.default, { addUserCat: this.addUserCat.bind(this),
          cats: this.state.cats }),
        _react2.default.createElement(_Results2.default, { updateSearch: this.updateSearch.bind(this),
          search: this.state.search, cats: this.state.cats }),
        _react2.default.createElement(_Footer2.default, null)
      );
    }
  }]);

  return App;
}(_react2.default.Component);

(0, _reactDom.render)(_react2.default.createElement(App, null), document.getElementById('app'));

},{"./components/Footer":2,"./components/Modal":3,"./components/Navbar":4,"./components/Results":5,"./components/cats":11,"react":"react","react-dom":"react-dom"}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Footer = function (_React$Component) {
  _inherits(Footer, _React$Component);

  function Footer() {
    _classCallCheck(this, Footer);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Footer).apply(this, arguments));
  }

  _createClass(Footer, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'footer',
        { className: 'page-footer blue darken-2' },
        _react2.default.createElement(
          'div',
          { className: 'container' },
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'h5',
              { className: 'white-text' },
              'CatPhotoApp'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'p',
              { className: 'grey-text text-lighten-4' },
              'CatPhotoApp has been created to form part of the ',
              _react2.default.createElement(
                'a',
                { href: 'https://freecodecamp.com', target: '_blank' },
                'Free Code Camp'
              ),
              ' curriculum.'
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'footer-copyright' },
          _react2.default.createElement(
            'div',
            { className: 'container' },
            '© 2016 CatPhotoApp',
            _react2.default.createElement(
              'a',
              { className: 'grey-text text-lighten-4 right', href: 'https://github.com/atjonathan/catphotoapp/' },
              'GitHub'
            )
          )
        )
      );
    }
  }]);

  return Footer;
}(_react2.default.Component);

exports.default = Footer;

},{"react":"react","react-dom":"react-dom"}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Modal = function (_React$Component) {
  _inherits(Modal, _React$Component);

  function Modal() {
    _classCallCheck(this, Modal);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Modal).call(this));

    _this.state = {
      validTitle: "validate",
      catId: ""
    };
    return _this;
  }

  _createClass(Modal, [{
    key: 'isTitleValid',
    value: function isTitleValid() {
      var id = this.refs.title.value.replace(/\s+/g, ''),
          existingIds = [];
      this.props.cats.forEach(function (cat) {
        existingIds.push(cat.id);
      });
      if (existingIds.indexOf(id) === -1) {
        this.setState({ validTitle: "validate valid", catID: id });
      } else {
        this.setState({ validTitle: "validate invalid" });
      }
    }
  }, {
    key: 'uploadedUserCat',
    value: function uploadedUserCat(e) {
      e.preventDefault();
      var tags = this.refs.tags.value.split(','),
          cleanTags = [],
          formatTags = tags.forEach(function (tag) {
        cleanTags.push(tag.trim());
      });
      var url = this.refs.url.value,
          cleanUrl = void 0;
      if (url.match(/(jpg|png|gif)$/i)) {
        cleanUrl = url;
      } else {
        cleanUrl = "public/img/replacementCat.jpg";
      }
      var newCat = [{
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
  }, {
    key: 'render',
    value: function render() {
      console.log(this.state.validTitle);
      return _react2.default.createElement(
        'div',
        { className: 'container' },
        _react2.default.createElement(
          'div',
          { id: 'addCatModal', className: 'modal' },
          _react2.default.createElement(
            'div',
            { className: 'modal-content' },
            _react2.default.createElement(
              'h4',
              null,
              'Add Cat Photo'
            ),
            _react2.default.createElement(
              'form',
              { onSubmit: this.uploadedUserCat.bind(this) },
              _react2.default.createElement(
                'div',
                { className: 'row' },
                _react2.default.createElement(
                  'div',
                  { className: 'input-field col s12' },
                  _react2.default.createElement('input', { className: this.state.validTitle,
                    onChange: this.isTitleValid.bind(this),
                    placeholder: 'Enter Title', ref: 'title', id: 'title', type: 'text', required: true }),
                  _react2.default.createElement(
                    'label',
                    { htmlFor: 'title', 'data-error': 'Cat title has been taken', 'data-success': 'Cat title is free to use' },
                    'Title'
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'row' },
                _react2.default.createElement(
                  'div',
                  { className: 'input-field col s12' },
                  _react2.default.createElement('input', { placeholder: 'Enter URL', ref: 'url', id: 'url', type: 'url', className: 'validate', required: true }),
                  _react2.default.createElement(
                    'label',
                    { htmlFor: 'url', 'data-error': 'Please upload a GIF, PNG or JPG', 'data-success': 'Thats a URL for sure! I hope it ends in GIF, PNG or JPG...' },
                    'Cat Photo URL'
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'row' },
                _react2.default.createElement(
                  'div',
                  { className: 'input-field col s6' },
                  _react2.default.createElement('input', { placeholder: 'Separate tags with a comma', ref: 'tags', id: 'tags', type: 'text', required: true }),
                  _react2.default.createElement(
                    'label',
                    { htmlFor: 'tags' },
                    'Tags'
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'row' },
                _react2.default.createElement(
                  'button',
                  { id: 'submit-btn', className: 'btn waves-effect waves-blue blue darken-1 submit', type: 'submit', name: 'action' },
                  _react2.default.createElement('i', { className: 'fa fa-send' }),
                  ' Submit'
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Modal;
}(_react2.default.Component);

exports.default = Modal;

},{"react":"react","react-dom":"react-dom"}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Navbar = function (_React$Component) {
  _inherits(Navbar, _React$Component);

  function Navbar() {
    _classCallCheck(this, Navbar);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Navbar).apply(this, arguments));
  }

  _createClass(Navbar, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'nav',
        null,
        _react2.default.createElement(
          'div',
          { className: 'nav-wrapper blue darken-2' },
          _react2.default.createElement(
            'a',
            { href: '#', className: 'brand-logo' },
            '   CatPhotoApp'
          ),
          _react2.default.createElement(
            'a',
            { href: '#', 'data-activates': 'mobile', className: 'button-collapse' },
            _react2.default.createElement('i', { className: 'fa fa-bars' })
          ),
          _react2.default.createElement(
            'ul',
            { id: 'nav-mobile', className: 'right hide-on-med-and-down' },
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'a',
                { className: 'modal-trigger', href: '#addCatModal' },
                'Add Cat Photo'
              )
            )
          ),
          _react2.default.createElement(
            'ul',
            { className: 'side-nav', id: 'mobile' },
            _react2.default.createElement(
              'li',
              null,
              _react2.default.createElement(
                'a',
                { className: 'modal-trigger', href: '#addCatModal' },
                'Add Cat Photo'
              )
            )
          )
        )
      );
    }
  }]);

  return Navbar;
}(_react2.default.Component);

exports.default = Navbar;

},{"react":"react","react-dom":"react-dom"}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _ResultCard = require('./Results/ResultCard');

var _ResultCard2 = _interopRequireDefault(_ResultCard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Results = function (_React$Component) {
  _inherits(Results, _React$Component);

  function Results() {
    _classCallCheck(this, Results);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Results).apply(this, arguments));
  }

  _createClass(Results, [{
    key: 'searchByInput',
    value: function searchByInput() {
      this.props.updateSearch(this.refs.search.value.toLowerCase());
    }
  }, {
    key: 'searchByTag',
    value: function searchByTag(tag) {
      this.props.updateSearch(tag.toLowerCase());
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var searchVal = void 0;
      if (this.props.search === '') {
        searchVal = ' ';
      } else {
        searchVal = this.props.search;
      }

      var preFilteredCats = this.props.cats.filter(function (cat) {
        var lowerTags = [],
            formatTags = cat.tags.forEach(function (tag) {
          lowerTags.push(tag.toLowerCase());
        });
        return lowerTags.includes(_this2.props.search);
      });
      var filteredCats = void 0;

      if (preFilteredCats.length === 0) {
        filteredCats = this.props.cats;
      } else {
        filteredCats = preFilteredCats;
      }
      return _react2.default.createElement(
        'div',
        { className: 'container' },
        _react2.default.createElement('input', { type: 'text',
          placeholder: 'Search for cat tags here, or click on a cat tag...',
          ref: 'search', onChange: this.searchByInput.bind(this),
          value: this.props.search
        }),
        _react2.default.createElement(
          'div',
          { className: 'results' },
          _react2.default.createElement(
            'div',
            { className: 'row' },
            filteredCats.map(function (cat) {
              return _react2.default.createElement(_ResultCard2.default, { searchByTag: _this2.searchByTag.bind(_this2), key: cat.id, cat: cat });
            })
          )
        )
      );
    }
  }]);

  return Results;
}(_react2.default.Component);

exports.default = Results;

},{"./Results/ResultCard":9,"react":"react","react-dom":"react-dom"}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CardAction = function (_React$Component) {
  _inherits(CardAction, _React$Component);

  function CardAction(props) {
    _classCallCheck(this, CardAction);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(CardAction).call(this, props));

    _this.state = {
      id: props.id,
      likes: props.likes
    };
    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  _createClass(CardAction, [{
    key: 'handleClick',
    value: function handleClick() {
      var catId = this.state.id,
          localCats = Lockr.get('cats'),
          index = void 0;
      // update like button likes
      this.setState({ likes: this.state.likes + 1 });
      // Find cat is local storage and increment likes
      index = localCats.findIndex(function (x) {
        return x.id === catId;
      });
      localCats[index].likes = this.state.likes + 1;
      // empty and update local storage
      Lockr.flush();
      localCats.forEach(function (localCat) {
        Lockr.sadd('cats', localCat);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'card-action' },
        _react2.default.createElement(
          'a',
          { className: 'waves-effect waves-light waves-red red darken-3 btn', href: this.props.url, download: this.props.url },
          _react2.default.createElement('i', { className: 'fa fa-download' })
        ),
        _react2.default.createElement(
          'button',
          { className: 'waves-effect waves-light waves-blue blue darken-3 btn',
            onClick: this.handleClick },
          _react2.default.createElement('i', { className: 'fa fa-thumbs-up' }),
          _react2.default.createElement(
            'span',
            { className: 'likes_number' },
            ' ',
            this.state.likes
          )
        )
      );
    }
  }]);

  return CardAction;
}(_react2.default.Component);

exports.default = CardAction;

},{"react":"react","react-dom":"react-dom"}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _Tag = require('./Tag');

var _Tag2 = _interopRequireDefault(_Tag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CardContent = function (_React$Component) {
  _inherits(CardContent, _React$Component);

  function CardContent() {
    _classCallCheck(this, CardContent);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(CardContent).apply(this, arguments));
  }

  _createClass(CardContent, [{
    key: 'tagClick',
    value: function tagClick(tag) {
      this.props.searchByTag(tag);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { className: 'card-content' },
        _react2.default.createElement(
          'h5',
          null,
          this.props.title
        ),
        this.props.tags.map(function (tag, key) {
          return _react2.default.createElement(_Tag2.default, { tagClick: _this2.tagClick.bind(_this2), key: key, tag: tag });
        })
      );
    }
  }]);

  return CardContent;
}(_react2.default.Component);

exports.default = CardContent;

},{"./Tag":10,"react":"react","react-dom":"react-dom"}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CatImage = function (_React$Component) {
  _inherits(CatImage, _React$Component);

  function CatImage() {
    _classCallCheck(this, CatImage);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(CatImage).apply(this, arguments));
  }

  _createClass(CatImage, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'card-image' },
        _react2.default.createElement('img', { className: 'materialboxed', src: this.props.src })
      );
    }
  }]);

  return CatImage;
}(_react2.default.Component);

exports.default = CatImage;

},{"react":"react","react-dom":"react-dom"}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _CatImage = require('./CatImage');

var _CatImage2 = _interopRequireDefault(_CatImage);

var _CardContent = require('./CardContent');

var _CardContent2 = _interopRequireDefault(_CardContent);

var _CardAction = require('./CardAction');

var _CardAction2 = _interopRequireDefault(_CardAction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ResultCard = function (_React$Component) {
  _inherits(ResultCard, _React$Component);

  function ResultCard() {
    _classCallCheck(this, ResultCard);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(ResultCard).apply(this, arguments));
  }

  _createClass(ResultCard, [{
    key: 'render',
    value: function render() {
      var cat = this.props.cat;

      return _react2.default.createElement(
        'div',
        { className: 'col s3 m4 s12' },
        _react2.default.createElement(
          'div',
          { className: 'card hoverable' },
          _react2.default.createElement(_CatImage2.default, { src: cat.url }),
          _react2.default.createElement(_CardContent2.default, { searchByTag: this.props.searchByTag, title: cat.title, tags: cat.tags }),
          _react2.default.createElement(_CardAction2.default, { url: cat.url, likes: cat.likes, id: cat.id })
        )
      );
    }
  }]);

  return ResultCard;
}(_react2.default.Component);

exports.default = ResultCard;

},{"./CardAction":6,"./CardContent":7,"./CatImage":8,"react":"react","react-dom":"react-dom"}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tag = function (_React$Component) {
  _inherits(Tag, _React$Component);

  function Tag() {
    _classCallCheck(this, Tag);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Tag).apply(this, arguments));
  }

  _createClass(Tag, [{
    key: 'getValue',
    value: function getValue() {
      this.props.tagClick(this.props.tag);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'span',
        { onClick: this.getValue.bind(this),
          className: 'chip blue darken-3' },
        this.props.tag
      );
    }
  }]);

  return Tag;
}(_react2.default.Component);

exports.default = Tag;

},{"react":"react","react-dom":"react-dom"}],11:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var cats = exports.cats = { "cats": [{
    "id": "CamperCat",
    "likes": 3,
    "tags": ["Coding", "Guru", "Ninja"],
    "title": "Camper Cat",
    "url": "https://media.giphy.com/media/o0vwzuFwCGAFO/giphy.gif"
  }, {
    "id": "Cat-in-a-hat",
    "likes": 7,
    "tags": ["Cute", "Hat", "Standing"],
    "title": "Cat-in-a-hat",
    "url": "https://s-media-cache-ak0.pinimg.com/564x/27/df/cc/27dfcc17a8cefe56c99277d63be0d815.jpg"
  }, {
    "id": "FluffBall",
    "likes": 2,
    "tags": ["Fluffy", "No-legs", "Ball", "Flying"],
    "title": "Fluff Ball",
    "url": "http://www.top13.net/wp-content/uploads/2015/10/perfectly-timed-funny-cat-pictures-5.jpg"
  }, {
    "id": "GrumpyCat",
    "likes": 4,
    "tags": ["Grumpy", "Funny", "Famous"],
    "title": "Grumpy Cat",
    "url": "http://i.dailymail.co.uk/i/pix/2014/08/05/1407225932091_wps_6_SANTA_MONICA_CA_AUGUST_04.jpg"
  }, {
    "id": "HappyCat",
    "likes": 9,
    "tags": ["Happy", "Winking", "Smiling"],
    "title": "Happy Cat",
    "url": "https://pbs.twimg.com/profile_images/2167035896/123cat_400x400.jpg"
  }, {
    "id": "LaughingCat",
    "likes": 27,
    "tags": ["laughing", "Funny", "Snicker"],
    "title": "Laughing Cat",
    "url": "http://blog.nekoflies.com/wp-content/uploads/2014/01/funny-cat.jpg"
  }, {
    "id": "ScaredyCat",
    "likes": 18,
    "tags": ["Hiding", "Cute", "Scared"],
    "title": "Scaredy Cat ",
    "url": "https://i.ytimg.com/vi/MG8KADiRbOU/maxresdefault.jpg"
  }, {
    "id": "ShockedCat",
    "likes": 11,
    "tags": ["What is THAT!?", "Shocked", "Funny"],
    "title": "Shocked Cat",
    "url": "https://i.ytimg.com/vi/icqDxNab3Do/maxresdefault.jpg"
  }, {
    "id": "SleepingCat",
    "likes": 2,
    "tags": ["Sleeping", "Cute", "Kitten"],
    "title": "Sleeping Cat",
    "url": "http://www.acuteaday.com/blog/wp-content/uploads/2012/09/sleeping-kitty-cat.jpg"
  }] };

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHBcXGFwcC5qcyIsImFwcFxcY29tcG9uZW50c1xcRm9vdGVyLmpzIiwiYXBwXFxjb21wb25lbnRzXFxNb2RhbC5qcyIsImFwcFxcY29tcG9uZW50c1xcTmF2YmFyLmpzIiwiYXBwXFxjb21wb25lbnRzXFxSZXN1bHRzLmpzIiwiYXBwXFxjb21wb25lbnRzXFxSZXN1bHRzXFxDYXJkQWN0aW9uLmpzIiwiYXBwXFxjb21wb25lbnRzXFxSZXN1bHRzXFxDYXJkQ29udGVudC5qcyIsImFwcFxcY29tcG9uZW50c1xcUmVzdWx0c1xcQ2F0SW1hZ2UuanMiLCJhcHBcXGNvbXBvbmVudHNcXFJlc3VsdHNcXFJlc3VsdENhcmQuanMiLCJhcHBcXGNvbXBvbmVudHNcXFJlc3VsdHNcXFRhZy5qcyIsImFwcFxcY29tcG9uZW50c1xcY2F0cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7QUNBQTs7OztBQUNBOztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFTSxHOzs7QUFDSixpQkFBYTtBQUFBOztBQUVYOztBQUZXOztBQUdYLFFBQUksUUFBUSxNQUFNLEdBQU4sQ0FBVSxNQUFWLENBQVo7QUFBQSxRQUNJLGdCQURKO0FBRUEsUUFBSSxLQUFKLEVBQVc7QUFDVCxnQkFBVSxLQUFWO0FBQ0QsS0FGRCxNQUVPO0FBQ0w7QUFDQSxpQkFBSyxJQUFMLENBQVUsT0FBVixDQUFrQixVQUFTLE1BQVQsRUFBZ0I7QUFDaEMsY0FBTSxJQUFOLENBQVcsTUFBWCxFQUFtQixNQUFuQjtBQUNBLGtCQUFVLE1BQU0sR0FBTixDQUFVLE1BQVYsQ0FBVjtBQUNELE9BSEQ7QUFJRDtBQUNELFVBQUssS0FBTCxHQUFhO0FBQ1gsWUFBTSxPQURLO0FBRVgsY0FBUSxFQUZHO0FBR1gsa0JBQVk7QUFIRCxLQUFiO0FBZFc7QUFtQlo7Ozs7OEJBQ1MsSSxFQUFN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QURSO0FBRUUsYUFBUyxDQUZYO0FBR0UsWUFBUSxDQUFDLFVBQUQsRUFBYSxNQUFiLEVBQXFCLFFBQXJCLENBSFY7QUFJRSxhQUFTLGNBSlg7QUFLRSxXQUFPO0FBTFQsR0F6RHdCLENBQVIsRUFBWCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge3JlbmRlcn0gZnJvbSAncmVhY3QtZG9tJztcclxuaW1wb3J0IHtjYXRzfSBmcm9tICcuL2NvbXBvbmVudHMvY2F0cyc7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi9jb21wb25lbnRzL05hdmJhcic7XHJcbmltcG9ydCBNb2RhbCBmcm9tICcuL2NvbXBvbmVudHMvTW9kYWwnO1xyXG5pbXBvcnQgUmVzdWx0cyBmcm9tICcuL2NvbXBvbmVudHMvUmVzdWx0cyc7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9jb21wb25lbnRzL0Zvb3Rlcic7XHJcblxyXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKCl7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgLy8gcmV0cmlldmUgY2F0cyBmcm9tIGxvY2FsIHN0b3JhZ2VcclxuICAgIGxldCBsb2NhbCA9IExvY2tyLmdldCgnY2F0cycpLFxyXG4gICAgICAgIGFsbENhdHM7XHJcbiAgICBpZiAobG9jYWwgKXtcclxuICAgICAgYWxsQ2F0cyA9IGxvY2FsO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gaWYgbm90IGNhdHMgaW4gbG9jYWwgc3RvcmFnZSwgcHV0IHRoZW0gdGhlcmVcclxuICAgICAgY2F0cy5jYXRzLmZvckVhY2goZnVuY3Rpb24ob3VyQ2F0KXtcclxuICAgICAgICBMb2Nrci5zYWRkKCdjYXRzJywgb3VyQ2F0KTtcclxuICAgICAgICBhbGxDYXRzID0gTG9ja3IuZ2V0KCdjYXRzJyk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgY2F0czogYWxsQ2F0cyxcclxuICAgICAgc2VhcmNoOiAnJyxcclxuICAgICAgdmFsaWRUaXRsZTogJydcclxuICAgIH07XHJcbiAgfVxyXG4gIHN0b3JlQ2F0cyhjYXRzKSB7XHJcbiAgICBMb2Nrci5mbHVzaCgpO1xyXG4gICAgY2F0cy5mb3JFYWNoKGZ1bmN0aW9uKGxvY2FsQ2F0KSB7XHJcbiAgICAgIExvY2tyLnNhZGQoJ2NhdHMnLCBsb2NhbENhdCk7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgYWRkVXNlckNhdChuZXdDYXQpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe2NhdHM6IG5ld0NhdC5jb25jYXQodGhpcy5zdGF0ZS5jYXRzKX0pO1xyXG4gICAgdGhpcy5zdG9yZUNhdHModGhpcy5zdGF0ZS5jYXRzKTtcclxuICB9XHJcbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZTdGF0ZT10aGlzLnN0YXRlLmNhdHMpIHtcclxuICAgIHRoaXMuc3RvcmVDYXRzKHRoaXMuc3RhdGUuY2F0cyk7XHJcbiAgfVxyXG4gIHVwZGF0ZVNlYXJjaChuZXdTZWFyY2gpIHtcclxuICAgIG5ld1NlYXJjaC50b0xvd2VyQ2FzZSgpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7c2VhcmNoOiBuZXdTZWFyY2h9KTtcclxuICB9XHJcbiAgaXNUaXRsZVZhbGlkKHZhbGlkKXtcclxuICAgIHRoaXMuc2V0U3RhdGUoe3ZhbGlkVGl0bGU6IHZhbGlkfSk7XHJcbiAgfVxyXG4gIHJlbmRlcigpe1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxOYXZiYXIgLz5cclxuICAgICAgICA8TW9kYWwgYWRkVXNlckNhdD17dGhpcy5hZGRVc2VyQ2F0LmJpbmQodGhpcyl9XHJcbiAgICAgICAgICBjYXRzPXt0aGlzLnN0YXRlLmNhdHN9IC8+XHJcbiAgICAgICAgPFJlc3VsdHMgdXBkYXRlU2VhcmNoPXt0aGlzLnVwZGF0ZVNlYXJjaC5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgc2VhcmNoPXt0aGlzLnN0YXRlLnNlYXJjaH0gY2F0cz17dGhpcy5zdGF0ZS5jYXRzfSAvPlxyXG4gICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgKTtcclxuICB9XHJcbn1cclxuXHJcbnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge3JlbmRlcn0gZnJvbSAncmVhY3QtZG9tJztcclxuXHJcbmNsYXNzIEZvb3RlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxmb290ZXIgY2xhc3NOYW1lPVwicGFnZS1mb290ZXIgYmx1ZSBkYXJrZW4tMlwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwid2hpdGUtdGV4dFwiPkNhdFBob3RvQXBwPC9oNT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZ3JleS10ZXh0IHRleHQtbGlnaHRlbi00XCI+Q2F0UGhvdG9BcHAgaGFzIGJlZW4gY3JlYXRlZCB0byBmb3JtIHBhcnQgb2YgdGhlIDxhIGhyZWY9XCJodHRwczovL2ZyZWVjb2RlY2FtcC5jb21cIiB0YXJnZXQ9XCJfYmxhbmtcIj5GcmVlIENvZGUgQ2FtcDwvYT4gY3VycmljdWx1bS48L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlci1jb3B5cmlnaHRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIMKpIDIwMTYgQ2F0UGhvdG9BcHBcclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZ3JleS10ZXh0IHRleHQtbGlnaHRlbi00IHJpZ2h0XCIgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9hdGpvbmF0aGFuL2NhdHBob3RvYXBwL1wiPkdpdEh1YjwvYT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Zvb3Rlcj5cclxuICAgICk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge3JlbmRlcn0gZnJvbSAncmVhY3QtZG9tJztcclxuXHJcbmNsYXNzIE1vZGFsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuc3RhdGUgPXtcclxuICAgICAgdmFsaWRUaXRsZTogXCJ2YWxpZGF0ZVwiLFxyXG4gICAgICBjYXRJZDogXCJcIlxyXG4gICAgfTtcclxuICB9XHJcbiAgaXNUaXRsZVZhbGlkKCl7XHJcbiAgICBsZXQgaWQgPSB0aGlzLnJlZnMudGl0bGUudmFsdWUucmVwbGFjZSgvXFxzKy9nLCAnJyksXHJcbiAgICAgICAgZXhpc3RpbmdJZHMgPSBbXTtcclxuICAgIHRoaXMucHJvcHMuY2F0cy5mb3JFYWNoKChjYXQpID0+e1xyXG4gICAgICBleGlzdGluZ0lkcy5wdXNoKGNhdC5pZCk7XHJcbiAgICB9KTtcclxuICAgIGlmKGV4aXN0aW5nSWRzLmluZGV4T2YoaWQpID09PSAtMSl7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe3ZhbGlkVGl0bGU6IFwidmFsaWRhdGUgdmFsaWRcIiwgY2F0SUQ6IGlkfSk7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7dmFsaWRUaXRsZTogXCJ2YWxpZGF0ZSBpbnZhbGlkXCJ9KTtcclxuICAgIH1cclxuICB9XHJcbnVwbG9hZGVkVXNlckNhdChlKXtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgbGV0IHRhZ3MgPSB0aGlzLnJlZnMudGFncy52YWx1ZS5zcGxpdCgnLCcpLFxyXG4gICAgICBjbGVhblRhZ3MgPSBbXSxcclxuICAgICAgZm9ybWF0VGFncyA9IHRhZ3MuZm9yRWFjaChmdW5jdGlvbih0YWcpe1xyXG4gICAgICAgIGNsZWFuVGFncy5wdXNoKHRhZy50cmltKCkpO1xyXG4gICAgICB9KTtcclxuICBsZXQgdXJsID0gdGhpcy5yZWZzLnVybC52YWx1ZSxcclxuICAgICAgY2xlYW5Vcmw7XHJcbiAgaWYodXJsLm1hdGNoKC8oanBnfHBuZ3xnaWYpJC9pKSl7XHJcbiAgICBjbGVhblVybCA9IHVybDtcclxuICB9ZWxzZXtcclxuICAgIGNsZWFuVXJsID0gXCJwdWJsaWMvaW1nL3JlcGxhY2VtZW50Q2F0LmpwZ1wiO1xyXG4gIH1cclxuICBsZXQgbmV3Q2F0ID1be1xyXG4gICAgICAgIGlkOiB0aGlzLnN0YXRlLmNhdElkLFxyXG4gICAgICAgIHRpdGxlOiB0aGlzLnJlZnMudGl0bGUudmFsdWUsXHJcbiAgICAgICAgdXJsOiBjbGVhblVybCxcclxuICAgICAgICB0YWdzOiBjbGVhblRhZ3MsXHJcbiAgICAgICAgbGlrZXM6IDFcclxuICAgICAgICB9XTtcclxuICAgICAgdGhpcy5wcm9wcy5hZGRVc2VyQ2F0KG5ld0NhdCk7XHJcbiAgICAgIC8vIENsZWFyIGZvcm0gZmllbGRzXHJcbiAgICAgIHRoaXMucmVmcy50aXRsZS52YWx1ZSA9ICcnO1xyXG4gICAgICB0aGlzLnJlZnMudXJsLnZhbHVlID0gJyc7XHJcbiAgICAgIHRoaXMucmVmcy50YWdzLnZhbHVlID0gJyc7XHJcbiAgICB9XHJcblxyXG4gIHJlbmRlcigpe1xyXG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS52YWxpZFRpdGxlKTtcclxuICAgICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgIFx0XHQ8ZGl2IGlkPVwiYWRkQ2F0TW9kYWxcIiBjbGFzc05hbWU9XCJtb2RhbFwiPlxyXG4gICAgICBcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWNvbnRlbnRcIj5cclxuICAgICAgXHRcdFx0XHQ8aDQ+QWRkIENhdCBQaG90bzwvaDQ+XHJcbiAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMudXBsb2FkZWRVc2VyQ2F0LmJpbmQodGhpcyl9PlxyXG4gICAgICBcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbnB1dC1maWVsZCBjb2wgczEyXCI+XHJcbiAgICAgIFx0XHRcdFx0XHRcdFx0PGlucHV0IGNsYXNzTmFtZT17dGhpcy5zdGF0ZS52YWxpZFRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaXNUaXRsZVZhbGlkLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIFRpdGxlXCIgcmVmPVwidGl0bGVcIiBpZD1cInRpdGxlXCIgdHlwZT1cInRleHRcIiByZXF1aXJlZCAvPlxyXG4gICAgICBcdFx0XHRcdFx0XHRcdDxsYWJlbCBodG1sRm9yPVwidGl0bGVcIiBkYXRhLWVycm9yPVwiQ2F0IHRpdGxlIGhhcyBiZWVuIHRha2VuXCIgZGF0YS1zdWNjZXNzPVwiQ2F0IHRpdGxlIGlzIGZyZWUgdG8gdXNlXCI+VGl0bGU8L2xhYmVsPlxyXG4gICAgICBcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuICAgICAgXHRcdFx0XHRcdDwvZGl2PlxyXG4gICAgICBcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbnB1dC1maWVsZCBjb2wgczEyXCI+XHJcbiAgICAgIFx0XHRcdFx0XHRcdFx0PGlucHV0IHBsYWNlaG9sZGVyPVwiRW50ZXIgVVJMXCIgcmVmPVwidXJsXCIgaWQ9XCJ1cmxcIiB0eXBlPVwidXJsXCIgY2xhc3NOYW1lPVwidmFsaWRhdGVcIiByZXF1aXJlZCAvPlxyXG4gICAgICBcdFx0XHRcdFx0XHRcdDxsYWJlbCBodG1sRm9yPVwidXJsXCIgZGF0YS1lcnJvcj1cIlBsZWFzZSB1cGxvYWQgYSBHSUYsIFBORyBvciBKUEdcIiBkYXRhLXN1Y2Nlc3M9XCJUaGF0cyBhIFVSTCBmb3Igc3VyZSEgSSBob3BlIGl0IGVuZHMgaW4gR0lGLCBQTkcgb3IgSlBHLi4uXCI+Q2F0IFBob3RvIFVSTDwvbGFiZWw+XHJcbiAgICAgIFx0XHRcdFx0XHRcdDwvZGl2PlxyXG4gICAgICBcdFx0XHRcdFx0PC9kaXY+XHJcbiAgICAgIFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICBcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWZpZWxkIGNvbCBzNlwiPlxyXG4gICAgICBcdFx0XHRcdFx0XHRcdDxpbnB1dCBwbGFjZWhvbGRlcj1cIlNlcGFyYXRlIHRhZ3Mgd2l0aCBhIGNvbW1hXCIgcmVmPVwidGFnc1wiIGlkPVwidGFnc1wiIHR5cGU9XCJ0ZXh0XCIgcmVxdWlyZWQgLz5cclxuICAgICAgXHRcdFx0XHRcdFx0XHQ8bGFiZWwgaHRtbEZvcj1cInRhZ3NcIj5UYWdzPC9sYWJlbD5cclxuICAgICAgXHRcdFx0XHRcdFx0PC9kaXY+XHJcbiAgICAgIFx0XHRcdFx0XHQ8L2Rpdj5cclxuICAgICAgXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgIFx0XHRcdFx0XHRcdDxidXR0b24gaWQ9XCJzdWJtaXQtYnRuXCIgY2xhc3NOYW1lPVwiYnRuIHdhdmVzLWVmZmVjdCB3YXZlcy1ibHVlIGJsdWUgZGFya2VuLTEgc3VibWl0XCIgdHlwZT1cInN1Ym1pdFwiIG5hbWU9XCJhY3Rpb25cIj5cclxuICAgICAgXHRcdFx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9XCJmYSBmYS1zZW5kXCI+PC9pPlxyXG4gICAgICBcdFx0XHRcdFx0XHRcdCZuYnNwO1N1Ym1pdFxyXG4gICAgICBcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cclxuICAgICAgXHRcdFx0XHRcdDwvZGl2PlxyXG4gICAgICBcdFx0XHRcdDwvZm9ybT5cclxuICAgICAgXHRcdFx0PC9kaXY+XHJcbiAgICAgIFx0XHQ8L2Rpdj5cclxuICAgICAgXHQ8L2Rpdj5cclxuICAgICAgKTtcclxuICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTW9kYWw7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7cmVuZGVyfSBmcm9tICdyZWFjdC1kb20nO1xyXG5cclxuY2xhc3MgTmF2YmFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICByZW5kZXIoKXtcclxuICAgICAgcmV0dXJuKFxyXG4gICAgICA8bmF2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2LXdyYXBwZXIgYmx1ZSBkYXJrZW4tMlwiPlxyXG4gICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJicmFuZC1sb2dvXCI+Jm5ic3A7Jm5ic3A7Jm5ic3A7Q2F0UGhvdG9BcHA8L2E+XHJcbiAgICAgICAgICA8YSBocmVmPVwiI1wiIGRhdGEtYWN0aXZhdGVzPVwibW9iaWxlXCIgY2xhc3NOYW1lPVwiYnV0dG9uLWNvbGxhcHNlXCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtYmFyc1wiPjwvaT48L2E+XHJcbiAgICAgICAgICA8dWwgaWQ9XCJuYXYtbW9iaWxlXCIgY2xhc3NOYW1lPVwicmlnaHQgaGlkZS1vbi1tZWQtYW5kLWRvd25cIj5cclxuICAgICAgICAgICAgPGxpPjxhIGNsYXNzTmFtZT1cIm1vZGFsLXRyaWdnZXJcIiBocmVmPVwiI2FkZENhdE1vZGFsXCI+QWRkIENhdCBQaG90bzwvYT48L2xpPlxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzaWRlLW5hdlwiIGlkPVwibW9iaWxlXCI+XHJcblxyXG4gICAgICAgICAgICA8bGk+PGEgY2xhc3NOYW1lPVwibW9kYWwtdHJpZ2dlclwiIGhyZWY9XCIjYWRkQ2F0TW9kYWxcIj5BZGQgQ2F0IFBob3RvPC9hPjwvbGk+XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L25hdj5cclxuXHJcblxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge3JlbmRlcn0gZnJvbSAncmVhY3QtZG9tJztcclxuaW1wb3J0IFJlc3VsdENhcmQgZnJvbSAnLi9SZXN1bHRzL1Jlc3VsdENhcmQnO1xyXG5cclxuY2xhc3MgUmVzdWx0cyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgc2VhcmNoQnlJbnB1dCgpe1xyXG4gICAgdGhpcy5wcm9wcy51cGRhdGVTZWFyY2godGhpcy5yZWZzLnNlYXJjaC52YWx1ZS50b0xvd2VyQ2FzZSgpKTtcclxuICB9XHJcbiAgc2VhcmNoQnlUYWcodGFnKXtcclxuICAgIHRoaXMucHJvcHMudXBkYXRlU2VhcmNoKHRhZy50b0xvd2VyQ2FzZSgpKTtcclxuICB9XHJcbiAgcmVuZGVyKCkge1xyXG5cclxuICAgIGxldCBzZWFyY2hWYWw7XHJcbiAgICBpZih0aGlzLnByb3BzLnNlYXJjaCA9PT0gJycpe1xyXG4gICAgICBzZWFyY2hWYWwgPSAnICc7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgc2VhcmNoVmFsID0gdGhpcy5wcm9wcy5zZWFyY2g7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHByZUZpbHRlcmVkQ2F0cyA9IHRoaXMucHJvcHMuY2F0cy5maWx0ZXIoKGNhdCkgPT4ge1xyXG4gICAgICBsZXQgbG93ZXJUYWdzID0gW10sXHJcbiAgICAgICAgICBmb3JtYXRUYWdzID0gY2F0LnRhZ3MuZm9yRWFjaChmdW5jdGlvbih0YWcpe1xyXG4gICAgICAgICAgICBsb3dlclRhZ3MucHVzaCh0YWcudG9Mb3dlckNhc2UoKSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gbG93ZXJUYWdzLmluY2x1ZGVzKHRoaXMucHJvcHMuc2VhcmNoKTtcclxuICAgICAgfSk7XHJcbiAgICBsZXQgZmlsdGVyZWRDYXRzO1xyXG5cclxuICAgIGlmKHByZUZpbHRlcmVkQ2F0cy5sZW5ndGggPT09IDApe1xyXG4gICAgICBmaWx0ZXJlZENhdHMgPSB0aGlzLnByb3BzLmNhdHM7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgZmlsdGVyZWRDYXRzID0gcHJlRmlsdGVyZWRDYXRzO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCBmb3IgY2F0IHRhZ3MgaGVyZSwgb3IgY2xpY2sgb24gYSBjYXQgdGFnLi4uXCJcclxuICAgICAgICAgIHJlZj1cInNlYXJjaFwiIG9uQ2hhbmdlPXt0aGlzLnNlYXJjaEJ5SW5wdXQuYmluZCh0aGlzKX1cclxuICAgICAgICAgIHZhbHVlPXt0aGlzLnByb3BzLnNlYXJjaH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXN1bHRzXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICB7ZmlsdGVyZWRDYXRzLm1hcCgoY2F0KSA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIDxSZXN1bHRDYXJkIHNlYXJjaEJ5VGFnPXt0aGlzLnNlYXJjaEJ5VGFnLmJpbmQodGhpcyl9IGtleT17Y2F0LmlkfSBjYXQ9e2NhdH0gLz47XHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlc3VsdHM7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7cmVuZGVyfSBmcm9tICdyZWFjdC1kb20nO1xyXG5cclxuY2xhc3MgQ2FyZEFjdGlvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGlkOiBwcm9wcy5pZCxcclxuICAgICAgbGlrZXM6IHByb3BzLmxpa2VzXHJcbiAgICB9O1xyXG4gICAgdGhpcy5oYW5kbGVDbGljayA9IHRoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUNsaWNrKCkge1xyXG4gICAgbGV0IGNhdElkID0gdGhpcy5zdGF0ZS5pZCxcclxuICAgICAgICBsb2NhbENhdHMgPSBMb2Nrci5nZXQoJ2NhdHMnKSxcclxuICAgICAgICBpbmRleDtcclxuICAgIC8vIHVwZGF0ZSBsaWtlIGJ1dHRvbiBsaWtlc1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7bGlrZXM6IHRoaXMuc3RhdGUubGlrZXMgKyAxfSk7XHJcbiAgICAvLyBGaW5kIGNhdCBpcyBsb2NhbCBzdG9yYWdlIGFuZCBpbmNyZW1lbnQgbGlrZXNcclxuICAgIGluZGV4ID0gbG9jYWxDYXRzLmZpbmRJbmRleCh4ID0+IHguaWQgPT09IGNhdElkKTtcclxuICAgIGxvY2FsQ2F0c1tpbmRleF0ubGlrZXMgPSB0aGlzLnN0YXRlLmxpa2VzICsgMTtcclxuICAgIC8vIGVtcHR5IGFuZCB1cGRhdGUgbG9jYWwgc3RvcmFnZVxyXG4gICAgTG9ja3IuZmx1c2goKTtcclxuICAgIGxvY2FsQ2F0cy5mb3JFYWNoKGZ1bmN0aW9uKGxvY2FsQ2F0KXtcclxuICAgICAgTG9ja3Iuc2FkZCgnY2F0cycsIGxvY2FsQ2F0KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWFjdGlvblwiPlxyXG4gICAgICAgIDxhIGNsYXNzTmFtZT1cIndhdmVzLWVmZmVjdCB3YXZlcy1saWdodCB3YXZlcy1yZWQgcmVkIGRhcmtlbi0zIGJ0blwiIGhyZWY9e3RoaXMucHJvcHMudXJsfSBkb3dubG9hZD17dGhpcy5wcm9wcy51cmx9PlxyXG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtZG93bmxvYWRcIj48L2k+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwid2F2ZXMtZWZmZWN0IHdhdmVzLWxpZ2h0IHdhdmVzLWJsdWUgYmx1ZSBkYXJrZW4tMyBidG5cIlxyXG4gICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDbGlja30+XHJcbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS10aHVtYnMtdXBcIj48L2k+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsaWtlc19udW1iZXJcIj4ge3RoaXMuc3RhdGUubGlrZXN9PC9zcGFuPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IENhcmRBY3Rpb247XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7cmVuZGVyfSBmcm9tICdyZWFjdC1kb20nO1xyXG5pbXBvcnQgVGFnIGZyb20gJy4vVGFnJztcclxuXHJcbmNsYXNzIENhcmRDb250ZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICB0YWdDbGljayh0YWcpe1xyXG4gICAgdGhpcy5wcm9wcy5zZWFyY2hCeVRhZyh0YWcpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWNvbnRlbnRcIj5cclxuICAgICAgICA8aDU+e3RoaXMucHJvcHMudGl0bGV9PC9oNT5cclxuICAgICAgICB7dGhpcy5wcm9wcy50YWdzLm1hcCgodGFnLCBrZXkpID0+IHtcclxuICAgICAgICByZXR1cm4gPFRhZyB0YWdDbGljaz17dGhpcy50YWdDbGljay5iaW5kKHRoaXMpfSBrZXk9e2tleX0gdGFnPXt0YWd9IC8+O1xyXG4gICAgICAgIH0pfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IENhcmRDb250ZW50O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge3JlbmRlcn0gZnJvbSAncmVhY3QtZG9tJztcclxuXHJcbmNsYXNzIENhdEltYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaW1hZ2VcIj5cclxuICAgICAgICA8aW1nIGNsYXNzTmFtZT1cIm1hdGVyaWFsYm94ZWRcIiBzcmM9e3RoaXMucHJvcHMuc3JjfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IENhdEltYWdlO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge3JlbmRlcn0gZnJvbSAncmVhY3QtZG9tJztcclxuaW1wb3J0IENhdEltYWdlIGZyb20gJy4vQ2F0SW1hZ2UnO1xyXG5pbXBvcnQgQ2FyZENvbnRlbnQgZnJvbSAnLi9DYXJkQ29udGVudCc7XHJcbmltcG9ydCBDYXJkQWN0aW9uIGZyb20gJy4vQ2FyZEFjdGlvbic7XHJcblxyXG5jbGFzcyBSZXN1bHRDYXJkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICBsZXQgY2F0ID0gdGhpcy5wcm9wcy5jYXQ7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgczMgbTQgczEyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGhvdmVyYWJsZVwiPlxyXG4gICAgICAgICAgPENhdEltYWdlIHNyYz17Y2F0LnVybH0gLz5cclxuICAgICAgICAgIDxDYXJkQ29udGVudCBzZWFyY2hCeVRhZz17dGhpcy5wcm9wcy5zZWFyY2hCeVRhZ30gdGl0bGU9e2NhdC50aXRsZX0gdGFncz17Y2F0LnRhZ3N9IC8+XHJcbiAgICAgICAgICA8Q2FyZEFjdGlvbiB1cmw9e2NhdC51cmx9IGxpa2VzPXtjYXQubGlrZXN9IGlkPXtjYXQuaWR9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgUmVzdWx0Q2FyZDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtyZW5kZXJ9IGZyb20gJ3JlYWN0LWRvbSc7XHJcblxyXG5jbGFzcyBUYWcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGdldFZhbHVlKCl7XHJcbiAgdGhpcy5wcm9wcy50YWdDbGljayh0aGlzLnByb3BzLnRhZyk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPHNwYW4gb25DbGljaz17dGhpcy5nZXRWYWx1ZS5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiY2hpcCBibHVlIGRhcmtlbi0zXCIgPnt0aGlzLnByb3BzLnRhZ308L3NwYW4+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBUYWc7XHJcbiIsImV4cG9ydCBsZXQgY2F0cyA9IHtcImNhdHNcIjpbXHJcbiAge1xyXG4gICAgXCJpZFwiOiBcIkNhbXBlckNhdFwiLFxyXG4gICAgXCJsaWtlc1wiOiAzLFxyXG4gICAgXCJ0YWdzXCI6IFtcIkNvZGluZ1wiLFwiR3VydVwiLFwiTmluamFcIl0sXHJcbiAgICBcInRpdGxlXCI6IFwiQ2FtcGVyIENhdFwiLFxyXG4gICAgXCJ1cmxcIjogXCJodHRwczovL21lZGlhLmdpcGh5LmNvbS9tZWRpYS9vMHZ3enVGd0NHQUZPL2dpcGh5LmdpZlwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcImlkXCI6IFwiQ2F0LWluLWEtaGF0XCIsXHJcbiAgICBcImxpa2VzXCI6IDcsXHJcbiAgICBcInRhZ3NcIjogW1wiQ3V0ZVwiLCBcIkhhdFwiLCBcIlN0YW5kaW5nXCJdLFxyXG4gICAgXCJ0aXRsZVwiOiBcIkNhdC1pbi1hLWhhdFwiLFxyXG4gICAgXCJ1cmxcIjogXCJodHRwczovL3MtbWVkaWEtY2FjaGUtYWswLnBpbmltZy5jb20vNTY0eC8yNy9kZi9jYy8yN2RmY2MxN2E4Y2VmZTU2Yzk5Mjc3ZDYzYmUwZDgxNS5qcGdcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJpZFwiOiBcIkZsdWZmQmFsbFwiLFxyXG4gICAgXCJsaWtlc1wiOiAyLFxyXG4gICAgXCJ0YWdzXCI6W1wiRmx1ZmZ5XCIsIFwiTm8tbGVnc1wiLCBcIkJhbGxcIiwgXCJGbHlpbmdcIl0sXHJcbiAgICBcInRpdGxlXCI6IFwiRmx1ZmYgQmFsbFwiLFxyXG4gICAgXCJ1cmxcIjogXCJodHRwOi8vd3d3LnRvcDEzLm5ldC93cC1jb250ZW50L3VwbG9hZHMvMjAxNS8xMC9wZXJmZWN0bHktdGltZWQtZnVubnktY2F0LXBpY3R1cmVzLTUuanBnXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwiaWRcIjogXCJHcnVtcHlDYXRcIixcclxuICAgIFwibGlrZXNcIjogNCxcclxuICAgIFwidGFnc1wiOiBbXCJHcnVtcHlcIiwgXCJGdW5ueVwiLCBcIkZhbW91c1wiXSxcclxuICAgIFwidGl0bGVcIjogXCJHcnVtcHkgQ2F0XCIsXHJcbiAgICBcInVybFwiOiBcImh0dHA6Ly9pLmRhaWx5bWFpbC5jby51ay9pL3BpeC8yMDE0LzA4LzA1LzE0MDcyMjU5MzIwOTFfd3BzXzZfU0FOVEFfTU9OSUNBX0NBX0FVR1VTVF8wNC5qcGdcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJpZFwiOiBcIkhhcHB5Q2F0XCIsXHJcbiAgICBcImxpa2VzXCI6IDksXHJcbiAgICBcInRhZ3NcIjogW1wiSGFwcHlcIiwgXCJXaW5raW5nXCIsIFwiU21pbGluZ1wiXSxcclxuICAgIFwidGl0bGVcIjogXCJIYXBweSBDYXRcIixcclxuICAgIFwidXJsXCI6IFwiaHR0cHM6Ly9wYnMudHdpbWcuY29tL3Byb2ZpbGVfaW1hZ2VzLzIxNjcwMzU4OTYvMTIzY2F0XzQwMHg0MDAuanBnXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwiaWRcIjogXCJMYXVnaGluZ0NhdFwiLFxyXG4gICAgXCJsaWtlc1wiOiAyNyxcclxuICAgIFwidGFnc1wiOiBbXCJsYXVnaGluZ1wiLCBcIkZ1bm55XCIsIFwiU25pY2tlclwiXSxcclxuICAgIFwidGl0bGVcIjogXCJMYXVnaGluZyBDYXRcIixcclxuICAgIFwidXJsXCI6IFwiaHR0cDovL2Jsb2cubmVrb2ZsaWVzLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxNC8wMS9mdW5ueS1jYXQuanBnXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwiaWRcIjogXCJTY2FyZWR5Q2F0XCIsXHJcbiAgICBcImxpa2VzXCI6IDE4LFxyXG4gICAgXCJ0YWdzXCI6IFtcIkhpZGluZ1wiLCBcIkN1dGVcIiwgXCJTY2FyZWRcIl0sXHJcbiAgICBcInRpdGxlXCI6IFwiU2NhcmVkeSBDYXQgXCIsXHJcbiAgICBcInVybFwiOiBcImh0dHBzOi8vaS55dGltZy5jb20vdmkvTUc4S0FEaVJiT1UvbWF4cmVzZGVmYXVsdC5qcGdcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJpZFwiOiBcIlNob2NrZWRDYXRcIixcclxuICAgIFwibGlrZXNcIjogMTEsXHJcbiAgICBcInRhZ3NcIjogW1wiV2hhdCBpcyBUSEFUIT9cIiwgXCJTaG9ja2VkXCIsIFwiRnVubnlcIl0sXHJcbiAgICBcInRpdGxlXCI6IFwiU2hvY2tlZCBDYXRcIixcclxuICAgIFwidXJsXCI6IFwiaHR0cHM6Ly9pLnl0aW1nLmNvbS92aS9pY3FEeE5hYjNEby9tYXhyZXNkZWZhdWx0LmpwZ1wiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcImlkXCI6IFwiU2xlZXBpbmdDYXRcIixcclxuICAgIFwibGlrZXNcIjogMixcclxuICAgIFwidGFnc1wiOiBbXCJTbGVlcGluZ1wiLCBcIkN1dGVcIiwgXCJLaXR0ZW5cIl0sXHJcbiAgICBcInRpdGxlXCI6IFwiU2xlZXBpbmcgQ2F0XCIsXHJcbiAgICBcInVybFwiOiBcImh0dHA6Ly93d3cuYWN1dGVhZGF5LmNvbS9ibG9nL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDEyLzA5L3NsZWVwaW5nLWtpdHR5LWNhdC5qcGdcIlxyXG4gIH1cclxuXX07XHJcbiJdfQ==
