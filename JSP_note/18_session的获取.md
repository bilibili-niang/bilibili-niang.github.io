### 1.获取session

```java
package com.servlets;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;

@WebServlet("/demo01")
public class dmo01 extends HttpServlet {
    @Override
    protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        //获取session,如果获取不到,则创建一个新的:
        HttpSession session = req.getSession();
        System.out.println("获取的sessionID");
        System.out.println("session ID: " + session.getId());

    }
}
```

#### 访问:

![image-20221124154531714](./images/image-20221124154531714.png)

这里有session时,会输出session,如果没有,重新分配一个session

### 2.session作用域:

- session保存作用域是和具体保存的某一个session对应的

- 常用api:

- > ```java
  > //返回的是void
  > req.getSession().setAttribute("key","val");
  > ```
  > ```java
  > //返回的是Object
  > req.getSession().getAttribute("key");
  > ```
  > ```java
  > // 返回的是void
  > removeAttribute("key")
  > ```

#### 设置自定义sessoin:

```java
package com.guigu;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

//设置session
@WebServlet("/setUname")
public class demo01Servlet extends HttpServlet {
    @Override
    protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        req.getSession().setAttribute("uname","line");
    }
}

```

#### 获取自定义session:

```java
package com.guigu;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

//演示自定义的session
@WebServlet("/showSession")
public class demo02Servlet extends HttpServlet {
    @Override
    protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        Object unameObj = req.getSession().getAttribute("uname");
        System.out.println(unameObj);
    }
}

```









