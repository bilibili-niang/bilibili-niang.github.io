title: jsp中post和get编码设置
author: icestone
tags:
  - jsp
categories:
  - jsp中post和get的编码问题
date: 2022-11-16 00:44:00
---
### 设置编码

#### 问题:

问题:将你的前端提交数据写入数据库时,会出现中文乱码的问题:

![upload successful](/images/pasted-3.png)


但实际上是:

![upload successful](/images/pasted-4.png)


这里后端获取的数据是乱码的

#### 解决:

基于tomcat,使用post提交需要设置编码,get不需要:

```java
@WebServlet(name = "AddServlet", value = "/add")
public class AddServlet extends HttpServlet {
    //响应post
    @Override
    public void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        //post方式下,设置字符编码,防止乱码
        req.setCharacterEncoding("utf-8");
        //get方式下目前不需要设置编码(基于tomcat8)
    }
}
```

关键是:`req.setCharacterEncoding("utf-8");`

![upload successful](/images/pasted-5.png)


#### 基于tomcat8之前获取get数据;

比较麻烦:

```java

@WebServlet(name = "AddServlet", value = "/add")
public class AddServlet extends HttpServlet {
    //响应post
    @Override
    public void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        //如果在tomcat8之前,并且是get方式获取的数据:
          String fname = req.getParameter("name");
        //1.将字符串打散成字节数组
          byte[] bytes = fname.getBytes("ISO-8859-1");
        //2.将字节数组按照设定的编码重新组成成字符串
          fname = new String(bytes, "utf-8");
    }
}
```



### 注意:

#### 设置编码必须在所有的获取参数动作之前









