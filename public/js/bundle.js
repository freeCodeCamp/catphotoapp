(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _cats = require('./components/cats');

var _Header = require('./components/Header');

var _Header2 = _interopRequireDefault(_Header);

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

  _createClass(App, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      $(".button-collapse").sideNav();
      $(".modal-trigger").leanModal();
      $("select").material_select();
      // close addCatModal on submit
      $("#submit-btn").on('click', function () {
        if ($("#title").hasClass("valid") && $("#url").hasClass("valid")) {
          $("#addCatModal").closeModal();
        }
      });
    }
  }]);

  function App() {
    _classCallCheck(this, App);

    // retrieve cats from local storage

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(App).call(this));

    var local = Lockr.get('cats');
    var allCats = void 0;

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
        _react2.default.createElement(_Header2.default, { clearSearch: this.clearSearch.bind(this) }),
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

var app = document.getElementById('app');
(0, _reactDom.render)(_react2.default.createElement(App, null), app);

},{"./components/Footer":2,"./components/Header":3,"./components/Modal":4,"./components/Results":5,"./components/cats":11,"react":"react","react-dom":"react-dom"}],2:[function(require,module,exports){
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

},{"react":"react","react-dom":"react-dom"}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _Card = require('./Results/Card');

var _Card2 = _interopRequireDefault(_Card);

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
      console.log(this.props.search.length);
      if (this.props.search.length > 1) {
        this.setState({ animateClass: "animate" });
      } else {
        this.setState({ animateClass: "" });
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
        var lowerTags = [];
        var formatTags = cat.tags.forEach(function (tag) {
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
              onInput: this.searchByInput.bind(this),
              onKeyDown: this.searchByInput.bind(this),
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
              return _react2.default.createElement(_Card2.default, {
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

},{"./Results/Card":7,"react":"react","react-dom":"react-dom"}],6:[function(require,module,exports){
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

var Action = function (_React$Component) {
  _inherits(Action, _React$Component);

  function Action(props) {
    _classCallCheck(this, Action);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Action).call(this, props));

    _this.state = {
      id: props.id,
      likes: props.likes
    };
    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  _createClass(Action, [{
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

  return Action;
}(_react2.default.Component);

exports.default = Action;

},{"react":"react","react-dom":"react-dom"}],7:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _Image = require('./Image');

var _Image2 = _interopRequireDefault(_Image);

var _Content = require('./Content');

var _Content2 = _interopRequireDefault(_Content);

var _Action = require('./Action');

var _Action2 = _interopRequireDefault(_Action);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var card = function (_React$Component) {
  _inherits(card, _React$Component);

  function card() {
    _classCallCheck(this, card);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(card).apply(this, arguments));
  }

  _createClass(card, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var cat = _props.cat;
      var searchByTag = _props.searchByTag;

      return _react2.default.createElement(
        'div',
        { className: 'col s3 m4 s12' },
        _react2.default.createElement(
          'div',
          { className: 'card hoverable' },
          _react2.default.createElement(_Image2.default, { src: cat.url }),
          _react2.default.createElement(_Content2.default, { searchByTag: searchByTag, title: cat.title, tags: cat.tags }),
          _react2.default.createElement(_Action2.default, { url: cat.url, likes: cat.likes, id: cat.id })
        )
      );
    }
  }]);

  return card;
}(_react2.default.Component);

exports.default = card;

},{"./Action":6,"./Content":8,"./Image":9,"react":"react","react-dom":"react-dom"}],8:[function(require,module,exports){
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

},{"./Tag":10,"react":"react","react-dom":"react-dom"}],9:[function(require,module,exports){
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

var image = function (_React$Component) {
  _inherits(image, _React$Component);

  function image() {
    _classCallCheck(this, image);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(image).apply(this, arguments));
  }

  _createClass(image, [{
    key: 'componentDidMount',
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

  return image;
}(_react2.default.Component);

exports.default = image;

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
        { onClick: this.getValue.bind(this), className: 'chip blue darken-3' },
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
var cats = exports.cats = {
  "cats": [{
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
    "likes": 24,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHBcXGFwcC5qcyIsImFwcFxcY29tcG9uZW50c1xcRm9vdGVyLmpzIiwiYXBwXFxjb21wb25lbnRzXFxIZWFkZXIuanMiLCJhcHBcXGNvbXBvbmVudHNcXE1vZGFsLmpzIiwiYXBwXFxjb21wb25lbnRzXFxSZXN1bHRzLmpzIiwiYXBwXFxjb21wb25lbnRzXFxSZXN1bHRzXFxBY3Rpb24uanMiLCJhcHBcXGNvbXBvbmVudHNcXFJlc3VsdHNcXENhcmQuanMiLCJhcHBcXGNvbXBvbmVudHNcXFJlc3VsdHNcXENvbnRlbnQuanMiLCJhcHBcXGNvbXBvbmVudHNcXFJlc3VsdHNcXEltYWdlLmpzIiwiYXBwXFxjb21wb25lbnRzXFxSZXN1bHRzXFxUYWcuanMiLCJhcHBcXGNvbXBvbmVudHNcXGNhdHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0FDQUE7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRU0sRzs7Ozs7eUNBQ2lCO0FBQ25CLFFBQUUsa0JBQUYsRUFBc0IsT0FBdEI7QUFDQSxRQUFFLGdCQUFGLEVBQW9CLFNBQXBCO0FBQ0EsUUFBRSxRQUFGLEVBQVksZUFBWjtBQUNBO0FBQ0EsUUFBRSxhQUFGLEVBQWlCLEVBQWpCLENBQW9CLE9BQXBCLEVBQTZCLFlBQVU7QUFDckMsWUFBRyxFQUFFLFFBQUYsRUFBWSxRQUFaLENBQXFCLE9BQXJCLEtBQWlDLEVBQUUsTUFBRixFQUFVLFFBQVYsQ0FBbUIsT0FBbkIsQ0FBcEMsRUFBZ0U7QUFDOUQsWUFBRSxjQUFGLEVBQWtCLFVBQWxCO0FBQ0Q7QUFDRixPQUpEO0FBS0Q7OztBQUNELGlCQUFhO0FBQUE7O0FBRVg7O0FBRlc7O0FBR1gsUUFBSSxRQUFRLE1BQU0sR0FBTixDQUFVLE1BQVYsQ0FBWjtBQUNBLFFBQUksZ0JBQUo7O0FBRUEsUUFBSSxLQUFKLEVB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O0FBSUUsYUFBUyxjQUpYO0FBS0UsV0FBTztBQUxULEdBM0NNLEVBa0ROO0FBQ0UsVUFBTSxZQURSO0FBRUUsYUFBUyxFQUZYO0FBR0UsWUFBUSxDQUFDLGdCQUFELEVBQW1CLFNBQW5CLEVBQThCLE9BQTlCLENBSFY7QUFJRSxhQUFTLGFBSlg7QUFLRSxXQUFPO0FBTFQsR0FsRE0sRUF5RE47QUFDRSxVQUFNLGFBRFI7QUFFRSxhQUFTLENBRlg7QUFHRSxZQUFRLENBQUMsVUFBRCxFQUFhLE1BQWIsRUFBcUIsUUFBckIsQ0FIVjtBQUlFLGFBQVMsY0FKWDtBQUtFLFdBQU87QUFMVCxHQXpETSxDQURVLEVBQVgiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtyZW5kZXJ9IGZyb20gJ3JlYWN0LWRvbSc7XHJcbmltcG9ydCB7Y2F0c30gZnJvbSAnLi9jb21wb25lbnRzL2NhdHMnO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vY29tcG9uZW50cy9IZWFkZXInO1xyXG5pbXBvcnQgTW9kYWwgZnJvbSAnLi9jb21wb25lbnRzL01vZGFsJztcclxuaW1wb3J0IFJlc3VsdHMgZnJvbSAnLi9jb21wb25lbnRzL1Jlc3VsdHMnO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vY29tcG9uZW50cy9Gb290ZXInO1xyXG5cclxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb21wb25lbnREaWRVcGRhdGUoKSB7XHJcbiAgICAkKFwiLmJ1dHRvbi1jb2xsYXBzZVwiKS5zaWRlTmF2KCk7XHJcbiAgICAkKFwiLm1vZGFsLXRyaWdnZXJcIikubGVhbk1vZGFsKCk7XHJcbiAgICAkKFwic2VsZWN0XCIpLm1hdGVyaWFsX3NlbGVjdCgpO1xyXG4gICAgLy8gY2xvc2UgYWRkQ2F0TW9kYWwgb24gc3VibWl0XHJcbiAgICAkKFwiI3N1Ym1pdC1idG5cIikub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgaWYoJChcIiN0aXRsZVwiKS5oYXNDbGFzcyhcInZhbGlkXCIpICYmICQoXCIjdXJsXCIpLmhhc0NsYXNzKFwidmFsaWRcIikpe1xyXG4gICAgICAgICQoXCIjYWRkQ2F0TW9kYWxcIikuY2xvc2VNb2RhbCgpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbiAgY29uc3RydWN0b3IoKXtcclxuICAgIHN1cGVyKCk7XHJcbiAgICAvLyByZXRyaWV2ZSBjYXRzIGZyb20gbG9jYWwgc3RvcmFnZVxyXG4gICAgbGV0IGxvY2FsID0gTG9ja3IuZ2V0KCdjYXRzJyk7XHJcbiAgICBsZXQgYWxsQ2F0cztcblxyXG4gICAgaWYgKGxvY2FsKSB7XHJcbiAgICAgIGFsbENhdHMgPSBsb2NhbDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIGlmIG5vdCBjYXRzIGluIGxvY2FsIHN0b3JhZ2UsIHB1dCB0aGVtIHRoZXJlXHJcbiAgICAgIGNhdHMuY2F0cy5mb3JFYWNoKGZ1bmN0aW9uKG91ckNhdCkge1xyXG4gICAgICAgIExvY2tyLnNhZGQoJ2NhdHMnLCBvdXJDYXQpO1xyXG4gICAgICAgIGFsbENhdHMgPSBMb2Nrci5nZXQoJ2NhdHMnKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBjYXRzOiBhbGxDYXRzLFxyXG4gICAgICBzZWFyY2g6ICcnXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgc3RvcmVDYXRzKGNhdHMpIHtcclxuICAgIExvY2tyLmZsdXNoKCk7XHJcbiAgICBjYXRzLmZvckVhY2goZnVuY3Rpb24obG9jYWxDYXQpIHtcclxuICAgICAgTG9ja3Iuc2FkZCgnY2F0cycsIGxvY2FsQ2F0KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgYWRkVXNlckNhdChuZXdDYXQpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe2NhdHM6IG5ld0NhdC5jb25jYXQodGhpcy5zdGF0ZS5jYXRzKX0pO1xyXG4gIH1cclxuXHJcbiAgLy8gRXZlcnkgdGltZSB0aGlzLnN0YXRlLmNhdHMgY2hhbmdlcywgdXBkYXRlIGxvY2FsIHN0b3JhZ2VcclxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlN0YXRlPXRoaXMuc3RhdGUuY2F0cykge1xyXG4gICAgdGhpcy5zdG9yZUNhdHModGhpcy5zdGF0ZS5jYXRzKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZVNlYXJjaChuZXdTZWFyY2gpIHtcclxuICAgIG5ld1NlYXJjaC50b0xvd2VyQ2FzZSgpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7c2VhcmNoOiBuZXdTZWFyY2h9KTtcclxuICB9XHJcblxyXG4gIGNsZWFyU2VhcmNoKCkge1xyXG4gICAgdGhpcy51cGRhdGVTZWFyY2goJycpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8SGVhZGVyIGNsZWFyU2VhcmNoPXt0aGlzLmNsZWFyU2VhcmNoLmJpbmQodGhpcyl9IC8+XHJcbiAgICAgICAgPE1vZGFsXHJcbiAgICAgICAgICBhZGRVc2VyQ2F0PXt0aGlzLmFkZFVzZXJDYXQuYmluZCh0aGlzKX1cclxuICAgICAgICAgIGNhdHM9e3RoaXMuc3RhdGUuY2F0c31cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxSZXN1bHRzXHJcbiAgICAgICAgICBjbGVhclNlYXJjaD17dGhpcy5jbGVhclNlYXJjaC5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgdXBkYXRlU2VhcmNoPXt0aGlzLnVwZGF0ZVNlYXJjaC5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgc2VhcmNoPXt0aGlzLnN0YXRlLnNlYXJjaH1cclxuICAgICAgICAgIGNhdHM9e3RoaXMuc3RhdGUuY2F0c31cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgYXBwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpO1xyXG5yZW5kZXIoPEFwcCAvPiwgYXBwKTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtyZW5kZXJ9IGZyb20gJ3JlYWN0LWRvbSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb290ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8Zm9vdGVyIGNsYXNzTmFtZT1cInBhZ2UtZm9vdGVyIGJsdWUgZGFya2VuLTJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIndoaXRlLXRleHRcIj5DYXRQaG90b0FwcDwvaDU+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImdyZXktdGV4dCB0ZXh0LWxpZ2h0ZW4tNFwiPkNhdFBob3RvQXBwIGhhcyBiZWVuIGNyZWF0ZWQgdG8gZm9ybSBwYXJ0IG9mIHRoZSA8YSBocmVmPVwiaHR0cHM6Ly9mcmVlY29kZWNhbXAuY29tXCIgdGFyZ2V0PVwiX2JsYW5rXCI+RnJlZSBDb2RlIENhbXA8L2E+IGN1cnJpY3VsdW0uPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXItY29weXJpZ2h0XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICDCqSAyMDE2IENhdFBob3RvQXBwXHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImdyZXktdGV4dCB0ZXh0LWxpZ2h0ZW4tNCByaWdodFwiIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vYXRqb25hdGhhbi9jYXRwaG90b2FwcC9cIj5HaXRIdWI8L2E+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9mb290ZXI+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtyZW5kZXJ9IGZyb20gJ3JlYWN0LWRvbSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOYXZiYXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxuYXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtd3JhcHBlciBibHVlIGRhcmtlbi0yXCI+XHJcbiAgICAgICAgICA8YSBocmVmPVwiI1wiIG9uQ2xpY2s9e3RoaXMucHJvcHMuY2xlYXJTZWFyY2h9IGNsYXNzTmFtZT1cImJyYW5kLWxvZ29cIj4mbmJzcDsmbmJzcDsmbmJzcDtDYXRQaG90b0FwcDwvYT5cclxuICAgICAgICAgIDxhIGhyZWY9XCIjXCIgZGF0YS1hY3RpdmF0ZXM9XCJtb2JpbGVcIiBjbGFzc05hbWU9XCJidXR0b24tY29sbGFwc2VcIj48aSBjbGFzc05hbWU9XCJmYSBmYS1iYXJzXCI+PC9pPjwvYT5cclxuICAgICAgICAgIDx1bCBpZD1cIm5hdi1tb2JpbGVcIiBjbGFzc05hbWU9XCJyaWdodCBoaWRlLW9uLW1lZC1hbmQtZG93blwiPlxyXG4gICAgICAgICAgICA8bGk+PGEgY2xhc3NOYW1lPVwibW9kYWwtdHJpZ2dlclwiIGhyZWY9XCIjYWRkQ2F0TW9kYWxcIj5BZGQgQ2F0IFBob3RvPC9hPjwvbGk+XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInNpZGUtbmF2XCIgaWQ9XCJtb2JpbGVcIj5cclxuICAgICAgICAgICAgPGxpPjxhIGNsYXNzTmFtZT1cIm1vZGFsLXRyaWdnZXJcIiBocmVmPVwiI2FkZENhdE1vZGFsXCI+QWRkIENhdCBQaG90bzwvYT48L2xpPlxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9uYXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge3JlbmRlcn0gZnJvbSAncmVhY3QtZG9tJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vZGFsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLnN0YXRlID17XHJcbiAgICAgIHZhbGlkVGl0bGU6IFwidmFsaWRhdGVcIixcclxuICAgICAgY2F0SWQ6IFwiTm90VXBkYXRlZFwiXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgaXNUaXRsZVZhbGlkKCkge1xyXG4gICAgbGV0IGlkID0gdGhpcy5yZWZzLnRpdGxlLnZhbHVlLnJlcGxhY2UoL1xccysvZywgJycpLFxyXG4gICAgICAgIGV4aXN0aW5nSWRzID0gW107XHJcbiAgICB0aGlzLnByb3BzLmNhdHMuZm9yRWFjaCgoY2F0KSA9PntcclxuICAgICAgZXhpc3RpbmdJZHMucHVzaChjYXQuaWQpO1xyXG4gICAgfSk7XHJcbiAgICBpZihleGlzdGluZ0lkcy5pbmRleE9mKGlkKSA9PT0gLTEpe1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtjYXRJZDogaWR9KTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7dmFsaWRUaXRsZTogXCJ2YWxpZGF0ZSB2YWxpZFwifSk7XHJcbiAgICB9ZWxzZXtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7dmFsaWRUaXRsZTogXCJ2YWxpZGF0ZSBpbnZhbGlkXCJ9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVwbG9hZGVkVXNlckNhdChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBsZXQgdGFncyA9IHRoaXMucmVmcy50YWdzLnZhbHVlLnNwbGl0KCcsJyksXHJcbiAgICAgICAgY2xlYW5UYWdzID0gW10sXHJcbiAgICAgICAgZm9ybWF0VGFncyA9IHRhZ3MuZm9yRWFjaChmdW5jdGlvbih0YWcpe1xyXG4gICAgICAgICAgY2xlYW5UYWdzLnB1c2godGFnLnRyaW0oKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICBmb3IobGV0IGEgPSAwOyBhIDwgY2xlYW5UYWdzLmxlbmd0aDsgYSsrKXtcclxuICAgICAgaWYgKGNsZWFuVGFnc1thXSA9PT0gXCJcIiB8fFxyXG4gICAgICAoY2xlYW5UYWdzW2FdLm1hdGNoKC9cXHMqLykgJiZcclxuICAgICAgIWNsZWFuVGFnc1thXS5tYXRjaCgvW1xcd1xcLlxcXFwsXFwvXFwjXFwhXFw/XFzCozxcXD5cXCRcXCVcXF5cXCZcXCpcXDtcXDpcXHtcXH1cXD1cXC1cXF9cXGBcXH5cXChcXCldL2kpKSkge1xyXG4gICAgICAgIGNsZWFuVGFncy5zcGxpY2UoYSwgMSk7XHJcbiAgICAgICAgYSA9IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGxldCB1cmwgPSB0aGlzLnJlZnMudXJsLnZhbHVlLFxyXG4gICAgICAgIGNsZWFuVXJsO1xyXG4gICAgaWYgKHVybC5tYXRjaCgvKGpwZ3xwbmd8Z2lmKSQvaSkpIHtcclxuICAgICAgY2xlYW5VcmwgPSB1cmw7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjbGVhblVybCA9IFwicHVibGljL2ltZy9yZXBsYWNlbWVudENhdC5qcGdcIjtcclxuICAgIH1cclxuICAgIGxldCBuZXdDYXQgPSBbe1xyXG4gICAgICBpZDogdGhpcy5zdGF0ZS5jYXRJZCxcclxuICAgICAgdGl0bGU6IHRoaXMucmVmcy50aXRsZS52YWx1ZSxcclxuICAgICAgdXJsOiBjbGVhblVybCxcclxuICAgICAgdGFnczogY2xlYW5UYWdzLFxyXG4gICAgICBsaWtlczogMVxyXG4gICAgfV07XHJcbiAgICB0aGlzLnByb3BzLmFkZFVzZXJDYXQobmV3Q2F0KTtcclxuICAgIC8vIENsZWFyIGZvcm0gZmllbGRzXHJcbiAgICB0aGlzLnJlZnMudGl0bGUudmFsdWUgPSAnJztcclxuICAgIHRoaXMucmVmcy51cmwudmFsdWUgPSAnJztcclxuICAgIHRoaXMucmVmcy50YWdzLnZhbHVlID0gJyc7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgXHRcdDxkaXYgaWQ9XCJhZGRDYXRNb2RhbFwiIGNsYXNzTmFtZT1cIm1vZGFsXCI+XHJcbiAgICBcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWNvbnRlbnRcIj5cclxuICAgIFx0XHRcdFx0PGg0PkFkZCBDYXQgUGhvdG88L2g0PlxyXG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy51cGxvYWRlZFVzZXJDYXQuYmluZCh0aGlzKX0+XHJcbiAgICBcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgIFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZmllbGQgY29sIHMxMlwiPlxyXG4gICAgXHRcdFx0XHRcdFx0XHQ8aW5wdXQgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLnZhbGlkVGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaXNUaXRsZVZhbGlkLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBUaXRsZVwiIHJlZj1cInRpdGxlXCIgaWQ9XCJ0aXRsZVwiIHR5cGU9XCJ0ZXh0XCIgcmVxdWlyZWQgLz5cclxuICAgIFx0XHRcdFx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9XCJ0aXRsZVwiIGRhdGEtZXJyb3I9XCJDYXQgdGl0bGUgaGFzIGJlZW4gdGFrZW5cIiBkYXRhLXN1Y2Nlc3M9XCJDYXQgdGl0bGUgaXMgZnJlZSB0byB1c2VcIj5UaXRsZTwvbGFiZWw+XHJcbiAgICBcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuICAgIFx0XHRcdFx0XHQ8L2Rpdj5cclxuICAgIFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbnB1dC1maWVsZCBjb2wgczEyXCI+XHJcbiAgICBcdFx0XHRcdFx0XHRcdDxpbnB1dCBwbGFjZWhvbGRlcj1cIkVudGVyIFVSTFwiIHJlZj1cInVybFwiIGlkPVwidXJsXCIgdHlwZT1cInVybFwiIGNsYXNzTmFtZT1cInZhbGlkYXRlXCIgcmVxdWlyZWQgLz5cclxuICAgIFx0XHRcdFx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9XCJ1cmxcIiBkYXRhLWVycm9yPVwiUGxlYXNlIHVwbG9hZCBhIEdJRiwgUE5HIG9yIEpQR1wiIGRhdGEtc3VjY2Vzcz1cIlRoYXRzIGEgVVJMIGZvciBzdXJlISBJIGhvcGUgaXQgZW5kcyBpbiBHSUYsIFBORyBvciBKUEcuLi5cIj5DYXQgUGhvdG8gVVJMPC9sYWJlbD5cclxuICAgIFx0XHRcdFx0XHRcdDwvZGl2PlxyXG4gICAgXHRcdFx0XHRcdDwvZGl2PlxyXG4gICAgXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICBcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWZpZWxkIGNvbCBzNlwiPlxyXG4gICAgXHRcdFx0XHRcdFx0XHQ8aW5wdXQgcGxhY2Vob2xkZXI9XCJTZXBhcmF0ZSB0YWdzIHdpdGggYSBjb21tYVwiIHJlZj1cInRhZ3NcIiBpZD1cInRhZ3NcIiB0eXBlPVwidGV4dFwiIHJlcXVpcmVkIC8+XHJcbiAgICBcdFx0XHRcdFx0XHRcdDxsYWJlbCBodG1sRm9yPVwidGFnc1wiPlRhZ3M8L2xhYmVsPlxyXG4gICAgXHRcdFx0XHRcdFx0PC9kaXY+XHJcbiAgICBcdFx0XHRcdFx0PC9kaXY+XHJcbiAgICBcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgIFx0XHRcdFx0XHRcdDxidXR0b24gaWQ9XCJzdWJtaXQtYnRuXCIgY2xhc3NOYW1lPVwiYnRuIHdhdmVzLWVmZmVjdCB3YXZlcy1ibHVlIGJsdWUgZGFya2VuLTEgc3VibWl0XCIgdHlwZT1cInN1Ym1pdFwiIG5hbWU9XCJhY3Rpb25cIj5cclxuICAgIFx0XHRcdFx0XHRcdFx0PGkgY2xhc3NOYW1lPVwiZmEgZmEtc2VuZFwiPjwvaT5cclxuICAgIFx0XHRcdFx0XHRcdFx0Jm5ic3A7U3VibWl0XHJcbiAgICBcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cclxuICAgIFx0XHRcdFx0XHQ8L2Rpdj5cclxuICAgIFx0XHRcdFx0PC9mb3JtPlxyXG4gICAgXHRcdFx0PC9kaXY+XHJcbiAgICBcdFx0PC9kaXY+XHJcbiAgICBcdDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtyZW5kZXJ9IGZyb20gJ3JlYWN0LWRvbSc7XHJcbmltcG9ydCBDYXJkIGZyb20gJy4vUmVzdWx0cy9DYXJkJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlc3VsdHMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGFuaW1hdGVDbGFzczogXCJcIlxyXG4gICAgfTtcclxuICB9XG5cclxuICBzZWFyY2hCeUlucHV0KCkge1xyXG4gICAgdGhpcy5wcm9wcy51cGRhdGVTZWFyY2godGhpcy5yZWZzLnNlYXJjaC52YWx1ZS50b0xvd2VyQ2FzZSgpKTtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMuc2VhcmNoLmxlbmd0aCk7XHJcbiAgICBpZiAodGhpcy5wcm9wcy5zZWFyY2gubGVuZ3RoID4gMSkge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHthbmltYXRlQ2xhc3M6IFwiYW5pbWF0ZVwifSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHthbmltYXRlQ2xhc3M6IFwiXCJ9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNlYXJjaEJ5VGFnKHRhZykge1xyXG4gICAgdGhpcy5wcm9wcy51cGRhdGVTZWFyY2godGFnLnRvTG93ZXJDYXNlKCkpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7YW5pbWF0ZUNsYXNzOiBcImFuaW1hdGVcIn0pO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgbGV0IHByZUZpbHRlcmVkQ2F0cyA9IHRoaXMucHJvcHMuY2F0cy5maWx0ZXIoKGNhdCkgPT4ge1xyXG4gICAgICBsZXQgbG93ZXJUYWdzID0gW107XHJcbiAgICAgIGxldCBmb3JtYXRUYWdzID0gY2F0LnRhZ3MuZm9yRWFjaCgodGFnKSA9PiB7XHJcbiAgICAgICAgbG93ZXJUYWdzLnB1c2godGFnLnRvTG93ZXJDYXNlKCkpO1xyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIChsb3dlclRhZ3MuaW5kZXhPZih0aGlzLnByb3BzLnNlYXJjaCkgIT09IC0xKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGxldCBmaWx0ZXJlZENhdHM7XHJcblxyXG4gICAgaWYgKHByZUZpbHRlcmVkQ2F0cy5sZW5ndGggPT09IDApIHtcclxuICAgICAgZmlsdGVyZWRDYXRzID0gdGhpcy5wcm9wcy5jYXRzO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZmlsdGVyZWRDYXRzID0gcHJlRmlsdGVyZWRDYXRzO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWZpZWxkIGNvbCBzMTJcIj5cclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17XCJjbGVhci1pY29uIHByZWZpeCBcIiArICh0aGlzLnN0YXRlLmFuaW1hdGVDbGFzcyl9XHJcbiAgICAgICAgICAgICAgc3JjPVwicHVibGljL2ltZy9pY29ucy9pY19sb3VwZV9ibGFja18yNHB4LnN2Z1wiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5wcm9wcy5jbGVhclNlYXJjaH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCBmb3IgY2F0IHRhZ3MgaGVyZSwgb3IgY2xpY2sgb24gYSBjYXQgdGFnLi4uXCJcclxuICAgICAgICAgICAgICByZWY9XCJzZWFyY2hcIlxyXG4gICAgICAgICAgICAgIGlkPVwic2VhcmNoQmFyXCJcclxuICAgICAgICAgICAgICBvbklucHV0PXt0aGlzLnNlYXJjaEJ5SW5wdXQuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICBvbktleURvd249e3RoaXMuc2VhcmNoQnlJbnB1dC5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnByb3BzLnNlYXJjaH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVzdWx0c1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAge2ZpbHRlcmVkQ2F0cy5tYXAoY2F0ID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxDYXJkXHJcbiAgICAgICAgICAgICAgICAgIHNlYXJjaEJ5VGFnPXt0aGlzLnNlYXJjaEJ5VGFnLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgIGtleT17Y2F0LmlkfVxyXG4gICAgICAgICAgICAgICAgICBjYXQ9e2NhdH1cclxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtyZW5kZXJ9IGZyb20gJ3JlYWN0LWRvbSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBY3Rpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBpZDogcHJvcHMuaWQsXHJcbiAgICAgIGxpa2VzOiBwcm9wcy5saWtlc1xyXG4gICAgfTtcclxuICAgIHRoaXMuaGFuZGxlQ2xpY2sgPSB0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcyk7XHJcbiAgfVxyXG4gIGhhbmRsZUNsaWNrKCkge1xyXG4gICAgbGV0IGNhdElkID0gdGhpcy5zdGF0ZS5pZCxcclxuICAgICAgICBsb2NhbENhdHMgPSBMb2Nrci5nZXQoJ2NhdHMnKSxcclxuICAgICAgICBpbmRleDtcclxuICAgIC8vIHVwZGF0ZSBsaWtlIGJ1dHRvbiBsaWtlc1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7bGlrZXM6IHRoaXMuc3RhdGUubGlrZXMgKyAxfSk7XHJcbiAgICAvLyBGaW5kIGNhdCBpcyBsb2NhbCBzdG9yYWdlIGFuZCBpbmNyZW1lbnQgbGlrZXNcclxuICAgIGluZGV4ID0gbG9jYWxDYXRzLmZpbmRJbmRleCh4ID0+IHguaWQgPT09IGNhdElkKTtcclxuICAgIGxvY2FsQ2F0c1tpbmRleF0ubGlrZXMgPSB0aGlzLnN0YXRlLmxpa2VzICsgMTtcclxuICAgIC8vIGVtcHR5IGFuZCB1cGRhdGUgbG9jYWwgc3RvcmFnZVxyXG4gICAgTG9ja3IuZmx1c2goKTtcclxuICAgIGxvY2FsQ2F0cy5mb3JFYWNoKGZ1bmN0aW9uKGxvY2FsQ2F0KXtcclxuICAgICAgTG9ja3Iuc2FkZCgnY2F0cycsIGxvY2FsQ2F0KTtcclxuICAgIH0pO1xyXG4gIH1cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYWN0aW9uXCI+XHJcbiAgICAgICAgPGEgY2xhc3NOYW1lPVwid2F2ZXMtZWZmZWN0IHdhdmVzLWxpZ2h0IHdhdmVzLXJlZCByZWQgZGFya2VuLTMgYnRuXCIgaHJlZj17dGhpcy5wcm9wcy51cmx9IGRvd25sb2FkPXt0aGlzLnByb3BzLnVybH0+XHJcbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1kb3dubG9hZFwiPjwvaT5cclxuICAgICAgICA8L2E+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ3YXZlcy1lZmZlY3Qgd2F2ZXMtbGlnaHQgd2F2ZXMtYmx1ZSBibHVlIGRhcmtlbi0zIGJ0blwiXHJcbiAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfT5cclxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXRodW1icy11cFwiPjwvaT5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxpa2VzX251bWJlclwiPiB7dGhpcy5zdGF0ZS5saWtlc308L3NwYW4+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtyZW5kZXJ9IGZyb20gJ3JlYWN0LWRvbSc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICcuL0ltYWdlJztcclxuaW1wb3J0IENvbnRlbnQgZnJvbSAnLi9Db250ZW50JztcclxuaW1wb3J0IEFjdGlvbiBmcm9tICcuL0FjdGlvbic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBjYXJkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICBsZXQgeyBjYXQsIHNlYXJjaEJ5VGFnIH0gPSB0aGlzLnByb3BzO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgczMgbTQgczEyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGhvdmVyYWJsZVwiPlxyXG4gICAgICAgICAgPEltYWdlIHNyYz17Y2F0LnVybH0gLz5cclxuICAgICAgICAgIDxDb250ZW50IHNlYXJjaEJ5VGFnPXtzZWFyY2hCeVRhZ30gdGl0bGU9e2NhdC50aXRsZX0gdGFncz17Y2F0LnRhZ3N9IC8+XHJcbiAgICAgICAgICA8QWN0aW9uIHVybD17Y2F0LnVybH0gbGlrZXM9e2NhdC5saWtlc30gaWQ9e2NhdC5pZH0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge3JlbmRlcn0gZnJvbSAncmVhY3QtZG9tJztcclxuaW1wb3J0IFRhZyBmcm9tICcuL1RhZyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXJkQ29udGVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgdGFnQ2xpY2sodGFnKSB7XHJcbiAgICB0aGlzLnByb3BzLnNlYXJjaEJ5VGFnKHRhZyk7XHJcbiAgfVxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1jb250ZW50XCI+XHJcbiAgICAgICAgPGg1Pnt0aGlzLnByb3BzLnRpdGxlfTwvaDU+XHJcbiAgICAgICAge3RoaXMucHJvcHMudGFncy5tYXAoKHRhZywga2V5KSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gPFRhZyB0YWdDbGljaz17dGhpcy50YWdDbGljay5iaW5kKHRoaXMpfSBrZXk9e2tleX0gdGFnPXt0YWd9IC8+O1xyXG4gICAgICAgIH0pfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7cmVuZGVyfSBmcm9tICdyZWFjdC1kb20nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgaW1hZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgJCgnLm1hdGVyaWFsYm94ZWQnKS5tYXRlcmlhbGJveCgpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWltYWdlXCI+XHJcbiAgICAgICAgPGltZyBjbGFzc05hbWU9XCJtYXRlcmlhbGJveGVkXCIgc3JjPXt0aGlzLnByb3BzLnNyY30gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge3JlbmRlcn0gZnJvbSAncmVhY3QtZG9tJztcclxuXHJcbmNsYXNzIFRhZyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgZ2V0VmFsdWUoKSB7XHJcbiAgICB0aGlzLnByb3BzLnRhZ0NsaWNrKHRoaXMucHJvcHMudGFnKTtcclxuICB9XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPHNwYW4gb25DbGljaz17dGhpcy5nZXRWYWx1ZS5iaW5kKHRoaXMpfSBjbGFzc05hbWU9XCJjaGlwIGJsdWUgZGFya2VuLTNcIj57dGhpcy5wcm9wcy50YWd9PC9zcGFuPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgVGFnO1xyXG4iLCJleHBvcnQgbGV0IGNhdHMgPSB7XHJcblwiY2F0c1wiOiBbXHJcbiAge1xyXG4gICAgXCJpZFwiOiBcIkNhbXBlckNhdFwiLFxyXG4gICAgXCJsaWtlc1wiOiAzLFxyXG4gICAgXCJ0YWdzXCI6IFtcIkNvZGluZ1wiLFwiR3VydVwiLFwiTmluamFcIl0sXHJcbiAgICBcInRpdGxlXCI6IFwiQ2FtcGVyIENhdFwiLFxyXG4gICAgXCJ1cmxcIjogXCJodHRwczovL21lZGlhLmdpcGh5LmNvbS9tZWRpYS9vMHZ3enVGd0NHQUZPL2dpcGh5LmdpZlwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcImlkXCI6IFwiQ2F0LWluLWEtaGF0XCIsXHJcbiAgICBcImxpa2VzXCI6IDcsXHJcbiAgICBcInRhZ3NcIjogW1wiQ3V0ZVwiLCBcIkhhdFwiLCBcIlN0YW5kaW5nXCJdLFxyXG4gICAgXCJ0aXRsZVwiOiBcIkNhdC1pbi1hLWhhdFwiLFxyXG4gICAgXCJ1cmxcIjogXCJodHRwczovL3MtbWVkaWEtY2FjaGUtYWswLnBpbmltZy5jb20vNTY0eC8yNy9kZi9jYy8yN2RmY2MxN2E4Y2VmZTU2Yzk5Mjc3ZDYzYmUwZDgxNS5qcGdcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJpZFwiOiBcIkZsdWZmQmFsbFwiLFxyXG4gICAgXCJsaWtlc1wiOiAyLFxyXG4gICAgXCJ0YWdzXCI6W1wiRmx1ZmZ5XCIsIFwiTm8tbGVnc1wiLCBcIkJhbGxcIiwgXCJGbHlpbmdcIl0sXHJcbiAgICBcInRpdGxlXCI6IFwiRmx1ZmYgQmFsbFwiLFxyXG4gICAgXCJ1cmxcIjogXCJodHRwOi8vd3d3LnRvcDEzLm5ldC93cC1jb250ZW50L3VwbG9hZHMvMjAxNS8xMC9wZXJmZWN0bHktdGltZWQtZnVubnktY2F0LXBpY3R1cmVzLTUuanBnXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwiaWRcIjogXCJHcnVtcHlDYXRcIixcclxuICAgIFwibGlrZXNcIjogNCxcclxuICAgIFwidGFnc1wiOiBbXCJHcnVtcHlcIiwgXCJGdW5ueVwiLCBcIkZhbW91c1wiXSxcclxuICAgIFwidGl0bGVcIjogXCJHcnVtcHkgQ2F0XCIsXHJcbiAgICBcInVybFwiOiBcImh0dHA6Ly9pLmRhaWx5bWFpbC5jby51ay9pL3BpeC8yMDE0LzA4LzA1LzE0MDcyMjU5MzIwOTFfd3BzXzZfU0FOVEFfTU9OSUNBX0NBX0FVR1VTVF8wNC5qcGdcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJpZFwiOiBcIkhhcHB5Q2F0XCIsXHJcbiAgICBcImxpa2VzXCI6IDksXHJcbiAgICBcInRhZ3NcIjogW1wiSGFwcHlcIiwgXCJXaW5raW5nXCIsIFwiU21pbGluZ1wiXSxcclxuICAgIFwidGl0bGVcIjogXCJIYXBweSBDYXRcIixcclxuICAgIFwidXJsXCI6IFwiaHR0cHM6Ly9wYnMudHdpbWcuY29tL3Byb2ZpbGVfaW1hZ2VzLzIxNjcwMzU4OTYvMTIzY2F0XzQwMHg0MDAuanBnXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwiaWRcIjogXCJMYXVnaGluZ0NhdFwiLFxyXG4gICAgXCJsaWtlc1wiOiAyNCxcclxuICAgIFwidGFnc1wiOiBbXCJsYXVnaGluZ1wiLCBcIkZ1bm55XCIsIFwiU25pY2tlclwiXSxcclxuICAgIFwidGl0bGVcIjogXCJMYXVnaGluZyBDYXRcIixcclxuICAgIFwidXJsXCI6IFwiaHR0cDovL2Jsb2cubmVrb2ZsaWVzLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxNC8wMS9mdW5ueS1jYXQuanBnXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwiaWRcIjogXCJTY2FyZWR5Q2F0XCIsXHJcbiAgICBcImxpa2VzXCI6IDE4LFxyXG4gICAgXCJ0YWdzXCI6IFtcIkhpZGluZ1wiLCBcIkN1dGVcIiwgXCJTY2FyZWRcIl0sXHJcbiAgICBcInRpdGxlXCI6IFwiU2NhcmVkeSBDYXQgXCIsXHJcbiAgICBcInVybFwiOiBcImh0dHBzOi8vaS55dGltZy5jb20vdmkvTUc4S0FEaVJiT1UvbWF4cmVzZGVmYXVsdC5qcGdcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJpZFwiOiBcIlNob2NrZWRDYXRcIixcclxuICAgIFwibGlrZXNcIjogMTEsXHJcbiAgICBcInRhZ3NcIjogW1wiV2hhdCBpcyBUSEFUIT9cIiwgXCJTaG9ja2VkXCIsIFwiRnVubnlcIl0sXHJcbiAgICBcInRpdGxlXCI6IFwiU2hvY2tlZCBDYXRcIixcclxuICAgIFwidXJsXCI6IFwiaHR0cHM6Ly9pLnl0aW1nLmNvbS92aS9pY3FEeE5hYjNEby9tYXhyZXNkZWZhdWx0LmpwZ1wiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcImlkXCI6IFwiU2xlZXBpbmdDYXRcIixcclxuICAgIFwibGlrZXNcIjogMixcclxuICAgIFwidGFnc1wiOiBbXCJTbGVlcGluZ1wiLCBcIkN1dGVcIiwgXCJLaXR0ZW5cIl0sXHJcbiAgICBcInRpdGxlXCI6IFwiU2xlZXBpbmcgQ2F0XCIsXHJcbiAgICBcInVybFwiOiBcImh0dHA6Ly93d3cuYWN1dGVhZGF5LmNvbS9ibG9nL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDEyLzA5L3NsZWVwaW5nLWtpdHR5LWNhdC5qcGdcIlxyXG4gIH1cclxuXX07XHJcbiJdfQ==
