# fixer

[![Build Status](https://travis-ci.org/sugarshin/fixer.svg?branch=master)](https://travis-ci.org/sugarshin/fixer) [![Coverage Status](https://coveralls.io/repos/sugarshin/fixer/badge.svg)](https://coveralls.io/r/sugarshin/fixer) [![GitHub version](https://badge.fury.io/gh/sugarshin%2Ffixer.svg)](http://badge.fury.io/gh/sugarshin%2Ffixer) [![License](http://img.shields.io/:license-mit-blue.svg)](http://sugarshin.mit-license.org/)

Fixer

```shell
npm i sugarshin/fixer
```

## Usage

```coffeescript
Fixer = require 'fixer'

new Fixer element, opts
```

or

```html
<script src="jquery.js"></script>
<script src="fixer.js"></script>
<script>
  new Fixer(element, opts);
</script>
```

### Config

options

```coffeescript
_defaults:
  offset: 0
  bindScroll: true
  onFixed: (el) ->
  onNormalized: (el) ->
```

## Contributing

[CoffeeScript](//coffeescript.org/)

[mocha-phantomjs](//github.com/metaskills/mocha-phantomjs)

[power-assert](//github.com/twada/power-assert)

```shell
npm test
```

## License

[MIT](http://sugarshin.mit-license.org/)

© sugarshin
