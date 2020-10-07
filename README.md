####	WEBPACK学习记录，从零搭建vue环境，初试webpack（一）

QQ：512469231

博主ID：Inory、博丽灵梦

学习之前，默认我们是纯小白，因为博主也是刚刚找到工作的小白，网上有很多文章，但是自己写的文章，总是会在自己迷茫的时候，受到微妙的启发，所以，乐于分享，才是自己进步的开始，如果其他人因为我的文章学会了一小部分知识，我会觉得很高兴！

下个文章写微信小程序吧，下个项目就是小程序。如果项目是pc端的话，我会用webpack搭建环境并使用的，毕竟只有在实际使用才会得到非常大的进步。

话不多说，开始吧，



开局，初始化文件目录

``npm init - y``

得到package.json文件和package-lock.json

```
{
  "name": "webpack3",	//你的文件目录名字
  "version": "1.0.0",	//版本号
  "description": "",	//描述
  "main": "index.js",	// - main 字段指定了程序的主入口文件，require('moduleName') 就会加载这个文件。这个字段的默认值是模块根目录下面的 index.js。
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],	//关键字
  "author": "",	//作者
  "license": "ISC",	//你应该为你的模块制定一个协议，让用户知道他们有何权限来使用你的模块，以及使用该模块有哪些限制。最简单的，例如你用BSD-3-Clause 或 MIT之类的协议，如下：{ "license" : "BSD-3-Clause" }你可以在https://spdx.org/licenses/ 这个地址查阅协议列表 。
  "devDependencies": {
    "webpack": "^4.44.2",	
    "webpack-cli": "^3.3.12"
  }
}
```

package-lock.json文件，自己去看这个网址。。太多不做介绍，是人就能看懂https://www.cnblogs.com/wangweizhang/p/10530294.html



#####	安装webpack

```bash
npm install webpack webpack-cli --save-dev
```

安装完后，得到

![image-20201003193759366](C:\Users\51246\AppData\Roaming\Typora\typora-user-images\image-20201003193759366.png)

为了验证我们的webpack是否可以开箱即用，首先创建几个文件体验一下。那我们按照vuecli自带的格式创建几个基础文件吧，格式如下

dist/index.html （自己手动引入文件将要打包的js文件）

src/main.js	

src/assets

src/assets/js/common.js

根据官方的文档，我们的入口文件是main，所以要把package.json的main给干掉，直接删掉就行，然后增加private这个参数，以便确保我们安装包是 `private(私有的)`，并且移除 `main` 入口。这可以防止意外发布你的代码。

![image-20201003195326266](C:\Users\51246\AppData\Roaming\Typora\typora-user-images\image-20201003195326266.png)

![image-20201003212206367](C:\Users\51246\AppData\Roaming\Typora\typora-user-images\image-20201003212206367.png)

![image-20201003212225010](C:\Users\51246\AppData\Roaming\Typora\typora-user-images\image-20201003212225010.png)

#####	开始打包

``npx webpack``

你会发现报错。。

为什么呢？因为我也报错了。

我们来看到webpack官网

![image-20201003211254796](C:\Users\51246\AppData\Roaming\Typora\typora-user-images\image-20201003211254796.png)





官网的说明，表示webpack4中，不需要任何的配置文件，也就是说，没有指定入口和出口，直接默认.src/index.js，如果你改成其他文件，就会无法进行打包，所以，如果想不需要配置，就要默认index.js，或者自行添加配置文件进行配置，这个到后面我们再来配置。

我们把main.js改成index.js

。。。

继续打包，在打包之前，先删除原来的打包文件，后面我们会让webpack帮我们删除

![image-20201003212544361](C:\Users\51246\AppData\Roaming\Typora\typora-user-images\image-20201003212544361.png)

成功啦！！！

我们的webpack已经成功跑起来了！！！



####	配置文件

刚才我们说到，webpack默认是index.js，所以我们开始改造

在根目录新建**webpack.config.js**

