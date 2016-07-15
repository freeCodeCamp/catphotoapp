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

},{"./components/Footer":5,"./components/Modal":6,"./components/Navbar":7,"./components/Results":9,"./components/cats":11,"react":"react","react-dom":"react-dom"}],2:[function(require,module,exports){
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

},{"react":"react","react-dom":"react-dom"}],3:[function(require,module,exports){
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

},{"./Tag":10,"react":"react","react-dom":"react-dom"}],4:[function(require,module,exports){
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

},{"react":"react","react-dom":"react-dom"}],5:[function(require,module,exports){
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

},{"react":"react","react-dom":"react-dom"}],6:[function(require,module,exports){
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

},{"react":"react","react-dom":"react-dom"}],7:[function(require,module,exports){
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

},{"react":"react","react-dom":"react-dom"}],8:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _Results = require('./Results');

var _Results2 = _interopRequireDefault(_Results);

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
          _react2.default.createElement(_CardAction2.default, { likes: cat.likes, id: cat.id })
        )
      );
    }
  }]);

  return ResultCard;
}(_react2.default.Component);

exports.default = ResultCard;

},{"./CardAction":2,"./CardContent":3,"./CatImage":4,"./Results":9,"react":"react","react-dom":"react-dom"}],9:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _ResultCard = require('./ResultCard');

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

},{"./ResultCard":8,"react":"react","react-dom":"react-dom"}],10:[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvYXBwLmpzIiwiYXBwL2NvbXBvbmVudHMvQ2FyZEFjdGlvbi5qcyIsImFwcC9jb21wb25lbnRzL0NhcmRDb250ZW50LmpzIiwiYXBwL2NvbXBvbmVudHMvQ2F0SW1hZ2UuanMiLCJhcHAvY29tcG9uZW50cy9Gb290ZXIuanMiLCJhcHAvY29tcG9uZW50cy9Nb2RhbC5qcyIsImFwcC9jb21wb25lbnRzL05hdmJhci5qcyIsImFwcC9jb21wb25lbnRzL1Jlc3VsdENhcmQuanMiLCJhcHAvY29tcG9uZW50cy9SZXN1bHRzLmpzIiwiYXBwL2NvbXBvbmVudHMvVGFnLmpzIiwiYXBwL2NvbXBvbmVudHMvY2F0cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7QUNBQTs7OztBQUNBOztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFTSxHOzs7QUFDSixpQkFBYTtBQUFBOztBQUVYOztBQUZXOztBQUdYLFFBQUksUUFBUSxNQUFNLEdBQU4sQ0FBVSxNQUFWLENBQVo7QUFBQSxRQUNJLGdCQURKO0FBRUEsUUFBSSxLQUFKLEVBQVc7QUFDVCxnQkFBVSxLQUFWO0FBQ0QsS0FGRCxNQUVNO0FBQ0o7QUFDQSxpQkFBSyxJQUFMLENBQVUsT0FBVixDQUFrQixVQUFTLE1BQVQsRUFBZ0I7QUFDaEMsY0FBTSxJQUFOLENBQVcsTUFBWCxFQUFtQixNQUFuQjtBQUNBLGtCQUFVLE1BQU0sR0FBTixDQUFVLE1BQVYsQ0FBVjtBQUNELE9BSEQ7QUFJRDtBQUNELFVBQUssS0FBTCxHQUFhO0FBQ1gsWUFBTSxPQURLO0FBRVgsY0FBUTtBQUZHLEtBQWI7QUFkVztBQWtCWjs7Ozs4QkFDUyxJLEVBQUs7QUFDYixZQUFNLEtBQU47QUFDQSxXQUFLLE9BQUwsQ0FBYSxVQUFTLFFBQVQsRUFBa0I7QUFDN0IsY0FBTSxJQUFOLENBQVcsTUFBWCxFQUFt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LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7cmVuZGVyfSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHtjYXRzfSBmcm9tICcuL2NvbXBvbmVudHMvY2F0cyc7XG5pbXBvcnQgTmF2YmFyIGZyb20gJy4vY29tcG9uZW50cy9OYXZiYXInO1xuaW1wb3J0IE1vZGFsIGZyb20gJy4vY29tcG9uZW50cy9Nb2RhbCc7XG5pbXBvcnQgUmVzdWx0cyBmcm9tICcuL2NvbXBvbmVudHMvUmVzdWx0cyc7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vY29tcG9uZW50cy9Gb290ZXInO1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcigpe1xuICAgIHN1cGVyKCk7XG4gICAgLy8gcmV0cmlldmUgY2F0cyBmcm9tIGxvY2FsIHN0b3JhZ2VcbiAgICBsZXQgbG9jYWwgPSBMb2Nrci5nZXQoJ2NhdHMnKSxcbiAgICAgICAgYWxsQ2F0cztcbiAgICBpZiAobG9jYWwgKXtcbiAgICAgIGFsbENhdHMgPSBsb2NhbDtcbiAgICB9IGVsc2V7XG4gICAgICAvLyBpZiBub3QgY2F0cyBpbiBsb2NhbCBzdG9yYWdlLCBwdXQgdGhlbSB0aGVyZVxuICAgICAgY2F0cy5jYXRzLmZvckVhY2goZnVuY3Rpb24ob3VyQ2F0KXtcbiAgICAgICAgTG9ja3Iuc2FkZCgnY2F0cycsIG91ckNhdCk7XG4gICAgICAgIGFsbENhdHMgPSBMb2Nrci5nZXQoJ2NhdHMnKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgY2F0czogYWxsQ2F0cyxcbiAgICAgIHNlYXJjaDogJydcbiAgICB9O1xuICB9XG4gIHN0b3JlQ2F0cyhjYXRzKXtcbiAgICBMb2Nrci5mbHVzaCgpO1xuICAgIGNhdHMuZm9yRWFjaChmdW5jdGlvbihsb2NhbENhdCl7XG4gICAgICBMb2Nrci5zYWRkKCdjYXRzJywgbG9jYWxDYXQpO1xuICAgIH0pO1xuICB9XG4gIGFkZFVzZXJDYXQobmV3Q2F0KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7Y2F0czogbmV3Q2F0LmNvbmNhdCh0aGlzLnN0YXRlLmNhdHMpfSk7XG4gICAgdGhpcy5zdG9yZUNhdHModGhpcy5zdGF0ZS5jYXRzKTtcbiAgfVxuICBjb21wb25lbnREaWRVcGRhdGUocHJldlN0YXRlPXRoaXMuc3RhdGUuY2F0cykge1xuICAgIHRoaXMuc3RvcmVDYXRzKHRoaXMuc3RhdGUuY2F0cyk7XG4gIH1cbiAgdXBkYXRlU2VhcmNoKG5ld1NlYXJjaCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe3NlYXJjaDogbmV3U2VhcmNofSk7XG4gIH1cblxuICAgIHJlbmRlcigpe1xuICAgICAgcmV0dXJuKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxOYXZiYXIgLz5cbiAgICAgICAgICA8TW9kYWwgYWRkVXNlckNhdD17dGhpcy5hZGRVc2VyQ2F0LmJpbmQodGhpcyl9IC8+XG4gICAgICAgICAgPFJlc3VsdHMgdXBkYXRlU2VhcmNoPXt0aGlzLnVwZGF0ZVNlYXJjaC5iaW5kKHRoaXMpfSBzZWFyY2g9e3RoaXMuc3RhdGUuc2VhcmNofSBjYXRzPXt0aGlzLnN0YXRlLmNhdHN9IC8+XG4gICAgICAgICAgPEZvb3RlciAvPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7cmVuZGVyfSBmcm9tICdyZWFjdC1kb20nO1xuXG5jbGFzcyBDYXJkQWN0aW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGlkOiBwcm9wcy5pZCxcbiAgICAgIGxpa2VzOiBwcm9wcy5saWtlc1xuICAgIH07XG4gICAgdGhpcy5oYW5kbGVDbGljayA9IHRoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKTtcbiAgfVxuXG4gIGhhbmRsZUNsaWNrKCkge1xuICAgIGxldCBjYXRJZCA9IHRoaXMuc3RhdGUuaWQsXG4gICAgICAgIGxvY2FsQ2F0cyA9IExvY2tyLmdldCgnY2F0cycpLFxuICAgICAgICBpbmRleDtcbiAgICAvLyB1cGRhdGUgbGlrZSBidXR0b24gbGlrZXNcbiAgICB0aGlzLnNldFN0YXRlKHtsaWtlczogdGhpcy5zdGF0ZS5saWtlcyArIDF9KTtcbiAgICAvLyBGaW5kIGNhdCBpcyBsb2NhbCBzdG9yYWdlIGFuZCBpbmNyZW1lbnQgbGlrZXNcbiAgICBpbmRleCA9IGxvY2FsQ2F0cy5maW5kSW5kZXgoeCA9PiB4LmlkID09PSBjYXRJZCk7XG4gICAgbG9jYWxDYXRzW2luZGV4XS5saWtlcyA9IHRoaXMuc3RhdGUubGlrZXMgKyAxO1xuICAgIC8vIGVtcHR5IGFuZCB1cGRhdGUgbG9jYWwgc3RvcmFnZVxuICAgIExvY2tyLmZsdXNoKCk7XG4gICAgbG9jYWxDYXRzLmZvckVhY2goZnVuY3Rpb24obG9jYWxDYXQpe1xuICAgICAgTG9ja3Iuc2FkZCgnY2F0cycsIGxvY2FsQ2F0KTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWFjdGlvblwiPlxuICAgICAgICA8YSBjbGFzc05hbWU9XCJ3YXZlcy1lZmZlY3Qgd2F2ZXMtbGlnaHQgd2F2ZXMtcmVkIHJlZCBkYXJrZW4tMyBidG5cIiBocmVmPXt0aGlzLnByb3BzLnVybH0gZG93bmxvYWQ9e3RoaXMucHJvcHMudXJsfT5cbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1kb3dubG9hZFwiPjwvaT5cbiAgICAgICAgPC9hPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIndhdmVzLWVmZmVjdCB3YXZlcy1saWdodCB3YXZlcy1ibHVlIGJsdWUgZGFya2VuLTMgYnRuXCJcbiAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfT5cbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS10aHVtYnMtdXBcIj48L2k+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibGlrZXNfbnVtYmVyXCI+IHt0aGlzLnN0YXRlLmxpa2VzfTwvc3Bhbj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBDYXJkQWN0aW9uO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7cmVuZGVyfSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IFRhZyBmcm9tICcuL1RhZyc7XG5cbmNsYXNzIENhcmRDb250ZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgdGFnQ2xpY2sodGFnKXtcbiAgICB0aGlzLnByb3BzLnNlYXJjaEJ5VGFnKHRhZyk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1jb250ZW50XCI+XG4gICAgICAgIDxoNT57dGhpcy5wcm9wcy50aXRsZX08L2g1PlxuICAgICAgICB7dGhpcy5wcm9wcy50YWdzLm1hcCgodGFnLCBrZXkpID0+IHtcbiAgICAgICAgcmV0dXJuIDxUYWcgdGFnQ2xpY2s9e3RoaXMudGFnQ2xpY2suYmluZCh0aGlzKX0ga2V5PXtrZXl9IHRhZz17dGFnfSAvPjtcbiAgICAgICAgfSl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBDYXJkQ29udGVudDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge3JlbmRlcn0gZnJvbSAncmVhY3QtZG9tJztcblxuY2xhc3MgQ2F0SW1hZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1pbWFnZVwiPlxuICAgICAgICA8aW1nIGNsYXNzTmFtZT1cIm1hdGVyaWFsYm94ZWRcIiBzcmM9e3RoaXMucHJvcHMuc3JjfSAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgQ2F0SW1hZ2U7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtyZW5kZXJ9IGZyb20gJ3JlYWN0LWRvbSc7XG5cbmNsYXNzIEZvb3RlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8Zm9vdGVyIGNsYXNzTmFtZT1cInBhZ2UtZm9vdGVyIGJsdWUgZGFya2VuLTJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIndoaXRlLXRleHRcIj5DYXRQaG90b0FwcDwvaDU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImdyZXktdGV4dCB0ZXh0LWxpZ2h0ZW4tNFwiPkNhdFBob3RvQXBwIGhhcyBiZWVuIGNyZWF0ZWQgdG8gZm9ybSBwYXJ0IG9mIHRoZSA8YSBocmVmPVwiaHR0cHM6Ly9mcmVlY29kZWNhbXAuY29tXCIgdGFyZ2V0PVwiX2JsYW5rXCI+RnJlZSBDb2RlIENhbXA8L2E+IGN1cnJpY3VsdW0uPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXItY29weXJpZ2h0XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgIMKpIDIwMTYgQ2F0UGhvdG9BcHBcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImdyZXktdGV4dCB0ZXh0LWxpZ2h0ZW4tNCByaWdodFwiIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vYXRqb25hdGhhbi9jYXRwaG90b2FwcC9cIj5HaXRIdWI8L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9mb290ZXI+XG4gICAgKTtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge3JlbmRlcn0gZnJvbSAncmVhY3QtZG9tJztcblxuY2xhc3MgTW9kYWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xudXBsb2FkZWRVc2VyQ2F0KGUpe1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGxldCBuZXdDYXQgPVt7XG4gICAgICAgIGlkOiB0aGlzLnJlZnMudGl0bGUudmFsdWUucmVwbGFjZSgvXFxzKy9nLCAnJyksXG4gICAgICAgIHRpdGxlOiB0aGlzLnJlZnMudGl0bGUudmFsdWUsXG4gICAgICAgIHVybDogdGhpcy5yZWZzLnVybC52YWx1ZSxcbiAgICAgICAgdGFnczogdGhpcy5yZWZzLnRhZ3MudmFsdWUuc3BsaXQoJywnKSxcbiAgICAgICAgbGlrZXM6IDFcbiAgICAgICAgfV07XG4gICAgICB0aGlzLnByb3BzLmFkZFVzZXJDYXQobmV3Q2F0KTtcbiAgICAgIC8vIENsZWFyIGZvcm0gZmllbGRzXG4gICAgICB0aGlzLnJlZnMudGl0bGUudmFsdWUgPSAnJztcbiAgICAgIHRoaXMucmVmcy51cmwudmFsdWUgPSAnJztcbiAgICAgIHRoaXMucmVmcy50YWdzLnZhbHVlID0gJyc7XG4gICAgfVxuXG4gIHJlbmRlcigpe1xuICAgICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgXHRcdDxkaXYgaWQ9XCJhZGRDYXRNb2RhbFwiIGNsYXNzTmFtZT1cIm1vZGFsXCI+XG4gICAgICBcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWNvbnRlbnRcIj5cbiAgICAgIFx0XHRcdFx0PGg0PkFkZCBDYXQgUGhvdG88L2g0PlxuICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy51cGxvYWRlZFVzZXJDYXQuYmluZCh0aGlzKX0+XG4gICAgICBcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgIFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZmllbGQgY29sIHMxMlwiPlxuICAgICAgXHRcdFx0XHRcdFx0XHQ8aW5wdXQgcGxhY2Vob2xkZXI9XCJFbnRlciBUaXRsZVwiIHJlZj1cInRpdGxlXCIgaWQ9XCJ0aXRsZVwiIHR5cGU9XCJ0ZXh0XCIgcmVxdWlyZWQgLz5cbiAgICAgIFx0XHRcdFx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9XCJ0aXRsZVwiIGRhdGEtZXJyb3I9XCJDYXQgdGl0bGUgaGFzIGJlZW4gdGFrZW5cIiBkYXRhLXN1Y2Nlc3M9XCJDYXQgdGl0bGUgaXMgZnJlZSB0byB1c2VcIj5UaXRsZTwvbGFiZWw+XG4gICAgICBcdFx0XHRcdFx0XHQ8L2Rpdj5cbiAgICAgIFx0XHRcdFx0XHQ8L2Rpdj5cbiAgICAgIFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbnB1dC1maWVsZCBjb2wgczEyXCI+XG4gICAgICBcdFx0XHRcdFx0XHRcdDxpbnB1dCBwbGFjZWhvbGRlcj1cIkVudGVyIFVSTFwiIHJlZj1cInVybFwiIGlkPVwidXJsXCIgdHlwZT1cInVybFwiIGNsYXNzTmFtZT1cInZhbGlkYXRlXCIgcmVxdWlyZWQgLz5cbiAgICAgIFx0XHRcdFx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9XCJ1cmxcIiBkYXRhLWVycm9yPVwiUGxlYXNlIHVwbG9hZCBhIEdJRiwgUE5HIG9yIEpQR1wiIGRhdGEtc3VjY2Vzcz1cIlRoYXRzIGEgVVJMIGZvciBzdXJlISBJIGhvcGUgaXQgZW5kcyBpbiBHSUYsIFBORyBvciBKUEcuLi5cIj5DYXQgUGhvdG8gVVJMPC9sYWJlbD5cbiAgICAgIFx0XHRcdFx0XHRcdDwvZGl2PlxuICAgICAgXHRcdFx0XHRcdDwvZGl2PlxuICAgICAgXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICBcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWZpZWxkIGNvbCBzNlwiPlxuICAgICAgXHRcdFx0XHRcdFx0XHQ8aW5wdXQgcGxhY2Vob2xkZXI9XCJTZXBhcmF0ZSB0YWdzIHdpdGggYSBjb21tYVwiIHJlZj1cInRhZ3NcIiBpZD1cInRhZ3NcIiB0eXBlPVwidGV4dFwiIHJlcXVpcmVkIC8+XG4gICAgICBcdFx0XHRcdFx0XHRcdDxsYWJlbCBodG1sRm9yPVwidGFnc1wiPlRhZ3M8L2xhYmVsPlxuICAgICAgXHRcdFx0XHRcdFx0PC9kaXY+XG4gICAgICBcdFx0XHRcdFx0PC9kaXY+XG4gICAgICBcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgIFx0XHRcdFx0XHRcdDxidXR0b24gaWQ9XCJzdWJtaXQtYnRuXCIgY2xhc3NOYW1lPVwiYnRuIHdhdmVzLWVmZmVjdCB3YXZlcy1ibHVlIGJsdWUgZGFya2VuLTEgc3VibWl0XCIgdHlwZT1cInN1Ym1pdFwiIG5hbWU9XCJhY3Rpb25cIj5cbiAgICAgIFx0XHRcdFx0XHRcdFx0PGkgY2xhc3NOYW1lPVwiZmEgZmEtc2VuZFwiPjwvaT5cbiAgICAgIFx0XHRcdFx0XHRcdFx0Jm5ic3A7U3VibWl0XG4gICAgICBcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cbiAgICAgIFx0XHRcdFx0XHQ8L2Rpdj5cbiAgICAgIFx0XHRcdFx0PC9mb3JtPlxuICAgICAgXHRcdFx0PC9kaXY+XG4gICAgICBcdFx0PC9kaXY+XG4gICAgICBcdDwvZGl2PlxuICAgICAgKTtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgTW9kYWw7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtyZW5kZXJ9IGZyb20gJ3JlYWN0LWRvbSc7XG5cbmNsYXNzIE5hdmJhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpe1xuICAgICAgcmV0dXJuKFxuICAgICAgPG5hdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtd3JhcHBlciBibHVlIGRhcmtlbi0yXCI+XG4gICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJicmFuZC1sb2dvXCI+Jm5ic3A7Jm5ic3A7Jm5ic3A7Q2F0UGhvdG9BcHA8L2E+XG4gICAgICAgICAgPGEgaHJlZj1cIiNcIiBkYXRhLWFjdGl2YXRlcz1cIm1vYmlsZVwiIGNsYXNzTmFtZT1cImJ1dHRvbi1jb2xsYXBzZVwiPjxpIGNsYXNzTmFtZT1cImZhIGZhLWJhcnNcIj48L2k+PC9hPlxuICAgICAgICAgIDx1bCBpZD1cIm5hdi1tb2JpbGVcIiBjbGFzc05hbWU9XCJyaWdodCBoaWRlLW9uLW1lZC1hbmQtZG93blwiPlxuICAgICAgICAgICAgPGxpPjxhIGNsYXNzTmFtZT1cIm1vZGFsLXRyaWdnZXJcIiBocmVmPVwiI2FkZENhdE1vZGFsXCI+QWRkIENhdCBQaG90bzwvYT48L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInNpZGUtbmF2XCIgaWQ9XCJtb2JpbGVcIj5cblxuICAgICAgICAgICAgPGxpPjxhIGNsYXNzTmFtZT1cIm1vZGFsLXRyaWdnZXJcIiBocmVmPVwiI2FkZENhdE1vZGFsXCI+QWRkIENhdCBQaG90bzwvYT48L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9uYXY+XG5cblxuICAgICk7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge3JlbmRlcn0gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBSZXN1bHRzIGZyb20gJy4vUmVzdWx0cyc7XG5pbXBvcnQgQ2F0SW1hZ2UgZnJvbSAnLi9DYXRJbWFnZSc7XG5pbXBvcnQgQ2FyZENvbnRlbnQgZnJvbSAnLi9DYXJkQ29udGVudCc7XG5pbXBvcnQgQ2FyZEFjdGlvbiBmcm9tICcuL0NhcmRBY3Rpb24nO1xuXG5jbGFzcyBSZXN1bHRDYXJkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGxldCBjYXQgPSB0aGlzLnByb3BzLmNhdDtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBzMyBtNCBzMTJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGhvdmVyYWJsZVwiPlxuICAgICAgICAgIDxDYXRJbWFnZSBzcmM9e2NhdC51cmx9IC8+XG4gICAgICAgICAgPENhcmRDb250ZW50IHNlYXJjaEJ5VGFnPXt0aGlzLnByb3BzLnNlYXJjaEJ5VGFnfSB0aXRsZT17Y2F0LnRpdGxlfSB0YWdzPXtjYXQudGFnc30gLz5cbiAgICAgICAgICA8Q2FyZEFjdGlvbiBsaWtlcz17Y2F0Lmxpa2VzfSBpZD17Y2F0LmlkfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IFJlc3VsdENhcmQ7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtyZW5kZXJ9IGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgUmVzdWx0Q2FyZCBmcm9tICcuL1Jlc3VsdENhcmQnO1xuXG5jbGFzcyBSZXN1bHRzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc2VhcmNoQnlJbnB1dCgpe1xuICAgIHRoaXMucHJvcHMudXBkYXRlU2VhcmNoKHRoaXMucmVmcy5zZWFyY2gudmFsdWUpO1xuICB9XG4gIHNlYXJjaEJ5VGFnKHRhZyl7XG4gICAgdGhpcy5wcm9wcy51cGRhdGVTZWFyY2godGFnKTtcbiAgfVxuICByZW5kZXIoKSB7XG5cbiAgICBsZXQgc2VhcmNoVmFsO1xuICAgIGlmKHRoaXMucHJvcHMuc2VhcmNoID09PSAnJyl7XG4gICAgICBzZWFyY2hWYWwgPSAnICc7XG4gICAgfWVsc2V7XG4gICAgICBzZWFyY2hWYWwgPSB0aGlzLnByb3BzLnNlYXJjaDtcbiAgICB9XG5cbiAgICBsZXQgcHJlRmlsdGVyZWRDYXRzID0gdGhpcy5wcm9wcy5jYXRzLmZpbHRlcigoY2F0KSA9PiB7XG4gICAgICBsZXQgc2VhcmNoVmFsO1xuICAgICAgaWYodGhpcy5wcm9wcy5zZWFyY2ggPT09ICcnKXtcbiAgICAgICAgc2VhcmNoVmFsID0gJyAnO1xuICAgICAgfWVsc2V7XG4gICAgICAgIHNlYXJjaFZhbCA9IHRoaXMucHJvcHMuc2VhcmNoO1xuICAgICAgfVxuICAgICAgICByZXR1cm4gY2F0LnRhZ3MuaW5jbHVkZXMoc2VhcmNoVmFsKTtcbiAgICAgIH0pO1xuICAgIGxldCBmaWx0ZXJlZENhdHM7XG5cbiAgICBpZihwcmVGaWx0ZXJlZENhdHMubGVuZ3RoID09PSAwKXtcbiAgICAgIGZpbHRlcmVkQ2F0cyA9IHRoaXMucHJvcHMuY2F0cztcbiAgICB9ZWxzZXtcbiAgICAgIGZpbHRlcmVkQ2F0cyA9IHByZUZpbHRlcmVkQ2F0cztcbiAgICB9XG4gICAgY29uc29sZS5sb2cocHJlRmlsdGVyZWRDYXRzLmxlbmd0aCk7XG4gICAgcmV0dXJuKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcmVmPVwic2VhcmNoXCIgb25DaGFuZ2U9e3RoaXMuc2VhcmNoQnlJbnB1dC5iaW5kKHRoaXMpfSB2YWx1ZT17dGhpcy5wcm9wcy5zZWFyY2h9IC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVzdWx0c1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICB7ZmlsdGVyZWRDYXRzLm1hcCgoY2F0KSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiA8UmVzdWx0Q2FyZCBzZWFyY2hCeVRhZz17dGhpcy5zZWFyY2hCeVRhZy5iaW5kKHRoaXMpfSBrZXk9e2NhdC5pZH0gY2F0PXtjYXR9IC8+O1xuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZXN1bHRzO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7cmVuZGVyfSBmcm9tICdyZWFjdC1kb20nO1xuXG5jbGFzcyBUYWcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBnZXRWYWx1ZSgpe1xuICB0aGlzLnByb3BzLnRhZ0NsaWNrKHRoaXMucHJvcHMudGFnKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9e3RoaXMuZ2V0VmFsdWUuYmluZCh0aGlzKX1cbiAgICAgICAgICBjbGFzc05hbWU9XCJjaGlwIGJsdWUgZGFya2VuLTNcIiA+e3RoaXMucHJvcHMudGFnfTwvc3Bhbj5cbiAgICApO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBUYWc7XG4iLCJleHBvcnQgbGV0IGNhdHMgPSB7XCJjYXRzXCI6W1xuICB7XG4gICAgXCJpZFwiOiBcIkNhbXBlckNhdFwiLFxuICAgIFwibGlrZXNcIjogMyxcbiAgICBcInRhZ3NcIjogW1wiQ29kaW5nXCIsXCJHdXJ1XCIsXCJOaW5qYVwiXSxcbiAgICBcInRpdGxlXCI6IFwiQ2FtcGVyIENhdFwiLFxuICAgIFwidXJsXCI6IFwiaHR0cHM6Ly9tZWRpYS5naXBoeS5jb20vbWVkaWEvbzB2d3p1RndDR0FGTy9naXBoeS5naWZcIlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiBcIkNhdC1pbi1hLWhhdFwiLFxuICAgIFwibGlrZXNcIjogNyxcbiAgICBcInRhZ3NcIjogW1wiQ3V0ZVwiLCBcIkhhdFwiLCBcIlN0YW5kaW5nXCIsIFwiXCJdLFxuICAgIFwidGl0bGVcIjogXCJDYXQtaW4tYS1oYXRcIixcbiAgICBcInVybFwiOiBcImh0dHBzOi8vcy1tZWRpYS1jYWNoZS1hazAucGluaW1nLmNvbS81NjR4LzI3L2RmL2NjLzI3ZGZjYzE3YThjZWZlNTZjOTkyNzdkNjNiZTBkODE1LmpwZ1wiXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IFwiRmx1ZmZCYWxsXCIsXG4gICAgXCJsaWtlc1wiOiAyLFxuICAgIFwidGFnc1wiOltcIkZsdWZmeVwiLCBcIk5vLWxlZ3NcIiwgXCJCYWxsXCIsIFwiRmx5aW5nXCJdLFxuICAgIFwidGl0bGVcIjogXCJGbHVmZiBCYWxsXCIsXG4gICAgXCJ1cmxcIjogXCJodHRwOi8vd3d3LnRvcDEzLm5ldC93cC1jb250ZW50L3VwbG9hZHMvMjAxNS8xMC9wZXJmZWN0bHktdGltZWQtZnVubnktY2F0LXBpY3R1cmVzLTUuanBnXCJcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogXCJHcnVtcHlDYXRcIixcbiAgICBcImxpa2VzXCI6IDQsXG4gICAgXCJ0YWdzXCI6IFtcIkdydW1weVwiLCBcIkZ1bm55XCIsIFwiRmFtb3VzXCJdLFxuICAgIFwidGl0bGVcIjogXCJHcnVtcHkgQ2F0XCIsXG4gICAgXCJ1cmxcIjogXCJodHRwOi8vaS5kYWlseW1haWwuY28udWsvaS9waXgvMjAxNC8wOC8wNS8xNDA3MjI1OTMyMDkxX3dwc182X1NBTlRBX01PTklDQV9DQV9BVUdVU1RfMDQuanBnXCJcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogXCJIYXBweUNhdFwiLFxuICAgIFwibGlrZXNcIjogOSxcbiAgICBcInRhZ3NcIjogW1wiSGFwcHlcIiwgXCJXaW5raW5nXCIsIFwiU21pbGluZ1wiXSxcbiAgICBcInRpdGxlXCI6IFwiSGFwcHkgQ2F0XCIsXG4gICAgXCJ1cmxcIjogXCJodHRwczovL3Bicy50d2ltZy5jb20vcHJvZmlsZV9pbWFnZXMvMjE2NzAzNTg5Ni8xMjNjYXRfNDAweDQwMC5qcGdcIlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiBcIkxhdWdoaW5nQ2F0XCIsXG4gICAgXCJsaWtlc1wiOiAyNyxcbiAgICBcInRhZ3NcIjogW1wibGF1Z2hpbmdcIiwgXCJGdW5ueVwiLCBcIlNuaWNrZXJcIl0sXG4gICAgXCJ0aXRsZVwiOiBcIkxhdWdoaW5nIENhdFwiLFxuICAgIFwidXJsXCI6IFwiaHR0cDovL2Jsb2cubmVrb2ZsaWVzLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxNC8wMS9mdW5ueS1jYXQuanBnXCJcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogXCJTY2FyZWR5Q2F0XCIsXG4gICAgXCJsaWtlc1wiOiAxOCxcbiAgICBcInRhZ3NcIjogW1wiSGlkaW5nXCIsIFwiQ3V0ZVwiLCBcIlNjYXJlZFwiXSxcbiAgICBcInRpdGxlXCI6IFwiU2NhcmVkeSBDYXQgXCIsXG4gICAgXCJ1cmxcIjogXCJodHRwczovL2kueXRpbWcuY29tL3ZpL01HOEtBRGlSYk9VL21heHJlc2RlZmF1bHQuanBnXCJcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogXCJTaG9ja2VkQ2F0XCIsXG4gICAgXCJsaWtlc1wiOiAxMSxcbiAgICBcInRhZ3NcIjogW1wiV2hhdCBpcyBUSEFUIT9cIiwgXCJTaG9ja2VkXCIsIFwiRnVubnlcIl0sXG4gICAgXCJ0aXRsZVwiOiBcIlNob2NrZWQgQ2F0XCIsXG4gICAgXCJ1cmxcIjogXCJodHRwczovL2kueXRpbWcuY29tL3ZpL2ljcUR4TmFiM0RvL21heHJlc2RlZmF1bHQuanBnXCJcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogXCJTbGVlcGluZ0NhdFwiLFxuICAgIFwibGlrZXNcIjogMixcbiAgICBcInRhZ3NcIjogW1wiU2xlZXBpbmdcIiwgXCJDdXRlXCIsIFwiS2l0dGVuXCJdLFxuICAgIFwidGl0bGVcIjogXCJTbGVlcGluZyBDYXRcIixcbiAgICBcInVybFwiOiBcImh0dHA6Ly93d3cuYWN1dGVhZGF5LmNvbS9ibG9nL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDEyLzA5L3NsZWVwaW5nLWtpdHR5LWNhdC5qcGdcIlxuICB9XG5dfTtcbiJdfQ==
