js_musings
==========
Implementation of simple functionalities in JavaScript that can be used in various projects. Musings or deep reflections in JavaScript lead to these simple js files.

hashmap.js
 - creates an hashmap to store objects in arrays using key-value.
 - usage, hashmap.put("key","value");
 - hashmap.get("key");

HashMap.js
 - hashmap object that supports storage of objects in key-value.
 - var h1 = new HashMap();
 - supported methods are put("key", "value"), get("key"), exists("key"), listKeys()

obj.js
 - creates object with passed arguments and functions as its members.
 - var o1 = new obj(["a"],["myfunc"]);
 - the above will create an object o1 with variable a and member function myfunc.

namespace.js
 - creates namespaces for the array of arguments passed.
 - namespace.create(["b","c","d"];
 - the above will create namespaces for b, c and d. Later b can be given attributes and functions as "b.".

Set.js
 - creates an array that stores values without duplicates.
 - var s1 = new Set();
 - the above will create a set with values that can be added using add(<value>) method.

TreeSet.js
 - creates an array that stores values without duplication and sorted in ascending order.
 - var t1 = new TreeSet();
 - the above will create a set with values that can be added using add(<value>) method and is sorted in ascending order.
 - depends on Set.js

License
==========
Copyright (c) 2014 GitHub, Inc. See the LICENSE file for license rights and limitations (GNU GPL v2.0)


