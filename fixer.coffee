###!
 * @license fixer
 * (c) sugarshin
 * License: MIT
###

"use strict"

do (root = this, factory = ($) ->

  class Fixer

    _$window = $(window)

    # klughammer/node-randomstring
    _getRandomString: do ->
      chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghiklmnopqrstuvwxyz'
      return (length = 32) ->
        string = ''
        for i in [0...length]
          randomNumber = Math.floor(Math.random() * chars.length)
          string += chars.substring(randomNumber, randomNumber + 1)
        return string

    _defaults:
      offset: null
      bindScroll: true
      onFixed: (el) ->
      onNormalized: (el) ->

    _configure: (el, opts) ->
      @$el = $(el)
      @opts = $.extend {}, @_defaults, opts
      if @opts.offset?
        @_offsetTop = @opts.offset
      else
        @_offsetTop = @$el.offset().top
      @_defaultPosition = @$el.css 'position'
      @_namespace = @_getRandomString()

    constructor: (@el, opts) ->
      @_configure @el, opts
      @events() if @opts.bindScroll

    positionFixed: ->
      @$el.css 'position', 'fixed'
      @opts.onFixed?(@el)

    positionDefault: ->
      @$el.css 'position', @_defaultPosition
      @opts.onNormalized?(@el)

    setOffset: (val) -> @_offsetTop = val

    onScroll: =>
      if _$window.scrollTop() > @_offsetTop
        @positionFixed()
      else
        @positionDefault()

    events: ->
      _$window.on "scroll.fixer:#{@_namespace}", @onScroll
      return this

    unbind: ->
      _$window.off "scroll.fixer:#{@_namespace}"
      return this

) ->
  if typeof module is 'object' and typeof module.exports is 'object'
    module.exports = factory require 'jquery'
  else
    root.Fixer or= factory root.jQuery
  return
