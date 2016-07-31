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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHBcXGFwcC5qcyIsImFwcFxcY29tcG9uZW50c1xcRm9vdGVyLmpzIiwiYXBwXFxjb21wb25lbnRzXFxIZWFkZXIuanMiLCJhcHBcXGNvbXBvbmVudHNcXE1vZGFsLmpzIiwiYXBwXFxjb21wb25lbnRzXFxSZXN1bHRzLmpzIiwiYXBwXFxjb21wb25lbnRzXFxSZXN1bHRzXFxBY3Rpb24uanMiLCJhcHBcXGNvbXBvbmVudHNcXFJlc3VsdHNcXENhcmQuanMiLCJhcHBcXGNvbXBvbmVudHNcXFJlc3VsdHNcXENvbnRlbnQuanMiLCJhcHBcXGNvbXBvbmVudHNcXFJlc3VsdHNcXEltYWdlLmpzIiwiYXBwXFxjb21wb25lbnRzXFxSZXN1bHRzXFxUYWcuanMiLCJhcHBcXGNvbXBvbmVudHNcXGNhdHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0FDQUE7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRU0sRzs7Ozs7eUNBQ2lCO0FBQ25CLFFBQUUsa0JBQUYsRUFBc0IsT0FBdEI7QUFDQSxRQUFFLGdCQUFGLEVBQW9CLFNBQXBCO0FBQ0EsUUFBRSxRQUFGLEVBQVksZUFBWjtBQUNBO0FBQ0EsUUFBRSxhQUFGLEVBQWlCLEVBQWpCLENBQW9CLE9BQXBCLEVBQTZCLFlBQVU7QUFDckMsWUFBRyxFQUFFLFFBQUYsRUFBWSxRQUFaLENBQXFCLE9BQXJCLEtBQWlDLEVBQUUsTUFBRixFQUFVLFFBQVYsQ0FBbUIsT0FBbkIsQ0FBcEMsRUFBZ0U7QUFDOUQsWUFBRSxjQUFGLEVBQWtCLFVBQWxCO0FBQ0Q7QUFDRixPQUpEO0FBS0Q7OztBQUNELGlCQUFhO0FBQUE7O0FBRVg7O0FBRlc7O0FBR1gsUUFBSSxRQUFRLE1BQU0sR0FBTixDQUFVLE1BQVYsQ0FBWjtBQUNBLFFBQUksZ0JBQUo7O0FBRUEsUUFBSSxLQUFKLEVB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O0FBTFQsR0FsRE0sRUF5RE47QUFDRSxVQUFNLGFBRFI7QUFFRSxhQUFTLENBRlg7QUFHRSxZQUFRLENBQUMsVUFBRCxFQUFhLE1BQWIsRUFBcUIsUUFBckIsQ0FIVjtBQUlFLGFBQVMsY0FKWDtBQUtFLFdBQU87QUFMVCxHQXpETSxDQURVLEVBQVgiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtyZW5kZXJ9IGZyb20gJ3JlYWN0LWRvbSc7XHJcbmltcG9ydCB7Y2F0c30gZnJvbSAnLi9jb21wb25lbnRzL2NhdHMnO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vY29tcG9uZW50cy9IZWFkZXInO1xyXG5pbXBvcnQgTW9kYWwgZnJvbSAnLi9jb21wb25lbnRzL01vZGFsJztcclxuaW1wb3J0IFJlc3VsdHMgZnJvbSAnLi9jb21wb25lbnRzL1Jlc3VsdHMnO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vY29tcG9uZW50cy9Gb290ZXInO1xyXG5cclxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb21wb25lbnREaWRVcGRhdGUoKSB7XHJcbiAgICAkKFwiLmJ1dHRvbi1jb2xsYXBzZVwiKS5zaWRlTmF2KCk7XHJcbiAgICAkKFwiLm1vZGFsLXRyaWdnZXJcIikubGVhbk1vZGFsKCk7XHJcbiAgICAkKFwic2VsZWN0XCIpLm1hdGVyaWFsX3NlbGVjdCgpO1xyXG4gICAgLy8gY2xvc2UgYWRkQ2F0TW9kYWwgb24gc3VibWl0XHJcbiAgICAkKFwiI3N1Ym1pdC1idG5cIikub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgaWYoJChcIiN0aXRsZVwiKS5oYXNDbGFzcyhcInZhbGlkXCIpICYmICQoXCIjdXJsXCIpLmhhc0NsYXNzKFwidmFsaWRcIikpe1xyXG4gICAgICAgICQoXCIjYWRkQ2F0TW9kYWxcIikuY2xvc2VNb2RhbCgpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbiAgY29uc3RydWN0b3IoKXtcclxuICAgIHN1cGVyKCk7XHJcbiAgICAvLyByZXRyaWV2ZSBjYXRzIGZyb20gbG9jYWwgc3RvcmFnZVxyXG4gICAgbGV0IGxvY2FsID0gTG9ja3IuZ2V0KCdjYXRzJyk7XHJcbiAgICBsZXQgYWxsQ2F0cztcblxyXG4gICAgaWYgKGxvY2FsKSB7XHJcbiAgICAgIGFsbENhdHMgPSBsb2NhbDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIGlmIG5vdCBjYXRzIGluIGxvY2FsIHN0b3JhZ2UsIHB1dCB0aGVtIHRoZXJlXHJcbiAgICAgIGNhdHMuY2F0cy5mb3JFYWNoKGZ1bmN0aW9uKG91ckNhdCkge1xyXG4gICAgICAgIExvY2tyLnNhZGQoJ2NhdHMnLCBvdXJDYXQpO1xyXG4gICAgICAgIGFsbENhdHMgPSBMb2Nrci5nZXQoJ2NhdHMnKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBjYXRzOiBhbGxDYXRzLFxyXG4gICAgICBzZWFyY2g6ICcnXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgc3RvcmVDYXRzKGNhdHMpIHtcclxuICAgIExvY2tyLmZsdXNoKCk7XHJcbiAgICBjYXRzLmZvckVhY2goZnVuY3Rpb24obG9jYWxDYXQpIHtcclxuICAgICAgTG9ja3Iuc2FkZCgnY2F0cycsIGxvY2FsQ2F0KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgYWRkVXNlckNhdChuZXdDYXQpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe2NhdHM6IG5ld0NhdC5jb25jYXQodGhpcy5zdGF0ZS5jYXRzKX0pO1xyXG4gIH1cclxuXHJcbiAgLy8gRXZlcnkgdGltZSB0aGlzLnN0YXRlLmNhdHMgY2hhbmdlcywgdXBkYXRlIGxvY2FsIHN0b3JhZ2VcclxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlN0YXRlPXRoaXMuc3RhdGUuY2F0cykge1xyXG4gICAgdGhpcy5zdG9yZUNhdHModGhpcy5zdGF0ZS5jYXRzKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZVNlYXJjaChuZXdTZWFyY2gpIHtcclxuICAgIG5ld1NlYXJjaC50b0xvd2VyQ2FzZSgpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7c2VhcmNoOiBuZXdTZWFyY2h9KTtcclxuICB9XHJcblxyXG4gIGNsZWFyU2VhcmNoKCl7XHJcbiAgICB0aGlzLnVwZGF0ZVNlYXJjaCgnJyk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxIZWFkZXIgY2xlYXJTZWFyY2g9e3RoaXMuY2xlYXJTZWFyY2guYmluZCh0aGlzKX0gLz5cclxuICAgICAgICA8TW9kYWxcclxuICAgICAgICAgIGFkZFVzZXJDYXQ9e3RoaXMuYWRkVXNlckNhdC5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgY2F0cz17dGhpcy5zdGF0ZS5jYXRzfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPFJlc3VsdHNcclxuICAgICAgICAgIGNsZWFyU2VhcmNoPXt0aGlzLmNsZWFyU2VhcmNoLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICB1cGRhdGVTZWFyY2g9e3RoaXMudXBkYXRlU2VhcmNoLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICBzZWFyY2g9e3RoaXMuc3RhdGUuc2VhcmNofVxyXG4gICAgICAgICAgY2F0cz17dGhpcy5zdGF0ZS5jYXRzfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPEZvb3RlciAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBhcHAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJyk7XHJcbnJlbmRlcig8QXBwIC8+LCBhcHApO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge3JlbmRlcn0gZnJvbSAncmVhY3QtZG9tJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvb3RlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxmb290ZXIgY2xhc3NOYW1lPVwicGFnZS1mb290ZXIgYmx1ZSBkYXJrZW4tMlwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwid2hpdGUtdGV4dFwiPkNhdFBob3RvQXBwPC9oNT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZ3JleS10ZXh0IHRleHQtbGlnaHRlbi00XCI+Q2F0UGhvdG9BcHAgaGFzIGJlZW4gY3JlYXRlZCB0byBmb3JtIHBhcnQgb2YgdGhlIDxhIGhyZWY9XCJodHRwczovL2ZyZWVjb2RlY2FtcC5jb21cIiB0YXJnZXQ9XCJfYmxhbmtcIj5GcmVlIENvZGUgQ2FtcDwvYT4gY3VycmljdWx1bS48L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlci1jb3B5cmlnaHRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIMKpIDIwMTYgQ2F0UGhvdG9BcHBcclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZ3JleS10ZXh0IHRleHQtbGlnaHRlbi00IHJpZ2h0XCIgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9hdGpvbmF0aGFuL2NhdHBob3RvYXBwL1wiPkdpdEh1YjwvYT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Zvb3Rlcj5cclxuICAgICk7XHJcbiAgfVxyXG5cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge3JlbmRlcn0gZnJvbSAncmVhY3QtZG9tJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5hdmJhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPG5hdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi13cmFwcGVyIGJsdWUgZGFya2VuLTJcIj5cclxuICAgICAgICAgIDxhIGhyZWY9XCIjXCIgb25DbGljaz17dGhpcy5wcm9wcy5jbGVhclNlYXJjaH0gY2xhc3NOYW1lPVwiYnJhbmQtbG9nb1wiPiZuYnNwOyZuYnNwOyZuYnNwO0NhdFBob3RvQXBwPC9hPlxyXG4gICAgICAgICAgPGEgaHJlZj1cIiNcIiBkYXRhLWFjdGl2YXRlcz1cIm1vYmlsZVwiIGNsYXNzTmFtZT1cImJ1dHRvbi1jb2xsYXBzZVwiPjxpIGNsYXNzTmFtZT1cImZhIGZhLWJhcnNcIj48L2k+PC9hPlxyXG4gICAgICAgICAgPHVsIGlkPVwibmF2LW1vYmlsZVwiIGNsYXNzTmFtZT1cInJpZ2h0IGhpZGUtb24tbWVkLWFuZC1kb3duXCI+XHJcbiAgICAgICAgICAgIDxsaT48YSBjbGFzc05hbWU9XCJtb2RhbC10cmlnZ2VyXCIgaHJlZj1cIiNhZGRDYXRNb2RhbFwiPkFkZCBDYXQgUGhvdG88L2E+PC9saT5cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwic2lkZS1uYXZcIiBpZD1cIm1vYmlsZVwiPlxyXG4gICAgICAgICAgICA8bGk+PGEgY2xhc3NOYW1lPVwibW9kYWwtdHJpZ2dlclwiIGhyZWY9XCIjYWRkQ2F0TW9kYWxcIj5BZGQgQ2F0IFBob3RvPC9hPjwvbGk+XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L25hdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7cmVuZGVyfSBmcm9tICdyZWFjdC1kb20nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9kYWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuc3RhdGUgPXtcclxuICAgICAgdmFsaWRUaXRsZTogXCJ2YWxpZGF0ZVwiLFxyXG4gICAgICBjYXRJZDogXCJOb3RVcGRhdGVkXCJcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBpc1RpdGxlVmFsaWQoKSB7XHJcbiAgICBsZXQgaWQgPSB0aGlzLnJlZnMudGl0bGUudmFsdWUucmVwbGFjZSgvXFxzKy9nLCAnJyksXHJcbiAgICAgICAgZXhpc3RpbmdJZHMgPSBbXTtcclxuICAgIHRoaXMucHJvcHMuY2F0cy5mb3JFYWNoKChjYXQpID0+e1xyXG4gICAgICBleGlzdGluZ0lkcy5wdXNoKGNhdC5pZCk7XHJcbiAgICB9KTtcclxuICAgIGlmKGV4aXN0aW5nSWRzLmluZGV4T2YoaWQpID09PSAtMSl7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2NhdElkOiBpZH0pO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHt2YWxpZFRpdGxlOiBcInZhbGlkYXRlIHZhbGlkXCJ9KTtcclxuICAgIH1lbHNle1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHt2YWxpZFRpdGxlOiBcInZhbGlkYXRlIGludmFsaWRcIn0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXBsb2FkZWRVc2VyQ2F0KGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGxldCB0YWdzID0gdGhpcy5yZWZzLnRhZ3MudmFsdWUuc3BsaXQoJywnKSxcclxuICAgICAgICBjbGVhblRhZ3MgPSBbXSxcclxuICAgICAgICBmb3JtYXRUYWdzID0gdGFncy5mb3JFYWNoKGZ1bmN0aW9uKHRhZyl7XHJcbiAgICAgICAgICBjbGVhblRhZ3MucHVzaCh0YWcudHJpbSgpKTtcclxuICAgICAgICB9KTtcclxuICAgIGZvcihsZXQgYSA9IDA7IGEgPCBjbGVhblRhZ3MubGVuZ3RoOyBhKyspe1xyXG4gICAgICBpZiAoY2xlYW5UYWdzW2FdID09PSBcIlwiIHx8XHJcbiAgICAgIChjbGVhblRhZ3NbYV0ubWF0Y2goL1xccyovKSAmJlxyXG4gICAgICAhY2xlYW5UYWdzW2FdLm1hdGNoKC9bXFx3XFwuXFxcXCxcXC9cXCNcXCFcXD9cXMKjPFxcPlxcJFxcJVxcXlxcJlxcKlxcO1xcOlxce1xcfVxcPVxcLVxcX1xcYFxcflxcKFxcKV0vaSkpKSB7XHJcbiAgICAgICAgY2xlYW5UYWdzLnNwbGljZShhLCAxKTtcclxuICAgICAgICBhID0gMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgbGV0IHVybCA9IHRoaXMucmVmcy51cmwudmFsdWUsXHJcbiAgICAgICAgY2xlYW5Vcmw7XHJcbiAgICBpZiAodXJsLm1hdGNoKC8oanBnfHBuZ3xnaWYpJC9pKSkge1xyXG4gICAgICBjbGVhblVybCA9IHVybDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNsZWFuVXJsID0gXCJwdWJsaWMvaW1nL3JlcGxhY2VtZW50Q2F0LmpwZ1wiO1xyXG4gICAgfVxyXG4gICAgbGV0IG5ld0NhdCA9IFt7XHJcbiAgICAgIGlkOiB0aGlzLnN0YXRlLmNhdElkLFxyXG4gICAgICB0aXRsZTogdGhpcy5yZWZzLnRpdGxlLnZhbHVlLFxyXG4gICAgICB1cmw6IGNsZWFuVXJsLFxyXG4gICAgICB0YWdzOiBjbGVhblRhZ3MsXHJcbiAgICAgIGxpa2VzOiAxXHJcbiAgICB9XTtcclxuICAgIHRoaXMucHJvcHMuYWRkVXNlckNhdChuZXdDYXQpO1xyXG4gICAgLy8gQ2xlYXIgZm9ybSBmaWVsZHNcclxuICAgIHRoaXMucmVmcy50aXRsZS52YWx1ZSA9ICcnO1xyXG4gICAgdGhpcy5yZWZzLnVybC52YWx1ZSA9ICcnO1xyXG4gICAgdGhpcy5yZWZzLnRhZ3MudmFsdWUgPSAnJztcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICBcdFx0PGRpdiBpZD1cImFkZENhdE1vZGFsXCIgY2xhc3NOYW1lPVwibW9kYWxcIj5cclxuICAgIFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudFwiPlxyXG4gICAgXHRcdFx0XHQ8aDQ+QWRkIENhdCBQaG90bzwvaDQ+XHJcbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLnVwbG9hZGVkVXNlckNhdC5iaW5kKHRoaXMpfT5cclxuICAgIFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbnB1dC1maWVsZCBjb2wgczEyXCI+XHJcbiAgICBcdFx0XHRcdFx0XHRcdDxpbnB1dCBjbGFzc05hbWU9e3RoaXMuc3RhdGUudmFsaWRUaXRsZX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5pc1RpdGxlVmFsaWQuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIFRpdGxlXCIgcmVmPVwidGl0bGVcIiBpZD1cInRpdGxlXCIgdHlwZT1cInRleHRcIiByZXF1aXJlZCAvPlxyXG4gICAgXHRcdFx0XHRcdFx0XHQ8bGFiZWwgaHRtbEZvcj1cInRpdGxlXCIgZGF0YS1lcnJvcj1cIkNhdCB0aXRsZSBoYXMgYmVlbiB0YWtlblwiIGRhdGEtc3VjY2Vzcz1cIkNhdCB0aXRsZSBpcyBmcmVlIHRvIHVzZVwiPlRpdGxlPC9sYWJlbD5cclxuICAgIFx0XHRcdFx0XHRcdDwvZGl2PlxyXG4gICAgXHRcdFx0XHRcdDwvZGl2PlxyXG4gICAgXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICBcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWZpZWxkIGNvbCBzMTJcIj5cclxuICAgIFx0XHRcdFx0XHRcdFx0PGlucHV0IHBsYWNlaG9sZGVyPVwiRW50ZXIgVVJMXCIgcmVmPVwidXJsXCIgaWQ9XCJ1cmxcIiB0eXBlPVwidXJsXCIgY2xhc3NOYW1lPVwidmFsaWRhdGVcIiByZXF1aXJlZCAvPlxyXG4gICAgXHRcdFx0XHRcdFx0XHQ8bGFiZWwgaHRtbEZvcj1cInVybFwiIGRhdGEtZXJyb3I9XCJQbGVhc2UgdXBsb2FkIGEgR0lGLCBQTkcgb3IgSlBHXCIgZGF0YS1zdWNjZXNzPVwiVGhhdHMgYSBVUkwgZm9yIHN1cmUhIEkgaG9wZSBpdCBlbmRzIGluIEdJRiwgUE5HIG9yIEpQRy4uLlwiPkNhdCBQaG90byBVUkw8L2xhYmVsPlxyXG4gICAgXHRcdFx0XHRcdFx0PC9kaXY+XHJcbiAgICBcdFx0XHRcdFx0PC9kaXY+XHJcbiAgICBcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgIFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZmllbGQgY29sIHM2XCI+XHJcbiAgICBcdFx0XHRcdFx0XHRcdDxpbnB1dCBwbGFjZWhvbGRlcj1cIlNlcGFyYXRlIHRhZ3Mgd2l0aCBhIGNvbW1hXCIgcmVmPVwidGFnc1wiIGlkPVwidGFnc1wiIHR5cGU9XCJ0ZXh0XCIgcmVxdWlyZWQgLz5cclxuICAgIFx0XHRcdFx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9XCJ0YWdzXCI+VGFnczwvbGFiZWw+XHJcbiAgICBcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuICAgIFx0XHRcdFx0XHQ8L2Rpdj5cclxuICAgIFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgXHRcdFx0XHRcdFx0PGJ1dHRvbiBpZD1cInN1Ym1pdC1idG5cIiBjbGFzc05hbWU9XCJidG4gd2F2ZXMtZWZmZWN0IHdhdmVzLWJsdWUgYmx1ZSBkYXJrZW4tMSBzdWJtaXRcIiB0eXBlPVwic3VibWl0XCIgbmFtZT1cImFjdGlvblwiPlxyXG4gICAgXHRcdFx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9XCJmYSBmYS1zZW5kXCI+PC9pPlxyXG4gICAgXHRcdFx0XHRcdFx0XHQmbmJzcDtTdWJtaXRcclxuICAgIFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxyXG4gICAgXHRcdFx0XHRcdDwvZGl2PlxyXG4gICAgXHRcdFx0XHQ8L2Zvcm0+XHJcbiAgICBcdFx0XHQ8L2Rpdj5cclxuICAgIFx0XHQ8L2Rpdj5cclxuICAgIFx0PC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge3JlbmRlcn0gZnJvbSAncmVhY3QtZG9tJztcclxuaW1wb3J0IENhcmQgZnJvbSAnLi9SZXN1bHRzL0NhcmQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVzdWx0cyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgYW5pbWF0ZUNsYXNzOiBcIlwiXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgc2VhcmNoQnlJbnB1dCgpIHtcclxuICAgIHRoaXMucHJvcHMudXBkYXRlU2VhcmNoKHRoaXMucmVmcy5zZWFyY2gudmFsdWUudG9Mb3dlckNhc2UoKSk7XHJcbiAgICBpZiAodGhpcy5wcm9wcy5zZWFyY2gubGVuZ3RoID4gMSl7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2FuaW1hdGVDbGFzczogXCJhbmltYXRlXCJ9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNlYXJjaEJ5VGFnKHRhZykge1xyXG4gICAgdGhpcy5wcm9wcy51cGRhdGVTZWFyY2godGFnLnRvTG93ZXJDYXNlKCkpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7YW5pbWF0ZUNsYXNzOiBcImFuaW1hdGVcIn0pO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgbGV0IHByZUZpbHRlcmVkQ2F0cyA9IHRoaXMucHJvcHMuY2F0cy5maWx0ZXIoKGNhdCkgPT4ge1xyXG4gICAgICBsZXQgbG93ZXJUYWdzID0gW107XHJcbiAgICAgIGxldCBmb3JtYXRUYWdzID0gY2F0LnRhZ3MuZm9yRWFjaCgodGFnKSA9PiB7XHJcbiAgICAgICAgbG93ZXJUYWdzLnB1c2godGFnLnRvTG93ZXJDYXNlKCkpO1xyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIChsb3dlclRhZ3MuaW5kZXhPZih0aGlzLnByb3BzLnNlYXJjaCkgIT09IC0xKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGxldCBmaWx0ZXJlZENhdHM7XHJcblxyXG4gICAgaWYgKHByZUZpbHRlcmVkQ2F0cy5sZW5ndGggPT09IDApIHtcclxuICAgICAgZmlsdGVyZWRDYXRzID0gdGhpcy5wcm9wcy5jYXRzO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZmlsdGVyZWRDYXRzID0gcHJlRmlsdGVyZWRDYXRzO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWZpZWxkIGNvbCBzMTJcIj5cclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17XCJjbGVhci1pY29uIHByZWZpeCBcIiArICh0aGlzLnN0YXRlLmFuaW1hdGVDbGFzcyl9XHJcbiAgICAgICAgICAgICAgc3JjPVwicHVibGljL2ltZy9pY29ucy9pY19sb3VwZV9ibGFja18yNHB4LnN2Z1wiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5wcm9wcy5jbGVhclNlYXJjaH1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGZvciBjYXQgdGFncyBoZXJlLCBvciBjbGljayBvbiBhIGNhdCB0YWcuLi5cIlxyXG4gICAgICAgICAgICAgIHJlZj1cInNlYXJjaFwiXHJcbiAgICAgICAgICAgICAgaWQ9XCJzZWFyY2hCYXJcIlxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnNlYXJjaEJ5SW5wdXQuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5wcm9wcy5zZWFyY2h9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVzdWx0c1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAge2ZpbHRlcmVkQ2F0cy5tYXAoKGNhdCkgPT4ge1xyXG4gICAgICAgICAgICAgIHJldHVybiA8Q2FyZFxyXG4gICAgICAgICAgICAgICAgICAgICAgc2VhcmNoQnlUYWc9e3RoaXMuc2VhcmNoQnlUYWcuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgICAgIGtleT17Y2F0LmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2F0PXtjYXR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPjtcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge3JlbmRlcn0gZnJvbSAncmVhY3QtZG9tJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFjdGlvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGlkOiBwcm9wcy5pZCxcclxuICAgICAgbGlrZXM6IHByb3BzLmxpa2VzXHJcbiAgICB9O1xyXG4gICAgdGhpcy5oYW5kbGVDbGljayA9IHRoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKTtcclxuICB9XHJcbiAgaGFuZGxlQ2xpY2soKSB7XHJcbiAgICBsZXQgY2F0SWQgPSB0aGlzLnN0YXRlLmlkLFxyXG4gICAgICAgIGxvY2FsQ2F0cyA9IExvY2tyLmdldCgnY2F0cycpLFxyXG4gICAgICAgIGluZGV4O1xyXG4gICAgLy8gdXBkYXRlIGxpa2UgYnV0dG9uIGxpa2VzXHJcbiAgICB0aGlzLnNldFN0YXRlKHtsaWtlczogdGhpcy5zdGF0ZS5saWtlcyArIDF9KTtcclxuICAgIC8vIEZpbmQgY2F0IGlzIGxvY2FsIHN0b3JhZ2UgYW5kIGluY3JlbWVudCBsaWtlc1xyXG4gICAgaW5kZXggPSBsb2NhbENhdHMuZmluZEluZGV4KHggPT4geC5pZCA9PT0gY2F0SWQpO1xyXG4gICAgbG9jYWxDYXRzW2luZGV4XS5saWtlcyA9IHRoaXMuc3RhdGUubGlrZXMgKyAxO1xyXG4gICAgLy8gZW1wdHkgYW5kIHVwZGF0ZSBsb2NhbCBzdG9yYWdlXHJcbiAgICBMb2Nrci5mbHVzaCgpO1xyXG4gICAgbG9jYWxDYXRzLmZvckVhY2goZnVuY3Rpb24obG9jYWxDYXQpe1xyXG4gICAgICBMb2Nrci5zYWRkKCdjYXRzJywgbG9jYWxDYXQpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1hY3Rpb25cIj5cclxuICAgICAgICA8YSBjbGFzc05hbWU9XCJ3YXZlcy1lZmZlY3Qgd2F2ZXMtbGlnaHQgd2F2ZXMtcmVkIHJlZCBkYXJrZW4tMyBidG5cIiBocmVmPXt0aGlzLnByb3BzLnVybH0gZG93bmxvYWQ9e3RoaXMucHJvcHMudXJsfT5cclxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWRvd25sb2FkXCI+PC9pPlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIndhdmVzLWVmZmVjdCB3YXZlcy1saWdodCB3YXZlcy1ibHVlIGJsdWUgZGFya2VuLTMgYnRuXCJcclxuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9PlxyXG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtdGh1bWJzLXVwXCI+PC9pPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGlrZXNfbnVtYmVyXCI+IHt0aGlzLnN0YXRlLmxpa2VzfTwvc3Bhbj5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge3JlbmRlcn0gZnJvbSAncmVhY3QtZG9tJztcclxuaW1wb3J0IEltYWdlIGZyb20gJy4vSW1hZ2UnO1xyXG5pbXBvcnQgQ29udGVudCBmcm9tICcuL0NvbnRlbnQnO1xyXG5pbXBvcnQgQWN0aW9uIGZyb20gJy4vQWN0aW9uJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGNhcmQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIGxldCB7IGNhdCwgc2VhcmNoQnlUYWcgfSA9IHRoaXMucHJvcHM7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBzMyBtNCBzMTJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgaG92ZXJhYmxlXCI+XHJcbiAgICAgICAgICA8SW1hZ2Ugc3JjPXtjYXQudXJsfSAvPlxyXG4gICAgICAgICAgPENvbnRlbnQgc2VhcmNoQnlUYWc9e3NlYXJjaEJ5VGFnfSB0aXRsZT17Y2F0LnRpdGxlfSB0YWdzPXtjYXQudGFnc30gLz5cclxuICAgICAgICAgIDxBY3Rpb24gdXJsPXtjYXQudXJsfSBsaWtlcz17Y2F0Lmxpa2VzfSBpZD17Y2F0LmlkfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7cmVuZGVyfSBmcm9tICdyZWFjdC1kb20nO1xyXG5pbXBvcnQgVGFnIGZyb20gJy4vVGFnJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcmRDb250ZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICB0YWdDbGljayh0YWcpIHtcclxuICAgIHRoaXMucHJvcHMuc2VhcmNoQnlUYWcodGFnKTtcclxuICB9XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWNvbnRlbnRcIj5cclxuICAgICAgICA8aDU+e3RoaXMucHJvcHMudGl0bGV9PC9oNT5cclxuICAgICAgICB7dGhpcy5wcm9wcy50YWdzLm1hcCgodGFnLCBrZXkpID0+IHtcclxuICAgICAgICAgIHJldHVybiA8VGFnIHRhZ0NsaWNrPXt0aGlzLnRhZ0NsaWNrLmJpbmQodGhpcyl9IGtleT17a2V5fSB0YWc9e3RhZ30gLz47XHJcbiAgICAgICAgfSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtyZW5kZXJ9IGZyb20gJ3JlYWN0LWRvbSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBpbWFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAkKCcubWF0ZXJpYWxib3hlZCcpLm1hdGVyaWFsYm94KCk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaW1hZ2VcIj5cclxuICAgICAgICA8aW1nIGNsYXNzTmFtZT1cIm1hdGVyaWFsYm94ZWRcIiBzcmM9e3RoaXMucHJvcHMuc3JjfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7cmVuZGVyfSBmcm9tICdyZWFjdC1kb20nO1xyXG5cclxuY2xhc3MgVGFnIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBnZXRWYWx1ZSgpIHtcclxuICAgIHRoaXMucHJvcHMudGFnQ2xpY2sodGhpcy5wcm9wcy50YWcpO1xyXG4gIH1cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8c3BhbiBvbkNsaWNrPXt0aGlzLmdldFZhbHVlLmJpbmQodGhpcyl9IGNsYXNzTmFtZT1cImNoaXAgYmx1ZSBkYXJrZW4tM1wiPnt0aGlzLnByb3BzLnRhZ308L3NwYW4+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBUYWc7XHJcbiIsImV4cG9ydCBsZXQgY2F0cyA9IHtcclxuXCJjYXRzXCI6IFtcclxuICB7XHJcbiAgICBcImlkXCI6IFwiQ2FtcGVyQ2F0XCIsXHJcbiAgICBcImxpa2VzXCI6IDMsXHJcbiAgICBcInRhZ3NcIjogW1wiQ29kaW5nXCIsXCJHdXJ1XCIsXCJOaW5qYVwiXSxcclxuICAgIFwidGl0bGVcIjogXCJDYW1wZXIgQ2F0XCIsXHJcbiAgICBcInVybFwiOiBcImh0dHBzOi8vbWVkaWEuZ2lwaHkuY29tL21lZGlhL28wdnd6dUZ3Q0dBRk8vZ2lwaHkuZ2lmXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwiaWRcIjogXCJDYXQtaW4tYS1oYXRcIixcclxuICAgIFwibGlrZXNcIjogNyxcclxuICAgIFwidGFnc1wiOiBbXCJDdXRlXCIsIFwiSGF0XCIsIFwiU3RhbmRpbmdcIl0sXHJcbiAgICBcInRpdGxlXCI6IFwiQ2F0LWluLWEtaGF0XCIsXHJcbiAgICBcInVybFwiOiBcImh0dHBzOi8vcy1tZWRpYS1jYWNoZS1hazAucGluaW1nLmNvbS81NjR4LzI3L2RmL2NjLzI3ZGZjYzE3YThjZWZlNTZjOTkyNzdkNjNiZTBkODE1LmpwZ1wiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcImlkXCI6IFwiRmx1ZmZCYWxsXCIsXHJcbiAgICBcImxpa2VzXCI6IDIsXHJcbiAgICBcInRhZ3NcIjpbXCJGbHVmZnlcIiwgXCJOby1sZWdzXCIsIFwiQmFsbFwiLCBcIkZseWluZ1wiXSxcclxuICAgIFwidGl0bGVcIjogXCJGbHVmZiBCYWxsXCIsXHJcbiAgICBcInVybFwiOiBcImh0dHA6Ly93d3cudG9wMTMubmV0L3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE1LzEwL3BlcmZlY3RseS10aW1lZC1mdW5ueS1jYXQtcGljdHVyZXMtNS5qcGdcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJpZFwiOiBcIkdydW1weUNhdFwiLFxyXG4gICAgXCJsaWtlc1wiOiA0LFxyXG4gICAgXCJ0YWdzXCI6IFtcIkdydW1weVwiLCBcIkZ1bm55XCIsIFwiRmFtb3VzXCJdLFxyXG4gICAgXCJ0aXRsZVwiOiBcIkdydW1weSBDYXRcIixcclxuICAgIFwidXJsXCI6IFwiaHR0cDovL2kuZGFpbHltYWlsLmNvLnVrL2kvcGl4LzIwMTQvMDgvMDUvMTQwNzIyNTkzMjA5MV93cHNfNl9TQU5UQV9NT05JQ0FfQ0FfQVVHVVNUXzA0LmpwZ1wiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcImlkXCI6IFwiSGFwcHlDYXRcIixcclxuICAgIFwibGlrZXNcIjogOSxcclxuICAgIFwidGFnc1wiOiBbXCJIYXBweVwiLCBcIldpbmtpbmdcIiwgXCJTbWlsaW5nXCJdLFxyXG4gICAgXCJ0aXRsZVwiOiBcIkhhcHB5IENhdFwiLFxyXG4gICAgXCJ1cmxcIjogXCJodHRwczovL3Bicy50d2ltZy5jb20vcHJvZmlsZV9pbWFnZXMvMjE2NzAzNTg5Ni8xMjNjYXRfNDAweDQwMC5qcGdcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJpZFwiOiBcIkxhdWdoaW5nQ2F0XCIsXHJcbiAgICBcImxpa2VzXCI6IDI3LFxyXG4gICAgXCJ0YWdzXCI6IFtcImxhdWdoaW5nXCIsIFwiRnVubnlcIiwgXCJTbmlja2VyXCJdLFxyXG4gICAgXCJ0aXRsZVwiOiBcIkxhdWdoaW5nIENhdFwiLFxyXG4gICAgXCJ1cmxcIjogXCJodHRwOi8vYmxvZy5uZWtvZmxpZXMuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE0LzAxL2Z1bm55LWNhdC5qcGdcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJpZFwiOiBcIlNjYXJlZHlDYXRcIixcclxuICAgIFwibGlrZXNcIjogMTgsXHJcbiAgICBcInRhZ3NcIjogW1wiSGlkaW5nXCIsIFwiQ3V0ZVwiLCBcIlNjYXJlZFwiXSxcclxuICAgIFwidGl0bGVcIjogXCJTY2FyZWR5IENhdCBcIixcclxuICAgIFwidXJsXCI6IFwiaHR0cHM6Ly9pLnl0aW1nLmNvbS92aS9NRzhLQURpUmJPVS9tYXhyZXNkZWZhdWx0LmpwZ1wiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcImlkXCI6IFwiU2hvY2tlZENhdFwiLFxyXG4gICAgXCJsaWtlc1wiOiAxMSxcclxuICAgIFwidGFnc1wiOiBbXCJXaGF0IGlzIFRIQVQhP1wiLCBcIlNob2NrZWRcIiwgXCJGdW5ueVwiXSxcclxuICAgIFwidGl0bGVcIjogXCJTaG9ja2VkIENhdFwiLFxyXG4gICAgXCJ1cmxcIjogXCJodHRwczovL2kueXRpbWcuY29tL3ZpL2ljcUR4TmFiM0RvL21heHJlc2RlZmF1bHQuanBnXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwiaWRcIjogXCJTbGVlcGluZ0NhdFwiLFxyXG4gICAgXCJsaWtlc1wiOiAyLFxyXG4gICAgXCJ0YWdzXCI6IFtcIlNsZWVwaW5nXCIsIFwiQ3V0ZVwiLCBcIktpdHRlblwiXSxcclxuICAgIFwidGl0bGVcIjogXCJTbGVlcGluZyBDYXRcIixcclxuICAgIFwidXJsXCI6IFwiaHR0cDovL3d3dy5hY3V0ZWFkYXkuY29tL2Jsb2cvd3AtY29udGVudC91cGxvYWRzLzIwMTIvMDkvc2xlZXBpbmcta2l0dHktY2F0LmpwZ1wiXHJcbiAgfVxyXG5dfTtcclxuIl19
