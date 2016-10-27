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

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(App).call(this));

    var localCustomCats = Lockr.get('customCats');
    var localDefaultCats = Lockr.get('defaultCats');

    if (localDefaultCats === _cats2.default.defaultCats) {
      _this.defaultCats = localDefaultCats;
    } else {
      Lockr.flush();
      _cats2.default.defaultCats.forEach(function (ourCat) {
        Lockr.sadd('defaultCats', ourCat);
      });
      _this.defaultCats = Lockr.get('defaultCats');
    }

    if (localCustomCats) {
      localCustomCats.forEach(function (customCat) {
        Lockr.sadd('customCats', customCat);
      });
      _this.customCats = Lockr.get('customCats');
    } else {
      _this.customCats = [];
    }

    _this.state = {
      defaultCats: _this.defaultCats,
      customCats: _this.customCats,
      search: ''
    };
    return _this;
  }

  // Every time this.state.customCats changes, update local storage


  _createClass(App, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      var prevState = arguments.length <= 0 || arguments[0] === undefined ? this.state.customCats : arguments[0];
      // eslint-disable-line no-unused-vars
      this.storeCats(this.state.customCats);
    }
  }, {
    key: 'storeCats',
    value: function storeCats(items) {
      Lockr.flush();
      _cats2.default.defaultCats.forEach(function (ourCat) {
        Lockr.sadd('defaultCats', ourCat);
      });
      items.forEach(function (localCat) {
        Lockr.sadd('customCats', localCat);
      });
    }
  }, {
    key: 'addUserCat',
    value: function addUserCat(newCat) {
      this.setState({ customCats: newCat.concat(this.state.customCats) });
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
          defaultCats: this.state.defaultCats,
          customCats: this.state.customCats
        }),
        _react2.default.createElement(_Results2.default, {
          clearSearch: this.clearSearch.bind(this),
          updateSearch: this.updateSearch.bind(this),
          search: this.state.search,
          defaultCats: this.state.defaultCats,
          customCats: this.state.customCats
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

var Header = function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Header).apply(this, arguments));
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

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Modal).call(this));

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

      this.props.defaultCats.forEach(function (cat) {
        existingIds.push(cat.id);
      });
      if (this.props.customCats) {
        this.props.customCats.forEach(function (cat) {
          existingIds.push(cat.id);
        });
      }

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


Modal.propTypes = {
  defaultCats: _react2.default.PropTypes.array,
  customCats: _react2.default.PropTypes.array,
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

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Results).call(this));

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

      this.preFilteredDefaultCats = this.props.defaultCats.filter(function (cat) {
        var lowerTags = [];
        cat.tags.forEach(function (tag) {
          lowerTags.push(tag.toLowerCase());
        });
        return lowerTags.indexOf(_this2.props.search) !== -1;
      });

      var filteredDefaultCats = void 0;

      if (this.preFilteredDefaultCats.length === 0) {
        filteredDefaultCats = this.props.defaultCats;
      } else {
        filteredDefaultCats = this.preFilteredDefaultCats;
      }

      if (this.props.customCats) {
        this.preFilteredCustomCats = this.props.customCats.filter(function (cat) {
          var lowerTags = [];
          cat.tags.forEach(function (tag) {
            lowerTags.push(tag.toLowerCase());
          });
          return lowerTags.indexOf(_this2.props.search) !== -1;
        });
      }

      var filteredCustomCats = void 0;

      if (!this.props.customCats) {
        filteredCustomCats = [];
      } else if (this.preFilteredCustomCats.length === 0) {
        filteredCustomCats = this.props.customCats;
      } else {
        filteredCustomCats = this.preFilteredCustomCats;
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
            filteredDefaultCats.map(function (cat) {
              return _react2.default.createElement(_Card2.default, {
                searchByTag: _this2.searchByTag.bind(_this2),
                key: cat.id,
                cat: cat
              });
            }),
            filteredCustomCats.map(function (cat) {
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
  customCats: _react2.default.PropTypes.array,
  defaultCats: _react2.default.PropTypes.array
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
      var catId = this.state.id;

      var defaultCats = Lockr.get('defaultCats');
      var customCats = Lockr.get('customCats');
      var isDefault = false;

      defaultCats.forEach(function (localCat) {
        if (localCat.id === catId) {
          isDefault = true;
        }
      });

      if (isDefault) {
        // Find cat is local storage and increment likes
        var index = defaultCats.findIndex(function (x) {
          return x.id === catId;
        });
        defaultCats[index].likes = this.state.likes + 1;
        Lockr.flush();
        defaultCats.forEach(function (cat) {
          Lockr.sadd('defaultCats', cat);
        });

        if (customCats) {
          customCats.forEach(function (cat) {
            Lockr.sadd('customCats', cat);
          });
        }
      } else {
        // Find cat is local storage and increment likes
        var _index = customCats.findIndex(function (x) {
          return x.id === catId;
        });
        customCats[_index].likes = this.state.likes + 1;
        Lockr.flush();
        customCats.forEach(function (cat) {
          Lockr.sadd('customCats', cat);
        });
        defaultCats.forEach(function (cat) {
          Lockr.sadd('defaultCats', cat);
        });
      }

      // update like button
      this.setState({ likes: this.state.likes + 1 });
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

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Card).apply(this, arguments));
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

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Content).apply(this, arguments));
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

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Image).apply(this, arguments));
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


