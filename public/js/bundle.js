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
            { onClick: this.handleClick, className: 'chip blue darken-3', key: key },
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

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Results).call(this));

    _this.state = {
      search: ''
    };
    return _this;
  }

  _createClass(Results, [{
    key: 'updateSearch',
    value: function updateSearch(event) {
      this.setState({ search: event.target.value });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var filtered = this.props.cats.filter(function (cat) {
        return cat.tags.indexOf(_this2.state.search) !== -1;
      });
      return _react2.default.createElement(
        'div',
        { className: 'container' },
        _react2.default.createElement('input', { type: 'text', onChange: this.updateSearch.bind(this), value: this.state.search }),
        _react2.default.createElement(
          'div',
          { className: 'results' },
          _react2.default.createElement(
            'div',
            { className: 'row' },
            filtered.map(function (cat) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHBcXGFwcC5qcyIsImFwcFxcY29tcG9uZW50c1xcQ2FyZEFjdGlvbi5qcyIsImFwcFxcY29tcG9uZW50c1xcQ2FyZENvbnRlbnQuanMiLCJhcHBcXGNvbXBvbmVudHNcXENhdEltYWdlLmpzIiwiYXBwXFxjb21wb25lbnRzXFxGb290ZXIuanMiLCJhcHBcXGNvbXBvbmVudHNcXE1vZGFsLmpzIiwiYXBwXFxjb21wb25lbnRzXFxOYXZiYXIuanMiLCJhcHBcXGNvbXBvbmVudHNcXFJlc3VsdENhcmQuanMiLCJhcHBcXGNvbXBvbmVudHNcXFJlc3VsdHMuanMiLCJhcHBcXGNvbXBvbmVudHNcXGNhdHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0FDQUE7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRU0sRzs7O0FBQ0osaUJBQWE7QUFBQTs7QUFFWDs7QUFGVzs7QUFHWCxRQUFJLFFBQVEsTUFBTSxHQUFOLENBQVUsTUFBVixDQUFaO0FBQUEsUUFDSSxnQkFESjtBQUVBLFFBQUksS0FBSixFQUFXO0FBQ1QsZ0JBQVUsS0FBVjtBQUNELEtBRkQsTUFFTTtBQUNKO0FBQ0EsaUJBQUssSUFBTCxDQUFVLE9BQVYsQ0FBa0IsVUFBUyxNQUFULEVBQWdCO0FBQ2hDLGNBQU0sSUFBTixDQUFXLE1BQVgsRUFBbUIsTUFBbkI7QUFDQSxrQkFBVSxNQUFNLEdBQU4sQ0FBVSxNQUFWLENBQVY7QUFDRCxPQUhEO0FBSUQ7QUFDRCxVQUFLLEtBQUwsR0FBYTtBQUNYLFlBQU07QUFESyxLQUFiO0FBZFc7QUFpQlo7Ozs7OEJBQ1MsSSxFQUFLO0FBQ2IsWUFBTSxLQUFOO0FBQ0EsV0FBSyxPQUFMLENBQWEsVUFBUyxRQUFULEVBQWtCO0FBQzdCLGNBQU0sSUFBTixDQUFXLE1BQVgsRUFBbUIsUUFBbkI7QUFDRCxPQUZEO0FB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QUFPLENBQUMsUUFBRCxFQUFXLFNBQVgsRUFBc0IsTUFBdEIsRUFBOEIsUUFBOUIsQ0FIVDtBQUlFLGFBQVMsWUFKWDtBQUtFLFdBQU87QUFMVCxHQWZ3QixFQXNCeEI7QUFDRSxVQUFNLFdBRFI7QUFFRSxhQUFTLENBRlg7QUFHRSxZQUFRLENBQUMsUUFBRCxFQUFXLE9BQVgsRUFBb0IsUUFBcEIsQ0FIVjtBQUlFLGFBQVMsWUFKWDtBQUtFLFdBQU87QUFMVCxHQXRCd0IsRUE2QnhCO0FBQ0UsVUFBTSxVQURSO0FBRUUsYUFBUyxDQUZYO0FBR0UsWUFBUSxDQUFDLE9BQUQsRUFBVSxTQUFWLEVBQXFCLFNBQXJCLENBSFY7QUFJRSxhQUFTLFdBSlg7QUFLRSxXQUFPO0FBTFQsR0E3QndCLEVBb0N4QjtBQUNFLFVBQU0sYUFEUjtBQUVFLGFBQVMsRUFGWDtBQUdFLFlBQVEsQ0FBQyxVQUFELEVBQWEsT0FBYixFQUFzQixTQUF0QixDQUhWO0FBSUUsYUFBUyxjQUpYO0FBS0UsV0FBTztBQUxULEdBcEN3QixFQTJDeEI7QUFDRSxVQUFNLFlBRFI7QUFFRSxhQUFTLEVBRlg7QUFHRSxZQUFRLENBQUMsUUFBRCxFQUFXLE1BQVgsRUFBbUIsUUFBbkIsQ0FIVjtBQUlFLGFBQVMsY0FKWDtBQUtFLFdBQU87QUFMVCxHQTNDd0IsRUFrRHhCO0FBQ0UsVUFBTSxZQURSO0FBRUUsYUFBUyxFQUZYO0FBR0UsWUFBUSxDQUFDLGdCQUFELEVBQW1CLFNBQW5CLEVBQThCLE9BQTlCLENBSFY7QUFJRSxhQUFTLGFBSlg7QUFLRSxXQUFPO0FBTFQsR0FsRHdCLEVBeUR4QjtBQUNFLFVBQU0sYUFEUjtBQUVFLGFBQVMsQ0FGWDtBQUdFLFlBQVEsQ0FBQyxVQUFELEVBQWEsTUFBYixFQUFxQixRQUFyQixDQUhWO0FBSUUsYUFBUyxjQUpYO0FBS0UsV0FBTztBQUxULEdBekR3QixDQUFSLEVBQVgiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtyZW5kZXJ9IGZyb20gJ3JlYWN0LWRvbSc7XHJcbmltcG9ydCB7Y2F0c30gZnJvbSAnLi9jb21wb25lbnRzL2NhdHMnO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gJy4vY29tcG9uZW50cy9OYXZiYXInO1xyXG5pbXBvcnQgTW9kYWwgZnJvbSAnLi9jb21wb25lbnRzL01vZGFsJztcclxuaW1wb3J0IFJlc3VsdHMgZnJvbSAnLi9jb21wb25lbnRzL1Jlc3VsdHMnO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vY29tcG9uZW50cy9Gb290ZXInO1xyXG5cclxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgc3VwZXIoKTtcclxuICAgIC8vIHJldHJpZXZlIGNhdHMgZnJvbSBsb2NhbCBzdG9yYWdlXHJcbiAgICBsZXQgbG9jYWwgPSBMb2Nrci5nZXQoJ2NhdHMnKSxcclxuICAgICAgICBhbGxDYXRzO1xyXG4gICAgaWYgKGxvY2FsICl7XHJcbiAgICAgIGFsbENhdHMgPSBsb2NhbDtcclxuICAgIH0gZWxzZXtcclxuICAgICAgLy8gaWYgbm90IGNhdHMgaW4gbG9jYWwgc3RvcmFnZSwgcHV0IHRoZW0gdGhlcmVcclxuICAgICAgY2F0cy5jYXRzLmZvckVhY2goZnVuY3Rpb24ob3VyQ2F0KXtcclxuICAgICAgICBMb2Nrci5zYWRkKCdjYXRzJywgb3VyQ2F0KTtcclxuICAgICAgICBhbGxDYXRzID0gTG9ja3IuZ2V0KCdjYXRzJyk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgY2F0czogYWxsQ2F0c1xyXG4gICAgfTtcclxuICB9XHJcbiAgc3RvcmVDYXRzKGNhdHMpe1xyXG4gICAgTG9ja3IuZmx1c2goKTtcclxuICAgIGNhdHMuZm9yRWFjaChmdW5jdGlvbihsb2NhbENhdCl7XHJcbiAgICAgIExvY2tyLnNhZGQoJ2NhdHMnLCBsb2NhbENhdCk7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgYWRkVXNlckNhdChuZXdDYXQpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe2NhdHM6IG5ld0NhdC5jb25jYXQodGhpcy5zdGF0ZS5jYXRzKX0pO1xyXG4gICAgdGhpcy5zdG9yZUNhdHModGhpcy5zdGF0ZS5jYXRzKTtcclxuICB9XHJcbiAgICBjb21wb25lbnREaWRVcGRhdGUocHJldlN0YXRlPXRoaXMuc3RhdGUuY2F0cykge1xyXG4gICAgICB0aGlzLnN0b3JlQ2F0cyh0aGlzLnN0YXRlLmNhdHMpO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgIHJldHVybihcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPE5hdmJhciAvPlxyXG4gICAgICAgICAgPE1vZGFsIGFkZFVzZXJDYXQ9e3RoaXMuYWRkVXNlckNhdC5iaW5kKHRoaXMpfSAvPlxyXG4gICAgICAgICAgPFJlc3VsdHMgY2F0cz17dGhpcy5zdGF0ZS5jYXRzfSAvPlxyXG4gICAgICAgICAgPEZvb3RlciAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge3JlbmRlcn0gZnJvbSAncmVhY3QtZG9tJztcclxuXHJcbmNsYXNzIENhcmRBY3Rpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBpZDogcHJvcHMuaWQsXHJcbiAgICAgIGxpa2VzOiBwcm9wcy5saWtlc1xyXG4gICAgfTsgdGhpcy5oYW5kbGVDbGljayA9IHRoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIGhhbmRsZUNsaWNrKCkge1xyXG4gICAgbGV0IGNhdElkID0gdGhpcy5zdGF0ZS5pZCxcclxuICAgICAgICBsb2NhbENhdHMgPSBMb2Nrci5nZXQoJ2NhdHMnKSxcclxuICAgICAgICBpbmRleDtcclxuICAgIC8vIHVwZGF0ZSBsaWtlIGJ1dHRvbiBsaWtlc1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7bGlrZXM6IHRoaXMuc3RhdGUubGlrZXMgKyAxfSk7XHJcbiAgICAvLyBGaW5kIGNhdCBpcyBsb2NhbCBzdG9yYWdlIGFuZCBpbmNyZW1lbnQgbGlrZXNcclxuICAgIGluZGV4ID0gbG9jYWxDYXRzLmZpbmRJbmRleCh4ID0+IHguaWQgPT09IGNhdElkKTtcclxuICAgIGxvY2FsQ2F0c1tpbmRleF0ubGlrZXMgPSB0aGlzLnN0YXRlLmxpa2VzICsgMTtcclxuICAgIC8vIGVtcHR5IGFuZCB1cGRhdGUgbG9jYWwgc3RvcmFnZVxyXG4gICAgTG9ja3IuZmx1c2goKTtcclxuICAgIGxvY2FsQ2F0cy5mb3JFYWNoKGZ1bmN0aW9uKGxvY2FsQ2F0KXtcclxuICAgICAgTG9ja3Iuc2FkZCgnY2F0cycsIGxvY2FsQ2F0KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWFjdGlvblwiPlxyXG4gICAgICAgIDxhIGNsYXNzTmFtZT1cIndhdmVzLWVmZmVjdCB3YXZlcy1saWdodCB3YXZlcy1yZWQgcmVkIGRhcmtlbi0zIGJ0blwiIGhyZWY9e3RoaXMucHJvcHMudXJsfSBkb3dubG9hZD17dGhpcy5wcm9wcy51cmx9PlxyXG4gICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtZG93bmxvYWRcIj48L2k+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwid2F2ZXMtZWZmZWN0IHdhdmVzLWxpZ2h0IHdhdmVzLWJsdWUgYmx1ZSBkYXJrZW4tMyBidG5cIlxyXG4gICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDbGlja30+XHJcbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS10aHVtYnMtdXBcIj48L2k+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsaWtlc19udW1iZXJcIj4ge3RoaXMuc3RhdGUubGlrZXN9PC9zcGFuPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IENhcmRBY3Rpb247XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7cmVuZGVyfSBmcm9tICdyZWFjdC1kb20nO1xyXG5cclxuY2xhc3MgQ2FyZENvbnRlbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1jb250ZW50XCI+XHJcbiAgICAgICAgPGg1Pnt0aGlzLnByb3BzLnRpdGxlfTwvaDU+XHJcbiAgICAgICAge3RoaXMucHJvcHMudGFncy5tYXAoZnVuY3Rpb24odGFnLCBrZXkpIHtcclxuICAgICAgICAgIHJldHVybiA8c3BhbiBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfSBjbGFzc05hbWU9XCJjaGlwIGJsdWUgZGFya2VuLTNcIiBrZXk9e2tleX0gPnt0YWd9PC9zcGFuPlxyXG4gICAgICAgIH0pfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IENhcmRDb250ZW50O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge3JlbmRlcn0gZnJvbSAncmVhY3QtZG9tJztcclxuXHJcbmNsYXNzIENhdEltYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtaW1hZ2VcIj5cclxuICAgICAgICA8aW1nIGNsYXNzTmFtZT1cIm1hdGVyaWFsYm94ZWRcIiBzcmM9e3RoaXMucHJvcHMuc3JjfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IENhdEltYWdlO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge3JlbmRlcn0gZnJvbSAncmVhY3QtZG9tJztcclxuXHJcbmNsYXNzIEZvb3RlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxmb290ZXIgY2xhc3NOYW1lPVwicGFnZS1mb290ZXIgYmx1ZSBkYXJrZW4tMlwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwid2hpdGUtdGV4dFwiPkNhdFBob3RvQXBwPC9oNT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZ3JleS10ZXh0IHRleHQtbGlnaHRlbi00XCI+Q2F0UGhvdG9BcHAgaGFzIGJlZW4gY3JlYXRlZCB0byBmb3JtIHBhcnQgb2YgdGhlIDxhIGhyZWY9XCJodHRwczovL2ZyZWVjb2RlY2FtcC5jb21cIiB0YXJnZXQ9XCJfYmxhbmtcIj5GcmVlIENvZGUgQ2FtcDwvYT4gY3VycmljdWx1bS48L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlci1jb3B5cmlnaHRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIMKpIDIwMTYgQ2F0UGhvdG9BcHBcclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZ3JleS10ZXh0IHRleHQtbGlnaHRlbi00IHJpZ2h0XCIgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9hdGpvbmF0aGFuL2NhdHBob3RvYXBwL1wiPkdpdEh1YjwvYT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Zvb3Rlcj5cclxuICAgICk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge3JlbmRlcn0gZnJvbSAncmVhY3QtZG9tJztcclxuXHJcbmNsYXNzIE1vZGFsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxudXBsb2FkZWRVc2VyQ2F0KGUpe1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICBsZXQgbmV3Q2F0ID1be1xyXG4gICAgICAgIGlkOiB0aGlzLnJlZnMudGl0bGUudmFsdWUucmVwbGFjZSgvXFxzKy9nLCAnJyksXHJcbiAgICAgICAgdGl0bGU6IHRoaXMucmVmcy50aXRsZS52YWx1ZSxcclxuICAgICAgICB1cmw6IHRoaXMucmVmcy51cmwudmFsdWUsXHJcbiAgICAgICAgdGFnczogdGhpcy5yZWZzLnRhZ3MudmFsdWUuc3BsaXQoJywnKSxcclxuICAgICAgICBsaWtlczogMVxyXG4gICAgICAgIH1dO1xyXG4gICAgICB0aGlzLnByb3BzLmFkZFVzZXJDYXQobmV3Q2F0KTtcclxuICAgICAgLy8gQ2xlYXIgZm9ybSBmaWVsZHNcclxuICAgICAgdGhpcy5yZWZzLnRpdGxlLnZhbHVlID0gJyc7XHJcbiAgICAgIHRoaXMucmVmcy51cmwudmFsdWUgPSAnJztcclxuICAgICAgdGhpcy5yZWZzLnRhZ3MudmFsdWUgPSAnJztcclxuICAgIH1cclxuXHJcbiAgcmVuZGVyKCl7XHJcbiAgICAgIHJldHVybihcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICBcdFx0PGRpdiBpZD1cImFkZENhdE1vZGFsXCIgY2xhc3NOYW1lPVwibW9kYWxcIj5cclxuICAgICAgXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50XCI+XHJcbiAgICAgIFx0XHRcdFx0PGg0PkFkZCBDYXQgUGhvdG88L2g0PlxyXG4gICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLnVwbG9hZGVkVXNlckNhdC5iaW5kKHRoaXMpfT5cclxuICAgICAgXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgIFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZmllbGQgY29sIHMxMlwiPlxyXG4gICAgICBcdFx0XHRcdFx0XHRcdDxpbnB1dCBwbGFjZWhvbGRlcj1cIkVudGVyIFRpdGxlXCIgcmVmPVwidGl0bGVcIiBpZD1cInRpdGxlXCIgdHlwZT1cInRleHRcIiByZXF1aXJlZCAvPlxyXG4gICAgICBcdFx0XHRcdFx0XHRcdDxsYWJlbCBodG1sRm9yPVwidGl0bGVcIiBkYXRhLWVycm9yPVwiQ2F0IHRpdGxlIGhhcyBiZWVuIHRha2VuXCIgZGF0YS1zdWNjZXNzPVwiQ2F0IHRpdGxlIGlzIGZyZWUgdG8gdXNlXCI+VGl0bGU8L2xhYmVsPlxyXG4gICAgICBcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuICAgICAgXHRcdFx0XHRcdDwvZGl2PlxyXG4gICAgICBcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbnB1dC1maWVsZCBjb2wgczEyXCI+XHJcbiAgICAgIFx0XHRcdFx0XHRcdFx0PGlucHV0IHBsYWNlaG9sZGVyPVwiRW50ZXIgVVJMXCIgcmVmPVwidXJsXCIgaWQ9XCJ1cmxcIiB0eXBlPVwidXJsXCIgY2xhc3NOYW1lPVwidmFsaWRhdGVcIiByZXF1aXJlZCAvPlxyXG4gICAgICBcdFx0XHRcdFx0XHRcdDxsYWJlbCBodG1sRm9yPVwidXJsXCIgZGF0YS1lcnJvcj1cIlBsZWFzZSB1cGxvYWQgYSBHSUYsIFBORyBvciBKUEdcIiBkYXRhLXN1Y2Nlc3M9XCJUaGF0cyBhIFVSTCBmb3Igc3VyZSEgSSBob3BlIGl0IGVuZHMgaW4gR0lGLCBQTkcgb3IgSlBHLi4uXCI+Q2F0IFBob3RvIFVSTDwvbGFiZWw+XHJcbiAgICAgIFx0XHRcdFx0XHRcdDwvZGl2PlxyXG4gICAgICBcdFx0XHRcdFx0PC9kaXY+XHJcbiAgICAgIFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICBcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWZpZWxkIGNvbCBzNlwiPlxyXG4gICAgICBcdFx0XHRcdFx0XHRcdDxpbnB1dCBwbGFjZWhvbGRlcj1cIlNlcGFyYXRlIHRhZ3Mgd2l0aCBhIGNvbW1hXCIgcmVmPVwidGFnc1wiIGlkPVwidGFnc1wiIHR5cGU9XCJ0ZXh0XCIgcmVxdWlyZWQgLz5cclxuICAgICAgXHRcdFx0XHRcdFx0XHQ8bGFiZWwgaHRtbEZvcj1cInRhZ3NcIj5UYWdzPC9sYWJlbD5cclxuICAgICAgXHRcdFx0XHRcdFx0PC9kaXY+XHJcbiAgICAgIFx0XHRcdFx0XHQ8L2Rpdj5cclxuICAgICAgXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgIFx0XHRcdFx0XHRcdDxidXR0b24gaWQ9XCJzdWJtaXQtYnRuXCIgY2xhc3NOYW1lPVwiYnRuIHdhdmVzLWVmZmVjdCB3YXZlcy1ibHVlIGJsdWUgZGFya2VuLTEgc3VibWl0XCIgdHlwZT1cInN1Ym1pdFwiIG5hbWU9XCJhY3Rpb25cIj5cclxuICAgICAgXHRcdFx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9XCJmYSBmYS1zZW5kXCI+PC9pPlxyXG4gICAgICBcdFx0XHRcdFx0XHRcdCZuYnNwO1N1Ym1pdFxyXG4gICAgICBcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cclxuICAgICAgXHRcdFx0XHRcdDwvZGl2PlxyXG4gICAgICBcdFx0XHRcdDwvZm9ybT5cclxuICAgICAgXHRcdFx0PC9kaXY+XHJcbiAgICAgIFx0XHQ8L2Rpdj5cclxuICAgICAgXHQ8L2Rpdj5cclxuICAgICAgKTtcclxuICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTW9kYWw7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7cmVuZGVyfSBmcm9tICdyZWFjdC1kb20nO1xyXG5cclxuY2xhc3MgTmF2YmFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICByZW5kZXIoKXtcclxuICAgICAgcmV0dXJuKFxyXG4gICAgICA8bmF2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2LXdyYXBwZXIgYmx1ZSBkYXJrZW4tMlwiPlxyXG4gICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJicmFuZC1sb2dvXCI+Jm5ic3A7Jm5ic3A7Jm5ic3A7Q2F0UGhvdG9BcHA8L2E+XHJcbiAgICAgICAgICA8YSBocmVmPVwiI1wiIGRhdGEtYWN0aXZhdGVzPVwibW9iaWxlXCIgY2xhc3NOYW1lPVwiYnV0dG9uLWNvbGxhcHNlXCI+PGkgY2xhc3NOYW1lPVwiZmEgZmEtYmFyc1wiPjwvaT48L2E+XHJcbiAgICAgICAgICA8dWwgaWQ9XCJuYXYtbW9iaWxlXCIgY2xhc3NOYW1lPVwicmlnaHQgaGlkZS1vbi1tZWQtYW5kLWRvd25cIj5cclxuICAgICAgICAgICAgPGxpPjxhIGNsYXNzTmFtZT1cIm1vZGFsLXRyaWdnZXJcIiBocmVmPVwiI2FkZENhdE1vZGFsXCI+QWRkIENhdCBQaG90bzwvYT48L2xpPlxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzaWRlLW5hdlwiIGlkPVwibW9iaWxlXCI+XHJcblxyXG4gICAgICAgICAgICA8bGk+PGEgY2xhc3NOYW1lPVwibW9kYWwtdHJpZ2dlclwiIGhyZWY9XCIjYWRkQ2F0TW9kYWxcIj5BZGQgQ2F0IFBob3RvPC9hPjwvbGk+XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L25hdj5cclxuXHJcblxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge3JlbmRlcn0gZnJvbSAncmVhY3QtZG9tJztcclxuaW1wb3J0IFJlc3VsdHMgZnJvbSAnLi9SZXN1bHRzJztcclxuaW1wb3J0IENhdEltYWdlIGZyb20gJy4vQ2F0SW1hZ2UnO1xyXG5pbXBvcnQgQ2FyZENvbnRlbnQgZnJvbSAnLi9DYXJkQ29udGVudCc7XHJcbmltcG9ydCBDYXJkQWN0aW9uIGZyb20gJy4vQ2FyZEFjdGlvbic7XHJcblxyXG5jbGFzcyBSZXN1bHRDYXJkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICBsZXQgY2F0ID0gdGhpcy5wcm9wcy5jYXQ7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgczMgbTQgczEyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGhvdmVyYWJsZVwiPlxyXG4gICAgICAgICAgPENhdEltYWdlIHNyYz17Y2F0LnVybH0gLz5cclxuICAgICAgICAgIDxDYXJkQ29udGVudCB0aXRsZT17Y2F0LnRpdGxlfSB0YWdzPXtjYXQudGFnc30gLz5cclxuICAgICAgICAgIDxDYXJkQWN0aW9uIGxpa2VzPXtjYXQubGlrZXN9IHVybD17Y2F0LnVybH0gaWQ9e2NhdC5pZH0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBSZXN1bHRDYXJkO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge3JlbmRlcn0gZnJvbSAncmVhY3QtZG9tJztcclxuaW1wb3J0IFJlc3VsdENhcmQgZnJvbSAnLi9SZXN1bHRDYXJkJztcclxuXHJcbmNsYXNzIFJlc3VsdHMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBzZWFyY2g6ICcnXHJcbiAgICB9XHJcbiAgfVxyXG4gIHVwZGF0ZVNlYXJjaChldmVudCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7c2VhcmNoOiBldmVudC50YXJnZXQudmFsdWV9KTtcclxuICB9XHJcbiAgcmVuZGVyKCkge1xuICAgIGxldCBmaWx0ZXJlZCA9IHRoaXMucHJvcHMuY2F0cy5maWx0ZXIoKGNhdCkgPT4ge1xyXG4gICAgICByZXR1cm4gY2F0LnRhZ3MuaW5kZXhPZih0aGlzLnN0YXRlLnNlYXJjaCkgIT09IC0xO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG9uQ2hhbmdlPXt0aGlzLnVwZGF0ZVNlYXJjaC5iaW5kKHRoaXMpfSB2YWx1ZT17dGhpcy5zdGF0ZS5zZWFyY2h9IC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXN1bHRzXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAge2ZpbHRlcmVkLm1hcCgoY2F0KSA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIDxSZXN1bHRDYXJkIGtleT17Y2F0LmlkfSBjYXQ9e2NhdH0gLz5cclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlc3VsdHM7XHJcbiIsImV4cG9ydCBsZXQgY2F0cyA9IHtcImNhdHNcIjpbXHJcbiAge1xyXG4gICAgXCJpZFwiOiBcIkNhbXBlckNhdFwiLFxyXG4gICAgXCJsaWtlc1wiOiAzLFxyXG4gICAgXCJ0YWdzXCI6IFtcIkNvZGluZ1wiLFwiR3VydVwiLFwiTmluamFcIl0sXHJcbiAgICBcInRpdGxlXCI6IFwiQ2FtcGVyIENhdFwiLFxyXG4gICAgXCJ1cmxcIjogXCJodHRwczovL21lZGlhLmdpcGh5LmNvbS9tZWRpYS9vMHZ3enVGd0NHQUZPL2dpcGh5LmdpZlwiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcImlkXCI6IFwiQ2F0LWluLWEtaGF0XCIsXHJcbiAgICBcImxpa2VzXCI6IDcsXHJcbiAgICBcInRhZ3NcIjogW1wiQ3V0ZVwiLCBcIkhhdFwiLCBcIlN0YW5kaW5nXCIsIFwiXCJdLFxyXG4gICAgXCJ0aXRsZVwiOiBcIkNhdC1pbi1hLWhhdFwiLFxyXG4gICAgXCJ1cmxcIjogXCJodHRwczovL3MtbWVkaWEtY2FjaGUtYWswLnBpbmltZy5jb20vNTY0eC8yNy9kZi9jYy8yN2RmY2MxN2E4Y2VmZTU2Yzk5Mjc3ZDYzYmUwZDgxNS5qcGdcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJpZFwiOiBcIkZsdWZmQmFsbFwiLFxyXG4gICAgXCJsaWtlc1wiOiAyLFxyXG4gICAgXCJ0YWdzXCI6W1wiRmx1ZmZ5XCIsIFwiTm8tbGVnc1wiLCBcIkJhbGxcIiwgXCJGbHlpbmdcIl0sXHJcbiAgICBcInRpdGxlXCI6IFwiRmx1ZmYgQmFsbFwiLFxyXG4gICAgXCJ1cmxcIjogXCJodHRwOi8vd3d3LnRvcDEzLm5ldC93cC1jb250ZW50L3VwbG9hZHMvMjAxNS8xMC9wZXJmZWN0bHktdGltZWQtZnVubnktY2F0LXBpY3R1cmVzLTUuanBnXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwiaWRcIjogXCJHcnVtcHlDYXRcIixcclxuICAgIFwibGlrZXNcIjogNCxcclxuICAgIFwidGFnc1wiOiBbXCJHcnVtcHlcIiwgXCJGdW5ueVwiLCBcIkZhbW91c1wiXSxcclxuICAgIFwidGl0bGVcIjogXCJHcnVtcHkgQ2F0XCIsXHJcbiAgICBcInVybFwiOiBcImh0dHA6Ly9pLmRhaWx5bWFpbC5jby51ay9pL3BpeC8yMDE0LzA4LzA1LzE0MDcyMjU5MzIwOTFfd3BzXzZfU0FOVEFfTU9OSUNBX0NBX0FVR1VTVF8wNC5qcGdcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJpZFwiOiBcIkhhcHB5Q2F0XCIsXHJcbiAgICBcImxpa2VzXCI6IDksXHJcbiAgICBcInRhZ3NcIjogW1wiSGFwcHlcIiwgXCJXaW5raW5nXCIsIFwiU21pbGluZ1wiXSxcclxuICAgIFwidGl0bGVcIjogXCJIYXBweSBDYXRcIixcclxuICAgIFwidXJsXCI6IFwiaHR0cHM6Ly9wYnMudHdpbWcuY29tL3Byb2ZpbGVfaW1hZ2VzLzIxNjcwMzU4OTYvMTIzY2F0XzQwMHg0MDAuanBnXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwiaWRcIjogXCJMYXVnaGluZ0NhdFwiLFxyXG4gICAgXCJsaWtlc1wiOiAyNyxcclxuICAgIFwidGFnc1wiOiBbXCJsYXVnaGluZ1wiLCBcIkZ1bm55XCIsIFwiU25pY2tlclwiXSxcclxuICAgIFwidGl0bGVcIjogXCJMYXVnaGluZyBDYXRcIixcclxuICAgIFwidXJsXCI6IFwiaHR0cDovL2Jsb2cubmVrb2ZsaWVzLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxNC8wMS9mdW5ueS1jYXQuanBnXCJcclxuICB9LFxyXG4gIHtcclxuICAgIFwiaWRcIjogXCJTY2FyZWR5Q2F0XCIsXHJcbiAgICBcImxpa2VzXCI6IDE4LFxyXG4gICAgXCJ0YWdzXCI6IFtcIkhpZGluZ1wiLCBcIkN1dGVcIiwgXCJTY2FyZWRcIl0sXHJcbiAgICBcInRpdGxlXCI6IFwiU2NhcmVkeSBDYXQgXCIsXHJcbiAgICBcInVybFwiOiBcImh0dHBzOi8vaS55dGltZy5jb20vdmkvTUc4S0FEaVJiT1UvbWF4cmVzZGVmYXVsdC5qcGdcIlxyXG4gIH0sXHJcbiAge1xyXG4gICAgXCJpZFwiOiBcIlNob2NrZWRDYXRcIixcclxuICAgIFwibGlrZXNcIjogMTEsXHJcbiAgICBcInRhZ3NcIjogW1wiV2hhdCBpcyBUSEFUIT9cIiwgXCJTaG9ja2VkXCIsIFwiRnVubnlcIl0sXHJcbiAgICBcInRpdGxlXCI6IFwiU2hvY2tlZCBDYXRcIixcclxuICAgIFwidXJsXCI6IFwiaHR0cHM6Ly9pLnl0aW1nLmNvbS92aS9pY3FEeE5hYjNEby9tYXhyZXNkZWZhdWx0LmpwZ1wiXHJcbiAgfSxcclxuICB7XHJcbiAgICBcImlkXCI6IFwiU2xlZXBpbmdDYXRcIixcclxuICAgIFwibGlrZXNcIjogMixcclxuICAgIFwidGFnc1wiOiBbXCJTbGVlcGluZ1wiLCBcIkN1dGVcIiwgXCJLaXR0ZW5cIl0sXHJcbiAgICBcInRpdGxlXCI6IFwiU2xlZXBpbmcgQ2F0XCIsXHJcbiAgICBcInVybFwiOiBcImh0dHA6Ly93d3cuYWN1dGVhZGF5LmNvbS9ibG9nL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDEyLzA5L3NsZWVwaW5nLWtpdHR5LWNhdC5qcGdcIlxyXG4gIH1cclxuXX07XHJcbiJdfQ==
