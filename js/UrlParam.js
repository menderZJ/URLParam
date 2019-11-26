;!function (w){
    /**
     * @desc 获取和设置URL相关参数的一个类
     * @param param  url字符串或者url各种参数数组，默认为location.href
     * @returns {URL}
     * @constructor
     * @version 0.1
     * @date 2019-11-25
     * @author:zj.mender.yang
     */
   w.URL=function(param){
       let fullPath=protocol=host=path=fileName=url=params=anchor='';
       let protocolPos=hostPos=filePathPos=fileNamePos=paramsPos=anchorPos=[0,0];
       if('object'===typeof param){
           url=param['url']||w.location.href;
       }else if('string'===typeof param){
           url=param||w.location.href;
       }
       else{
           param=url=w.location.href;
       }
       fullPath=url.substr(0,url.indexOf('?')==-1?url.length:url.indexOf('?'));
       protocolPos=[0,fullPath.indexOf('://')];
       hostPos= [protocolPos[1]+3,fullPath.indexOf('/',fullPath.indexOf('://')+3)];
       filePathPos=[hostPos[1],fullPath.lastIndexOf('/')+1];
       fileNamePos=[filePathPos[1],fullPath.length];
       paramsPos= [fullPath.length+1,fullPath.length+(url.substr(fullPath.length).indexOf("#")==-1?url.length:url.substr(fullPath.length).indexOf("#"))];
       anchorPos= [paramsPos[1]+1,url.length];

       protocol='string'===typeof param.protocol?param.protocol:url.substring(protocolPos[0],protocolPos[1]);
       host='string'===typeof param.host?param.host:url.substring(hostPos[0],hostPos[1]);
       path='string'===typeof param.path?param.path:url.substring(filePathPos[0],filePathPos[1]);
       fileName='string'===typeof param.fileName?param.fileName:url.substring(fileNamePos[0],fileNamePos[1]);
       anchor='string'===typeof param.anchor?param.anchor:url.substring(anchorPos[0],anchorPos[1]);
       params=url.substring(paramsPos[0],paramsPos[1]);
       let paramsArr=params.split('&');
       params={};
       for(let i=0;i<paramsArr.length;i++) {
           params[paramsArr[i].substring(0,paramsArr[i].indexOf('='))]=paramsArr[i].substring(paramsArr[i].indexOf('=')+1);
       }
       if('boolean'===typeof param.del && param.del===true){ // 删除参数
           for(let p in param.params){
               delete   params[p];
           }
       }else if('object'===typeof param.params){  //  添加或修改参数
           for(let p in param.params){
               params[p]= param.params[p];
           }
       }

       let paramsStrArr=new Array();
       let paramsStr='';
       for(p in params){
           paramsStrArr.push(p+'='+params[p]);
       }
       paramsStr=paramsStrArr.join('&');
       if('string'===typeof param.protocol||'string'===typeof param.host||'string'=== typeof param.path||'string'===typeof param.fileName||'string'===typeof param.anchor||'object'===typeof param.params) {
           url = protocol + '://' + host  + path + fileName + (paramsStr.length > 0 ? '?' + paramsStr : '') + (anchor.length > 0 ? '#' + anchor : anchor);
           return new w.URL(url);
       }else {
           this['url'] = url;
           this['v'] ='0.1';
           this['fullPath'] = fullPath;
           this['protocol'] = protocol;
           this['host'] = host;
           this['path'] = path;
           this['fileName'] = fileName;
           this['params'] = params;
           this['anchor'] = anchor;
           this.toString = function () {
               return this['url'];
           }
           this.value = this['url'];
       }
   }
}(window);