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
      search: ''
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
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Navbar2.default, null),
        _react2.default.createElement(_Modal2.default, { addUserCat: this.addUserCat.bind(this) }),
        _react2.default.createElement(_Results2.default, { updateSearch: this.updateSearch.bind(this), search: this.state.search, cats: this.state.cats }),
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

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Modal).apply(this, arguments));
  }

  _createClass(Modal, [{
    key: 'uploadedUserCat',
    value: function uploadedUserCat(e) {
      e.preventDefault();
      var tags = this.refs.tags.value.split(','),
          cleanTags = [],
          formatTags = tags.forEach(function (tag) {
        cleanTags.push(tag.trim());
      });
      //  console.log(cleanTags);
      var newCat = [{
        id: this.refs.title.value.replace(/\s+/g, ''),
        title: this.refs.title.value,
        url: this.refs.url.value,
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
                  _react2.default.createElement('input', { placeholder: 'Enter Title', ref: 'title', id: 'title', type: 'text', required: true }),
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
      console.log(preFilteredCats.length);
      return _react2.default.createElement(
        'div',
        { className: 'container' },
        _react2.default.createElement('input', { type: 'text', ref: 'search', onChange: this.searchByInput.bind(this), value: this.props.search }),
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

},{"./Results/ResultCard":6,"react":"react","react-dom":"react-dom"}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _CatImage = require('./ResultCard/CatImage');

var _CatImage2 = _interopRequireDefault(_CatImage);

var _CardContent = require('./ResultCard/CardContent');

var _CardContent2 = _interopRequireDefault(_CardContent);

var _CardAction = require('./ResultCard/CardAction');

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
          _react2.default.createElement(_CardAction2.default, { likes: cat.likes, id: cat.id })
        )
      );
    }
  }]);

  return ResultCard;
}(_react2.default.Component);

