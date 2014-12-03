/**************************************
* Creates javascript objects with
* variables and functions that are
* passed as array arguments 
* 
***************************************
* Version: 0.1
* Created: 3-Dec-2014
* Comment: Initial version
* Authors: Hariram S
*
* Copyright (c) 2014 Hariram S
* Licensed under the GNU GPL v2.0 license.
* https://github.com/hariram1981/js_musings/blob/master/LICENSE 
* 
**************************************/

var obj = function(args, funcs) {
	var o = new Object();
	for(a in args) {
		o[args[a]] = "";
	}
	
	for(f in funcs) {
		o[funcs] = function() {};
	}
	
	return o;
}