在这之前，先看会文档https://webpack.docschina.org/concepts/

	const path = require("path");module.exports = {
	 entyr:{
	       .......  //设置入口文件
	 },
	 output:{
	       .......  //设置出口文件
	 },
	 module:{
	       .......  //配置loader，注意使用rules而不是loaders
	 },
	 plugins:[
	       .......  //注意是数组
	 ],
	 devServer:{
	       //我们在这里对webpack-dev-server进行配置
	 }                

了解下配置文件应该怎么去写，如果我们直接对着教程抄，其实还是挺迷茫的

![image-20201003213147258](C:\Users\51246\AppData\Roaming\Typora\typora-user-images\image-20201003213147258.png)

看到官网标记的几个核心概念，大概花5分钟过一遍，不要心浮气躁。。。

好了，虽然你看不懂，但是没关系，我们来实际操作，实际博主也是边学边写文章

编辑器打开webpack.config.js

emmm，应该写什么东西。。。？

回到刚才的思路，我们要改index.js的文件名字，修改成main.js

现在把我们的src/index.js修改成index.js

回忆我们刚刚逛的官网说明，官网上写的入口

![image-20201003214105982](C:\Users\51246\AppData\Roaming\Typora\typora-user-images\image-20201003214105982.png)



入口就是我们的main.js

那现在开始dong手

![image-20201003215013813](C:\Users\51246\AppData\Roaming\Typora\typora-user-images\image-20201003215013813.png)

运行命令npx webpack

在这之前确保自己把src里面的index文件修改成main

![image-20201003215131398](C:\Users\51246\AppData\Roaming\Typora\typora-user-images\image-20201003215131398.png)

入口文件到这里结束了吗？？？

没有，如果你往官网下面看，你会发现，还有几个比较精彩的学习点

那就是多入口

JS文件嘛，那肯定是js语法，如果我们改成对象语法，会如何呢？

来dong手!

先删除原来的打包文件

![image-20201003220302629](C:\Users\51246\AppData\Roaming\Typora\typora-user-images\image-20201003220302629.png)

![image-20201003220315635](C:\Users\51246\AppData\Roaming\Typora\typora-user-images\image-20201003220315635.png)

运行命令

![image-20201003220348691](C:\Users\51246\AppData\Roaming\Typora\typora-user-images\image-20201003220348691.png)

看到dist文件，发现多了3个打包的js文件，说明对象语法是可用的



####	输出文件output

啥?这webpack只能改个入口？那也太拉闸了，继续对着官网往下看，来到输出文件

啥是输出文件呢？

就是打包之后的文件

![image-20201003221006588](C:\Users\51246\AppData\Roaming\Typora\typora-user-images\image-20201003221006588.png)

知道这个之后

开始dong手写我们的配置文件

![image-20201003222509666](C:\Users\51246\AppData\Roaming\Typora\typora-user-images\image-20201003222509666.png)

运行

报错

为什么呢？因为我们有多个入口。

如果你把index和app删了，你会发现会成功运行

因为我们文件没有重复

所以这里我们用到动态属性

![image-20201003222624736](C:\Users\51246\AppData\Roaming\Typora\typora-user-images\image-20201003222624736.png)

运行

![image-20201003222643194](C:\Users\51246\AppData\Roaming\Typora\typora-user-images\image-20201003222643194.png)



####	生产环境和开发环境

在我们日常写代码中，肯定是有生产环境和开发环境的

通俗点，

开发环境：线下给自己看的

生产环境：上线给用户看的

![image-20201003223029768](C:\Users\51246\AppData\Roaming\Typora\typora-user-images\image-20201003223029768.png)

现在我们有个问题，应该怎么写？我们只有一个配置文件啊，咋这么麻烦。。

回到官网

![image-20201003223329771](C:\Users\51246\AppData\Roaming\Typora\typora-user-images\image-20201003223329771.png)

官网为我们分开了两个文件，那我们也来试试，新建两个文件

webpack.production.config.js

webpack.development.config.js

名字还挺长的。。。建议直接复制！

建好了

怎么写。。。？

既然是配置文件，那肯定和我们刚刚写的其实是一样的，只需要在配置文件里面加上mode这个字段

![image-20201003223858605](C:\Users\51246\AppData\Roaming\Typora\typora-user-images\image-20201003223858605.png)



这样就可以了？？？

回到官网

![image-20201003224010240](C:\Users\51246\AppData\Roaming\Typora\typora-user-images\image-20201003224010240.png)

这一堆英文，好像有点难懂，那我们找文档看，都是啥东西。。。？

以下是文档的链接，大家可以自己点进去看，下面就不复制长篇大论了。。

NamedModulesPlugin	https://webpack.js.org/migrate/5/#update-outdated-options
NamedChunksPlugin 	https://webpack.html.cn/plugins/commons-chunk-plugin.html
FlagDependencyUsagePlugin 删除无用代码的，其他插件依赖
FlagIncludedChunksPlugin https://blog.csdn.net/hyupeng1006/article/details/89241630
ModuleConcatenationPlugin https://www.webpackjs.com/plugins/module-concatenation-plugin/
NoEmitOnErrorsPlugin 	https://www.webpackjs.com/plugins/no-emit-on-errors-plugin/
OccurrenceOrderPlugin 	https://webpack.html.cn/guides/migrating.html
SideEffectsFlagPlugin 移除未使用的模块	https://blog.csdn.net/weixin_34346099/article/details/89140946
TerserPlugin https://blog.csdn.net/weixin_34013044/article/details/88671739

![image-20201003225936151](C:\Users\51246\AppData\Roaming\Typora\typora-user-images\image-20201003225936151.png)

![image-20201003230209088](C:\Users\51246\AppData\Roaming\Typora\typora-user-images\image-20201003230209088.png)

这是几个大佬博客上面的截图，可以简单的看下，具体的可以自己找文档看一下。

其实大概也就这样子了，虽然官网写的挺简单的，我们还是要自己写一遍

![image-20201004105051041](C:\Users\51246\AppData\Roaming\Typora\typora-user-images\image-20201004105051041.png)



在开发环境下编写了和之前一样的代码

理论上，他只会打包我们的main.js这个文件，那么究竟是不是呢？

来尝试下

![image-20201004105243734](C:\Users\51246\AppData\Roaming\Typora\typora-user-images\image-20201004105243734.png)

发现我们的dist出现了3个文件？？？是哪里不对呢，我们用的是npx webpack这个命令，但是我们之前一直用的是webpack.config.js这个配置文件，我们写在webpack.development.config.js这个文件里面，他是无法识别的，所以，我们要让webpack识别这个文件，所以只能从指令下手，回到官网

![image-20201004105524288](C:\Users\51246\AppData\Roaming\Typora\typora-user-images\image-20201004105524288.png)



![image-20201004105617784](C:\Users\51246\AppData\Roaming\Typora\typora-user-images\image-20201004105617784.png)

这个应该就是我们想要的答案了

打开package.json

![image-20201004105723407](C:\Users\51246\AppData\Roaming\Typora\typora-user-images\image-20201004105723407.png)

现在我们的script里面啥都没有，我们来自己动手写一条指令吧！但是在这之前，我们应该怎么去写命令呢？我们不知道有啥命令给我们写啊？？？

总不能随便乱写吧，回到官网先找下文档

噢噢噢，花5分钟看看文档，这是我在官网找的，直接打开看就行~~~

https://webpack.docschina.org/configuration/dev-server/#devserver

https://webpack.docschina.org/api/cli/

https://webpack.docschina.org/configuration/

是不是感觉舒服了不少?

![image-20201004113019223](C:\Users\51246\AppData\Roaming\Typora\typora-user-images\image-20201004113019223.png)

简单来个build，试试我们的命令

``npm run build``

![image-20201004113200779](C:\Users\51246\AppData\Roaming\Typora\typora-user-images\image-20201004113200779.png)

运行成功

那我们来尝试指定配置文件，分别在两个配置文件，写上不同的参数

![image-20201004122008036](C:\Users\51246\AppData\Roaming\Typora\typora-user-images\image-20201004122008036.png)

![image-20201004122019812](C:\Users\51246\AppData\Roaming\Typora\typora-user-images\image-20201004122019812.png)

![image-20201004122033420](C:\Users\51246\AppData\Roaming\Typora\typora-user-images\image-20201004122033420.png)

运行命令,

​	`npm run webpackDev`

​	`npm run webpackPro`

执行成功

![image-20201004122214215](C:\Users\51246\AppData\Roaming\Typora\typora-user-images\image-20201004122214215.png)

这样子两个环境就可以了，你会发现，两个环境的包，一个是未压缩的，一个是压缩成一行的

现在又有一个问题，我们两个环境，总不可能写一样的代码吧?总是会有重复的，回到官网，看看有没有相关的文档

https://webpack.docschina.org/guides/production/

```bash
npm install --save-dev webpack-merge
```

![image-20201004142002664](C:\Users\51246\AppData\Roaming\Typora\typora-user-images\image-20201004142002664.png)

运行命令npm install --save-dev webpack-merge

```js
随便选一个配置文件写上去，把主配置common相同的内容删掉
const common = require("webpack.config.js");
const merge = require("webpack-merge");
module.exports = merge(common,{
    mode: "production",
    entry: {
        app: "./src/app.js"
    }
});
```

运行我们的打包命令，打包的js文件继承了主配置文件和我们的不同环境的配置文件的内容

大概就是这样子啦



###	loader

现在我们来处理vue

回到官网

Loader是什么？

![image-20201004102351027](C:\Users\51246\AppData\Roaming\Typora\typora-user-images\image-20201004102351027.png)

接下来，我们处理vue的话，就要用到这个了，因为webpack只支持js和json

那么vue应该用哪一种呢？

vue官网有自己的loader，来到vue官网，点进去导航Vue loader

![image-20201004102605193](C:\Users\51246\AppData\Roaming\Typora\typora-user-images\image-20201004102605193.png)

![image-20201004102658769](C:\Users\51246\AppData\Roaming\Typora\typora-user-images\image-20201004102658769.png)

简单的阅读5分钟

![image-20201004102740849](C:\Users\51246\AppData\Roaming\Typora\typora-user-images\image-20201004102740849.png)

主要命令

```bash
npm install -D vue-loader vue-template-compiler
```

复制粘贴开始

![image-20201004102921345](C:\Users\51246\AppData\Roaming\Typora\typora-user-images\image-20201004102921345.png)

要使用loader，就要在配置文件上面引入插件和写规则

那么应该怎么写呢？

![image-20201004103113643](C:\Users\51246\AppData\Roaming\Typora\typora-user-images\image-20201004103113643.png)

Vue官网给了一个简单的易懂的截图

规则：rules 属性有test，loader

引入：plugins	new xxx

安装Vue

```
npm install vue
```

我们开始写vue文件和main

在src里面创建app.vue，安装正常的vue文件编写格式

```
//	App.vue
<template>
  <div id="app">
    <p @click="ClickApp">
      {{Msg}}
    </p>
  </div>
</template>
<script>
export default {
  name: "App",
  data(){
    return{
      Msg: "当你看到这个页面，说明HTML部分已经启动成功"
    }
  },
  methods: {
    ClickApp(){
      alert(this.Msg)
    }
  },
  mounted() {
    console.log("当你看到这个页面，说明App.vue的Javascript部分已经启动成功")
  }
}
</script>
```

```
//	main.js
import Vue from "vue";
import App from "./App.vue";
new Vue({
    el: "#app",
    render: h => h(App)
})
```

编写webpack.config.js的规则和插件引入

```
const VueLoaderPlugin = require("vue-loader/lib/plugin");
module.exports = {
    entry: {
        main: "./src/main.js"
    },
    output: {
        filename: "[name].js"
    },
    plugins: [
        new VueLoaderPlugin() 
    ],
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: "vue-loader"
            }
        ]
    }
}
```

vue和main如果有问题的话，可以用vue-cli创建一遍vue的项目，基本就是这格式。。。

尝试运行一次命令行npm run webpackDev，在这之前，我们把dist文件删除干净，看看会得到什么东西

![image-20201004161547293](C:\Users\51246\AppData\Roaming\Typora\typora-user-images\image-20201004161547293.png)

发现成功了？？？这也太简单了吧，有点奇怪！！

得到了main.js

但是，我们要的是，index.html和js文件，可以打开看的页面，但是现在，我们只看到js文件，没给我们打包html，所以我们需要一个可以自动生成html页面的插件，先找找官网的说明

![image-20201004162146743](C:\Users\51246\AppData\Roaming\Typora\typora-user-images\image-20201004162146743.png)

也就是说，他会对应我们模块

template：html

script：js(webpack自带)

style：css

知道上面3个条件，那我们就去下载对应的loader和插件即可

首先是html

![image-20201004162944478](C:\Users\51246\AppData\Roaming\Typora\typora-user-images\image-20201004162944478.png)

这是链接：

基本使用：https://webpack.js.org/plugins/html-webpack-plugin/#root

可配置项：https://github.com/jantimon/html-webpack-plugin#options

自动生成html，应该是符合的，先安装试试

```bash
npm install --save-dev html-webpack-plugin
```

安装完之后，我们开始编写配置文件

```
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin")
module.exports = {
    entry: {
        main: "./src/main.js"
    },
    output: {
        filename: "[name].js"
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: "vue-loader"
            }
        ]
    }
}
```

运行命令npm run webpackDev，记得先删掉原来的文件

![image-20201004180647942](C:\Users\51246\AppData\Roaming\Typora\typora-user-images\image-20201004180647942.png)

打包完后，我们看到dist文件，多了js文件和一个html文件，打开后发现报错

![image-20201004181100995](C:\Users\51246\AppData\Roaming\Typora\typora-user-images\image-20201004181100995.png)

控制台报错，app没找到？？？

打开元素控制，发现确实没有元素，他没有帮我们新建div这些，如果你在里面写上div#app,你会发现，我们的vue就运行起来了

```html
<div id="app"></div>
```



看到vuecli创建的目录，他自带一个public文件夹，里面有一个index.html，里面是有些div和app的id，所以，按照这个思路，是否可以把public里面的index当作模板直接写入呢？答案是有的

![image-20201004190327351](C:\Users\51246\AppData\Roaming\Typora\typora-user-images\image-20201004190327351.png)

filename是写入html，而template是模板，我们可以使用这个来进行

```
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require("path")
module.exports = {
    entry: {
        main: "./src/main.js"
    },
    output: {
        filename: "[name].js"
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, './public/index.html'),
            title: 'blog'
        }),
    ],
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: "vue-loader"
            }
        ]
    }
}
```

可能大家会发现怎么多了一个path，这个是node的路径表示方式，__dirname 代表的是当前模块路径，如果不用这个，你就要写绝对路径，所以还是直接用node的方法好一点

我们删除dist里面的东西再来运行一次命令

![image-20201004190604479](C:\Users\51246\AppData\Roaming\Typora\typora-user-images\image-20201004190604479.png)

![image-20201004190625830](C:\Users\51246\AppData\Roaming\Typora\typora-user-images\image-20201004190625830.png)

运行成功了！

这里就差不多告一段落了，但是我们还有一个缺陷，那就是每次都要手动删除文件才能进行命令，我们来找下官网的方法，我已经弄好链接

点进去官网链接：https://webpack.docschina.org/guides/output-management/#cleaning-up-the-dist-folder

![image-20201004190948783](C:\Users\51246\AppData\Roaming\Typora\typora-user-images\image-20201004190948783.png)

```bash
npm install --save-dev clean-webpack-plugin
```

安装这个插件

![image-20201004191140464](C:\Users\51246\AppData\Roaming\Typora\typora-user-images\image-20201004191140464.png)

```
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");
module.exports = {
    entry: {
        main: "./src/main.js"
    },
    output: {
        filename: "[name].js"
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, './public/index.html'),
            title: 'blog'
        }),
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: "vue-loader"
            }
        ]
    }
}
```

![image-20201004191518900](C:\Users\51246\AppData\Roaming\Typora\typora-user-images\image-20201004191518900.png)



搭建vue环境就到这里结束了，后面的文章会继续完善相关的东西，还有一些css和图片什么的没做处理，我们后面继续处理。。。博主暂时学到这里



#### 搭建本地服务器

在我们日常敲代码中，基本都是保存完，网页就更新了，用过vuecli都知道吧，挺方便的，接下来我们开始实习这个

附上官网链接：

https://vue-loader.vuejs.org/zh/guide/hot-reload.html

![image-20201004203203326](C:\Users\51246\AppData\Roaming\Typora\typora-user-images\image-20201004203203326.png)

vue官网提到的，使用webpack-dev-server --hot

我们去webpack官网搜索，附上我找的链接，还请阅读5分钟

https://webpack.docschina.org/guides/development/#using-webpack-dev-server

![image-20201004203905268](C:\Users\51246\AppData\Roaming\Typora\typora-user-images\image-20201004203905268.png)



![image-20201004203937776](C:\Users\51246\AppData\Roaming\Typora\typora-user-images\image-20201004203937776.png)

```bash
npm install --save-dev webpack-dev-server
```

开始运行这条命令吧

![image-20201004204202662](C:\Users\51246\AppData\Roaming\Typora\typora-user-images\image-20201004204202662.png)

老规矩，编写我们的配置文件

```
{
  "name": "webpack3",
  "version": "1.0.0",
  "description": "",
  "private": true,
  "scripts": {
    "webpackDev": "webpack --config webpack.development.config.js",
    "webpackPro": "webpack --config webpack.production.config.js",
    "serve": "webpack-dev-server"
  },
  "keywords": [],
  "author": "博丽灵梦",
  "license": "ISC",
  "devDependencies": {
    "clean-webpack-plugin": "^3.0.0",
    "html-webpack-plugin": "^4.5.0",
    "vue-loader": "^15.9.3",
    "vue-template-compiler": "^2.6.12",
    "webpack": "^4.44.2",
    "webpack-cli": "^3.3.12",
    "webpack-dev-server": "^3.11.0",
    "webpack-merge": "^5.1.4"
  },
  "dependencies": {
    "vue": "^2.6.12"
  }
}
```

就简单的加个指令，来试试效果，运行命令

```
npm run serve
```

运行成功

![image-20201004204706142](C:\Users\51246\AppData\Roaming\Typora\typora-user-images\image-20201004204706142.png)

打开浏览器，把localhost:8080输入进去

成功看到我们的网页。

但是好像有点麻烦，好像别人的命令都是直接打开浏览器的？？

我们也要这样的效果

我们去官网找链接，前面我们已经给过链接了，这里再放一次

https://webpack.docschina.org/configuration/dev-server/#devserver

![image-20201004204924165](C:\Users\51246\AppData\Roaming\Typora\typora-user-images\image-20201004204924165.png)



![image-20201004205116709](C:\Users\51246\AppData\Roaming\Typora\typora-user-images\image-20201004205116709.png)

我们在serve后面加个 --open命令

```
"serve": "webpack-dev-server --open"
```

再次运行命令行，发现已经可以自动帮我们打开浏览器

或者在config文件里面写

![image-20201004205724725](C:\Users\51246\AppData\Roaming\Typora\typora-user-images\image-20201004205724725.png)



因为vue-loader是默认开启热加载的，所以我们只需要安装devServe就可以直接有了。



###	 CSS样式和CSS预编译

写网站肯定少不了样式，先在我们的vue文件写一点css样式，试试效果，看看报什么错

![image-20201004210742953](C:\Users\51246\AppData\Roaming\Typora\typora-user-images\image-20201004210742953.png)

说我们少了loader，无法识别

那我们就来安装

附上链接https://www.npmjs.com/package/css-loader

```
npm install --save-dev css-loader
```

```
npm install --save-dev vue-style-loader
```

```
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");
module.exports = {
    entry: {
        main: "./src/main.js"
    },
    output: {
        filename: "[name].js"
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                exclude: /node_modules/,
                loader: "vue-loader"
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            esModule: false,
                        }
                    }
                ],
            }
        ]
    },
    devServer: {
        open: true
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, './public/index.html'),
            title: 'blog'
        }),
        new CleanWebpackPlugin()
    ]
}
```

大家可能发现了，为什么多了个exModule：false 

这是因为，最新版本的cssloader它默认是true，如果不改，他的css就不会显示了，坑了我一小时。。

运行服务器命令npm run serve

成功执行

![image-20201004225108677](C:\Users\51246\AppData\Roaming\Typora\typora-user-images\image-20201004225108677.png)

![image-20201004225154663](C:\Users\51246\AppData\Roaming\Typora\typora-user-images\image-20201004225154663.png)

已经可以正常显示了

但是貌似并没有打包，我们看看有没有打包的方案，记住，我们优先看vue官网给的推荐，最后在选择webpack给的推荐，这样子才能保证我们的vue项目能够正常运行。不然满满坑。。。，好了，花5分钟点开链接快速过下文档吧

附上链接：

https://vue-loader.vuejs.org/zh/guide/extract-css.html#webpack-4

https://github.com/webpack-contrib/mini-css-extract-plugin

https://github.com/NMFR/optimize-css-assets-webpack-plugin

https://webpack.js.org/plugins/mini-css-extract-plugin/#minimizing-for-production

![image-20201004230248506](C:\Users\51246\AppData\Roaming\Typora\typora-user-images\image-20201004230248506.png)

![image-20201004235733308](C:\Users\51246\AppData\Roaming\Typora\typora-user-images\image-20201004235733308.png)

```bash
npm install -D mini-css-extract-plugin
```

```
npm install --save-dev optimize-css-assets-webpack-plugin
```

安装这两个东西

首先说明下，为什么安装这两个

mini-css-extract-plugin： 这个是用来提取css的

optimize-css-assets-webpack-plugin： 这个是用来压缩css的

只能用于生产环境！！！切记

不支持热加载

现在我重新贴下我的代码，不然有人可能看到这里看懵了。。。

```
// webpack.development.config.js
const { merge } = require("webpack-merge");
const common = require("./webpack.config.js");
module.exports = merge(common,{
    mode: "development",
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    "vue-style-loader",
                    {
                        loader: 'css-loader',
                        options: {
                            esModule: false,
                        }
                    }
                ]
            }
        ]
    }
})

```

```
// webpack.production.config.js
const common = require("./webpack.config.js");
const { merge } = require("webpack-merge");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
module.exports = merge(common,{
    mode: "production",
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            esModule: false
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "style.css"
        }),
        new OptimizeCssAssetsPlugin()
    ]
})
```

```
// webpack.config.js
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");
module.exports = {
    entry: {
        main: "./src/main.js"
    },
    output: {
        filename: "[name].js"
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                exclude: /node_modules/,
                loader: "vue-loader"
            }
        ],
    },
    devServer: {
        open: true
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, './public/index.html'),
            title: 'blog'
        }),
        new CleanWebpackPlugin()
    ]
}
```

运行我们的3个命令，看看都有什么区别

```
npm run serve
npm run wepackDev
npm run webpackPro
```

仔细的话，你会发现，生产环境下的是引入的style.css,

开发环境则是用的style标签写的css

接下来，我们开始使用预处理器，我们这里用less或者postcss

首先，先安装less，一步一步来

附上链接：https://vue-loader.vuejs.org/zh/guide/pre-processors.html#less

![image-20201005004848364](C:\Users\51246\AppData\Roaming\Typora\typora-user-images\image-20201005004848364.png)

```bash
npm install -D less less-loader
```

```
// webpack.production.config.js
module: {
    rules: [
        {
            test: /\.(css|less)$/,
            use: [
                MiniCssExtractPlugin.loader,
                {
                    loader: 'css-loader',
                    options: {
                        esModule: false
                    }
                },
                "less-loader"
            ]
        }
    ]
},
```

```
// webpack.development.config.js
module: {
    rules: [
        {
            test: /\.(css|less)$/,
            use: [
                "vue-style-loader",
                {
                    loader: 'css-loader',
                    options: {
                        esModule: false,
                    }
                },
                "less-loader"
            ]
        }
    ]
}
```

运行3个命令

```
npm run serve
npm run wepackDev
npm run webpackPro
```

分别看各自的区别

就是支持less语法了

![image-20201005004751640](C:\Users\51246\AppData\Roaming\Typora\typora-user-images\image-20201005004751640.png)

![image-20201005004813121](C:\Users\51246\AppData\Roaming\Typora\typora-user-images\image-20201005004813121.png)



现在来进行postcss

附上链接：

https://vue-loader.vuejs.org/zh/guide/pre-processors.html#postcss

https://github.com/webpack-contrib/postcss-loader

中文文档：https://github.com/postcss/postcss/blob/master/docs/README-cn.md

```bash
npm install -D postcss-loader
npm install -D autoprefixer	如果版本太新，可以回退版本
```

![image-20201005005454562](C:\Users\51246\AppData\Roaming\Typora\typora-user-images\image-20201005005454562.png)

![image-20201005011012249](C:\Users\51246\AppData\Roaming\Typora\typora-user-images\image-20201005011012249.png)

啥都别说了，先安装再说。。。博主有点累了。。

![image-20201005031558740](C:\Users\51246\AppData\Roaming\Typora\typora-user-images\image-20201005031558740.png)

基本的是没变的，只需要在生产环境下加就行了,开发环境不需要这个，因为比较耗时间，如果代码量大了，会影响你的编译。。。

```js
// webpack.production.config.js
const common = require("./webpack.config.js");
const autoprefixer = require('autoprefixer')
const { merge } = require("webpack-merge");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
module.exports = merge(common,{
    mode: "production",
    module: {
        rules: [
            {
                test: /\.(css|less)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            esModule: false
                        }
                    },
                    "less-loader",
                    "postcss-loader"
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css"
        }),
        new OptimizeCssAssetsPlugin()
    ]
})
```

写完postcss，接下来就是autoprefixer，这个是给css标签加前缀的

为此，我们要在创建一个配置文件postcss.config.js

```
//postcss.congfig.js
module.exports = {
    plugins: {
        // 兼容浏览器，添加前缀
        'autoprefixer':{
            overrideBrowserslist: [
                "last 10 versions",
            ],
            grid: true
        }
    }
}
```

不会写？怕写错？没关系！咱们找文档

![image-20201005031957190](C:\Users\51246\AppData\Roaming\Typora\typora-user-images\image-20201005031957190.png)

点进去就是文档了，文档就是权威，不要看别人博客就复制粘贴，不然等某些东西升级之后，一堆bug够你受的，所以找文档才是正确的

autoprefixer文档: https://github.com/postcss/autoprefixer

配置文档：https://github.com/browserslist/browserslist#queries

![image-20201005032356558](C:\Users\51246\AppData\Roaming\Typora\typora-user-images\image-20201005032356558.png)

博主用的是红色圈起来那个，浏览器最后10个版本



###	Babel 是一个 JavaScript 编译器

链接：https://www.babeljs.cn/docs/babel-preset-env

英文看不懂，就用谷歌的翻译，鼠标右键

```
npm install --save-dev @babel/preset-env
```

在这之前，相信你也看过其他博主的文档，装一个babel，还有其他的东西要装，其实也是相当的繁琐，所以，这里一定要看官网，给出结果，看看是否真的需要这么多东西

首先，我们只需要ES6+语法转换成ES5，所以去官网看看，到底需要啥，找到官网一个链接

https://www.babeljs.cn/docs/usage

```
npm install --save-dev @babel/core @babel/cli @babel/preset-env 
npm install --save @babel/polyfill
```

![image-20201005111543361](C:\Users\51246\AppData\Roaming\Typora\typora-user-images\image-20201005111543361.png)

在安装之前，我们先了解下每个东西都是啥，避免不必要的安装

@babel/core	babel的核心模块

@babel/cli	官方说明:是允许您从终端使用babel的工具,个人感觉不太必要，待会我们不要他

@babel/preset-env 	预设命令，可以看到下图，简单来说，就是代码中如果遇到更高级的语法，可以自由配置，然后进行转换

![image-20201005111929938](C:\Users\51246\AppData\Roaming\Typora\typora-user-images\image-20201005111929938.png)

@babel/polyfill	官网balabala...反正就是用来体验ES6+新特性的代码，兼容浏览器，

![image-20201005112322935](C:\Users\51246\AppData\Roaming\Typora\typora-user-images\image-20201005112322935.png)

那现在开始安装吧

最后，在安装一个**babel-loader**

```
npm i babel-loader -D
```

博主现在所安装的清单

```
{
  "name": "webpack3",
  "version": "1.0.0",
  "description": "",
  "private": true,
  "scripts": {
    "webpackDev": "webpack --config webpack.development.config.js",
    "webpackPro": "webpack --config webpack.production.config.js",
    "serve": "webpack-dev-server --config webpack.development.config.js"
  },
  "keywords": [],
  "author": "博丽灵梦",
  "license": "ISC",
  "devDependencies": {
    "@babel/core": "^7.11.6",
    "@babel/preset-env": "^7.11.5",
    "autoprefixer": "^9.8.6",
    "babel-loader": "^8.1.0",
    "clean-webpack-plugin": "^3.0.0",
    "css-loader": "^4.3.0",
    "html-webpack-plugin": "^4.5.0",
    "less": "^3.12.2",
    "less-loader": "^7.0.1",
    "mini-css-extract-plugin": "^0.11.3",
    "optimize-css-assets-webpack-plugin": "^5.0.4",
    "postcss-loader": "^4.0.3",
    "vue-loader": "^15.9.3",
    "vue-style-loader": "^4.1.2",
    "vue-template-compiler": "^2.6.12",
    "webpack": "^4.44.2",
    "webpack-cli": "^3.3.12",
    "webpack-dev-server": "^3.11.0",
    "webpack-merge": "^5.1.4"
  },
  "dependencies": {
    "@babel/polyfill": "^7.11.5",
    "vue": "^2.6.12"
  }
}
```

安装完之后，开始编写我们的配置文件吧

```
// webpack.config.js
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");
module.exports = {
    entry: {
        main: ["@babel/polyfill","./src/main.js"]
    },
    output: {
        filename: "[name].js"
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                exclude: /node_modules/,
                loader: "vue-loader"
            },
            {
                test: /\.js$/,
                include: path.resolve(__dirname,"src"),
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }

            }
        ]
    },
    devServer: {
        open: true
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, './public/index.html'),
            title: 'blog'
        }),
        new CleanWebpackPlugin()
    ]
}
```

入口开始，转化我们的代码

```
 main: ["@babel/polyfill","./src/main.js"] 这个看实际应用，若有需要可以按需引入，避免js包体积变大，原版打包后，只有70jb，加入这个会变成150kb，emmm
```

引入loader

```
{
    test: /\.js$/,
    include: path.resolve(__dirname,"src"),
    use: {
    loader: "babel-loader",
    options: {
    presets: ['@babel/preset-env']
        }
    }
}
```

写完之后，在我们的app.vue编写es6的代码

然后开始打包

在我们的打包文件查找我们的代码，看看有没有被转换

正常都是应该被转化了。

babel就到这里结束，将来如果在写博客的时候，遇到了问题，我会第一时间更新



###	eslint

这玩意，大家都不陌生了

万恶的bug

。。。

https://vue-loader.vuejs.org/zh/guide/linting.html#eslint

![image-20201005134028272](C:\Users\51246\AppData\Roaming\Typora\typora-user-images\image-20201005134028272.png)

```bash
npm install -D eslint eslint-webpack-plugin
安装完之后，在命令行输入npx eslint --init
根据提示初始化eslint
安装eslint-plugin-vue
然后得到进行配置编写
我先把代码贴了，大家跟上步伐
```

```
//package.json
{
  "name": "webpack3",
  "version": "1.0.0",
  "description": "",
  "private": true,
  "scripts": {
    "webpackDev": "webpack --config webpack.development.config.js",
    "webpackPro": "webpack --report --config webpack.production.config.js",
    "serve": "webpack-dev-server --config webpack.development.config.js"
  },
  "keywords": [],
  "author": "博丽灵梦",
  "license": "ISC",
  "devDependencies": {
    "@babel/core": "^7.11.6",
    "@babel/preset-env": "^7.11.5",
    "autoprefixer": "^9.8.6",
    "babel-loader": "^8.1.0",
    "clean-webpack-plugin": "^3.0.0",
    "css-loader": "^4.3.0",
    "eslint": "^7.10.0",
    "eslint-plugin-vue": "^7.0.1",
    "eslint-webpack-plugin": "^2.1.0",
    "html-webpack-plugin": "^4.5.0",
    "less": "^3.12.2",
    "less-loader": "^7.0.1",
    "mini-css-extract-plugin": "^0.11.3",
    "optimize-css-assets-webpack-plugin": "^5.0.4",
    "postcss-loader": "^4.0.3",
    "vue-loader": "^15.9.3",
    "vue-style-loader": "^4.1.2",
    "vue-template-compiler": "^2.6.12",
    "webpack": "^4.44.2",
    "webpack-cli": "^3.3.12",
    "webpack-dev-server": "^3.11.0",
    "webpack-merge": "^5.1.4"
  },
  "dependencies": {
    "@babel/polyfill": "^7.11.5",
    "vue": "^2.6.12"
  }
}

```

```
// webpack.config.js
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");
module.exports = {
    entry: {
        main: ["@babel/polyfill","./src/main.js"]
    },
    output: {
        filename: "[name].js"
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                exclude: /node_modules/,
                loader: "vue-loader"
            },
            {
                test: /\.js$/,
                include: path.resolve(__dirname,"src"),
                exclude:  /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }

            }
        ]
    },
    devServer: {
        open: true,
        overlay: true
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, './public/index.html'),
            title: 'blog'
        }),
        new CleanWebpackPlugin()
    ]
}
```

```
// webpack.development.config.js
const { merge } = require("webpack-merge");
const common = require("./webpack.config.js");
const ESLintPlugin = require('eslint-webpack-plugin');
const path = require("path")
module.exports = merge(common,{
    mode: "development",
    module: {
        rules: [
            {
                test: /\.(css|less)$/,
                use: [
                    "vue-style-loader",
                    {
                        loader: 'css-loader',
                        options: {
                            esModule: false
                        }
                    },
                    "less-loader"
                ]
            }
        ]
    },
    plugins: [
        new ESLintPlugin({
            context : path.resolve(__dirname,"./src"),
            extensions: ["js","vue"]
        })
    ]
})
```

```
// webpack.production.config.js
const common = require("./webpack.config.js");
const { merge } = require("webpack-merge");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
module.exports = merge(common,{
    mode: "production",
    module: {
        rules: [
            {
                test: /\.(css|less)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            esModule: false
                        }
                    },
                    "less-loader",
                    "postcss-loader"
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css"
        }),
        new OptimizeCssAssetsPlugin()
    ]
})
```

```
//.eslintrc.js
module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/essential"
    ],
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "vue"
    ],
    "rules": {
        "no-undef": "off",
        "no-alert": "error"	//这是测试用的，写上这个，只要你写alert，就会报错
    }
};
```

写到这里，不知道大家还记得配置怎么写吗，下面的链接，是他的配置清单，不知道为什么这么写的，可以参考下面的链接，比如上面的代码

```
new ESLintPlugin({
    context : path.resolve(__dirname,"./src"),
    extensions: ["js","vue"]
})
这个配置应该怎么写呢？参考https://webpack.js.org/plugins/eslint-webpack-plugin/
下面也给了链接，里面的options，官网有给详细的作用，如果看不懂英文，可以用谷歌翻译
比如context就是文件目录
extensions就是指定检查文件类型
至于//.eslintrc.js这里面的，只需要初始化就行了，根据提示来弄，然后自己只需要写规则，也就是上面提到的npx eslint --init
写完之后，自己在vue里面测试，只要报错就说明安装成功了
```

基础： https://eslint.org/docs/rules/

Vue：https://eslint.vuejs.org/rules/

插件：https://webpack.js.org/plugins/eslint-webpack-plugin/

仔细地话，你们会发现vue自带的那个全屏报错

我们只需要在devServe里面增加代码即可

![image-20201005135653519](C:\Users\51246\AppData\Roaming\Typora\typora-user-images\image-20201005135653519.png)

再次附上链接，前面有发过的：https://webpack.docschina.org/configuration/dev-server/#devserver





#### 区分环境

![image-20201007012233611](C:\Users\51246\AppData\Roaming\Typora\typora-user-images\image-20201007012233611.png)

链接：https://webpack.docschina.org/configuration/mode/#usage

看到有颜色的字体了吗？

这个你可以在代码中获取

![image-20201007012327564](C:\Users\51246\AppData\Roaming\Typora\typora-user-images\image-20201007012327564.png)![image-20201007012349738](C:\Users\51246\AppData\Roaming\Typora\typora-user-images\image-20201007012349738.png)

也就是说，你可以在打包后，知道你现在处于什么状态，让代码在不同的环境下有不同的用法

最常用的，可能是api的调用

比如你在开发环境中，用的是本地3000端口，但是在线上，用的是www.xxx.com这样的接口

那么，就可以通过识别环境，通过变量进行灵活的调用

![image-20201007014040830](C:\Users\51246\AppData\Roaming\Typora\typora-user-images\image-20201007014040830.png)

![image-20201007014053868](C:\Users\51246\AppData\Roaming\Typora\typora-user-images\image-20201007014053868.png)

![image-20201007014223004](C:\Users\51246\AppData\Roaming\Typora\typora-user-images\image-20201007014223004.png)

两个环境下，输出的都是不一样，当然啦，我这个只是举个例子，正常肯定是用axios或者fetch这些请求，全局的话用vuex这种，大家知道有这么个东西就行了

后期我如果在工作用到，会一起发文章分享出来的。



####	代理

先附上链接：https://webpack.docschina.org/configuration/dev-server/#devserverproxy

啥是代理呢，就是前端访问后端的时候，因为不在一个服务器，所以拒绝访问，也就是不同源，webpack可以解决这个问题

webpack有个devServer.proxy的方法，也就是上面链接的方法

简单说下这个代码

```javascript
module.exports = {
  //...
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000', 	//需要访问的地址
          备注：你的访问地址需要改成你本地的地址，比如你访问的是3000/API/XXX，那么你访问的时候就要改成8080/API/XXX，让他识别    
        pathRewrite: {'^/api' : ''}，	//改写的api，当他匹配到这个api的时候，会自己匹配代理，具体可以根据实际更改，不一定是这个api这个词，或者自己用变量接住啥的，
      }
    }
  }
};
```

####	最后

写到这里，其实我想写其他东西，但是不太好写，主要这两天准备研究小程序，其实你们大概知道其他东西应该怎么去用了，但是这只是初级篇，如果想要深入，还需要看一篇文档以及在工作中根据需求去配置，还需要扎实的nodejs的基础，这玩意我是不太行，所以这只是初级篇，后期等博主学到了，就会继续发文章，一起学习！

这个配置，我也会一直用下去，如果遇到BUG，我会发文章的，因为这只是搭建vue的环境，还没进行实际项目编写，后面我会用这个写自己的博客