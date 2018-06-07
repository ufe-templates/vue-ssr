# vue-ssr

## vue-loader 15

## koa for server

## webpack 4

## eslint

## ssr

- code spliting
  - with css modules and mini-css-extract-plugin cause the server side problem: document is not defined [#90](https://github.com/webpack-contrib/mini-css-extract-plugin/issues/90)
- css scoped 服务端和客户端渲染的data-v不一样
  - 使用mini-css-extract-plugin 将css单独打包到一个文件时候scoped产生的data-v不一致
- 服务端文件没有css
  - 因为使用了mini-css-extract-plugin 以及使用VueSSRServerPlugin 导致
  - server端不要使用mini-css-extract-plugin
  - 为什么react中不适用
    - 直接使用 style-loader 同样在server会报错 因为server端没有window document对象 vue-style-loader 没有这个问题
    - css-loader/locals 会导致首次渲染的时候页面没有css 而vue有的原因在于 VueSSRServerPlugin这个插件把打包过程全部json化
