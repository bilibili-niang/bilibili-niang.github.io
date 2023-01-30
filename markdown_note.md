##### [文字标题](#textTitle)
##### [模块渲染](#moduleRendering)
##### [无序列表](#unorderedList)
##### [插入图片](#picture)
##### [强调](#emphasize)
##### [使用链接](#link)
##### [转义字符and制表符](#Tabs)
##### [目录](#directory)
##### [流程图](#flowChart)
##### [添加代码片段](#code)
---
<a id="textTitle"></a>
### 文字

***你好***啊

___你好___ 啊

**你好**啊

_你好_ 啊

<a id="moduleRendering"></a>
### 模块渲染

>模块渲染以及使用<br>
>>模块渲染以及使用,还可以嵌套使用<br>
>就是这么用的

##### 带有其它元素的块引用
>
> - 块引用可以包含其他 Markdown 格式的元素。
> - 并非所有元素都可以使用，你需要进行实验以查看哪些元素有效
> - Profits were higher than ever.
>
>  *Everything* is going according to **plan**.
---
<a id="unorderedList"></a>
### 无序列表

- First item
- Second item
- Third item
- Fourth item

* First item
* Second item
* Third item
* Fourth item

+ First item
+ Second item
+ Third item
+ Fourth item

- First item
- Second item
- Third item
    - Indented item
    - Indented item
- Fourth item
---
<a id="picture"></a>
### 插入图片

![](images/eva.jpg)

![eva](www.biying.com)
---
<a id="emphasize"></a>
### 强调

要将单词或短语表示为代码，请将其包裹在反引号 (`) 中

At the command prompt, type `nano`.
---

<a id="link"></a>
### 使用链接

链接文本放在中括号内，链接地址放在后面的括号中，链接title可选

超链接Markdown语法代码：[超链接显示名](超链接地址 "超链接title")

对应的HTML代码：<a href="超链接地址" title="超链接title">超链接显示名</a>

这是一个链接 [Markdown语法](https://markdown.com.cn)。

#### 给链接增加 Title
链接title是当鼠标悬停在链接上时会出现的文字，这个title是可选的，它放在圆括号中链接地址后面，跟链接地址之间以空格分隔。
    
这是一个链接 [Markdown语法](https://markdown.com.cn "最好的markdown教程")。

#### 网址和Email地址
使用尖括号可以很方便地把URL或者email地址变成可点击的链接。

    <https://markdown.com.cn>
    <fake@example.com>

#### 带格式化的链接
强调 链接, 在链接语法前后增加星号。 要将链接表示为代码，请在方括号中添加反引号。

I love supporting the **[EFF](https://eff.org)**.
This is the *[Markdown Guide](https://www.markdownguide.org)*.
See the section on [`code`](#code).
---
<a id="Tabs"></a>
### 转义字符and制表符

要显示原本用于格式化 Markdown 文档的字符，请在字符前面添加反斜杠字符 () 。

\* Without the backslash, this would be a bullet in an unordered list.

如果你要表示为代码的单词或短语中包含一个或多个反引号，则可以通过将单词或短语包裹在双反引号(``)中

``Use `code` in your Markdown file.``

要创建分隔线，请在单独一行上使用三个或多个星号 (***)、破折号 (---) 或下划线 (___) ，并且不能包含其他内容

***


可做转义的字符
以下列出的字符都可以通过使用反斜杠字符从而达到转义目的。


| Character | Name |
| --------- | --------- |
| \ |	backslash |
| ` |	backtick (see also escaping backticks in code) |
| * |	asterisk |
| _ |	underscore |
| { } | 	curly braces |
| [ ] | 	brackets |
| ( ) | 	parentheses |
| # |	pound sign |
| + |	plus sign |
| - |	minus sign (hyphen) |
| . |	dot |
| ! |	exclamation mark |
| | |	pipe(see also escaping pipe in tables) |
---
<a id="directory"></a>
### 目录:  

如[这一篇文章](https://blog.csdn.net/ice_stone_kai/article/details/115898770?spm=1001.2014.3001.5501)(pc端查看才有点击跳转效果,移动端无),点击目录中不同的标题,会自行跳转

做法:  
```javascript
[标题](#你添加的id)
```

如下图,为每个标题添加一个跳转的id地址
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210425221745833.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2ljZV9zdG9uZV9rYWk=,size_16,color_FFFFFF,t_70)
而这些地址对应的就是`markdown`中要跳转的`a标签`(锚点):
锚点语法:
```javascript
<a id="你添加的id"></a>
```
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210425221834128.png)

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210425221846963.png)

---

<a id="flowChart"></a>
%%%%### 流程图:

#### 流程图节点

~~~mermaid
graph TD
    a1[带文本矩形]
    a2(带文本圆角矩形)
    a3>带文本不对称矩形]
    b1{带文本菱形}
    c1((带文本圆形))
~~~

~~~mermaid
graph LR
    A10[A10] --- A11[A11]
    A20[A20] === A21[A21]
    A30[A30] -.- A31[A31]
    B10[B10] --> B11[B11]
    B20[B20] ==> B21[B21]
    B30[B30] -.-> B31[B31]
    C10[C10] --yes--> C11[C11]
    C20[C20] ==yes==> C21[C21]
    C30[C30] -.yes.-> C31[C31]
~~~

~~~mermaid
graph LR
	A[开始节点] --> B[结束节点1]
	A --> C[结束节点2]
~~~

---

<a id="code"></a>  

### 添加代码片段

如下面添加javascript代码片段:  
```javascript
let http = require("http");
let server = http.createServer();
server.on("request", function (req, res) {
    res.writeHead(200, {
        //设置中文解析的编码为utf8
        "Content-Type": "text/plain; charset=utf-8"
    })
    res.end("www.it666.com");
});
server.listen(3000);
```
用法:  
只要将代码放在下面标签中即可,其他代码同理,只需要改变第一个```后面的标注即可
![在这里插入图片描述](https://img-blog.csdnimg.cn/20210430101058837.png)
---

