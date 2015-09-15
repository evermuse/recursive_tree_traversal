
/*global require, module,  __dirname */
/*jslint node: true */

'use strict';

// var traverse = {};

function Traverse(data) {

  this.tree = data;

}

/*
 * build the methods via prototype
 * the first one is free
 * uncomment the code below, then remove this comment
 */

Traverse.prototype.getAllNames = function() {};

Traverse.prototype.getAllAges = function() {};

Traverse.prototype.getLeafAges = function() {};

Traverse.prototype.getLeafNames = function() {};

Traverse.prototype.findAllParentsNames = function() {};

Traverse.prototype.findAllParentsAges = function() {};

Traverse.prototype.findName = function(String) {};

Traverse.prototype.findAge = function() {};

/* exports the Class Traverse */
module.exports = Traverse;