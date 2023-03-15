
### !important

!important意为增加它的权重
```css
.content_list .list_number2 {
    color: transparent !important;
    background: url("images/wave.gif") no-repeat 0 center;
}
```

* 在ie6及以下的版本中,`!import`并不会抹掉在!import后面定义的规则

such as:
```html
div{color:#f00!important;color:#000;}
```

在上述代码中,IE6及以下浏览器div的文本颜色为#000,!important并

没有覆盖后面的规则；其它浏览器下div的文本颜色为#f00

* ie6及以下版本的浏览器要使用`!import`并使其覆盖后面的规则,可以使用：

```html
div{color:#f00!important;}
div{color:#000;}
```

在上述代码中,IE6及以下浏览器中div的文本颜色表现与其它浏览器一致,都为#f00


[参考文章](http://www.w3chtml.com/css3/rules/!important.html)

---
### `letter-spacing`

设置字符之间的间距:

```javascript
/*针对中文 */
letter-spacing: 0.5em;
/*针对英文 */
 word-spacing: 0.5em;
```

定义和用法：

`letter-spacing` 属性可以增加或减少字符间的空白(字符间距).<br>
该属性定义了在文本字符框之间插入多少空间.由于字符字形通常比其字符框要窄,指定长度值时,<br>
会调整字母之间通常的间隔.因此,normal 就相当于值为 0.<br>
注释：允许使用负值,这会让字母之间挤得更紧.


| 默认值: | normal |
| ------ | ------ |
| 继承性 | yes |
| 版本 | CSS1 |
| JavaScript 语法 | object.style.letterSpacing="3px" |


参考文章:忘了,,好像还是w3c的

---
### `指定网页的icon图标`

写在head标签里面,用以指定网页的icon图标,只需更改路径即可
```java
<link rel="shortcut icon" href="https://www.vmall.com/favicon.ico"/>
```
---
### `user-select`

意为用户无法选中该内容:

```html
user-select: none;
```
* 语法

| 语法 | none / text / all / element |
| --------------- |-------------------|
| 默认值 | text |
| 适用于 | 除替换元素外的所有元素 |
| 继承性 | 无 |
| 动画性 | 否 |
| 计算值 | 指定值 |

* 取值

| 取值 | 作用 |
| ---- | ---- |
| none | 文本不能被选择 |
| text | 可以选择文本 |
| all | 当所有内容作为一个整体时可以被选择.如果双击或者在上下文上点击子元素,那么被选择的部分将是以该子元素向上回溯的最高祖先元素 |
| element | 可以选择文本,但选择范围受元素边界的约束 |

说明：
设置或检索是否允许用户选中文本.<br>
* IE6-9不支持该属性,但支持使用标签属性 onselectstart="return false;" 来达到 user-select:none 的效果；<br>Safari和Chrome也支持该标签属性；<br>
* 直到Opera12.5仍然不支持该属性,但和IE6-9一样,也支持使用私有的标签属性 unselectable="on" 来达到<br> user-select:none 的效果；unselectable 的另一个值是 off；<br>
* 除Chrome和Safari外,在其它浏览器中,如果将文本设置为 -ms-user-select:none;,则用户将无法在该文本块<br>中开始选择文本.不过,如果用户在页面的其他区域开始选择文本,则用户仍然可以继续选择将文本设置为<br> -ms-user-select:none; 的区域文本；<br>
* 对应的脚本特性为userSelect.<br>

[参考文章](https://www.html.cn/book/css/properties/user-interface/user-select.htm)

---
### `placeholder`

* 定义和用法:<br>
placeholder 属性提供可描述输入字段预期值的提示信息(hint).<br>
该提示会在输入字段为空时显示,并会在字段获得焦点时消失.

placeholder : 设置input框内的默认内容

```java
<input type="text" placeholder="手机号/邮件地址/华为号">
<input type="text" placeholder="密码">
```

如图:

![](images/1.png)

----
### `white-space`

css中使用,取消自动换行:

```css
 /*取消自动换行*/
        white-space: nowrap;
```

---
### `vertical-align`

vertical-align:设置元素的垂直对齐方式

[博客引用地址](https://blog.csdn.net/wenyuel/article/details/100155128?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522159885560019724843331436%2522%252C%2522scm%2522%253A%252220140713.130102334..%2522%257D&request_id=159885560019724843331436&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~first_rank_ecpm_v3~pc_rank_v3-1-100155128.pc_ecpm_v3_pc_rank_v3&utm_term=vertical-align&spm=1018.2118.3001.4187)
vertical-align是CSS中的一个属性,可以用于设置元素的垂直对齐方式,下面我们就来具体看一下vertical-align属性的用法.


vertical-align属性定义行内元素的基线相对于该元素所在行的基线的垂直对齐.允许指定负长度值和百分比值.这会使元素降低而不是升高.在表单元格中,这个属性会设置单元格框中的单元格内容的对齐方式.

vertical-align属性的值比较多:

| 属性 | 作用 |
|----- | ---- |
| baseline | 默认.元素放置在父元素的基线上 |
| sub | 垂直对齐文本的下标 |
| super | 垂直对齐文本的上标 |
| top | 把元素的顶端与行中最高元素的顶端对齐 |
| text-top | 把元素的顶端与父元素字体的顶端对齐 |
| middle | 把此元素放置在父元素的中部 |
| bottom | 把元素的顶端与行中最低的元素的顶端对齐 |
| text-bottom | 把元素的底端与父元素字体的底端对齐 |
| length | 使用 "line-height" 属性的百分比值来排列此元素.允许使用负值. |
| inherit | 规定应该从父元素继承 vertical-align 属性的值 |



在表格中,这个属性设置单元格内容的对齐方式.vertical-align应用最多的应该是在td内,控制内部对象位置.

---

### `vertical-align`
垂直对齐一幅图像：

```css
i{
    vertical-align:middle;
}
```

它可选的值(![参考](https://www.w3school.com.cn/cssref/pr_pos_vertical-align.asp)):

| 值 | 描述 |
| --------- | --------- |
| baseline | 默认.元素放置在父元素的基线上 |
| sub |	垂直对齐文本的下标. |
| super | 垂直对齐文本的上标 |
| top |	把元素的顶端与行中最高元素的顶端对齐 |
| text-top | 把元素的顶端与父元素字体的顶端对齐 |
| middle | 把此元素放置在父元素的中部. |
| bottom | 把元素的顶端与行中最低的元素的顶端对齐. |
| text-bottom |	把元素的底端与父元素字体的底端对齐. |
| length | 暂无 |
| %  | 使用"line-height"属性的百分比值来排列此元素.允许使用负值. |
| inherit |	规定应该从父元素继承 vertical-align 属性的值. |

---
### `object-fit`

* 说明:

object-fit 属性指定元素的内容应该如何去适应指定容器的高度与宽度

object-fit 一般用于 images 和 video 标签,一般可以对这些元素进行保留原始比例的剪切、缩放或者直接进行拉伸等.

您可以通过使用 object-position 属性来切换被替换元素的内容对象在元素框内的对齐方式.

- 个人理解:

在video标签中使用,作用于images标签中的background-size一样
```less
  video {
    width: 100%;
    height: 100%;
    background: red;
    object-fit: cover;
  }
```

| 值 | 描述 |
| ----- | ----- |
| contain | 被替换的内容将被缩放,以在填充元素的内容框时保持其宽高比. 整个对象在填充盒子的同时保留其长宽比,因此如果宽高比与框的宽高比不匹配,该对象将被添加“黑边” |
| cover | 被替换的内容在保持其宽高比的同时填充元素的整个内容框.如果对象的宽高比与内容框不相匹配,该对象将被剪裁以适应内容框 |
| fill | 被替换的内容正好填充元素的内容框.整个对象将完全填充此框.如果对象的宽高比与内容框不相匹配,那么该对象将被拉伸以适应内容框 |
| none | 被替换的内容将保持其原有的尺寸 |
| scale-down | 内容的尺寸与 none 或 contain 中的一个相同,取决于它们两个之间谁得到的对象尺寸会更小一些 |

[参考文章](https://www.runoob.com/cssref/pr-object-fit.html)

---

### `video`

音频格式的 MIME 类型:

| 格式| MIME-type |
|---|----|
| MP4 | video/mp4 |
| WebM | video/webm |
| Ogg	| video/ogg |

video标签内的可选属性:


| 属性 |	值 | 描述 |
|------|---|----|
| autoplayNew | autoplay | 如果出现该属性,则视频在就绪后马上播放 |
| controlsNew | controls | 如果出现该属性,则向用户显示控件,比如播放按钮 |
| heightNew	| pixels | 设置视频播放器的高度 |
| loopNew | loop | 如果出现该属性则当媒介文件完成播放后再次开始播放. |
| mutedNew | muted | 如果出现该属性,视频的音频输出为静音 |
| posterNew | URL | 规定视频正在下载时显示的图像,直到用户点击播放按钮. |
| preloadNew | auto/metadata/none |如果出现该属性,则视频在页面加载时进行加载,并预备播放.如果使用 "autoplay",则忽略该属性. |
| srcNew | URL | 要播放的视频的 URL. |
| widthNew | pixels	| 设置视频播放器的宽度. |

[参考文章](https://www.runoob.com/tags/tag-video.html)

---

### `align-items`

设置了 flex 容器的对齐方式

| 默认值 | stretch |
| ----- | ------- |
| 继承 | 否 |
| 可动画化: | 否 | 
| javascript语法: | 	object.style.alignItems="center" |

css语法:
```css
align-items: stretch|center|flex-start|flex-end|baseline|initial|inherit;
```

属性值:

| 值 | 描述	测试 |
| ---- | ---- |
| stretch | 默认,拉伸元件以适应容器 |
| center | 中心元素在容器内 |
| flex-start | 位置元素在容器的开头 |
| flex-end | 位置元素在容器的末端 |
| baseline | 位置元素在容器的基线 |
| initial | 设置为默认值.请参阅 initial |
| inherit | 从其父元素继承此属性 |

例如:

`align-items:center;`

![](images/3.png)

`align-items: flex-start;`

![](images/4.png)


[参考文章](https://www.w3cschool.cn/cssref/css3-pr-align-items.html)

---

### `visibility`

定义和用法<br>
visibility 属性规定元素是否可见。<br>
提示：即使不可见的元素也会占据页面上的空间。请使用 "display" 属性来创建不占据页面空间的不可见元素。

说明

这个属性指定是否显示一个元素生成的元素框。这意味着元素仍占据其本来的空间，<br>不过可以完全不可见。值 collapse 在表中用于从表布局中删除列或行。

| 说明 | 属性 |
| ------ | ---- |
| 默认值 | visible |
| 继承性 | yes |
| 版本 | CSS2 |
| JavaScript 语法 | object.style.visibility="hidden" |

可能的值

| 值 | 描述|
| --- | --- |
| visible | 默认值。元素是可见的。|
| hidden | 元素是不可见的。|
| collapse | 当在表格元素中使用时，此值可删除一行或一列，但是它不会影响表格的布局。<br>被行或列占据的空间会留给其他内容使用。如果此值被用在其他的元素上，会呈现为 "hidden"。|
| inherit | 规定应该从父元素继承 visibility 属性的值。|

[参考文章](https://www.w3school.com.cn/cssref/pr_class_visibility.asp)

---

### `flex: 1;`

使用弹性盒子布局经常会用到一个属性flex:1，这个属性其实是三个属性的缩写形式:flext-grow、flex-shirk和flex-basic，三个的默认值分别是flext-grow:0 ,flex-shirk:1,flex-basic:auto。而flext:1 展开后是这样的：flex:1 1 0%。注意，并不是 flex:1 1 auto 奥,虽然就差0%与auto不同，但这两者区别确是很大的，待我娓娓道来~~~

使用弹性盒子布局经常会用到一个属性flex:1，这个属性其实是三个属性的缩写形式:flext-grow、flex-shirk和flex-basic，三个的默认值分别是flext-grow:0 ,flex-shirk:1,flex-basic:auto。而flext:1 展开后是这样的：flex:1 1 0%。注意，并不是 flex:1 1 auto 奥，虽然就差0%与auto不同，但这两者区别确是很大的，待我娓娓道来~~~





