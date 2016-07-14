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
      cats: allCats
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
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Navbar2.default, null),
        _react2.default.createElement(_Modal2.default, { addUserCat: this.addUserCat.bind(this) }),
        _react2.default.createElement(_Results2.default, { cats: this.state.cats }),
        _react2.default.createElement(_Footer2.default, null)
      );
    }
  }]);

  return App;
}(_react2.default.Component);

(0, _reactDom.render)(_react2.default.createElement(App, null), document.getElementById('app'));

},{"./components/Footer":5,"./components/Modal":6,"./components/Navbar":7,"./components/Results":9,"./components/cats":10,"react":"react","react-dom":"react-dom"}],2:[function(require,module,exports){
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
    };_this.handleClick = _this.handleClick.bind(_this);
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
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'card-content' },
        _react2.default.createElement(
          'h5',
          null,
          this.props.title
        ),
        this.props.tags.map(function (tag, key) {
          return _react2.default.createElement(
            'span',
            { className: 'chip blue darken-3', key: key },
            tag
          );
        })
      );
    }
  }]);

  return CardContent;
}(_react2.default.Component);

exports.default = CardContent;

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
          _react2.default.createElement(_CardContent2.default, { title: cat.title, tags: cat.tags }),
          _react2.default.createElement(_CardAction2.default, { likes: cat.likes, url: cat.url, id: cat.id })
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
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'container' },
        _react2.default.createElement(
          'div',
          { className: 'results' },
          _react2.default.createElement(
            'div',
            { className: 'row' },
            this.props.cats.map(function (cat) {
              return _react2.default.createElement(_ResultCard2.default, { key: cat.id, cat: cat });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvYXBwLmpzIiwiYXBwL2NvbXBvbmVudHMvQ2FyZEFjdGlvbi5qcyIsImFwcC9jb21wb25lbnRzL0NhcmRDb250ZW50LmpzIiwiYXBwL2NvbXBvbmVudHMvQ2F0SW1hZ2UuanMiLCJhcHAvY29tcG9uZW50cy9Gb290ZXIuanMiLCJhcHAvY29tcG9uZW50cy9Nb2RhbC5qcyIsImFwcC9jb21wb25lbnRzL05hdmJhci5qcyIsImFwcC9jb21wb25lbnRzL1Jlc3VsdENhcmQuanMiLCJhcHAvY29tcG9uZW50cy9SZXN1bHRzLmpzIiwiYXBwL2NvbXBvbmVudHMvY2F0cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7QUNBQTs7OztBQUNBOztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFTSxHOzs7QUFDSixpQkFBYTtBQUFBOztBQUVYOztBQUZXOztBQUdYLFFBQUksUUFBUSxNQUFNLEdBQU4sQ0FBVSxNQUFWLENBQVo7QUFBQSxRQUNJLGdCQURKO0FBRUEsUUFBRyxLQUFILEVBQVM7QUFDUCxnQkFBVSxLQUFWO0FBQ0QsS0FGRCxNQUVLO0FBQ0g7QUFDQSxpQkFBSyxJQUFMLENBQVUsT0FBVixDQUFrQixVQUFTLE1BQVQsRUFBZ0I7QUFDaEMsY0FBTSxJQUFOLENBQVcsTUFBWCxFQUFtQixNQUFuQjtBQUNBLGtCQUFVLE1BQU0sR0FBTixDQUFVLE1BQVYsQ0FBVjtBQUNELE9BSEQ7QUFJRDtBQUNELFVBQUssS0FBTCxHQUFhO0FBQ1gsWUFBTTtBQURLLEtBQWI7QUFkVztBQWlCWjs7Ozs4QkFDUyxJLEVBQUs7QUFDWCxZQUFNLEtBQU47QUFDRixXQUFLLE9BQUwsQ0FBYSxVQUFTLFFBQVQsRUFBa0I7QUFDN0IsY0FBTSxJQUFOLENBQVcsTUFBWCxFQUFtQixRQUFuQjtBQUNELE9BRkQ7QUFHRDs7OytCQUNVLE0sRUFBTztB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QixFQTJDeEI7QUFDRSxVQUFNLFlBRFI7QUFFRSxhQUFTLEVBRlg7QUFHRSxZQUFRLENBQUMsUUFBRCxFQUFXLE1BQVgsRUFBbUIsUUFBbkIsQ0FIVjtBQUlFLGFBQVMsY0FKWDtBQUtFLFdBQU87QUFMVCxHQTNDd0IsRUFrRHhCO0FBQ0UsVUFBTSxZQURSO0FBRUUsYUFBUyxFQUZYO0FBR0UsWUFBUSxDQUFDLGdCQUFELEVBQW1CLFNBQW5CLEVBQThCLE9BQTlCLENBSFY7QUFJRSxhQUFTLGFBSlg7QUFLRSxXQUFPO0FBTFQsR0FsRHdCLEVBeUR4QjtBQUNFLFVBQU0sYUFEUjtBQUVFLGFBQVMsQ0FGWDtBQUdFLFlBQVEsQ0FBQyxVQUFELEVBQWEsTUFBYixFQUFxQixRQUFyQixDQUhWO0FBSUUsYUFBUyxjQUpYO0FBS0UsV0FBTztBQUxULEdBekR3QixDQUFSLEVBQVgiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7cmVuZGVyfSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHtjYXRzfSBmcm9tICcuL2NvbXBvbmVudHMvY2F0cyc7XG5pbXBvcnQgTmF2YmFyIGZyb20gJy4vY29tcG9uZW50cy9OYXZiYXInO1xuaW1wb3J0IE1vZGFsIGZyb20gJy4vY29tcG9uZW50cy9Nb2RhbCc7XG5pbXBvcnQgUmVzdWx0cyBmcm9tICcuL2NvbXBvbmVudHMvUmVzdWx0cyc7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vY29tcG9uZW50cy9Gb290ZXInO1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcigpe1xuICAgIHN1cGVyKCk7XG4gICAgLy8gcmV0cmlldmUgY2F0cyBmcm9tIGxvY2FsIHN0b3JhZ2VcbiAgICBsZXQgbG9jYWwgPSBMb2Nrci5nZXQoJ2NhdHMnKSxcbiAgICAgICAgYWxsQ2F0cztcbiAgICBpZihsb2NhbCl7XG4gICAgICBhbGxDYXRzID0gbG9jYWw7XG4gICAgfWVsc2V7XG4gICAgICAvLyBpZiBub3QgY2F0cyBpbiBsb2NhbCBzdG9yYWdlLCBwdXQgdGhlbSB0aGVyZVxuICAgICAgY2F0cy5jYXRzLmZvckVhY2goZnVuY3Rpb24ob3VyQ2F0KXtcbiAgICAgICAgTG9ja3Iuc2FkZCgnY2F0cycsIG91ckNhdCk7XG4gICAgICAgIGFsbENhdHMgPSBMb2Nrci5nZXQoJ2NhdHMnKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgY2F0czogYWxsQ2F0c1xuICAgICAgfTtcbiAgfVxuICBzdG9yZUNhdHMoY2F0cyl7XG4gICAgICBMb2Nrci5mbHVzaCgpO1xuICAgIGNhdHMuZm9yRWFjaChmdW5jdGlvbihsb2NhbENhdCl7XG4gICAgICBMb2Nrci5zYWRkKCdjYXRzJywgbG9jYWxDYXQpO1xuICAgIH0pO1xuICB9XG4gIGFkZFVzZXJDYXQobmV3Q2F0KXtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2NhdHM6IG5ld0NhdC5jb25jYXQodGhpcy5zdGF0ZS5jYXRzKX0pO1xuICAgICAgdGhpcy5zdG9yZUNhdHModGhpcy5zdGF0ZS5jYXRzKTtcbiAgICB9XG4gICAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZTdGF0ZT10aGlzLnN0YXRlLmNhdHMpe1xuICAgICAgdGhpcy5zdG9yZUNhdHModGhpcy5zdGF0ZS5jYXRzKTtcbiAgICB9XG4gICAgcmVuZGVyKCl7XG4gICAgICByZXR1cm4oXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPE5hdmJhciAvPlxuICAgICAgICAgIDxNb2RhbCBhZGRVc2VyQ2F0PXt0aGlzLmFkZFVzZXJDYXQuYmluZCh0aGlzKX0gLz5cbiAgICAgICAgICA8UmVzdWx0cyBjYXRzPXt0aGlzLnN0YXRlLmNhdHN9IC8+XG4gICAgICAgICAgPEZvb3RlciAvPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7cmVuZGVyfSBmcm9tICdyZWFjdC1kb20nO1xuXG5jbGFzcyBDYXJkQWN0aW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGlkOiBwcm9wcy5pZCxcbiAgICAgIGxpa2VzOiBwcm9wcy5saWtlc1xuICAgIH07IHRoaXMuaGFuZGxlQ2xpY2sgPSB0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcyk7XG4gIH1cblxuICBoYW5kbGVDbGljaygpIHtcbiAgICAgIGxldCBjYXRJZCA9IHRoaXMuc3RhdGUuaWQsXG4gICAgICAgICAgbG9jYWxDYXRzID0gTG9ja3IuZ2V0KCdjYXRzJyksXG4gICAgICAgICAgaW5kZXg7XG4gICAgICAvLyB1cGRhdGUgbGlrZSBidXR0b24gbGlrZXNcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2xpa2VzOiB0aGlzLnN0YXRlLmxpa2VzICsgMX0pO1xuICAgICAgLy8gRmluZCBjYXQgaXMgbG9jYWwgc3RvcmFnZSBhbmQgaW5jcmVtZW50IGxpa2VzXG4gICAgICBpbmRleCA9IGxvY2FsQ2F0cy5maW5kSW5kZXgoeCA9PiB4LmlkID09PSBjYXRJZCk7XG4gICAgICBsb2NhbENhdHNbaW5kZXhdLmxpa2VzID0gdGhpcy5zdGF0ZS5saWtlcyArIDE7XG4gICAgICAvLyBlbXB0eSBhbmQgdXBkYXRlIGxvY2FsIHN0b3JhZ2VcbiAgICAgIExvY2tyLmZsdXNoKCk7XG4gICAgICBsb2NhbENhdHMuZm9yRWFjaChmdW5jdGlvbihsb2NhbENhdCl7XG4gICAgICAgIExvY2tyLnNhZGQoJ2NhdHMnLCBsb2NhbENhdCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYWN0aW9uXCI+XG4gICAgICAgIDxhIGNsYXNzTmFtZT1cIndhdmVzLWVmZmVjdCB3YXZlcy1saWdodCB3YXZlcy1yZWQgcmVkIGRhcmtlbi0zIGJ0blwiIGhyZWY9e3RoaXMucHJvcHMudXJsfSBkb3dubG9hZD17dGhpcy5wcm9wcy51cmx9PlxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLWRvd25sb2FkXCI+PC9pPlxuICAgICAgICA8L2E+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwid2F2ZXMtZWZmZWN0IHdhdmVzLWxpZ2h0IHdhdmVzLWJsdWUgYmx1ZSBkYXJrZW4tMyBidG5cIlxuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9PlxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXRodW1icy11cFwiPjwvaT5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsaWtlc19udW1iZXJcIj4ge3RoaXMuc3RhdGUubGlrZXN9PC9zcGFuPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IENhcmRBY3Rpb247XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtyZW5kZXJ9IGZyb20gJ3JlYWN0LWRvbSc7XG5cbmNsYXNzIENhcmRDb250ZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtY29udGVudFwiPlxuICAgICAgICA8aDU+e3RoaXMucHJvcHMudGl0bGV9PC9oNT5cbiAgICAgICAge3RoaXMucHJvcHMudGFncy5tYXAoZnVuY3Rpb24odGFnLCBrZXkpIHtcbiAgICAgICAgICByZXR1cm4gPHNwYW4gY2xhc3NOYW1lPVwiY2hpcCBibHVlIGRhcmtlbi0zXCIga2V5PXtrZXl9ID57dGFnfTwvc3Bhbj5cbiAgICAgICAgfSl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBDYXJkQ29udGVudDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge3JlbmRlcn0gZnJvbSAncmVhY3QtZG9tJztcblxuY2xhc3MgQ2F0SW1hZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1pbWFnZVwiPlxuICAgICAgICA8aW1nIGNsYXNzTmFtZT1cIm1hdGVyaWFsYm94ZWRcIiBzcmM9e3RoaXMucHJvcHMuc3JjfSAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgQ2F0SW1hZ2U7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtyZW5kZXJ9IGZyb20gJ3JlYWN0LWRvbSc7XG5cbmNsYXNzIEZvb3RlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8Zm9vdGVyIGNsYXNzTmFtZT1cInBhZ2UtZm9vdGVyIGJsdWUgZGFya2VuLTJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIndoaXRlLXRleHRcIj5DYXRQaG90b0FwcDwvaDU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImdyZXktdGV4dCB0ZXh0LWxpZ2h0ZW4tNFwiPkNhdFBob3RvQXBwIGhhcyBiZWVuIGNyZWF0ZWQgdG8gZm9ybSBwYXJ0IG9mIHRoZSA8YSBocmVmPVwiaHR0cHM6Ly9mcmVlY29kZWNhbXAuY29tXCIgdGFyZ2V0PVwiX2JsYW5rXCI+RnJlZSBDb2RlIENhbXA8L2E+IGN1cnJpY3VsdW0uPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXItY29weXJpZ2h0XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgIMKpIDIwMTYgQ2F0UGhvdG9BcHBcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImdyZXktdGV4dCB0ZXh0LWxpZ2h0ZW4tNCByaWdodFwiIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vYXRqb25hdGhhbi9jYXRwaG90b2FwcC9cIj5HaXRIdWI8L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9mb290ZXI+XG4gICAgKTtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge3JlbmRlcn0gZnJvbSAncmVhY3QtZG9tJztcblxuY2xhc3MgTW9kYWwgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xudXBsb2FkZWRVc2VyQ2F0KGUpe1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGxldCBuZXdDYXQgPVt7XG4gICAgICAgIGlkOiB0aGlzLnJlZnMudGl0bGUudmFsdWUucmVwbGFjZSgvXFxzKy9nLCAnJyksXG4gICAgICAgIHRpdGxlOiB0aGlzLnJlZnMudGl0bGUudmFsdWUsXG4gICAgICAgIHVybDogdGhpcy5yZWZzLnVybC52YWx1ZSxcbiAgICAgICAgdGFnczogdGhpcy5yZWZzLnRhZ3MudmFsdWUuc3BsaXQoJywnKSxcbiAgICAgICAgbGlrZXM6IDFcbiAgICAgICAgfV07XG4gICAgICB0aGlzLnByb3BzLmFkZFVzZXJDYXQobmV3Q2F0KTtcbiAgICAgIC8vIENsZWFyIGZvcm0gZmllbGRzXG4gICAgICB0aGlzLnJlZnMudGl0bGUudmFsdWUgPSAnJztcbiAgICAgIHRoaXMucmVmcy51cmwudmFsdWUgPSAnJztcbiAgICAgIHRoaXMucmVmcy50YWdzLnZhbHVlID0gJyc7XG4gICAgfVxuXG4gIHJlbmRlcigpe1xuICAgICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgXHRcdDxkaXYgaWQ9XCJhZGRDYXRNb2RhbFwiIGNsYXNzTmFtZT1cIm1vZGFsXCI+XG4gICAgICBcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWNvbnRlbnRcIj5cbiAgICAgIFx0XHRcdFx0PGg0PkFkZCBDYXQgUGhvdG88L2g0PlxuICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy51cGxvYWRlZFVzZXJDYXQuYmluZCh0aGlzKX0+XG4gICAgICBcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgIFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZmllbGQgY29sIHMxMlwiPlxuICAgICAgXHRcdFx0XHRcdFx0XHQ8aW5wdXQgcGxhY2Vob2xkZXI9XCJFbnRlciBUaXRsZVwiIHJlZj1cInRpdGxlXCIgaWQ9XCJ0aXRsZVwiIHR5cGU9XCJ0ZXh0XCIgcmVxdWlyZWQgLz5cbiAgICAgIFx0XHRcdFx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9XCJ0aXRsZVwiIGRhdGEtZXJyb3I9XCJDYXQgdGl0bGUgaGFzIGJlZW4gdGFrZW5cIiBkYXRhLXN1Y2Nlc3M9XCJDYXQgdGl0bGUgaXMgZnJlZSB0byB1c2VcIj5UaXRsZTwvbGFiZWw+XG4gICAgICBcdFx0XHRcdFx0XHQ8L2Rpdj5cbiAgICAgIFx0XHRcdFx0XHQ8L2Rpdj5cbiAgICAgIFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbnB1dC1maWVsZCBjb2wgczEyXCI+XG4gICAgICBcdFx0XHRcdFx0XHRcdDxpbnB1dCBwbGFjZWhvbGRlcj1cIkVudGVyIFVSTFwiIHJlZj1cInVybFwiIGlkPVwidXJsXCIgdHlwZT1cInVybFwiIGNsYXNzTmFtZT1cInZhbGlkYXRlXCIgcmVxdWlyZWQgLz5cbiAgICAgIFx0XHRcdFx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9XCJ1cmxcIiBkYXRhLWVycm9yPVwiUGxlYXNlIHVwbG9hZCBhIEdJRiwgUE5HIG9yIEpQR1wiIGRhdGEtc3VjY2Vzcz1cIlRoYXRzIGEgVVJMIGZvciBzdXJlISBJIGhvcGUgaXQgZW5kcyBpbiBHSUYsIFBORyBvciBKUEcuLi5cIj5DYXQgUGhvdG8gVVJMPC9sYWJlbD5cbiAgICAgIFx0XHRcdFx0XHRcdDwvZGl2PlxuICAgICAgXHRcdFx0XHRcdDwvZGl2PlxuICAgICAgXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICBcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWZpZWxkIGNvbCBzNlwiPlxuICAgICAgXHRcdFx0XHRcdFx0XHQ8aW5wdXQgcGxhY2Vob2xkZXI9XCJTZXBhcmF0ZSB0YWdzIHdpdGggYSBjb21tYVwiIHJlZj1cInRhZ3NcIiBpZD1cInRhZ3NcIiB0eXBlPVwidGV4dFwiIHJlcXVpcmVkIC8+XG4gICAgICBcdFx0XHRcdFx0XHRcdDxsYWJlbCBodG1sRm9yPVwidGFnc1wiPlRhZ3M8L2xhYmVsPlxuICAgICAgXHRcdFx0XHRcdFx0PC9kaXY+XG4gICAgICBcdFx0XHRcdFx0PC9kaXY+XG4gICAgICBcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgIFx0XHRcdFx0XHRcdDxidXR0b24gaWQ9XCJzdWJtaXQtYnRuXCIgY2xhc3NOYW1lPVwiYnRuIHdhdmVzLWVmZmVjdCB3YXZlcy1ibHVlIGJsdWUgZGFya2VuLTEgc3VibWl0XCIgdHlwZT1cInN1Ym1pdFwiIG5hbWU9XCJhY3Rpb25cIj5cbiAgICAgIFx0XHRcdFx0XHRcdFx0PGkgY2xhc3NOYW1lPVwiZmEgZmEtc2VuZFwiPjwvaT5cbiAgICAgIFx0XHRcdFx0XHRcdFx0Jm5ic3A7U3VibWl0XG4gICAgICBcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cbiAgICAgIFx0XHRcdFx0XHQ8L2Rpdj5cbiAgICAgIFx0XHRcdFx0PC9mb3JtPlxuICAgICAgXHRcdFx0PC9kaXY+XG4gICAgICBcdFx0PC9kaXY+XG4gICAgICBcdDwvZGl2PlxuICAgICAgKTtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgTW9kYWw7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtyZW5kZXJ9IGZyb20gJ3JlYWN0LWRvbSc7XG5cbmNsYXNzIE5hdmJhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpe1xuICAgICAgcmV0dXJuKFxuICAgICAgPG5hdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtd3JhcHBlciBibHVlIGRhcmtlbi0yXCI+XG4gICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJicmFuZC1sb2dvXCI+Jm5ic3A7Jm5ic3A7Jm5ic3A7Q2F0UGhvdG9BcHA8L2E+XG4gICAgICAgICAgPGEgaHJlZj1cIiNcIiBkYXRhLWFjdGl2YXRlcz1cIm1vYmlsZVwiIGNsYXNzTmFtZT1cImJ1dHRvbi1jb2xsYXBzZVwiPjxpIGNsYXNzTmFtZT1cImZhIGZhLWJhcnNcIj48L2k+PC9hPlxuICAgICAgICAgIDx1bCBpZD1cIm5hdi1tb2JpbGVcIiBjbGFzc05hbWU9XCJyaWdodCBoaWRlLW9uLW1lZC1hbmQtZG93blwiPlxuICAgICAgICAgICAgPGxpPjxhIGNsYXNzTmFtZT1cIm1vZGFsLXRyaWdnZXJcIiBocmVmPVwiI2FkZENhdE1vZGFsXCI+QWRkIENhdCBQaG90bzwvYT48L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInNpZGUtbmF2XCIgaWQ9XCJtb2JpbGVcIj5cblxuICAgICAgICAgICAgPGxpPjxhIGNsYXNzTmFtZT1cIm1vZGFsLXRyaWdnZXJcIiBocmVmPVwiI2FkZENhdE1vZGFsXCI+QWRkIENhdCBQaG90bzwvYT48L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9uYXY+XG5cblxuICAgICk7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQge3JlbmRlcn0gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBSZXN1bHRzIGZyb20gJy4vUmVzdWx0cyc7XG5pbXBvcnQgQ2F0SW1hZ2UgZnJvbSAnLi9DYXRJbWFnZSc7XG5pbXBvcnQgQ2FyZENvbnRlbnQgZnJvbSAnLi9DYXJkQ29udGVudCc7XG5pbXBvcnQgQ2FyZEFjdGlvbiBmcm9tICcuL0NhcmRBY3Rpb24nO1xuXG5jbGFzcyBSZXN1bHRDYXJkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGxldCBjYXQgPSB0aGlzLnByb3BzLmNhdDtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBzMyBtNCBzMTJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGhvdmVyYWJsZVwiPlxuICAgICAgICAgIDxDYXRJbWFnZSBzcmM9e2NhdC51cmx9IC8+XG4gICAgICAgICAgPENhcmRDb250ZW50IHRpdGxlPXtjYXQudGl0bGV9IHRhZ3M9e2NhdC50YWdzfSAvPlxuICAgICAgICAgIDxDYXJkQWN0aW9uIGxpa2VzPXtjYXQubGlrZXN9IHVybD17Y2F0LnVybH0gaWQ9e2NhdC5pZH0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBSZXN1bHRDYXJkO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7cmVuZGVyfSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IFJlc3VsdENhcmQgZnJvbSAnLi9SZXN1bHRDYXJkJztcblxuY2xhc3MgUmVzdWx0cyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXN1bHRzXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLmNhdHMubWFwKChjYXQpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIDxSZXN1bHRDYXJkIGtleT17Y2F0LmlkfSBjYXQ9e2NhdH0gLz5cbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IFJlc3VsdHM7XG4iLCJleHBvcnQgbGV0IGNhdHMgPSB7XCJjYXRzXCI6W1xuICB7XG4gICAgXCJpZFwiOiBcIkNhbXBlckNhdFwiLFxuICAgIFwibGlrZXNcIjogMyxcbiAgICBcInRhZ3NcIjogW1wiQ29kaW5nXCIsXCJHdXJ1XCIsXCJOaW5qYVwiXSxcbiAgICBcInRpdGxlXCI6IFwiQ2FtcGVyIENhdFwiLFxuICAgIFwidXJsXCI6IFwiaHR0cHM6Ly9tZWRpYS5naXBoeS5jb20vbWVkaWEvbzB2d3p1RndDR0FGTy9naXBoeS5naWZcIlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiBcIkNhdC1pbi1hLWhhdFwiLFxuICAgIFwibGlrZXNcIjogNyxcbiAgICBcInRhZ3NcIjogW1wiQ3V0ZVwiLCBcIkhhdFwiLCBcIlN0YW5kaW5nXCJdLFxuICAgIFwidGl0bGVcIjogXCJDYXQtaW4tYS1oYXRcIixcbiAgICBcInVybFwiOiBcImh0dHBzOi8vcy1tZWRpYS1jYWNoZS1hazAucGluaW1nLmNvbS81NjR4LzI3L2RmL2NjLzI3ZGZjYzE3YThjZWZlNTZjOTkyNzdkNjNiZTBkODE1LmpwZ1wiXG4gIH0sXG4gIHtcbiAgICBcImlkXCI6IFwiRmx1ZmZCYWxsXCIsXG4gICAgXCJsaWtlc1wiOiAyLFxuICAgIFwidGFnc1wiOltcIkZsdWZmeVwiLCBcIk5vLWxlZ3NcIiwgXCJCYWxsXCIsIFwiRmx5aW5nXCJdLFxuICAgIFwidGl0bGVcIjogXCJGbHVmZiBCYWxsXCIsXG4gICAgXCJ1cmxcIjogXCJodHRwOi8vd3d3LnRvcDEzLm5ldC93cC1jb250ZW50L3VwbG9hZHMvMjAxNS8xMC9wZXJmZWN0bHktdGltZWQtZnVubnktY2F0LXBpY3R1cmVzLTUuanBnXCJcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogXCJHcnVtcHlDYXRcIixcbiAgICBcImxpa2VzXCI6IDQsXG4gICAgXCJ0YWdzXCI6IFtcIkdydW1weVwiLCBcIkZ1bm55XCIsIFwiRmFtb3VzXCJdLFxuICAgIFwidGl0bGVcIjogXCJHcnVtcHkgQ2F0XCIsXG4gICAgXCJ1cmxcIjogXCJodHRwOi8vaS5kYWlseW1haWwuY28udWsvaS9waXgvMjAxNC8wOC8wNS8xNDA3MjI1OTMyMDkxX3dwc182X1NBTlRBX01PTklDQV9DQV9BVUdVU1RfMDQuanBnXCJcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogXCJIYXBweUNhdFwiLFxuICAgIFwibGlrZXNcIjogOSxcbiAgICBcInRhZ3NcIjogW1wiSGFwcHlcIiwgXCJXaW5raW5nXCIsIFwiU21pbGluZ1wiXSxcbiAgICBcInRpdGxlXCI6IFwiSGFwcHkgQ2F0XCIsXG4gICAgXCJ1cmxcIjogXCJodHRwczovL3Bicy50d2ltZy5jb20vcHJvZmlsZV9pbWFnZXMvMjE2NzAzNTg5Ni8xMjNjYXRfNDAweDQwMC5qcGdcIlxuICB9LFxuICB7XG4gICAgXCJpZFwiOiBcIkxhdWdoaW5nQ2F0XCIsXG4gICAgXCJsaWtlc1wiOiAyNyxcbiAgICBcInRhZ3NcIjogW1wibGF1Z2hpbmdcIiwgXCJGdW5ueVwiLCBcIlNuaWNrZXJcIl0sXG4gICAgXCJ0aXRsZVwiOiBcIkxhdWdoaW5nIENhdFwiLFxuICAgIFwidXJsXCI6IFwiaHR0cDovL2Jsb2cubmVrb2ZsaWVzLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxNC8wMS9mdW5ueS1jYXQuanBnXCJcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogXCJTY2FyZWR5Q2F0XCIsXG4gICAgXCJsaWtlc1wiOiAxOCxcbiAgICBcInRhZ3NcIjogW1wiSGlkaW5nXCIsIFwiQ3V0ZVwiLCBcIlNjYXJlZFwiXSxcbiAgICBcInRpdGxlXCI6IFwiU2NhcmVkeSBDYXQgXCIsXG4gICAgXCJ1cmxcIjogXCJodHRwczovL2kueXRpbWcuY29tL3ZpL01HOEtBRGlSYk9VL21heHJlc2RlZmF1bHQuanBnXCJcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogXCJTaG9ja2VkQ2F0XCIsXG4gICAgXCJsaWtlc1wiOiAxMSxcbiAgICBcInRhZ3NcIjogW1wiV2hhdCBpcyBUSEFUIT9cIiwgXCJTaG9ja2VkXCIsIFwiRnVubnlcIl0sXG4gICAgXCJ0aXRsZVwiOiBcIlNob2NrZWQgQ2F0XCIsXG4gICAgXCJ1cmxcIjogXCJodHRwczovL2kueXRpbWcuY29tL3ZpL2ljcUR4TmFiM0RvL21heHJlc2RlZmF1bHQuanBnXCJcbiAgfSxcbiAge1xuICAgIFwiaWRcIjogXCJTbGVlcGluZ0NhdFwiLFxuICAgIFwibGlrZXNcIjogMixcbiAgICBcInRhZ3NcIjogW1wiU2xlZXBpbmdcIiwgXCJDdXRlXCIsIFwiS2l0dGVuXCJdLFxuICAgIFwidGl0bGVcIjogXCJTbGVlcGluZyBDYXRcIixcbiAgICBcInVybFwiOiBcImh0dHA6Ly93d3cuYWN1dGVhZGF5LmNvbS9ibG9nL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDEyLzA5L3NsZWVwaW5nLWtpdHR5LWNhdC5qcGdcIlxuICB9XG5dfTtcbiJdfQ==
