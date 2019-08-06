# Weex 开发的不完整 Wan Android 客户端
# 快速运行

## 运行android
``` bash
$ weex run android
```

## 运行ios
``` bash
$ weex run ios
```

## 运行web
因在`configs/config.js`中配置了代理：
``` 
proxyTable: {
      '/api': {
        target: 'https://www.wanandroid.com', // 接口域名
        secure: true, // 如果是https接口，需要配置这个参数
        changeOrigin: true, // 如果接口跨域，需要配置
        pathRewrite: {
          '^/api': ''
        }
      }
    }
```
如果要运行web环境，需要修改`src/common/api.js`中`HOST`为`api`

``` bash
$ npm start
```


# 不完整填坑记录

> 
> 创建项目的时候，需要仔细看提示，选择最新的版本，不让会遇到很多问题


### weex中使用sass
1. 安装依赖

> npm i node-sass sass-loader --save

2. 配置loader

在configs/vue-loader.conf.js中配置

```
...
module.exports = (options) => {
  return {
    ...
    cssSourceMap: sourceMapEnabled,
    cacheBusting: config.dev.cacheBusting,
    // 这里添加sass配置
    lang: {
      sass: ['sass-loader']
    }
  }
}
```

### weex使用vue-router问题

#### `this.$router.push`在移动端不生效问题
在`index.vue`中`<router-view/>`一定要在外面写`<div>`将其包裹，不然使用`this.$router.push`在`android` ` ios`上会不生效，在`web`没有问题。

#### `this.$router.back`、`this.$router.go(-1)`
使用router的`back`或`go`，在`Android`上不会生效；

替代方案移动端使用`navigator`方式，具体查看`src/mixins/index.js`，该方案需要生成多页面具体步骤如下：
1. 创建对应的`entry.js`
2. 在`configs/webpack.common.conf.js`的`weexEntry`中新增对应页面的配置

经测试，上述方案在`Android`上会和`router.back`同样的效果，具体原因不明。

官方文档并没有详细说明，不过如果是线上项目，可以将生成的js文件放到服务器，跳转使用`navigator`请求具体的文件即可。

### 资源路径

#### 资源路径获取

查看 `src/config/IconConfig.js`

#### Android
`drawable-hdpi` `drawable-mdpi` `drawable-xhdpi` `drawable-xxhdpi` 中都要放图片，否则`local:///ic_logo`方式无法加载出图片

### 样式/SCSS

在Android中不支持嵌套样式，还有其他一些样式属性不兼容，具体查看[官方文档](https://weex.apache.org/zh/docs/styles/common-styles.html)