# A window.postMessage support callback!
How to:
- include postmessage-plus.js in both parent and iframe children pages like this: <script src="../dist/postmessage-plus.dist.js"></script>
- run script below in child-iframe to call parent method:
```javascript
   postmessageplus.call('getValue', 1,2,3).then(function (result){
        alert(result)
    })
```
