
define(function(require, exports, module) {
(function(){
    var handleMessage = function () {
        alert('23413')
    }
    if (window.addEventListener) {                    //所有主流浏览器，除了 IE 8 及更早 IE版本
        window.addEventListener("message", handleMessage);
    } else if (window.attachEvent) {                  // IE 8 及更早 IE 版本
        window.attachEvent("onmessage", handleMessage);
    }
    window.postmessageplus = {
        call: function (){
            parent.postMessage({}, '*');
        }
    }
})()
module.exports = postmessageplus;
});