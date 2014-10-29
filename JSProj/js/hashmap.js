/**************************************
Hashmap - creates an hashmap for objects
to be stored and retrieved using keys.

Functions supported are:
  - size - returns size of map
  - get - returns the value for a particular key
  - put - sets the value to the particular key 
***************************************
Version: 0.1
Created: 28-10-2014
Comment: 28-09-2014 - initial version
Authors: Hariram S
**************************************/

var hashmap = (function() {
  //Array where key and value is stored
  var _data = [];
  //Size of the map (array size / 2)
  var _size = 0;
  
  /**********************************
   * Find index of a key in the map
   *********************************/
  var findIndex = function(key) {
    return _data.indexOf(key);
  },

  /**********************************
   * Put the value for the key in the map
   *********************************/
  put = function(key, value) {
    if(!key) {
      console.warn("no key provided");
      return;
    }
    if(!value) {
      console.war("no value provided");
      return;
    }
    
    //Check if key exists and if so, then update the map
    var index = findIndex(key);
    
    if(index == -1) {
      _data[_size] = key;
      _data[_size + 1] = value;
      _size = _size + 2;
    } else {
      _data[index + 1] = value;
    }
  },
  
  /**********************************
   * Get the value for key in the map
   *********************************/
  get = function(key) {
    var index = findIndex(key);
    if(index == -1) {
      return "key not found";
    } else {
      return _data[index + 1];
    }
  }, 
  
  /**********************************
   * Check if key exists in the map
   *********************************/
  exists = function(key) {
    var index = findIndex(key);
    if(index == -1) {
      return false;
    } else {
      return true;
    }
  },
  
  /**********************************
   * Size of the map
   *********************************/
  size = function() {
    return (_size/2);
  },
  
  /**********************************
   * Size of the map
   *********************************/
  listKeys = function() {
	var list = [];
    for(var i=0;i<_size;i=i+2) {
      list.push(_data[i]);
    }
    return list;
  }

  return {
    version: '0.1',
    put: put,
    get: get,
    exists: exists,
    size: size,
    listKeys: listKeys
  }
})();