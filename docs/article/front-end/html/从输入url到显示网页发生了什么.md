# 从输入url到显示网页发生了什么

## 前言
在浏览器中输入url到显示网页主要包含两个部分： **网络通信和页面渲染**

互联网内各网络设备间的通信都遵循TCP/IP协议，利用TCP/IP协议族进行网络通信时，会通过分层顺序与对方进行通信。分层由高到低分别为：应用层、传输层、网络层、数据链路层。发送端从应用层往下走，接收端从数据链路层网上走

## 1.浏览器的地址栏输入URL并按下回车
我们常见的RUL是这样的:www.baidu.com,域名通常由3部分组成：**协议 域名 端口号**

    1. 协议：主要是HTTP协议，HTTPS协议，FTP协议，FILe协议
    2. 域名：url中间部分为域名或者IP
    3. 端口号：通常默认都是隐藏的 http默认端口号为80 https默认端口号为443

涉及知识点： 跨域
在前端进行数据请求时，由于浏览器的同源策略，协议，域名，端口号有一个不同会存在跨域请求，需要进行跨域处理，相关的跨域方法点击[https://user-gold-cdn.xitu.io/2018/11/19/1672a68aae05f7f6](https://user-gold-cdn.xitu.io/2018/11/19/1672a68aae05f7f6)

## 2.DNS域名解析
互联网上每一台计算机的唯一标识是它的**IP地址**，但是IP地址并不方便记忆。用户更喜欢用方便记忆的网址去寻找互联网上的其它计算机，也就是上面提到的百度的网址。所以互联网设计者需要在用户的方便性与可用性方面做一个权衡，这个权衡就是一个网址到IP地址的转换，这个过程就是DNS解析，即实现了网址到IP地址的转换

解析过程
DNS解析是一个递归查询的过程。

![avatar](https://user-gold-cdn.xitu.io/2018/11/19/1672a52ca7236f3c?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

上述图片是查找www.google.com的IP地址过程。首先在本地域名服务器中查询IP地址，如果没有找到的情况下，本地域名服务器会向根域名服务器发送一个请求，如果根域名服务器也不存在该域名时，本地域名会向com顶级域名服务器发送一个请求，依次类推下去。直到最后本地域名服务器得到google的IP地址并把它缓存到本地，供下次查询使用。

从上述过程中，可以看出网址的解析是一个从右向左的过程: com -> google.com -> www.google.com。但是你是否发现少了点什么，根域名服务器的解析过程呢？事实上，真正的网址是www.google.com.，并不是我多打了一个.，这个.对应的就是根域名服务器，默认情况下所有的网址的最后一位都是.，既然是默认情况下，为了方便用户，通常都会省略，浏览器在请求DNS的时候会自动加上，所有网址真正的解析过程为: . -> .com -> google.com. -> www.google.com.。

#### DNS优化
DNS缓存和DNS负载均衡

#### DNS缓存
DNS存在着多级缓存，从离浏览器的距离排序的话，有以下几种: 浏览器缓存，系统缓存，路由器缓存，IPS服务器缓存，根域名服务器缓存，顶级域名服务器缓存，主域名服务器缓存。

1. 在你的chrome浏览器中输入:chrome://dns/，你可以看到chrome浏览器的DNS缓存。

2. 系统缓存主要存在/etc/hosts(Linux系统)中:

![avatar](https://user-gold-cdn.xitu.io/2018/11/19/1672a566f8cebd65?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

DNS负载均衡

真实的互联网世界背后存在成千上百台服务器，大型的网站甚至更多。但是在用户的眼中，它需要的只是处理他的请求，哪台机器处理请求并不重要。DNS可以返回一个合适的机器的IP给用户，例如可以根据每台机器的负载量，该机器离用户地理位置的距离等等，这种过程就是DNS负载均衡，又叫做DNS重定向

## 3.建立TCP连接

在通过DNS域名解析后，获取到了服务器的IP地址，在获取到IP地址后，便会开始建立一次连接，这是由TCP协议完成的，主要通过三次握手进行连接。

1. 第一次握手： 建立连接时，客户端发送syn包（syn=j）到服务器，并进入SYN_SENT状态，等待服务器确认；

2. 第二次握手： 服务器收到syn包，必须确认客户的SYN（ack=j+1），同时自己也发送一个SYN包（syn=k），即SYN+ACK包，此时服务器进入SYN_RECV状态；

3. 第三次握手： 客户端收到服务器的SYN+ACK包，向服务器发送确认包ACK(ack=k+1），此包发送完毕，客户端和服务器进入ESTABLISHED（TCP连接成功）状态，完成三次握手。 这里需要了解下**ACK，SYN**的意义

![avatar](https://user-gold-cdn.xitu.io/2018/11/19/1672a5a206a7e309?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)
完成TCP连接后开使向服务器进行请求

## 4.向服务器发送请求

完整的HTTP请求包含**请求起始行、请求头部、请求主体**三部分。
![avatar](https://user-gold-cdn.xitu.io/2018/11/19/1672a5d02bc0d8fd?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

## 5.服务器接受响应
服务器在收到浏览器发送的HTTP请求之后，会将收到的HTTP报文封装成HTTP的Request对象，并通过不同的Web服务器进行处理，处理完的结果以HTTP的Response对象返回，主要包括状态码，响应头，响应报文三个部分。
状态码主要包括以下部分:

    1xx：指示信息–表示请求已接收，继续处理。
    2xx：成功–表示请求已被成功接收、理解、接受。
    3xx：重定向–要完成请求必须进行更进一步的操作。
    4xx：客户端错误–请求有语法错误或请求无法实现。
    5xx：服务器端错误–服务器未能实现合法的请求。
**响应头**主要由Cache-Control、 Connection、Date、Pragma等组成。  
**响应体**为服务器返回给浏览器的信息，主要由HTML，css，js，图片文件组成。

## 6.页面渲染

 如果说响应的内容是HTML文档的话，就需要浏览器进行解析渲染呈现给用户。整个过程涉及两个方面：解析和渲染。在渲染页面之前，需要构建DOM树和CSSOM树。  在浏览器还没接收到完整的 HTML 文件时，它就开始渲染页面了，在遇到外部链入的脚本标签或样式标签或图片时，会再次发送 HTTP 请求重复上述的步骤。在收到 CSS 文件后会对已经渲染的页面重新渲染，加入它们应有的样式，图片文件加载完立刻显示在相应位置。在这一过程中可能会触发页面的重绘或重排。这里就涉及了两个重要概念：**Reflow**和**Repaint**。
![avatar](https://user-gold-cdn.xitu.io/2018/11/19/1672a637a7508bca?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

    1. Reflow，也称作Layout，中文叫回流，一般意味着元素的内容、结构、位置或尺寸发生了变化，需要重新计算样式和渲染树，这个过程称为Reflow。  
    2. Repaint，中文重绘，意味着元素发生的改变只是影响了元素的一些外观之类的时候（例如，背景色，边框颜色，文字颜色等），此时只需要应用新样式绘制这个元素就OK了，这个过程称为Repaint。

所以说Reflow的成本比Repaint的成本高得多的多。DOM树里的每个结点都会有reflow方法，一个结点的reflow很有可能导致子结点，甚至父点以及同级结点的reflow。

## 7.关闭TCP连接或继续保持连接
通过四次挥手关闭连接(FIN ACK, ACK, FIN ACK, ACK)。
![avatar](https://user-gold-cdn.xitu.io/2018/11/19/1672a64fbd06d50d?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

    1. 第一次挥手：Client发送一个FIN，用来关闭Client到Server的数据传送，Client进入FIN_WAIT_1状态。
    2. 第二次挥手：Server收到FIN后，发送一个ACK给Client，确认序号为收到序号+1（与SYN相同，一个FIN占用一个序号），Server进入CLOSE_WAIT状态。
    3. 第三次挥手：Server发送一个FIN，用来关闭Server到Client的数据传送，Server进入LAST_ACK状态。
    4. 第四次挥手：Client收到FIN后，Client进入TIME_WAIT状态，接着发送一个ACK给Server，确认序号为收到序号+1，Server进入CLOSED状态，完成四次挥手。


非商用，侵删，转自: [https://juejin.im/post/5bf23afa6fb9a049be5d1494](https://juejin.im/post/5bf23afa6fb9a049be5d1494)