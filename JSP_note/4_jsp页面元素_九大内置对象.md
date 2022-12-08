### JSP页面元素

#### a.脚本Scriptlet

i:
```jsp
<%
    局部变量
    Java语句
%>
```
ii:
```jsp
<%!
    全局变量
    定义方法
%>
```
iii:
```jsp
<%=
    输出表达式
%>
```

在<%= %>中可以直接解析html代码

---

一般而言，修改web.xml,配置文件,Java 

需要重启tomcat服务器 但是如果修改 Jsp\html\css\js,不需要重启

---
```html
<%
    out.print("abc........." + name+"<br/>");
%>
```
此处如果是out.println,并不会换行,
如果要换行,需要在最后面加上<br/>
如上面的

#### b.指令--配置指令
```jsp
<%@page
...
%>
```
page指定的属性
language:jsp页面使用的脚本语言
import:导入类,与Java中导入包一样
pageEncoding:JSP文件自身编码, jsp-->java时用的编码
contentType:浏览器解析JSP的编码


#### c.注释(也被称为页面元素):
html注释 可以被客户通过浏览器 -->查看源代码看到,而Java,JSP代码不可以

Java注释 略

JSP注释:<%-- --%>



### JSP九大内置对象(自带的,不需要new 也能使用的对象)
- out

输出对象,向客户端输出内容

- pageContext


- request
请求对象,存储“客户端向服务器端发送的请求信息”

request对象的常见方法：
String getParameter(String name):根据请求的字段名key(input标签的name属性值)，返回字段值value(input标签的name属性)

String[] getParameterValues(String name):根据请求的字段名key(input标签的name属性)，返回多个字段值value

void setCharacterEncoding("编码格式utf-8"):设置请求编码,如果不默认:Tomcat7以前默认iso-8859-1,tomcat8以后改为了utf-8

getRequestDispatcher("b.jsp").forward(request,response); 请求转发的方式跳转页面 A->B

getServerContext(); 获取项目的ServletContext对象

- response 响应对象

提供的方法:
<br>
void addCookie(Cookie cookie);服务端向客户端<br>
void sendRedirect(String location)throms IOException : 页面跳转的一种方式,会报错:重定向异常<br>
void setContentType(String type):设置服务端响应时编码(设置服务端contenType类型)

- application 全局对象

String getContextPath():虚拟路径

String getRealPath():绝对路径(虚拟路径 相对的绝对路径)



- config 配置对象(服务器配置信息)

- page 当前JSP页面对象(相当于Java中的this)

- exception 异常对象



  

