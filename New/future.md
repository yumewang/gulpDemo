# Future Front-end-developer

## 参考资料

* [the-key-of-frontend-knowledge](https://leohxj.gitbooks.io/front-end-database/content/interview/index.html)

## HTML

* 每个HTML文件里开头都有个很重要的东西，Doctype，知道这是干什么的吗？
[DOCTYPE和浏览器渲染模式](https://github.com/iamjoel/front-end-note/blob/master/detail/html/quirks-mode-and-standards-mode.md)
[DOCTYPE 与浏览器模式分析](http://w3help.org/zh-cn/casestudies/002)

* Webkit?
[浏览器的工作原理：新式网络浏览器幕后揭秘](http://www.html5rocks.com/zh/tutorials/internals/howbrowserswork/)

* div+css的布局较table布局有什么优点？
[div+css有什么优势？](http://www.qietu.com/div-css-advantage/)
表现和内容相分离，提高搜索引擎对网页的收录，提高页面浏览速度，易于维护和改版

* strong与em的异同？？
```sh
< em > 和 < strong > 仍旧是表达要素(phrase elements)。但这时的 < strong > 表示html页面上的强调（emphasized text）， < em > 表示句子中的强调（即强调语义）

<strong> is a tag you'd put around a sentence or phrase to indicate that "this is more important than the surrounding text".

<em> is generally used to indicate the stress of a word within a sentence.
```
* 你能描述一下渐进增强和优雅降级之间的不同吗?

- 优雅降级（graceful degradation）：一开始就构建站点的完整功能，然后针对浏览器测试和修复。
渐进增强（progressive enhancement）：一开始只构建站点的最少特性，然后不断针对各浏览器追加功能。
官方解释是这样的，理解一下优雅降级，主要体现在浏览器上、在最强大的浏览器上例如chrome或safari做出完整的体验，然后在ie6上根据差异修改一些重大bug、或做出一个体验不那么强的版本。
渐进増强，意为先做出一个可以兼容所有浏览器的版本，然后逐步提升体验效果。其实软件的迭代或者说网页的发展过程，从html到javascript到html5、css3就是一个渐进增强的过程。

    - 如果提到了特性检测，可以加分。

    - 特性检测即为检测所使用的浏览器是否支持某css或者js方法，而不是专门去写浏览器检测，浏览器检测例如：当ie6时调用某方法、ie7调用另一种方法。