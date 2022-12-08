### 1.是什么

视图模板技术

我们对HTML的新的期待：既能够正常显示页面，又能在页面中包含动态数据部分。而动态数据单靠HTML本身是无法做到的，所以此时我们需要引入服务器端动态视图模板技术。

### 2.配置:

- 1.添加jar包:

在你的项目目录下新建一个文件夹,然后把thymeleaf的包放入:

![image-20221127222046929](./images/image-20221127222046929.png)

然后将这个文件夹 add as library:

![image-20221127222136587](./images/image-20221127222136587.png)

- 建立依赖:

在项目模型中,为项目添加依赖:

![image-20221127222259235](./images/image-20221127222259235.png)

然后再将其添加进Artifacts,这里只用在problem右侧的选项中点击`fix`即可
![image-20221127222456744](./images/image-20221127222456744.png)

- 2.新建一个servlet类ViewBaseServlet

在src下新建一个servlet:

![image-20221127223316315](./images/image-20221127223316315.png)

将下面代码复制进去:

```java
import org.thymeleaf.TemplateEngine;
import org.thymeleaf.context.WebContext;
import org.thymeleaf.templatemode.TemplateMode;
import org.thymeleaf.templateresolver.ServletContextTemplateResolver;

import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class ViewBaseServlet extends HttpServlet {

    private TemplateEngine templateEngine;

    @Override
    public void init() throws ServletException {

        // 1.获取ServletContext对象
        ServletContext servletContext = this.getServletContext();

        // 2.创建Thymeleaf解析器对象
        ServletContextTemplateResolver templateResolver = new ServletContextTemplateResolver(servletContext);

        // 3.给解析器对象设置参数
        // ①HTML是默认模式，明确设置是为了代码更容易理解
        templateResolver.setTemplateMode(TemplateMode.HTML);

        // ②设置前缀
        String viewPrefix = servletContext.getInitParameter("view-prefix");

        templateResolver.setPrefix(viewPrefix);

        // ③设置后缀
        String viewSuffix = servletContext.getInitParameter("view-suffix");

        templateResolver.setSuffix(viewSuffix);

        // ④设置缓存过期时间（毫秒）
        templateResolver.setCacheTTLMs(60000L);

        // ⑤设置是否缓存
        templateResolver.setCacheable(true);

        // ⑥设置服务器端编码方式
        templateResolver.setCharacterEncoding("utf-8");

        // 4.创建模板引擎对象
        templateEngine = new TemplateEngine();

        // 5.给模板引擎对象设置模板解析器
        templateEngine.setTemplateResolver(templateResolver);

    }

    protected void processTemplate(String templateName, HttpServletRequest req, HttpServletResponse resp) throws IOException {
        // 1.设置响应体内容类型和字符集
        resp.setContentType("text/html;charset=UTF-8");

        // 2.创建WebContext对象
        WebContext webContext = new WebContext(req, resp, getServletContext());

        // 3.处理模板数据
        templateEngine.process(templateName, webContext, resp.getWriter());
    }
}
```

其中,我们主要使用的就是`processTemplate`这个方法,它会帮我们来资源的转发,模板的渲染

- 3.在web.xml中添加配置

在web.xml中配置上下文参数:

```xml
    <!--配置上下文参数-->
    <context-param>
        <param-name>view-prefix</param-name>
        <param-value>/</param-value>
    </context-param>
    <context-param>
        <param-name>view-suffix</param-name>
        <param-value>.html</param-value>
    </context-param>
```

其中`prefix`是配置前缀,`suffix`是配置后缀

- 4.使我们的servlet继承ViewBaseServlet

把我们将要使用的servlet继承改为:

```java
public class servlet extends ViewBaseServlet {}
```

然后使用`super.processTemplate("index", req, resp);`来转发这个servlet,所以这里完整代码为:

```java
package com.guigu.fruit.servlets;

import com.guigu.fruit.dao.FruitDAO;
import com.guigu.fruit.dao.impl.FruitDAOImpl;
import com.guigu.fruit.pojo.Fruit;
import com.guigu.myssm.myspringmvc.ViewBaseServlet;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.util.List;

@WebServlet("/index")
public class servlet extends ViewBaseServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        FruitDAO fruitDao = new FruitDAOImpl();
        List<Fruit> fruitList = fruitDao.getFruitList();
        //保存到session作用域
        HttpSession session = req.getSession();
        session.setAttribute("fruitList", fruitList);
        //把保存的session展示在html中
        //处理模板
        //此处的处理模板是 index 那么,thymeleaf会将它对应的逻辑视图名称对应到物理视图名称上去
        super.processTemplate("index", req, resp);
    }
}
```

html:

```html
<html xmlns:th="http://www.thymeleaf.org">
<head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="css/index.css">
</head>
<body>
<div id="div_container">
    <div id="div_fruit_list">
        <p class="center f30">欢迎使用水果库存后台管理系统</p>
        <table id="tbl_fruit">
            <tr>
                <th class="w20">名称</th>
                <th class="w20">单价</th>
                <th class="w20">库存</th>
                <th>操作</th>
            </tr>
            <tr th:if="${#lists.isEmpty(session.fruitList)}">
                <td colspan="4">对不起，库存为空！</td>
            </tr>
            <tr th:unless="${#lists.isEmpty(session.fruitList)}" th:each="fruit : ${session.fruitList}">
                <td th:text="${fruit.fname}">苹果</td>
                <td th:text="${fruit.price}">5</td>
                <td th:text="${fruit.fcount}">20</td>
                <td><img src="imgs/del.jpg" class="delImg"/></td>
            </tr>
        </table>
    </div>
</div>
</body>
</html>

```

> 注意:这里`<html xmlns:th="http://www.thymeleaf.org">`加上后会有提示

这里请求`http://localhost:8080/index`会直接返回渲染好的index页面

### 3.内置对象

#### 1.概念

所谓内置对象其实就是在表达式中**可以直接使用**的对象

#### 2.基本内置对象

![](./images/img021.98446d22.png)



