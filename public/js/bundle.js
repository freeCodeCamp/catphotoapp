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
      this.updateSearch('');
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
    key: 'componentDidMount',


    // to initialize the material box for every image
    value: function componentDidMount() {
      $('.materialboxed').materialbox();
    }
  }, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvYXBwLmpzIiwiYXBwL2NvbXBvbmVudHMvRm9vdGVyLmpzIiwiYXBwL2NvbXBvbmVudHMvTW9kYWwuanMiLCJhcHAvY29tcG9uZW50cy9OYXZiYXIuanMiLCJhcHAvY29tcG9uZW50cy9SZXN1bHRzLmpzIiwiYXBwL2NvbXBvbmVudHMvUmVzdWx0cy9DYXJkQWN0aW9uLmpzIiwiYXBwL2NvbXBvbmVudHMvUmVzdWx0cy9DYXJkQ29udGVudC5qcyIsImFwcC9jb21wb25lbnRzL1Jlc3VsdHMvQ2F0SW1hZ2UuanMiLCJhcHAvY29tcG9uZW50cy9SZXN1bHRzL1Jlc3VsdENhcmQuanMiLCJhcHAvY29tcG9uZW50cy9SZXN1bHRzL1RhZy5qcyIsImFwcC9jb21wb25lbnRzL2NhdHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0FDQUE7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRU0sRzs7O0FBQ0osaUJBQWE7QUFBQTs7QUFFWDtBQUZXOztBQUdYLFFBQUksUUFBUSxNQUFNLEdBQU4sQ0FBVSxNQUFWLENBQVo7QUFBQSxRQUNJLGdCQURKO0FBRUEsUUFBSSxLQUFKLEVBQVU7QUFDUixnQkFBVSxLQUFWO0FBQ0QsS0FGRCxNQUVPO0FBQ0w7QUFDQSxpQkFBSyxJQUFMLENBQVUsT0FBVixDQUFrQixVQUFTLE1BQVQsRUFBZ0I7QUFDaEMsY0FBTSxJQUFOLENBQVcsTUFBWCxFQUFtQixNQUFuQjtBQUNBLGtCQUFVLE1BQU0sR0FBTixDQUFVLE1BQVYsQ0FBVjtBQUNELE9BSEQ7QUFJRDtBQUNELFVBQUssS0FBTCxHQUFhO0FBQ1gsWUFBTSxPQURLO0FBRVgsY0FBUTtBQUZHLEtBQWI7QUFkVztBQWtCWjs7Ozs4QkFFUyxJLEVBQU07QUFDZCxZQUFNLEtBQU47QUFDQSxXQUFLLE9BQUwsQ0FBYSxVQUFTLFFB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QUVFLGFBQVMsQ0FGWDtBQUdFLFlBQVEsQ0FBQyxRQUFELEVBQVcsT0FBWCxFQUFvQixRQUFwQixDQUhWO0FBSUUsYUFBUyxZQUpYO0FBS0UsV0FBTztBQUxULEdBdEJ3QixFQTZCeEI7QUFDRSxVQUFNLFVBRFI7QUFFRSxhQUFTLENBRlg7QUFHRSxZQUFRLENBQUMsT0FBRCxFQUFVLFNBQVYsRUFBcUIsU0FBckIsQ0FIVjtBQUlFLGFBQVMsV0FKWDtBQUtFLFdBQU87QUFMVCxHQTdCd0IsRUFvQ3hCO0FBQ0UsVUFBTSxhQURSO0FBRUUsYUFBUyxFQUZYO0FBR0UsWUFBUSxDQUFDLFVBQUQsRUFBYSxPQUFiLEVBQXNCLFNBQXRCLENBSFY7QUFJRSxhQUFTLGNBSlg7QUFLRSxXQUFPO0FBTFQsR0FwQ3dCLEVBMkN4QjtBQUNFLFVBQU0sWUFEUjtBQUVFLGFBQVMsRUFGWDtBQUdFLFlBQVEsQ0FBQyxRQUFELEVBQVcsTUFBWCxFQUFtQixRQUFuQixDQUhWO0FBSUUsYUFBUyxjQUpYO0FBS0UsV0FBTztBQUxULEdBM0N3QixFQWtEeEI7QUFDRSxVQUFNLFlBRFI7QUFFRSxhQUFTLEVBRlg7QUFHRSxZQUFRLENBQUMsZ0JBQUQsRUFBbUIsU0FBbkIsRUFBOEIsT0FBOUIsQ0FIVjtBQUlFLGFBQVMsYUFKWDtBQUtFLFdBQU87QUFMVCxHQWxEd0IsRUF5RHhCO0FBQ0UsVUFBTSxhQURSO0FBRUUsYUFBUyxDQUZYO0FBR0UsWUFBUSxDQUFDLFVBQUQsRUFBYSxNQUFiLEVBQXFCLFFBQXJCLENBSFY7QUFJRSxhQUFTLGNBSlg7QUFLRSxXQUFPO0FBTFQsR0F6RHdCLENBQVIsRUFBWCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtyZW5kZXJ9IGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQge2NhdHN9IGZyb20gJy4vY29tcG9uZW50cy9jYXRzJztcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi9jb21wb25lbnRzL05hdmJhcic7XG5pbXBvcnQgTW9kYWwgZnJvbSAnLi9jb21wb25lbnRzL01vZGFsJztcbmltcG9ydCBSZXN1bHRzIGZyb20gJy4vY29tcG9uZW50cy9SZXN1bHRzJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9jb21wb25lbnRzL0Zvb3Rlcic7XG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCl7XG4gICAgc3VwZXIoKTtcbiAgICAvLyByZXRyaWV2ZSBjYXRzIGZyb20gbG9jYWwgc3RvcmFnZVxuICAgIGxldCBsb2NhbCA9IExvY2tyLmdldCgnY2F0cycpLFxuICAgICAgICBhbGxDYXRzO1xuICAgIGlmIChsb2NhbCl7XG4gICAgICBhbGxDYXRzID0gbG9jYWw7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGlmIG5vdCBjYXRzIGluIGxvY2FsIHN0b3JhZ2UsIHB1dCB0aGVtIHRoZXJlXG4gICAgICBjYXRzLmNhdHMuZm9yRWFjaChmdW5jdGlvbihvdXJDYXQpe1xuICAgICAgICBMb2Nrci5zYWRkKCdjYXRzJywgb3VyQ2F0KTtcbiAgICAgICAgYWxsQ2F0cyA9IExvY2tyLmdldCgnY2F0cycpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBjYXRzOiBhbGxDYXRzLFxuICAgICAgc2VhcmNoOiAnJ1xuICAgIH07XG4gIH1cblxuICBzdG9yZUNhdHMoY2F0cykge1xuICAgIExvY2tyLmZsdXNoKCk7XG4gICAgY2F0cy5mb3JFYWNoKGZ1bmN0aW9uKGxvY2FsQ2F0KSB7XG4gICAgICBMb2Nrci5zYWRkKCdjYXRzJywgbG9jYWxDYXQpO1xuICAgIH0pO1xuICB9XG5cbiAgYWRkVXNlckNhdChuZXdDYXQpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtjYXRzOiBuZXdDYXQuY29uY2F0KHRoaXMuc3RhdGUuY2F0cyl9KTtcbiAgfVxuXG4gIC8vIEV2ZXJ5IHRpbWUgdGhpcy5zdGF0ZS5jYXRzIGNoYW5nZXMsIHVwZGF0ZSBsb2NhbCBzdG9yYWdlXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2U3RhdGU9dGhpcy5zdGF0ZS5jYXRzKSB7XG4gICAgdGhpcy5zdG9yZUNhdHModGhpcy5zdGF0ZS5jYXRzKTtcbiAgfVxuXG4gIHVwZGF0ZVNlYXJjaChuZXdTZWFyY2gpIHtcbiAgICBuZXdTZWFyY2gudG9Mb3dlckNhc2UoKTtcbiAgICB0aGlzLnNldFN0YXRlKHtzZWFyY2g6IG5ld1NlYXJjaH0pO1xuICB9XG5cbiAgY2xlYXJTZWFyY2goKXtcbiAgICB0aGlzLnVwZGF0ZVNlYXJjaCgnJyk7XG4gIH1cblxuICByZW5kZXIoKXtcbiAgICByZXR1cm4oXG4gICAgICA8ZGl2PlxuICAgICAgICA8TmF2YmFyIGNsZWFyU2VhcmNoPXt0aGlzLmNsZWFyU2VhcmNoLmJpbmQodGhpcyl9IC8+XG4gICAgICAgIDxNb2RhbFxuICAgICAgICAgIGFkZFVzZXJDYXQ9e3RoaXMuYWRkVXNlckNhdC5iaW5kKHRoaXMpfVxuICAgICAgICAgIGNhdHM9e3RoaXMuc3RhdGUuY2F0c31cbiAgICAgICAgICAvPlxuICAgICAgICA8UmVzdWx0c1xuICAgICAgICAgIGNsZWFyU2VhcmNoPXt0aGlzLmNsZWFyU2VhcmNoLmJpbmQodGhpcyl9XG4gICAgICAgICAgdXBkYXRlU2VhcmNoPXt0aGlzLnVwZGF0ZVNlYXJjaC5iaW5kKHRoaXMpfVxuICAgICAgICAgIHNlYXJjaD17dGhpcy5zdGF0ZS5zZWFyY2h9XG4gICAgICAgICAgY2F0cz17dGhpcy5zdGF0ZS5jYXRzfVxuICAgICAgICAgIC8+XG4gICAgICAgIDxGb290ZXIgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxucmVuZGVyKDxBcHAgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtyZW5kZXJ9IGZyb20gJ3JlYWN0LWRvbSc7XG5cbmNsYXNzIEZvb3RlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8Zm9vdGVyIGNsYXNzTmFtZT1cInBhZ2UtZm9vdGVyIGJsdWUgZGFya2VuLTJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIndoaXRlLXRleHRcIj5DYXRQaG90b0FwcDwvaDU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImdyZXktdGV4dCB0ZXh0LWxpZ2h0ZW4tNFwiPkNhdFBob3RvQXBwIGhhcyBiZWVuIGNyZWF0ZWQgdG8gZm9ybSBwYXJ0IG9mIHRoZSA8YSBocmVmPVwiaHR0cHM6Ly9mcmVlY29kZWNhbXAuY29tXCIgdGFyZ2V0PVwiX2JsYW5rXCI+RnJlZSBDb2RlIENhbXA8L2E+IGN1cnJpY3VsdW0uPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXItY29weXJpZ2h0XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgIMKpIDIwMTYgQ2F0UGhvdG9BcHBcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImdyZXktdGV4dCB0ZXh0LWxpZ2h0ZW4tNCByaWdodFwiIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vYXRqb25hdGhhbi9jYXRwaG90b2FwcC9cIj5HaXRIdWI8L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9mb290ZXI+XG4gICAgKTtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge3JlbmRlcn0gZnJvbSAncmVhY3QtZG9tJztcblxuY2xhc3MgTW9kYWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcigpe1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zdGF0ZSA9e1xuICAgICAgdmFsaWRUaXRsZTogXCJ2YWxpZGF0ZVwiLFxuICAgICAgY2F0SWQ6IFwiTm90VXBkYXRlZFwiXG4gICAgfTtcbiAgfVxuXG4gIGlzVGl0bGVWYWxpZCgpe1xuICAgIGxldCBpZCA9IHRoaXMucmVmcy50aXRsZS52YWx1ZS5yZXBsYWNlKC9cXHMrL2csICcnKSxcbiAgICAgICAgZXhpc3RpbmdJZHMgPSBbXTtcbiAgICB0aGlzLnByb3BzLmNhdHMuZm9yRWFjaCgoY2F0KSA9PntcbiAgICAgIGV4aXN0aW5nSWRzLnB1c2goY2F0LmlkKTtcbiAgICB9KTtcbiAgICBpZihleGlzdGluZ0lkcy5pbmRleE9mKGlkKSA9PT0gLTEpe1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7Y2F0SWQ6IGlkfSk7XG4gICAgICB0aGlzLnNldFN0YXRlKHt2YWxpZFRpdGxlOiBcInZhbGlkYXRlIHZhbGlkXCJ9KTtcbiAgICB9ZWxzZXtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe3ZhbGlkVGl0bGU6IFwidmFsaWRhdGUgaW52YWxpZFwifSk7XG4gICAgfVxuICB9XG5cbnVwbG9hZGVkVXNlckNhdChlKXtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBsZXQgdGFncyA9IHRoaXMucmVmcy50YWdzLnZhbHVlLnNwbGl0KCcsJyksXG4gICAgICBjbGVhblRhZ3MgPSBbXSxcbiAgICAgIGZvcm1hdFRhZ3MgPSB0YWdzLmZvckVhY2goZnVuY3Rpb24odGFnKXtcbiAgICAgICAgY2xlYW5UYWdzLnB1c2godGFnLnRyaW0oKSk7XG4gICAgICB9KTtcblxuICBmb3IodmFyIGEgPSAwOyBhPGNsZWFuVGFncy5sZW5ndGg7IGErKyl7XG4gICAgaWYoY2xlYW5UYWdzW2FdID09PSBcIlwiIHx8XG4gICAgKGNsZWFuVGFnc1thXS5tYXRjaCgvXFxzKi8pICYmXG4gICAgIWNsZWFuVGFnc1thXS5tYXRjaCgvW1xcd1xcLlxcXFwsXFwvXFwjXFwhXFw/XFzCozxcXD5cXCRcXCVcXF5cXCZcXCpcXDtcXDpcXHtcXH1cXD1cXC1cXF9cXGBcXH5cXChcXCldL2kpKSl7XG4gICAgICBjbGVhblRhZ3Muc3BsaWNlKGEsIDEpO1xuICAgICAgYT0wO1xuICAgIH1cbiAgfVxuXG4gIGxldCB1cmwgPSB0aGlzLnJlZnMudXJsLnZhbHVlLFxuICAgICAgY2xlYW5Vcmw7XG4gIGlmKHVybC5tYXRjaCgvKGpwZ3xwbmd8Z2lmKSQvaSkpe1xuICAgIGNsZWFuVXJsID0gdXJsO1xuICB9ZWxzZXtcbiAgICBjbGVhblVybCA9IFwicHVibGljL2ltZy9yZXBsYWNlbWVudENhdC5qcGdcIjtcbiAgfVxuICBsZXQgbmV3Q2F0ID1be1xuICAgICAgICBpZDogdGhpcy5zdGF0ZS5jYXRJZCxcbiAgICAgICAgdGl0bGU6IHRoaXMucmVmcy50aXRsZS52YWx1ZSxcbiAgICAgICAgdXJsOiBjbGVhblVybCxcbiAgICAgICAgdGFnczogY2xlYW5UYWdzLFxuICAgICAgICBsaWtlczogMVxuICAgICAgICB9XTtcbiAgICAgIHRoaXMucHJvcHMuYWRkVXNlckNhdChuZXdDYXQpO1xuICAgICAgLy8gQ2xlYXIgZm9ybSBmaWVsZHNcbiAgICAgIHRoaXMucmVmcy50aXRsZS52YWx1ZSA9ICcnO1xuICAgICAgdGhpcy5yZWZzLnVybC52YWx1ZSA9ICcnO1xuICAgICAgdGhpcy5yZWZzLnRhZ3MudmFsdWUgPSAnJztcbiAgfVxuXG4gIHJlbmRlcigpe1xuICAgICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgXHRcdDxkaXYgaWQ9XCJhZGRDYXRNb2RhbFwiIGNsYXNzTmFtZT1cIm1vZGFsXCI+XG4gICAgICBcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWNvbnRlbnRcIj5cbiAgICAgIFx0XHRcdFx0PGg0PkFkZCBDYXQgUGhvdG88L2g0PlxuICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy51cGxvYWRlZFVzZXJDYXQuYmluZCh0aGlzKX0+XG4gICAgICBcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgIFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZmllbGQgY29sIHMxMlwiPlxuICAgICAgXHRcdFx0XHRcdFx0XHQ8aW5wdXQgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLnZhbGlkVGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaXNUaXRsZVZhbGlkLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBUaXRsZVwiIHJlZj1cInRpdGxlXCIgaWQ9XCJ0aXRsZVwiIHR5cGU9XCJ0ZXh0XCIgcmVxdWlyZWQgLz5cbiAgICAgIFx0XHRcdFx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9XCJ0aXRsZVwiIGRhdGEtZXJyb3I9XCJDYXQgdGl0bGUgaGFzIGJlZW4gdGFrZW5cIiBkYXRhLXN1Y2Nlc3M9XCJDYXQgdGl0bGUgaXMgZnJlZSB0byB1c2VcIj5UaXRsZTwvbGFiZWw+XG4gICAgICBcdFx0XHRcdFx0XHQ8L2Rpdj5cbiAgICAgIFx0XHRcdFx0XHQ8L2Rpdj5cbiAgICAgIFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbnB1dC1maWVsZCBjb2wgczEyXCI+XG4gICAgICBcdFx0XHRcdFx0XHRcdDxpbnB1dCBwbGFjZWhvbGRlcj1cIkVudGVyIFVSTFwiIHJlZj1cInVybFwiIGlkPVwidXJsXCIgdHlwZT1cInVybFwiIGNsYXNzTmFtZT1cInZhbGlkYXRlXCIgcmVxdWlyZWQgLz5cbiAgICAgIFx0XHRcdFx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9XCJ1cmxcIiBkYXRhLWVycm9yPVwiUGxlYXNlIHVwbG9hZCBhIEdJRiwgUE5HIG9yIEpQR1wiIGRhdGEtc3VjY2Vzcz1cIlRoYXRzIGEgVVJMIGZvciBzdXJlISBJIGhvcGUgaXQgZW5kcyBpbiBHSUYsIFBORyBvciBKUEcuLi5cIj5DYXQgUGhvdG8gVVJMPC9sYWJlbD5cbiAgICAgIFx0XHRcdFx0XHRcdDwvZGl2PlxuICAgICAgXHRcdFx0XHRcdDwvZGl2PlxuICAgICAgXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICBcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWZpZWxkIGNvbCBzNlwiPlxuICAgICAgXHRcdFx0XHRcdFx0XHQ8aW5wdXQgcGxhY2Vob2xkZXI9XCJTZXBhcmF0ZSB0YWdzIHdpdGggYSBjb21tYVwiIHJlZj1cInRhZ3NcIiBpZD1cInRhZ3NcIiB0eXBlPVwidGV4dFwiIHJlcXVpcmVkIC8+XG4gICAgICBcdFx0XHRcdFx0XHRcdDxsYWJlbCBodG1sRm9yPVwidGFnc1wiPlRhZ3M8L2xhYmVsPlxuICAgICAgXHRcdFx0XHRcdFx0PC9kaXY+XG4gICAgICBcdFx0XHRcdFx0PC9kaXY+XG4gICAgICBcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgIFx0XHRcdFx0XHRcdDxidXR0b24gaWQ9XCJzdWJtaXQtYnRuXCIgY2xhc3NOYW1lPVwiYnRuIHdhdmVzLWVmZmVjdCB3YXZlcy1ibHVlIGJsdWUgZGFya2VuLTEgc3VibWl0XCIgdHlwZT1cInN1Ym1pdFwiIG5hbWU9XCJhY3Rpb25cIj5cbiAgICAgIFx0XHRcdFx0XHRcdFx0PGkgY2xhc3NOYW1lPVwiZmEgZmEtc2VuZFwiPjwvaT5cbiAgICAgIFx0XHRcdFx0XHRcdFx0Jm5ic3A7U3VibWl0XG4gICAgICBcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cbiAgICAgIFx0XHRcdFx0XHQ8L2Rpdj5cbiAgICAgIFx0XHRcdFx0PC9mb3JtPlxuICAgICAgXHRcdFx0PC9kaXY+XG4gICAgICBcdFx0PC9kaXY+XG4gICAgICBcdDwvZGl2PlxuICAgICAgKTtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgTW9kYWw7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtyZW5kZXJ9IGZyb20gJ3JlYWN0LWRvbSc7XG5cbmNsYXNzIE5hdmJhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpe1xuICAgICAgcmV0dXJuKFxuICAgICAgPG5hdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtd3JhcHBlciBibHVlIGRhcmtlbi0yXCI+XG4gICAgICAgICAgPGEgaHJlZj1cIiNcIiBvbkNsaWNrPXt0aGlzLnByb3BzLmNsZWFyU2VhcmNofSBjbGFzc05hbWU9XCJicmFuZC1sb2dvXCI+Jm5ic3A7Jm5ic3A7Jm5ic3A7Q2F0UGhvdG9BcHA8L2E+XG4gICAgICAgICAgPGEgaHJlZj1cIiNcIiBkYXRhLWFjdGl2YXRlcz1cIm1vYmlsZVwiIGNsYXNzTmFtZT1cImJ1dHRvbi1jb2xsYXBzZVwiPjxpIGNsYXNzTmFtZT1cImZhIGZhLWJhcnNcIj48L2k+PC9hPlxuICAgICAgICAgIDx1bCBpZD1cIm5hdi1tb2JpbGVcIiBjbGFzc05hbWU9XCJyaWdodCBoaWRlLW9uLW1lZC1hbmQtZG93blwiPlxuICAgICAgICAgICAgPGxpPjxhIGNsYXNzTmFtZT1cIm1vZGFsLXRyaWdnZXJcIiBocmVmPVwiI2FkZENhdE1vZGFsXCI+QWRkIENhdCBQaG90bzwvYT48L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInNpZGUtbmF2XCIgaWQ9XCJtb2JpbGVcIj5cblxuICAgICAgICAgICAgPGxpPjxhIGNsYXNzTmFtZT1cIm1vZGFsLXRyaWdnZXJcIiBocmVmPVwiI2FkZENhdE1vZGFsXCI+QWRkIENhdCBQaG90bzwvYT48L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9uYXY+XG5cblxuICAgICk7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge3JlbmRlcn0gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBSZXN1bHRDYXJkIGZyb20gJy4vUmVzdWx0cy9SZXN1bHRDYXJkJztcblxuY2xhc3MgUmVzdWx0cyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGFuaW1hdGVDbGFzczogXCJcIlxuICAgIH07XG4gIH1cblxuICBzZWFyY2hCeUlucHV0KCkge1xuICAgIHRoaXMucHJvcHMudXBkYXRlU2VhcmNoKHRoaXMucmVmcy5zZWFyY2gudmFsdWUudG9Mb3dlckNhc2UoKSk7XG4gICAgaWYodGhpcy5wcm9wcy5zZWFyY2gubGVuZ3RoID4gMSl7XG4gICAgICB0aGlzLnNldFN0YXRlKHthbmltYXRlQ2xhc3M6IFwiYW5pbWF0ZVwifSk7XG4gICAgfVxuICB9XG5cbiAgc2VhcmNoQnlUYWcodGFnKSB7XG4gICAgdGhpcy5wcm9wcy51cGRhdGVTZWFyY2godGFnLnRvTG93ZXJDYXNlKCkpO1xuICAgIHRoaXMuc2V0U3RhdGUoe2FuaW1hdGVDbGFzczogXCJhbmltYXRlXCJ9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgcHJlRmlsdGVyZWRDYXRzID0gdGhpcy5wcm9wcy5jYXRzLmZpbHRlcigoY2F0KSA9PiB7XG4gICAgbGV0IGxvd2VyVGFncyA9IFtdLFxuICAgICAgICBmb3JtYXRUYWdzID0gY2F0LnRhZ3MuZm9yRWFjaCgodGFnKSA9PiB7XG4gICAgICAgICAgbG93ZXJUYWdzLnB1c2godGFnLnRvTG93ZXJDYXNlKCkpO1xuICAgICAgICB9KTtcbiAgICByZXR1cm4gKGxvd2VyVGFncy5pbmRleE9mKHRoaXMucHJvcHMuc2VhcmNoKSAhPT0gLTEpO1xuICAgIH0pO1xuICAgIGxldCBmaWx0ZXJlZENhdHM7XG5cbiAgICBpZihwcmVGaWx0ZXJlZENhdHMubGVuZ3RoID09PSAwKXtcbiAgICAgIGZpbHRlcmVkQ2F0cyA9IHRoaXMucHJvcHMuY2F0cztcbiAgICB9ZWxzZXtcbiAgICAgIGZpbHRlcmVkQ2F0cyA9IHByZUZpbHRlcmVkQ2F0cztcbiAgICB9XG4gICAgcmV0dXJuKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWZpZWxkIGNvbCBzMTJcIj5cbiAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcImNsZWFyLWljb24gcHJlZml4IFwiICsgKHRoaXMuc3RhdGUuYW5pbWF0ZUNsYXNzKX1cbiAgICAgICAgICAgICAgc3JjPVwicHVibGljL2ltZy9pY29ucy9pY19sb3VwZV9ibGFja18yNHB4LnN2Z1wiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMucHJvcHMuY2xlYXJTZWFyY2h9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCBmb3IgY2F0IHRhZ3MgaGVyZSwgb3IgY2xpY2sgb24gYSBjYXQgdGFnLi4uXCJcbiAgICAgICAgICAgICAgcmVmPVwic2VhcmNoXCJcbiAgICAgICAgICAgICAgaWQ9XCJzZWFyY2hCYXJcIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5zZWFyY2hCeUlucHV0LmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnByb3BzLnNlYXJjaH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVzdWx0c1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICB7ZmlsdGVyZWRDYXRzLm1hcCgoY2F0KSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiA8UmVzdWx0Q2FyZFxuICAgICAgICAgICAgICAgICAgICAgIHNlYXJjaEJ5VGFnPXt0aGlzLnNlYXJjaEJ5VGFnLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgICAgICAgICAga2V5PXtjYXQuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgY2F0PXtjYXR9XG4gICAgICAgICAgICAgICAgICAgICAgLz47XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlc3VsdHM7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtyZW5kZXJ9IGZyb20gJ3JlYWN0LWRvbSc7XG5cbmNsYXNzIENhcmRBY3Rpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaWQ6IHByb3BzLmlkLFxuICAgICAgbGlrZXM6IHByb3BzLmxpa2VzXG4gICAgfTtcbiAgICB0aGlzLmhhbmRsZUNsaWNrID0gdGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpO1xuICB9XG5cbiAgaGFuZGxlQ2xpY2soKSB7XG4gICAgbGV0IGNhdElkID0gdGhpcy5zdGF0ZS5pZCxcbiAgICAgICAgbG9jYWxDYXRzID0gTG9ja3IuZ2V0KCdjYXRzJyksXG4gICAgICAgIGluZGV4O1xuICAgIC8vIHVwZGF0ZSBsaWtlIGJ1dHRvbiBsaWtlc1xuICAgIHRoaXMuc2V0U3RhdGUoe2xpa2VzOiB0aGlzLnN0YXRlLmxpa2VzICsgMX0pO1xuICAgIC8vIEZpbmQgY2F0IGlzIGxvY2FsIHN0b3JhZ2UgYW5kIGluY3JlbWVudCBsaWtlc1xuICAgIGluZGV4ID0gbG9jYWxDYXRzLmZpbmRJbmRleCh4ID0+IHguaWQgPT09IGNhdElkKTtcbiAgICBsb2NhbENhdHNbaW5kZXhdLmxpa2VzID0gdGhpcy5zdGF0ZS5saWtlcyArIDE7XG4gICAgLy8gZW1wdHkgYW5kIHVwZGF0ZSBsb2NhbCBzdG9yYWdlXG4gICAgTG9ja3IuZmx1c2goKTtcbiAgICBsb2NhbENhdHMuZm9yRWFjaChmdW5jdGlvbihsb2NhbENhdCl7XG4gICAgICBMb2Nrci5zYWRkKCdjYXRzJywgbG9jYWxDYXQpO1xuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYWN0aW9uXCI+XG4gICAgICAgIDxhIGNsYXNzTmFtZT1cIndhdmVzLWVmZmVjdCB3YXZlcy1saWdodCB3YXZlcy1yZWQgcmVkIGRhcmtlbi0zIGJ0blwiIGhyZWY9e3RoaXMucHJvcHMudXJsfSBkb3dubG9hZD17dGhpcy5wcm9wcy51cmx9PlxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWRvd25sb2FkXCI+PC9pPlxuICAgICAgICA8L2E+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwid2F2ZXMtZWZmZWN0IHdhdmVzLWxpZ2h0IHdhdmVzLWJsdWUgYmx1ZSBkYXJrZW4tMyBidG5cIlxuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9PlxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXRodW1icy11cFwiPjwvaT5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsaWtlc19udW1iZXJcIj4ge3RoaXMuc3RhdGUubGlrZXN9PC9zcGFuPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IENhcmRBY3Rpb247XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtyZW5kZXJ9IGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgVGFnIGZyb20gJy4vVGFnJztcblxuY2xhc3MgQ2FyZENvbnRlbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICB0YWdDbGljayh0YWcpe1xuICAgIHRoaXMucHJvcHMuc2VhcmNoQnlUYWcodGFnKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWNvbnRlbnRcIj5cbiAgICAgICAgPGg1Pnt0aGlzLnByb3BzLnRpdGxlfTwvaDU+XG4gICAgICAgIHt0aGlzLnByb3BzLnRhZ3MubWFwKCh0YWcsIGtleSkgPT4ge1xuICAgICAgICByZXR1cm4gPFRhZyB0YWdDbGljaz17dGhpcy50YWdDbGljay5iaW5kKHRoaXMpfSBrZXk9e2tleX0gdGFnPXt0YWd9IC8+O1xuICAgICAgICB9KX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IENhcmRDb250ZW50O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7cmVuZGVyfSBmcm9tICdyZWFjdC1kb20nO1xuXG5jbGFzcyBDYXRJbWFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgLy8gdG8gaW5pdGlhbGl6ZSB0aGUgbWF0ZXJpYWwgYm94IGZvciBldmVyeSBpbWFnZVxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAkKCcubWF0ZXJpYWxib3hlZCcpLm1hdGVyaWFsYm94KCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1pbWFnZVwiPlxuICAgICAgICA8aW1nIGNsYXNzTmFtZT1cIm1hdGVyaWFsYm94ZWRcIiBzcmM9e3RoaXMucHJvcHMuc3JjfSAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgQ2F0SW1hZ2U7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtyZW5kZXJ9IGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgQ2F0SW1hZ2UgZnJvbSAnLi9DYXRJbWFnZSc7XG5pbXBvcnQgQ2FyZENvbnRlbnQgZnJvbSAnLi9DYXJkQ29udGVudCc7XG5pbXBvcnQgQ2FyZEFjdGlvbiBmcm9tICcuL0NhcmRBY3Rpb24nO1xuXG5jbGFzcyBSZXN1bHRDYXJkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICByZW5kZXIoKSB7XG4gICAgbGV0IGNhdCA9IHRoaXMucHJvcHMuY2F0O1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIHMzIG00IHMxMlwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgaG92ZXJhYmxlXCI+XG4gICAgICAgICAgPENhdEltYWdlIHNyYz17Y2F0LnVybH0gLz5cbiAgICAgICAgICA8Q2FyZENvbnRlbnQgc2VhcmNoQnlUYWc9e3RoaXMucHJvcHMuc2VhcmNoQnlUYWd9IHRpdGxlPXtjYXQudGl0bGV9IHRhZ3M9e2NhdC50YWdzfSAvPlxuICAgICAgICAgIDxDYXJkQWN0aW9uIHVybD17Y2F0LnVybH0gbGlrZXM9e2NhdC5saWtlc30gaWQ9e2NhdC5pZH0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBSZXN1bHRDYXJkO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7cmVuZGVyfSBmcm9tICdyZWFjdC1kb20nO1xuXG5jbGFzcyBUYWcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBnZXRWYWx1ZSgpe1xuICB0aGlzLnByb3BzLnRhZ0NsaWNrKHRoaXMucHJvcHMudGFnKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9e3RoaXMuZ2V0VmFsdWUuYmluZCh0aGlzKX1cbiAgICAgICAgICBjbGFzc05hbWU9XCJjaGlwIGJsdWUgZGFya2VuLTNcIiA+e3RoaXMucHJvcHMudGFnfTwvc3Bhbj5cbiAgICApO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBUYWc7XG4iLCJleHBvcnQgbGV0IGNhdHMgPSB7XCJjYXRzXCI6W1xuICB7XG4gICAgXCJpZFwiOiBcIkNhbXBlckNhdFwiLFxuICAgIFwibGlrZXNcIjogMyxcbiAgICBcInRhZ3NcIjogW1wiQ29kaW5nXCIsXCJHdXJ1XCIsXCJOaW5qYVwiXSxcbiAgICBcInRpdGxlXCI6IFwiQ2FtcGVyIENhdFwiLFxuICAgIFwidXJsXCI6IFwiaHR0cHM6Ly9tZWRpYS5naXBoeS5jb20vbWVkaWEvbzB2d3p1RndDR0FGTy9naXBoeS5naWZcIlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiBcIkNhdC1pbi1hLWhhdFwiLFxuICAgIFwibGlrZXNcIjogNyxcbiAgICBcInRhZ3NcIjogW1wiQ3V0ZVwiLCBcIkhhdFwiLCBcIlN0YW5kaW5nXCJdLFxuICAgIFwidGl0bGVcIjogXCJDYXQtaW4tYS1oYXRcIixcbiAgICBcInVybFwiOiBcImh0dHBzOi8vcy1tZWRpYS1jYWNoZS1hazAucGluaW1nLmNvbS81NjR4LzI3L2RmL2NjLzI3ZGZjYzE3YThjZWZlNTZjOTkyNzdkNjNiZTBkODE1LmpwZ1wiXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IFwiRmx1ZmZCYWxsXCIsXG4gICAgXCJsaWtlc1wiOiAyLFxuICAgIFwidGFnc1wiOltcIkZsdWZmeVwiLCBcIk5vLWxlZ3NcIiwgXCJCYWxsXCIsIFwiRmx5aW5nXCJdLFxuICAgIFwidGl0bGVcIjogXCJGbHVmZiBCYWxsXCIsXG4gICAgXCJ1cmxcIjogXCJodHRwOi8vd3d3LnRvcDEzLm5ldC93cC1jb250ZW50L3VwbG9hZHMvMjAxNS8xMC9wZXJmZWN0bHktdGltZWQtZnVubnktY2F0LXBpY3R1cmVzLTUuanBnXCJcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogXCJHcnVtcHlDYXRcIixcbiAgICBcImxpa2VzXCI6IDQsXG4gICAgXCJ0YWdzXCI6IFtcIkdydW1weVwiLCBcIkZ1bm55XCIsIFwiRmFtb3VzXCJdLFxuICAgIFwidGl0bGVcIjogXCJHcnVtcHkgQ2F0XCIsXG4gICAgXCJ1cmxcIjogXCJodHRwOi8vaS5kYWlseW1haWwuY28udWsvaS9waXgvMjAxNC8wOC8wNS8xNDA3MjI1OTMyMDkxX3dwc182X1NBTlRBX01PTklDQV9DQV9BVUdVU1RfMDQuanBnXCJcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogXCJIYXBweUNhdFwiLFxuICAgIFwibGlrZXNcIjogOSxcbiAgICBcInRhZ3NcIjogW1wiSGFwcHlcIiwgXCJXaW5raW5nXCIsIFwiU21pbGluZ1wiXSxcbiAgICBcInRpdGxlXCI6IFwiSGFwcHkgQ2F0XCIsXG4gICAgXCJ1cmxcIjogXCJodHRwczovL3Bicy50d2ltZy5jb20vcHJvZmlsZV9pbWFnZXMvMjE2NzAzNTg5Ni8xMjNjYXRfNDAweDQwMC5qcGdcIlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiBcIkxhdWdoaW5nQ2F0XCIsXG4gICAgXCJsaWtlc1wiOiAyNyxcbiAgICBcInRhZ3NcIjogW1wibGF1Z2hpbmdcIiwgXCJGdW5ueVwiLCBcIlNuaWNrZXJcIl0sXG4gICAgXCJ0aXRsZVwiOiBcIkxhdWdoaW5nIENhdFwiLFxuICAgIFwidXJsXCI6IFwiaHR0cDovL2Jsb2cubmVrb2ZsaWVzLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxNC8wMS9mdW5ueS1jYXQuanBnXCJcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogXCJTY2FyZWR5Q2F0XCIsXG4gICAgXCJsaWtlc1wiOiAxOCxcbiAgICBcInRhZ3NcIjogW1wiSGlkaW5nXCIsIFwiQ3V0ZVwiLCBcIlNjYXJlZFwiXSxcbiAgICBcInRpdGxlXCI6IFwiU2NhcmVkeSBDYXQgXCIsXG4gICAgXCJ1cmxcIjogXCJodHRwczovL2kueXRpbWcuY29tL3ZpL01HOEtBRGlSYk9VL21heHJlc2RlZmF1bHQuanBnXCJcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogXCJTaG9ja2VkQ2F0XCIsXG4gICAgXCJsaWtlc1wiOiAxMSxcbiAgICBcInRhZ3NcIjogW1wiV2hhdCBpcyBUSEFUIT9cIiwgXCJTaG9ja2VkXCIsIFwiRnVubnlcIl0sXG4gICAgXCJ0aXRsZVwiOiBcIlNob2NrZWQgQ2F0XCIsXG4gICAgXCJ1cmxcIjogXCJodHRwczovL2kueXRpbWcuY29tL3ZpL2ljcUR4TmFiM0RvL21heHJlc2RlZmF1bHQuanBnXCJcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogXCJTbGVlcGluZ0NhdFwiLFxuICAgIFwibGlrZXNcIjogMixcbiAgICBcInRhZ3NcIjogW1wiU2xlZXBpbmdcIiwgXCJDdXRlXCIsIFwiS2l0dGVuXCJdLFxuICAgIFwidGl0bGVcIjogXCJTbGVlcGluZyBDYXRcIixcbiAgICBcInVybFwiOiBcImh0dHA6Ly93d3cuYWN1dGVhZGF5LmNvbS9ibG9nL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDEyLzA5L3NsZWVwaW5nLWtpdHR5LWNhdC5qcGdcIlxuICB9XG5dfTtcbiJdfQ==
