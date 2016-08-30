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

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* global Lockr, document */


var App = function (_React$Component) {
  _inherits(App, _React$Component);

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

  // Every time this.state.cats changes, update local storage


  _createClass(App, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      var prevState = arguments.length <= 0 || arguments[0] === undefined ? this.state.cats : arguments[0];
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
      var tags = this.tags.value.split;
      var cleanTags = [];
      formatTags = tags.forEach(function (tag) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHBcXGFwcC5qcyIsImFwcFxcY29tcG9uZW50c1xcRm9vdGVyLmpzIiwiYXBwXFxjb21wb25lbnRzXFxIZWFkZXIuanMiLCJhcHBcXGNvbXBvbmVudHNcXE1vZGFsLmpzIiwiYXBwXFxjb21wb25lbnRzXFxSZXN1bHRzLmpzIiwiYXBwXFxjb21wb25lbnRzXFxSZXN1bHRzXFxBY3Rpb24uanMiLCJhcHBcXGNvbXBvbmVudHNcXFJlc3VsdHNcXENhcmQuanMiLCJhcHBcXGNvbXBvbmVudHNcXFJlc3VsdHNcXENvbnRlbnQuanMiLCJhcHBcXGNvbXBvbmVudHNcXFJlc3VsdHNcXEltYWdlLmpzIiwiYXBwXFxjb21wb25lbnRzXFxSZXN1bHRzXFxUYWcuanMiLCJhcHBcXGNvbXBvbmVudHNcXGNhdHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0FDQ0E7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs4ZUFQQTs7O0lBU00sRzs7O0FBQ0osaUJBQWM7QUFBQTs7QUFFWjs7QUFGWTs7QUFHWixRQUFNLFFBQVEsTUFBTSxHQUFOLENBQVUsTUFBVixDQUFkO0FBQ0EsUUFBSSxnQkFBSjs7QUFFQSxRQUFJLEtBQUosRUFBVztBQUNULGdCQUFVLEtBQVY7QUFDRCxLQUZELE1BRU87QUFDTDtBQUNBLGlCQUFLLElBQUwsQ0FBVSxPQUFWLENBQWtCLGtCQUFVO0FBQzFCLGNBQU0sSUFBTixDQUFXLE1BQVgsRUFBbUIsTUFBbkI7QUFDQSxrQkFBVSxNQUFNLEdBQU4sQ0FBVSxNQUFWLENBQVY7QUFDRCxPQUhEO0FBSUQ7QUFDRCxVQUFLLEtBQUwsR0FBYTtBQUNYLFlBQU0sT0FESztBQUVYLGNBQVE7QUFGRyxLQUFiO0FBZlk7QUFtQmI7O0FBRUQ7Ozs7O3lDQUNnRDtBQUFBLFVBQTdC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O0FBTFAsR0FsRGtCLEVBeURsQjtBQUNFLFFBQUksYUFETjtBQUVFLFdBQU8sQ0FGVDtBQUdFLFVBQU0sQ0FBQyxVQUFELEVBQWEsTUFBYixFQUFxQixRQUFyQixDQUhSO0FBSUUsV0FBTyxjQUpUO0FBS0UsU0FBSztBQUxQLEdBekRrQjtBQUFQLENBQWI7O2tCQW1FZSxJIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8qIGdsb2JhbCBMb2NrciwgZG9jdW1lbnQgKi9cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtyZW5kZXJ9IGZyb20gJ3JlYWN0LWRvbSc7XHJcbmltcG9ydCB7Y2F0c30gZnJvbSAnLi9jb21wb25lbnRzL2NhdHMnO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vY29tcG9uZW50cy9IZWFkZXInO1xyXG5pbXBvcnQgTW9kYWwgZnJvbSAnLi9jb21wb25lbnRzL01vZGFsJztcclxuaW1wb3J0IFJlc3VsdHMgZnJvbSAnLi9jb21wb25lbnRzL1Jlc3VsdHMnO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vY29tcG9uZW50cy9Gb290ZXInO1xyXG5cclxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICAvLyByZXRyaWV2ZSBjYXRzIGZyb20gbG9jYWwgc3RvcmFnZVxyXG4gICAgY29uc3QgbG9jYWwgPSBMb2Nrci5nZXQoJ2NhdHMnKTtcclxuICAgIGxldCBhbGxDYXRzO1xyXG5cclxuICAgIGlmIChsb2NhbCkge1xyXG4gICAgICBhbGxDYXRzID0gbG9jYWw7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBpZiBub3QgY2F0cyBpbiBsb2NhbCBzdG9yYWdlLCBwdXQgdGhlbSB0aGVyZVxyXG4gICAgICBjYXRzLmNhdHMuZm9yRWFjaChvdXJDYXQgPT4ge1xyXG4gICAgICAgIExvY2tyLnNhZGQoJ2NhdHMnLCBvdXJDYXQpO1xyXG4gICAgICAgIGFsbENhdHMgPSBMb2Nrci5nZXQoJ2NhdHMnKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBjYXRzOiBhbGxDYXRzLFxyXG4gICAgICBzZWFyY2g6ICcnLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIC8vIEV2ZXJ5IHRpbWUgdGhpcy5zdGF0ZS5jYXRzIGNoYW5nZXMsIHVwZGF0ZSBsb2NhbCBzdG9yYWdlXHJcbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZTdGF0ZSA9IHRoaXMuc3RhdGUuY2F0cykgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXHJcbiAgICB0aGlzLnN0b3JlQ2F0cyh0aGlzLnN0YXRlLmNhdHMpO1xyXG4gIH1cclxuXHJcbiAgc3RvcmVDYXRzKGl0ZW1zKSB7XHJcbiAgICBMb2Nrci5mbHVzaCgpO1xyXG4gICAgaXRlbXMuZm9yRWFjaChsb2NhbENhdCA9PiB7XHJcbiAgICAgIExvY2tyLnNhZGQoJ2NhdHMnLCBsb2NhbENhdCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGFkZFVzZXJDYXQobmV3Q2F0KSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtjYXRzOiBuZXdDYXQuY29uY2F0KHRoaXMuc3RhdGUuY2F0cyl9KTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZVNlYXJjaChuZXdTZWFyY2gpIHtcclxuICAgIG5ld1NlYXJjaC50b0xvd2VyQ2FzZSgpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7c2VhcmNoOiBuZXdTZWFyY2h9KTtcclxuICB9XHJcblxyXG4gIGNsZWFyU2VhcmNoKCkge1xyXG4gICAgdGhpcy51cGRhdGVTZWFyY2goJycpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8SGVhZGVyIGNsZWFyU2VhcmNoPXt0aGlzLmNsZWFyU2VhcmNoLmJpbmQodGhpcyl9IC8+XHJcbiAgICAgICAgPE1vZGFsXHJcbiAgICAgICAgICBhZGRVc2VyQ2F0PXt0aGlzLmFkZFVzZXJDYXQuYmluZCh0aGlzKX1cclxuICAgICAgICAgIGNhdHM9e3RoaXMuc3RhdGUuY2F0c31cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxSZXN1bHRzXHJcbiAgICAgICAgICBjbGVhclNlYXJjaD17dGhpcy5jbGVhclNlYXJjaC5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgdXBkYXRlU2VhcmNoPXt0aGlzLnVwZGF0ZVNlYXJjaC5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgc2VhcmNoPXt0aGlzLnN0YXRlLnNlYXJjaH1cclxuICAgICAgICAgIGNhdHM9e3RoaXMuc3RhdGUuY2F0c31cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgYXBwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpO1xyXG5yZW5kZXIoPEFwcCAvPiwgYXBwKTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtyZW5kZXJ9IGZyb20gJ3JlYWN0LWRvbSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb290ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxmb290ZXIgY2xhc3NOYW1lPVwicGFnZS1mb290ZXIgYmx1ZSBkYXJrZW4tMlwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwid2hpdGUtdGV4dFwiPkNhdFBob3RvQXBwPC9oNT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgPHBcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJncmV5LXRleHQgdGV4dC1saWdodGVuLTRcIlxyXG4gICAgICAgICAgICA+XHJcblx0XHRcdENhdFBob3RvQXBwIGhhcyBiZWVuIGNyZWF0ZWQgdG8gZm9ybSBwYXJ0IG9mIHRoZVxyXG4gICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mcmVlY29kZWNhbXAuY29tXCJcclxuICAgICAgICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICA+IEZyZWUgQ29kZSBDYW1wXHJcbiAgICAgICAgICAgICAgPC9hPiBjdXJyaWN1bHVtLjwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLWNvcHlyaWdodFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgwqkgMjAxNiBDYXRQaG90b0FwcFxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJncmV5LXRleHQgdGV4dC1saWdodGVuLTQgcmlnaHRcIiBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2F0am9uYXRoYW4vY2F0cGhvdG9hcHAvXCI+R2l0SHViPC9hPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZm9vdGVyPlxyXG4gICAgKTtcclxuICB9XHJcblxyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7cmVuZGVyfSBmcm9tICdyZWFjdC1kb20nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVhZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8bmF2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2LXdyYXBwZXIgYmx1ZSBkYXJrZW4tMlwiPlxyXG4gICAgICAgICAgPGEgaHJlZj1cIiNcIiBvbkNsaWNrPXt0aGlzLnByb3BzLmNsZWFyU2VhcmNofSBjbGFzc05hbWU9XCJicmFuZC1sb2dvXCI+Jm5ic3A7Jm5ic3A7Jm5ic3A7Q2F0UGhvdG9BcHA8L2E+XHJcbiAgICAgICAgICA8YSBocmVmPVwiI1wiIGRhdGEtYWN0aXZhdGVzPVwibW9iaWxlXCIgY2xhc3NOYW1lPVwiYnV0dG9uLWNvbGxhcHNlXCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtYmFyc1wiIC8+PC9hPlxyXG4gICAgICAgICAgPHVsIGlkPVwibmF2LW1vYmlsZVwiIGNsYXNzTmFtZT1cInJpZ2h0IGhpZGUtb24tbWVkLWFuZC1kb3duXCI+XHJcbiAgICAgICAgICAgIDxsaT48YSBjbGFzc05hbWU9XCJtb2RhbC10cmlnZ2VyXCIgaHJlZj1cIiNhZGRDYXRNb2RhbFwiPkFkZCBDYXQgUGhvdG88L2E+PC9saT5cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwic2lkZS1uYXZcIiBpZD1cIm1vYmlsZVwiPlxyXG4gICAgICAgICAgICA8bGk+PGEgY2xhc3NOYW1lPVwibW9kYWwtdHJpZ2dlclwiIGhyZWY9XCIjYWRkQ2F0TW9kYWxcIj5BZGQgQ2F0IFBob3RvPC9hPjwvbGk+XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L25hdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5IZWFkZXIucHJvcFR5cGVzID0ge1xyXG4gIGNsZWFyU2VhcmNoOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtyZW5kZXJ9IGZyb20gJ3JlYWN0LWRvbSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb2RhbCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgdmFsaWRUaXRsZTogJ3ZhbGlkYXRlJyxcclxuICAgICAgY2F0SWQ6ICdOb3RVcGRhdGVkJyxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBpc1RpdGxlVmFsaWQoKSB7XHJcbiAgICBjb25zdCBpZCA9IHRoaXMudGl0bGUudmFsdWUucmVwbGFjZSgvXFxzKy9nLCAnJyk7XHJcbiAgICBjb25zdCBleGlzdGluZ0lkcyA9IFtdO1xyXG4gICAgdGhpcy5wcm9wcy5jYXRzLmZvckVhY2goKGNhdCkgPT4ge1xyXG4gICAgICBleGlzdGluZ0lkcy5wdXNoKGNhdC5pZCk7XHJcbiAgICB9KTtcclxuICAgIGlmIChleGlzdGluZ0lkcy5pbmRleE9mKGlkKSA9PT0gLTEpIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7Y2F0SWQ6IGlkfSk7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe3ZhbGlkVGl0bGU6ICd2YWxpZGF0ZSB2YWxpZCd9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe3ZhbGlkVGl0bGU6ICd2YWxpZGF0ZSBpbnZhbGlkJ30pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXBsb2FkZWRVc2VyQ2F0KGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IHRhZ3MgPSB0aGlzLnRhZ3MudmFsdWUuc3BsaXQ7XHJcbiAgICBjb25zdCBjbGVhblRhZ3MgPSBbXTtcclxuICAgIGZvcm1hdFRhZ3MgPSB0YWdzLmZvckVhY2goKHRhZykgPT4geyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXHJcbiAgICAgIGNsZWFuVGFncy5wdXNoKHRhZy50cmltKCkpO1xyXG4gICAgfSk7XHJcbiAgICBmb3IgKGxldCBhID0gMDsgYSA8IGNsZWFuVGFncy5sZW5ndGg7IGErKykge1xyXG4gICAgICBpZiAoY2xlYW5UYWdzW2FdID09PSAnJyB8fFxyXG4gICAgICAoY2xlYW5UYWdzW2FdLm1hdGNoKC9cXHMqLykgJiZcclxuICAgICAgIWNsZWFuVGFnc1thXS5tYXRjaCgvW1xcd1xcLlxcXFwsXFwvXFw/PFxcJFxcXlxcKlxce1xcfVxcLVxcKFxcKV0vaSkpKSB7XHJcbiAgICAgICAgY2xlYW5UYWdzLnNwbGljZShhLCAxKTtcclxuICAgICAgICBhID0gMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgdXJsID0gdGhpcy51cmwudmFsdWU7XHJcbiAgICBsZXQgY2xlYW5Vcmw7XHJcbiAgICBpZiAodXJsLm1hdGNoKC8oanBnfHBuZ3xnaWYpJC9pKSkge1xyXG4gICAgICBjbGVhblVybCA9IHVybDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNsZWFuVXJsID0gJ3B1YmxpYy9pbWcvcmVwbGFjZW1lbnRDYXQuanBnJztcclxuICAgIH1cclxuICAgIGNvbnN0IG5ld0NhdCA9IFt7XHJcbiAgICAgIGlkOiB0aGlzLnN0YXRlLmNhdElkLFxyXG4gICAgICB0aXRsZTogdGhpcy50aXRsZS52YWx1ZSxcclxuICAgICAgdXJsOiBjbGVhblVybCxcclxuICAgICAgdGFnczogY2xlYW5UYWdzLFxyXG4gICAgICBsaWtlczogMSxcclxuICAgIH1dO1xyXG4gICAgdGhpcy5wcm9wcy5hZGRVc2VyQ2F0KG5ld0NhdCk7XHJcbiAgICAvLyBDbGVhciBmb3JtIGZpZWxkc1xyXG4gICAgdGhpcy50aXRsZS52YWx1ZSA9ICcnO1xyXG4gICAgdGhpcy51cmwudmFsdWUgPSAnJztcclxuICAgIHRoaXMudGFncy52YWx1ZSA9ICcnO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGlkPVwiYWRkQ2F0TW9kYWxcIiBjbGFzc05hbWU9XCJtb2RhbFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgIDxoND5BZGQgQ2F0IFBob3RvPC9oND5cclxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMudXBsb2FkZWRVc2VyQ2F0LmJpbmQodGhpcyl9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWZpZWxkIGNvbCBzMTJcIj5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLnZhbGlkVGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaXNUaXRsZVZhbGlkLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBUaXRsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgcmVmPXsoeCkgPT4geyB0aGlzLnRpdGxlID0geDsgfX1cclxuICAgICAgICAgICAgICAgICAgICBpZD1cInRpdGxlXCJcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cInRpdGxlXCJcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLWVycm9yPVwiQ2F0IHRpdGxlIGhhcyBiZWVuIHRha2VuXCJcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLXN1Y2Nlc3M9XCJDYXQgdGl0bGUgaXMgZnJlZSB0byB1c2VcIlxyXG4gICAgICAgICAgICAgICAgICA+VGl0bGVcclxuICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWZpZWxkIGNvbCBzMTJcIj5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBVUkxcIlxyXG4gICAgICAgICAgICAgICAgICAgIHJlZj17KHgpID0+IHsgdGhpcy51cmwgPSB4OyB9fVxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwidXJsXCIgdHlwZT1cInVybFwiIGNsYXNzTmFtZT1cInZhbGlkYXRlXCIgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cInVybFwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1lcnJvcj1cIlBsZWFzZSB1cGxvYWQgYSBHSUYsIFBORyBvciBKUEdcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtc3VjY2Vzcz1cIlRoYXRzIGEgVVJMIGZvciBzdXJlISBJIGhvcGUgaXQgZW5kcyBpbiBHSUYsIFBORyBvciBKUEcuLi5cIlxyXG4gICAgICAgICAgICAgICAgICA+Q2F0IFBob3RvIFVSTFxyXG4gICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZmllbGQgY29sIHM2XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VwYXJhdGUgdGFncyB3aXRoIGEgY29tbWFcIlxyXG4gICAgICAgICAgICAgICAgICAgIHJlZj17KHgpID0+IHsgdGhpcy50YWdzID0geDsgfX0gaWQ9XCJ0YWdzXCIgdHlwZT1cInRleHRcIiByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInRhZ3NcIj5UYWdzPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIGlkPVwic3VibWl0LWJ0blwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biB3YXZlcy1lZmZlY3Qgd2F2ZXMtYmx1ZSBibHVlIGRhcmtlbi0xIHN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICBuYW1lPVwiYWN0aW9uXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtc2VuZFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICZuYnNwO1N1Ym1pdFxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5Nb2RhbC5wcm9wVHlwZXMgPSB7XHJcbiAgY2F0czogUmVhY3QuUHJvcFR5cGVzLmFycmF5LFxyXG4gIGFkZFVzZXJDYXQ6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge3JlbmRlcn0gZnJvbSAncmVhY3QtZG9tJztcclxuaW1wb3J0IENhcmQgZnJvbSAnLi9SZXN1bHRzL0NhcmQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVzdWx0cyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgYW5pbWF0ZUNsYXNzOiAnJyxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBzZWFyY2hCeUlucHV0KCkge1xyXG4gICAgdGhpcy5wcm9wcy51cGRhdGVTZWFyY2godGhpcy5zZWFyY2gudmFsdWUudG9Mb3dlckNhc2UoKSk7XHJcbiAgICBpZiAodGhpcy5wcm9wcy5zZWFyY2gubGVuZ3RoID4gMSkge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHthbmltYXRlQ2xhc3M6ICdhbmltYXRlJ30pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7YW5pbWF0ZUNsYXNzOiAnJ30pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2VhcmNoQnlUYWcodGFnKSB7XHJcbiAgICB0aGlzLnByb3BzLnVwZGF0ZVNlYXJjaCh0YWcudG9Mb3dlckNhc2UoKSk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHthbmltYXRlQ2xhc3M6ICdhbmltYXRlJ30pO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgcHJlRmlsdGVyZWRDYXRzID0gdGhpcy5wcm9wcy5jYXRzLmZpbHRlcigoY2F0KSA9PiB7XHJcbiAgICAgIGNvbnN0IGxvd2VyVGFncyA9IFtdO1xyXG4gICAgICBjb25zdCBmb3JtYXRUYWdzID0gY2F0LnRhZ3MuZm9yRWFjaCgodGFnKSA9PiB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcclxuICAgICAgICBsb3dlclRhZ3MucHVzaCh0YWcudG9Mb3dlckNhc2UoKSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm4gKGxvd2VyVGFncy5pbmRleE9mKHRoaXMucHJvcHMuc2VhcmNoKSAhPT0gLTEpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgbGV0IGZpbHRlcmVkQ2F0cztcclxuXHJcbiAgICBpZiAocHJlRmlsdGVyZWRDYXRzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICBmaWx0ZXJlZENhdHMgPSB0aGlzLnByb3BzLmNhdHM7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBmaWx0ZXJlZENhdHMgPSBwcmVGaWx0ZXJlZENhdHM7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWZpZWxkIGNvbCBzMTJcIj5cclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17J2NsZWFyLWljb24gcHJlZml4ICcgKyB0aGlzLnN0YXRlLmFuaW1hdGVDbGFzc30gLy8gZXNsaW50LWRpc2FibGUtbGluZSBwcmVmZXItdGVtcGxhdGVcclxuICAgICAgICAgICAgICBzcmM9XCJwdWJsaWMvaW1nL2ljb25zL2ljX2xvdXBlX2JsYWNrXzI0cHguc3ZnXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnByb3BzLmNsZWFyU2VhcmNofVxyXG4gICAgICAgICAgICAgIHJvbGU9XCJwcmVzZW50YXRpb25cIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggZm9yIGNhdCB0YWdzIGhlcmUsIG9yIGNsaWNrIG9uIGEgY2F0IHRhZy4uLlwiXHJcbiAgICAgICAgICAgICAgcmVmPXsoeCkgPT4geyB0aGlzLnNlYXJjaCA9IHg7IH19XHJcbiAgICAgICAgICAgICAgaWQ9XCJzZWFyY2hCYXJcIlxyXG4gICAgICAgICAgICAgIG9uSW5wdXQ9e3RoaXMuc2VhcmNoQnlJbnB1dC5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgIG9uS2V5RG93bj17dGhpcy5zZWFyY2hCeUlucHV0LmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgdmFsdWU9e3RoaXMucHJvcHMuc2VhcmNofVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXN1bHRzXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICB7ZmlsdGVyZWRDYXRzLm1hcChjYXQgPT4ge1xyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8Q2FyZFxyXG4gICAgICAgICAgICAgICAgICBzZWFyY2hCeVRhZz17dGhpcy5zZWFyY2hCeVRhZy5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICBrZXk9e2NhdC5pZH1cclxuICAgICAgICAgICAgICAgICAgY2F0PXtjYXR9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcblJlc3VsdHMucHJvcFR5cGVzID0ge1xyXG4gIHVwZGF0ZVNlYXJjaDogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXHJcbiAgc2VhcmNoOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxyXG4gIGNsZWFyU2VhcmNoOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcclxuICBjYXRzOiBSZWFjdC5Qcm9wVHlwZXMuYXJyYXksXHJcbn07XHJcbiIsIi8qIGdsb2JhbCBMb2NrciAqL1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge3JlbmRlcn0gZnJvbSAncmVhY3QtZG9tJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFjdGlvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGlkOiBwcm9wcy5pZCxcclxuICAgICAgbGlrZXM6IHByb3BzLmxpa2VzLFxyXG4gICAgfTtcclxuICAgIHRoaXMuaGFuZGxlQ2xpY2sgPSB0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcyk7XHJcbiAgfVxyXG4gIGhhbmRsZUNsaWNrKCkge1xyXG4gICAgY29uc3QgY2F0SWQgPSB0aGlzLnN0YXRlLmlkO1xyXG4gICAgY29uc3QgbG9jYWxDYXRzID0gTG9ja3IuZ2V0KCdjYXRzJyk7XHJcbiAgICBsZXQgaW5kZXg7XHJcbiAgICAvLyB1cGRhdGUgbGlrZSBidXR0b24gbGlrZXNcclxuICAgIHRoaXMuc2V0U3RhdGUoe2xpa2VzOiB0aGlzLnN0YXRlLmxpa2VzICsgMX0pO1xyXG4gICAgLy8gRmluZCBjYXQgaXMgbG9jYWwgc3RvcmFnZSBhbmQgaW5jcmVtZW50IGxpa2VzXHJcbiAgICBpbmRleCA9IGxvY2FsQ2F0cy5maW5kSW5kZXgoeCA9PiB4LmlkID09PSBjYXRJZCk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgcHJlZmVyLWNvbnN0XHJcbiAgICBsb2NhbENhdHNbaW5kZXhdLmxpa2VzID0gdGhpcy5zdGF0ZS5saWtlcyArIDE7XHJcbiAgICAvLyBlbXB0eSBhbmQgdXBkYXRlIGxvY2FsIHN0b3JhZ2VcclxuICAgIExvY2tyLmZsdXNoKCk7XHJcbiAgICBsb2NhbENhdHMuZm9yRWFjaCgobG9jYWxDYXQpID0+IHtcclxuICAgICAgTG9ja3Iuc2FkZCgnY2F0cycsIGxvY2FsQ2F0KTtcclxuICAgIH0pO1xyXG4gIH1cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYWN0aW9uXCI+XHJcbiAgICAgICAgPGFcclxuICAgICAgICAgIGNsYXNzTmFtZT1cIndhdmVzLWVmZmVjdCB3YXZlcy1saWdodCB3YXZlcy1yZWQgcmVkIGRhcmtlbi0zIGJ0blwiXHJcbiAgICAgICAgICBocmVmPXt0aGlzLnByb3BzLnVybH1cclxuICAgICAgICAgIGRvd25sb2FkPXt0aGlzLnByb3BzLnVybH1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1kb3dubG9hZFwiIC8+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIGNsYXNzTmFtZT1cIndhdmVzLWVmZmVjdCB3YXZlcy1saWdodCB3YXZlcy1ibHVlIGJsdWUgZGFya2VuLTMgYnRuXCJcclxuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtdGh1bWJzLXVwXCIgLz5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxpa2VzX251bWJlclwiPiB7dGhpcy5zdGF0ZS5saWtlc308L3NwYW4+XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbkFjdGlvbi5wcm9wVHlwZXMgPSB7XHJcbiAgaWQ6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXHJcbiAgbGlrZXM6IFJlYWN0LlByb3BUeXBlcy5udW1iZXIsXHJcbiAgdXJsOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge3JlbmRlcn0gZnJvbSAncmVhY3QtZG9tJztcclxuaW1wb3J0IEltYWdlIGZyb20gJy4vSW1hZ2UnO1xyXG5pbXBvcnQgQ29udGVudCBmcm9tICcuL0NvbnRlbnQnO1xyXG5pbXBvcnQgQWN0aW9uIGZyb20gJy4vQWN0aW9uJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcmQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHtjYXQsIHNlYXJjaEJ5VGFnfSA9IHRoaXMucHJvcHM7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBzMyBtNCBzMTJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgaG92ZXJhYmxlXCI+XHJcbiAgICAgICAgICA8SW1hZ2UgYWx0PXtjYXQudGl0bGV9IHNyYz17Y2F0LnVybH0gLz5cclxuICAgICAgICAgIDxDb250ZW50IHNlYXJjaEJ5VGFnPXtzZWFyY2hCeVRhZ30gdGl0bGU9e2NhdC50aXRsZX0gdGFncz17Y2F0LnRhZ3N9IC8+XHJcbiAgICAgICAgICA8QWN0aW9uIHVybD17Y2F0LnVybH0gbGlrZXM9e2NhdC5saWtlc30gaWQ9e2NhdC5pZH0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuQ2FyZC5wcm9wVHlwZXMgPSB7XHJcbiAgc2VhcmNoQnlUYWc6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxyXG4gIGNhdDogUmVhY3QuUHJvcFR5cGVzLm9iamVjdCxcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtyZW5kZXJ9IGZyb20gJ3JlYWN0LWRvbSc7XHJcbmltcG9ydCBUYWcgZnJvbSAnLi9UYWcnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udGVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgdGFnQ2xpY2sodGFnKSB7XHJcbiAgICB0aGlzLnByb3BzLnNlYXJjaEJ5VGFnKHRhZyk7XHJcbiAgfVxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1jb250ZW50XCI+XHJcbiAgICAgICAgPGg1Pnt0aGlzLnByb3BzLnRpdGxlfTwvaDU+XHJcbiAgICAgICAge3RoaXMucHJvcHMudGFncy5tYXAoKHRhZywga2V5KSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gPFRhZyB0YWdDbGljaz17dGhpcy50YWdDbGljay5iaW5kKHRoaXMpfSBrZXk9e2tleX0gdGFnPXt0YWd9IC8+O1xyXG4gICAgICAgIH0pfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5Db250ZW50LnByb3BUeXBlcyA9IHtcclxuICBzZWFyY2hCeVRhZzogUmVhY3QuUHJvcFR5cGVzLmZ1bmMsXHJcbiAgdGFnczogUmVhY3QuUHJvcFR5cGVzLmFycmF5LFxyXG4gIHRpdGxlOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxyXG59O1xyXG4iLCIvKiBnbG9iYWwgJCAqL1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge3JlbmRlcn0gZnJvbSAncmVhY3QtZG9tJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEltYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICQoJy5tYXRlcmlhbGJveGVkJykubWF0ZXJpYWxib3goKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1pbWFnZVwiPlxyXG4gICAgICAgIDxpbWcgY2xhc3NOYW1lPVwibWF0ZXJpYWxib3hlZFwiIGFsdD17dGhpcy5wcm9wcy5hbHR9IHNyYz17dGhpcy5wcm9wcy5zcmN9IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbkltYWdlLnByb3BUeXBlcyA9IHtcclxuICBhbHQ6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXHJcbiAgc3JjOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge3JlbmRlcn0gZnJvbSAncmVhY3QtZG9tJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhZyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgZ2V0VmFsdWUoKSB7XHJcbiAgICB0aGlzLnByb3BzLnRhZ0NsaWNrKHRoaXMucHJvcHMudGFnKTtcclxuICB9XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPHNwYW4gb25DbGljaz17dGhpcy5nZXRWYWx1ZS5iaW5kKHRoaXMpfSBjbGFzc05hbWU9XCJjaGlwIGJsdWUgZGFya2VuLTNcIj57dGhpcy5wcm9wcy50YWd9PC9zcGFuPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcblRhZy5wcm9wVHlwZXMgPSB7XHJcbiAgdGFnOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxyXG4gIHRhZ0NsaWNrOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcclxufTtcclxuIiwiY29uc3QgY2F0cyA9IHtjYXRzOiBbXHJcbiAge1xyXG4gICAgaWQ6ICdDYW1wZXJDYXQnLFxyXG4gICAgbGlrZXM6IDMsXHJcbiAgICB0YWdzOiBbJ0NvZGluZycsICdHdXJ1JywgJ05pbmphJ10sXHJcbiAgICB0aXRsZTogJ0NhbXBlciBDYXQnLFxyXG4gICAgdXJsOiAnaHR0cHM6Ly9tZWRpYS5naXBoeS5jb20vbWVkaWEvbzB2d3p1RndDR0FGTy9naXBoeS5naWYnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICdDYXQtaW4tYS1oYXQnLFxyXG4gICAgbGlrZXM6IDcsXHJcbiAgICB0YWdzOiBbJ0N1dGUnLCAnSGF0JywgJ1N0YW5kaW5nJ10sXHJcbiAgICB0aXRsZTogJ0NhdC1pbi1hLWhhdCcsXHJcbiAgICB1cmw6ICdodHRwczovL3MtbWVkaWEtY2FjaGUtYWswLnBpbmltZy5jb20vNTY0eC8yNy9kZi9jYy8yN2RmY2MxN2E4Y2VmZTU2Yzk5Mjc3ZDYzYmUwZDgxNS5qcGcnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICdGbHVmZkJhbGwnLFxyXG4gICAgbGlrZXM6IDIsXHJcbiAgICB0YWdzOiBbJ0ZsdWZmeScsICdOby1sZWdzJywgJ0JhbGwnLCAnRmx5aW5nJ10sXHJcbiAgICB0aXRsZTogJ0ZsdWZmIEJhbGwnLFxyXG4gICAgdXJsOiAnaHR0cDovL3d3dy50b3AxMy5uZXQvd3AtY29udGVudC91cGxvYWRzLzIwMTUvMTAvcGVyZmVjdGx5LXRpbWVkLWZ1bm55LWNhdC1waWN0dXJlcy01LmpwZycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJ0dydW1weUNhdCcsXHJcbiAgICBsaWtlczogNCxcclxuICAgIHRhZ3M6IFsnR3J1bXB5JywgJ0Z1bm55JywgJ0ZhbW91cyddLFxyXG4gICAgdGl0bGU6ICdHcnVtcHkgQ2F0JyxcclxuICAgIHVybDogJ2h0dHA6Ly9pLmRhaWx5bWFpbC5jby51ay9pL3BpeC8yMDE0LzA4LzA1LzE0MDcyMjU5MzIwOTFfd3BzXzZfU0FOVEFfTU9OSUNBX0NBX0FVR1VTVF8wNC5qcGcnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICdIYXBweUNhdCcsXHJcbiAgICBsaWtlczogOSxcclxuICAgIHRhZ3M6IFsnSGFwcHknLCAnV2lua2luZycsICdTbWlsaW5nJ10sXHJcbiAgICB0aXRsZTogJ0hhcHB5IENhdCcsXHJcbiAgICB1cmw6ICdodHRwczovL3Bicy50d2ltZy5jb20vcHJvZmlsZV9pbWFnZXMvMjE2NzAzNTg5Ni8xMjNjYXRfNDAweDQwMC5qcGcnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICdMYXVnaGluZ0NhdCcsXHJcbiAgICBsaWtlczogMjcsXHJcbiAgICB0YWdzOiBbJ2xhdWdoaW5nJywgJ0Z1bm55JywgJ1NuaWNrZXInXSxcclxuICAgIHRpdGxlOiAnTGF1Z2hpbmcgQ2F0JyxcclxuICAgIHVybDogJ2h0dHA6Ly9ibG9nLm5la29mbGllcy5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTQvMDEvZnVubnktY2F0LmpwZycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogJ1NjYXJlZHlDYXQnLFxyXG4gICAgbGlrZXM6IDE4LFxyXG4gICAgdGFnczogWydIaWRpbmcnLCAnQ3V0ZScsICdTY2FyZWQnXSxcclxuICAgIHRpdGxlOiAnU2NhcmVkeSBDYXQgJyxcclxuICAgIHVybDogJ2h0dHBzOi8vaS55dGltZy5jb20vdmkvTUc4S0FEaVJiT1UvbWF4cmVzZGVmYXVsdC5qcGcnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6ICdTaG9ja2VkQ2F0JyxcclxuICAgIGxpa2VzOiAxMSxcclxuICAgIHRhZ3M6IFsnV2hhdCBpcyBUSEFUIT8nLCAnU2hvY2tlZCcsICdGdW5ueSddLFxyXG4gICAgdGl0bGU6ICdTaG9ja2VkIENhdCcsXHJcbiAgICB1cmw6ICdodHRwczovL2kueXRpbWcuY29tL3ZpL2ljcUR4TmFiM0RvL21heHJlc2RlZmF1bHQuanBnJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAnU2xlZXBpbmdDYXQnLFxyXG4gICAgbGlrZXM6IDIsXHJcbiAgICB0YWdzOiBbJ1NsZWVwaW5nJywgJ0N1dGUnLCAnS2l0dGVuJ10sXHJcbiAgICB0aXRsZTogJ1NsZWVwaW5nIENhdCcsXHJcbiAgICB1cmw6ICdodHRwOi8vd3d3LmFjdXRlYWRheS5jb20vYmxvZy93cC1jb250ZW50L3VwbG9hZHMvMjAxMi8wOS9zbGVlcGluZy1raXR0eS1jYXQuanBnJyxcclxuICB9LFxyXG5dLFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2F0cztcclxuIl19
