A window.postMessage with callback!
How to use:
1, include postmessage-plus.js in both parent and iframe children pages like this: <script src="../dist/postmessage-plus.dist.js"></script>
2, run script below in child-iframe to call parent method:
```javascript
   postmessageplus.call('getValue', 1,2,3).then(function (result){
        alert(result)
    })
```