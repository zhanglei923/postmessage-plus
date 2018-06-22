let fs = require('fs');
let pathUtil = require('path');

let libPath = pathUtil.resolve(__dirname, './lib')
let srcPath = pathUtil.resolve(__dirname, './src')
let distPath = pathUtil.resolve(__dirname, './dist')

let bluebird = fs.readFileSync(pathUtil.resolve(libPath, 'bluebird.min.js'),'utf8');
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
var clean = (content) =>{
    content = content.replace(/console\.log/g, '//')
    return content;
}

fs.writeFileSync(pathUtil.resolve(distPath, 'postmessage-plus.dist.js'), `${bluebird}\n${content}`); 
fs.writeFileSync(pathUtil.resolve(distPath, 'postmessage-plus.cmd.js'), clean(content_cmd)); 
fs.writeFileSync(pathUtil.resolve(distPath, 'postmessage-plus.module.js'), clean(content_module)); 
console.log('done.')