### Tomcat解压后目录:

bin:可执行文件 (startup.bat shutdown.bat)

conf:配置文件 (server.xml)

lib:tomcat依赖的jar包
log:日志文件 (记录错误等信息)

temp:临时文件

webapps:可执行的项目(将我们开发的项目 放入该目录)

work:存放由JSP翻译成的java,以及编译成class的文件 (jsp -> java -> class)

---

### 配置tomcat

a.必须配置jdk (必须配置JAVA_HOME)

java_home classPath path

b.配置catalina_home

双击bin/startup.bat启动tomcat,

常见错误:可能与其他服务的端口号冲突

tomcat端口号默认8080(此端口号较为常见,容易冲突),建议修改此端口号(8888)

修改端口号:

conf > server.xml

![Alt](
images/1.png
)

---

访问Tomcat:

启动之后,用浏览器访问:


```html

http://localhost:8888/

```

    
默认访问的是:

D:\plugins\apache-tomcat-8.5.57\webapps\examples 下的index.html

常见状态码:

200:一切正常

404:资源不存在

403:权限不足(如果访问a目录,但是a目录设置不可见)


3xx:

300/301:页面重定向问题(跳转)

500:服务器内部错误(代码有误)

其他编码:自己积累

---

### JSP:

在html中嵌套了java代码

访问项目时,它会有默认的访问文件,如果要更改:

更改项目下的web.xml配置文件:

在:

```html
  <description>
     Welcome to Tomcat
  </description>
```

在项目的WEB-INF目录下的web.xml配置项目访问的默认页面

```html
    <!--初始页面设置:-->
    <welcome-file-list>
        <welcome-file>index.html</welcome-file>
        <welcome-file>index.xhtml</welcome-file>
        <welcome-file>index.htm</welcome-file>
        <welcome-file>index.jsp</welcome-file>
    </welcome-file-list>
```

welcome-file-list标签中修改,它会依次查找是否有该文件,如果没有,会报错

---

### 虚拟路径:

a.方式一:

将web项目配置到webapps以外的目录

在路径:conf > server.xml中配置

在Engine标签中修改,在</Host>和</Engine>标签之间改,增加一个标签:

```jsp
<Contexe docBase="" path="" />

```

docBase是实际路径

path是相对路径(绝对路径 / 相对路径 ->相对于webapps,此处写绝对路径或先对路径)

需要重启

b.方式二:

在apache-tomcat-8.5.57\conf\Catalina\localhost中
新建 项目名.xml 文件,再在其中写:
无需重启

```jsp
<Contexe docBase="" path="" />
```


---

### 虚拟主机:

例如此处通过www.test.com访问本机

a.虚拟主机配置路径:
在tomcat的conf/server.xml中配置
在Host标签上新建一个Host标签:
例如:
```html
<Host appBase="Q:\tomcat\apache-tomcat-7.0.106\study\JspProject" name="www.test.com">
    <Context docBase="Q:\tomcat\apache-tomcat-7.0.106\study\JspProject" path="/"/>
</Host> 
```
此处appBase为项目名/项目地址

b.同时,还需要将Engine标签中的默认地址也改为name中的字段
例如:
```html
        <Engine name="Catalina" defaultHost="www.test.com">
```

c.为本机加个映射
路径:
C:\Windows\System32\drivers\etc
修改hosts文件
下图映射已添加:

![Alt](
images/2.png
)

此时访问时需要用的是
```html
www.test.com:8888
```

如果想要自己访问www.test.com就可以的话(不加端口号)需要更改之前8888的端口号为80,80为默认端口号
路径:apache-tomcat-7.0.106\conf下的server.xml
如图(已修改为80):
![Alt](
images/3.png
)

右侧为访问的html代码
访问:
![Alt](
images/4.png
)

流程:
www.test.com -->host找映射关系 -->server.xml找Engine的defaultHost -->通过"/"映射到Q:\tomcat\apache-tomcat-7.0.106\study\JspProject

了解下,开发一般不会用,配到这里我有点想哭



