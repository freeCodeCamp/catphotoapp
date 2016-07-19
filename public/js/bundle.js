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
    }
    // Every time this.state.cats changes, update local storage

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
    key: 'clearSearch',
    value: function clearSearch() {
      this.setState({ search: "" });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Navbar2.default, { clearSearch: this.clearSearch.bind(this) }),
        _react2.default.createElement(_Modal2.default, {
          addUserCat: this.addUserCat.bind(this),
          cats: this.state.cats
        }),
        _react2.default.createElement(_Results2.default, {
          clearSearch: this.clearSearch.bind(this),
          updateSearch: this.updateSearch.bind(this),
          search: this.state.search,
          cats: this.state.cats
        }),
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
      catId: "NotUpdated"
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
        this.setState({ catId: id });
        this.setState({ validTitle: "validate valid" });
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
      for (var a = 0; a < cleanTags.length; a++) {
        if (cleanTags[a] === "" || cleanTags[a].match(/\s*/) && !cleanTags[a].match(/[\w\.\\,\/\#\!\?\£<\>\$\%\^\&\*\;\:\{\}\=\-\_\`\~\(\)]/i)) {
          cleanTags.splice(a, 1);
          a = 0;
        }
      }
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
            { href: '#', onClick: this.props.clearSearch, className: 'brand-logo' },
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

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Results).call(this));

    _this.state = {
      animateClass: ""
    };
    return _this;
  }

  _createClass(Results, [{
    key: 'searchByInput',
    value: function searchByInput() {
      this.props.updateSearch(this.refs.search.value.toLowerCase());
      if (this.props.search.length > 1) {
        this.setState({ animateClass: "animate" });
      }
    }
  }, {
    key: 'searchByTag',
    value: function searchByTag(tag) {
      this.props.updateSearch(tag.toLowerCase());
      this.setState({ animateClass: "animate" });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var preFilteredCats = this.props.cats.filter(function (cat) {
        var lowerTags = [],
            formatTags = cat.tags.forEach(function (tag) {
          lowerTags.push(tag.toLowerCase());
        });
        return lowerTags.indexOf(_this2.props.search) !== -1;
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
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'input-field col s12' },
            _react2.default.createElement('img', {
              className: "clear-icon prefix " + this.state.animateClass,
              src: 'public/img/icons/ic_loupe_black_24px.svg',
              onClick: this.props.clearSearch
            }),
            _react2.default.createElement('input', { type: 'text',
              placeholder: 'Search for cat tags here, or click on a cat tag...',
              ref: 'search',
              id: 'searchBar',
              onChange: this.searchByInput.bind(this),
              value: this.props.search
            })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'results' },
          _react2.default.createElement(
            'div',
            { className: 'row' },
            filteredCats.map(function (cat) {
              return _react2.default.createElement(_ResultCard2.default, {
                searchByTag: _this2.searchByTag.bind(_this2),
                key: cat.id,
                cat: cat
              });
            })
          )
        )
      );
    } //

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvYXBwLmpzIiwiYXBwL2NvbXBvbmVudHMvRm9vdGVyLmpzIiwiYXBwL2NvbXBvbmVudHMvTW9kYWwuanMiLCJhcHAvY29tcG9uZW50cy9OYXZiYXIuanMiLCJhcHAvY29tcG9uZW50cy9SZXN1bHRzLmpzIiwiYXBwL2NvbXBvbmVudHMvUmVzdWx0cy9DYXJkQWN0aW9uLmpzIiwiYXBwL2NvbXBvbmVudHMvUmVzdWx0cy9DYXJkQ29udGVudC5qcyIsImFwcC9jb21wb25lbnRzL1Jlc3VsdHMvQ2F0SW1hZ2UuanMiLCJhcHAvY29tcG9uZW50cy9SZXN1bHRzL1Jlc3VsdENhcmQuanMiLCJhcHAvY29tcG9uZW50cy9SZXN1bHRzL1RhZy5qcyIsImFwcC9jb21wb25lbnRzL2NhdHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0FDQUE7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRU0sRzs7O0FBQ0osaUJBQWE7QUFBQTs7OztBQUFBOztBQUdYLFFBQUksUUFBUSxNQUFNLEdBQU4sQ0FBVSxNQUFWLENBQVo7QUFBQSxRQUNJLGdCQURKO0FBRUEsUUFBSSxLQUFKLEVBQVc7QUFDVCxnQkFBVSxLQUFWO0FBQ0QsS0FGRCxNQUVPOztBQUVMLGlCQUFLLElBQUwsQ0FBVSxPQUFWLENBQWtCLFVBQVMsTUFBVCxFQUFnQjtBQUNoQyxjQUFNLElBQU4sQ0FBVyxNQUFYLEVBQW1CLE1BQW5CO0FBQ0Esa0JBQVUsTUFBTSxHQUFOLENBQVUsTUFBVixDQUFWO0FBQ0QsT0FIRDtBQUlEO0FBQ0QsVUFBSyxLQUFMLEdBQWE7QUFDWCxZQUFNLE9BREs7QUFFWCxjQUFRO0FBRkcsS0FBYjtBQWRXO0FBa0JaOzs7OzhCQUNTLEksRUFBTTtBQUNkLFlBQU0sS0FBTjtBQUNBLFdBQUssT0FBTCxDQUFhLFVBQVMsUUFBVCxFQUFt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YUFBUyxZQUpYO0FBS0UsV0FBTztBQUxULEdBdEJ3QixFQTZCeEI7QUFDRSxVQUFNLFVBRFI7QUFFRSxhQUFTLENBRlg7QUFHRSxZQUFRLENBQUMsT0FBRCxFQUFVLFNBQVYsRUFBcUIsU0FBckIsQ0FIVjtBQUlFLGFBQVMsV0FKWDtBQUtFLFdBQU87QUFMVCxHQTdCd0IsRUFvQ3hCO0FBQ0UsVUFBTSxhQURSO0FBRUUsYUFBUyxFQUZYO0FBR0UsWUFBUSxDQUFDLFVBQUQsRUFBYSxPQUFiLEVBQXNCLFNBQXRCLENBSFY7QUFJRSxhQUFTLGNBSlg7QUFLRSxXQUFPO0FBTFQsR0FwQ3dCLEVBMkN4QjtBQUNFLFVBQU0sWUFEUjtBQUVFLGFBQVMsRUFGWDtBQUdFLFlBQVEsQ0FBQyxRQUFELEVBQVcsTUFBWCxFQUFtQixRQUFuQixDQUhWO0FBSUUsYUFBUyxjQUpYO0FBS0UsV0FBTztBQUxULEdBM0N3QixFQWtEeEI7QUFDRSxVQUFNLFlBRFI7QUFFRSxhQUFTLEVBRlg7QUFHRSxZQUFRLENBQUMsZ0JBQUQsRUFBbUIsU0FBbkIsRUFBOEIsT0FBOUIsQ0FIVjtBQUlFLGFBQVMsYUFKWDtBQUtFLFdBQU87QUFMVCxHQWxEd0IsRUF5RHhCO0FBQ0UsVUFBTSxhQURSO0FBRUUsYUFBUyxDQUZYO0FBR0UsWUFBUSxDQUFDLFVBQUQsRUFBYSxNQUFiLEVBQXFCLFFBQXJCLENBSFY7QUFJRSxhQUFTLGNBSlg7QUFLRSxXQUFPO0FBTFQsR0F6RHdCLENBQVIsRUFBWCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtyZW5kZXJ9IGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQge2NhdHN9IGZyb20gJy4vY29tcG9uZW50cy9jYXRzJztcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi9jb21wb25lbnRzL05hdmJhcic7XG5pbXBvcnQgTW9kYWwgZnJvbSAnLi9jb21wb25lbnRzL01vZGFsJztcbmltcG9ydCBSZXN1bHRzIGZyb20gJy4vY29tcG9uZW50cy9SZXN1bHRzJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9jb21wb25lbnRzL0Zvb3Rlcic7XG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCl7XG4gICAgc3VwZXIoKTtcbiAgICAvLyByZXRyaWV2ZSBjYXRzIGZyb20gbG9jYWwgc3RvcmFnZVxuICAgIGxldCBsb2NhbCA9IExvY2tyLmdldCgnY2F0cycpLFxuICAgICAgICBhbGxDYXRzO1xuICAgIGlmIChsb2NhbCApe1xuICAgICAgYWxsQ2F0cyA9IGxvY2FsO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBpZiBub3QgY2F0cyBpbiBsb2NhbCBzdG9yYWdlLCBwdXQgdGhlbSB0aGVyZVxuICAgICAgY2F0cy5jYXRzLmZvckVhY2goZnVuY3Rpb24ob3VyQ2F0KXtcbiAgICAgICAgTG9ja3Iuc2FkZCgnY2F0cycsIG91ckNhdCk7XG4gICAgICAgIGFsbENhdHMgPSBMb2Nrci5nZXQoJ2NhdHMnKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgY2F0czogYWxsQ2F0cyxcbiAgICAgIHNlYXJjaDogJydcbiAgICB9O1xuICB9XG4gIHN0b3JlQ2F0cyhjYXRzKSB7XG4gICAgTG9ja3IuZmx1c2goKTtcbiAgICBjYXRzLmZvckVhY2goZnVuY3Rpb24obG9jYWxDYXQpIHtcbiAgICAgIExvY2tyLnNhZGQoJ2NhdHMnLCBsb2NhbENhdCk7XG4gICAgfSk7XG4gIH1cbiAgYWRkVXNlckNhdChuZXdDYXQpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtjYXRzOiBuZXdDYXQuY29uY2F0KHRoaXMuc3RhdGUuY2F0cyl9KTtcbiAgfVxuICAvLyBFdmVyeSB0aW1lIHRoaXMuc3RhdGUuY2F0cyBjaGFuZ2VzLCB1cGRhdGUgbG9jYWwgc3RvcmFnZVxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlN0YXRlPXRoaXMuc3RhdGUuY2F0cykge1xuICAgIHRoaXMuc3RvcmVDYXRzKHRoaXMuc3RhdGUuY2F0cyk7XG4gIH1cbiAgdXBkYXRlU2VhcmNoKG5ld1NlYXJjaCkge1xuICAgIG5ld1NlYXJjaC50b0xvd2VyQ2FzZSgpO1xuICAgIHRoaXMuc2V0U3RhdGUoe3NlYXJjaDogbmV3U2VhcmNofSk7XG4gIH1cbiAgY2xlYXJTZWFyY2goKXtcbiAgICB0aGlzLnNldFN0YXRlKHtzZWFyY2g6IFwiXCJ9KTtcbiAgfVxuICByZW5kZXIoKXtcbiAgICByZXR1cm4oXG4gICAgICA8ZGl2PlxuICAgICAgICA8TmF2YmFyIGNsZWFyU2VhcmNoPXt0aGlzLmNsZWFyU2VhcmNoLmJpbmQodGhpcyl9IC8+XG4gICAgICAgIDxNb2RhbFxuICAgICAgICAgIGFkZFVzZXJDYXQ9e3RoaXMuYWRkVXNlckNhdC5iaW5kKHRoaXMpfVxuICAgICAgICAgIGNhdHM9e3RoaXMuc3RhdGUuY2F0c31cbiAgICAgICAgICAvPlxuICAgICAgICA8UmVzdWx0c1xuICAgICAgICAgIGNsZWFyU2VhcmNoPXt0aGlzLmNsZWFyU2VhcmNoLmJpbmQodGhpcyl9XG4gICAgICAgICAgdXBkYXRlU2VhcmNoPXt0aGlzLnVwZGF0ZVNlYXJjaC5iaW5kKHRoaXMpfVxuICAgICAgICAgIHNlYXJjaD17dGhpcy5zdGF0ZS5zZWFyY2h9XG4gICAgICAgICAgY2F0cz17dGhpcy5zdGF0ZS5jYXRzfVxuICAgICAgICAgIC8+XG4gICAgICAgIDxGb290ZXIgLz5cbiAgICAgIDwvZGl2PlxuICApO1xuICB9XG59XG5cbnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7cmVuZGVyfSBmcm9tICdyZWFjdC1kb20nO1xuXG5jbGFzcyBGb290ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGZvb3RlciBjbGFzc05hbWU9XCJwYWdlLWZvb3RlciBibHVlIGRhcmtlbi0yXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJ3aGl0ZS10ZXh0XCI+Q2F0UGhvdG9BcHA8L2g1PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJncmV5LXRleHQgdGV4dC1saWdodGVuLTRcIj5DYXRQaG90b0FwcCBoYXMgYmVlbiBjcmVhdGVkIHRvIGZvcm0gcGFydCBvZiB0aGUgPGEgaHJlZj1cImh0dHBzOi8vZnJlZWNvZGVjYW1wLmNvbVwiIHRhcmdldD1cIl9ibGFua1wiPkZyZWUgQ29kZSBDYW1wPC9hPiBjdXJyaWN1bHVtLjwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLWNvcHlyaWdodFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICDCqSAyMDE2IENhdFBob3RvQXBwXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJncmV5LXRleHQgdGV4dC1saWdodGVuLTQgcmlnaHRcIiBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2F0am9uYXRoYW4vY2F0cGhvdG9hcHAvXCI+R2l0SHViPC9hPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZm9vdGVyPlxuICAgICk7XG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtyZW5kZXJ9IGZyb20gJ3JlYWN0LWRvbSc7XG5cbmNsYXNzIE1vZGFsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKXtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuc3RhdGUgPXtcbiAgICAgIHZhbGlkVGl0bGU6IFwidmFsaWRhdGVcIixcbiAgICAgIGNhdElkOiBcIk5vdFVwZGF0ZWRcIlxuICAgIH07XG4gIH1cblxuICBpc1RpdGxlVmFsaWQoKXtcbiAgICBsZXQgaWQgPSB0aGlzLnJlZnMudGl0bGUudmFsdWUucmVwbGFjZSgvXFxzKy9nLCAnJyksXG4gICAgICAgIGV4aXN0aW5nSWRzID0gW107XG4gICAgdGhpcy5wcm9wcy5jYXRzLmZvckVhY2goKGNhdCkgPT57XG4gICAgICBleGlzdGluZ0lkcy5wdXNoKGNhdC5pZCk7XG4gICAgfSk7XG4gICAgaWYoZXhpc3RpbmdJZHMuaW5kZXhPZihpZCkgPT09IC0xKXtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2NhdElkOiBpZH0pO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7dmFsaWRUaXRsZTogXCJ2YWxpZGF0ZSB2YWxpZFwifSk7XG4gICAgfWVsc2V7XG4gICAgICB0aGlzLnNldFN0YXRlKHt2YWxpZFRpdGxlOiBcInZhbGlkYXRlIGludmFsaWRcIn0pO1xuICAgIH1cbiAgfVxudXBsb2FkZWRVc2VyQ2F0KGUpe1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGxldCB0YWdzID0gdGhpcy5yZWZzLnRhZ3MudmFsdWUuc3BsaXQoJywnKSxcbiAgICAgIGNsZWFuVGFncyA9IFtdLFxuICAgICAgZm9ybWF0VGFncyA9IHRhZ3MuZm9yRWFjaChmdW5jdGlvbih0YWcpe1xuICAgICAgICBjbGVhblRhZ3MucHVzaCh0YWcudHJpbSgpKTtcbiAgICAgIH0pO1xuICAgICAgZm9yKHZhciBhID0gMDsgYTxjbGVhblRhZ3MubGVuZ3RoOyBhKyspe1xuICAgICAgICBpZihjbGVhblRhZ3NbYV0gPT09IFwiXCIgfHxcbiAgICAgICAgKGNsZWFuVGFnc1thXS5tYXRjaCgvXFxzKi8pICYmXG4gICAgICAgICFjbGVhblRhZ3NbYV0ubWF0Y2goL1tcXHdcXC5cXFxcLFxcL1xcI1xcIVxcP1xcwqM8XFw+XFwkXFwlXFxeXFwmXFwqXFw7XFw6XFx7XFx9XFw9XFwtXFxfXFxgXFx+XFwoXFwpXS9pKSkpe1xuICAgICAgICAgIGNsZWFuVGFncy5zcGxpY2UoYSwgMSk7XG4gICAgICAgICAgYT0wO1xuICAgICAgICB9XG4gICAgICB9XG4gIGxldCB1cmwgPSB0aGlzLnJlZnMudXJsLnZhbHVlLFxuICAgICAgY2xlYW5Vcmw7XG4gIGlmKHVybC5tYXRjaCgvKGpwZ3xwbmd8Z2lmKSQvaSkpe1xuICAgIGNsZWFuVXJsID0gdXJsO1xuICB9ZWxzZXtcbiAgICBjbGVhblVybCA9IFwicHVibGljL2ltZy9yZXBsYWNlbWVudENhdC5qcGdcIjtcbiAgfVxuICBsZXQgbmV3Q2F0ID1be1xuICAgICAgICBpZDogdGhpcy5zdGF0ZS5jYXRJZCxcbiAgICAgICAgdGl0bGU6IHRoaXMucmVmcy50aXRsZS52YWx1ZSxcbiAgICAgICAgdXJsOiBjbGVhblVybCxcbiAgICAgICAgdGFnczogY2xlYW5UYWdzLFxuICAgICAgICBsaWtlczogMVxuICAgICAgICB9XTtcbiAgICAgIHRoaXMucHJvcHMuYWRkVXNlckNhdChuZXdDYXQpO1xuICAgICAgLy8gQ2xlYXIgZm9ybSBmaWVsZHNcbiAgICAgIHRoaXMucmVmcy50aXRsZS52YWx1ZSA9ICcnO1xuICAgICAgdGhpcy5yZWZzLnVybC52YWx1ZSA9ICcnO1xuICAgICAgdGhpcy5yZWZzLnRhZ3MudmFsdWUgPSAnJztcbiAgICB9XG5cbiAgcmVuZGVyKCl7XG4gICAgICByZXR1cm4oXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICBcdFx0PGRpdiBpZD1cImFkZENhdE1vZGFsXCIgY2xhc3NOYW1lPVwibW9kYWxcIj5cbiAgICAgIFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudFwiPlxuICAgICAgXHRcdFx0XHQ8aDQ+QWRkIENhdCBQaG90bzwvaDQ+XG4gICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLnVwbG9hZGVkVXNlckNhdC5iaW5kKHRoaXMpfT5cbiAgICAgIFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbnB1dC1maWVsZCBjb2wgczEyXCI+XG4gICAgICBcdFx0XHRcdFx0XHRcdDxpbnB1dCBjbGFzc05hbWU9e3RoaXMuc3RhdGUudmFsaWRUaXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5pc1RpdGxlVmFsaWQuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIFRpdGxlXCIgcmVmPVwidGl0bGVcIiBpZD1cInRpdGxlXCIgdHlwZT1cInRleHRcIiByZXF1aXJlZCAvPlxuICAgICAgXHRcdFx0XHRcdFx0XHQ8bGFiZWwgaHRtbEZvcj1cInRpdGxlXCIgZGF0YS1lcnJvcj1cIkNhdCB0aXRsZSBoYXMgYmVlbiB0YWtlblwiIGRhdGEtc3VjY2Vzcz1cIkNhdCB0aXRsZSBpcyBmcmVlIHRvIHVzZVwiPlRpdGxlPC9sYWJlbD5cbiAgICAgIFx0XHRcdFx0XHRcdDwvZGl2PlxuICAgICAgXHRcdFx0XHRcdDwvZGl2PlxuICAgICAgXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICBcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWZpZWxkIGNvbCBzMTJcIj5cbiAgICAgIFx0XHRcdFx0XHRcdFx0PGlucHV0IHBsYWNlaG9sZGVyPVwiRW50ZXIgVVJMXCIgcmVmPVwidXJsXCIgaWQ9XCJ1cmxcIiB0eXBlPVwidXJsXCIgY2xhc3NOYW1lPVwidmFsaWRhdGVcIiByZXF1aXJlZCAvPlxuICAgICAgXHRcdFx0XHRcdFx0XHQ8bGFiZWwgaHRtbEZvcj1cInVybFwiIGRhdGEtZXJyb3I9XCJQbGVhc2UgdXBsb2FkIGEgR0lGLCBQTkcgb3IgSlBHXCIgZGF0YS1zdWNjZXNzPVwiVGhhdHMgYSBVUkwgZm9yIHN1cmUhIEkgaG9wZSBpdCBlbmRzIGluIEdJRiwgUE5HIG9yIEpQRy4uLlwiPkNhdCBQaG90byBVUkw8L2xhYmVsPlxuICAgICAgXHRcdFx0XHRcdFx0PC9kaXY+XG4gICAgICBcdFx0XHRcdFx0PC9kaXY+XG4gICAgICBcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgIFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZmllbGQgY29sIHM2XCI+XG4gICAgICBcdFx0XHRcdFx0XHRcdDxpbnB1dCBwbGFjZWhvbGRlcj1cIlNlcGFyYXRlIHRhZ3Mgd2l0aCBhIGNvbW1hXCIgcmVmPVwidGFnc1wiIGlkPVwidGFnc1wiIHR5cGU9XCJ0ZXh0XCIgcmVxdWlyZWQgLz5cbiAgICAgIFx0XHRcdFx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9XCJ0YWdzXCI+VGFnczwvbGFiZWw+XG4gICAgICBcdFx0XHRcdFx0XHQ8L2Rpdj5cbiAgICAgIFx0XHRcdFx0XHQ8L2Rpdj5cbiAgICAgIFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgXHRcdFx0XHRcdFx0PGJ1dHRvbiBpZD1cInN1Ym1pdC1idG5cIiBjbGFzc05hbWU9XCJidG4gd2F2ZXMtZWZmZWN0IHdhdmVzLWJsdWUgYmx1ZSBkYXJrZW4tMSBzdWJtaXRcIiB0eXBlPVwic3VibWl0XCIgbmFtZT1cImFjdGlvblwiPlxuICAgICAgXHRcdFx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9XCJmYSBmYS1zZW5kXCI+PC9pPlxuICAgICAgXHRcdFx0XHRcdFx0XHQmbmJzcDtTdWJtaXRcbiAgICAgIFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuICAgICAgXHRcdFx0XHRcdDwvZGl2PlxuICAgICAgXHRcdFx0XHQ8L2Zvcm0+XG4gICAgICBcdFx0XHQ8L2Rpdj5cbiAgICAgIFx0XHQ8L2Rpdj5cbiAgICAgIFx0PC9kaXY+XG4gICAgICApO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBNb2RhbDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge3JlbmRlcn0gZnJvbSAncmVhY3QtZG9tJztcblxuY2xhc3MgTmF2YmFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCl7XG4gICAgICByZXR1cm4oXG4gICAgICA8bmF2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi13cmFwcGVyIGJsdWUgZGFya2VuLTJcIj5cbiAgICAgICAgICA8YSBocmVmPVwiI1wiIG9uQ2xpY2s9e3RoaXMucHJvcHMuY2xlYXJTZWFyY2h9IGNsYXNzTmFtZT1cImJyYW5kLWxvZ29cIj4mbmJzcDsmbmJzcDsmbmJzcDtDYXRQaG90b0FwcDwvYT5cbiAgICAgICAgICA8YSBocmVmPVwiI1wiIGRhdGEtYWN0aXZhdGVzPVwibW9iaWxlXCIgY2xhc3NOYW1lPVwiYnV0dG9uLWNvbGxhcHNlXCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtYmFyc1wiPjwvaT48L2E+XG4gICAgICAgICAgPHVsIGlkPVwibmF2LW1vYmlsZVwiIGNsYXNzTmFtZT1cInJpZ2h0IGhpZGUtb24tbWVkLWFuZC1kb3duXCI+XG4gICAgICAgICAgICA8bGk+PGEgY2xhc3NOYW1lPVwibW9kYWwtdHJpZ2dlclwiIGhyZWY9XCIjYWRkQ2F0TW9kYWxcIj5BZGQgQ2F0IFBob3RvPC9hPjwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwic2lkZS1uYXZcIiBpZD1cIm1vYmlsZVwiPlxuXG4gICAgICAgICAgICA8bGk+PGEgY2xhc3NOYW1lPVwibW9kYWwtdHJpZ2dlclwiIGhyZWY9XCIjYWRkQ2F0TW9kYWxcIj5BZGQgQ2F0IFBob3RvPC9hPjwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L25hdj5cblxuXG4gICAgKTtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7cmVuZGVyfSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IFJlc3VsdENhcmQgZnJvbSAnLi9SZXN1bHRzL1Jlc3VsdENhcmQnO1xuXG5jbGFzcyBSZXN1bHRzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKXtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBhbmltYXRlQ2xhc3M6IFwiXCJcbiAgICB9O1xuICB9XG4gIHNlYXJjaEJ5SW5wdXQoKXtcbiAgICB0aGlzLnByb3BzLnVwZGF0ZVNlYXJjaCh0aGlzLnJlZnMuc2VhcmNoLnZhbHVlLnRvTG93ZXJDYXNlKCkpO1xuICAgIGlmKHRoaXMucHJvcHMuc2VhcmNoLmxlbmd0aCA+IDEpe1xuICAgIHRoaXMuc2V0U3RhdGUoe2FuaW1hdGVDbGFzczogXCJhbmltYXRlXCJ9KTtcbiAgICB9XG4gIH1cbiAgc2VhcmNoQnlUYWcodGFnKXtcbiAgICB0aGlzLnByb3BzLnVwZGF0ZVNlYXJjaCh0YWcudG9Mb3dlckNhc2UoKSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7YW5pbWF0ZUNsYXNzOiBcImFuaW1hdGVcIn0pO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBsZXQgcHJlRmlsdGVyZWRDYXRzID0gdGhpcy5wcm9wcy5jYXRzLmZpbHRlcigoY2F0KSA9PiB7XG4gICAgbGV0IGxvd2VyVGFncyA9IFtdLFxuICAgICAgICBmb3JtYXRUYWdzID0gY2F0LnRhZ3MuZm9yRWFjaCgodGFnKSA9PiB7XG4gICAgICAgICAgbG93ZXJUYWdzLnB1c2godGFnLnRvTG93ZXJDYXNlKCkpO1xuICAgICAgICB9KTtcbiAgICByZXR1cm4gKGxvd2VyVGFncy5pbmRleE9mKHRoaXMucHJvcHMuc2VhcmNoKSAhPT0gLTEpO1xuICAgIH0pO1xuICAgIGxldCBmaWx0ZXJlZENhdHM7XG5cbiAgICBpZihwcmVGaWx0ZXJlZENhdHMubGVuZ3RoID09PSAwKXtcbiAgICAgIGZpbHRlcmVkQ2F0cyA9IHRoaXMucHJvcHMuY2F0cztcbiAgICB9ZWxzZXtcbiAgICAgIGZpbHRlcmVkQ2F0cyA9IHByZUZpbHRlcmVkQ2F0cztcbiAgICB9XG4gICAgcmV0dXJuKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWZpZWxkIGNvbCBzMTJcIj5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcImNsZWFyLWljb24gcHJlZml4IFwiICsgKHRoaXMuc3RhdGUuYW5pbWF0ZUNsYXNzKX1cbiAgICAgICAgICAgICAgc3JjPVwicHVibGljL2ltZy9pY29ucy9pY19sb3VwZV9ibGFja18yNHB4LnN2Z1wiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMucHJvcHMuY2xlYXJTZWFyY2h9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCBmb3IgY2F0IHRhZ3MgaGVyZSwgb3IgY2xpY2sgb24gYSBjYXQgdGFnLi4uXCJcbiAgICAgICAgICAgICAgcmVmPVwic2VhcmNoXCJcbiAgICAgICAgICAgICAgaWQ9XCJzZWFyY2hCYXJcIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5zZWFyY2hCeUlucHV0LmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnByb3BzLnNlYXJjaH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVzdWx0c1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICB7ZmlsdGVyZWRDYXRzLm1hcCgoY2F0KSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiA8UmVzdWx0Q2FyZFxuICAgICAgICAgICAgICAgICAgICAgIHNlYXJjaEJ5VGFnPXt0aGlzLnNlYXJjaEJ5VGFnLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAga2V5PXtjYXQuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgY2F0PXtjYXR9XG4gICAgICAgICAgICAgICAgICAgICAgLz47XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9Ly9cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVzdWx0cztcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge3JlbmRlcn0gZnJvbSAncmVhY3QtZG9tJztcblxuY2xhc3MgQ2FyZEFjdGlvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpZDogcHJvcHMuaWQsXG4gICAgICBsaWtlczogcHJvcHMubGlrZXNcbiAgICB9O1xuICAgIHRoaXMuaGFuZGxlQ2xpY2sgPSB0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcyk7XG4gIH1cblxuICBoYW5kbGVDbGljaygpIHtcbiAgICBsZXQgY2F0SWQgPSB0aGlzLnN0YXRlLmlkLFxuICAgICAgICBsb2NhbENhdHMgPSBMb2Nrci5nZXQoJ2NhdHMnKSxcbiAgICAgICAgaW5kZXg7XG4gICAgLy8gdXBkYXRlIGxpa2UgYnV0dG9uIGxpa2VzXG4gICAgdGhpcy5zZXRTdGF0ZSh7bGlrZXM6IHRoaXMuc3RhdGUubGlrZXMgKyAxfSk7XG4gICAgLy8gRmluZCBjYXQgaXMgbG9jYWwgc3RvcmFnZSBhbmQgaW5jcmVtZW50IGxpa2VzXG4gICAgaW5kZXggPSBsb2NhbENhdHMuZmluZEluZGV4KHggPT4geC5pZCA9PT0gY2F0SWQpO1xuICAgIGxvY2FsQ2F0c1tpbmRleF0ubGlrZXMgPSB0aGlzLnN0YXRlLmxpa2VzICsgMTtcbiAgICAvLyBlbXB0eSBhbmQgdXBkYXRlIGxvY2FsIHN0b3JhZ2VcbiAgICBMb2Nrci5mbHVzaCgpO1xuICAgIGxvY2FsQ2F0cy5mb3JFYWNoKGZ1bmN0aW9uKGxvY2FsQ2F0KXtcbiAgICAgIExvY2tyLnNhZGQoJ2NhdHMnLCBsb2NhbENhdCk7XG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1hY3Rpb25cIj5cbiAgICAgICAgPGEgY2xhc3NOYW1lPVwid2F2ZXMtZWZmZWN0IHdhdmVzLWxpZ2h0IHdhdmVzLXJlZCByZWQgZGFya2VuLTMgYnRuXCIgaHJlZj17dGhpcy5wcm9wcy51cmx9IGRvd25sb2FkPXt0aGlzLnByb3BzLnVybH0+XG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtZG93bmxvYWRcIj48L2k+XG4gICAgICAgIDwvYT5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ3YXZlcy1lZmZlY3Qgd2F2ZXMtbGlnaHQgd2F2ZXMtYmx1ZSBibHVlIGRhcmtlbi0zIGJ0blwiXG4gICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDbGlja30+XG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtdGh1bWJzLXVwXCI+PC9pPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxpa2VzX251bWJlclwiPiB7dGhpcy5zdGF0ZS5saWtlc308L3NwYW4+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgQ2FyZEFjdGlvbjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge3JlbmRlcn0gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBUYWcgZnJvbSAnLi9UYWcnO1xuXG5jbGFzcyBDYXJkQ29udGVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHRhZ0NsaWNrKHRhZyl7XG4gICAgdGhpcy5wcm9wcy5zZWFyY2hCeVRhZyh0YWcpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtY29udGVudFwiPlxuICAgICAgICA8aDU+e3RoaXMucHJvcHMudGl0bGV9PC9oNT5cbiAgICAgICAge3RoaXMucHJvcHMudGFncy5tYXAoKHRhZywga2V5KSA9PiB7XG4gICAgICAgIHJldHVybiA8VGFnIHRhZ0NsaWNrPXt0aGlzLnRhZ0NsaWNrLmJpbmQodGhpcyl9IGtleT17a2V5fSB0YWc9e3RhZ30gLz47XG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgQ2FyZENvbnRlbnQ7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtyZW5kZXJ9IGZyb20gJ3JlYWN0LWRvbSc7XG5cbmNsYXNzIENhdEltYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaW1hZ2VcIj5cbiAgICAgICAgPGltZyBjbGFzc05hbWU9XCJtYXRlcmlhbGJveGVkXCIgc3JjPXt0aGlzLnByb3BzLnNyY30gLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IENhdEltYWdlO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7cmVuZGVyfSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IENhdEltYWdlIGZyb20gJy4vQ2F0SW1hZ2UnO1xuaW1wb3J0IENhcmRDb250ZW50IGZyb20gJy4vQ2FyZENvbnRlbnQnO1xuaW1wb3J0IENhcmRBY3Rpb24gZnJvbSAnLi9DYXJkQWN0aW9uJztcblxuY2xhc3MgUmVzdWx0Q2FyZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBsZXQgY2F0ID0gdGhpcy5wcm9wcy5jYXQ7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgczMgbTQgczEyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBob3ZlcmFibGVcIj5cbiAgICAgICAgICA8Q2F0SW1hZ2Ugc3JjPXtjYXQudXJsfSAvPlxuICAgICAgICAgIDxDYXJkQ29udGVudCBzZWFyY2hCeVRhZz17dGhpcy5wcm9wcy5zZWFyY2hCeVRhZ30gdGl0bGU9e2NhdC50aXRsZX0gdGFncz17Y2F0LnRhZ3N9IC8+XG4gICAgICAgICAgPENhcmRBY3Rpb24gdXJsPXtjYXQudXJsfSBsaWtlcz17Y2F0Lmxpa2VzfSBpZD17Y2F0LmlkfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IFJlc3VsdENhcmQ7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtyZW5kZXJ9IGZyb20gJ3JlYWN0LWRvbSc7XG5cbmNsYXNzIFRhZyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGdldFZhbHVlKCl7XG4gIHRoaXMucHJvcHMudGFnQ2xpY2sodGhpcy5wcm9wcy50YWcpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgICAgPHNwYW4gb25DbGljaz17dGhpcy5nZXRWYWx1ZS5iaW5kKHRoaXMpfVxuICAgICAgICAgIGNsYXNzTmFtZT1cImNoaXAgYmx1ZSBkYXJrZW4tM1wiID57dGhpcy5wcm9wcy50YWd9PC9zcGFuPlxuICAgICk7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IFRhZztcbiIsImV4cG9ydCBsZXQgY2F0cyA9IHtcImNhdHNcIjpbXG4gIHtcbiAgICBcImlkXCI6IFwiQ2FtcGVyQ2F0XCIsXG4gICAgXCJsaWtlc1wiOiAzLFxuICAgIFwidGFnc1wiOiBbXCJDb2RpbmdcIixcIkd1cnVcIixcIk5pbmphXCJdLFxuICAgIFwidGl0bGVcIjogXCJDYW1wZXIgQ2F0XCIsXG4gICAgXCJ1cmxcIjogXCJodHRwczovL21lZGlhLmdpcGh5LmNvbS9tZWRpYS9vMHZ3enVGd0NHQUZPL2dpcGh5LmdpZlwiXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IFwiQ2F0LWluLWEtaGF0XCIsXG4gICAgXCJsaWtlc1wiOiA3LFxuICAgIFwidGFnc1wiOiBbXCJDdXRlXCIsIFwiSGF0XCIsIFwiU3RhbmRpbmdcIl0sXG4gICAgXCJ0aXRsZVwiOiBcIkNhdC1pbi1hLWhhdFwiLFxuICAgIFwidXJsXCI6IFwiaHR0cHM6Ly9zLW1lZGlhLWNhY2hlLWFrMC5waW5pbWcuY29tLzU2NHgvMjcvZGYvY2MvMjdkZmNjMTdhOGNlZmU1NmM5OTI3N2Q2M2JlMGQ4MTUuanBnXCJcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogXCJGbHVmZkJhbGxcIixcbiAgICBcImxpa2VzXCI6IDIsXG4gICAgXCJ0YWdzXCI6W1wiRmx1ZmZ5XCIsIFwiTm8tbGVnc1wiLCBcIkJhbGxcIiwgXCJGbHlpbmdcIl0sXG4gICAgXCJ0aXRsZVwiOiBcIkZsdWZmIEJhbGxcIixcbiAgICBcInVybFwiOiBcImh0dHA6Ly93d3cudG9wMTMubmV0L3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE1LzEwL3BlcmZlY3RseS10aW1lZC1mdW5ueS1jYXQtcGljdHVyZXMtNS5qcGdcIlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiBcIkdydW1weUNhdFwiLFxuICAgIFwibGlrZXNcIjogNCxcbiAgICBcInRhZ3NcIjogW1wiR3J1bXB5XCIsIFwiRnVubnlcIiwgXCJGYW1vdXNcIl0sXG4gICAgXCJ0aXRsZVwiOiBcIkdydW1weSBDYXRcIixcbiAgICBcInVybFwiOiBcImh0dHA6Ly9pLmRhaWx5bWFpbC5jby51ay9pL3BpeC8yMDE0LzA4LzA1LzE0MDcyMjU5MzIwOTFfd3BzXzZfU0FOVEFfTU9OSUNBX0NBX0FVR1VTVF8wNC5qcGdcIlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiBcIkhhcHB5Q2F0XCIsXG4gICAgXCJsaWtlc1wiOiA5LFxuICAgIFwidGFnc1wiOiBbXCJIYXBweVwiLCBcIldpbmtpbmdcIiwgXCJTbWlsaW5nXCJdLFxuICAgIFwidGl0bGVcIjogXCJIYXBweSBDYXRcIixcbiAgICBcInVybFwiOiBcImh0dHBzOi8vcGJzLnR3aW1nLmNvbS9wcm9maWxlX2ltYWdlcy8yMTY3MDM1ODk2LzEyM2NhdF80MDB4NDAwLmpwZ1wiXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IFwiTGF1Z2hpbmdDYXRcIixcbiAgICBcImxpa2VzXCI6IDI3LFxuICAgIFwidGFnc1wiOiBbXCJsYXVnaGluZ1wiLCBcIkZ1bm55XCIsIFwiU25pY2tlclwiXSxcbiAgICBcInRpdGxlXCI6IFwiTGF1Z2hpbmcgQ2F0XCIsXG4gICAgXCJ1cmxcIjogXCJodHRwOi8vYmxvZy5uZWtvZmxpZXMuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE0LzAxL2Z1bm55LWNhdC5qcGdcIlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiBcIlNjYXJlZHlDYXRcIixcbiAgICBcImxpa2VzXCI6IDE4LFxuICAgIFwidGFnc1wiOiBbXCJIaWRpbmdcIiwgXCJDdXRlXCIsIFwiU2NhcmVkXCJdLFxuICAgIFwidGl0bGVcIjogXCJTY2FyZWR5IENhdCBcIixcbiAgICBcInVybFwiOiBcImh0dHBzOi8vaS55dGltZy5jb20vdmkvTUc4S0FEaVJiT1UvbWF4cmVzZGVmYXVsdC5qcGdcIlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiBcIlNob2NrZWRDYXRcIixcbiAgICBcImxpa2VzXCI6IDExLFxuICAgIFwidGFnc1wiOiBbXCJXaGF0IGlzIFRIQVQhP1wiLCBcIlNob2NrZWRcIiwgXCJGdW5ueVwiXSxcbiAgICBcInRpdGxlXCI6IFwiU2hvY2tlZCBDYXRcIixcbiAgICBcInVybFwiOiBcImh0dHBzOi8vaS55dGltZy5jb20vdmkvaWNxRHhOYWIzRG8vbWF4cmVzZGVmYXVsdC5qcGdcIlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiBcIlNsZWVwaW5nQ2F0XCIsXG4gICAgXCJsaWtlc1wiOiAyLFxuICAgIFwidGFnc1wiOiBbXCJTbGVlcGluZ1wiLCBcIkN1dGVcIiwgXCJLaXR0ZW5cIl0sXG4gICAgXCJ0aXRsZVwiOiBcIlNsZWVwaW5nIENhdFwiLFxuICAgIFwidXJsXCI6IFwiaHR0cDovL3d3dy5hY3V0ZWFkYXkuY29tL2Jsb2cvd3AtY29udGVudC91cGxvYWRzLzIwMTIvMDkvc2xlZXBpbmcta2l0dHktY2F0LmpwZ1wiXG4gIH1cbl19O1xuIl19
