// Generated by CoffeeScript 1.9.0

/*!
 * @license fixer
 * (c) sugarshin
 * License: MIT
 */

(function() {
  "use strict";
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  (function(root, factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
      module.exports = factory(require('jquery'));
    } else {
      root.Fixer || (root.Fixer = factory(root.jQuery));
    }
  })(this, function($) {
    var Fixer;
    return Fixer = (function() {
      var _$window;

      _$window = $(window);

      Fixer.prototype._getRandomString = (function() {
        var chars;
        chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghiklmnopqrstuvwxyz';
        return function(length) {
          var i, randomNumber, string, _i;
          if (length == null) {
            length = 32;
          }
          string = '';
          for (i = _i = 0; 0 <= length ? _i < length : _i > length; i = 0 <= length ? ++_i : --_i) {
            randomNumber = Math.floor(Math.random() * chars.length);
            string += chars.substring(randomNumber, randomNumber + 1);
          }
          return string;
        };
      })();

      Fixer.prototype._defaults = {
        offset: null,
        bindScroll: true,
        onFixed: function(el) {},
        onNormalized: function(el) {}
      };

      Fixer.prototype._configure = function(el, opts) {
        this.$el = $(el);
        this.opts = $.extend({}, this._defaults, opts);
        if (this.opts.offset != null) {
          this._offsetTop = this.opts.offset;
        } else {
          this._offsetTop = this.$el.offset().top;
        }
        this._defaultPosition = this.$el.css('position');
        return this._namespace = this._getRandomString();
      };

      function Fixer(_at_el, opts) {
        this.el = _at_el;
        this.onScroll = __bind(this.onScroll, this);
        this._configure(this.el, opts);
        if (this.opts.bindScroll) {
          this.events();
        }
      }

      Fixer.prototype.fixPosition = function() {
        var _base;
        this.$el.css('position', 'fixed');
        return typeof (_base = this.opts).onFixed === "function" ? _base.onFixed(this.el) : void 0;
      };

      Fixer.prototype.normalizePosition = function() {
        var _base;
        this.$el.css('position', this._defaultPosition);
        return typeof (_base = this.opts).onNormalized === "function" ? _base.onNormalized(this.el) : void 0;
      };

      Fixer.prototype.setOffset = function(val) {
        return this._offsetTop = val;
      };

      Fixer.prototype.onScroll = function() {
        if (_$window.scrollTop() > this._offsetTop) {
          return this.fixPosition();
        } else {
          return this.normalizePosition();
        }
      };

      Fixer.prototype.events = function() {
        _$window.on("scroll.fixer:" + this._namespace, this.onScroll);
        return this;
      };

      Fixer.prototype.unbind = function() {
        _$window.off("scroll.fixer:" + this._namespace);
        return this;
      };

      return Fixer;

    })();
  });

}).call(this);
