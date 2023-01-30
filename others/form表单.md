#### HTML 表单包含表单元素:

表单元素指的是不同类型的 input 元素、复选框、单选按钮、提交按钮等等

#### Method 属性
_method 属性_规定在提交表单时所用的 HTTP 方法(_GET_ 或 _POST_)
```html
<form action="action_page.php" method="GET">
```
或
```html
<form action="action_page.php" method="POST">
```

> 注意:

- GET为默认方法
- 当您使用 GET 时，表单数据在页面地址栏中是可见的

__注释：GET 最适合少量数据的提交。浏览器会设定容量限制。__

#### 何时使用:

##### 何时使用 GET？

您能够使用 GET(默认方法):
如果表单提交是被动的（比如搜索引擎查询），并且没有敏感信息。
当您使用 GET 时，表单数据在页面地址栏中是可见的：
```shell
action_page.php?firstname=Mickey&lastname=Mouse
```
##### 何时使用 POST？

您应该使用 POST:
如果表单正在更新数据，或者包含敏感信息（例如密码）。
POST 的安全性更好，因为在页面地址栏中被提交的数据是不可见的。

#### Name 属性

如果要正确地被提交，每个输入字段必须设置一个 name 属性
本例只会提交 "Last name" 输入字段：
```html
<form action="action_page.php">
	First name:<br>
	<input type="text" value="Mickey">
	<br>
	Last name:<br>
	<input type="text" name="lastname" value="Mouse">
	<br><br>
	<input type="submit" value="Submit">
</form>
```
