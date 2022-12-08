form中的action提交方式该方式默认提交方式为get,

地址栏提交：  连接/文件? 参数名1=参数值1 & 参数名2=参数值2 & 参数名1=参数值1

get提交方式：method="get" 和地址栏,超链接的(a标签),请求方式默认都属于get提交方式

### get和post提交方式区别：

* a.get提交方式在地址栏显示请求信息(但是地址栏容纳的信息有限,<br>
一般是4-5kb;如果请求数据存在大文件,会出现容纳不下文件,会报错),post不会显示

* b.文件上传方式必须是post
推荐使用post

### post提交:

例如下面一个表单:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Title</title>
</head>
<body>
<h1>我叼你妈的</h1>
<h2>表单:</h2>
<!--这里add指向的是后端的组件-->
<form action="add" method="post">
  name: <input type="text" name="fname" value="苹果"> <br/>
  price: <input type="text" name="fprice" value="5"> <br/>
  count: <input type="text" name="fcount" value="55"> <br/>
  emark: <input type="text" name="femark" value="500"> <br/>
  <input type="submit" value="添加">
</form>
</body>
</html>
```

点击提交后,后端由servlet来接受

![image-20221106173129886](./images/18.png)

#### 新建servlet:

在该目录结构下:

![image-20221106173536024](./images/image-20221106173536024.png)

新建:

```java
package com.aiguigu.servlets;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class AddServlet extends HttpServlet {
    //响应post
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
    //客户端发请求时,会被包装为一个对象req
        String fname=req.getParameter("fname");
        String fprice=req.getParameter("fprice");
        String fcount=req.getParameter("fcount");
        String femark=req.getParameter("femark");

        System.out.println(fname);
    }
}
```

注意:这里一个普通的class包是无法解析http的.需要继承httpServlet:`extends HttpServlet`,而这里的包,需要在tomcat的目录下找到该包并copy到:

![image-20221106173803222](./images/image-20221106173803222.png)

而这里我们使用的是jsp-servlet包

当然,我们一般不这样干,而是直接在idea中为项目添加tomcat的依赖既可以







