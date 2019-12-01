;!function (w){
    /**
     * @desc 获取和设置URL相关参数的一个类
     * @param param  url字符串或者url各种参数json对象，默认为location.href 字符串，为json对象时，结构如下：
     * {
     *  url:yourURL,                //你的URL地址
     *  protocol:yourProtocol,      //协议
     *  host:yourHost,              //主机或域名
     *  path:thePath,               //路径
     *  fileName:fileName,          //文件名称
     *  params:{                    //URL参数,若paramKey已存在,则按照给定的值替换其值,若不存在,新加一个paramKey参数,并给定paramValue值
     *      paramKey1:paramValue1,
     *      paramKey2:paramValue2,
     *              .
     *              .
     *              .
     *      paramKeyN:paramValueN,
     *      }
     *  anchor:theAnchor,           //锚，有指定时进行替换，若要清楚锚，给定 anchor项，并将其置为空字串，若不想变更，则不给定。
     *  delparam:true||false        //参数清楚标记，若该参数有给定，并且为true，则将params所有涉及到的 paramKey全部清除
     * }
     * @returns {URL}
     * @constructor
     * @version 0.2
     * @date 2019-11-25
     * @author:zj.mender.yang
     */
   w.URL=function(param){
       this.v ='0.2';
       this.init=function (param){
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
           if('boolean'===typeof param.delparam && param.delparam===true){ // 删除参数
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
           }
           else{
               this['url'] = url;
               this['fullPath'] = fullPath;
               this['protocol'] = protocol;
               this['host']     = host;
               this['path']     = path;
               this['fileName'] = fileName;
               this['params']   = params;
               this['anchor']   = anchor;
               this['toString'] = function () {
                   return this['url'];
               }
               this['value']    = this['url'];
           }
       }

       this.addparam=function (paramT,paramTv){
           var paramTe={};
           paramTe[paramT]= paramTv;
           this.init({url:this.url,params:paramTe});
           return this;
       };
       this.delPrama=function(pramaName){
           var paramTe={};
           paramTe[pramaName]= '';
           this.init({url:this.url,params:paramTe,delparam:true});
           return this;
       }
       this._modifyParam=function(params){
           this.init({url:this.url,params:params});
       }
       this.modifyAchor=function(achorName,achorValue){
           var paramTe={};
           paramTe[achorName]= achorValue;
           this.init({url:this.url,anchor:params});
           return this;
       }
       this.init(param);
   }
}(window);