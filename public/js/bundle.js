(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _cats = require('./components/cats');

var _cats2 = _interopRequireDefault(_cats);

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

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* global Lockr, document */


var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    // retrieve cats from local storage
    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    var local = Lockr.get('cats');
    var allCats = void 0;

    if (local) {
      allCats = local;
    } else {
      // if not cats in local storage, put them there
      _cats2.default.cats.forEach(function (ourCat) {
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

  // Every time this.state.cats changes, update local storage


  _createClass(App, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      var prevState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.state.cats;
      // eslint-disable-line no-unused-vars
      this.storeCats(this.state.cats);
    }
  }, {
    key: 'storeCats',
    value: function storeCats(items) {
      Lockr.flush();
      items.forEach(function (localCat) {
        Lockr.sadd('cats', localCat);
      });
    }
  }, {
    key: 'addUserCat',
    value: function addUserCat(newCat) {
      this.setState({ cats: newCat.concat(this.state.cats) });
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

    return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).apply(this, arguments));
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
              {
                className: 'grey-text text-lighten-4'
              },
              'CatPhotoApp has been created to form part of the',
              _react2.default.createElement(
                'a',
                {
                  href: 'https://freecodecamp.com',
                  rel: 'noopener noreferrer',
                  target: '_blank'
                },
                ' Free Code Camp'
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
            '\xA9 2016 CatPhotoApp',
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

var Header = function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
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
            '\xA0\xA0\xA0CatPhotoApp'
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

  return Header;
}(_react2.default.Component);

exports.default = Header;


Header.propTypes = {
  clearSearch: _react2.default.PropTypes.func
};

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

    var _this = _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).call(this));

    _this.state = {
      validTitle: 'validate',
      catId: 'NotUpdated'
    };
    return _this;
  }

  _createClass(Modal, [{
    key: 'isTitleValid',
    value: function isTitleValid() {
      var id = this.title.value.replace(/\s+/g, '');
      var existingIds = [];
      this.props.cats.forEach(function (cat) {
        existingIds.push(cat.id);
      });
      if (existingIds.indexOf(id) === -1) {
        this.setState({ catId: id });
        this.setState({ validTitle: 'validate valid' });
      } else {
        this.setState({ validTitle: 'validate invalid' });
      }
    }
  }, {
    key: 'uploadedUserCat',
    value: function uploadedUserCat(e) {
      e.preventDefault();
      var tags = this.tags.value.split(',');
      var cleanTags = [];

      tags.forEach(function (tag) {
        // eslint-disable-line no-undef
        cleanTags.push(tag.trim());
      });
      for (var a = 0; a < cleanTags.length; a++) {
        if (cleanTags[a] === '' || cleanTags[a].match(/\s*/) && !cleanTags[a].match(/[\w\.\\,\/\?<\$\^\*\{\}\-\(\)]/i)) {
          cleanTags.splice(a, 1);
          a = 0;
        }
      }
      var url = this.url.value;
      var cleanUrl = void 0;
      if (url.match(/(jpg|png|gif)$/i)) {
        cleanUrl = url;
      } else {
        cleanUrl = 'public/img/replacementCat.jpg';
      }
      var newCat = [{
        id: this.state.catId,
        title: this.title.value,
        url: cleanUrl,
        tags: cleanTags,
        likes: 1
      }];
      this.props.addUserCat(newCat);
      // Clear form fields
      this.title.value = '';
      this.url.value = '';
      this.tags.value = '';
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

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
                  _react2.default.createElement('input', {
                    className: this.state.validTitle,
                    onChange: this.isTitleValid.bind(this),
                    placeholder: 'Enter Title',
                    ref: function ref(x) {
                      _this2.title = x;
                    },
                    id: 'title',
                    type: 'text',
                    required: true
                  }),
                  _react2.default.createElement(
                    'label',
                    {
                      htmlFor: 'title',
                      'data-error': 'Cat title has been taken',
                      'data-success': 'Cat title is free to use'
                    },
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
                  _react2.default.createElement('input', {
                    placeholder: 'Enter URL',
                    ref: function ref(x) {
                      _this2.url = x;
                    },
                    id: 'url', type: 'url', className: 'validate', required: true
                  }),
                  _react2.default.createElement(
                    'label',
                    {
                      htmlFor: 'url',
                      'data-error': 'Please upload a GIF, PNG or JPG',
                      'data-success': 'Thats a URL for sure! I hope it ends in GIF, PNG or JPG...'
                    },
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
                  _react2.default.createElement('input', {
                    placeholder: 'Separate tags with a comma',
                    ref: function ref(x) {
                      _this2.tags = x;
                    }, id: 'tags', type: 'text', required: true
                  }),
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
                  {
                    id: 'submit-btn',
                    className: 'btn waves-effect waves-blue blue darken-1 submit',
                    type: 'submit',
                    name: 'action'
                  },
                  _react2.default.createElement('i', { className: 'fa fa-send' }),
                  '\xA0Submit'
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


Modal.propTypes = {
  cats: _react2.default.PropTypes.array,
  addUserCat: _react2.default.PropTypes.func
};

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

    var _this = _possibleConstructorReturn(this, (Results.__proto__ || Object.getPrototypeOf(Results)).call(this));

    _this.state = {
      animateClass: ''
    };
    return _this;
  }

  _createClass(Results, [{
    key: 'searchByInput',
    value: function searchByInput() {
      this.props.updateSearch(this.search.value.toLowerCase());
      if (this.props.search.length > 1) {
        this.setState({ animateClass: 'animate' });
      } else {
        this.setState({ animateClass: '' });
      }
    }
  }, {
    key: 'searchByTag',
    value: function searchByTag(tag) {
      this.props.updateSearch(tag.toLowerCase());
      this.setState({ animateClass: 'animate' });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var preFilteredCats = this.props.cats.filter(function (cat) {
        var lowerTags = [];
        var formatTags = cat.tags.forEach(function (tag) {
          // eslint-disable-line no-unused-vars
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
              className: 'clear-icon prefix ' + this.state.animateClass // eslint-disable-line prefer-template
              , src: 'public/img/icons/ic_loupe_black_24px.svg',
              onClick: this.props.clearSearch,
              role: 'presentation'
            }),
            _react2.default.createElement('input', {
              type: 'text',
              placeholder: 'Search for cat tags here, or click on a cat tag...',
              ref: function ref(x) {
                _this2.search = x;
              },
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


Results.propTypes = {
  updateSearch: _react2.default.PropTypes.func,
  search: _react2.default.PropTypes.string,
  clearSearch: _react2.default.PropTypes.func,
  cats: _react2.default.PropTypes.array
};

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

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* global Lockr */


var Action = function (_React$Component) {
  _inherits(Action, _React$Component);

  function Action(props) {
    _classCallCheck(this, Action);

    var _this = _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).call(this, props));

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
      var catId = this.state.id;
      var localCats = Lockr.get('cats');
      var index = void 0;
      // update like button likes
      this.setState({ likes: this.state.likes + 1 });
      // Find cat is local storage and increment likes
      index = localCats.findIndex(function (x) {
        return x.id === catId;
      }); // eslint-disable-line prefer-const
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
          {
            className: 'waves-effect waves-light waves-red red darken-3 btn',
            href: this.props.url,
            download: this.props.url
          },
          _react2.default.createElement('i', { className: 'fa fa-download' })
        ),
        _react2.default.createElement(
          'button',
          {
            className: 'waves-effect waves-light waves-blue blue darken-3 btn',
            onClick: this.handleClick
          },
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


Action.propTypes = {
  id: _react2.default.PropTypes.string,
  likes: _react2.default.PropTypes.number,
  url: _react2.default.PropTypes.string
};

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

var Card = function (_React$Component) {
  _inherits(Card, _React$Component);

  function Card() {
    _classCallCheck(this, Card);

    return _possibleConstructorReturn(this, (Card.__proto__ || Object.getPrototypeOf(Card)).apply(this, arguments));
  }

  _createClass(Card, [{
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
          _react2.default.createElement(_Image2.default, { alt: cat.title, src: cat.url }),
          _react2.default.createElement(_Content2.default, { searchByTag: searchByTag, title: cat.title, tags: cat.tags }),
          _react2.default.createElement(_Action2.default, { url: cat.url, likes: cat.likes, id: cat.id })
        )
      );
    }
  }]);

  return Card;
}(_react2.default.Component);

exports.default = Card;


Card.propTypes = {
  searchByTag: _react2.default.PropTypes.func,
  cat: _react2.default.PropTypes.object
};

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

var Content = function (_React$Component) {
  _inherits(Content, _React$Component);

  function Content() {
    _classCallCheck(this, Content);

    return _possibleConstructorReturn(this, (Content.__proto__ || Object.getPrototypeOf(Content)).apply(this, arguments));
  }

  _createClass(Content, [{
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

  return Content;
}(_react2.default.Component);

exports.default = Content;


Content.propTypes = {
  searchByTag: _react2.default.PropTypes.func,
  tags: _react2.default.PropTypes.array,
  title: _react2.default.PropTypes.string
};

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

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* global $ */


var Image = function (_React$Component) {
  _inherits(Image, _React$Component);

  function Image() {
    _classCallCheck(this, Image);

    return _possibleConstructorReturn(this, (Image.__proto__ || Object.getPrototypeOf(Image)).apply(this, arguments));
  }

  _createClass(Image, [{
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
        _react2.default.createElement('img', { className: 'materialboxed', alt: this.props.alt, src: this.props.src })
      );
    }
  }]);

  return Image;
}(_react2.default.Component);

exports.default = Image;


Image.propTypes = {
  alt: _react2.default.PropTypes.string,
  src: _react2.default.PropTypes.string
};

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

    return _possibleConstructorReturn(this, (Tag.__proto__ || Object.getPrototypeOf(Tag)).apply(this, arguments));
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


Tag.propTypes = {
  tag: _react2.default.PropTypes.string,
  tagClick: _react2.default.PropTypes.func
};

},{"react":"react","react-dom":"react-dom"}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var cats = { cats: [{
    id: 'CamperCat',
    likes: 3,
    tags: ['Coding', 'Guru', 'Ninja'],
    title: 'Camper Cat',
    url: 'https://media.giphy.com/media/o0vwzuFwCGAFO/giphy.gif'
  }, {
    id: 'Cat-in-a-hat',
    likes: 7,
    tags: ['Cute', 'Hat', 'Standing'],
    title: 'Cat-in-a-hat',
    url: 'https://s-media-cache-ak0.pinimg.com/564x/27/df/cc/27dfcc17a8cefe56c99277d63be0d815.jpg'
  }, {
    id: 'FluffBall',
    likes: 2,
    tags: ['Fluffy', 'No-legs', 'Ball', 'Flying'],
    title: 'Fluff Ball',
    url: 'http://www.top13.net/wp-content/uploads/2015/10/perfectly-timed-funny-cat-pictures-5.jpg'
  }, {
    id: 'GrumpyCat',
    likes: 4,
    tags: ['Grumpy', 'Funny', 'Famous'],
    title: 'Grumpy Cat',
    url: 'http://i.dailymail.co.uk/i/pix/2014/08/05/1407225932091_wps_6_SANTA_MONICA_CA_AUGUST_04.jpg'
  }, {
    id: 'HappyCat',
    likes: 9,
    tags: ['Happy', 'Winking', 'Smiling'],
    title: 'Happy Cat',
    url: 'https://pbs.twimg.com/profile_images/2167035896/123cat_400x400.jpg'
  }, {
    id: 'LaughingCat',
    likes: 27,
    tags: ['laughing', 'Funny', 'Snicker'],
    title: 'Laughing Cat',
    url: 'http://blog.nekoflies.com/wp-content/uploads/2014/01/funny-cat.jpg'
  }, {
    id: 'ScaredyCat',
    likes: 18,
    tags: ['Hiding', 'Cute', 'Scared'],
    title: 'Scaredy Cat ',
    url: 'https://i.ytimg.com/vi/MG8KADiRbOU/maxresdefault.jpg'
  }, {
    id: 'ShockedCat',
    likes: 11,
    tags: ['What is THAT!?', 'Shocked', 'Funny'],
    title: 'Shocked Cat',
    url: 'https://i.ytimg.com/vi/icqDxNab3Do/maxresdefault.jpg'
  }, {
    id: 'SleepingCat',
    likes: 2,
    tags: ['Sleeping', 'Cute', 'Kitten'],
    title: 'Sleeping Cat',
    url: 'http://www.acuteaday.com/blog/wp-content/uploads/2012/09/sleeping-kitty-cat.jpg'
  }]
};

exports.default = cats;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvQXBwLmpzIiwiYXBwL2NvbXBvbmVudHMvRm9vdGVyLmpzIiwiYXBwL2NvbXBvbmVudHMvSGVhZGVyLmpzIiwiYXBwL2NvbXBvbmVudHMvTW9kYWwuanMiLCJhcHAvY29tcG9uZW50cy9SZXN1bHRzLmpzIiwiYXBwL2NvbXBvbmVudHMvUmVzdWx0cy9BY3Rpb24uanMiLCJhcHAvY29tcG9uZW50cy9SZXN1bHRzL0NhcmQuanMiLCJhcHAvY29tcG9uZW50cy9SZXN1bHRzL0NvbnRlbnQuanMiLCJhcHAvY29tcG9uZW50cy9SZXN1bHRzL0ltYWdlLmpzIiwiYXBwL2NvbXBvbmVudHMvUmVzdWx0cy9UYWcuanMiLCJhcHAvY29tcG9uZW50cy9jYXRzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQ0NBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7OzsrZUFQQTs7O0lBU00sRzs7O0FBQ0osaUJBQWM7QUFBQTs7QUFFWjtBQUZZOztBQUdaLFFBQU0sUUFBUSxNQUFNLEdBQU4sQ0FBVSxNQUFWLENBQWQ7QUFDQSxRQUFJLGdCQUFKOztBQUVBLFFBQUksS0FBSixFQUFXO0FBQ1QsZ0JBQVUsS0FBVjtBQUNELEtBRkQsTUFFTztBQUNMO0FBQ0EscUJBQUssSUFBTCxDQUFVLE9BQVYsQ0FBa0Isa0JBQVU7QUFDMUIsY0FBTSxJQUFOLENBQVcsTUFBWCxFQUFtQixNQUFuQjtBQUNBLGtCQUFVLE1BQU0sR0FBTixDQUFVLE1BQVYsQ0FBVjtBQUNELE9BSEQ7QUFJRDtBQUNELFVBQUssS0FBTCxHQUFhO0FBQ1gsWUFBTSxPQURLO0FBRVgsY0FBUTtBQUZHLEtBQWI7QUFmWTtBQW1CYjs7QUFFRDs7Ozs7eUNBQ2dEO0FBQUEsVUFBN0IsU0FBNkIsdUVBQWpCLEtBQUssS0FBTCxDQUFXLElBQU07QUFBRTtBQUNoRCxXQUFL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YUFETjtBQUVFLFdBQU8sQ0FGVDtBQUdFLFVBQU0sQ0FBQyxVQUFELEVBQWEsTUFBYixFQUFxQixRQUFyQixDQUhSO0FBSUUsV0FBTyxjQUpUO0FBS0UsU0FBSztBQUxQLEdBekRrQjtBQUFQLENBQWI7O2tCQW1FZSxJIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8qIGdsb2JhbCBMb2NrciwgZG9jdW1lbnQgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge3JlbmRlcn0gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBjYXRzIGZyb20gJy4vY29tcG9uZW50cy9jYXRzJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9jb21wb25lbnRzL0hlYWRlcic7XG5pbXBvcnQgTW9kYWwgZnJvbSAnLi9jb21wb25lbnRzL01vZGFsJztcbmltcG9ydCBSZXN1bHRzIGZyb20gJy4vY29tcG9uZW50cy9SZXN1bHRzJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9jb21wb25lbnRzL0Zvb3Rlcic7XG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgLy8gcmV0cmlldmUgY2F0cyBmcm9tIGxvY2FsIHN0b3JhZ2VcbiAgICBjb25zdCBsb2NhbCA9IExvY2tyLmdldCgnY2F0cycpO1xuICAgIGxldCBhbGxDYXRzO1xuXG4gICAgaWYgKGxvY2FsKSB7XG4gICAgICBhbGxDYXRzID0gbG9jYWw7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGlmIG5vdCBjYXRzIGluIGxvY2FsIHN0b3JhZ2UsIHB1dCB0aGVtIHRoZXJlXG4gICAgICBjYXRzLmNhdHMuZm9yRWFjaChvdXJDYXQgPT4ge1xuICAgICAgICBMb2Nrci5zYWRkKCdjYXRzJywgb3VyQ2F0KTtcbiAgICAgICAgYWxsQ2F0cyA9IExvY2tyLmdldCgnY2F0cycpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBjYXRzOiBhbGxDYXRzLFxuICAgICAgc2VhcmNoOiAnJyxcbiAgICB9O1xuICB9XG5cbiAgLy8gRXZlcnkgdGltZSB0aGlzLnN0YXRlLmNhdHMgY2hhbmdlcywgdXBkYXRlIGxvY2FsIHN0b3JhZ2VcbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZTdGF0ZSA9IHRoaXMuc3RhdGUuY2F0cykgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gICAgdGhpcy5zdG9yZUNhdHModGhpcy5zdGF0ZS5jYXRzKTtcbiAgfVxuXG4gIHN0b3JlQ2F0cyhpdGVtcykge1xuICAgIExvY2tyLmZsdXNoKCk7XG4gICAgaXRlbXMuZm9yRWFjaChsb2NhbENhdCA9PiB7XG4gICAgICBMb2Nrci5zYWRkKCdjYXRzJywgbG9jYWxDYXQpO1xuICAgIH0pO1xuICB9XG5cbiAgYWRkVXNlckNhdChuZXdDYXQpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtjYXRzOiBuZXdDYXQuY29uY2F0KHRoaXMuc3RhdGUuY2F0cyl9KTtcbiAgfVxuXG4gIHVwZGF0ZVNlYXJjaChuZXdTZWFyY2gpIHtcbiAgICBuZXdTZWFyY2gudG9Mb3dlckNhc2UoKTtcbiAgICB0aGlzLnNldFN0YXRlKHtzZWFyY2g6IG5ld1NlYXJjaH0pO1xuICB9XG5cbiAgY2xlYXJTZWFyY2goKSB7XG4gICAgdGhpcy51cGRhdGVTZWFyY2goJycpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8SGVhZGVyIGNsZWFyU2VhcmNoPXt0aGlzLmNsZWFyU2VhcmNoLmJpbmQodGhpcyl9IC8+XG4gICAgICAgIDxNb2RhbFxuICAgICAgICAgIGFkZFVzZXJDYXQ9e3RoaXMuYWRkVXNlckNhdC5iaW5kKHRoaXMpfVxuICAgICAgICAgIGNhdHM9e3RoaXMuc3RhdGUuY2F0c31cbiAgICAgICAgLz5cbiAgICAgICAgPFJlc3VsdHNcbiAgICAgICAgICBjbGVhclNlYXJjaD17dGhpcy5jbGVhclNlYXJjaC5iaW5kKHRoaXMpfVxuICAgICAgICAgIHVwZGF0ZVNlYXJjaD17dGhpcy51cGRhdGVTZWFyY2guYmluZCh0aGlzKX1cbiAgICAgICAgICBzZWFyY2g9e3RoaXMuc3RhdGUuc2VhcmNofVxuICAgICAgICAgIGNhdHM9e3RoaXMuc3RhdGUuY2F0c31cbiAgICAgICAgLz5cbiAgICAgICAgPEZvb3RlciAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBhcHAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJyk7XG5yZW5kZXIoPEFwcCAvPiwgYXBwKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge3JlbmRlcn0gZnJvbSAncmVhY3QtZG9tJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9vdGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8Zm9vdGVyIGNsYXNzTmFtZT1cInBhZ2UtZm9vdGVyIGJsdWUgZGFya2VuLTJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIndoaXRlLXRleHRcIj5DYXRQaG90b0FwcDwvaDU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgIDxwXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImdyZXktdGV4dCB0ZXh0LWxpZ2h0ZW4tNFwiXG4gICAgICAgICAgICA+XG5cdFx0XHRDYXRQaG90b0FwcCBoYXMgYmVlbiBjcmVhdGVkIHRvIGZvcm0gcGFydCBvZiB0aGVcbiAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mcmVlY29kZWNhbXAuY29tXCJcbiAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICA+IEZyZWUgQ29kZSBDYW1wXG4gICAgICAgICAgICAgIDwvYT4gY3VycmljdWx1bS48L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlci1jb3B5cmlnaHRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgwqkgMjAxNiBDYXRQaG90b0FwcFxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZ3JleS10ZXh0IHRleHQtbGlnaHRlbi00IHJpZ2h0XCIgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9hdGpvbmF0aGFuL2NhdHBob3RvYXBwL1wiPkdpdEh1YjwvYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Zvb3Rlcj5cbiAgICApO1xuICB9XG5cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge3JlbmRlcn0gZnJvbSAncmVhY3QtZG9tJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVhZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8bmF2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi13cmFwcGVyIGJsdWUgZGFya2VuLTJcIj5cbiAgICAgICAgICA8YSBocmVmPVwiI1wiIG9uQ2xpY2s9e3RoaXMucHJvcHMuY2xlYXJTZWFyY2h9IGNsYXNzTmFtZT1cImJyYW5kLWxvZ29cIj4mbmJzcDsmbmJzcDsmbmJzcDtDYXRQaG90b0FwcDwvYT5cbiAgICAgICAgICA8YSBocmVmPVwiI1wiIGRhdGEtYWN0aXZhdGVzPVwibW9iaWxlXCIgY2xhc3NOYW1lPVwiYnV0dG9uLWNvbGxhcHNlXCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtYmFyc1wiIC8+PC9hPlxuICAgICAgICAgIDx1bCBpZD1cIm5hdi1tb2JpbGVcIiBjbGFzc05hbWU9XCJyaWdodCBoaWRlLW9uLW1lZC1hbmQtZG93blwiPlxuICAgICAgICAgICAgPGxpPjxhIGNsYXNzTmFtZT1cIm1vZGFsLXRyaWdnZXJcIiBocmVmPVwiI2FkZENhdE1vZGFsXCI+QWRkIENhdCBQaG90bzwvYT48L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInNpZGUtbmF2XCIgaWQ9XCJtb2JpbGVcIj5cbiAgICAgICAgICAgIDxsaT48YSBjbGFzc05hbWU9XCJtb2RhbC10cmlnZ2VyXCIgaHJlZj1cIiNhZGRDYXRNb2RhbFwiPkFkZCBDYXQgUGhvdG88L2E+PC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbmF2PlxuICAgICk7XG4gIH1cbn1cblxuSGVhZGVyLnByb3BUeXBlcyA9IHtcbiAgY2xlYXJTZWFyY2g6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge3JlbmRlcn0gZnJvbSAncmVhY3QtZG9tJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9kYWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB2YWxpZFRpdGxlOiAndmFsaWRhdGUnLFxuICAgICAgY2F0SWQ6ICdOb3RVcGRhdGVkJyxcbiAgICB9O1xuICB9XG5cbiAgaXNUaXRsZVZhbGlkKCkge1xuICAgIGNvbnN0IGlkID0gdGhpcy50aXRsZS52YWx1ZS5yZXBsYWNlKC9cXHMrL2csICcnKTtcbiAgICBjb25zdCBleGlzdGluZ0lkcyA9IFtdO1xuICAgIHRoaXMucHJvcHMuY2F0cy5mb3JFYWNoKChjYXQpID0+IHtcbiAgICAgIGV4aXN0aW5nSWRzLnB1c2goY2F0LmlkKTtcbiAgICB9KTtcbiAgICBpZiAoZXhpc3RpbmdJZHMuaW5kZXhPZihpZCkgPT09IC0xKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtjYXRJZDogaWR9KTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe3ZhbGlkVGl0bGU6ICd2YWxpZGF0ZSB2YWxpZCd9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7dmFsaWRUaXRsZTogJ3ZhbGlkYXRlIGludmFsaWQnfSk7XG4gICAgfVxuICB9XG5cbiAgdXBsb2FkZWRVc2VyQ2F0KGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgdGFncyA9IHRoaXMudGFncy52YWx1ZS5zcGxpdCgnLCcpO1xuICAgIGNvbnN0IGNsZWFuVGFncyA9IFtdO1xuXG4gICAgdGFncy5mb3JFYWNoKCh0YWcpID0+IHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuICAgICAgY2xlYW5UYWdzLnB1c2godGFnLnRyaW0oKSk7XG4gICAgfSk7XG4gICAgZm9yIChsZXQgYSA9IDA7IGEgPCBjbGVhblRhZ3MubGVuZ3RoOyBhKyspIHtcbiAgICAgIGlmIChjbGVhblRhZ3NbYV0gPT09ICcnIHx8XG4gICAgICAoY2xlYW5UYWdzW2FdLm1hdGNoKC9cXHMqLykgJiZcbiAgICAgICFjbGVhblRhZ3NbYV0ubWF0Y2goL1tcXHdcXC5cXFxcLFxcL1xcPzxcXCRcXF5cXCpcXHtcXH1cXC1cXChcXCldL2kpKSkge1xuICAgICAgICBjbGVhblRhZ3Muc3BsaWNlKGEsIDEpO1xuICAgICAgICBhID0gMDtcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgdXJsID0gdGhpcy51cmwudmFsdWU7XG4gICAgbGV0IGNsZWFuVXJsO1xuICAgIGlmICh1cmwubWF0Y2goLyhqcGd8cG5nfGdpZikkL2kpKSB7XG4gICAgICBjbGVhblVybCA9IHVybDtcbiAgICB9IGVsc2Uge1xuICAgICAgY2xlYW5VcmwgPSAncHVibGljL2ltZy9yZXBsYWNlbWVudENhdC5qcGcnO1xuICAgIH1cbiAgICBjb25zdCBuZXdDYXQgPSBbe1xuICAgICAgaWQ6IHRoaXMuc3RhdGUuY2F0SWQsXG4gICAgICB0aXRsZTogdGhpcy50aXRsZS52YWx1ZSxcbiAgICAgIHVybDogY2xlYW5VcmwsXG4gICAgICB0YWdzOiBjbGVhblRhZ3MsXG4gICAgICBsaWtlczogMSxcbiAgICB9XTtcbiAgICB0aGlzLnByb3BzLmFkZFVzZXJDYXQobmV3Q2F0KTtcbiAgICAvLyBDbGVhciBmb3JtIGZpZWxkc1xuICAgIHRoaXMudGl0bGUudmFsdWUgPSAnJztcbiAgICB0aGlzLnVybC52YWx1ZSA9ICcnO1xuICAgIHRoaXMudGFncy52YWx1ZSA9ICcnO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGlkPVwiYWRkQ2F0TW9kYWxcIiBjbGFzc05hbWU9XCJtb2RhbFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudFwiPlxuICAgICAgICAgICAgPGg0PkFkZCBDYXQgUGhvdG88L2g0PlxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMudXBsb2FkZWRVc2VyQ2F0LmJpbmQodGhpcyl9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZmllbGQgY29sIHMxMlwiPlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17dGhpcy5zdGF0ZS52YWxpZFRpdGxlfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5pc1RpdGxlVmFsaWQuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBUaXRsZVwiXG4gICAgICAgICAgICAgICAgICAgIHJlZj17KHgpID0+IHsgdGhpcy50aXRsZSA9IHg7IH19XG4gICAgICAgICAgICAgICAgICAgIGlkPVwidGl0bGVcIlxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJ0aXRsZVwiXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtZXJyb3I9XCJDYXQgdGl0bGUgaGFzIGJlZW4gdGFrZW5cIlxuICAgICAgICAgICAgICAgICAgICBkYXRhLXN1Y2Nlc3M9XCJDYXQgdGl0bGUgaXMgZnJlZSB0byB1c2VcIlxuICAgICAgICAgICAgICAgICAgPlRpdGxlXG4gICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWZpZWxkIGNvbCBzMTJcIj5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIFVSTFwiXG4gICAgICAgICAgICAgICAgICAgIHJlZj17KHgpID0+IHsgdGhpcy51cmwgPSB4OyB9fVxuICAgICAgICAgICAgICAgICAgICBpZD1cInVybFwiIHR5cGU9XCJ1cmxcIiBjbGFzc05hbWU9XCJ2YWxpZGF0ZVwiIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJ1cmxcIlxuICAgICAgICAgICAgICAgICAgICBkYXRhLWVycm9yPVwiUGxlYXNlIHVwbG9hZCBhIEdJRiwgUE5HIG9yIEpQR1wiXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtc3VjY2Vzcz1cIlRoYXRzIGEgVVJMIGZvciBzdXJlISBJIGhvcGUgaXQgZW5kcyBpbiBHSUYsIFBORyBvciBKUEcuLi5cIlxuICAgICAgICAgICAgICAgICAgPkNhdCBQaG90byBVUkxcbiAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZmllbGQgY29sIHM2XCI+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZXBhcmF0ZSB0YWdzIHdpdGggYSBjb21tYVwiXG4gICAgICAgICAgICAgICAgICAgIHJlZj17KHgpID0+IHsgdGhpcy50YWdzID0geDsgfX0gaWQ9XCJ0YWdzXCIgdHlwZT1cInRleHRcIiByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidGFnc1wiPlRhZ3M8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBpZD1cInN1Ym1pdC1idG5cIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIHdhdmVzLWVmZmVjdCB3YXZlcy1ibHVlIGJsdWUgZGFya2VuLTEgc3VibWl0XCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgICAgbmFtZT1cImFjdGlvblwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtc2VuZFwiIC8+XG4gICAgICAgICAgICAgICAgICAmbmJzcDtTdWJtaXRcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5Nb2RhbC5wcm9wVHlwZXMgPSB7XG4gIGNhdHM6IFJlYWN0LlByb3BUeXBlcy5hcnJheSxcbiAgYWRkVXNlckNhdDogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7cmVuZGVyfSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IENhcmQgZnJvbSAnLi9SZXN1bHRzL0NhcmQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXN1bHRzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgYW5pbWF0ZUNsYXNzOiAnJyxcbiAgICB9O1xuICB9XG5cbiAgc2VhcmNoQnlJbnB1dCgpIHtcbiAgICB0aGlzLnByb3BzLnVwZGF0ZVNlYXJjaCh0aGlzLnNlYXJjaC52YWx1ZS50b0xvd2VyQ2FzZSgpKTtcbiAgICBpZiAodGhpcy5wcm9wcy5zZWFyY2gubGVuZ3RoID4gMSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7YW5pbWF0ZUNsYXNzOiAnYW5pbWF0ZSd9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7YW5pbWF0ZUNsYXNzOiAnJ30pO1xuICAgIH1cbiAgfVxuXG4gIHNlYXJjaEJ5VGFnKHRhZykge1xuICAgIHRoaXMucHJvcHMudXBkYXRlU2VhcmNoKHRhZy50b0xvd2VyQ2FzZSgpKTtcbiAgICB0aGlzLnNldFN0YXRlKHthbmltYXRlQ2xhc3M6ICdhbmltYXRlJ30pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHByZUZpbHRlcmVkQ2F0cyA9IHRoaXMucHJvcHMuY2F0cy5maWx0ZXIoKGNhdCkgPT4ge1xuICAgICAgY29uc3QgbG93ZXJUYWdzID0gW107XG4gICAgICBjb25zdCBmb3JtYXRUYWdzID0gY2F0LnRhZ3MuZm9yRWFjaCgodGFnKSA9PiB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgICAgICAgbG93ZXJUYWdzLnB1c2godGFnLnRvTG93ZXJDYXNlKCkpO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gKGxvd2VyVGFncy5pbmRleE9mKHRoaXMucHJvcHMuc2VhcmNoKSAhPT0gLTEpO1xuICAgIH0pO1xuXG4gICAgbGV0IGZpbHRlcmVkQ2F0cztcblxuICAgIGlmIChwcmVGaWx0ZXJlZENhdHMubGVuZ3RoID09PSAwKSB7XG4gICAgICBmaWx0ZXJlZENhdHMgPSB0aGlzLnByb3BzLmNhdHM7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZpbHRlcmVkQ2F0cyA9IHByZUZpbHRlcmVkQ2F0cztcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1maWVsZCBjb2wgczEyXCI+XG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17J2NsZWFyLWljb24gcHJlZml4ICcgKyB0aGlzLnN0YXRlLmFuaW1hdGVDbGFzc30gLy8gZXNsaW50LWRpc2FibGUtbGluZSBwcmVmZXItdGVtcGxhdGVcbiAgICAgICAgICAgICAgc3JjPVwicHVibGljL2ltZy9pY29ucy9pY19sb3VwZV9ibGFja18yNHB4LnN2Z1wiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMucHJvcHMuY2xlYXJTZWFyY2h9XG4gICAgICAgICAgICAgIHJvbGU9XCJwcmVzZW50YXRpb25cIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGZvciBjYXQgdGFncyBoZXJlLCBvciBjbGljayBvbiBhIGNhdCB0YWcuLi5cIlxuICAgICAgICAgICAgICByZWY9eyh4KSA9PiB7IHRoaXMuc2VhcmNoID0geDsgfX1cbiAgICAgICAgICAgICAgaWQ9XCJzZWFyY2hCYXJcIlxuICAgICAgICAgICAgICBvbklucHV0PXt0aGlzLnNlYXJjaEJ5SW5wdXQuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgb25LZXlEb3duPXt0aGlzLnNlYXJjaEJ5SW5wdXQuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgdmFsdWU9e3RoaXMucHJvcHMuc2VhcmNofVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVzdWx0c1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICB7ZmlsdGVyZWRDYXRzLm1hcChjYXQgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxDYXJkXG4gICAgICAgICAgICAgICAgICBzZWFyY2hCeVRhZz17dGhpcy5zZWFyY2hCeVRhZy5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICAgICAga2V5PXtjYXQuaWR9XG4gICAgICAgICAgICAgICAgICBjYXQ9e2NhdH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5SZXN1bHRzLnByb3BUeXBlcyA9IHtcbiAgdXBkYXRlU2VhcmNoOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgc2VhcmNoOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICBjbGVhclNlYXJjaDogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gIGNhdHM6IFJlYWN0LlByb3BUeXBlcy5hcnJheSxcbn07XG4iLCIvKiBnbG9iYWwgTG9ja3IgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge3JlbmRlcn0gZnJvbSAncmVhY3QtZG9tJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWN0aW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGlkOiBwcm9wcy5pZCxcbiAgICAgIGxpa2VzOiBwcm9wcy5saWtlcyxcbiAgICB9O1xuICAgIHRoaXMuaGFuZGxlQ2xpY2sgPSB0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcyk7XG4gIH1cbiAgaGFuZGxlQ2xpY2soKSB7XG4gICAgY29uc3QgY2F0SWQgPSB0aGlzLnN0YXRlLmlkO1xuICAgIGNvbnN0IGxvY2FsQ2F0cyA9IExvY2tyLmdldCgnY2F0cycpO1xuICAgIGxldCBpbmRleDtcbiAgICAvLyB1cGRhdGUgbGlrZSBidXR0b24gbGlrZXNcbiAgICB0aGlzLnNldFN0YXRlKHtsaWtlczogdGhpcy5zdGF0ZS5saWtlcyArIDF9KTtcbiAgICAvLyBGaW5kIGNhdCBpcyBsb2NhbCBzdG9yYWdlIGFuZCBpbmNyZW1lbnQgbGlrZXNcbiAgICBpbmRleCA9IGxvY2FsQ2F0cy5maW5kSW5kZXgoeCA9PiB4LmlkID09PSBjYXRJZCk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgcHJlZmVyLWNvbnN0XG4gICAgbG9jYWxDYXRzW2luZGV4XS5saWtlcyA9IHRoaXMuc3RhdGUubGlrZXMgKyAxO1xuICAgIC8vIGVtcHR5IGFuZCB1cGRhdGUgbG9jYWwgc3RvcmFnZVxuICAgIExvY2tyLmZsdXNoKCk7XG4gICAgbG9jYWxDYXRzLmZvckVhY2goKGxvY2FsQ2F0KSA9PiB7XG4gICAgICBMb2Nrci5zYWRkKCdjYXRzJywgbG9jYWxDYXQpO1xuICAgIH0pO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWFjdGlvblwiPlxuICAgICAgICA8YVxuICAgICAgICAgIGNsYXNzTmFtZT1cIndhdmVzLWVmZmVjdCB3YXZlcy1saWdodCB3YXZlcy1yZWQgcmVkIGRhcmtlbi0zIGJ0blwiXG4gICAgICAgICAgaHJlZj17dGhpcy5wcm9wcy51cmx9XG4gICAgICAgICAgZG93bmxvYWQ9e3RoaXMucHJvcHMudXJsfVxuICAgICAgICA+XG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtZG93bmxvYWRcIiAvPlxuICAgICAgICA8L2E+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBjbGFzc05hbWU9XCJ3YXZlcy1lZmZlY3Qgd2F2ZXMtbGlnaHQgd2F2ZXMtYmx1ZSBibHVlIGRhcmtlbi0zIGJ0blwiXG4gICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDbGlja31cbiAgICAgICAgPlxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXRodW1icy11cFwiIC8+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGlrZXNfbnVtYmVyXCI+IHt0aGlzLnN0YXRlLmxpa2VzfTwvc3Bhbj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbkFjdGlvbi5wcm9wVHlwZXMgPSB7XG4gIGlkOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICBsaWtlczogUmVhY3QuUHJvcFR5cGVzLm51bWJlcixcbiAgdXJsOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge3JlbmRlcn0gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBJbWFnZSBmcm9tICcuL0ltYWdlJztcbmltcG9ydCBDb250ZW50IGZyb20gJy4vQ29udGVudCc7XG5pbXBvcnQgQWN0aW9uIGZyb20gJy4vQWN0aW9uJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FyZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7Y2F0LCBzZWFyY2hCeVRhZ30gPSB0aGlzLnByb3BzO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBzMyBtNCBzMTJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGhvdmVyYWJsZVwiPlxuICAgICAgICAgIDxJbWFnZSBhbHQ9e2NhdC50aXRsZX0gc3JjPXtjYXQudXJsfSAvPlxuICAgICAgICAgIDxDb250ZW50IHNlYXJjaEJ5VGFnPXtzZWFyY2hCeVRhZ30gdGl0bGU9e2NhdC50aXRsZX0gdGFncz17Y2F0LnRhZ3N9IC8+XG4gICAgICAgICAgPEFjdGlvbiB1cmw9e2NhdC51cmx9IGxpa2VzPXtjYXQubGlrZXN9IGlkPXtjYXQuaWR9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5DYXJkLnByb3BUeXBlcyA9IHtcbiAgc2VhcmNoQnlUYWc6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICBjYXQ6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QsXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7cmVuZGVyfSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IFRhZyBmcm9tICcuL1RhZyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRlbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICB0YWdDbGljayh0YWcpIHtcbiAgICB0aGlzLnByb3BzLnNlYXJjaEJ5VGFnKHRhZyk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtY29udGVudFwiPlxuICAgICAgICA8aDU+e3RoaXMucHJvcHMudGl0bGV9PC9oNT5cbiAgICAgICAge3RoaXMucHJvcHMudGFncy5tYXAoKHRhZywga2V5KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIDxUYWcgdGFnQ2xpY2s9e3RoaXMudGFnQ2xpY2suYmluZCh0aGlzKX0ga2V5PXtrZXl9IHRhZz17dGFnfSAvPjtcbiAgICAgICAgfSl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbkNvbnRlbnQucHJvcFR5cGVzID0ge1xuICBzZWFyY2hCeVRhZzogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gIHRhZ3M6IFJlYWN0LlByb3BUeXBlcy5hcnJheSxcbiAgdGl0bGU6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG59O1xuIiwiLyogZ2xvYmFsICQgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge3JlbmRlcn0gZnJvbSAncmVhY3QtZG9tJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW1hZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAkKCcubWF0ZXJpYWxib3hlZCcpLm1hdGVyaWFsYm94KCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1pbWFnZVwiPlxuICAgICAgICA8aW1nIGNsYXNzTmFtZT1cIm1hdGVyaWFsYm94ZWRcIiBhbHQ9e3RoaXMucHJvcHMuYWx0fSBzcmM9e3RoaXMucHJvcHMuc3JjfSAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5JbWFnZS5wcm9wVHlwZXMgPSB7XG4gIGFsdDogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgc3JjOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge3JlbmRlcn0gZnJvbSAncmVhY3QtZG9tJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFnIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgZ2V0VmFsdWUoKSB7XG4gICAgdGhpcy5wcm9wcy50YWdDbGljayh0aGlzLnByb3BzLnRhZyk7XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8c3BhbiBvbkNsaWNrPXt0aGlzLmdldFZhbHVlLmJpbmQodGhpcyl9IGNsYXNzTmFtZT1cImNoaXAgYmx1ZSBkYXJrZW4tM1wiPnt0aGlzLnByb3BzLnRhZ308L3NwYW4+XG4gICAgKTtcbiAgfVxufVxuXG5UYWcucHJvcFR5cGVzID0ge1xuICB0YWc6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gIHRhZ0NsaWNrOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbn07XG4iLCJjb25zdCBjYXRzID0ge2NhdHM6IFtcbiAge1xuICAgIGlkOiAnQ2FtcGVyQ2F0JyxcbiAgICBsaWtlczogMyxcbiAgICB0YWdzOiBbJ0NvZGluZycsICdHdXJ1JywgJ05pbmphJ10sXG4gICAgdGl0bGU6ICdDYW1wZXIgQ2F0JyxcbiAgICB1cmw6ICdodHRwczovL21lZGlhLmdpcGh5LmNvbS9tZWRpYS9vMHZ3enVGd0NHQUZPL2dpcGh5LmdpZicsXG4gIH0sXG4gIHtcbiAgICBpZDogJ0NhdC1pbi1hLWhhdCcsXG4gICAgbGlrZXM6IDcsXG4gICAgdGFnczogWydDdXRlJywgJ0hhdCcsICdTdGFuZGluZyddLFxuICAgIHRpdGxlOiAnQ2F0LWluLWEtaGF0JyxcbiAgICB1cmw6ICdodHRwczovL3MtbWVkaWEtY2FjaGUtYWswLnBpbmltZy5jb20vNTY0eC8yNy9kZi9jYy8yN2RmY2MxN2E4Y2VmZTU2Yzk5Mjc3ZDYzYmUwZDgxNS5qcGcnLFxuICB9LFxuICB7XG4gICAgaWQ6ICdGbHVmZkJhbGwnLFxuICAgIGxpa2VzOiAyLFxuICAgIHRhZ3M6IFsnRmx1ZmZ5JywgJ05vLWxlZ3MnLCAnQmFsbCcsICdGbHlpbmcnXSxcbiAgICB0aXRsZTogJ0ZsdWZmIEJhbGwnLFxuICAgIHVybDogJ2h0dHA6Ly93d3cudG9wMTMubmV0L3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE1LzEwL3BlcmZlY3RseS10aW1lZC1mdW5ueS1jYXQtcGljdHVyZXMtNS5qcGcnLFxuICB9LFxuICB7XG4gICAgaWQ6ICdHcnVtcHlDYXQnLFxuICAgIGxpa2VzOiA0LFxuICAgIHRhZ3M6IFsnR3J1bXB5JywgJ0Z1bm55JywgJ0ZhbW91cyddLFxuICAgIHRpdGxlOiAnR3J1bXB5IENhdCcsXG4gICAgdXJsOiAnaHR0cDovL2kuZGFpbHltYWlsLmNvLnVrL2kvcGl4LzIwMTQvMDgvMDUvMTQwNzIyNTkzMjA5MV93cHNfNl9TQU5UQV9NT05JQ0FfQ0FfQVVHVVNUXzA0LmpwZycsXG4gIH0sXG4gIHtcbiAgICBpZDogJ0hhcHB5Q2F0JyxcbiAgICBsaWtlczogOSxcbiAgICB0YWdzOiBbJ0hhcHB5JywgJ1dpbmtpbmcnLCAnU21pbGluZyddLFxuICAgIHRpdGxlOiAnSGFwcHkgQ2F0JyxcbiAgICB1cmw6ICdodHRwczovL3Bicy50d2ltZy5jb20vcHJvZmlsZV9pbWFnZXMvMjE2NzAzNTg5Ni8xMjNjYXRfNDAweDQwMC5qcGcnLFxuICB9LFxuICB7XG4gICAgaWQ6ICdMYXVnaGluZ0NhdCcsXG4gICAgbGlrZXM6IDI3LFxuICAgIHRhZ3M6IFsnbGF1Z2hpbmcnLCAnRnVubnknLCAnU25pY2tlciddLFxuICAgIHRpdGxlOiAnTGF1Z2hpbmcgQ2F0JyxcbiAgICB1cmw6ICdodHRwOi8vYmxvZy5uZWtvZmxpZXMuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE0LzAxL2Z1bm55LWNhdC5qcGcnLFxuICB9LFxuICB7XG4gICAgaWQ6ICdTY2FyZWR5Q2F0JyxcbiAgICBsaWtlczogMTgsXG4gICAgdGFnczogWydIaWRpbmcnLCAnQ3V0ZScsICdTY2FyZWQnXSxcbiAgICB0aXRsZTogJ1NjYXJlZHkgQ2F0ICcsXG4gICAgdXJsOiAnaHR0cHM6Ly9pLnl0aW1nLmNvbS92aS9NRzhLQURpUmJPVS9tYXhyZXNkZWZhdWx0LmpwZycsXG4gIH0sXG4gIHtcbiAgICBpZDogJ1Nob2NrZWRDYXQnLFxuICAgIGxpa2VzOiAxMSxcbiAgICB0YWdzOiBbJ1doYXQgaXMgVEhBVCE/JywgJ1Nob2NrZWQnLCAnRnVubnknXSxcbiAgICB0aXRsZTogJ1Nob2NrZWQgQ2F0JyxcbiAgICB1cmw6ICdodHRwczovL2kueXRpbWcuY29tL3ZpL2ljcUR4TmFiM0RvL21heHJlc2RlZmF1bHQuanBnJyxcbiAgfSxcbiAge1xuICAgIGlkOiAnU2xlZXBpbmdDYXQnLFxuICAgIGxpa2VzOiAyLFxuICAgIHRhZ3M6IFsnU2xlZXBpbmcnLCAnQ3V0ZScsICdLaXR0ZW4nXSxcbiAgICB0aXRsZTogJ1NsZWVwaW5nIENhdCcsXG4gICAgdXJsOiAnaHR0cDovL3d3dy5hY3V0ZWFkYXkuY29tL2Jsb2cvd3AtY29udGVudC91cGxvYWRzLzIwMTIvMDkvc2xlZXBpbmcta2l0dHktY2F0LmpwZycsXG4gIH0sXG5dLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2F0cztcbiJdfQ==
