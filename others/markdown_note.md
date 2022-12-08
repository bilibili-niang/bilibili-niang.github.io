## 文字

***你好***啊

___你好___ 啊

**你好**啊

_你好_ 啊

## 模块渲染

>模块渲染以及使用<br>
>>模块渲染以及使用,还可以嵌套使用<br>
>就是这么用的

> #### 带有其它元素的块引用
>
> - 块引用可以包含其他 Markdown 格式的元素。
> - 并非所有元素都可以使用，你需要进行实验以查看哪些元素有效
> - Profits were higher than ever.
>
>  *Everything* is going according to **plan**.


## 无序列表

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

## 图片

![Tux, the Linux mascot](images/eva.png)

![eva](www.biying.com)

## Markdown 代码语法
要将单词或短语表示为代码，请将其包裹在反引号 (`) 中

At the command prompt, type `nano`.

### 转义反引号
如果你要表示为代码的单词或短语中包含一个或多个反引号，则可以通过将单词或短语包裹在双反引号(``)中

``Use `code` in your Markdown file.``

## 要创建分隔线，请在单独一行上使用三个或多个星号 (***)、破折号 (---) 或下划线 (___) ，并且不能包含其他内容

***

---

_________________

## Markdown 链接语法

链接文本放在中括号内，链接地址放在后面的括号中，链接title可选

超链接Markdown语法代码：[超链接显示名](超链接地址 "超链接title")

对应的HTML代码：<a href="超链接地址" title="超链接title">超链接显示名</a>

这是一个链接 [Markdown语法](https://markdown.com.cn)。

### 给链接增加 Title
链接title是当鼠标悬停在链接上时会出现的文字，这个title是可选的，它放在圆括号中链接地址后面，跟链接地址之间以空格分隔。
    
这是一个链接 [Markdown语法](https://markdown.com.cn "最好的markdown教程")。

### 网址和Email地址
使用尖括号可以很方便地把URL或者email地址变成可点击的链接。

    <https://markdown.com.cn>
    <fake@example.com>

### 带格式化的链接
强调 链接, 在链接语法前后增加星号。 要将链接表示为代码，请在方括号中添加反引号。

I love supporting the **[EFF](https://eff.org)**.
This is the *[Markdown Guide](https://www.markdownguide.org)*.
See the section on [`code`](#code).

## Markdown 转义字符语法
要显示原本用于格式化 Markdown 文档的字符，请在字符前面添加反斜杠字符 () 。

\* Without the backslash, this would be a bullet in an unordered list.

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



