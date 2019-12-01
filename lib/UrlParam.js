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
        this.append     =   t.append;
        this.delete     =   t.delete;
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

        var paramString=[];
        paramString=s.split('&');
        var param={};
        for (var pp in paramString){
            var ts=pp.substr(0,pp.indexOf('='));
            if(ts.length>0) {
                param[ts]=pp.substr(pp.indexOf('=')+1);
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
        t['forEach']    =   function(){
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
            param.hasOwnProperty(keyName);
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
        t['sort']       =   function (){
            var ta=[];
            var to={};
            for(var pp in param){
                ta.push(pp);
                 }
            ta.sort(function(a,b){return a<b;});
            ta.forEach(function(v){to[v]=param[v]});
            param=to;
        };
        t['toString']   =   function (){
          var ts=[];

          param.forEach(function(k,v){ts.push(k+'='+v)});
          return ts.join('&');
        };
        t['values']     =   function (){
          return param;
        };

    }
}(window);