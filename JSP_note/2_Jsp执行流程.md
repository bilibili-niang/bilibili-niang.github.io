### 配置
a.使用idea开发web项目

b.在idea中创建的web项目:浏览器可以直接访问WebContent中的文件,

但是WEB-INF中的文件无法通过客户端(浏览器)直接访问,只能通过请求转发来访问

注意:并不是任何的内部跳转都能访问WEB-INF,原因是跳转有两种方式:请求转发,重定向

---

### 统一字符集编码:

设置jsp字符集编码:jsp -->java,
在jsp文件中的pageEncoding属性设置

设置浏览器读取jsp文件的编码(jsp文件中的content属性)

一般讲上述设置为一致的编码,推荐使用UTF-8

### 文件编码设置:

①将整个idea中的文件统一设置(推荐)
②设置 某一个项目
③设置单独文件

