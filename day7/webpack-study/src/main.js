// main 是项目js的入口文件

//1.导入 jquery
// import *** from *** 是es6总导入模块的方式 固定写法
import $ from 'jquery'

$(function(){
    $('li:odd').css('backgroundColor', 'red')
    $('li:even').css('backgroundColor', function(){
        return '#' + 'D97634'
    })
})
 

// webpack可以做的事情:
    // 1.webpack 能够处理 JS 文件的互相依赖关系;
    // 2.webpack 能够处理 JS 的兼容问题 把高级浏览器不识别的语法转换低级的 浏览器能正常识别的语法