Tag.propTypes = {
  tag: _react2.default.PropTypes.string,
  tagClick: _react2.default.PropTypes.func
};

},{"react":"react","react-dom":"react-dom"}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var cats = {
  defaultCats: [{
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHBcXEFwcC5qcyIsImFwcFxcY29tcG9uZW50c1xcRm9vdGVyLmpzIiwiYXBwXFxjb21wb25lbnRzXFxIZWFkZXIuanMiLCJhcHBcXGNvbXBvbmVudHNcXE1vZGFsLmpzIiwiYXBwXFxjb21wb25lbnRzXFxSZXN1bHRzLmpzIiwiYXBwXFxjb21wb25lbnRzXFxSZXN1bHRzXFxBY3Rpb24uanMiLCJhcHBcXGNvbXBvbmVudHNcXFJlc3VsdHNcXENhcmQuanMiLCJhcHBcXGNvbXBvbmVudHNcXFJlc3VsdHNcXENvbnRlbnQuanMiLCJhcHBcXGNvbXBvbmVudHNcXFJlc3VsdHNcXEltYWdlLmpzIiwiYXBwXFxjb21wb25lbnRzXFxSZXN1bHRzXFxUYWcuanMiLCJhcHBcXGNvbXBvbmVudHNcXGNhdHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0FDQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7OzhlQVBBOzs7SUFTTSxHOzs7QUFDSixpQkFBYztBQUFBOztBQUFBOztBQUdaLFFBQU0sa0JBQWtCLE1BQU0sR0FBTixDQUFVLFlBQVYsQ0FBeEI7QUFDQSxRQUFNLG1CQUFtQixNQUFNLEdBQU4sQ0FBVSxhQUFWLENBQXpCOztBQUVBLFFBQUkscUJBQXFCLGVBQUssV0FBOUIsRUFBMkM7QUFDekMsWUFBSyxXQUFMLEdBQW1CLGdCQUFuQjtBQUNELEtBRkQsTUFFTztBQUNMLFlBQU0sS0FBTjtBQUNBLHFCQUFLLFdBQUwsQ0FBaUIsT0FBakIsQ0FBeUIsa0JBQVU7QUFDakMsY0FBTSxJQUFOLENBQVcsYUFBWCxFQUEwQixNQUExQjtBQUNELE9BRkQ7QUFHQSxZQUFLLFdBQUwsR0FBbUIsTUFBTSxHQUFOLENBQVUsYUFBVixDQUFuQjtBQUNEOztBQUVELFFBQUksZUFBSixFQUFxQjtBQUNuQixzQkFBZ0IsT0FBaEIsQ0FBd0IscUJBQWE7QUFDbkMsY0FBTSxJQUFOLENBQVcsWUFBWCxFQUF5QixTQUF6QjtBQUNELE9BRkQ7QUFHQSxZQUFLLFVBQUwsR0FBa0IsTUFBTSxHQUFOLENBQVUsWUFBVixDQUFsQjtBQUNELEtBTEQsTUFLTztBQUNMLFlBQUssVUFBTCxHQUFrQixFQUFsQjtBQUNEOztBQUVELFVBQUssS0FBTCxHQUFhO0FBQ1gsbUJBQWEsTUFBSyxXQURQO0FBRVgsa0JBQVksTUFBSyxVQUZOO0FBR1gsY0FBUTtBQUhHLEtBQWI7QUF6Qlk7QUE4QmI7O0FBRUQ7Ozs7O3lDQUNzRDtBQUFBLFVBQW5DLFNBQW1DLHlEQUF2QixLQUFLLEtBQUwsQ0FBVyxVQUFZO0FBQUU7QUFDdEQsV0FBSyxTQUFMLENBQWUsS0FBSyxLQUFMLENBQVcsVUFBMUI7QUFDRDs7OzhCQUVTLEssRUFBTztBQUNmLFlBQU0sS0FBTjtBQUNBLHFCQUFLLFdBQUwsQ0FBaUIsT0FBakIsQ0FBeUIsa0JBQVU7QUFDakMsY0FBTSxJQUFOLENBQVcsYUFBWCxFQUEwQixNQUExQjtBQUNELE9BRkQ7QUFHQSxZQUFNLE9BQU4sQ0FBYyxvQkFBWTtBQUN4QixjQUFNLElBQU4sQ0FBVyxZQUFYLEVBQXlCLFFBQXpCO0FBQ0QsT0FGRDtBQUdEOzs7K0JBRVUsTSxFQUFRO0FBQ2pCLFdBQUssUUFBTCxDQUFjLEVBQUMsWUFBWSxPQUFPLE1BQVAsQ0FBYyxLQUFLLEtBQUwsQ0FBVyxVQUF6QixDQUFiLEVBQWQ7QUFDRDs7O2lDQUVZLFMsRUFBVztBQUN0QixnQkFBVSxXQUFWO0FBQ0EsV0FBSyxRQUFMLENBQWMsRUFBQyxRQUFRLFNBQVQsRUFBZDtBQUNEOzs7a0NBRWE7QUFDWixXQUFLLFlBQUwsQ0FBa0IsRUFBbEI7QUFDRDs7OzZCQUVRO0FBQ1AsYUFDRTtBQUFBO0FBQUE7QUFDRSwwREFBUSxhQUFhLEtBQUssV0FBTCxDQUFpQixJQUFqQixDQUFzQixJQUF0QixDQUFyQixHQURGO0FBRUU7QUFDRSxzQkFBWSxLQUFLLFVBQUwsQ0FBZ0IsSUFBaEIsQ0FBcUIsSUFBckIsQ0FEZDtBQUVFLHVCQUFhLEtBQUssS0FBTCxDQUFXLFdBRjFCO0FBR0Usc0JBQVksS0FBSyxLQUFMLENBQVc7QUFIekIsVUFGRjtBQU9FO0FBQ0UsdUJBQWEsS0FBSyxXQUFMLENBQWlCLElBQWpCLENBQXNCLElBQXRCLENBRGY7QUFFRSx3QkFBYyxLQUFLLFlBQUwsQ0FBa0IsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FGaEI7QUFHRSxrQkFBUSxLQUFLLEtBQUwsQ0FBVyxNQUhyQjtBQUlFLHVCQUFhLEtBQUssS0FBTCxDQUFXLFdBSjFCO0FBS0Usc0JBQVksS0FBSyxLQUFMLENBQVc7QUFMekIsVUFQRjtBQWNFO0FBZEYsT0FERjtBQWtCRDs7OztFQWhGZSxnQkFBTSxTOztBQW1GeEIsSUFBTSxNQUFNLFNBQVMsY0FBVCxDQUF3QixLQUF4QixDQUFaO0FBQ0Esc0JBQU8sOEJBQUMsR0FBRCxPQUFQLEVBQWdCLEdBQWhCOzs7Ozs7Ozs7OztBQzdGQTs7OztBQUNBOzs7Ozs7Ozs7O0lBRXFCLE07Ozs7Ozs7Ozs7OzZCQUNWO0FBQ1AsYUFDRTtBQUFBO0FBQUEsVUFBUSxXQUFVLDJCQUFsQjtBQUNFO0FBQUE7QUFBQSxZQUFLLFdBQVUsV0FBZjtBQUNFO0FBQUE7QUFBQSxjQUFLLFdBQVUsS0FBZjtBQUNFO0FBQUE7QUFBQSxnQkFBSSxXQUFVLFlBQWQ7QUFBQTtBQUFBO0FBREYsV0FERjtBQUlFO0FBQUE7QUFBQSxjQUFLLFdBQVUsS0FBZjtBQUNFO0FBQUE7QUFBQTtBQUNFLDJCQUFVO0FBRFo7QUFBQTtBQUlFO0FBQUE7QUFBQTtBQUNFLHdCQUFLLDBCQURQO0FBRUUsdUJBQUkscUJBRk47QUFHRSwwQkFBTztBQUhUO0FBQUE7QUFBQSxlQUpGO0FBQUE7QUFBQTtBQURGO0FBSkYsU0FERjtBQWtCRTtBQUFBO0FBQUEsWUFBSyxXQUFVLGtCQUFmO0FBQ0U7QUFBQTtBQUFBLGNBQUssV0FBVSxXQUFmO0FBQUE7QUFFRTtBQUFBO0FBQUEsZ0JBQUcsV0FBVSxnQ0FBYixFQUE4QyxNQUFLLDRDQUFuRDtBQUFBO0FBQUE7QUFGRjtBQURGO0FBbEJGLE9BREY7QUEyQkQ7Ozs7RUE3QmlDLGdCQUFNLFM7O2tCQUFyQixNOzs7Ozs7Ozs7OztBQ0hyQjs7OztBQUNBOzs7Ozs7Ozs7O0lBRXFCLE07Ozs7Ozs7Ozs7OzZCQUNWO0FBQ1AsYUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsWUFBSyxXQUFVLDJCQUFmO0FBQ0U7QUFBQTtBQUFBLGNBQUcsTUFBSyxHQUFSLEVBQVksU0FBUyxLQUFLLEtBQUwsQ0FBVyxXQUFoQyxFQUE2QyxXQUFVLFlBQXZEO0FBQUE7QUFBQSxXQURGO0FBRUU7QUFBQTtBQUFBLGNBQUcsTUFBSyxHQUFSLEVBQVksa0JBQWUsUUFBM0IsRUFBb0MsV0FBVSxpQkFBOUM7QUFBZ0UsaURBQUcsV0FBVSxZQUFiO0FBQWhFLFdBRkY7QUFHRTtBQUFBO0FBQUEsY0FBSSxJQUFHLFlBQVAsRUFBb0IsV0FBVSw0QkFBOUI7QUFDRTtBQUFBO0FBQUE7QUFBSTtBQUFBO0FBQUEsa0JBQUcsV0FBVSxlQUFiLEVBQTZCLE1BQUssY0FBbEM7QUFBQTtBQUFBO0FBQUo7QUFERixXQUhGO0FBTUU7QUFBQTtBQUFBLGNBQUksV0FBVSxVQUFkLEVBQXlCLElBQUcsUUFBNUI7QUFDRTtBQUFBO0FBQUE7QUFBSTtBQUFBO0FBQUEsa0JBQUcsV0FBVSxlQUFiLEVBQTZCLE1BQUssY0FBbEM7QUFBQTtBQUFBO0FBQUo7QUFERjtBQU5GO0FBREYsT0FERjtBQWNEOzs7O0VBaEJpQyxnQkFBTSxTOztrQkFBckIsTTs7O0FBbUJyQixPQUFPLFNBQVAsR0FBbUI7QUFDakIsZUFBYSxnQkFBTSxTQUFOLENBQWdCO0FBRFosQ0FBbkI7Ozs7Ozs7Ozs7O0FDdEJBOzs7O0FBQ0E7Ozs7Ozs7Ozs7SUFFcUIsSzs7O0FBQ25CLG1CQUFjO0FBQUE7O0FBQUE7O0FBRVosVUFBSyxLQUFMLEdBQWE7QUFDWCxrQkFBWSxVQUREO0FBRVgsYUFBTztBQUZJLEtBQWI7QUFGWTtBQU1iOzs7O21DQUVjO0FBQ2IsVUFBTSxLQUFLLEtBQUssS0FBTCxDQUFXLEtBQVgsQ0FBaUIsT0FBakIsQ0FBeUIsTUFBekIsRUFBaUMsRUFBakMsQ0FBWDtBQUNBLFVBQU0sY0FBYyxFQUFwQjs7QUFFQSxXQUFLLEtBQUwsQ0FBVyxXQUFYLENBQXVCLE9BQXZCLENBQStCLGVBQU87QUFDcEMsb0JBQVksSUFBWixDQUFpQixJQUFJLEVBQXJCO0FBQ0QsT0FGRDtBQUdBLFVBQUksS0FBSyxLQUFMLENBQVcsVUFBZixFQUEyQjtBQUN6QixhQUFLLEtBQUwsQ0FBVyxVQUFYLENBQXNCLE9BQXRCLENBQThCLGVBQU87QUFDbkMsc0JBQVksSUFBWixDQUFpQixJQUFJLEVBQXJCO0FBQ0QsU0FGRDtBQUdEOztBQUVELFVBQUksWUFBWSxPQUFaLENBQW9CLEVBQXBCLE1BQTRCLENBQUMsQ0FBakMsRUFBb0M7QUFDbEMsYUFBSyxRQUFMLENBQWMsRUFBQyxPQUFPLEVBQVIsRUFBZDtBQUNBLGFBQUssUUFBTCxDQUFjLEVBQUMsWUFBWSxnQkFBYixFQUFkO0FBQ0QsT0FIRCxNQUdPO0FBQ0wsYUFBSyxRQUFMLENBQWMsRUFBQyxZQUFZLGtCQUFiLEVBQWQ7QUFDRDtBQUNGOzs7b0NBRWUsQyxFQUFHO0FBQ2pCLFFBQUUsY0FBRjtBQUNBLFVBQU0sT0FBTyxLQUFLLElBQUwsQ0FBVSxLQUFWLENBQWdCLEtBQWhCLENBQXNCLEdBQXRCLENBQWI7QUFDQSxVQUFNLFlBQVksRUFBbEI7O0FBRUEsV0FBSyxPQUFMLENBQWEsVUFBQyxHQUFELEVBQVM7QUFBRTtBQUN0QixrQkFBVSxJQUFWLENBQWUsSUFBSSxJQUFKLEVBQWY7QUFDRCxPQUZEO0FBR0EsV0FBSyxJQUFJLElBQUksQ0FBYixFQUFnQixJQUFJLFVBQVUsTUFBOUIsRUFBc0MsR0FBdEMsRUFBMkM7QUFDekMsWUFBSSxVQUFVLENBQVYsTUFBaUIsRUFBakIsSUFDSCxVQUFVLENBQVYsRUFBYSxLQUFiLENBQW1CLEtBQW5CLEtBQ0QsQ0FBQyxVQUFVLENBQVYsRUFBYSxLQUFiLENBQW1CLGlDQUFuQixDQUZELEVBRXlEO0FBQ3ZELG9CQUFVLE1BQVYsQ0FBaUIsQ0FBakIsRUFBb0IsQ0FBcEI7QUFDQSxjQUFJLENBQUo7QUFDRDtBQUNGO0FBQ0QsVUFBTSxNQUFNLEtBQUssR0FBTCxDQUFTLEtBQXJCO0FBQ0EsVUFBSSxpQkFBSjtBQUNBLFVBQUksSUFBSSxLQUFKLENBQVUsaUJBQVYsQ0FBSixFQUFrQztBQUNoQyxtQkFBVyxHQUFYO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsbUJBQVcsK0JBQVg7QUFDRDtBQUNELFVBQU0sU0FBUyxDQUFDO0FBQ2QsWUFBSSxLQUFLLEtBQUwsQ0FBVyxLQUREO0FBRWQsZUFBTyxLQUFLLEtBQUwsQ0FBVyxLQUZKO0FBR2QsYUFBSyxRQUhTO0FBSWQsY0FBTSxTQUpRO0FBS2QsZUFBTztBQUxPLE9BQUQsQ0FBZjtBQU9BLFdBQUssS0FBTCxDQUFXLFVBQVgsQ0FBc0IsTUFBdEI7QUFDQTtBQUNBLFdBQUssS0FBTCxDQUFXLEtBQVgsR0FBbUIsRUFBbkI7QUFDQSxXQUFLLEdBQUwsQ0FBUyxLQUFULEdBQWlCLEVBQWpCO0FBQ0EsV0FBSyxJQUFMLENBQVUsS0FBVixHQUFrQixFQUFsQjtBQUNEOzs7NkJBRVE7QUFBQTs7QUFDUCxhQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVUsV0FBZjtBQUNFO0FBQUE7QUFBQSxZQUFLLElBQUcsYUFBUixFQUFzQixXQUFVLE9BQWhDO0FBQ0U7QUFBQTtBQUFBLGNBQUssV0FBVSxlQUFmO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGO0FBRUU7QUFBQTtBQUFBLGdCQUFNLFVBQVUsS0FBSyxlQUFMLENBQXFCLElBQXJCLENBQTBCLElBQTFCLENBQWhCO0FBQ0U7QUFBQTtBQUFBLGtCQUFLLFdBQVUsS0FBZjtBQUNFO0FBQUE7QUFBQSxvQkFBSyxXQUFVLHFCQUFmO0FBQ0U7QUFDRSwrQkFBVyxLQUFLLEtBQUwsQ0FBVyxVQUR4QjtBQUVFLDhCQUFVLEtBQUssWUFBTCxDQUFrQixJQUFsQixDQUF1QixJQUF2QixDQUZaO0FBR0UsaUNBQVksYUFIZDtBQUlFLHlCQUFLLGFBQUMsQ0FBRCxFQUFPO0FBQUUsNkJBQUssS0FBTCxHQUFhLENBQWI7QUFBaUIscUJBSmpDO0FBS0Usd0JBQUcsT0FMTDtBQU1FLDBCQUFLLE1BTlA7QUFPRTtBQVBGLG9CQURGO0FBVUU7QUFBQTtBQUFBO0FBQ0UsK0JBQVEsT0FEVjtBQUVFLG9DQUFXLDBCQUZiO0FBR0Usc0NBQWE7QUFIZjtBQUFBO0FBQUE7QUFWRjtBQURGLGVBREY7QUFvQkU7QUFBQTtBQUFBLGtCQUFLLFdBQVUsS0FBZjtBQUNFO0FBQUE7QUFBQSxvQkFBSyxXQUFVLHFCQUFmO0FBQ0U7QUFDRSxpQ0FBWSxXQURkO0FBRUUseUJBQUssYUFBQyxDQUFELEVBQU87QUFBRSw2QkFBSyxHQUFMLEdBQVcsQ0FBWDtBQUFlLHFCQUYvQjtBQUdFLHdCQUFHLEtBSEwsRUFHVyxNQUFLLEtBSGhCLEVBR3NCLFdBQVUsVUFIaEMsRUFHMkM7QUFIM0Msb0JBREY7QUFNRTtBQUFBO0FBQUE7QUFDRSwrQkFBUSxLQURWO0FBRUUsb0NBQVcsaUNBRmI7QUFHRSxzQ0FBYTtBQUhmO0FBQUE7QUFBQTtBQU5GO0FBREYsZUFwQkY7QUFtQ0U7QUFBQTtBQUFBLGtCQUFLLFdBQVUsS0FBZjtBQUNFO0FBQUE7QUFBQSxvQkFBSyxXQUFVLG9CQUFmO0FBQ0U7QUFDRSxpQ0FBWSw0QkFEZDtBQUVFLHlCQUFLLGFBQUMsQ0FBRCxFQUFPO0FBQUUsNkJBQUssSUFBTCxHQUFZLENBQVo7QUFBZ0IscUJBRmhDLEVBRWtDLElBQUcsTUFGckMsRUFFNEMsTUFBSyxNQUZqRCxFQUV3RDtBQUZ4RCxvQkFERjtBQUtFO0FBQUE7QUFBQSxzQkFBTyxTQUFRLE1BQWY7QUFBQTtBQUFBO0FBTEY7QUFERixlQW5DRjtBQTRDRTtBQUFBO0FBQUEsa0JBQUssV0FBVSxLQUFmO0FBQ0U7QUFBQTtBQUFBO0FBQ0Usd0JBQUcsWUFETDtBQUVFLCtCQUFVLGtEQUZaO0FBR0UsMEJBQUssUUFIUDtBQUlFLDBCQUFLO0FBSlA7QUFNRSx1REFBRyxXQUFVLFlBQWIsR0FORjtBQUFBO0FBQUE7QUFERjtBQTVDRjtBQUZGO0FBREY7QUFERixPQURGO0FBaUVEOzs7O0VBcklnQyxnQkFBTSxTOztrQkFBcEIsSzs7O0FBd0lyQixNQUFNLFNBQU4sR0FBa0I7QUFDaEIsZUFBYSxnQkFBTSxTQUFOLENBQWdCLEtBRGI7QUFFaEIsY0FBWSxnQkFBTSxTQUFOLENBQWdCLEtBRlo7QUFHaEIsY0FBWSxnQkFBTSxTQUFOLENBQWdCO0FBSFosQ0FBbEI7Ozs7Ozs7Ozs7O0FDM0lBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQixPOzs7QUFDbkIscUJBQWM7QUFBQTs7QUFBQTs7QUFFWixVQUFLLEtBQUwsR0FBYTtBQUNYLG9CQUFjO0FBREgsS0FBYjtBQUZZO0FBS2I7Ozs7b0NBRWU7QUFDZCxXQUFLLEtBQUwsQ0FBVyxZQUFYLENBQXdCLEtBQUssTUFBTCxDQUFZLEtBQVosQ0FBa0IsV0FBbEIsRUFBeEI7QUFDQSxVQUFJLEtBQUssS0FBTCxDQUFXLE1BQVgsQ0FBa0IsTUFBbEIsR0FBMkIsQ0FBL0IsRUFBa0M7QUFDaEMsYUFBSyxRQUFMLENBQWMsRUFBQyxjQUFjLFNBQWYsRUFBZDtBQUNELE9BRkQsTUFFTztBQUNMLGFBQUssUUFBTCxDQUFjLEVBQUMsY0FBYyxFQUFmLEVBQWQ7QUFDRDtBQUNGOzs7Z0NBRVcsRyxFQUFLO0FBQ2YsV0FBSyxLQUFMLENBQVcsWUFBWCxDQUF3QixJQUFJLFdBQUosRUFBeEI7QUFDQSxXQUFLLFFBQUwsQ0FBYyxFQUFDLGNBQWMsU0FBZixFQUFkO0FBQ0Q7Ozs2QkFFUTtBQUFBOztBQUNQLFdBQUssc0JBQUwsR0FBOEIsS0FBSyxLQUFMLENBQVcsV0FBWCxDQUF1QixNQUF2QixDQUE4QixlQUFPO0FBQ2pFLFlBQU0sWUFBWSxFQUFsQjtBQUNBLFlBQUksSUFBSixDQUFTLE9BQVQsQ0FBaUIsVUFBQyxHQUFELEVBQVM7QUFDeEIsb0JBQVUsSUFBVixDQUFlLElBQUksV0FBSixFQUFmO0FBQ0QsU0FGRDtBQUdBLGVBQVEsVUFBVSxPQUFWLENBQWtCLE9BQUssS0FBTCxDQUFXLE1BQTdCLE1BQXlDLENBQUMsQ0FBbEQ7QUFDRCxPQU42QixDQUE5Qjs7QUFRQSxVQUFJLDRCQUFKOztBQUVBLFVBQUksS0FBSyxzQkFBTCxDQUE0QixNQUE1QixLQUF1QyxDQUEzQyxFQUE4QztBQUM1Qyw4QkFBc0IsS0FBSyxLQUFMLENBQVcsV0FBakM7QUFDRCxPQUZELE1BRU87QUFDTCw4QkFBc0IsS0FBSyxzQkFBM0I7QUFDRDs7QUFFRCxVQUFJLEtBQUssS0FBTCxDQUFXLFVBQWYsRUFBMkI7QUFDekIsYUFBSyxxQkFBTCxHQUE2QixLQUFLLEtBQUwsQ0FBVyxVQUFYLENBQXNCLE1BQXRCLENBQTZCLGVBQU87QUFDL0QsY0FBTSxZQUFZLEVBQWxCO0FBQ0EsY0FBSSxJQUFKLENBQVMsT0FBVCxDQUFpQixlQUFPO0FBQ3RCLHNCQUFVLElBQVYsQ0FBZSxJQUFJLFdBQUosRUFBZjtBQUNELFdBRkQ7QUFHQSxpQkFBUSxVQUFVLE9BQVYsQ0FBa0IsT0FBSyxLQUFMLENBQVcsTUFBN0IsTUFBeUMsQ0FBQyxDQUFsRDtBQUNELFNBTjRCLENBQTdCO0FBT0Q7O0FBRUQsVUFBSSwyQkFBSjs7QUFFQSxVQUFJLENBQUMsS0FBSyxLQUFMLENBQVcsVUFBaEIsRUFBNEI7QUFDMUIsNkJBQXFCLEVBQXJCO0FBQ0QsT0FGRCxNQUVPLElBQUksS0FBSyxxQkFBTCxDQUEyQixNQUEzQixLQUFzQyxDQUExQyxFQUE2QztBQUNsRCw2QkFBcUIsS0FBSyxLQUFMLENBQVcsVUFBaEM7QUFDRCxPQUZNLE1BRUE7QUFDTCw2QkFBcUIsS0FBSyxxQkFBMUI7QUFDRDs7QUFFRCxhQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVUsV0FBZjtBQUNFO0FBQUE7QUFBQSxZQUFLLFdBQVUsS0FBZjtBQUNFO0FBQUE7QUFBQSxjQUFLLFdBQVUscUJBQWY7QUFDRTtBQUNFLHlCQUFXLHVCQUF1QixLQUFLLEtBQUwsQ0FBVyxZQUFjO0FBRDdELGdCQUVFLEtBQUksMENBRk47QUFHRSx1QkFBUyxLQUFLLEtBQUwsQ0FBVyxXQUh0QjtBQUlFLG9CQUFLO0FBSlAsY0FERjtBQU9FO0FBQ0Usb0JBQUssTUFEUDtBQUVFLDJCQUFZLG9EQUZkO0FBR0UsbUJBQUssYUFBQyxDQUFELEVBQU87QUFBRSx1QkFBSyxNQUFMLEdBQWMsQ0FBZDtBQUFrQixlQUhsQztBQUlFLGtCQUFHLFdBSkw7QUFLRSx1QkFBUyxLQUFLLGFBQUwsQ0FBbUIsSUFBbkIsQ0FBd0IsSUFBeEIsQ0FMWDtBQU1FLHlCQUFXLEtBQUssYUFBTCxDQUFtQixJQUFuQixDQUF3QixJQUF4QixDQU5iO0FBT0UscUJBQU8sS0FBSyxLQUFMLENBQVc7QUFQcEI7QUFQRjtBQURGLFNBREY7QUFvQkU7QUFBQTtBQUFBLFlBQUssV0FBVSxTQUFmO0FBQ0U7QUFBQTtBQUFBLGNBQUssV0FBVSxLQUFmO0FBQ0csZ0NBQW9CLEdBQXBCLENBQXdCLGVBQU87QUFDOUIscUJBQ0U7QUFDRSw2QkFBYSxPQUFLLFdBQUwsQ0FBaUIsSUFBakIsUUFEZjtBQUVFLHFCQUFLLElBQUksRUFGWDtBQUdFLHFCQUFLO0FBSFAsZ0JBREY7QUFPRCxhQVJBLENBREg7QUFVRywrQkFBbUIsR0FBbkIsQ0FBdUIsZUFBTztBQUM3QixxQkFDRTtBQUNFLDZCQUFhLE9BQUssV0FBTCxDQUFpQixJQUFqQixRQURmO0FBRUUscUJBQUssSUFBSSxFQUZYO0FBR0UscUJBQUs7QUFIUCxnQkFERjtBQU9ELGFBUkE7QUFWSDtBQURGO0FBcEJGLE9BREY7QUE2Q0Q7Ozs7RUF4R2tDLGdCQUFNLFM7O2tCQUF0QixPOzs7QUEyR3JCLFFBQVEsU0FBUixHQUFvQjtBQUNsQixnQkFBYyxnQkFBTSxTQUFOLENBQWdCLElBRFo7QUFFbEIsVUFBUSxnQkFBTSxTQUFOLENBQWdCLE1BRk47QUFHbEIsZUFBYSxnQkFBTSxTQUFOLENBQWdCLElBSFg7QUFJbEIsY0FBWSxnQkFBTSxTQUFOLENBQWdCLEtBSlY7QUFLbEIsZUFBYSxnQkFBTSxTQUFOLENBQWdCO0FBTFgsQ0FBcEI7Ozs7Ozs7Ozs7O0FDOUdBOzs7O0FBQ0E7Ozs7Ozs7OzhlQUZBOzs7SUFJcUIsTTs7O0FBQ25CLGtCQUFZLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwwRkFDWCxLQURXOztBQUVqQixVQUFLLEtBQUwsR0FBYTtBQUNYLFVBQUksTUFBTSxFQURDO0FBRVgsYUFBTyxNQUFNO0FBRkYsS0FBYjtBQUlBLFVBQUssV0FBTCxHQUFtQixNQUFLLFdBQUwsQ0FBaUIsSUFBakIsT0FBbkI7QUFOaUI7QUFPbEI7Ozs7a0NBRWE7QUFDWixVQUFNLFFBQVEsS0FBSyxLQUFMLENBQVcsRUFBekI7O0FBRUEsVUFBTSxjQUFjLE1BQU0sR0FBTixDQUFVLGFBQVYsQ0FBcEI7QUFDQSxVQUFNLGFBQWEsTUFBTSxHQUFOLENBQVUsWUFBVixDQUFuQjtBQUNBLFVBQUksWUFBWSxLQUFoQjs7QUFFQSxrQkFBWSxPQUFaLENBQW9CLG9CQUFZO0FBQzlCLFlBQUksU0FBUyxFQUFULEtBQWdCLEtBQXBCLEVBQTJCO0FBQ3pCLHNCQUFZLElBQVo7QUFDRDtBQUNGLE9BSkQ7O0FBTUEsVUFBSSxTQUFKLEVBQWU7QUFDYjtBQUNBLFlBQU0sUUFBUSxZQUFZLFNBQVosQ0FBc0I7QUFBQSxpQkFBSyxFQUFFLEVBQUYsS0FBUyxLQUFkO0FBQUEsU0FBdEIsQ0FBZDtBQUNBLG9CQUFZLEtBQVosRUFBbUIsS0FBbkIsR0FBMkIsS0FBSyxLQUFMLENBQVcsS0FBWCxHQUFtQixDQUE5QztBQUNBLGNBQU0sS0FBTjtBQUNBLG9CQUFZLE9BQVosQ0FBb0IsZUFBTztBQUN6QixnQkFBTSxJQUFOLENBQVcsYUFBWCxFQUEwQixHQUExQjtBQUNELFNBRkQ7O0FBSUEsWUFBSSxVQUFKLEVBQWdCO0FBQ2QscUJBQVcsT0FBWCxDQUFtQixlQUFPO0FBQ3hCLGtCQUFNLElBQU4sQ0FBVyxZQUFYLEVBQXlCLEdBQXpCO0FBQ0QsV0FGRDtBQUdEO0FBQ0YsT0FkRCxNQWNPO0FBQ0w7QUFDQSxZQUFNLFNBQVEsV0FBVyxTQUFYLENBQXFCO0FBQUEsaUJBQUssRUFBRSxFQUFGLEtBQVMsS0FBZDtBQUFBLFNBQXJCLENBQWQ7QUFDQSxtQkFBVyxNQUFYLEVBQWtCLEtBQWxCLEdBQTBCLEtBQUssS0FBTCxDQUFXLEtBQVgsR0FBbUIsQ0FBN0M7QUFDQSxjQUFNLEtBQU47QUFDQSxtQkFBVyxPQUFYLENBQW1CLGVBQU87QUFDeEIsZ0JBQU0sSUFBTixDQUFXLFlBQVgsRUFBeUIsR0FBekI7QUFDRCxTQUZEO0FBR0Esb0JBQVksT0FBWixDQUFvQixlQUFPO0FBQ3pCLGdCQUFNLElBQU4sQ0FBVyxhQUFYLEVBQTBCLEdBQTFCO0FBQ0QsU0FGRDtBQUdEOztBQUVEO0FBQ0EsV0FBSyxRQUFMLENBQWMsRUFBQyxPQUFPLEtBQUssS0FBTCxDQUFXLEtBQVgsR0FBbUIsQ0FBM0IsRUFBZDtBQUNEOzs7NkJBRVE7QUFDUCxhQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVUsYUFBZjtBQUNFO0FBQUE7QUFBQTtBQUNFLHVCQUFVLHFEQURaO0FBRUUsa0JBQU0sS0FBSyxLQUFMLENBQVcsR0FGbkI7QUFHRSxzQkFBVSxLQUFLLEtBQUwsQ0FBVztBQUh2QjtBQUtFLCtDQUFHLFdBQVUsZ0JBQWI7QUFMRixTQURGO0FBUUU7QUFBQTtBQUFBO0FBQ0UsdUJBQVUsdURBRFo7QUFFRSxxQkFBUyxLQUFLO0FBRmhCO0FBSUUsK0NBQUcsV0FBVSxpQkFBYixHQUpGO0FBS0U7QUFBQTtBQUFBLGNBQU0sV0FBVSxjQUFoQjtBQUFBO0FBQWlDLGlCQUFLLEtBQUwsQ0FBVztBQUE1QztBQUxGO0FBUkYsT0FERjtBQWtCRDs7OztFQXpFaUMsZ0JBQU0sUzs7a0JBQXJCLE07OztBQTRFckIsT0FBTyxTQUFQLEdBQW1CO0FBQ2pCLE1BQUksZ0JBQU0sU0FBTixDQUFnQixNQURIO0FBRWpCLFNBQU8sZ0JBQU0sU0FBTixDQUFnQixNQUZOO0FBR2pCLE9BQUssZ0JBQU0sU0FBTixDQUFnQjtBQUhKLENBQW5COzs7Ozs7Ozs7OztBQ2hGQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCLEk7Ozs7Ozs7Ozs7OzZCQUNWO0FBQUEsbUJBQ29CLEtBQUssS0FEekI7QUFBQSxVQUNBLEdBREEsVUFDQSxHQURBO0FBQUEsVUFDSyxXQURMLFVBQ0ssV0FETDs7QUFFUCxhQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVUsZUFBZjtBQUNFO0FBQUE7QUFBQSxZQUFLLFdBQVUsZ0JBQWY7QUFDRSwyREFBTyxLQUFLLElBQUksS0FBaEIsRUFBdUIsS0FBSyxJQUFJLEdBQWhDLEdBREY7QUFFRSw2REFBUyxhQUFhLFdBQXRCLEVBQW1DLE9BQU8sSUFBSSxLQUE5QyxFQUFxRCxNQUFNLElBQUksSUFBL0QsR0FGRjtBQUdFLDREQUFRLEtBQUssSUFBSSxHQUFqQixFQUFzQixPQUFPLElBQUksS0FBakMsRUFBd0MsSUFBSSxJQUFJLEVBQWhEO0FBSEY7QUFERixPQURGO0FBU0Q7Ozs7RUFaK0IsZ0JBQU0sUzs7a0JBQW5CLEk7OztBQWVyQixLQUFLLFNBQUwsR0FBaUI7QUFDZixlQUFhLGdCQUFNLFNBQU4sQ0FBZ0IsSUFEZDtBQUVmLE9BQUssZ0JBQU0sU0FBTixDQUFnQjtBQUZOLENBQWpCOzs7Ozs7Ozs7OztBQ3JCQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUIsTzs7Ozs7Ozs7Ozs7NkJBQ1YsRyxFQUFLO0FBQ1osV0FBSyxLQUFMLENBQVcsV0FBWCxDQUF1QixHQUF2QjtBQUNEOzs7NkJBQ1E7QUFBQTs7QUFDUCxhQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVUsY0FBZjtBQUNFO0FBQUE7QUFBQTtBQUFLLGVBQUssS0FBTCxDQUFXO0FBQWhCLFNBREY7QUFFRyxhQUFLLEtBQUwsQ0FBVyxJQUFYLENBQWdCLEdBQWhCLENBQW9CLFVBQUMsR0FBRCxFQUFNLEdBQU4sRUFBYztBQUNqQyxpQkFBTywrQ0FBSyxVQUFVLE9BQUssUUFBTCxDQUFjLElBQWQsUUFBZixFQUF5QyxLQUFLLEdBQTlDLEVBQW1ELEtBQUssR0FBeEQsR0FBUDtBQUNELFNBRkE7QUFGSCxPQURGO0FBUUQ7Ozs7RUFia0MsZ0JBQU0sUzs7a0JBQXRCLE87OztBQWdCckIsUUFBUSxTQUFSLEdBQW9CO0FBQ2xCLGVBQWEsZ0JBQU0sU0FBTixDQUFnQixJQURYO0FBRWxCLFFBQU0sZ0JBQU0sU0FBTixDQUFnQixLQUZKO0FBR2xCLFNBQU8sZ0JBQU0sU0FBTixDQUFnQjtBQUhMLENBQXBCOzs7Ozs7Ozs7OztBQ25CQTs7OztBQUNBOzs7Ozs7Ozs4ZUFGQTs7O0lBSXFCLEs7Ozs7Ozs7Ozs7O3dDQUNDO0FBQ2xCLFFBQUUsZ0JBQUYsRUFBb0IsV0FBcEI7QUFDRDs7OzZCQUVRO0FBQ1AsYUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFVLFlBQWY7QUFDRSwrQ0FBSyxXQUFVLGVBQWYsRUFBK0IsS0FBSyxLQUFLLEtBQUwsQ0FBVyxHQUEvQyxFQUFvRCxLQUFLLEtBQUssS0FBTCxDQUFXLEdBQXBFO0FBREYsT0FERjtBQUtEOzs7O0VBWGdDLGdCQUFNLFM7O2tCQUFwQixLOzs7QUFjckIsTUFBTSxTQUFOLEdBQWtCO0FBQ2hCLE9BQUssZ0JBQU0sU0FBTixDQUFnQixNQURMO0FBRWhCLE9BQUssZ0JBQU0sU0FBTixDQUFnQjtBQUZMLENBQWxCOzs7Ozs7Ozs7OztBQ2xCQTs7OztBQUNBOzs7Ozs7Ozs7O0lBRXFCLEc7Ozs7Ozs7Ozs7OytCQUNSO0FBQ1QsV0FBSyxLQUFMLENBQVcsUUFBWCxDQUFvQixLQUFLLEtBQUwsQ0FBVyxHQUEvQjtBQUNEOzs7NkJBQ1E7QUFDUCxhQUNFO0FBQUE7QUFBQSxVQUFNLFNBQVMsS0FBSyxRQUFMLENBQWMsSUFBZCxDQUFtQixJQUFuQixDQUFmLEVBQXlDLFdBQVUsb0JBQW5EO0FBQXlFLGFBQUssS0FBTCxDQUFXO0FBQXBGLE9BREY7QUFHRDs7OztFQVI4QixnQkFBTSxTOztrQkFBbEIsRzs7O0FBV3JCLElBQUksU0FBSixHQUFnQjtBQUNkLE9BQUssZ0JBQU0sU0FBTixDQUFnQixNQURQO0FBRWQsWUFBVSxnQkFBTSxTQUFOLENBQWdCO0FBRlosQ0FBaEI7Ozs7Ozs7O0FDZEEsSUFBTSxPQUFPO0FBQ1gsZUFBYSxDQUNYO0FBQ0UsUUFBSSxXQUROO0FBRUUsV0FBTyxDQUZUO0FBR0UsVUFBTSxDQUFDLFFBQUQsRUFBVyxNQUFYLEVBQW1CLE9BQW5CLENBSFI7QUFJRSxXQUFPLFlBSlQ7QUFLRSxTQUFLO0FBTFAsR0FEVyxFQVFYO0FBQ0UsUUFBSSxjQUROO0FBRUUsV0FBTyxDQUZUO0FBR0UsVUFBTSxDQUFDLE1BQUQsRUFBUyxLQUFULEVBQWdCLFVBQWhCLENBSFI7QUFJRSxXQUFPLGNBSlQ7QUFLRSxTQUFLO0FBTFAsR0FSVyxFQWVYO0FBQ0UsUUFBSSxXQUROO0FBRUUsV0FBTyxDQUZUO0FBR0UsVUFBTSxDQUFDLFFBQUQsRUFBVyxTQUFYLEVBQXNCLE1BQXRCLEVBQThCLFFBQTlCLENBSFI7QUFJRSxXQUFPLFlBSlQ7QUFLRSxTQUFLO0FBTFAsR0FmVyxFQXNCWDtBQUNFLFFBQUksV0FETjtBQUVFLFdBQU8sQ0FGVDtBQUdFLFVBQU0sQ0FBQyxRQUFELEVBQVcsT0FBWCxFQUFvQixRQUFwQixDQUhSO0FBSUUsV0FBTyxZQUpUO0FBS0UsU0FBSztBQUxQLEdBdEJXLEVBNkJYO0FBQ0UsUUFBSSxVQUROO0FBRUUsV0FBTyxDQUZUO0FBR0UsVUFBTSxDQUFDLE9BQUQsRUFBVSxTQUFWLEVBQXFCLFNBQXJCLENBSFI7QUFJRSxXQUFPLFdBSlQ7QUFLRSxTQUFLO0FBTFAsR0E3QlcsRUFvQ1g7QUFDRSxRQUFJLGFBRE47QUFFRSxXQUFPLEVBRlQ7QUFHRSxVQUFNLENBQUMsVUFBRCxFQUFhLE9BQWIsRUFBc0IsU0FBdEIsQ0FIUjtBQUlFLFdBQU8sY0FKVDtBQUtFLFNBQUs7QUFMUCxHQXBDVyxFQTJDWDtBQUNFLFFBQUksWUFETjtBQUVFLFdBQU8sRUFGVDtBQUdFLFVBQU0sQ0FBQyxRQUFELEVBQVcsTUFBWCxFQUFtQixRQUFuQixDQUhSO0FBSUUsV0FBTyxjQUpUO0FBS0UsU0FBSztBQUxQLEdBM0NXLEVBa0RYO0FBQ0UsUUFBSSxZQUROO0FBRUUsV0FBTyxFQUZUO0FBR0UsVUFBTSxDQUFDLGdCQUFELEVBQW1CLFNBQW5CLEVBQThCLE9BQTlCLENBSFI7QUFJRSxXQUFPLGFBSlQ7QUFLRSxTQUFLO0FBTFAsR0FsRFcsRUF5RFg7QUFDRSxRQUFJLGFBRE47QUFFRSxXQUFPLENBRlQ7QUFHRSxVQUFNLENBQUMsVUFBRCxFQUFhLE1BQWIsRUFBcUIsUUFBckIsQ0FIUjtBQUlFLFdBQU8sY0FKVDtBQUtFLFNBQUs7QUFMUCxHQXpEVztBQURGLENBQWI7O2tCQW9FZSxJIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8qIGdsb2JhbCBMb2NrciwgZG9jdW1lbnQgKi9cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtyZW5kZXJ9IGZyb20gJ3JlYWN0LWRvbSc7XHJcbmltcG9ydCBjYXRzIGZyb20gJy4vY29tcG9uZW50cy9jYXRzJztcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuL2NvbXBvbmVudHMvSGVhZGVyJztcclxuaW1wb3J0IE1vZGFsIGZyb20gJy4vY29tcG9uZW50cy9Nb2RhbCc7XHJcbmltcG9ydCBSZXN1bHRzIGZyb20gJy4vY29tcG9uZW50cy9SZXN1bHRzJztcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuL2NvbXBvbmVudHMvRm9vdGVyJztcclxuXHJcbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG5cclxuICAgIGNvbnN0IGxvY2FsQ3VzdG9tQ2F0cyA9IExvY2tyLmdldCgnY3VzdG9tQ2F0cycpO1xyXG4gICAgY29uc3QgbG9jYWxEZWZhdWx0Q2F0cyA9IExvY2tyLmdldCgnZGVmYXVsdENhdHMnKTtcclxuXHJcbiAgICBpZiAobG9jYWxEZWZhdWx0Q2F0cyA9PT0gY2F0cy5kZWZhdWx0Q2F0cykge1xyXG4gICAgICB0aGlzLmRlZmF1bHRDYXRzID0gbG9jYWxEZWZhdWx0Q2F0cztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIExvY2tyLmZsdXNoKCk7XHJcbiAgICAgIGNhdHMuZGVmYXVsdENhdHMuZm9yRWFjaChvdXJDYXQgPT4ge1xyXG4gICAgICAgIExvY2tyLnNhZGQoJ2RlZmF1bHRDYXRzJywgb3VyQ2F0KTtcclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMuZGVmYXVsdENhdHMgPSBMb2Nrci5nZXQoJ2RlZmF1bHRDYXRzJyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGxvY2FsQ3VzdG9tQ2F0cykge1xyXG4gICAgICBsb2NhbEN1c3RvbUNhdHMuZm9yRWFjaChjdXN0b21DYXQgPT4ge1xyXG4gICAgICAgIExvY2tyLnNhZGQoJ2N1c3RvbUNhdHMnLCBjdXN0b21DYXQpO1xyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5jdXN0b21DYXRzID0gTG9ja3IuZ2V0KCdjdXN0b21DYXRzJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmN1c3RvbUNhdHMgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBkZWZhdWx0Q2F0czogdGhpcy5kZWZhdWx0Q2F0cyxcclxuICAgICAgY3VzdG9tQ2F0czogdGhpcy5jdXN0b21DYXRzLFxyXG4gICAgICBzZWFyY2g6ICcnLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIC8vIEV2ZXJ5IHRpbWUgdGhpcy5zdGF0ZS5jdXN0b21DYXRzIGNoYW5nZXMsIHVwZGF0ZSBsb2NhbCBzdG9yYWdlXHJcbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZTdGF0ZSA9IHRoaXMuc3RhdGUuY3VzdG9tQ2F0cykgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXHJcbiAgICB0aGlzLnN0b3JlQ2F0cyh0aGlzLnN0YXRlLmN1c3RvbUNhdHMpO1xyXG4gIH1cclxuXHJcbiAgc3RvcmVDYXRzKGl0ZW1zKSB7XHJcbiAgICBMb2Nrci5mbHVzaCgpO1xyXG4gICAgY2F0cy5kZWZhdWx0Q2F0cy5mb3JFYWNoKG91ckNhdCA9PiB7XHJcbiAgICAgIExvY2tyLnNhZGQoJ2RlZmF1bHRDYXRzJywgb3VyQ2F0KTtcclxuICAgIH0pO1xyXG4gICAgaXRlbXMuZm9yRWFjaChsb2NhbENhdCA9PiB7XHJcbiAgICAgIExvY2tyLnNhZGQoJ2N1c3RvbUNhdHMnLCBsb2NhbENhdCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGFkZFVzZXJDYXQobmV3Q2F0KSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtjdXN0b21DYXRzOiBuZXdDYXQuY29uY2F0KHRoaXMuc3RhdGUuY3VzdG9tQ2F0cyl9KTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZVNlYXJjaChuZXdTZWFyY2gpIHtcclxuICAgIG5ld1NlYXJjaC50b0xvd2VyQ2FzZSgpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7c2VhcmNoOiBuZXdTZWFyY2h9KTtcclxuICB9XHJcblxyXG4gIGNsZWFyU2VhcmNoKCkge1xyXG4gICAgdGhpcy51cGRhdGVTZWFyY2goJycpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8SGVhZGVyIGNsZWFyU2VhcmNoPXt0aGlzLmNsZWFyU2VhcmNoLmJpbmQodGhpcyl9IC8+XHJcbiAgICAgICAgPE1vZGFsXHJcbiAgICAgICAgICBhZGRVc2VyQ2F0PXt0aGlzLmFkZFVzZXJDYXQuYmluZCh0aGlzKX1cclxuICAgICAgICAgIGRlZmF1bHRDYXRzPXt0aGlzLnN0YXRlLmRlZmF1bHRDYXRzfVxyXG4gICAgICAgICAgY3VzdG9tQ2F0cz17dGhpcy5zdGF0ZS5jdXN0b21DYXRzfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPFJlc3VsdHNcclxuICAgICAgICAgIGNsZWFyU2VhcmNoPXt0aGlzLmNsZWFyU2VhcmNoLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICB1cGRhdGVTZWFyY2g9e3RoaXMudXBkYXRlU2VhcmNoLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICBzZWFyY2g9e3RoaXMuc3RhdGUuc2VhcmNofVxyXG4gICAgICAgICAgZGVmYXVsdENhdHM9e3RoaXMuc3RhdGUuZGVmYXVsdENhdHN9XHJcbiAgICAgICAgICBjdXN0b21DYXRzPXt0aGlzLnN0YXRlLmN1c3RvbUNhdHN9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IGFwcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKTtcclxucmVuZGVyKDxBcHAgLz4sIGFwcCk7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7cmVuZGVyfSBmcm9tICdyZWFjdC1kb20nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9vdGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8Zm9vdGVyIGNsYXNzTmFtZT1cInBhZ2UtZm9vdGVyIGJsdWUgZGFya2VuLTJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIndoaXRlLXRleHRcIj5DYXRQaG90b0FwcDwvaDU+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZ3JleS10ZXh0IHRleHQtbGlnaHRlbi00XCJcclxuICAgICAgICAgICAgPlxyXG5cdFx0XHRDYXRQaG90b0FwcCBoYXMgYmVlbiBjcmVhdGVkIHRvIGZvcm0gcGFydCBvZiB0aGVcclxuICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vZnJlZWNvZGVjYW1wLmNvbVwiXHJcbiAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcclxuICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgPiBGcmVlIENvZGUgQ2FtcFxyXG4gICAgICAgICAgICAgIDwvYT4gY3VycmljdWx1bS48L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlci1jb3B5cmlnaHRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIMKpIDIwMTYgQ2F0UGhvdG9BcHBcclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZ3JleS10ZXh0IHRleHQtbGlnaHRlbi00IHJpZ2h0XCIgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9hdGpvbmF0aGFuL2NhdHBob3RvYXBwL1wiPkdpdEh1YjwvYT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Zvb3Rlcj5cclxuICAgICk7XHJcbiAgfVxyXG5cclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge3JlbmRlcn0gZnJvbSAncmVhY3QtZG9tJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlYWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPG5hdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi13cmFwcGVyIGJsdWUgZGFya2VuLTJcIj5cclxuICAgICAgICAgIDxhIGhyZWY9XCIjXCIgb25DbGljaz17dGhpcy5wcm9wcy5jbGVhclNlYXJjaH0gY2xhc3NOYW1lPVwiYnJhbmQtbG9nb1wiPiZuYnNwOyZuYnNwOyZuYnNwO0NhdFBob3RvQXBwPC9hPlxyXG4gICAgICAgICAgPGEgaHJlZj1cIiNcIiBkYXRhLWFjdGl2YXRlcz1cIm1vYmlsZVwiIGNsYXNzTmFtZT1cImJ1dHRvbi1jb2xsYXBzZVwiPjxpIGNsYXNzTmFtZT1cImZhIGZhLWJhcnNcIiAvPjwvYT5cclxuICAgICAgICAgIDx1bCBpZD1cIm5hdi1tb2JpbGVcIiBjbGFzc05hbWU9XCJyaWdodCBoaWRlLW9uLW1lZC1hbmQtZG93blwiPlxyXG4gICAgICAgICAgICA8bGk+PGEgY2xhc3NOYW1lPVwibW9kYWwtdHJpZ2dlclwiIGhyZWY9XCIjYWRkQ2F0TW9kYWxcIj5BZGQgQ2F0IFBob3RvPC9hPjwvbGk+XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInNpZGUtbmF2XCIgaWQ9XCJtb2JpbGVcIj5cclxuICAgICAgICAgICAgPGxpPjxhIGNsYXNzTmFtZT1cIm1vZGFsLXRyaWdnZXJcIiBocmVmPVwiI2FkZENhdE1vZGFsXCI+QWRkIENhdCBQaG90bzwvYT48L2xpPlxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9uYXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuSGVhZGVyLnByb3BUeXBlcyA9IHtcclxuICBjbGVhclNlYXJjaDogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7cmVuZGVyfSBmcm9tICdyZWFjdC1kb20nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9kYWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIHZhbGlkVGl0bGU6ICd2YWxpZGF0ZScsXHJcbiAgICAgIGNhdElkOiAnTm90VXBkYXRlZCcsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgaXNUaXRsZVZhbGlkKCkge1xyXG4gICAgY29uc3QgaWQgPSB0aGlzLnRpdGxlLnZhbHVlLnJlcGxhY2UoL1xccysvZywgJycpO1xyXG4gICAgY29uc3QgZXhpc3RpbmdJZHMgPSBbXTtcclxuXHJcbiAgICB0aGlzLnByb3BzLmRlZmF1bHRDYXRzLmZvckVhY2goY2F0ID0+IHtcclxuICAgICAgZXhpc3RpbmdJZHMucHVzaChjYXQuaWQpO1xyXG4gICAgfSk7XHJcbiAgICBpZiAodGhpcy5wcm9wcy5jdXN0b21DYXRzKSB7XHJcbiAgICAgIHRoaXMucHJvcHMuY3VzdG9tQ2F0cy5mb3JFYWNoKGNhdCA9PiB7XHJcbiAgICAgICAgZXhpc3RpbmdJZHMucHVzaChjYXQuaWQpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZXhpc3RpbmdJZHMuaW5kZXhPZihpZCkgPT09IC0xKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2NhdElkOiBpZH0pO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHt2YWxpZFRpdGxlOiAndmFsaWRhdGUgdmFsaWQnfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHt2YWxpZFRpdGxlOiAndmFsaWRhdGUgaW52YWxpZCd9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVwbG9hZGVkVXNlckNhdChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCB0YWdzID0gdGhpcy50YWdzLnZhbHVlLnNwbGl0KCcsJyk7XHJcbiAgICBjb25zdCBjbGVhblRhZ3MgPSBbXTtcclxuXHJcbiAgICB0YWdzLmZvckVhY2goKHRhZykgPT4geyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXHJcbiAgICAgIGNsZWFuVGFncy5wdXNoKHRhZy50cmltKCkpO1xyXG4gICAgfSk7XHJcbiAgICBmb3IgKGxldCBhID0gMDsgYSA8IGNsZWFuVGFncy5sZW5ndGg7IGErKykge1xyXG4gICAgICBpZiAoY2xlYW5UYWdzW2FdID09PSAnJyB8fFxyXG4gICAgICAoY2xlYW5UYWdzW2FdLm1hdGNoKC9cXHMqLykgJiZcclxuICAgICAgIWNsZWFuVGFnc1thXS5tYXRjaCgvW1xcd1xcLlxcXFwsXFwvXFw/PFxcJFxcXlxcKlxce1xcfVxcLVxcKFxcKV0vaSkpKSB7XHJcbiAgICAgICAgY2xlYW5UYWdzLnNwbGljZShhLCAxKTtcclxuICAgICAgICBhID0gMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgdXJsID0gdGhpcy51cmwudmFsdWU7XHJcbiAgICBsZXQgY2xlYW5Vcmw7XHJcbiAgICBpZiAodXJsLm1hdGNoKC8oanBnfHBuZ3xnaWYpJC9pKSkge1xyXG4gICAgICBjbGVhblVybCA9IHVybDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNsZWFuVXJsID0gJ3B1YmxpYy9pbWcvcmVwbGFjZW1lbnRDYXQuanBnJztcclxuICAgIH1cclxuICAgIGNvbnN0IG5ld0NhdCA9IFt7XHJcbiAgICAgIGlkOiB0aGlzLnN0YXRlLmNhdElkLFxyXG4gICAgICB0aXRsZTogdGhpcy50aXRsZS52YWx1ZSxcclxuICAgICAgdXJsOiBjbGVhblVybCxcclxuICAgICAgdGFnczogY2xlYW5UYWdzLFxyXG4gICAgICBsaWtlczogMSxcclxuICAgIH1dO1xyXG4gICAgdGhpcy5wcm9wcy5hZGRVc2VyQ2F0KG5ld0NhdCk7XHJcbiAgICAvLyBDbGVhciBmb3JtIGZpZWxkc1xyXG4gICAgdGhpcy50aXRsZS52YWx1ZSA9ICcnO1xyXG4gICAgdGhpcy51cmwudmFsdWUgPSAnJztcclxuICAgIHRoaXMudGFncy52YWx1ZSA9ICcnO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGlkPVwiYWRkQ2F0TW9kYWxcIiBjbGFzc05hbWU9XCJtb2RhbFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgIDxoND5BZGQgQ2F0IFBob3RvPC9oND5cclxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMudXBsb2FkZWRVc2VyQ2F0LmJpbmQodGhpcyl9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWZpZWxkIGNvbCBzMTJcIj5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLnZhbGlkVGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaXNUaXRsZVZhbGlkLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBUaXRsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgcmVmPXsoeCkgPT4geyB0aGlzLnRpdGxlID0geDsgfX1cclxuICAgICAgICAgICAgICAgICAgICBpZD1cInRpdGxlXCJcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cInRpdGxlXCJcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLWVycm9yPVwiQ2F0IHRpdGxlIGhhcyBiZWVuIHRha2VuXCJcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLXN1Y2Nlc3M9XCJDYXQgdGl0bGUgaXMgZnJlZSB0byB1c2VcIlxyXG4gICAgICAgICAgICAgICAgICA+VGl0bGVcclxuICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWZpZWxkIGNvbCBzMTJcIj5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBVUkxcIlxyXG4gICAgICAgICAgICAgICAgICAgIHJlZj17KHgpID0+IHsgdGhpcy51cmwgPSB4OyB9fVxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwidXJsXCIgdHlwZT1cInVybFwiIGNsYXNzTmFtZT1cInZhbGlkYXRlXCIgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cInVybFwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1lcnJvcj1cIlBsZWFzZSB1cGxvYWQgYSBHSUYsIFBORyBvciBKUEdcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtc3VjY2Vzcz1cIlRoYXRzIGEgVVJMIGZvciBzdXJlISBJIGhvcGUgaXQgZW5kcyBpbiBHSUYsIFBORyBvciBKUEcuLi5cIlxyXG4gICAgICAgICAgICAgICAgICA+Q2F0IFBob3RvIFVSTFxyXG4gICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZmllbGQgY29sIHM2XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VwYXJhdGUgdGFncyB3aXRoIGEgY29tbWFcIlxyXG4gICAgICAgICAgICAgICAgICAgIHJlZj17KHgpID0+IHsgdGhpcy50YWdzID0geDsgfX0gaWQ9XCJ0YWdzXCIgdHlwZT1cInRleHRcIiByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInRhZ3NcIj5UYWdzPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIGlkPVwic3VibWl0LWJ0blwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biB3YXZlcy1lZmZlY3Qgd2F2ZXMtYmx1ZSBibHVlIGRhcmtlbi0xIHN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICBuYW1lPVwiYWN0aW9uXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtc2VuZFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICZuYnNwO1N1Ym1pdFxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5Nb2RhbC5wcm9wVHlwZXMgPSB7XHJcbiAgZGVmYXVsdENhdHM6IFJlYWN0LlByb3BUeXBlcy5hcnJheSxcclxuICBjdXN0b21DYXRzOiBSZWFjdC5Qcm9wVHlwZXMuYXJyYXksXHJcbiAgYWRkVXNlckNhdDogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7cmVuZGVyfSBmcm9tICdyZWFjdC1kb20nO1xyXG5pbXBvcnQgQ2FyZCBmcm9tICcuL1Jlc3VsdHMvQ2FyZCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXN1bHRzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBhbmltYXRlQ2xhc3M6ICcnLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHNlYXJjaEJ5SW5wdXQoKSB7XHJcbiAgICB0aGlzLnByb3BzLnVwZGF0ZVNlYXJjaCh0aGlzLnNlYXJjaC52YWx1ZS50b0xvd2VyQ2FzZSgpKTtcclxuICAgIGlmICh0aGlzLnByb3BzLnNlYXJjaC5sZW5ndGggPiAxKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2FuaW1hdGVDbGFzczogJ2FuaW1hdGUnfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHthbmltYXRlQ2xhc3M6ICcnfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZWFyY2hCeVRhZyh0YWcpIHtcclxuICAgIHRoaXMucHJvcHMudXBkYXRlU2VhcmNoKHRhZy50b0xvd2VyQ2FzZSgpKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoe2FuaW1hdGVDbGFzczogJ2FuaW1hdGUnfSk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICB0aGlzLnByZUZpbHRlcmVkRGVmYXVsdENhdHMgPSB0aGlzLnByb3BzLmRlZmF1bHRDYXRzLmZpbHRlcihjYXQgPT4ge1xyXG4gICAgICBjb25zdCBsb3dlclRhZ3MgPSBbXTtcclxuICAgICAgY2F0LnRhZ3MuZm9yRWFjaCgodGFnKSA9PiB7XHJcbiAgICAgICAgbG93ZXJUYWdzLnB1c2godGFnLnRvTG93ZXJDYXNlKCkpO1xyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIChsb3dlclRhZ3MuaW5kZXhPZih0aGlzLnByb3BzLnNlYXJjaCkgIT09IC0xKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGxldCBmaWx0ZXJlZERlZmF1bHRDYXRzO1xyXG5cclxuICAgIGlmICh0aGlzLnByZUZpbHRlcmVkRGVmYXVsdENhdHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIGZpbHRlcmVkRGVmYXVsdENhdHMgPSB0aGlzLnByb3BzLmRlZmF1bHRDYXRzO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZmlsdGVyZWREZWZhdWx0Q2F0cyA9IHRoaXMucHJlRmlsdGVyZWREZWZhdWx0Q2F0cztcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5wcm9wcy5jdXN0b21DYXRzKSB7XHJcbiAgICAgIHRoaXMucHJlRmlsdGVyZWRDdXN0b21DYXRzID0gdGhpcy5wcm9wcy5jdXN0b21DYXRzLmZpbHRlcihjYXQgPT4ge1xyXG4gICAgICAgIGNvbnN0IGxvd2VyVGFncyA9IFtdO1xyXG4gICAgICAgIGNhdC50YWdzLmZvckVhY2godGFnID0+IHtcclxuICAgICAgICAgIGxvd2VyVGFncy5wdXNoKHRhZy50b0xvd2VyQ2FzZSgpKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gKGxvd2VyVGFncy5pbmRleE9mKHRoaXMucHJvcHMuc2VhcmNoKSAhPT0gLTEpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgZmlsdGVyZWRDdXN0b21DYXRzO1xyXG5cclxuICAgIGlmICghdGhpcy5wcm9wcy5jdXN0b21DYXRzKSB7XHJcbiAgICAgIGZpbHRlcmVkQ3VzdG9tQ2F0cyA9IFtdO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLnByZUZpbHRlcmVkQ3VzdG9tQ2F0cy5sZW5ndGggPT09IDApIHtcclxuICAgICAgZmlsdGVyZWRDdXN0b21DYXRzID0gdGhpcy5wcm9wcy5jdXN0b21DYXRzO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZmlsdGVyZWRDdXN0b21DYXRzID0gdGhpcy5wcmVGaWx0ZXJlZEN1c3RvbUNhdHM7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1maWVsZCBjb2wgczEyXCI+XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9eydjbGVhci1pY29uIHByZWZpeCAnICsgdGhpcy5zdGF0ZS5hbmltYXRlQ2xhc3N9IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgcHJlZmVyLXRlbXBsYXRlXHJcbiAgICAgICAgICAgICAgc3JjPVwicHVibGljL2ltZy9pY29ucy9pY19sb3VwZV9ibGFja18yNHB4LnN2Z1wiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5wcm9wcy5jbGVhclNlYXJjaH1cclxuICAgICAgICAgICAgICByb2xlPVwicHJlc2VudGF0aW9uXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGZvciBjYXQgdGFncyBoZXJlLCBvciBjbGljayBvbiBhIGNhdCB0YWcuLi5cIlxyXG4gICAgICAgICAgICAgIHJlZj17KHgpID0+IHsgdGhpcy5zZWFyY2ggPSB4OyB9fVxyXG4gICAgICAgICAgICAgIGlkPVwic2VhcmNoQmFyXCJcclxuICAgICAgICAgICAgICBvbklucHV0PXt0aGlzLnNlYXJjaEJ5SW5wdXQuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICBvbktleURvd249e3RoaXMuc2VhcmNoQnlJbnB1dC5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnByb3BzLnNlYXJjaH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVzdWx0c1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAge2ZpbHRlcmVkRGVmYXVsdENhdHMubWFwKGNhdCA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxDYXJkXHJcbiAgICAgICAgICAgICAgICAgIHNlYXJjaEJ5VGFnPXt0aGlzLnNlYXJjaEJ5VGFnLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgIGtleT17Y2F0LmlkfVxyXG4gICAgICAgICAgICAgICAgICBjYXQ9e2NhdH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIHtmaWx0ZXJlZEN1c3RvbUNhdHMubWFwKGNhdCA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxDYXJkXHJcbiAgICAgICAgICAgICAgICAgIHNlYXJjaEJ5VGFnPXt0aGlzLnNlYXJjaEJ5VGFnLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgIGtleT17Y2F0LmlkfVxyXG4gICAgICAgICAgICAgICAgICBjYXQ9e2NhdH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuUmVzdWx0cy5wcm9wVHlwZXMgPSB7XHJcbiAgdXBkYXRlU2VhcmNoOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcclxuICBzZWFyY2g6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXHJcbiAgY2xlYXJTZWFyY2g6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxyXG4gIGN1c3RvbUNhdHM6IFJlYWN0LlByb3BUeXBlcy5hcnJheSxcclxuICBkZWZhdWx0Q2F0czogUmVhY3QuUHJvcFR5cGVzLmFycmF5LFxyXG59O1xyXG4iLCIvKiBnbG9iYWwgTG9ja3IgKi9cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtyZW5kZXJ9IGZyb20gJ3JlYWN0LWRvbSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBY3Rpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBpZDogcHJvcHMuaWQsXHJcbiAgICAgIGxpa2VzOiBwcm9wcy5saWtlcyxcclxuICAgIH07XHJcbiAgICB0aGlzLmhhbmRsZUNsaWNrID0gdGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlQ2xpY2soKSB7XHJcbiAgICBjb25zdCBjYXRJZCA9IHRoaXMuc3RhdGUuaWQ7XHJcblxyXG4gICAgY29uc3QgZGVmYXVsdENhdHMgPSBMb2Nrci5nZXQoJ2RlZmF1bHRDYXRzJyk7XHJcbiAgICBjb25zdCBjdXN0b21DYXRzID0gTG9ja3IuZ2V0KCdjdXN0b21DYXRzJyk7XHJcbiAgICBsZXQgaXNEZWZhdWx0ID0gZmFsc2U7XHJcblxyXG4gICAgZGVmYXVsdENhdHMuZm9yRWFjaChsb2NhbENhdCA9PiB7XHJcbiAgICAgIGlmIChsb2NhbENhdC5pZCA9PT0gY2F0SWQpIHtcclxuICAgICAgICBpc0RlZmF1bHQgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoaXNEZWZhdWx0KSB7XHJcbiAgICAgIC8vIEZpbmQgY2F0IGlzIGxvY2FsIHN0b3JhZ2UgYW5kIGluY3JlbWVudCBsaWtlc1xyXG4gICAgICBjb25zdCBpbmRleCA9IGRlZmF1bHRDYXRzLmZpbmRJbmRleCh4ID0+IHguaWQgPT09IGNhdElkKTtcclxuICAgICAgZGVmYXVsdENhdHNbaW5kZXhdLmxpa2VzID0gdGhpcy5zdGF0ZS5saWtlcyArIDE7XHJcbiAgICAgIExvY2tyLmZsdXNoKCk7XHJcbiAgICAgIGRlZmF1bHRDYXRzLmZvckVhY2goY2F0ID0+IHtcclxuICAgICAgICBMb2Nrci5zYWRkKCdkZWZhdWx0Q2F0cycsIGNhdCk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKGN1c3RvbUNhdHMpIHtcclxuICAgICAgICBjdXN0b21DYXRzLmZvckVhY2goY2F0ID0+IHtcclxuICAgICAgICAgIExvY2tyLnNhZGQoJ2N1c3RvbUNhdHMnLCBjYXQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBGaW5kIGNhdCBpcyBsb2NhbCBzdG9yYWdlIGFuZCBpbmNyZW1lbnQgbGlrZXNcclxuICAgICAgY29uc3QgaW5kZXggPSBjdXN0b21DYXRzLmZpbmRJbmRleCh4ID0+IHguaWQgPT09IGNhdElkKTtcclxuICAgICAgY3VzdG9tQ2F0c1tpbmRleF0ubGlrZXMgPSB0aGlzLnN0YXRlLmxpa2VzICsgMTtcclxuICAgICAgTG9ja3IuZmx1c2goKTtcclxuICAgICAgY3VzdG9tQ2F0cy5mb3JFYWNoKGNhdCA9PiB7XHJcbiAgICAgICAgTG9ja3Iuc2FkZCgnY3VzdG9tQ2F0cycsIGNhdCk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBkZWZhdWx0Q2F0cy5mb3JFYWNoKGNhdCA9PiB7XHJcbiAgICAgICAgTG9ja3Iuc2FkZCgnZGVmYXVsdENhdHMnLCBjYXQpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgbGlrZSBidXR0b25cclxuICAgIHRoaXMuc2V0U3RhdGUoe2xpa2VzOiB0aGlzLnN0YXRlLmxpa2VzICsgMX0pO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWFjdGlvblwiPlxyXG4gICAgICAgIDxhXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ3YXZlcy1lZmZlY3Qgd2F2ZXMtbGlnaHQgd2F2ZXMtcmVkIHJlZCBkYXJrZW4tMyBidG5cIlxyXG4gICAgICAgICAgaHJlZj17dGhpcy5wcm9wcy51cmx9XHJcbiAgICAgICAgICBkb3dubG9hZD17dGhpcy5wcm9wcy51cmx9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtZG93bmxvYWRcIiAvPlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ3YXZlcy1lZmZlY3Qgd2F2ZXMtbGlnaHQgd2F2ZXMtYmx1ZSBibHVlIGRhcmtlbi0zIGJ0blwiXHJcbiAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXRodW1icy11cFwiIC8+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsaWtlc19udW1iZXJcIj4ge3RoaXMuc3RhdGUubGlrZXN9PC9zcGFuPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5BY3Rpb24ucHJvcFR5cGVzID0ge1xyXG4gIGlkOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxyXG4gIGxpa2VzOiBSZWFjdC5Qcm9wVHlwZXMubnVtYmVyLFxyXG4gIHVybDogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtyZW5kZXJ9IGZyb20gJ3JlYWN0LWRvbSc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICcuL0ltYWdlJztcclxuaW1wb3J0IENvbnRlbnQgZnJvbSAnLi9Db250ZW50JztcclxuaW1wb3J0IEFjdGlvbiBmcm9tICcuL0FjdGlvbic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXJkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7Y2F0LCBzZWFyY2hCeVRhZ30gPSB0aGlzLnByb3BzO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgczMgbTQgczEyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGhvdmVyYWJsZVwiPlxyXG4gICAgICAgICAgPEltYWdlIGFsdD17Y2F0LnRpdGxlfSBzcmM9e2NhdC51cmx9IC8+XHJcbiAgICAgICAgICA8Q29udGVudCBzZWFyY2hCeVRhZz17c2VhcmNoQnlUYWd9IHRpdGxlPXtjYXQudGl0bGV9IHRhZ3M9e2NhdC50YWdzfSAvPlxyXG4gICAgICAgICAgPEFjdGlvbiB1cmw9e2NhdC51cmx9IGxpa2VzPXtjYXQubGlrZXN9IGlkPXtjYXQuaWR9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbkNhcmQucHJvcFR5cGVzID0ge1xyXG4gIHNlYXJjaEJ5VGFnOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcclxuICBjYXQ6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QsXHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7cmVuZGVyfSBmcm9tICdyZWFjdC1kb20nO1xyXG5pbXBvcnQgVGFnIGZyb20gJy4vVGFnJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRlbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIHRhZ0NsaWNrKHRhZykge1xyXG4gICAgdGhpcy5wcm9wcy5zZWFyY2hCeVRhZyh0YWcpO1xyXG4gIH1cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtY29udGVudFwiPlxyXG4gICAgICAgIDxoNT57dGhpcy5wcm9wcy50aXRsZX08L2g1PlxyXG4gICAgICAgIHt0aGlzLnByb3BzLnRhZ3MubWFwKCh0YWcsIGtleSkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIDxUYWcgdGFnQ2xpY2s9e3RoaXMudGFnQ2xpY2suYmluZCh0aGlzKX0ga2V5PXtrZXl9IHRhZz17dGFnfSAvPjtcclxuICAgICAgICB9KX1cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuQ29udGVudC5wcm9wVHlwZXMgPSB7XHJcbiAgc2VhcmNoQnlUYWc6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxyXG4gIHRhZ3M6IFJlYWN0LlByb3BUeXBlcy5hcnJheSxcclxuICB0aXRsZTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcclxufTtcclxuIiwiLyogZ2xvYmFsICQgKi9cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtyZW5kZXJ9IGZyb20gJ3JlYWN0LWRvbSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbWFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAkKCcubWF0ZXJpYWxib3hlZCcpLm1hdGVyaWFsYm94KCk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaW1hZ2VcIj5cclxuICAgICAgICA8aW1nIGNsYXNzTmFtZT1cIm1hdGVyaWFsYm94ZWRcIiBhbHQ9e3RoaXMucHJvcHMuYWx0fSBzcmM9e3RoaXMucHJvcHMuc3JjfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5JbWFnZS5wcm9wVHlwZXMgPSB7XHJcbiAgYWx0OiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxyXG4gIHNyYzogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtyZW5kZXJ9IGZyb20gJ3JlYWN0LWRvbSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYWcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGdldFZhbHVlKCkge1xyXG4gICAgdGhpcy5wcm9wcy50YWdDbGljayh0aGlzLnByb3BzLnRhZyk7XHJcbiAgfVxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxzcGFuIG9uQ2xpY2s9e3RoaXMuZ2V0VmFsdWUuYmluZCh0aGlzKX0gY2xhc3NOYW1lPVwiY2hpcCBibHVlIGRhcmtlbi0zXCI+e3RoaXMucHJvcHMudGFnfTwvc3Bhbj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5UYWcucHJvcFR5cGVzID0ge1xyXG4gIHRhZzogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcclxuICB0YWdDbGljazogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXHJcbn07XHJcbiIsImNvbnN0IGNhdHMgPSB7XHJcbiAgZGVmYXVsdENhdHM6IFtcclxuICAgIHtcclxuICAgICAgaWQ6ICdDYW1wZXJDYXQnLFxyXG4gICAgICBsaWtlczogMyxcclxuICAgICAgdGFnczogWydDb2RpbmcnLCAnR3VydScsICdOaW5qYSddLFxyXG4gICAgICB0aXRsZTogJ0NhbXBlciBDYXQnLFxyXG4gICAgICB1cmw6ICdodHRwczovL21lZGlhLmdpcGh5LmNvbS9tZWRpYS9vMHZ3enVGd0NHQUZPL2dpcGh5LmdpZicsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogJ0NhdC1pbi1hLWhhdCcsXHJcbiAgICAgIGxpa2VzOiA3LFxyXG4gICAgICB0YWdzOiBbJ0N1dGUnLCAnSGF0JywgJ1N0YW5kaW5nJ10sXHJcbiAgICAgIHRpdGxlOiAnQ2F0LWluLWEtaGF0JyxcclxuICAgICAgdXJsOiAnaHR0cHM6Ly9zLW1lZGlhLWNhY2hlLWFrMC5waW5pbWcuY29tLzU2NHgvMjcvZGYvY2MvMjdkZmNjMTdhOGNlZmU1NmM5OTI3N2Q2M2JlMGQ4MTUuanBnJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiAnRmx1ZmZCYWxsJyxcclxuICAgICAgbGlrZXM6IDIsXHJcbiAgICAgIHRhZ3M6IFsnRmx1ZmZ5JywgJ05vLWxlZ3MnLCAnQmFsbCcsICdGbHlpbmcnXSxcclxuICAgICAgdGl0bGU6ICdGbHVmZiBCYWxsJyxcclxuICAgICAgdXJsOiAnaHR0cDovL3d3dy50b3AxMy5uZXQvd3AtY29udGVudC91cGxvYWRzLzIwMTUvMTAvcGVyZmVjdGx5LXRpbWVkLWZ1bm55LWNhdC1waWN0dXJlcy01LmpwZycsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogJ0dydW1weUNhdCcsXHJcbiAgICAgIGxpa2VzOiA0LFxyXG4gICAgICB0YWdzOiBbJ0dydW1weScsICdGdW5ueScsICdGYW1vdXMnXSxcclxuICAgICAgdGl0bGU6ICdHcnVtcHkgQ2F0JyxcclxuICAgICAgdXJsOiAnaHR0cDovL2kuZGFpbHltYWlsLmNvLnVrL2kvcGl4LzIwMTQvMDgvMDUvMTQwNzIyNTkzMjA5MV93cHNfNl9TQU5UQV9NT05JQ0FfQ0FfQVVHVVNUXzA0LmpwZycsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogJ0hhcHB5Q2F0JyxcclxuICAgICAgbGlrZXM6IDksXHJcbiAgICAgIHRhZ3M6IFsnSGFwcHknLCAnV2lua2luZycsICdTbWlsaW5nJ10sXHJcbiAgICAgIHRpdGxlOiAnSGFwcHkgQ2F0JyxcclxuICAgICAgdXJsOiAnaHR0cHM6Ly9wYnMudHdpbWcuY29tL3Byb2ZpbGVfaW1hZ2VzLzIxNjcwMzU4OTYvMTIzY2F0XzQwMHg0MDAuanBnJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGlkOiAnTGF1Z2hpbmdDYXQnLFxyXG4gICAgICBsaWtlczogMjcsXHJcbiAgICAgIHRhZ3M6IFsnbGF1Z2hpbmcnLCAnRnVubnknLCAnU25pY2tlciddLFxyXG4gICAgICB0aXRsZTogJ0xhdWdoaW5nIENhdCcsXHJcbiAgICAgIHVybDogJ2h0dHA6Ly9ibG9nLm5la29mbGllcy5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTQvMDEvZnVubnktY2F0LmpwZycsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogJ1NjYXJlZHlDYXQnLFxyXG4gICAgICBsaWtlczogMTgsXHJcbiAgICAgIHRhZ3M6IFsnSGlkaW5nJywgJ0N1dGUnLCAnU2NhcmVkJ10sXHJcbiAgICAgIHRpdGxlOiAnU2NhcmVkeSBDYXQgJyxcclxuICAgICAgdXJsOiAnaHR0cHM6Ly9pLnl0aW1nLmNvbS92aS9NRzhLQURpUmJPVS9tYXhyZXNkZWZhdWx0LmpwZycsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogJ1Nob2NrZWRDYXQnLFxyXG4gICAgICBsaWtlczogMTEsXHJcbiAgICAgIHRhZ3M6IFsnV2hhdCBpcyBUSEFUIT8nLCAnU2hvY2tlZCcsICdGdW5ueSddLFxyXG4gICAgICB0aXRsZTogJ1Nob2NrZWQgQ2F0JyxcclxuICAgICAgdXJsOiAnaHR0cHM6Ly9pLnl0aW1nLmNvbS92aS9pY3FEeE5hYjNEby9tYXhyZXNkZWZhdWx0LmpwZycsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBpZDogJ1NsZWVwaW5nQ2F0JyxcclxuICAgICAgbGlrZXM6IDIsXHJcbiAgICAgIHRhZ3M6IFsnU2xlZXBpbmcnLCAnQ3V0ZScsICdLaXR0ZW4nXSxcclxuICAgICAgdGl0bGU6ICdTbGVlcGluZyBDYXQnLFxyXG4gICAgICB1cmw6ICdodHRwOi8vd3d3LmFjdXRlYWRheS5jb20vYmxvZy93cC1jb250ZW50L3VwbG9hZHMvMjAxMi8wOS9zbGVlcGluZy1raXR0eS1jYXQuanBnJyxcclxuICAgIH0sXHJcbiAgXSxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNhdHM7XHJcbiJdfQ==
