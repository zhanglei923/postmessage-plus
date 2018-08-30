let fs = require('fs');
let pathUtil = require('path');

let version = 'v1'
let libPath = pathUtil.resolve(__dirname, './lib')
let srcPath = pathUtil.resolve(__dirname, './src/'+version)
let distPath = pathUtil.resolve(__dirname, './dist/'+version)
let npmPath = pathUtil.resolve(__dirname, '../postmessage-plus-npm')

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
if(fs.existsSync(npmPath)){
	fs.writeFileSync(pathUtil.resolve(npmPath, 'postmessage-plus.module.js'), clean(content_module));
}else{
	console.log('can not output to:', npmPath)
}
console.log('done.')