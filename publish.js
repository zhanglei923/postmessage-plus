let fs = require('fs');
let pathUtil = require('path');

let srcPath = pathUtil.resolve(__dirname, './src')
let distPath = pathUtil.resolve(__dirname, './dist')

let content = fs.readFileSync(pathUtil.resolve(srcPath, 'postmessage-plus.js'),'utf8');
let content_cmd = `
define(function(require, exports, module) {
${content}
module.exports = postmessageplus;
});`;
let content_module = `
${content}
export default postmessageplus;
`
console.log(content)

fs.writeFileSync(pathUtil.resolve(distPath, 'postmessage-plus.js'), content); 
fs.writeFileSync(pathUtil.resolve(distPath, 'postmessage-plus.cmd.js'), content_cmd); 
fs.writeFileSync(pathUtil.resolve(distPath, 'postmessage-plus.module.js'), content_module); 