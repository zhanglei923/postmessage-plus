# THIS LIB IS DEPRECATED. 
# PLEASE SWITCH TO "messenger.js" (https://github.com/zhanglei923/messenger.js)!

# A window.postMessage support callback!
How to:
- Download and put postmessage-plus.js in your parent and children(iframe) pages: 
```html
    <script src="../dist/postmessage-plus.dist.js"></script>
```
- Invoke parent page's method in iframe page:
```javascript
   postmessageplus.call('getValue', 1,2,3).then(function (result){
        alert(result)
   });
```

- Call a child iframe's method:
```javascript
   postmessageplus.setTarget(frame1).call('getChildValue', 1,2,3).then(function (result){
       alert(result)
   });
```

Under the terms of the MIT Liscense.
