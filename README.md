quorra
======

[![travis-ci status](https://secure.travis-ci.org/ajacksified/quorra.png)](http://travis-ci.org/#!/ajacksified/quorra/builds)

quorra is an isometric grid engine that works with quadrilaterial and hexagonal
grids. It is designed to be easy used with any game engine. Simply plug in a
tile size, isometric ratio, and grid size; then recieve pixel coordinates for
placement of objects.

[Read the docs](http://www.quorra.io)

I built it after not being able to find a non-commercial javascript hex-grid
library after lots of searching. Let's build something awesome and open-source.

Use
---

quorra works in both Node.js and browser environments. quorra is fully
supported by browserify, or else will attach to the window.

```html
<script src='quorra.min.js'></script>
```

or

```javascript
var quorra = require('quorra');
```

```javascript
var hexGrid = new quorra.Hexagonal({
  height: 64,
  width: 64
});

// Get position of item on grid
var position = hexGrid.place(2, 1);
// position = { x : 128,  y: 0 }

// Get position of item on grid that has a custom size, so we can place
non-standard elements in the center of a tile
var housePosition = hexGrid.place(2, 1, {
  height: 32,
  width: 32

  // xOffset: 0,
  // yOffset: 0
});
// houseposition = { x : 144,  y: 16 }

```

Read the full API docs 

Contributing
------------

See CONTRIBUTING.md. All issues, suggestions, and most importantly pull requests
are welcome.

Testing
-------

Tests are written with [mocha](http://mochaui.com) and exist in the `./tests`
directory.

```
npm test
```


License
-------

Copyright 2013 Jack Lawson
MIT licensed. See LICENSE for details.

