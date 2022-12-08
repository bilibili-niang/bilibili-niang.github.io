#### 设置自定义默认进入页面:



如图:

![image-20221108145100765](./images/image-20221108145100765.png)

想要默认进入自己指定的页面,可以在tomcat的web.xml中配置

或者也可以在自己项目的web.xml中配置:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<web-app xmlns="http://xmlns.jcp.org/xml/ns/javaee"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/javaee http://xmlns.jcp.org/xml/ns/javaee/web-app_4_0.xsd"
         version="4.0">

    <welcome-file-list>
        <welcome-file>index.html</welcome-file>
        <welcome-file>index.jsp</welcome-file>
        <welcome-file>index.action</welcome-file>
    </welcome-file-list>

</web-app>
```

其中`<welcome-file-list>`标签内容就是配置进入的默认页面

#### 注意默认页面的路径问题:

![image-20221108145342891](./images/image-20221108145342891.png)

需要在web的目录下,否则找不到