exports.default = ResultCard;

},{"./ResultCard/CardAction":7,"./ResultCard/CardContent":8,"./ResultCard/CatImage":10,"react":"react","react-dom":"react-dom"}],7:[function(require,module,exports){
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

},{"react":"react","react-dom":"react-dom"}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _Tag = require('./CardContent/Tag');

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

},{"./CardContent/Tag":9,"react":"react","react-dom":"react-dom"}],9:[function(require,module,exports){
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

},{"react":"react","react-dom":"react-dom"}],10:[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvYXBwLmpzIiwiYXBwL2NvbXBvbmVudHMvRm9vdGVyLmpzIiwiYXBwL2NvbXBvbmVudHMvTW9kYWwuanMiLCJhcHAvY29tcG9uZW50cy9OYXZiYXIuanMiLCJhcHAvY29tcG9uZW50cy9SZXN1bHRzLmpzIiwiYXBwL2NvbXBvbmVudHMvUmVzdWx0cy9SZXN1bHRDYXJkLmpzIiwiYXBwL2NvbXBvbmVudHMvUmVzdWx0cy9SZXN1bHRDYXJkL0NhcmRBY3Rpb24uanMiLCJhcHAvY29tcG9uZW50cy9SZXN1bHRzL1Jlc3VsdENhcmQvQ2FyZENvbnRlbnQuanMiLCJhcHAvY29tcG9uZW50cy9SZXN1bHRzL1Jlc3VsdENhcmQvQ2FyZENvbnRlbnQvVGFnLmpzIiwiYXBwL2NvbXBvbmVudHMvUmVzdWx0cy9SZXN1bHRDYXJkL0NhdEltYWdlLmpzIiwiYXBwL2NvbXBvbmVudHMvY2F0cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7QUNBQTs7OztBQUNBOztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFTSxHOzs7QUFDSixpQkFBYTtBQUFBOztBQUVYOztBQUZXOztBQUdYLFFBQUksUUFBUSxNQUFNLEdBQU4sQ0FBVSxNQUFWLENBQVo7QUFBQSxRQUNJLGdCQURKO0FBRUEsUUFBSSxLQUFKLEVBQVc7QUFDVCxnQkFBVSxLQUFWO0FBQ0QsS0FGRCxNQUVNO0FBQ0o7QUFDQSxpQkFBSyxJQUFMLENBQVUsT0FBVixDQUFrQixVQUFTLE1BQVQsRUFBZ0I7QUFDaEMsY0FBTSxJQUFOLENBQVcsTUFBWCxFQUFtQixNQUFuQjtBQUNBLGtCQUFVLE1BQU0sR0FBTixDQUFVLE1BQVYsQ0FBVjtBQUNELE9BSEQ7QUFJRDtBQUNELFVBQUssS0FBTCxHQUFhO0FBQ1gsWUFBTSxPQURLO0FBRVgsY0FBUTtBQUZHLEtBQWI7QUFkVztBQWtCWjs7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QUFDRSxVQUFNLFlBRFI7QUFFRSxhQUFTLEVBRlg7QUFHRSxZQUFRLENBQUMsZ0JBQUQsRUFBbUIsU0FBbkIsRUFBOEIsT0FBOUIsQ0FIVjtBQUlFLGFBQVMsYUFKWDtBQUtFLFdBQU87QUFMVCxHQWxEd0IsRUF5RHhCO0FBQ0UsVUFBTSxhQURSO0FBRUUsYUFBUyxDQUZYO0FBR0UsWUFBUSxDQUFDLFVBQUQsRUFBYSxNQUFiLEVBQXFCLFFBQXJCLENBSFY7QUFJRSxhQUFTLGNBSlg7QUFLRSxXQUFPO0FBTFQsR0F6RHdCLENBQVIsRUFBWCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtyZW5kZXJ9IGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQge2NhdHN9IGZyb20gJy4vY29tcG9uZW50cy9jYXRzJztcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi9jb21wb25lbnRzL05hdmJhcic7XG5pbXBvcnQgTW9kYWwgZnJvbSAnLi9jb21wb25lbnRzL01vZGFsJztcbmltcG9ydCBSZXN1bHRzIGZyb20gJy4vY29tcG9uZW50cy9SZXN1bHRzJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9jb21wb25lbnRzL0Zvb3Rlcic7XG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCl7XG4gICAgc3VwZXIoKTtcbiAgICAvLyByZXRyaWV2ZSBjYXRzIGZyb20gbG9jYWwgc3RvcmFnZVxuICAgIGxldCBsb2NhbCA9IExvY2tyLmdldCgnY2F0cycpLFxuICAgICAgICBhbGxDYXRzO1xuICAgIGlmIChsb2NhbCApe1xuICAgICAgYWxsQ2F0cyA9IGxvY2FsO1xuICAgIH0gZWxzZXtcbiAgICAgIC8vIGlmIG5vdCBjYXRzIGluIGxvY2FsIHN0b3JhZ2UsIHB1dCB0aGVtIHRoZXJlXG4gICAgICBjYXRzLmNhdHMuZm9yRWFjaChmdW5jdGlvbihvdXJDYXQpe1xuICAgICAgICBMb2Nrci5zYWRkKCdjYXRzJywgb3VyQ2F0KTtcbiAgICAgICAgYWxsQ2F0cyA9IExvY2tyLmdldCgnY2F0cycpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBjYXRzOiBhbGxDYXRzLFxuICAgICAgc2VhcmNoOiAnJ1xuICAgIH07XG4gIH1cbiAgc3RvcmVDYXRzKGNhdHMpe1xuICAgIExvY2tyLmZsdXNoKCk7XG4gICAgY2F0cy5mb3JFYWNoKGZ1bmN0aW9uKGxvY2FsQ2F0KXtcbiAgICAgIExvY2tyLnNhZGQoJ2NhdHMnLCBsb2NhbENhdCk7XG4gICAgfSk7XG4gIH1cbiAgYWRkVXNlckNhdChuZXdDYXQpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtjYXRzOiBuZXdDYXQuY29uY2F0KHRoaXMuc3RhdGUuY2F0cyl9KTtcbiAgICB0aGlzLnN0b3JlQ2F0cyh0aGlzLnN0YXRlLmNhdHMpO1xuICB9XG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2U3RhdGU9dGhpcy5zdGF0ZS5jYXRzKSB7XG4gICAgdGhpcy5zdG9yZUNhdHModGhpcy5zdGF0ZS5jYXRzKTtcbiAgfVxuICB1cGRhdGVTZWFyY2gobmV3U2VhcmNoKSB7XG4gICAgbmV3U2VhcmNoLnRvTG93ZXJDYXNlKCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7c2VhcmNoOiBuZXdTZWFyY2h9KTtcbiAgfVxuXG4gICAgcmVuZGVyKCl7XG4gICAgICByZXR1cm4oXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPE5hdmJhciAvPlxuICAgICAgICAgIDxNb2RhbCBhZGRVc2VyQ2F0PXt0aGlzLmFkZFVzZXJDYXQuYmluZCh0aGlzKX0gLz5cbiAgICAgICAgICA8UmVzdWx0cyB1cGRhdGVTZWFyY2g9e3RoaXMudXBkYXRlU2VhcmNoLmJpbmQodGhpcyl9IHNlYXJjaD17dGhpcy5zdGF0ZS5zZWFyY2h9IGNhdHM9e3RoaXMuc3RhdGUuY2F0c30gLz5cbiAgICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxucmVuZGVyKDxBcHAgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtyZW5kZXJ9IGZyb20gJ3JlYWN0LWRvbSc7XG5cbmNsYXNzIEZvb3RlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8Zm9vdGVyIGNsYXNzTmFtZT1cInBhZ2UtZm9vdGVyIGJsdWUgZGFya2VuLTJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIndoaXRlLXRleHRcIj5DYXRQaG90b0FwcDwvaDU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImdyZXktdGV4dCB0ZXh0LWxpZ2h0ZW4tNFwiPkNhdFBob3RvQXBwIGhhcyBiZWVuIGNyZWF0ZWQgdG8gZm9ybSBwYXJ0IG9mIHRoZSA8YSBocmVmPVwiaHR0cHM6Ly9mcmVlY29kZWNhbXAuY29tXCIgdGFyZ2V0PVwiX2JsYW5rXCI+RnJlZSBDb2RlIENhbXA8L2E+IGN1cnJpY3VsdW0uPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXItY29weXJpZ2h0XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgIMKpIDIwMTYgQ2F0UGhvdG9BcHBcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImdyZXktdGV4dCB0ZXh0LWxpZ2h0ZW4tNCByaWdodFwiIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vYXRqb25hdGhhbi9jYXRwaG90b2FwcC9cIj5HaXRIdWI8L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9mb290ZXI+XG4gICAgKTtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge3JlbmRlcn0gZnJvbSAncmVhY3QtZG9tJztcblxuY2xhc3MgTW9kYWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xudXBsb2FkZWRVc2VyQ2F0KGUpe1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGxldCB0YWdzID0gdGhpcy5yZWZzLnRhZ3MudmFsdWUuc3BsaXQoJywnKSxcbiAgICAgIGNsZWFuVGFncyA9IFtdLFxuICAgICAgZm9ybWF0VGFncyA9IHRhZ3MuZm9yRWFjaChmdW5jdGlvbih0YWcpe1xuICAgICAgICBjbGVhblRhZ3MucHVzaCh0YWcudHJpbSgpKTtcbiAgICAgIH0pO1xuICAgIC8vICBjb25zb2xlLmxvZyhjbGVhblRhZ3MpO1xuICBsZXQgbmV3Q2F0ID1be1xuICAgICAgICBpZDogdGhpcy5yZWZzLnRpdGxlLnZhbHVlLnJlcGxhY2UoL1xccysvZywgJycpLFxuICAgICAgICB0aXRsZTogdGhpcy5yZWZzLnRpdGxlLnZhbHVlLFxuICAgICAgICB1cmw6IHRoaXMucmVmcy51cmwudmFsdWUsXG4gICAgICAgIHRhZ3M6IGNsZWFuVGFncyxcbiAgICAgICAgbGlrZXM6IDFcbiAgICAgICAgfV07XG4gICAgICB0aGlzLnByb3BzLmFkZFVzZXJDYXQobmV3Q2F0KTtcbiAgICAgIC8vIENsZWFyIGZvcm0gZmllbGRzXG4gICAgICB0aGlzLnJlZnMudGl0bGUudmFsdWUgPSAnJztcbiAgICAgIHRoaXMucmVmcy51cmwudmFsdWUgPSAnJztcbiAgICAgIHRoaXMucmVmcy50YWdzLnZhbHVlID0gJyc7XG4gICAgfVxuXG4gIHJlbmRlcigpe1xuICAgICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgXHRcdDxkaXYgaWQ9XCJhZGRDYXRNb2RhbFwiIGNsYXNzTmFtZT1cIm1vZGFsXCI+XG4gICAgICBcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWNvbnRlbnRcIj5cbiAgICAgIFx0XHRcdFx0PGg0PkFkZCBDYXQgUGhvdG88L2g0PlxuICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy51cGxvYWRlZFVzZXJDYXQuYmluZCh0aGlzKX0+XG4gICAgICBcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgIFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZmllbGQgY29sIHMxMlwiPlxuICAgICAgXHRcdFx0XHRcdFx0XHQ8aW5wdXQgcGxhY2Vob2xkZXI9XCJFbnRlciBUaXRsZVwiIHJlZj1cInRpdGxlXCIgaWQ9XCJ0aXRsZVwiIHR5cGU9XCJ0ZXh0XCIgcmVxdWlyZWQgLz5cbiAgICAgIFx0XHRcdFx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9XCJ0aXRsZVwiIGRhdGEtZXJyb3I9XCJDYXQgdGl0bGUgaGFzIGJlZW4gdGFrZW5cIiBkYXRhLXN1Y2Nlc3M9XCJDYXQgdGl0bGUgaXMgZnJlZSB0byB1c2VcIj5UaXRsZTwvbGFiZWw+XG4gICAgICBcdFx0XHRcdFx0XHQ8L2Rpdj5cbiAgICAgIFx0XHRcdFx0XHQ8L2Rpdj5cbiAgICAgIFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbnB1dC1maWVsZCBjb2wgczEyXCI+XG4gICAgICBcdFx0XHRcdFx0XHRcdDxpbnB1dCBwbGFjZWhvbGRlcj1cIkVudGVyIFVSTFwiIHJlZj1cInVybFwiIGlkPVwidXJsXCIgdHlwZT1cInVybFwiIGNsYXNzTmFtZT1cInZhbGlkYXRlXCIgcmVxdWlyZWQgLz5cbiAgICAgIFx0XHRcdFx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9XCJ1cmxcIiBkYXRhLWVycm9yPVwiUGxlYXNlIHVwbG9hZCBhIEdJRiwgUE5HIG9yIEpQR1wiIGRhdGEtc3VjY2Vzcz1cIlRoYXRzIGEgVVJMIGZvciBzdXJlISBJIGhvcGUgaXQgZW5kcyBpbiBHSUYsIFBORyBvciBKUEcuLi5cIj5DYXQgUGhvdG8gVVJMPC9sYWJlbD5cbiAgICAgIFx0XHRcdFx0XHRcdDwvZGl2PlxuICAgICAgXHRcdFx0XHRcdDwvZGl2PlxuICAgICAgXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICBcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWZpZWxkIGNvbCBzNlwiPlxuICAgICAgXHRcdFx0XHRcdFx0XHQ8aW5wdXQgcGxhY2Vob2xkZXI9XCJTZXBhcmF0ZSB0YWdzIHdpdGggYSBjb21tYVwiIHJlZj1cInRhZ3NcIiBpZD1cInRhZ3NcIiB0eXBlPVwidGV4dFwiIHJlcXVpcmVkIC8+XG4gICAgICBcdFx0XHRcdFx0XHRcdDxsYWJlbCBodG1sRm9yPVwidGFnc1wiPlRhZ3M8L2xhYmVsPlxuICAgICAgXHRcdFx0XHRcdFx0PC9kaXY+XG4gICAgICBcdFx0XHRcdFx0PC9kaXY+XG4gICAgICBcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgIFx0XHRcdFx0XHRcdDxidXR0b24gaWQ9XCJzdWJtaXQtYnRuXCIgY2xhc3NOYW1lPVwiYnRuIHdhdmVzLWVmZmVjdCB3YXZlcy1ibHVlIGJsdWUgZGFya2VuLTEgc3VibWl0XCIgdHlwZT1cInN1Ym1pdFwiIG5hbWU9XCJhY3Rpb25cIj5cbiAgICAgIFx0XHRcdFx0XHRcdFx0PGkgY2xhc3NOYW1lPVwiZmEgZmEtc2VuZFwiPjwvaT5cbiAgICAgIFx0XHRcdFx0XHRcdFx0Jm5ic3A7U3VibWl0XG4gICAgICBcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cbiAgICAgIFx0XHRcdFx0XHQ8L2Rpdj5cbiAgICAgIFx0XHRcdFx0PC9mb3JtPlxuICAgICAgXHRcdFx0PC9kaXY+XG4gICAgICBcdFx0PC9kaXY+XG4gICAgICBcdDwvZGl2PlxuICAgICAgKTtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgTW9kYWw7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtyZW5kZXJ9IGZyb20gJ3JlYWN0LWRvbSc7XG5cbmNsYXNzIE5hdmJhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpe1xuICAgICAgcmV0dXJuKFxuICAgICAgPG5hdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtd3JhcHBlciBibHVlIGRhcmtlbi0yXCI+XG4gICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJicmFuZC1sb2dvXCI+Jm5ic3A7Jm5ic3A7Jm5ic3A7Q2F0UGhvdG9BcHA8L2E+XG4gICAgICAgICAgPGEgaHJlZj1cIiNcIiBkYXRhLWFjdGl2YXRlcz1cIm1vYmlsZVwiIGNsYXNzTmFtZT1cImJ1dHRvbi1jb2xsYXBzZVwiPjxpIGNsYXNzTmFtZT1cImZhIGZhLWJhcnNcIj48L2k+PC9hPlxuICAgICAgICAgIDx1bCBpZD1cIm5hdi1tb2JpbGVcIiBjbGFzc05hbWU9XCJyaWdodCBoaWRlLW9uLW1lZC1hbmQtZG93blwiPlxuICAgICAgICAgICAgPGxpPjxhIGNsYXNzTmFtZT1cIm1vZGFsLXRyaWdnZXJcIiBocmVmPVwiI2FkZENhdE1vZGFsXCI+QWRkIENhdCBQaG90bzwvYT48L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInNpZGUtbmF2XCIgaWQ9XCJtb2JpbGVcIj5cblxuICAgICAgICAgICAgPGxpPjxhIGNsYXNzTmFtZT1cIm1vZGFsLXRyaWdnZXJcIiBocmVmPVwiI2FkZENhdE1vZGFsXCI+QWRkIENhdCBQaG90bzwvYT48L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9uYXY+XG5cblxuICAgICk7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge3JlbmRlcn0gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBSZXN1bHRDYXJkIGZyb20gJy4vUmVzdWx0cy9SZXN1bHRDYXJkJztcblxuY2xhc3MgUmVzdWx0cyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHNlYXJjaEJ5SW5wdXQoKXtcbiAgICB0aGlzLnByb3BzLnVwZGF0ZVNlYXJjaCh0aGlzLnJlZnMuc2VhcmNoLnZhbHVlLnRvTG93ZXJDYXNlKCkpO1xuICB9XG4gIHNlYXJjaEJ5VGFnKHRhZyl7XG4gICAgdGhpcy5wcm9wcy51cGRhdGVTZWFyY2godGFnLnRvTG93ZXJDYXNlKCkpO1xuICB9XG4gIHJlbmRlcigpIHtcblxuICAgIGxldCBzZWFyY2hWYWw7XG4gICAgaWYodGhpcy5wcm9wcy5zZWFyY2ggPT09ICcnKXtcbiAgICAgIHNlYXJjaFZhbCA9ICcgJztcbiAgICB9ZWxzZXtcbiAgICAgIHNlYXJjaFZhbCA9IHRoaXMucHJvcHMuc2VhcmNoO1xuICAgIH1cblxuICAgIGxldCBwcmVGaWx0ZXJlZENhdHMgPSB0aGlzLnByb3BzLmNhdHMuZmlsdGVyKChjYXQpID0+IHtcbiAgICAgIGxldCBsb3dlclRhZ3MgPSBbXSxcbiAgICAgICAgICBmb3JtYXRUYWdzID0gY2F0LnRhZ3MuZm9yRWFjaChmdW5jdGlvbih0YWcpe1xuICAgICAgICAgICAgbG93ZXJUYWdzLnB1c2godGFnLnRvTG93ZXJDYXNlKCkpO1xuICAgICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gbG93ZXJUYWdzLmluY2x1ZGVzKHRoaXMucHJvcHMuc2VhcmNoKTtcbiAgICAgIH0pO1xuICAgIGxldCBmaWx0ZXJlZENhdHM7XG5cbiAgICBpZihwcmVGaWx0ZXJlZENhdHMubGVuZ3RoID09PSAwKXtcbiAgICAgIGZpbHRlcmVkQ2F0cyA9IHRoaXMucHJvcHMuY2F0cztcbiAgICB9ZWxzZXtcbiAgICAgIGZpbHRlcmVkQ2F0cyA9IHByZUZpbHRlcmVkQ2F0cztcbiAgICB9XG4gICAgY29uc29sZS5sb2cocHJlRmlsdGVyZWRDYXRzLmxlbmd0aCk7XG4gICAgcmV0dXJuKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcmVmPVwic2VhcmNoXCIgb25DaGFuZ2U9e3RoaXMuc2VhcmNoQnlJbnB1dC5iaW5kKHRoaXMpfSB2YWx1ZT17dGhpcy5wcm9wcy5zZWFyY2h9IC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVzdWx0c1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICB7ZmlsdGVyZWRDYXRzLm1hcCgoY2F0KSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiA8UmVzdWx0Q2FyZCBzZWFyY2hCeVRhZz17dGhpcy5zZWFyY2hCeVRhZy5iaW5kKHRoaXMpfSBrZXk9e2NhdC5pZH0gY2F0PXtjYXR9IC8+O1xuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZXN1bHRzO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7cmVuZGVyfSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IENhdEltYWdlIGZyb20gJy4vUmVzdWx0Q2FyZC9DYXRJbWFnZSc7XG5pbXBvcnQgQ2FyZENvbnRlbnQgZnJvbSAnLi9SZXN1bHRDYXJkL0NhcmRDb250ZW50JztcbmltcG9ydCBDYXJkQWN0aW9uIGZyb20gJy4vUmVzdWx0Q2FyZC9DYXJkQWN0aW9uJztcblxuY2xhc3MgUmVzdWx0Q2FyZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBsZXQgY2F0ID0gdGhpcy5wcm9wcy5jYXQ7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgczMgbTQgczEyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBob3ZlcmFibGVcIj5cbiAgICAgICAgICA8Q2F0SW1hZ2Ugc3JjPXtjYXQudXJsfSAvPlxuICAgICAgICAgIDxDYXJkQ29udGVudCBzZWFyY2hCeVRhZz17dGhpcy5wcm9wcy5zZWFyY2hCeVRhZ30gdGl0bGU9e2NhdC50aXRsZX0gdGFncz17Y2F0LnRhZ3N9IC8+XG4gICAgICAgICAgPENhcmRBY3Rpb24gbGlrZXM9e2NhdC5saWtlc30gaWQ9e2NhdC5pZH0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBSZXN1bHRDYXJkO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7cmVuZGVyfSBmcm9tICdyZWFjdC1kb20nO1xuXG5jbGFzcyBDYXJkQWN0aW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGlkOiBwcm9wcy5pZCxcbiAgICAgIGxpa2VzOiBwcm9wcy5saWtlc1xuICAgIH07XG4gICAgdGhpcy5oYW5kbGVDbGljayA9IHRoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKTtcbiAgfVxuXG4gIGhhbmRsZUNsaWNrKCkge1xuICAgIGxldCBjYXRJZCA9IHRoaXMuc3RhdGUuaWQsXG4gICAgICAgIGxvY2FsQ2F0cyA9IExvY2tyLmdldCgnY2F0cycpLFxuICAgICAgICBpbmRleDtcbiAgICAvLyB1cGRhdGUgbGlrZSBidXR0b24gbGlrZXNcbiAgICB0aGlzLnNldFN0YXRlKHtsaWtlczogdGhpcy5zdGF0ZS5saWtlcyArIDF9KTtcbiAgICAvLyBGaW5kIGNhdCBpcyBsb2NhbCBzdG9yYWdlIGFuZCBpbmNyZW1lbnQgbGlrZXNcbiAgICBpbmRleCA9IGxvY2FsQ2F0cy5maW5kSW5kZXgoeCA9PiB4LmlkID09PSBjYXRJZCk7XG4gICAgbG9jYWxDYXRzW2luZGV4XS5saWtlcyA9IHRoaXMuc3RhdGUubGlrZXMgKyAxO1xuICAgIC8vIGVtcHR5IGFuZCB1cGRhdGUgbG9jYWwgc3RvcmFnZVxuICAgIExvY2tyLmZsdXNoKCk7XG4gICAgbG9jYWxDYXRzLmZvckVhY2goZnVuY3Rpb24obG9jYWxDYXQpe1xuICAgICAgTG9ja3Iuc2FkZCgnY2F0cycsIGxvY2FsQ2F0KTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWFjdGlvblwiPlxuICAgICAgICA8YSBjbGFzc05hbWU9XCJ3YXZlcy1lZmZlY3Qgd2F2ZXMtbGlnaHQgd2F2ZXMtcmVkIHJlZCBkYXJrZW4tMyBidG5cIiBocmVmPXt0aGlzLnByb3BzLnVybH0gZG93bmxvYWQ9e3RoaXMucHJvcHMudXJsfT5cbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1kb3dubG9hZFwiPjwvaT5cbiAgICAgICAgPC9hPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIndhdmVzLWVmZmVjdCB3YXZlcy1saWdodCB3YXZlcy1ibHVlIGJsdWUgZGFya2VuLTMgYnRuXCJcbiAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfT5cbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS10aHVtYnMtdXBcIj48L2k+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGlrZXNfbnVtYmVyXCI+IHt0aGlzLnN0YXRlLmxpa2VzfTwvc3Bhbj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBDYXJkQWN0aW9uO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7cmVuZGVyfSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IFRhZyBmcm9tICcuL0NhcmRDb250ZW50L1RhZyc7XG5cbmNsYXNzIENhcmRDb250ZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgdGFnQ2xpY2sodGFnKXtcbiAgICB0aGlzLnByb3BzLnNlYXJjaEJ5VGFnKHRhZyk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1jb250ZW50XCI+XG4gICAgICAgIDxoNT57dGhpcy5wcm9wcy50aXRsZX08L2g1PlxuICAgICAgICB7dGhpcy5wcm9wcy50YWdzLm1hcCgodGFnLCBrZXkpID0+IHtcbiAgICAgICAgcmV0dXJuIDxUYWcgdGFnQ2xpY2s9e3RoaXMudGFnQ2xpY2suYmluZCh0aGlzKX0ga2V5PXtrZXl9IHRhZz17dGFnfSAvPjtcbiAgICAgICAgfSl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBDYXJkQ29udGVudDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge3JlbmRlcn0gZnJvbSAncmVhY3QtZG9tJztcblxuY2xhc3MgVGFnIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgZ2V0VmFsdWUoKXtcbiAgdGhpcy5wcm9wcy50YWdDbGljayh0aGlzLnByb3BzLnRhZyk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgICA8c3BhbiBvbkNsaWNrPXt0aGlzLmdldFZhbHVlLmJpbmQodGhpcyl9XG4gICAgICAgICAgY2xhc3NOYW1lPVwiY2hpcCBibHVlIGRhcmtlbi0zXCIgPnt0aGlzLnByb3BzLnRhZ308L3NwYW4+XG4gICAgKTtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgVGFnO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7cmVuZGVyfSBmcm9tICdyZWFjdC1kb20nO1xuXG5jbGFzcyBDYXRJbWFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWltYWdlXCI+XG4gICAgICAgIDxpbWcgY2xhc3NOYW1lPVwibWF0ZXJpYWxib3hlZFwiIHNyYz17dGhpcy5wcm9wcy5zcmN9IC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBDYXRJbWFnZTtcbiIsImV4cG9ydCBsZXQgY2F0cyA9IHtcImNhdHNcIjpbXG4gIHtcbiAgICBcImlkXCI6IFwiQ2FtcGVyQ2F0XCIsXG4gICAgXCJsaWtlc1wiOiAzLFxuICAgIFwidGFnc1wiOiBbXCJDb2RpbmdcIixcIkd1cnVcIixcIk5pbmphXCJdLFxuICAgIFwidGl0bGVcIjogXCJDYW1wZXIgQ2F0XCIsXG4gICAgXCJ1cmxcIjogXCJodHRwczovL21lZGlhLmdpcGh5LmNvbS9tZWRpYS9vMHZ3enVGd0NHQUZPL2dpcGh5LmdpZlwiXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IFwiQ2F0LWluLWEtaGF0XCIsXG4gICAgXCJsaWtlc1wiOiA3LFxuICAgIFwidGFnc1wiOiBbXCJDdXRlXCIsIFwiSGF0XCIsIFwiU3RhbmRpbmdcIl0sXG4gICAgXCJ0aXRsZVwiOiBcIkNhdC1pbi1hLWhhdFwiLFxuICAgIFwidXJsXCI6IFwiaHR0cHM6Ly9zLW1lZGlhLWNhY2hlLWFrMC5waW5pbWcuY29tLzU2NHgvMjcvZGYvY2MvMjdkZmNjMTdhOGNlZmU1NmM5OTI3N2Q2M2JlMGQ4MTUuanBnXCJcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogXCJGbHVmZkJhbGxcIixcbiAgICBcImxpa2VzXCI6IDIsXG4gICAgXCJ0YWdzXCI6W1wiRmx1ZmZ5XCIsIFwiTm8tbGVnc1wiLCBcIkJhbGxcIiwgXCJGbHlpbmdcIl0sXG4gICAgXCJ0aXRsZVwiOiBcIkZsdWZmIEJhbGxcIixcbiAgICBcInVybFwiOiBcImh0dHA6Ly93d3cudG9wMTMubmV0L3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE1LzEwL3BlcmZlY3RseS10aW1lZC1mdW5ueS1jYXQtcGljdHVyZXMtNS5qcGdcIlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiBcIkdydW1weUNhdFwiLFxuICAgIFwibGlrZXNcIjogNCxcbiAgICBcInRhZ3NcIjogW1wiR3J1bXB5XCIsIFwiRnVubnlcIiwgXCJGYW1vdXNcIl0sXG4gICAgXCJ0aXRsZVwiOiBcIkdydW1weSBDYXRcIixcbiAgICBcInVybFwiOiBcImh0dHA6Ly9pLmRhaWx5bWFpbC5jby51ay9pL3BpeC8yMDE0LzA4LzA1LzE0MDcyMjU5MzIwOTFfd3BzXzZfU0FOVEFfTU9OSUNBX0NBX0FVR1VTVF8wNC5qcGdcIlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiBcIkhhcHB5Q2F0XCIsXG4gICAgXCJsaWtlc1wiOiA5LFxuICAgIFwidGFnc1wiOiBbXCJIYXBweVwiLCBcIldpbmtpbmdcIiwgXCJTbWlsaW5nXCJdLFxuICAgIFwidGl0bGVcIjogXCJIYXBweSBDYXRcIixcbiAgICBcInVybFwiOiBcImh0dHBzOi8vcGJzLnR3aW1nLmNvbS9wcm9maWxlX2ltYWdlcy8yMTY3MDM1ODk2LzEyM2NhdF80MDB4NDAwLmpwZ1wiXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IFwiTGF1Z2hpbmdDYXRcIixcbiAgICBcImxpa2VzXCI6IDI3LFxuICAgIFwidGFnc1wiOiBbXCJsYXVnaGluZ1wiLCBcIkZ1bm55XCIsIFwiU25pY2tlclwiXSxcbiAgICBcInRpdGxlXCI6IFwiTGF1Z2hpbmcgQ2F0XCIsXG4gICAgXCJ1cmxcIjogXCJodHRwOi8vYmxvZy5uZWtvZmxpZXMuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE0LzAxL2Z1bm55LWNhdC5qcGdcIlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiBcIlNjYXJlZHlDYXRcIixcbiAgICBcImxpa2VzXCI6IDE4LFxuICAgIFwidGFnc1wiOiBbXCJIaWRpbmdcIiwgXCJDdXRlXCIsIFwiU2NhcmVkXCJdLFxuICAgIFwidGl0bGVcIjogXCJTY2FyZWR5IENhdCBcIixcbiAgICBcInVybFwiOiBcImh0dHBzOi8vaS55dGltZy5jb20vdmkvTUc4S0FEaVJiT1UvbWF4cmVzZGVmYXVsdC5qcGdcIlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiBcIlNob2NrZWRDYXRcIixcbiAgICBcImxpa2VzXCI6IDExLFxuICAgIFwidGFnc1wiOiBbXCJXaGF0IGlzIFRIQVQhP1wiLCBcIlNob2NrZWRcIiwgXCJGdW5ueVwiXSxcbiAgICBcInRpdGxlXCI6IFwiU2hvY2tlZCBDYXRcIixcbiAgICBcInVybFwiOiBcImh0dHBzOi8vaS55dGltZy5jb20vdmkvaWNxRHhOYWIzRG8vbWF4cmVzZGVmYXVsdC5qcGdcIlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiBcIlNsZWVwaW5nQ2F0XCIsXG4gICAgXCJsaWtlc1wiOiAyLFxuICAgIFwidGFnc1wiOiBbXCJTbGVlcGluZ1wiLCBcIkN1dGVcIiwgXCJLaXR0ZW5cIl0sXG4gICAgXCJ0aXRsZVwiOiBcIlNsZWVwaW5nIENhdFwiLFxuICAgIFwidXJsXCI6IFwiaHR0cDovL3d3dy5hY3V0ZWFkYXkuY29tL2Jsb2cvd3AtY29udGVudC91cGxvYWRzLzIwMTIvMDkvc2xlZXBpbmcta2l0dHktY2F0LmpwZ1wiXG4gIH1cbl19O1xuIl19
