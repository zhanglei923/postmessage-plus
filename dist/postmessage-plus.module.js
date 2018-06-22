


//postmessage-plus
(function(){
    if (window.addEventListener) {                    //所有主流浏览器，除了 IE 8 及更早 IE版本
        window.addEventListener("message", handleMessage);
    } else if (window.attachEvent) {                  // IE 8 及更早 IE 版本
        window.attachEvent("onmessage", handleMessage);
    }
    var handleMessage = function (data) {
        if(data.__result_token){

        }else{

        }
        
    }
    var handleResultMsg = function(){

    }
    var handleCall = function(){

    }
    //callback token, like: result-89876-1529647278723
    var generateToken = function(){
        var time = 1 * (new Date())
        var random = Math.floor( Math.random() * Math.pow(10, 5));
        return 'result-'+random+'-'+time;
    }
    var _currentTarget = window.parent;
    window.postmessageplus = {
        setTarget: function(target){
            _currentTarget = target;
            return window.postmessageplus;
        },
        call: function (){
            var args = [];
            for(var i = 0; i < arguments.length; i++){
                args.push(arguments[i]);
            }
            console.log('args', args)
            parent.postMessage({}, '*');
            _currentTarget = window.parent;//reverse back to parent by default!
            var token = generateToken();
            console.log(token)
            return new Promise(function (resolve, reject) {  
                resolve(111)
            });
        }
    }
})()
export default postmessageplus;
