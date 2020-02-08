# URLParams

A js script for control and rebuild the URL include params.
Since 2.0, it is compatibled IE7+. And 2.0 is realized the web api ***[URLSearchParams](https://developer.mozilla.org
/zh-CN/docs/Web/API/URLSearchParams)*** . 

## How to begin

1.load lib/UrlParam.js. Just write code like this in your html or tamplates file.
~~~
    <script src=lib/UrlParam.js></script>
~~~      
2.now,you can use  UrlParam's method on your js.
 
##2. APIs

### Constructor
URLParams()
Returns a URLParams object instance.
	
### methods

#### URLParams.append({keyName1:value1,keyName2:value2...})
Appends a specified key/value pair as a new search parameter,if accept a json object like *{'param1':value1,'param2
':value2...}* ,you can append more params in once. If one key is existed ,then replace the value of the key.
#### URLParams.delete(keyName)
Deletes the given search parameter, and its associated value, from the list of all search parameters. **Important:** in IE 8 less,please use `remove()` instead.
#### URLParams.entries()
	Returns a JSON  of this object.
#### URLParams.forEach(fn)
	Allows iteration through all values contained in this object via a callback function.
#### URLParams.get(keyName)
Returns the first value associated with the given search parameter.
#### URLParams.getAll(keyName)
Returns all the values associated with a given search parameter.
#### URLParams.has(keyName)
Returns a Boolean indicating if such a given parameter exists.
#### URLParams.keys()
Returns a Array object of params's keys.
#### URLParams.set(key,value)
Sets the value associated with a given search parameter to the given value.If one key is existed ,then replace the
  value of the key.If you wanna set more params,you can use **append()**
#### URLParams.sort(fn)
Sorts all key/value pairs, if any, by their keys.
#### URLParams.toString()
Returns a string containing a query string suitable for use in a URL.
#### URLParams.values()
Returns a JSON  of this object.
