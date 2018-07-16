//postmessage-plus
var postmessageplus;
(() => {
    var _currentTarget = window.parent;
    var _currentTargetHost = '*';
    var _waitingPromiseMap = {};
    var _currentResult;

    var handleMessage = function (data) {
        //console.log('got msg', window.location.href, data)
        var data = data.data;
        if(data.__postmessageplus_token){
            //handleCall(data)
        }else if(data.__postmessageplus_result_token){
            //handleResultMsg(data)
        }        
    }


    if ((<any>window).addEventListener) {
        (<any>window).addEventListener('message', ()=>{}, false)
    } else if ((<any>window).attachEvent) {
        (<any>window).attachEvent("onmessage", ()=>{});
    }
    
})();
(<any>window).postmessageplus={}