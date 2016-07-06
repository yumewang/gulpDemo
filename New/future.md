# Future Front-end-developer

## 参考资料

* [Web前端程序员简历模板:round_pushpin:](https://github.com/geekcompany/ResumeSample/blob/master/web.md)
* [面试题集合:round_pushpin:](https://leohxj.gitbooks.io/front-end-database/content/interview/interview-exercises.html)
* [The-Key-of-Frontend-Knowledge](https://leohxj.gitbooks.io/front-end-database/content/interview/index.html)
* [Front-end-Web-Development-Interview-Question:round_pushpin:](https://github.com/paddingme/Front-end-Web-Development-Interview-Question)
* [github上比较有名的一个前端面试题](http://www.cnblogs.com/bugluo/archive/2012/11/09/2762423.html)
* [前端面试问题:round_pushpin:](http://handyxuefeng.blog.163.com/blog/static/454521722013111714040259/)
* [前端部分笔试题](http://www.w3cfuns.com/notes/12560/f61c951c84ef79c432f6d91fd6aa9314:storey-2.html)
* [2016年Web前端面试题目汇总](https://github.com/zhangguixu/sourcecode/blob/master/blog/interview/10.md)
* [2016年Web前端面试题目](http://ms.csdn.net/geek/62646)
* [前端工作面试常见问题](https://github.com/paddingme/Front-end-Web-Development-Interview-Question/blob/master/%E5%89%8D%E7%AB%AF%E8%AF%95%E9%A2%98/4.md)

## Running Reading Dreaming

* [An Unexpected Ass Kicking](http://impossiblehq.com/an-unexpected-ass-kicking/)
  - Nothing is withheld from us which we have conceived to do.
  - Do things that have never been done.

* [What's the best way to get your résumé noticed?](https://www.quora.com/Whats-the-best-way-to-get-your-r%C3%A9sum%C3%A9-noticed)

* [How do I memorize faster?](https://www.quora.com/How-do-I-memorize-faster)

## HTML

* 每个HTML文件里开头都有个很重要的东西，Doctype，知道这是干什么的吗？
  - DOCTYPE 是用来指定，浏览器该用何种渲染模式。浏览器根据渲染模式来决定如何渲染页面。出现渲染模式的目的是为了兼容一些老旧（不符合w3c标准）的页面。在浏览器中有三种模式：怪癖模式（quirks mode），准标准模式（almost standards mode）和标准模式（standards mode）。
  - [DOCTYPE和浏览器渲染模式](https://github.com/iamjoel/front-end-note/blob/master/detail/html/quirks-mode-and-standards-mode.md)
  - [DOCTYPE 与浏览器模式分析](http://w3help.org/zh-cn/casestudies/002)
  - 告知浏览器文档使用哪种HTML或者XHTML规范，该标签可什么3种DTD类型，严格版本、过渡版本和基于框架的。（重点：告诉浏览器按照何种规范解析页面）

* Webkit?
  - [浏览器的工作原理：新式网络浏览器幕后揭秘](http://www.html5rocks.com/zh/tutorials/internals/howbrowserswork/)

* div+css的布局较table布局有什么优点？
  - [div+css有什么优势？](http://www.qietu.com/div-css-advantage/)
  - 表现和内容相分离，提高搜索引擎对网页的收录，提高页面浏览速度，易于维护和改版
  - •改版的时候更方便 只要改css文件。
    •页面加载速度更快、结构化清晰、页面显示简洁。
    •表现与结构相分离。
    •易于优化（seo）搜索引擎更友好，排名更容易靠前。

* strong与em的异同？？
```sh
  < em > 和 < strong > 仍旧是表达要素(phrase elements)。
  但这时的 < strong > 表示html页面上的强调（emphasized text）,< em > 表示句子中的强调（即强调语义）

 <strong> is a tag you'd put around a sentence or phrase to indicate that "this is more important than the surrounding text".

  <em> is generally used to indicate the stress of a word within a sentence.
```

* 你能描述一下渐进增强和优雅降级之间的不同吗?
  - 优雅降级（graceful degradation）：一开始就构建站点的完整功能，然后针对浏览器测试和修复。
  - 渐进增强（progressive enhancement）：一开始只构建站点的最少特性，然后不断针对各浏览器追加功能。
  - 两者间的微妙差别：它们是看待同种事物的两种观点。优雅降级和渐进增强都关注于同一个网站在不用设备里不同浏览器下的表现程度。关键的区别则在于他们各自关注于何处，以及这种关注如何影响工作的流程。
    - 优雅降级是从复杂的现状开始，并试图减少用户体验的供给
    - 渐进增强则是从一个非常基础的，能够起作用的版本开始，并不断扩充，以适应未来环境的需要
    - 降级（功能衰减）意味着往回看；而渐进增强则意味着朝前看，同时保证其根基处于安全地带

* 常用浏览器的内核分别是什么？
  - [浏览器解析介绍](https://leohxj.gitbooks.io/front-end-database/content/theory/browser-engine.html)
  - IE: trident内核
  - Firefox：gecko内核
  - Safari:webkit内核
  - Opera:以前是presto内核，Opera现已改用Google Chrome的Blink内核
  - Chrome:Blink(基于webkit，Google与Opera Software共同开发) 

* 为什么利用多个域名来存储网站资源会更有效？
  - CDN缓存更方便 
  - 突破浏览器并发限制 
  - 节约cookie带宽 
  - 节约主域名的连接数，优化页面响应速度 
  - 防止不必要的安全问题

* 请描述一下cookies，sessionStorage和localStorage的区别？
  - 数据传递不同：cookies是在浏览器和服务器之间来回传递的，而sessionStorage和localSorage是不会把数据传给服务器的，仅在本地保存。
  - 存储数据大小不同：cookie存储数据大小不能超过4k，而sessionStorage和localSorage存储数据大小可以达到5M。
  - 有效期不同：sessionStorage仅在窗口关闭前有效，localSorage始终有效，cookie在有效期之前有效。
  - 作用域不同：localSorage和cookie在同源窗口中是共享的，即使是不同的浏览器，而sessionStorage不是。

* 请解释一下什么是“语义化的 HTML”???????
  - “用合理HTML标记以及其特有的属性去格式化文档内容”—舒克
  - 分离结构与表现的另一个重要方面是使用语义化的标记来构造文档内容。一个 XHTML 元素的存在就意味被标记内容的那部分有相应的结构化的意义，没有理由使用其他的标记。换句话说，不要让 CSS 使一个 HTML 元素看起来就像另一个 HTML 元素，比如用<div>来代替<p>标记标题。

  - 首先是关于语义（Semantics）和默认样式的区别，默认样式是浏览器设定的一些常用tag的表现形式，个人认为他的主要目的就是让大家直观的 认识标签(markup)和属性(attribute)的用途和作用，很明显Hx系列看起来很像标题，因为拥有粗体和较大的字 号。< strong >,< em >用来区别于其他文字，起到了强调的作用。至于列表和表格很明显的告诉你他们是做什么的。

  - 其次，语义化的网页的好处，最主要的就是对搜索引擎友好，又了良好的结构和语义你的网页内容自然容易被搜索引擎抓取，你网站的推广便可以省下不少的功夫。

* Describe difference between src and href
  - href 是指向网络资源所在位置，建立和当前元素（锚点）或当前文档（链接）之间的链接，用于超链接。

  - src是指向外部资源的位置，指向的内容将会嵌入到文档中当前标签所在位置；在请求src资源时会将其指向的资源下载并应用到文档内，例如js脚本，img图片和frame等元素。当浏览器解析到该元素时，会暂停其他资源的下载和处理，直到将该资源加载、编译、执行完毕，图片和框架等元素也如此，类似于将所指向资源嵌入当前标签内。这也是为什么将js脚本放在底部而不是头部。

* 行内元素有哪些？块级元素有哪些？空（void）元素有哪些？
  - 行内元素：a、b、span、img、input、strong、select、label、em、button、textarea
  - 块级元素：div、ul、li、dl、dt、dd、p、h1-h6、blockquote
  - 空元素：即系没有内容的HTML元素，例如：br、meta、hr、link、input、img

* 如果你参与到一个项目中，发现他们使用 Tab 来缩进代码，但是你喜欢空格，你会怎么做？
  - 建议这个项目使用像 EditorConfig (http://editorconfig.org/) 之类的规范
  - 为了保持一致性，接受项目原有的风格
  - 直接使用 VIM 的 retab 命令

* 请写一个简单的幻灯片效果页面
  ```html
    <!doctype htm l>
    <html>
      <head>
        <style>
        img {
          display: none;
          width: 100px;
          height: 100px;
        }
        input:checked + img {
          display: block;
        }
        input {
          position: absolute;
          left: -9999px;
        }
        label {
          cursor: pointer;
        }
        </style>
      </head>
      <body>
        <div id="cont">
          <input id="img1" name="img" type="radio" checked="checked">
          <img src="a.png">
          <input id="img2" name="img" type="radio">
          <img src="b.png">
        </div>
        <div id="nav">
          <label for="img1">第一张</label>
          <label for="img2">第二张</label>
        </div>
      </body>
    </html>


    <!DOCTYPE HTML>
    <html>
      <head>
      <style>

      #cont {
      position: relative;
      height: 100px;
      }
    img {
          position: absolute;
          width: 100px;
          height: 100px;
          z-index: 1;
        }
    img:first-child,
    img:target {
          z-index: 2;
        }
      </style>
      </head>
      <body>
      <div id="cont">
          <img id="img1" src="a.jpg">
          <img id="img2" src="b.jpg">
        </div>
        <div>
          <a href="#img1">one</a>
          <a href="#img2">two</a>
        </div>
      </body>
    </html>
  ```
* Long-Polling, Websockets, SSE(Server-Sent Event) 之间有什么区别？  
* 请谈一下你对网页标准和标准制定机构重要性的理解
  - “一次编码。随处运行”。  
  - 网页标准和标准制定机构都是为了能让web发展的更‘健康’，开发者遵循统一的标准，降低开发难度，开发成本，SEO也会更好做，也不会因为滥用代码导致各种BUG、安全问题，最终提高网站易用性。 摘自:<http://www.cnblogs.com/coco1s/p/4034937.html>
* 什么是 FOUC（无样式内容闪烁）？你如何来避免 FOUC？
  - http://blog.csdn.net/laney1206/article/details/8591264
  ```sh
    什么是FOUC(文档样式短暂失效)?
    如果使用import方法对CSS进行导入,会导致某些页面在Windows 下的Internet Explorer出现一些奇怪的现象:以无样式显示页面内容的瞬间闪烁,这种现象称之为文档样式短暂失效(Flash of Unstyled Content),简称为FOUC。

    原因大致为：
    1，使用import方法导入样式表。
    2，将样式表放在页面底部
    3，有几个样式表，放在html结构的不同位置。

    其实原理很清楚：当样式表晚于结构性html加载，当加载到此样式表时，页面将停止之前的渲染。此样式表被下载和解析后，将重新渲染页面，也就出现了短暂的花屏现象。

    解决方法：
    使用LINK标签将样式表放在文档HEAD中。
  ```
* 请尽可能完整得描述下从输入URL到整个网页加载完毕及显示在屏幕上的整个流程
  - [从输入 URL 到页面加载完成的过程中都发生了什么事情？](http://fex.baidu.com/blog/2014/05/what-happen/)
  - [从FE的角度上再看输入url后都发生了什么](http://div.io/topic/609)
  - [当你输入一个网址，实际会发生什么?](http://blog.jobbole.com/33951/)
  - [从输入 URL 到页面加载完的过程中都发生了什么事情 —— 网络优化篇](http://oilbeater.com/%E6%8A%80%E6%9C%AF%E7%9B%B8%E5%85%B3/2014/05/09/from-url-to-webpage.html)
  - [一次完整的HTTP是怎么的一个过程](https://github.com/zhangguixu/sourcecode/blob/master/blog/interview/10.md)

* 在制作一个Web应用或Web站点的过程中，你是如何考虑他的UI、安全性、高性能、SEO、可维护性以及技术因素的？
  - 安全性：
    - [从“黑掉Github”学Web安全开发](http://coolshell.cn/articles/11021.html)
    - [零基础如何学习 Web 安全？](http://www.zhihu.com/question/21606800)
    - [Web前端－－黑客技术揭秘（菜鸟知识）](http://www.myhack58.com/Article/60/61/2014/48629.htm)
    - [Web前端攻防](http://drops.wooyun.org/tips/2686)
    - [前端冷知识集锦,很多都是web安全能用到的小技巧](http://www.toolmao.com/things_you_dont_know_about_frontend)

  - 高性能：
    - [雅虎的34条黄金准则](http://www.ha97.com/2710.html)
    - [【高性能前端1】高性能HTML](http://www.alloyteam.com/2012/10/high-performance-html/)
    - [【高性能前端2】高性能CSS](http://www.alloyteam.com/2012/10/high-performance-css/)
    - [【高性能前端3】高性能JavaScript](http://www.alloyteam.com/2012/10/high-performance-front-end-high-performance-javascript/)
    - [【高性能前端4】Appcache Facts 中译版](http://www.alloyteam.com/2012/10/appcache-facts/)

  - SEO：
    - [SEO在网页制作中的应用](http://www.imooc.com/learn/204)

* 谈谈你喜欢的开发环境。(例如操作系统，编辑器，浏览器，工具等等)
  - 操作系统：windows,linux;
  - 编辑器：Sublime Text,以前用过一段时间Vim,后来转到Sublime Text;
  - 浏览器：Chrome,Firefox;
  - 工具：Photoshop,Eclipse,Fiddler 等;
  - 前端框架：Bootstarp，jQuery等。

* 你最熟悉哪一套版本控制系统？
  - Git
  - SVN

* 你如何对网站的文件和资源进行优化？
  - 文件合并
  - 文件最小化/文件压缩
  - 使用 CDN 托管
  - 缓存的试用
  - 其他

* 请说出三种减少页面加载时间的方法（加载时间指感知的时间或者实际加载时间）
  ```html
  - 尽量减少页面中重复的HTTP请求数量
    - 比较直接的理解就是要减少调用其他页面、文件的数量。我们在使用css格式控制的时候，经常会采用background载入很多图形文件，而每个 background的图像都会产生1次HTTP请求，一般我们为了让页面生动活泼会大量使用background来加载背景图，要改善这个状况，可以采 用css的1个有用的background-position属性来加载背景图，我们将需要频繁加载的多个图片合成为1个单独的图片，需要加载时可以采用：background:url(....) no-repeat x-offset y-offset;的形式加载即可将这部分图片加载的HTTP请求缩减为1个。

  - 服务器开启 gzip 压缩
    - 即将需要传输的内容压缩后传输到客户端再解压，这样在网络上传输的 数据量就会大幅减小。通常在服务器上的Apache、Nginx可以直接开启这个设置，也可以从代码角度直接设置传输文件头，增加gzip的设置，也可以 从 负载均衡设备直接设置。不过需要留意的是，这个设置会略微增加服务器的负担。建议服务器性能不是很好的网站，要慎重考虑。
  - CSS 样式的定义放置在文件头部
  - Javascript 脚本放在文件末尾
    - 我们都知道网页文件的载人是从上到下的加载的，而有很多Javascript脚本执行效率比较低下，或者在网页前面都不需要执行的，如果将这些脚本放置到 页面比较靠前的位置，很可能会导致网站内容载入速度下降甚至无**常加载，所以一般将这些脚本放置在网页文件末尾，一定要放 置在前面的脚本要改用所谓的“后载入”方式加载，在主体网页加载完成后再加载，防止其影响到主体网页的加载速度。
  - 压缩Javascript、CSS代码
    一般js、css文件中存在大量的空格、换行、注释，这些利于阅读，如果能够压缩掉，将会很有利于网络传输。这方面的工具也有很多，可以在百度里搜索一下 关键字“css代码压缩”，或者“js代码压缩”将会发现有很多网站都提供这样的功能，当然了你也可以自己写程序来做这个工作，如果你会的话。就拿我们这 个网站来说吧。刚开始上传这个网站的时候，我的很多Css代码都没有压缩，后面发现了这个问题，我就上网找了相关的网站的压缩代码的功能，最后就把很多 CSS文件都压缩了。这个压缩比率还是比较高的，一般都有50%左右。由此可见，这个代码压缩对于网页的加载还是很有用的。

  - Ajax 采用缓存调用
    - Ajax调用都采用缓存调用方式，一般采用附加特征参数方式实现，注意其中的<script src=”xxx.js?{VERHASH}”，{VERHASH}就是特征参数，这个参数不变化就使用缓存文件，如果发生变化则重新下载新文件或更新信息。
  - 尽可能减少 DCOM 元素（这个很好理解，就是尽可能减少网页中各种<>元素数量，例如<table>的冗余很严重，而我们完全可以用<div>取代之。）
  - 使用多域名负载网页内的多个文件、图片
  - 使用CDN
  - 在服务器端配置control-cache  last-modify-date
  - 在服务器配置Entity-Tag     if-none-match
  ```

## CSS

* 什么是盒子模型？
  - 在网页中，一个元素占有空间的大小由几个部分构成，其中包括
    - 元素的内容 content
    - 元素的内边距 padding
    - 元素的边框 border
    - 元素的外边距 margin 
  - 这四个部分占有的空间中，有的部分可以显示相应的内容，而有的部分只用来分割相邻的区域。
  - 四个部分一起构成了 CSS 中的元素的盒子模型。

* CSS实现垂直水平居中
  ```html
  <div class="wrapper">
      <div class="content"></div>
  </div>
  ```
  ```css
  .wrapper{position:relative;}
  .content{
      width : 200px;
      height: 200px;
      background : red;
      position : absolute;  //父元素需要相对定位
      top:50%;
      left:50%;
      margin-left : -100px; //二分之一的height，width
      margin-top : -100px;
  }
  ```

* 同步和异步的区别
  - 同步是阻塞模式：同步就是指一个进程在执行某个请求的时候，若该请求需要一段时间才能返回信息，那么这个进程会一直等待下去，直到收到返回信息才继续执行下去。
  - 异步是非阻塞模式：异步是指进程不需要一直等下去，而是继续执行下面的操作，不管其他进程的状态。当有消息返回时，系统会通知进程进行处理，这样可以提高执行的效率。 

* px和em的区别
  - 两者都是长度单位
    - px的值是固定的。
    - em的值不是固定，而且会继承父级元素的字体大小。
  - 浏览器默认的字体高都是16px。所以未经过调整的浏览器都符合`1em=16px`

* What is CSS Hack?
  - 一般来说是针对不同浏览器写不同的css，就是css hack。IE浏览器hack分为：
    - 条件 Hack
    - 属性 Hack
    - 选择符 Hack
  ```css
    // 1、条件Hack
    <!--[if IE]>
       <style>
             .test{color:red;}
       </style>
    <![endif]-->
    // 2、属性Hack
     .test{
     color:#090\9; /* For IE8+ */
     *color:#f00;  /* For IE7 and earlier */
     _color:#ff0;  /* For IE6 and earlier */
     }
    // 3、选择符Hack
     * html .test{color:#090;}       /* For IE6 and earlier */
     * + html .test{color:#ff0;}     /* For IE7 */
  ```
* [前端面试题收集-css篇](http://www.byr.pub/wordpress/2015/09/26/%E5%89%8D%E7%AB%AF%E9%9D%A2%E8%AF%95%E9%A2%98%E6%94%B6%E9%9B%86-css%E7%AF%87/)
* [css篇](http://www.w3cfuns.com/notes/15485/6947462bafa0780dd367f9531e27a9c7.html)
* [BAT及各大互联网公司2014前端笔试面试题--Html,Css篇](http://www.cnblogs.com/coco1s/p/4034937.html)

## Javascript

* [JavaScript面试题](https://leohxj.gitbooks.io/front-end-database/content/interview/interview-exercises-with-JavaScript.html)

## JQuery

* [jQuery面试题](https://leohxj.gitbooks.io/front-end-database/content/interview/interview-exercises-with-jquery.html)

## Network

https://github.com/zhangguixu/sourcecode/blob/master/blog/interview/10.md
https://github.com/h5bp/Front-end-Developer-Interview-Questions/tree/master/Translations/Chinese
https://github.com/h5bp/Front-end-Developer-Interview-Questions#css
https://github.com/h5bp/Front-end-Developer-Interview-Questions#html
Traditionally, why has it been better to serve site assets from multiple domains?
Do your best to describe the process from the time you type in a website's URL to it finishing loading on your screen.
What are the differences between Long-Polling, Websockets and Server-Sent Events?
Explain the following request and response headers:
Diff. between Expires, Date, Age and If-Modified-...
Do Not Track
Cache-Control
Transfer-Encoding
ETag
X-Frame-Options
What are HTTP methods? List all HTTP methods that you know, and explain them.
