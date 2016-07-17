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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvYXBwLmpzIiwiYXBwL2NvbXBvbmVudHMvRm9vdGVyLmpzIiwiYXBwL2NvbXBvbmVudHMvTW9kYWwuanMiLCJhcHAvY29tcG9uZW50cy9OYXZiYXIuanMiLCJhcHAvY29tcG9uZW50cy9SZXN1bHRzLmpzIiwiYXBwL2NvbXBvbmVudHMvUmVzdWx0cy9DYXJkQWN0aW9uLmpzIiwiYXBwL2NvbXBvbmVudHMvUmVzdWx0cy9DYXJkQ29udGVudC5qcyIsImFwcC9jb21wb25lbnRzL1Jlc3VsdHMvQ2F0SW1hZ2UuanMiLCJhcHAvY29tcG9uZW50cy9SZXN1bHRzL1Jlc3VsdENhcmQuanMiLCJhcHAvY29tcG9uZW50cy9SZXN1bHRzL1RhZy5qcyIsImFwcC9jb21wb25lbnRzL2NhdHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0FDQUE7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRU0sRzs7O0FBQ0osaUJBQWE7QUFBQTs7QUFFWDs7QUFGVzs7QUFHWCxRQUFJLFFBQVEsTUFBTSxHQUFOLENBQVUsTUFBVixDQUFaO0FBQUEsUUFDSSxnQkFESjtBQUVBLFFBQUksS0FBSixFQUFXO0FBQ1QsZ0JBQVUsS0FBVjtBQUNELEtBRkQsTUFFTztBQUNMO0FBQ0EsaUJBQUssSUFBTCxDQUFVLE9BQVYsQ0FBa0IsVUFBUyxNQUFULEVBQWdCO0FBQ2hDLGNBQU0sSUFBTixDQUFXLE1BQVgsRUFBbUIsTUFBbkI7QUFDQSxrQkFBVSxNQUFNLEdBQU4sQ0FBVSxNQUFWLENBQVY7QUFDRCxPQUhEO0FBSUQ7QUFDRCxVQUFLLEtBQUwsR0FBYTtBQUNYLFlBQU0sT0FESztBQUVYLGNBQVE7QUFGRyxLQUFiO0FBZFc7QUFrQlo7Ozs7OEJBQ1MsSSxFQUFNO0FBQ2QsWUFBTSxLQUFOO0FBQ0EsV0FBSyxPQUFMLENBQWEsVUFBUyxR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QXBCLENBSFY7QUFJRSxhQUFTLFlBSlg7QUFLRSxXQUFPO0FBTFQsR0F0QndCLEVBNkJ4QjtBQUNFLFVBQU0sVUFEUjtBQUVFLGFBQVMsQ0FGWDtBQUdFLFlBQVEsQ0FBQyxPQUFELEVBQVUsU0FBVixFQUFxQixTQUFyQixDQUhWO0FBSUUsYUFBUyxXQUpYO0FBS0UsV0FBTztBQUxULEdBN0J3QixFQW9DeEI7QUFDRSxVQUFNLGFBRFI7QUFFRSxhQUFTLEVBRlg7QUFHRSxZQUFRLENBQUMsVUFBRCxFQUFhLE9BQWIsRUFBc0IsU0FBdEIsQ0FIVjtBQUlFLGFBQVMsY0FKWDtBQUtFLFdBQU87QUFMVCxHQXBDd0IsRUEyQ3hCO0FBQ0UsVUFBTSxZQURSO0FBRUUsYUFBUyxFQUZYO0FBR0UsWUFBUSxDQUFDLFFBQUQsRUFBVyxNQUFYLEVBQW1CLFFBQW5CLENBSFY7QUFJRSxhQUFTLGNBSlg7QUFLRSxXQUFPO0FBTFQsR0EzQ3dCLEVBa0R4QjtBQUNFLFVBQU0sWUFEUjtBQUVFLGFBQVMsRUFGWDtBQUdFLFlBQVEsQ0FBQyxnQkFBRCxFQUFtQixTQUFuQixFQUE4QixPQUE5QixDQUhWO0FBSUUsYUFBUyxhQUpYO0FBS0UsV0FBTztBQUxULEdBbER3QixFQXlEeEI7QUFDRSxVQUFNLGFBRFI7QUFFRSxhQUFTLENBRlg7QUFHRSxZQUFRLENBQUMsVUFBRCxFQUFhLE1BQWIsRUFBcUIsUUFBckIsQ0FIVjtBQUlFLGFBQVMsY0FKWDtBQUtFLFdBQU87QUFMVCxHQXpEd0IsQ0FBUixFQUFYIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge3JlbmRlcn0gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7Y2F0c30gZnJvbSAnLi9jb21wb25lbnRzL2NhdHMnO1xuaW1wb3J0IE5hdmJhciBmcm9tICcuL2NvbXBvbmVudHMvTmF2YmFyJztcbmltcG9ydCBNb2RhbCBmcm9tICcuL2NvbXBvbmVudHMvTW9kYWwnO1xuaW1wb3J0IFJlc3VsdHMgZnJvbSAnLi9jb21wb25lbnRzL1Jlc3VsdHMnO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuL2NvbXBvbmVudHMvRm9vdGVyJztcblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKXtcbiAgICBzdXBlcigpO1xuICAgIC8vIHJldHJpZXZlIGNhdHMgZnJvbSBsb2NhbCBzdG9yYWdlXG4gICAgbGV0IGxvY2FsID0gTG9ja3IuZ2V0KCdjYXRzJyksXG4gICAgICAgIGFsbENhdHM7XG4gICAgaWYgKGxvY2FsICl7XG4gICAgICBhbGxDYXRzID0gbG9jYWw7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGlmIG5vdCBjYXRzIGluIGxvY2FsIHN0b3JhZ2UsIHB1dCB0aGVtIHRoZXJlXG4gICAgICBjYXRzLmNhdHMuZm9yRWFjaChmdW5jdGlvbihvdXJDYXQpe1xuICAgICAgICBMb2Nrci5zYWRkKCdjYXRzJywgb3VyQ2F0KTtcbiAgICAgICAgYWxsQ2F0cyA9IExvY2tyLmdldCgnY2F0cycpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBjYXRzOiBhbGxDYXRzLFxuICAgICAgc2VhcmNoOiAnJ1xuICAgIH07XG4gIH1cbiAgc3RvcmVDYXRzKGNhdHMpIHtcbiAgICBMb2Nrci5mbHVzaCgpO1xuICAgIGNhdHMuZm9yRWFjaChmdW5jdGlvbihsb2NhbENhdCkge1xuICAgICAgTG9ja3Iuc2FkZCgnY2F0cycsIGxvY2FsQ2F0KTtcbiAgICB9KTtcbiAgfVxuICBhZGRVc2VyQ2F0KG5ld0NhdCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe2NhdHM6IG5ld0NhdC5jb25jYXQodGhpcy5zdGF0ZS5jYXRzKX0pO1xuICB9XG4gIC8vIEV2ZXJ5IHRpbWUgdGhpcy5zdGF0ZS5jYXRzIGNoYW5nZXMsIHVwZGF0ZSBsb2NhbCBzdG9yYWdlXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2U3RhdGU9dGhpcy5zdGF0ZS5jYXRzKSB7XG4gICAgdGhpcy5zdG9yZUNhdHModGhpcy5zdGF0ZS5jYXRzKTtcbiAgfVxuICB1cGRhdGVTZWFyY2gobmV3U2VhcmNoKSB7XG4gICAgbmV3U2VhcmNoLnRvTG93ZXJDYXNlKCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7c2VhcmNoOiBuZXdTZWFyY2h9KTtcbiAgfVxuICBjbGVhclNlYXJjaCgpe1xuICAgIHRoaXMuc2V0U3RhdGUoe3NlYXJjaDogXCJcIn0pO1xuICB9XG4gIHJlbmRlcigpe1xuICAgIHJldHVybihcbiAgICAgIDxkaXY+XG4gICAgICAgIDxOYXZiYXIgY2xlYXJTZWFyY2g9e3RoaXMuY2xlYXJTZWFyY2guYmluZCh0aGlzKX0gLz5cbiAgICAgICAgPE1vZGFsXG4gICAgICAgICAgYWRkVXNlckNhdD17dGhpcy5hZGRVc2VyQ2F0LmJpbmQodGhpcyl9XG4gICAgICAgICAgY2F0cz17dGhpcy5zdGF0ZS5jYXRzfVxuICAgICAgICAgIC8+XG4gICAgICAgIDxSZXN1bHRzXG4gICAgICAgICAgY2xlYXJTZWFyY2g9e3RoaXMuY2xlYXJTZWFyY2guYmluZCh0aGlzKX1cbiAgICAgICAgICB1cGRhdGVTZWFyY2g9e3RoaXMudXBkYXRlU2VhcmNoLmJpbmQodGhpcyl9XG4gICAgICAgICAgc2VhcmNoPXt0aGlzLnN0YXRlLnNlYXJjaH1cbiAgICAgICAgICBjYXRzPXt0aGlzLnN0YXRlLmNhdHN9XG4gICAgICAgICAgLz5cbiAgICAgICAgPEZvb3RlciAvPlxuICAgICAgPC9kaXY+XG4gICk7XG4gIH1cbn1cblxucmVuZGVyKDxBcHAgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtyZW5kZXJ9IGZyb20gJ3JlYWN0LWRvbSc7XG5cbmNsYXNzIEZvb3RlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8Zm9vdGVyIGNsYXNzTmFtZT1cInBhZ2UtZm9vdGVyIGJsdWUgZGFya2VuLTJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIndoaXRlLXRleHRcIj5DYXRQaG90b0FwcDwvaDU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImdyZXktdGV4dCB0ZXh0LWxpZ2h0ZW4tNFwiPkNhdFBob3RvQXBwIGhhcyBiZWVuIGNyZWF0ZWQgdG8gZm9ybSBwYXJ0IG9mIHRoZSA8YSBocmVmPVwiaHR0cHM6Ly9mcmVlY29kZWNhbXAuY29tXCIgdGFyZ2V0PVwiX2JsYW5rXCI+RnJlZSBDb2RlIENhbXA8L2E+IGN1cnJpY3VsdW0uPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXItY29weXJpZ2h0XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgIMKpIDIwMTYgQ2F0UGhvdG9BcHBcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImdyZXktdGV4dCB0ZXh0LWxpZ2h0ZW4tNCByaWdodFwiIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vYXRqb25hdGhhbi9jYXRwaG90b2FwcC9cIj5HaXRIdWI8L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9mb290ZXI+XG4gICAgKTtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge3JlbmRlcn0gZnJvbSAncmVhY3QtZG9tJztcblxuY2xhc3MgTW9kYWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcigpe1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zdGF0ZSA9e1xuICAgICAgdmFsaWRUaXRsZTogXCJ2YWxpZGF0ZVwiLFxuICAgICAgY2F0SWQ6IFwiTm90VXBkYXRlZFwiXG4gICAgfTtcbiAgfVxuXG4gIGlzVGl0bGVWYWxpZCgpe1xuICAgIGxldCBpZCA9IHRoaXMucmVmcy50aXRsZS52YWx1ZS5yZXBsYWNlKC9cXHMrL2csICcnKSxcbiAgICAgICAgZXhpc3RpbmdJZHMgPSBbXTtcbiAgICB0aGlzLnByb3BzLmNhdHMuZm9yRWFjaCgoY2F0KSA9PntcbiAgICAgIGV4aXN0aW5nSWRzLnB1c2goY2F0LmlkKTtcbiAgICB9KTtcbiAgICBpZihleGlzdGluZ0lkcy5pbmRleE9mKGlkKSA9PT0gLTEpe1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7Y2F0SWQ6IGlkfSk7XG4gICAgICB0aGlzLnNldFN0YXRlKHt2YWxpZFRpdGxlOiBcInZhbGlkYXRlIHZhbGlkXCJ9KTtcbiAgICB9ZWxzZXtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe3ZhbGlkVGl0bGU6IFwidmFsaWRhdGUgaW52YWxpZFwifSk7XG4gICAgfVxuICB9XG51cGxvYWRlZFVzZXJDYXQoZSl7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgbGV0IHRhZ3MgPSB0aGlzLnJlZnMudGFncy52YWx1ZS5zcGxpdCgnLCcpLFxuICAgICAgY2xlYW5UYWdzID0gW10sXG4gICAgICBmb3JtYXRUYWdzID0gdGFncy5mb3JFYWNoKGZ1bmN0aW9uKHRhZyl7XG4gICAgICAgIGNsZWFuVGFncy5wdXNoKHRhZy50cmltKCkpO1xuICAgICAgfSk7XG4gICAgICBmb3IodmFyIGEgPSAwOyBhPGNsZWFuVGFncy5sZW5ndGg7IGErKyl7XG4gICAgICAgIGlmKGNsZWFuVGFnc1thXSA9PT0gXCJcIiB8fFxuICAgICAgICAoY2xlYW5UYWdzW2FdLm1hdGNoKC9cXHMqLykgJiZcbiAgICAgICAgIWNsZWFuVGFnc1thXS5tYXRjaCgvW1xcd1xcLlxcXFwsXFwvXFwjXFwhXFw/XFzCozxcXD5cXCRcXCVcXF5cXCZcXCpcXDtcXDpcXHtcXH1cXD1cXC1cXF9cXGBcXH5cXChcXCldL2kpKSl7XG4gICAgICAgICAgY2xlYW5UYWdzLnNwbGljZShhLCAxKTtcbiAgICAgICAgICBhPTA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgbGV0IHVybCA9IHRoaXMucmVmcy51cmwudmFsdWUsXG4gICAgICBjbGVhblVybDtcbiAgaWYodXJsLm1hdGNoKC8oanBnfHBuZ3xnaWYpJC9pKSl7XG4gICAgY2xlYW5VcmwgPSB1cmw7XG4gIH1lbHNle1xuICAgIGNsZWFuVXJsID0gXCJwdWJsaWMvaW1nL3JlcGxhY2VtZW50Q2F0LmpwZ1wiO1xuICB9XG4gIGxldCBuZXdDYXQgPVt7XG4gICAgICAgIGlkOiB0aGlzLnN0YXRlLmNhdElkLFxuICAgICAgICB0aXRsZTogdGhpcy5yZWZzLnRpdGxlLnZhbHVlLFxuICAgICAgICB1cmw6IGNsZWFuVXJsLFxuICAgICAgICB0YWdzOiBjbGVhblRhZ3MsXG4gICAgICAgIGxpa2VzOiAxXG4gICAgICAgIH1dO1xuICAgICAgdGhpcy5wcm9wcy5hZGRVc2VyQ2F0KG5ld0NhdCk7XG4gICAgICAvLyBDbGVhciBmb3JtIGZpZWxkc1xuICAgICAgdGhpcy5yZWZzLnRpdGxlLnZhbHVlID0gJyc7XG4gICAgICB0aGlzLnJlZnMudXJsLnZhbHVlID0gJyc7XG4gICAgICB0aGlzLnJlZnMudGFncy52YWx1ZSA9ICcnO1xuICAgIH1cblxuICByZW5kZXIoKXtcbiAgICAgIHJldHVybihcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgIFx0XHQ8ZGl2IGlkPVwiYWRkQ2F0TW9kYWxcIiBjbGFzc05hbWU9XCJtb2RhbFwiPlxuICAgICAgXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50XCI+XG4gICAgICBcdFx0XHRcdDxoND5BZGQgQ2F0IFBob3RvPC9oND5cbiAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMudXBsb2FkZWRVc2VyQ2F0LmJpbmQodGhpcyl9PlxuICAgICAgXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICBcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWZpZWxkIGNvbCBzMTJcIj5cbiAgICAgIFx0XHRcdFx0XHRcdFx0PGlucHV0IGNsYXNzTmFtZT17dGhpcy5zdGF0ZS52YWxpZFRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmlzVGl0bGVWYWxpZC5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgVGl0bGVcIiByZWY9XCJ0aXRsZVwiIGlkPVwidGl0bGVcIiB0eXBlPVwidGV4dFwiIHJlcXVpcmVkIC8+XG4gICAgICBcdFx0XHRcdFx0XHRcdDxsYWJlbCBodG1sRm9yPVwidGl0bGVcIiBkYXRhLWVycm9yPVwiQ2F0IHRpdGxlIGhhcyBiZWVuIHRha2VuXCIgZGF0YS1zdWNjZXNzPVwiQ2F0IHRpdGxlIGlzIGZyZWUgdG8gdXNlXCI+VGl0bGU8L2xhYmVsPlxuICAgICAgXHRcdFx0XHRcdFx0PC9kaXY+XG4gICAgICBcdFx0XHRcdFx0PC9kaXY+XG4gICAgICBcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgIFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZmllbGQgY29sIHMxMlwiPlxuICAgICAgXHRcdFx0XHRcdFx0XHQ8aW5wdXQgcGxhY2Vob2xkZXI9XCJFbnRlciBVUkxcIiByZWY9XCJ1cmxcIiBpZD1cInVybFwiIHR5cGU9XCJ1cmxcIiBjbGFzc05hbWU9XCJ2YWxpZGF0ZVwiIHJlcXVpcmVkIC8+XG4gICAgICBcdFx0XHRcdFx0XHRcdDxsYWJlbCBodG1sRm9yPVwidXJsXCIgZGF0YS1lcnJvcj1cIlBsZWFzZSB1cGxvYWQgYSBHSUYsIFBORyBvciBKUEdcIiBkYXRhLXN1Y2Nlc3M9XCJUaGF0cyBhIFVSTCBmb3Igc3VyZSEgSSBob3BlIGl0IGVuZHMgaW4gR0lGLCBQTkcgb3IgSlBHLi4uXCI+Q2F0IFBob3RvIFVSTDwvbGFiZWw+XG4gICAgICBcdFx0XHRcdFx0XHQ8L2Rpdj5cbiAgICAgIFx0XHRcdFx0XHQ8L2Rpdj5cbiAgICAgIFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbnB1dC1maWVsZCBjb2wgczZcIj5cbiAgICAgIFx0XHRcdFx0XHRcdFx0PGlucHV0IHBsYWNlaG9sZGVyPVwiU2VwYXJhdGUgdGFncyB3aXRoIGEgY29tbWFcIiByZWY9XCJ0YWdzXCIgaWQ9XCJ0YWdzXCIgdHlwZT1cInRleHRcIiByZXF1aXJlZCAvPlxuICAgICAgXHRcdFx0XHRcdFx0XHQ8bGFiZWwgaHRtbEZvcj1cInRhZ3NcIj5UYWdzPC9sYWJlbD5cbiAgICAgIFx0XHRcdFx0XHRcdDwvZGl2PlxuICAgICAgXHRcdFx0XHRcdDwvZGl2PlxuICAgICAgXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICBcdFx0XHRcdFx0XHQ8YnV0dG9uIGlkPVwic3VibWl0LWJ0blwiIGNsYXNzTmFtZT1cImJ0biB3YXZlcy1lZmZlY3Qgd2F2ZXMtYmx1ZSBibHVlIGRhcmtlbi0xIHN1Ym1pdFwiIHR5cGU9XCJzdWJtaXRcIiBuYW1lPVwiYWN0aW9uXCI+XG4gICAgICBcdFx0XHRcdFx0XHRcdDxpIGNsYXNzTmFtZT1cImZhIGZhLXNlbmRcIj48L2k+XG4gICAgICBcdFx0XHRcdFx0XHRcdCZuYnNwO1N1Ym1pdFxuICAgICAgXHRcdFx0XHRcdFx0PC9idXR0b24+XG4gICAgICBcdFx0XHRcdFx0PC9kaXY+XG4gICAgICBcdFx0XHRcdDwvZm9ybT5cbiAgICAgIFx0XHRcdDwvZGl2PlxuICAgICAgXHRcdDwvZGl2PlxuICAgICAgXHQ8L2Rpdj5cbiAgICAgICk7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IE1vZGFsO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7cmVuZGVyfSBmcm9tICdyZWFjdC1kb20nO1xuXG5jbGFzcyBOYXZiYXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKXtcbiAgICAgIHJldHVybihcbiAgICAgIDxuYXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2LXdyYXBwZXIgYmx1ZSBkYXJrZW4tMlwiPlxuICAgICAgICAgIDxhIGhyZWY9XCIjXCIgb25DbGljaz17dGhpcy5wcm9wcy5jbGVhclNlYXJjaH0gY2xhc3NOYW1lPVwiYnJhbmQtbG9nb1wiPiZuYnNwOyZuYnNwOyZuYnNwO0NhdFBob3RvQXBwPC9hPlxuICAgICAgICAgIDxhIGhyZWY9XCIjXCIgZGF0YS1hY3RpdmF0ZXM9XCJtb2JpbGVcIiBjbGFzc05hbWU9XCJidXR0b24tY29sbGFwc2VcIj48aSBjbGFzc05hbWU9XCJmYSBmYS1iYXJzXCI+PC9pPjwvYT5cbiAgICAgICAgICA8dWwgaWQ9XCJuYXYtbW9iaWxlXCIgY2xhc3NOYW1lPVwicmlnaHQgaGlkZS1vbi1tZWQtYW5kLWRvd25cIj5cbiAgICAgICAgICAgIDxsaT48YSBjbGFzc05hbWU9XCJtb2RhbC10cmlnZ2VyXCIgaHJlZj1cIiNhZGRDYXRNb2RhbFwiPkFkZCBDYXQgUGhvdG88L2E+PC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzaWRlLW5hdlwiIGlkPVwibW9iaWxlXCI+XG5cbiAgICAgICAgICAgIDxsaT48YSBjbGFzc05hbWU9XCJtb2RhbC10cmlnZ2VyXCIgaHJlZj1cIiNhZGRDYXRNb2RhbFwiPkFkZCBDYXQgUGhvdG88L2E+PC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbmF2PlxuXG5cbiAgICApO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtyZW5kZXJ9IGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgUmVzdWx0Q2FyZCBmcm9tICcuL1Jlc3VsdHMvUmVzdWx0Q2FyZCc7XG5cbmNsYXNzIFJlc3VsdHMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcigpe1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGFuaW1hdGVDbGFzczogXCJcIlxuICAgIH07XG4gIH1cbiAgc2VhcmNoQnlJbnB1dCgpe1xuICAgIHRoaXMucHJvcHMudXBkYXRlU2VhcmNoKHRoaXMucmVmcy5zZWFyY2gudmFsdWUudG9Mb3dlckNhc2UoKSk7XG4gICAgaWYodGhpcy5wcm9wcy5zZWFyY2gubGVuZ3RoID4gMSl7XG4gICAgdGhpcy5zZXRTdGF0ZSh7YW5pbWF0ZUNsYXNzOiBcImFuaW1hdGVcIn0pO1xuICAgIH1cbiAgfVxuICBzZWFyY2hCeVRhZyh0YWcpe1xuICAgIHRoaXMucHJvcHMudXBkYXRlU2VhcmNoKHRhZy50b0xvd2VyQ2FzZSgpKTtcbiAgICB0aGlzLnNldFN0YXRlKHthbmltYXRlQ2xhc3M6IFwiYW5pbWF0ZVwifSk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIGxldCBwcmVGaWx0ZXJlZENhdHMgPSB0aGlzLnByb3BzLmNhdHMuZmlsdGVyKChjYXQpID0+IHtcbiAgICBsZXQgbG93ZXJUYWdzID0gW10sXG4gICAgICAgIGZvcm1hdFRhZ3MgPSBjYXQudGFncy5mb3JFYWNoKGZ1bmN0aW9uKHRhZyl7XG4gICAgICAgICAgbG93ZXJUYWdzLnB1c2godGFnLnRvTG93ZXJDYXNlKCkpO1xuICAgICAgICB9KTtcbiAgICAgIHJldHVybiBsb3dlclRhZ3MuaW5jbHVkZXModGhpcy5wcm9wcy5zZWFyY2gpO1xuICAgIH0pO1xuICAgIGxldCBmaWx0ZXJlZENhdHM7XG5cbiAgICBpZihwcmVGaWx0ZXJlZENhdHMubGVuZ3RoID09PSAwKXtcbiAgICAgIGZpbHRlcmVkQ2F0cyA9IHRoaXMucHJvcHMuY2F0cztcbiAgICB9ZWxzZXtcbiAgICAgIGZpbHRlcmVkQ2F0cyA9IHByZUZpbHRlcmVkQ2F0cztcbiAgICB9XG4gICAgcmV0dXJuKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWZpZWxkIGNvbCBzMTJcIj5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcImNsZWFyLWljb24gcHJlZml4IFwiICsgKHRoaXMuc3RhdGUuYW5pbWF0ZUNsYXNzKX1cbiAgICAgICAgICAgICAgc3JjPVwicHVibGljL2ltZy9pY29ucy9pY19sb3VwZV9ibGFja18yNHB4LnN2Z1wiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMucHJvcHMuY2xlYXJTZWFyY2h9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCBmb3IgY2F0IHRhZ3MgaGVyZSwgb3IgY2xpY2sgb24gYSBjYXQgdGFnLi4uXCJcbiAgICAgICAgICAgICAgcmVmPVwic2VhcmNoXCJcbiAgICAgICAgICAgICAgaWQ9XCJzZWFyY2hCYXJcIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5zZWFyY2hCeUlucHV0LmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnByb3BzLnNlYXJjaH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVzdWx0c1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICB7ZmlsdGVyZWRDYXRzLm1hcCgoY2F0KSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiA8UmVzdWx0Q2FyZFxuICAgICAgICAgICAgICAgICAgICAgIHNlYXJjaEJ5VGFnPXt0aGlzLnNlYXJjaEJ5VGFnLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAga2V5PXtjYXQuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgY2F0PXtjYXR9XG4gICAgICAgICAgICAgICAgICAgICAgLz47XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9Ly9cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVzdWx0cztcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge3JlbmRlcn0gZnJvbSAncmVhY3QtZG9tJztcblxuY2xhc3MgQ2FyZEFjdGlvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpZDogcHJvcHMuaWQsXG4gICAgICBsaWtlczogcHJvcHMubGlrZXNcbiAgICB9O1xuICAgIHRoaXMuaGFuZGxlQ2xpY2sgPSB0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcyk7XG4gIH1cblxuICBoYW5kbGVDbGljaygpIHtcbiAgICBsZXQgY2F0SWQgPSB0aGlzLnN0YXRlLmlkLFxuICAgICAgICBsb2NhbENhdHMgPSBMb2Nrci5nZXQoJ2NhdHMnKSxcbiAgICAgICAgaW5kZXg7XG4gICAgLy8gdXBkYXRlIGxpa2UgYnV0dG9uIGxpa2VzXG4gICAgdGhpcy5zZXRTdGF0ZSh7bGlrZXM6IHRoaXMuc3RhdGUubGlrZXMgKyAxfSk7XG4gICAgLy8gRmluZCBjYXQgaXMgbG9jYWwgc3RvcmFnZSBhbmQgaW5jcmVtZW50IGxpa2VzXG4gICAgaW5kZXggPSBsb2NhbENhdHMuZmluZEluZGV4KHggPT4geC5pZCA9PT0gY2F0SWQpO1xuICAgIGxvY2FsQ2F0c1tpbmRleF0ubGlrZXMgPSB0aGlzLnN0YXRlLmxpa2VzICsgMTtcbiAgICAvLyBlbXB0eSBhbmQgdXBkYXRlIGxvY2FsIHN0b3JhZ2VcbiAgICBMb2Nrci5mbHVzaCgpO1xuICAgIGxvY2FsQ2F0cy5mb3JFYWNoKGZ1bmN0aW9uKGxvY2FsQ2F0KXtcbiAgICAgIExvY2tyLnNhZGQoJ2NhdHMnLCBsb2NhbENhdCk7XG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1hY3Rpb25cIj5cbiAgICAgICAgPGEgY2xhc3NOYW1lPVwid2F2ZXMtZWZmZWN0IHdhdmVzLWxpZ2h0IHdhdmVzLXJlZCByZWQgZGFya2VuLTMgYnRuXCIgaHJlZj17dGhpcy5wcm9wcy51cmx9IGRvd25sb2FkPXt0aGlzLnByb3BzLnVybH0+XG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtZG93bmxvYWRcIj48L2k+XG4gICAgICAgIDwvYT5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ3YXZlcy1lZmZlY3Qgd2F2ZXMtbGlnaHQgd2F2ZXMtYmx1ZSBibHVlIGRhcmtlbi0zIGJ0blwiXG4gICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDbGlja30+XG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtdGh1bWJzLXVwXCI+PC9pPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxpa2VzX251bWJlclwiPiB7dGhpcy5zdGF0ZS5saWtlc308L3NwYW4+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgQ2FyZEFjdGlvbjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge3JlbmRlcn0gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBUYWcgZnJvbSAnLi9UYWcnO1xuXG5jbGFzcyBDYXJkQ29udGVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHRhZ0NsaWNrKHRhZyl7XG4gICAgdGhpcy5wcm9wcy5zZWFyY2hCeVRhZyh0YWcpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtY29udGVudFwiPlxuICAgICAgICA8aDU+e3RoaXMucHJvcHMudGl0bGV9PC9oNT5cbiAgICAgICAge3RoaXMucHJvcHMudGFncy5tYXAoKHRhZywga2V5KSA9PiB7XG4gICAgICAgIHJldHVybiA8VGFnIHRhZ0NsaWNrPXt0aGlzLnRhZ0NsaWNrLmJpbmQodGhpcyl9IGtleT17a2V5fSB0YWc9e3RhZ30gLz47XG4gICAgICAgIH0pfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgQ2FyZENvbnRlbnQ7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtyZW5kZXJ9IGZyb20gJ3JlYWN0LWRvbSc7XG5cbmNsYXNzIENhdEltYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaW1hZ2VcIj5cbiAgICAgICAgPGltZyBjbGFzc05hbWU9XCJtYXRlcmlhbGJveGVkXCIgc3JjPXt0aGlzLnByb3BzLnNyY30gLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IENhdEltYWdlO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7cmVuZGVyfSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IENhdEltYWdlIGZyb20gJy4vQ2F0SW1hZ2UnO1xuaW1wb3J0IENhcmRDb250ZW50IGZyb20gJy4vQ2FyZENvbnRlbnQnO1xuaW1wb3J0IENhcmRBY3Rpb24gZnJvbSAnLi9DYXJkQWN0aW9uJztcblxuY2xhc3MgUmVzdWx0Q2FyZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBsZXQgY2F0ID0gdGhpcy5wcm9wcy5jYXQ7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgczMgbTQgczEyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBob3ZlcmFibGVcIj5cbiAgICAgICAgICA8Q2F0SW1hZ2Ugc3JjPXtjYXQudXJsfSAvPlxuICAgICAgICAgIDxDYXJkQ29udGVudCBzZWFyY2hCeVRhZz17dGhpcy5wcm9wcy5zZWFyY2hCeVRhZ30gdGl0bGU9e2NhdC50aXRsZX0gdGFncz17Y2F0LnRhZ3N9IC8+XG4gICAgICAgICAgPENhcmRBY3Rpb24gdXJsPXtjYXQudXJsfSBsaWtlcz17Y2F0Lmxpa2VzfSBpZD17Y2F0LmlkfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IFJlc3VsdENhcmQ7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtyZW5kZXJ9IGZyb20gJ3JlYWN0LWRvbSc7XG5cbmNsYXNzIFRhZyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGdldFZhbHVlKCl7XG4gIHRoaXMucHJvcHMudGFnQ2xpY2sodGhpcy5wcm9wcy50YWcpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgICAgPHNwYW4gb25DbGljaz17dGhpcy5nZXRWYWx1ZS5iaW5kKHRoaXMpfVxuICAgICAgICAgIGNsYXNzTmFtZT1cImNoaXAgYmx1ZSBkYXJrZW4tM1wiID57dGhpcy5wcm9wcy50YWd9PC9zcGFuPlxuICAgICk7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IFRhZztcbiIsImV4cG9ydCBsZXQgY2F0cyA9IHtcImNhdHNcIjpbXG4gIHtcbiAgICBcImlkXCI6IFwiQ2FtcGVyQ2F0XCIsXG4gICAgXCJsaWtlc1wiOiAzLFxuICAgIFwidGFnc1wiOiBbXCJDb2RpbmdcIixcIkd1cnVcIixcIk5pbmphXCJdLFxuICAgIFwidGl0bGVcIjogXCJDYW1wZXIgQ2F0XCIsXG4gICAgXCJ1cmxcIjogXCJodHRwczovL21lZGlhLmdpcGh5LmNvbS9tZWRpYS9vMHZ3enVGd0NHQUZPL2dpcGh5LmdpZlwiXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IFwiQ2F0LWluLWEtaGF0XCIsXG4gICAgXCJsaWtlc1wiOiA3LFxuICAgIFwidGFnc1wiOiBbXCJDdXRlXCIsIFwiSGF0XCIsIFwiU3RhbmRpbmdcIl0sXG4gICAgXCJ0aXRsZVwiOiBcIkNhdC1pbi1hLWhhdFwiLFxuICAgIFwidXJsXCI6IFwiaHR0cHM6Ly9zLW1lZGlhLWNhY2hlLWFrMC5waW5pbWcuY29tLzU2NHgvMjcvZGYvY2MvMjdkZmNjMTdhOGNlZmU1NmM5OTI3N2Q2M2JlMGQ4MTUuanBnXCJcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogXCJGbHVmZkJhbGxcIixcbiAgICBcImxpa2VzXCI6IDIsXG4gICAgXCJ0YWdzXCI6W1wiRmx1ZmZ5XCIsIFwiTm8tbGVnc1wiLCBcIkJhbGxcIiwgXCJGbHlpbmdcIl0sXG4gICAgXCJ0aXRsZVwiOiBcIkZsdWZmIEJhbGxcIixcbiAgICBcInVybFwiOiBcImh0dHA6Ly93d3cudG9wMTMubmV0L3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE1LzEwL3BlcmZlY3RseS10aW1lZC1mdW5ueS1jYXQtcGljdHVyZXMtNS5qcGdcIlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiBcIkdydW1weUNhdFwiLFxuICAgIFwibGlrZXNcIjogNCxcbiAgICBcInRhZ3NcIjogW1wiR3J1bXB5XCIsIFwiRnVubnlcIiwgXCJGYW1vdXNcIl0sXG4gICAgXCJ0aXRsZVwiOiBcIkdydW1weSBDYXRcIixcbiAgICBcInVybFwiOiBcImh0dHA6Ly9pLmRhaWx5bWFpbC5jby51ay9pL3BpeC8yMDE0LzA4LzA1LzE0MDcyMjU5MzIwOTFfd3BzXzZfU0FOVEFfTU9OSUNBX0NBX0FVR1VTVF8wNC5qcGdcIlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiBcIkhhcHB5Q2F0XCIsXG4gICAgXCJsaWtlc1wiOiA5LFxuICAgIFwidGFnc1wiOiBbXCJIYXBweVwiLCBcIldpbmtpbmdcIiwgXCJTbWlsaW5nXCJdLFxuICAgIFwidGl0bGVcIjogXCJIYXBweSBDYXRcIixcbiAgICBcInVybFwiOiBcImh0dHBzOi8vcGJzLnR3aW1nLmNvbS9wcm9maWxlX2ltYWdlcy8yMTY3MDM1ODk2LzEyM2NhdF80MDB4NDAwLmpwZ1wiXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IFwiTGF1Z2hpbmdDYXRcIixcbiAgICBcImxpa2VzXCI6IDI3LFxuICAgIFwidGFnc1wiOiBbXCJsYXVnaGluZ1wiLCBcIkZ1bm55XCIsIFwiU25pY2tlclwiXSxcbiAgICBcInRpdGxlXCI6IFwiTGF1Z2hpbmcgQ2F0XCIsXG4gICAgXCJ1cmxcIjogXCJodHRwOi8vYmxvZy5uZWtvZmxpZXMuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE0LzAxL2Z1bm55LWNhdC5qcGdcIlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiBcIlNjYXJlZHlDYXRcIixcbiAgICBcImxpa2VzXCI6IDE4LFxuICAgIFwidGFnc1wiOiBbXCJIaWRpbmdcIiwgXCJDdXRlXCIsIFwiU2NhcmVkXCJdLFxuICAgIFwidGl0bGVcIjogXCJTY2FyZWR5IENhdCBcIixcbiAgICBcInVybFwiOiBcImh0dHBzOi8vaS55dGltZy5jb20vdmkvTUc4S0FEaVJiT1UvbWF4cmVzZGVmYXVsdC5qcGdcIlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiBcIlNob2NrZWRDYXRcIixcbiAgICBcImxpa2VzXCI6IDExLFxuICAgIFwidGFnc1wiOiBbXCJXaGF0IGlzIFRIQVQhP1wiLCBcIlNob2NrZWRcIiwgXCJGdW5ueVwiXSxcbiAgICBcInRpdGxlXCI6IFwiU2hvY2tlZCBDYXRcIixcbiAgICBcInVybFwiOiBcImh0dHBzOi8vaS55dGltZy5jb20vdmkvaWNxRHhOYWIzRG8vbWF4cmVzZGVmYXVsdC5qcGdcIlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiBcIlNsZWVwaW5nQ2F0XCIsXG4gICAgXCJsaWtlc1wiOiAyLFxuICAgIFwidGFnc1wiOiBbXCJTbGVlcGluZ1wiLCBcIkN1dGVcIiwgXCJLaXR0ZW5cIl0sXG4gICAgXCJ0aXRsZVwiOiBcIlNsZWVwaW5nIENhdFwiLFxuICAgIFwidXJsXCI6IFwiaHR0cDovL3d3dy5hY3V0ZWFkYXkuY29tL2Jsb2cvd3AtY29udGVudC91cGxvYWRzLzIwMTIvMDkvc2xlZXBpbmcta2l0dHktY2F0LmpwZ1wiXG4gIH1cbl19O1xuIl19
