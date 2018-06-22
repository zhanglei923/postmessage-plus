
define(function(require, exports, module) {
//postmessage-plus
(function(){
    var _currentTarget = window.parent;
    var _currentTargetHost = '*';
    var _waitingPromiseMap = {};
    var handleMessage = function (data) {
        console.log('got msg', data)
        var data = data.data;
        if(data.__postmessageplus_token){
            handleCall(data)
        }else if(data.__postmessageplus_result_token){
            handleResultMsg(data)
        }        
    }
    var handleResultMsg = function(data){
        var token = data.__postmessageplus_result_token;
        var waitinginfo = _waitingPromiseMap[token]
        if(!waitinginfo) return;
        console.log('aha!', window.location, data.__postmessageplus_result)
    }
    var handleCall = function(data){
        //invoke
        var methodStr = data.__postmessageplus_methodStr;
        var args = data.__postmessageplus_args;
        var token = data.__postmessageplus_token;

        var result;
        var execStr = 'result = window.' + methodStr + '.apply(window, args)';
        console.log(execStr, window.location)
        eval(execStr)
        console.log('result', result)
        var iframelist0 = document.getElementsByTagName('iframe');
        var iframelist = [window.parent];
        for(var i = 0; i < iframelist0.length; i++){
            iframelist.push(iframelist0[i].contentWindow)
        }
        //broadcast back to callee iframe(including this page itself):
        for(var i = 0; i < iframelist.length; i++){
            if(iframelist[i].postMessage)
            iframelist[i].postMessage({
                __postmessageplus_result_token: token,
                __postmessageplus_result: result
            }, _currentTargetHost);
        }

    }
    //callback token, like: result-89876-1529647278723
    var generateToken = function(){
        var time = 1 * (new Date())
        var random = Math.floor( Math.random() * Math.pow(10, 5));
        return 'result-'+random+'-'+time;
    }
    window.postmessageplus = {
        setTarget: function(target){
            _currentTarget = target;
            return window.postmessageplus;
        },
        call: function (){
            var args = [];
            var methodStr = arguments[0];
            for(var i = 1; i < arguments.length; i++){
                args.push(arguments[i]);
            }
            var token = generateToken();
            _currentTarget.postMessage({
                __postmessageplus_token: token,
                __postmessageplus_methodStr: methodStr,
                __postmessageplus_args: args
            }, _currentTargetHost);
            _currentTarget = window.parent;//reverse back to parent by default!
            var promise = new Promise(function (resolve, reject) {  
                resolve()
            });
            _waitingPromiseMap[token] = {
                promise: promise
            };
            return promise
        }
    }
    //listen
    //console.log('listen!', window.addEventListener)
    if (window.addEventListener) {
        window.addEventListener("message", handleMessage);
    } else if (window.attachEvent) {
        window.attachEvent("onmessage", handleMessage);
    }
})()
module.exports = postmessageplus;
});