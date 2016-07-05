# Future Front-end-developer

## 参考资料

* [Web前端程序员简历模板](https://github.com/geekcompany/ResumeSample/blob/master/web.md)
* [The-Key-of-Frontend-Knowledge](https://leohxj.gitbooks.io/front-end-database/content/interview/index.html)
* [Front-end-Web-Development-Interview-Question](https://github.com/paddingme/Front-end-Web-Development-Interview-Question)
* [github上比较有名的一个前端面试题](http://www.cnblogs.com/bugluo/archive/2012/11/09/2762423.html)
* [前端面试问题](http://handyxuefeng.blog.163.com/blog/static/454521722013111714040259/)
* [前端部分笔试题](http://www.w3cfuns.com/notes/12560/f61c951c84ef79c432f6d91fd6aa9314:storey-2.html)
* [2016年Web前端面试题目汇总](https://github.com/zhangguixu/sourcecode/blob/master/blog/interview/10.md)
* [2016年Web前端面试题目](http://ms.csdn.net/geek/62646)

## HTML

* 每个HTML文件里开头都有个很重要的东西，Doctype，知道这是干什么的吗？
  - [DOCTYPE和浏览器渲染模式](https://github.com/iamjoel/front-end-note/blob/master/detail/html/quirks-mode-and-standards-mode.md)
  - [DOCTYPE 与浏览器模式分析](http://w3help.org/zh-cn/casestudies/002)
  - 告知浏览器文档使用哪种HTML或者XHTML规范，该标签可什么3种DTD类型，严格版本、过渡版本和基于框架的。（重点：告诉浏览器按照何种规范解析页面）

* Webkit?
  - [浏览器的工作原理：新式网络浏览器幕后揭秘](http://www.html5rocks.com/zh/tutorials/internals/howbrowserswork/)

* div+css的布局较table布局有什么优点？
  - [div+css有什么优势？](http://www.qietu.com/div-css-advantage/)
  - 表现和内容相分离，提高搜索引擎对网页的收录，提高页面浏览速度，易于维护和改版
  •改版的时候更方便 只要改css文件。
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
  官方解释是这样的，理解一下优雅降级，主要体现在浏览器上、在最强大的浏览器上例如chrome或safari做出完整的体验，然后在ie6上根据差异修改一些重大bug、或做出一个体验不那么强的版本。
  - 渐进増强，意为先做出一个可以兼容所有浏览器的版本，然后逐步提升体验效果。其实软件的迭代或者说网页的发展过程，从html到javascript到html5、css3就是一个渐进增强的过程。

      - 如果提到了特性检测，可以加分。

      - 特性检测即为检测所使用的浏览器是否支持某css或者js方法，而不是专门去写浏览器检测，浏览器检测例如：当ie6时调用某方法、ie7调用另一种方法。

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
  - 分离结构与表现的另一个重要方面是使用语义化的标记来构造文档内容。一个 XHTML 元素的存在就意味被标记内容的那部分有相应的结构化的意义，没有理由使用其他的标记。换句话说，不要让 CSS 使一个 HTML 元素看起来就像另一个 HTML 元素，比如用<div>来代替<p>标记标题。

  - 首先是关于语义（Semantics）和默认样式的区别，默认样式是浏览器设定的一些常用tag的表现形式，个人认为他的主要目的就是让大家直观的 认识标签(markup)和属性(attribute)的用途和作用，很明显Hx系列看起来很像标题，因为拥有粗体和较大的字 号。< strong >,< em >用来区别于其他文字，起到了强调的作用。至于列表和表格很明显的告诉你他们是做什么的。

  - 其次，语义化的网页的好处，最主要的就是对搜索引擎友好，又了良好的结构和语义你的网页内容自然容易被搜索引擎抓取，你网站的推广便可以省下不少的功夫。

* Describe difference between src and href
  - href 是指向网络资源所在位置，建立和当前元素（锚点）或当前文档（链接）之间的链接，用于超链接。

  - src是指向外部资源的位置，指向的内容将会嵌入到文档中当前标签所在位置；在请求src资源时会将其指向的资源下载并应用到文档内，例如js脚本，img图片和frame等元素。当浏览器解析到该元素时，会暂停其他资源的下载和处理，直到将该资源加载、编译、执行完毕，图片和框架等元素也如此，类似于将所指向资源嵌入当前标签内。这也是为什么将js脚本放在底部而不是头部。

