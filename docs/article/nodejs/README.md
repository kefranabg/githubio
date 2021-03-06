# NodeJS常用模块介绍

### MVC框架 - [Express](http://expressjs.com/)

Express 是轻量灵活的Nodejs Web应用框架，它可以快速地搭建网站。Express框架建立在Nodejs内置的Http模块上，并对Http模块再包装，从而实际Web请求处理的 功能。它支持多种前端模板，如Jade, EJS等。它是T.J大神的作品，不过已经交由其它团队维护了。

Koa是T.J大神的另外一个作品，号称下一 代NodeJS web框架。使用 koa 编写 web 应用，通过组合不同的 generator，可以免除重复繁琐的回调函数嵌套，并极大地提升常用错误处理效率。Koa 不在内核方法中绑定任何中间件，它仅仅提供了一个轻量优雅的函数库，使得编写 Web 应用变得得心应手。需要注意的是:koa 依赖支持 generator 的 Node 环境，准确来说，是 node >= 0.11.9 的环境。安装完成后，应确保使用 $ node app.js --harmony 或(--harmony-generators) 即，harmony 模式运行程序。个人觉得如果是正式产品中还是用Express比较靠谱。
以及[Koa](https://koa.bootcss.com/), [Egg](https://eggjs.org/)等等

### Rest开发 - [Restify](http://mcavage.me/node-restify/)
restify 是一个基于Nodejs的REST应用框架，支持服务器端和客户端。restify比起express更专注于REST服务，去掉了express中的 template, render等功能，同时强化了REST协议使用，版本化支持，HTTP的异常处理。

hapi是一个用来构建基于 Node.js 的应用和服务的富框架，使得开发者把重点放在便携可重用的应用逻辑而不是构建架构。内建输入验证、缓存、认证和其他 Web 应用开发常用的功能，用来开发rest代码也是一个不错的选择。

### 前端模板 - [EJS](http://expressjs.com/)
EJS是一个功能强大又比较容易使用的前端模板，Express对EJS支持比较好，它的语法比较接近前端开发人员的使用方式。另外名气比较大的前端模板是Jade，它和Express是同一个作者开发的，Express默认用的就是Jade模板，但是它的语法更接近后端语言的语法，前端开发人员很多时候难以适应，但是它的功能确实非常强大。

### 数据库驱动 - [Mongoose](http://mongoosejs.com/)
MongoDB和NodeJS应该是最佳搭档了，而Mongoose是MongoDB的对象模型工具，通过Mongoose框架，可以进行非常方便的访问MongoDB的操作。当然如果你对性能要求非常高的话，也可以考虑使用mongodb，它功能相对较少，比较底层一些，其实Mongoose就是基于它构建的。

其它：[redis](https://www.npmjs.org/package/redis)，[mysql](https://github.com/felixge/node-mysql)。

### Web Socket - [Socket.IO](http://socket.io/)
NodeJS的一个主要优点是高并发，因此NodeJS是Web Socket服务器的理想选择，而Socket.IO则Socket模块的不二选择，可以用于构建聊天室、客服系统等。Socket.IO不仅提供了服务 器端代码，还提供了前端JS代码，可以非常方便的进行Web Socket开发，同时它兼容那些不支持Web Socket的浏览器。

### 日志管理 - [Log4js](https://www.npmjs.org/package/log4js)
类似于JAVA中的log4j，具有coloured console logging、可以设置输出等级等功能，简单易用，如果没有复杂需求足够使用了。winston是一个功能更强大也更复杂的日志模块，人气比较高，对功能有追求的可以看看这个模块。

### HTTP调用 [Request](https://www.npmjs.org/package/request)
可以理解为一个简化的CURL模块，建立各种HTTP请求，支持授权验证，其实功能还是非常多的，基本满足绝大部分需求。目前在NPM模块排行前几名。

### 异步流程控制 - [Async](https://www.npmjs.org/package/async)
NodeJS中大量的异步callback嵌套估计让很多人头疼，尤其是多个异步函数要求一定的调用顺序时更是让代码失控，Async可以非常好的解决这些问题，它可以使异步流程同步化。Q是另外一种非常不错的选择，它是实现了promises接口。

### 部署 - [forever](https://www.npmjs.org/package/forever)
[forever](https://www.npmjs.org/package/forever)可以看做是一个nodejs的守护进程，能够启动，停止，重启我们的app应用，运行稳定，支持高并发，启动/停止命令简单，支持热部署，宕机重启，监控界面和日志，集群环境。pm2是一个带有负载均衡功能的Node应用的进程管理器。当你要把你的独立代码利用全部的服务器上的所有CPU，并保证进程永远都活着，0秒的重载。

如果你想要从操作系统的层次来解决NodeJS服务器管理问题，可以参考：Linux系统服务upstart

当然开发时可以使用supervisor启动服务，它能够监控文件，当有文件更新时自动重启服务，其实Forever也有这个功能。


[pm2](http://pm2.keymetrics.io)是一个守护进程管理器，可以帮助您管理和保持您的应用程序在线。PM2入门很简单，它是一个简单直观的CLI，可通过NPM安装
### 项目管理
[grunt](http://gruntjs.com/)是一个自动化的构建工具，对于 需要反复重复的任务，例如压缩（minification）、编译、单元测试、linting等，自动化工具可以减轻你的劳动，简化你的工作。当你正确配 置好了任务，任务运行器就会自动帮你或你的小组完成大部分无聊的工作。并且它有大量的插件可以使用。我主要用它作前端的自动化处理工作。

[bower](http://bower.io/)是twitter的又一个开源项目，使用nodejs开发，用于web包管理。作为一个js依赖管理的工具,提供一种理想包管理方式,借助了npm的一些思想,为我们提供一个舒服的开发环境。

[yeoman](http://yeoman.io/)是Google的团队和外部贡献 者团队合作开发的，他的目标是通过Grunt（一个用于开发任务自动化的命令行工具）和Bower（一个HTML、CSS、Javascript和图片等 前端资源的包管理器）的包装为开发者创建一个易用的工作流。Yeoman的目的不仅是要为新项目建立工作流，同时还是为了解决前端开发所面临的诸多严重问 题，例如零散的依赖关系。

### 定时任务 - [Cron](https://www.npmjs.org/package/cron)
cron是一个小巧的定时任务管理模块，可以满足我们绝大部分需求，它支持标准的cron patterns,熟悉linux cron tab的语法就可以很容易上手。

另外一个名气比较大且功能比较强大的定时模块是Later，对于功能要求比较高的可用用它，later的缺点是有点复杂，不像cron只要拿来就会用了。

### 工具包
[underscore](http://documentcloud.github.io/underscore/)是一个JS工具库，主要提供了对数组，对象，函数等一些基础工具函数，可以同时在浏览器和NodeJS环境中运行。建议在每个项目中使用。

[moment](https://www.npmjs.org/package/moment)是一个日期工具库，主要提供了对日期的解析，验证，操作和格式化等，如果需要对日期作较多的操作或比较复杂的操作，则它是一个不错的选择，毕竟JS自带的Date功能太弱了。

[Day.js](https://github.com/iamkun/dayjs)是一个极简主义的JavaScript库，它使用与Moment.js兼容的API来解析，验证，操作和显示现代浏览器的日期和时间。如果您使用Moment.js，您已经知道如何使用Day.js.

[Connect](https://www.npmjs.org/package/connect)是一系列的中间件的集合，包括日志，session, cookie, body parser等，它做了大量HTTP相关的基础性的工作，Express框架就依赖它进行工作的。

[cheerio](https://cheerio.js.org/)是jquery核心功能的一个快速灵活而又简洁的实现，主要是为了用在服务器端需要对DOM进行操作的地方

### IO操作 - [fs-extra](https://www.npmjs.com/package/fs-extra)
fs-extra添加未包含在本机fs模块中的文件系统方法，并为fs方法添加promise支持。它还graceful-fs用于防止EMFILE错误。它应该是一个替代品fs。

fs-extra模块是系统fs模块的扩展，提供了更多便利的 API，并继承了fs模块的 API

### 单元测试
[Mocha](https://www.npmjs.org/package/mocha),[Karma](https://www.npmjs.org/package/karma),[Jasmine](https://www.npmjs.org/package/jasmine)。