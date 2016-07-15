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
      var newCat = [{
        id: this.refs.title.value.replace(/\s+/g, ''),
        title: this.refs.title.value,
        url: this.refs.url.value,
        tags: this.refs.tags.value.split(','),
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
      this.props.updateSearch(this.refs.search.value);
    }
  }, {
    key: 'searchByTag',
    value: function searchByTag(tag) {
      this.props.updateSearch(tag);
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
        var searchVal = void 0;
        if (_this2.props.search === '') {
          searchVal = ' ';
        } else {
          searchVal = _this2.props.search;
        }
        return cat.tags.includes(searchVal);
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
    "tags": ["Cute", "Hat", "Standing", ""],
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvYXBwLmpzIiwiYXBwL2NvbXBvbmVudHMvRm9vdGVyLmpzIiwiYXBwL2NvbXBvbmVudHMvTW9kYWwuanMiLCJhcHAvY29tcG9uZW50cy9OYXZiYXIuanMiLCJhcHAvY29tcG9uZW50cy9SZXN1bHRzLmpzIiwiYXBwL2NvbXBvbmVudHMvUmVzdWx0cy9SZXN1bHRDYXJkLmpzIiwiYXBwL2NvbXBvbmVudHMvUmVzdWx0cy9SZXN1bHRDYXJkL0NhcmRBY3Rpb24uanMiLCJhcHAvY29tcG9uZW50cy9SZXN1bHRzL1Jlc3VsdENhcmQvQ2FyZENvbnRlbnQuanMiLCJhcHAvY29tcG9uZW50cy9SZXN1bHRzL1Jlc3VsdENhcmQvQ2FyZENvbnRlbnQvVGFnLmpzIiwiYXBwL2NvbXBvbmVudHMvUmVzdWx0cy9SZXN1bHRDYXJkL0NhdEltYWdlLmpzIiwiYXBwL2NvbXBvbmVudHMvY2F0cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7QUNBQTs7OztBQUNBOztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFTSxHOzs7QUFDSixpQkFBYTtBQUFBOztBQUVYOztBQUZXOztBQUdYLFFBQUksUUFBUSxNQUFNLEdBQU4sQ0FBVSxNQUFWLENBQVo7QUFBQSxRQUNJLGdCQURKO0FBRUEsUUFBSSxLQUFKLEVBQVc7QUFDVCxnQkFBVSxLQUFWO0FBQ0QsS0FGRCxNQUVNO0FBQ0o7QUFDQSxpQkFBSyxJQUFMLENBQVUsT0FBVixDQUFrQixVQUFTLE1BQVQsRUFBZ0I7QUFDaEMsY0FBTSxJQUFOLENBQVcsTUFBWCxFQUFtQixNQUFuQjtBQUNBLGtCQUFVLE1BQU0sR0FBTixDQUFVLE1BQVYsQ0FBVjtBQUNELE9BSEQ7QUFJRDtBQUNELFVBQUssS0FBTCxHQUFhO0FBQ1gsWUFBTSxPQURLO0FBRVgsY0FBUTtBQUZHLEtBQWI7QUFkVztBQWtCWjs7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LE1BQWIsRUFBcUIsUUFBckIsQ0FIVjtBQUlFLGFBQVMsY0FKWDtBQUtFLFdBQU87QUFMVCxHQXpEd0IsQ0FBUixFQUFYIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge3JlbmRlcn0gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7Y2F0c30gZnJvbSAnLi9jb21wb25lbnRzL2NhdHMnO1xuaW1wb3J0IE5hdmJhciBmcm9tICcuL2NvbXBvbmVudHMvTmF2YmFyJztcbmltcG9ydCBNb2RhbCBmcm9tICcuL2NvbXBvbmVudHMvTW9kYWwnO1xuaW1wb3J0IFJlc3VsdHMgZnJvbSAnLi9jb21wb25lbnRzL1Jlc3VsdHMnO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuL2NvbXBvbmVudHMvRm9vdGVyJztcblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKXtcbiAgICBzdXBlcigpO1xuICAgIC8vIHJldHJpZXZlIGNhdHMgZnJvbSBsb2NhbCBzdG9yYWdlXG4gICAgbGV0IGxvY2FsID0gTG9ja3IuZ2V0KCdjYXRzJyksXG4gICAgICAgIGFsbENhdHM7XG4gICAgaWYgKGxvY2FsICl7XG4gICAgICBhbGxDYXRzID0gbG9jYWw7XG4gICAgfSBlbHNle1xuICAgICAgLy8gaWYgbm90IGNhdHMgaW4gbG9jYWwgc3RvcmFnZSwgcHV0IHRoZW0gdGhlcmVcbiAgICAgIGNhdHMuY2F0cy5mb3JFYWNoKGZ1bmN0aW9uKG91ckNhdCl7XG4gICAgICAgIExvY2tyLnNhZGQoJ2NhdHMnLCBvdXJDYXQpO1xuICAgICAgICBhbGxDYXRzID0gTG9ja3IuZ2V0KCdjYXRzJyk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGNhdHM6IGFsbENhdHMsXG4gICAgICBzZWFyY2g6ICcnXG4gICAgfTtcbiAgfVxuICBzdG9yZUNhdHMoY2F0cyl7XG4gICAgTG9ja3IuZmx1c2goKTtcbiAgICBjYXRzLmZvckVhY2goZnVuY3Rpb24obG9jYWxDYXQpe1xuICAgICAgTG9ja3Iuc2FkZCgnY2F0cycsIGxvY2FsQ2F0KTtcbiAgICB9KTtcbiAgfVxuICBhZGRVc2VyQ2F0KG5ld0NhdCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe2NhdHM6IG5ld0NhdC5jb25jYXQodGhpcy5zdGF0ZS5jYXRzKX0pO1xuICAgIHRoaXMuc3RvcmVDYXRzKHRoaXMuc3RhdGUuY2F0cyk7XG4gIH1cbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZTdGF0ZT10aGlzLnN0YXRlLmNhdHMpIHtcbiAgICB0aGlzLnN0b3JlQ2F0cyh0aGlzLnN0YXRlLmNhdHMpO1xuICB9XG4gIHVwZGF0ZVNlYXJjaChuZXdTZWFyY2gpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtzZWFyY2g6IG5ld1NlYXJjaH0pO1xuICB9XG5cbiAgICByZW5kZXIoKXtcbiAgICAgIHJldHVybihcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8TmF2YmFyIC8+XG4gICAgICAgICAgPE1vZGFsIGFkZFVzZXJDYXQ9e3RoaXMuYWRkVXNlckNhdC5iaW5kKHRoaXMpfSAvPlxuICAgICAgICAgIDxSZXN1bHRzIHVwZGF0ZVNlYXJjaD17dGhpcy51cGRhdGVTZWFyY2guYmluZCh0aGlzKX0gc2VhcmNoPXt0aGlzLnN0YXRlLnNlYXJjaH0gY2F0cz17dGhpcy5zdGF0ZS5jYXRzfSAvPlxuICAgICAgICAgIDxGb290ZXIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge3JlbmRlcn0gZnJvbSAncmVhY3QtZG9tJztcblxuY2xhc3MgRm9vdGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxmb290ZXIgY2xhc3NOYW1lPVwicGFnZS1mb290ZXIgYmx1ZSBkYXJrZW4tMlwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwid2hpdGUtdGV4dFwiPkNhdFBob3RvQXBwPC9oNT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZ3JleS10ZXh0IHRleHQtbGlnaHRlbi00XCI+Q2F0UGhvdG9BcHAgaGFzIGJlZW4gY3JlYXRlZCB0byBmb3JtIHBhcnQgb2YgdGhlIDxhIGhyZWY9XCJodHRwczovL2ZyZWVjb2RlY2FtcC5jb21cIiB0YXJnZXQ9XCJfYmxhbmtcIj5GcmVlIENvZGUgQ2FtcDwvYT4gY3VycmljdWx1bS48L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlci1jb3B5cmlnaHRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgwqkgMjAxNiBDYXRQaG90b0FwcFxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZ3JleS10ZXh0IHRleHQtbGlnaHRlbi00IHJpZ2h0XCIgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9hdGpvbmF0aGFuL2NhdHBob3RvYXBwL1wiPkdpdEh1YjwvYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Zvb3Rlcj5cbiAgICApO1xuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7cmVuZGVyfSBmcm9tICdyZWFjdC1kb20nO1xuXG5jbGFzcyBNb2RhbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG51cGxvYWRlZFVzZXJDYXQoZSl7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgbGV0IG5ld0NhdCA9W3tcbiAgICAgICAgaWQ6IHRoaXMucmVmcy50aXRsZS52YWx1ZS5yZXBsYWNlKC9cXHMrL2csICcnKSxcbiAgICAgICAgdGl0bGU6IHRoaXMucmVmcy50aXRsZS52YWx1ZSxcbiAgICAgICAgdXJsOiB0aGlzLnJlZnMudXJsLnZhbHVlLFxuICAgICAgICB0YWdzOiB0aGlzLnJlZnMudGFncy52YWx1ZS5zcGxpdCgnLCcpLFxuICAgICAgICBsaWtlczogMVxuICAgICAgICB9XTtcbiAgICAgIHRoaXMucHJvcHMuYWRkVXNlckNhdChuZXdDYXQpO1xuICAgICAgLy8gQ2xlYXIgZm9ybSBmaWVsZHNcbiAgICAgIHRoaXMucmVmcy50aXRsZS52YWx1ZSA9ICcnO1xuICAgICAgdGhpcy5yZWZzLnVybC52YWx1ZSA9ICcnO1xuICAgICAgdGhpcy5yZWZzLnRhZ3MudmFsdWUgPSAnJztcbiAgICB9XG5cbiAgcmVuZGVyKCl7XG4gICAgICByZXR1cm4oXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICBcdFx0PGRpdiBpZD1cImFkZENhdE1vZGFsXCIgY2xhc3NOYW1lPVwibW9kYWxcIj5cbiAgICAgIFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudFwiPlxuICAgICAgXHRcdFx0XHQ8aDQ+QWRkIENhdCBQaG90bzwvaDQ+XG4gICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLnVwbG9hZGVkVXNlckNhdC5iaW5kKHRoaXMpfT5cbiAgICAgIFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbnB1dC1maWVsZCBjb2wgczEyXCI+XG4gICAgICBcdFx0XHRcdFx0XHRcdDxpbnB1dCBwbGFjZWhvbGRlcj1cIkVudGVyIFRpdGxlXCIgcmVmPVwidGl0bGVcIiBpZD1cInRpdGxlXCIgdHlwZT1cInRleHRcIiByZXF1aXJlZCAvPlxuICAgICAgXHRcdFx0XHRcdFx0XHQ8bGFiZWwgaHRtbEZvcj1cInRpdGxlXCIgZGF0YS1lcnJvcj1cIkNhdCB0aXRsZSBoYXMgYmVlbiB0YWtlblwiIGRhdGEtc3VjY2Vzcz1cIkNhdCB0aXRsZSBpcyBmcmVlIHRvIHVzZVwiPlRpdGxlPC9sYWJlbD5cbiAgICAgIFx0XHRcdFx0XHRcdDwvZGl2PlxuICAgICAgXHRcdFx0XHRcdDwvZGl2PlxuICAgICAgXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICBcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWZpZWxkIGNvbCBzMTJcIj5cbiAgICAgIFx0XHRcdFx0XHRcdFx0PGlucHV0IHBsYWNlaG9sZGVyPVwiRW50ZXIgVVJMXCIgcmVmPVwidXJsXCIgaWQ9XCJ1cmxcIiB0eXBlPVwidXJsXCIgY2xhc3NOYW1lPVwidmFsaWRhdGVcIiByZXF1aXJlZCAvPlxuICAgICAgXHRcdFx0XHRcdFx0XHQ8bGFiZWwgaHRtbEZvcj1cInVybFwiIGRhdGEtZXJyb3I9XCJQbGVhc2UgdXBsb2FkIGEgR0lGLCBQTkcgb3IgSlBHXCIgZGF0YS1zdWNjZXNzPVwiVGhhdHMgYSBVUkwgZm9yIHN1cmUhIEkgaG9wZSBpdCBlbmRzIGluIEdJRiwgUE5HIG9yIEpQRy4uLlwiPkNhdCBQaG90byBVUkw8L2xhYmVsPlxuICAgICAgXHRcdFx0XHRcdFx0PC9kaXY+XG4gICAgICBcdFx0XHRcdFx0PC9kaXY+XG4gICAgICBcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgIFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZmllbGQgY29sIHM2XCI+XG4gICAgICBcdFx0XHRcdFx0XHRcdDxpbnB1dCBwbGFjZWhvbGRlcj1cIlNlcGFyYXRlIHRhZ3Mgd2l0aCBhIGNvbW1hXCIgcmVmPVwidGFnc1wiIGlkPVwidGFnc1wiIHR5cGU9XCJ0ZXh0XCIgcmVxdWlyZWQgLz5cbiAgICAgIFx0XHRcdFx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9XCJ0YWdzXCI+VGFnczwvbGFiZWw+XG4gICAgICBcdFx0XHRcdFx0XHQ8L2Rpdj5cbiAgICAgIFx0XHRcdFx0XHQ8L2Rpdj5cbiAgICAgIFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgXHRcdFx0XHRcdFx0PGJ1dHRvbiBpZD1cInN1Ym1pdC1idG5cIiBjbGFzc05hbWU9XCJidG4gd2F2ZXMtZWZmZWN0IHdhdmVzLWJsdWUgYmx1ZSBkYXJrZW4tMSBzdWJtaXRcIiB0eXBlPVwic3VibWl0XCIgbmFtZT1cImFjdGlvblwiPlxuICAgICAgXHRcdFx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9XCJmYSBmYS1zZW5kXCI+PC9pPlxuICAgICAgXHRcdFx0XHRcdFx0XHQmbmJzcDtTdWJtaXRcbiAgICAgIFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuICAgICAgXHRcdFx0XHRcdDwvZGl2PlxuICAgICAgXHRcdFx0XHQ8L2Zvcm0+XG4gICAgICBcdFx0XHQ8L2Rpdj5cbiAgICAgIFx0XHQ8L2Rpdj5cbiAgICAgIFx0PC9kaXY+XG4gICAgICApO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBNb2RhbDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge3JlbmRlcn0gZnJvbSAncmVhY3QtZG9tJztcblxuY2xhc3MgTmF2YmFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCl7XG4gICAgICByZXR1cm4oXG4gICAgICA8bmF2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi13cmFwcGVyIGJsdWUgZGFya2VuLTJcIj5cbiAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImJyYW5kLWxvZ29cIj4mbmJzcDsmbmJzcDsmbmJzcDtDYXRQaG90b0FwcDwvYT5cbiAgICAgICAgICA8YSBocmVmPVwiI1wiIGRhdGEtYWN0aXZhdGVzPVwibW9iaWxlXCIgY2xhc3NOYW1lPVwiYnV0dG9uLWNvbGxhcHNlXCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtYmFyc1wiPjwvaT48L2E+XG4gICAgICAgICAgPHVsIGlkPVwibmF2LW1vYmlsZVwiIGNsYXNzTmFtZT1cInJpZ2h0IGhpZGUtb24tbWVkLWFuZC1kb3duXCI+XG4gICAgICAgICAgICA8bGk+PGEgY2xhc3NOYW1lPVwibW9kYWwtdHJpZ2dlclwiIGhyZWY9XCIjYWRkQ2F0TW9kYWxcIj5BZGQgQ2F0IFBob3RvPC9hPjwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwic2lkZS1uYXZcIiBpZD1cIm1vYmlsZVwiPlxuXG4gICAgICAgICAgICA8bGk+PGEgY2xhc3NOYW1lPVwibW9kYWwtdHJpZ2dlclwiIGhyZWY9XCIjYWRkQ2F0TW9kYWxcIj5BZGQgQ2F0IFBob3RvPC9hPjwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L25hdj5cblxuXG4gICAgKTtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7cmVuZGVyfSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IFJlc3VsdENhcmQgZnJvbSAnLi9SZXN1bHRzL1Jlc3VsdENhcmQnO1xuXG5jbGFzcyBSZXN1bHRzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc2VhcmNoQnlJbnB1dCgpe1xuICAgIHRoaXMucHJvcHMudXBkYXRlU2VhcmNoKHRoaXMucmVmcy5zZWFyY2gudmFsdWUpO1xuICB9XG4gIHNlYXJjaEJ5VGFnKHRhZyl7XG4gICAgdGhpcy5wcm9wcy51cGRhdGVTZWFyY2godGFnKTtcbiAgfVxuICByZW5kZXIoKSB7XG5cbiAgICBsZXQgc2VhcmNoVmFsO1xuICAgIGlmKHRoaXMucHJvcHMuc2VhcmNoID09PSAnJyl7XG4gICAgICBzZWFyY2hWYWwgPSAnICc7XG4gICAgfWVsc2V7XG4gICAgICBzZWFyY2hWYWwgPSB0aGlzLnByb3BzLnNlYXJjaDtcbiAgICB9XG5cbiAgICBsZXQgcHJlRmlsdGVyZWRDYXRzID0gdGhpcy5wcm9wcy5jYXRzLmZpbHRlcigoY2F0KSA9PiB7XG4gICAgICBsZXQgc2VhcmNoVmFsO1xuICAgICAgaWYodGhpcy5wcm9wcy5zZWFyY2ggPT09ICcnKXtcbiAgICAgICAgc2VhcmNoVmFsID0gJyAnO1xuICAgICAgfWVsc2V7XG4gICAgICAgIHNlYXJjaFZhbCA9IHRoaXMucHJvcHMuc2VhcmNoO1xuICAgICAgfVxuICAgICAgICByZXR1cm4gY2F0LnRhZ3MuaW5jbHVkZXMoc2VhcmNoVmFsKTtcbiAgICAgIH0pO1xuICAgIGxldCBmaWx0ZXJlZENhdHM7XG5cbiAgICBpZihwcmVGaWx0ZXJlZENhdHMubGVuZ3RoID09PSAwKXtcbiAgICAgIGZpbHRlcmVkQ2F0cyA9IHRoaXMucHJvcHMuY2F0cztcbiAgICB9ZWxzZXtcbiAgICAgIGZpbHRlcmVkQ2F0cyA9IHByZUZpbHRlcmVkQ2F0cztcbiAgICB9XG4gICAgY29uc29sZS5sb2cocHJlRmlsdGVyZWRDYXRzLmxlbmd0aCk7XG4gICAgcmV0dXJuKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcmVmPVwic2VhcmNoXCIgb25DaGFuZ2U9e3RoaXMuc2VhcmNoQnlJbnB1dC5iaW5kKHRoaXMpfSB2YWx1ZT17dGhpcy5wcm9wcy5zZWFyY2h9IC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVzdWx0c1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICB7ZmlsdGVyZWRDYXRzLm1hcCgoY2F0KSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiA8UmVzdWx0Q2FyZCBzZWFyY2hCeVRhZz17dGhpcy5zZWFyY2hCeVRhZy5iaW5kKHRoaXMpfSBrZXk9e2NhdC5pZH0gY2F0PXtjYXR9IC8+O1xuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZXN1bHRzO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7cmVuZGVyfSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IENhdEltYWdlIGZyb20gJy4vUmVzdWx0Q2FyZC9DYXRJbWFnZSc7XG5pbXBvcnQgQ2FyZENvbnRlbnQgZnJvbSAnLi9SZXN1bHRDYXJkL0NhcmRDb250ZW50JztcbmltcG9ydCBDYXJkQWN0aW9uIGZyb20gJy4vUmVzdWx0Q2FyZC9DYXJkQWN0aW9uJztcblxuY2xhc3MgUmVzdWx0Q2FyZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBsZXQgY2F0ID0gdGhpcy5wcm9wcy5jYXQ7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgczMgbTQgczEyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBob3ZlcmFibGVcIj5cbiAgICAgICAgICA8Q2F0SW1hZ2Ugc3JjPXtjYXQudXJsfSAvPlxuICAgICAgICAgIDxDYXJkQ29udGVudCBzZWFyY2hCeVRhZz17dGhpcy5wcm9wcy5zZWFyY2hCeVRhZ30gdGl0bGU9e2NhdC50aXRsZX0gdGFncz17Y2F0LnRhZ3N9IC8+XG4gICAgICAgICAgPENhcmRBY3Rpb24gbGlrZXM9e2NhdC5saWtlc30gaWQ9e2NhdC5pZH0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBSZXN1bHRDYXJkO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7cmVuZGVyfSBmcm9tICdyZWFjdC1kb20nO1xuXG5jbGFzcyBDYXJkQWN0aW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGlkOiBwcm9wcy5pZCxcbiAgICAgIGxpa2VzOiBwcm9wcy5saWtlc1xuICAgIH07XG4gICAgdGhpcy5oYW5kbGVDbGljayA9IHRoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKTtcbiAgfVxuXG4gIGhhbmRsZUNsaWNrKCkge1xuICAgIGxldCBjYXRJZCA9IHRoaXMuc3RhdGUuaWQsXG4gICAgICAgIGxvY2FsQ2F0cyA9IExvY2tyLmdldCgnY2F0cycpLFxuICAgICAgICBpbmRleDtcbiAgICAvLyB1cGRhdGUgbGlrZSBidXR0b24gbGlrZXNcbiAgICB0aGlzLnNldFN0YXRlKHtsaWtlczogdGhpcy5zdGF0ZS5saWtlcyArIDF9KTtcbiAgICAvLyBGaW5kIGNhdCBpcyBsb2NhbCBzdG9yYWdlIGFuZCBpbmNyZW1lbnQgbGlrZXNcbiAgICBpbmRleCA9IGxvY2FsQ2F0cy5maW5kSW5kZXgoeCA9PiB4LmlkID09PSBjYXRJZCk7XG4gICAgbG9jYWxDYXRzW2luZGV4XS5saWtlcyA9IHRoaXMuc3RhdGUubGlrZXMgKyAxO1xuICAgIC8vIGVtcHR5IGFuZCB1cGRhdGUgbG9jYWwgc3RvcmFnZVxuICAgIExvY2tyLmZsdXNoKCk7XG4gICAgbG9jYWxDYXRzLmZvckVhY2goZnVuY3Rpb24obG9jYWxDYXQpe1xuICAgICAgTG9ja3Iuc2FkZCgnY2F0cycsIGxvY2FsQ2F0KTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWFjdGlvblwiPlxuICAgICAgICA8YSBjbGFzc05hbWU9XCJ3YXZlcy1lZmZlY3Qgd2F2ZXMtbGlnaHQgd2F2ZXMtcmVkIHJlZCBkYXJrZW4tMyBidG5cIiBocmVmPXt0aGlzLnByb3BzLnVybH0gZG93bmxvYWQ9e3RoaXMucHJvcHMudXJsfT5cbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1kb3dubG9hZFwiPjwvaT5cbiAgICAgICAgPC9hPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIndhdmVzLWVmZmVjdCB3YXZlcy1saWdodCB3YXZlcy1ibHVlIGJsdWUgZGFya2VuLTMgYnRuXCJcbiAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfT5cbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS10aHVtYnMtdXBcIj48L2k+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGlrZXNfbnVtYmVyXCI+IHt0aGlzLnN0YXRlLmxpa2VzfTwvc3Bhbj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBDYXJkQWN0aW9uO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7cmVuZGVyfSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IFRhZyBmcm9tICcuL0NhcmRDb250ZW50L1RhZyc7XG5cbmNsYXNzIENhcmRDb250ZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgdGFnQ2xpY2sodGFnKXtcbiAgICB0aGlzLnByb3BzLnNlYXJjaEJ5VGFnKHRhZyk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1jb250ZW50XCI+XG4gICAgICAgIDxoNT57dGhpcy5wcm9wcy50aXRsZX08L2g1PlxuICAgICAgICB7dGhpcy5wcm9wcy50YWdzLm1hcCgodGFnLCBrZXkpID0+IHtcbiAgICAgICAgcmV0dXJuIDxUYWcgdGFnQ2xpY2s9e3RoaXMudGFnQ2xpY2suYmluZCh0aGlzKX0ga2V5PXtrZXl9IHRhZz17dGFnfSAvPjtcbiAgICAgICAgfSl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBDYXJkQ29udGVudDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge3JlbmRlcn0gZnJvbSAncmVhY3QtZG9tJztcblxuY2xhc3MgVGFnIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgZ2V0VmFsdWUoKXtcbiAgdGhpcy5wcm9wcy50YWdDbGljayh0aGlzLnByb3BzLnRhZyk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgICA8c3BhbiBvbkNsaWNrPXt0aGlzLmdldFZhbHVlLmJpbmQodGhpcyl9XG4gICAgICAgICAgY2xhc3NOYW1lPVwiY2hpcCBibHVlIGRhcmtlbi0zXCIgPnt0aGlzLnByb3BzLnRhZ308L3NwYW4+XG4gICAgKTtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgVGFnO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7cmVuZGVyfSBmcm9tICdyZWFjdC1kb20nO1xuXG5jbGFzcyBDYXRJbWFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWltYWdlXCI+XG4gICAgICAgIDxpbWcgY2xhc3NOYW1lPVwibWF0ZXJpYWxib3hlZFwiIHNyYz17dGhpcy5wcm9wcy5zcmN9IC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBDYXRJbWFnZTtcbiIsImV4cG9ydCBsZXQgY2F0cyA9IHtcImNhdHNcIjpbXG4gIHtcbiAgICBcImlkXCI6IFwiQ2FtcGVyQ2F0XCIsXG4gICAgXCJsaWtlc1wiOiAzLFxuICAgIFwidGFnc1wiOiBbXCJDb2RpbmdcIixcIkd1cnVcIixcIk5pbmphXCJdLFxuICAgIFwidGl0bGVcIjogXCJDYW1wZXIgQ2F0XCIsXG4gICAgXCJ1cmxcIjogXCJodHRwczovL21lZGlhLmdpcGh5LmNvbS9tZWRpYS9vMHZ3enVGd0NHQUZPL2dpcGh5LmdpZlwiXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IFwiQ2F0LWluLWEtaGF0XCIsXG4gICAgXCJsaWtlc1wiOiA3LFxuICAgIFwidGFnc1wiOiBbXCJDdXRlXCIsIFwiSGF0XCIsIFwiU3RhbmRpbmdcIiwgXCJcIl0sXG4gICAgXCJ0aXRsZVwiOiBcIkNhdC1pbi1hLWhhdFwiLFxuICAgIFwidXJsXCI6IFwiaHR0cHM6Ly9zLW1lZGlhLWNhY2hlLWFrMC5waW5pbWcuY29tLzU2NHgvMjcvZGYvY2MvMjdkZmNjMTdhOGNlZmU1NmM5OTI3N2Q2M2JlMGQ4MTUuanBnXCJcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogXCJGbHVmZkJhbGxcIixcbiAgICBcImxpa2VzXCI6IDIsXG4gICAgXCJ0YWdzXCI6W1wiRmx1ZmZ5XCIsIFwiTm8tbGVnc1wiLCBcIkJhbGxcIiwgXCJGbHlpbmdcIl0sXG4gICAgXCJ0aXRsZVwiOiBcIkZsdWZmIEJhbGxcIixcbiAgICBcInVybFwiOiBcImh0dHA6Ly93d3cudG9wMTMubmV0L3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE1LzEwL3BlcmZlY3RseS10aW1lZC1mdW5ueS1jYXQtcGljdHVyZXMtNS5qcGdcIlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiBcIkdydW1weUNhdFwiLFxuICAgIFwibGlrZXNcIjogNCxcbiAgICBcInRhZ3NcIjogW1wiR3J1bXB5XCIsIFwiRnVubnlcIiwgXCJGYW1vdXNcIl0sXG4gICAgXCJ0aXRsZVwiOiBcIkdydW1weSBDYXRcIixcbiAgICBcInVybFwiOiBcImh0dHA6Ly9pLmRhaWx5bWFpbC5jby51ay9pL3BpeC8yMDE0LzA4LzA1LzE0MDcyMjU5MzIwOTFfd3BzXzZfU0FOVEFfTU9OSUNBX0NBX0FVR1VTVF8wNC5qcGdcIlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiBcIkhhcHB5Q2F0XCIsXG4gICAgXCJsaWtlc1wiOiA5LFxuICAgIFwidGFnc1wiOiBbXCJIYXBweVwiLCBcIldpbmtpbmdcIiwgXCJTbWlsaW5nXCJdLFxuICAgIFwidGl0bGVcIjogXCJIYXBweSBDYXRcIixcbiAgICBcInVybFwiOiBcImh0dHBzOi8vcGJzLnR3aW1nLmNvbS9wcm9maWxlX2ltYWdlcy8yMTY3MDM1ODk2LzEyM2NhdF80MDB4NDAwLmpwZ1wiXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IFwiTGF1Z2hpbmdDYXRcIixcbiAgICBcImxpa2VzXCI6IDI3LFxuICAgIFwidGFnc1wiOiBbXCJsYXVnaGluZ1wiLCBcIkZ1bm55XCIsIFwiU25pY2tlclwiXSxcbiAgICBcInRpdGxlXCI6IFwiTGF1Z2hpbmcgQ2F0XCIsXG4gICAgXCJ1cmxcIjogXCJodHRwOi8vYmxvZy5uZWtvZmxpZXMuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE0LzAxL2Z1bm55LWNhdC5qcGdcIlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiBcIlNjYXJlZHlDYXRcIixcbiAgICBcImxpa2VzXCI6IDE4LFxuICAgIFwidGFnc1wiOiBbXCJIaWRpbmdcIiwgXCJDdXRlXCIsIFwiU2NhcmVkXCJdLFxuICAgIFwidGl0bGVcIjogXCJTY2FyZWR5IENhdCBcIixcbiAgICBcInVybFwiOiBcImh0dHBzOi8vaS55dGltZy5jb20vdmkvTUc4S0FEaVJiT1UvbWF4cmVzZGVmYXVsdC5qcGdcIlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiBcIlNob2NrZWRDYXRcIixcbiAgICBcImxpa2VzXCI6IDExLFxuICAgIFwidGFnc1wiOiBbXCJXaGF0IGlzIFRIQVQhP1wiLCBcIlNob2NrZWRcIiwgXCJGdW5ueVwiXSxcbiAgICBcInRpdGxlXCI6IFwiU2hvY2tlZCBDYXRcIixcbiAgICBcInVybFwiOiBcImh0dHBzOi8vaS55dGltZy5jb20vdmkvaWNxRHhOYWIzRG8vbWF4cmVzZGVmYXVsdC5qcGdcIlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiBcIlNsZWVwaW5nQ2F0XCIsXG4gICAgXCJsaWtlc1wiOiAyLFxuICAgIFwidGFnc1wiOiBbXCJTbGVlcGluZ1wiLCBcIkN1dGVcIiwgXCJLaXR0ZW5cIl0sXG4gICAgXCJ0aXRsZVwiOiBcIlNsZWVwaW5nIENhdFwiLFxuICAgIFwidXJsXCI6IFwiaHR0cDovL3d3dy5hY3V0ZWFkYXkuY29tL2Jsb2cvd3AtY29udGVudC91cGxvYWRzLzIwMTIvMDkvc2xlZXBpbmcta2l0dHktY2F0LmpwZ1wiXG4gIH1cbl19O1xuIl19
