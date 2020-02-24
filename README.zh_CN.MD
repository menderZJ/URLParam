# URLParams

这是一个用于控制url参数的小脚本，本版本为2.0，与之前的版本不同.兼容IE7.0+. 
2.0版本基本重构了 web api： ***[URLSearchParams](https://developer
.mozilla.org
/zh-CN/docs/Web/API/URLSearchParams)*** . 

## 怎么开始

1.载入 lib/UrlParam.js. 将下面代码放入呢的HTML或者模板文件.
~~~
    <script src=lib/UrlParam.js></script>
~~~      
2.现在你可以再你的js代码中使用  UrlParam的方法了.
 
## APIs

### 构造方法
URLParams()
R返回一个 URLParams 的实例.
	
### 方法

#### URLParams.append({keyName1:value1,keyName2:value2...})
添加一个键值对,传入一个 json 对象， 如 *{'param1':value1,'param2
':value2...}* ,这样可以添加多个参数和值. 如果其中的key在原来的url参数中已经存在，则对已存在的值进行替换。
#### URLParams.delete(keyName)
在url中删除key为keyName的参数. **Tips:** 另外`remove()`为本方法的别名.
#### URLParams.entries()
返回一个包含全部url参数名称的对应值的JSON对象.
#### URLParams.forEach(fn)
为每个参数和值执行fn函数，会传入两个参数给fn函数，分别为：keyName，value。
本方法不会对原来的参数做任何改变，如果要对url参数进行修改，请在fn函数中实现。.
#### URLParams.get(keyName)
返回指定名称KeyName对应的值，若没有，则返回 undefined.
#### URLParams.getAll(keyName)
返回一个[keyName,value]数组形式的键值对.
#### URLParams.has(keyName)
是否存在指定名称为keyName的参数，存在返回true，不存在返回false.
#### URLParams.keys()
返回一个包含所有url的参数名称的数组对象.
#### URLParams.set(key,value)
设置或添加一个参数，并把它的值设置为value。若key已存在，则将值修改为value，若不存在，则添加一个。如果要一次性设置多个，请使用 **append()**
#### URLParams.sort(fn)
按照key排序所有的键值对，可使用fn函数进行自定义排序。
#### URLParams.toString()
返回一个url参数字符串形式的（如：a=1&b=2&...&n=N）的字符串，包含所有设置好的url参数.
#### URLParams.values()
返回一个包含所有参数和值的键值对的JSON对象.
