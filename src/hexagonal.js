// This file contains the constructor for the Hexagonal grid.
// It accepts a side length and optional options containing rotation type
// ('flat' or 'pointed' on top, default 'pointed'), a numbering system
// ('odd-r', 'even-r', 'odd-q', 'even-q', or 'axial', default: 'axial'),
// and worldXOffset and worldYOffset (in case you do not want to start pixel
// coordinates at 0,0, in case you're working with multiple grids on your
// world at once.)
//
// See http://www.redblobgames.com/grids/hexagons for information on the
// numbering system.
//
// The grid's primary function will be to use getCoordinates(x,y), which will
// return to you the pixel coordinates for rendering.
//
// Part of quorra, an isometric grid library. github.com/ajacksified/quorra
// MIT licensed.

!function(global){
  'use strict';

  var Hexagonal = function(sideLength, options){
    // Make sure that the required parameters are sent.
    if(!sideLength || sideLength < 0)
      throw new Error("Must include side length, a positive integer.");

    options = options || {};
    options.rotation = options.rotation || 'pointed';

    this.worldXOffset = options.worldXOffset || 0;
    this.worldYOffset = options.worldYOffset || 0;

    // Precalculate the offsets so that finding grid coordinates is simply a
    // multiplication and addition problem.
    var offsets = Hexagonal.calculateOffsets(
                              options.sideLength,
                              options.rotation);

    // x position per column
    this.xOffset = offsets.xOffset;

    // y position per row
    this.yOffset = offsets.yOffset;
  };

  Hexagonal.prototype.getCoordinates = function(){
  };

  // We'll make this a static method, since it really doesn't need to be
  // instance based.
  Hexagonal.calculateOffsets = function(sideLength, rotation){
    // Make sure that the required parameters are sent.
    var xOffset, yOffset;

    if(!sideLength || sideLength < 0)
      throw new Error("Must include side length, a positive integer.");

    if(rotation == undefined || rotation == null || !(rotation == 'flat' || rotation == 'pointed'))
      throw new Error("Must include rotation, a string of possible values 'flat' or 'pointed'.");

    return {
      xOffset: xOffset,
      yOffset: yOffset,
    };
  };

  if(module && module.exports){
    module.exports = Hexagonal;
  }else{
    global.quorra = global.quora || {}
    global.quorra.Hexagonal = Hexagonal;
  }
}(this);

