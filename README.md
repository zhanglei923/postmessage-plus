# A window.postMessage support callback!
How to:
- include postmessage-plus.js in both parent and iframe children pages like this: 
```html
    <script src="../dist/postmessage-plus.dist.js"></script>
```
- run script below to call parent method:
```javascript
   postmessageplus.call('getValue', 1,2,3).then(function (result){
        alert(result)
   });
```

- or call an iframe's method specifically:
```javascript
    postmessageplus.setTarget(frame1).call('getChildValue', 1,2,3).then(function (result){
        alert(result)
    });
```
