// This file contains the constructor for the Hexagonal grid placement
// library. It accepts a height, width, z- and x- tilts, a rotation type
// ('flat' or 'pointed' on top, default 'pointed'), and a numbering system
// ('odd-r', 'even-r', 'odd-q', 'even-q', or 'axial', default: 'axial').
// See http://www.redblobgames.com/grids/hexagons
// In return, you can ask for the pixel placement for a given grid location.
//
// Part of quorra, an isometric grid library. github.com/ajacksified/quorra
// MIT licensed.

!function(global){
  'use strict';

  var Hexagonal = function(height, width, options){
    // Make sure that the required parameters are sent.
    if(!height)
      throw new Error("Must include height, a positive integer > 0.");

    if(!width)
      throw new Error("Must include width, a positive integer > 0.");

    options = options || {};
    options.rotation = options.rotation || 'pointed';
    options.xTilt = options.xTilt || 0;
    options.yTilt = options.yTilt || 0;

    // Precalculate the offsets so that finding grid coordinates is simply a
    // multiplication and addition problem.
    var offsets = Hexagonal.calculateOffsets(
                              options.height,
                              options.width,
                              options.rotation,
                              options.xTilt,
                              options.zTilt);

    // offset per column (with xTilt applied)
    this.xColumnOffset = offsets.xColumnOffset;

    // y position per row (with zTilt aplied)
    this.yRowOffset = offsets.yRowOffset;

   // deal with xTilt, total offset per row
    this.xRowOffset = offsets.xRowOffset;
  };

  Hexagonal.prototype.place = function(){
  };

  // We'll make this a static method, since it really doesn't need to be
  // instance based.
  Hexagonal.calculateOffsets = function(height, width, rotation, xTilt, zTilt){
    // Make sure that the required parameters are sent.
    var xColumnOffset, yRowOffset, xRowOffset;

    if(!height)
      throw new Error("Must include height, a positive integer.");

    if(!width)
      throw new Error("Must include width, a positive integer.");

    if(rotation == undefined || rotation == null || !(rotation == 'flat' || rotation == 'pointed'))
      throw new Error("Must include rotation, a string of possible values 'flat' or 'pointed'.");

    if(xTilt == undefined || xTilt == null || xTilt <= -90 || xTilt >= 90)
      throw new Error("Must include xTilt, a positive integer between -90 and 90.");

    if(zTilt == undefined || zTilt == null || zTilt <= -90 || zTilt >= 90)
      throw new Error("Must include zTilt, a positive integer. between -90 and 90.");

    return {
      xColumnOffset: xColumnOffset,
      yRowOffset: yRowOffset,
      xRowOffset: xRowOffset
    };
  };

  if(module && module.exports){
    module.exports = Hexagonal;
  }else{
    global.quorra = global.quora || {}
    global.quorra.Hexagonal = Hexagonal;
  }
}(this);

