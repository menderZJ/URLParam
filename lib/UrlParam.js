;!function (w){
    /**
     * @desc get and set the url searchParam .This is a object for allmost browsers excluded some very old version，and
     * it is realized  methods of the WEB API: URLSearchParams. The IE's all version is unsupported Iterator, so
     * keys() is returned an array object, entries（），values() methods respectively are returned object;
     * @param s SearchString
     * @version 1.0
     * @date 2020.02.04
     * @author:zj.mender.yang
     */
    w.URLParams=function (s){
        var paramString=[];
        s=s.indexOf('?')>-1? s.substr(1):s;
         paramString=s.split('&');
        var param={};
        for (var pp in paramString){
            var ts=paramString[pp].substr(0,paramString[pp].indexOf('='));
            if(ts.length>0) {
                param[ts]=paramString[pp].substr(paramString[pp].indexOf('=')+1);
            }
        }

        var t={};
        t['append']     =   function (keyName,value){
            param[keyName]=  value;
        };
        t['delete']     =   function (keyName){
             delete param[keyName];
        };
        t['entries']    =   function (){
             return param;
        };
        t['forEach']    =   function(fn){
            for(var pp in param){
                if(pp==='__keys__' || pp==='__forEach__'){continue;}
                fn(pp,param[pp]);
            }
        };

        t['get']        =   function (keyName){
            return param[keyName];
        };
        t['getAll']     =   function (keyName){
           return [keyName,param[keyName]];
        };
        t['has']        =   function (keyName){
            return param.hasOwnProperty(keyName);
        };
        t['keys']       =   function(){
            var ta=[];
            for(var pp in param){
                if(pp==='__keys__' || pp==='__forEach__'){continue;}
                ta.push(pp);
            }
            return ta;
        };

        t['set']        =   function (keyName,value){
            param[keyName]=  value;
        };
        t['sort']       =   function (fn){
            fn=fn||function(a,b){return a==b?0:(a<b?-1:1);};
            var ta=[];
            var to={};
            for(var pp in param){
                ta.push(pp);
                 }
            ta.sort(fn);
            window.dd=ta;
            try {
                ta.forEach(function (v) {
                    to[v] = param[v]
                });
            }
            catch (e) {
                for(var v=0;v<ta.length;v++){
                    to[ta[v]] = param[ta[v]];
                }
            }
            param=to;
        };
        t['toString']   =   function (){
          var ts=[];
          for(k in param){
              v= param[k];
              ts.push(k+'='+v);
          }
          return ts.join('&');
        };
        t['values']     =   function (){
          return param;
        };

        this.append     =   t.append;
        this['delete']     =   t['delete'];
        this.remove     =   t['delete'];

        this.entries    =   t.entries;
        this.forEach    =   t.forEach;
        this.get        =   t.get;
        this.getAll     =   t.getAll;
        this.has        =   t.has;
        this.keys       =   t.keys;
        this.set        =   t.set;
        this.sort       =   t.sort;
        this.toString   =   t.toString;
        this.values     =   t.values;
    }
}(window);