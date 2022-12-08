### 继承关系:

#### servlet下的继承关系:



>  servlet (javax.servlet.Servlet接口)
>
> > GenericServlet抽象类 (javax.servlet.GenericServlet抽象类)
> >
> > > HttpServlet抽象子类 (javax.servlet.http.HttpServlet)



#### 相关方法:

javax.servlet.Servlet接口:

> void init (config) - 初始化方法
>
> void service(request,response) - 服务方法
>
> void destory() - 销毁方法

 javax.servlet.GenericServlet抽象类:

​	void service(request,response) - 依然是抽象的

javax.servlet.http.HttpServlet 抽象子类:

​	void service(request,response) - 不是抽象的

 1. String method = req.getMethod(); 获取请求的方式不是抽象的

 2. 根据请求方式不同,去调用不同的do方法

    ```java
    for(int i = 0; i < methods.length; ++i) {
        Method m = methods[i];
        if (m.getName().equals("doGet")) {
            ALLOW_GET = true;
            ALLOW_HEAD = true;
        }
    
        if (m.getName().equals("doPost")) {
            ALLOW_POST = true;
        }
    
        if (m.getName().equals("doPut")) {
            ALLOW_PUT = true;
        }
    
        if (m.getName().equals("doDelete")) {
            ALLOW_DELETE = true;
        }
    }
    ```

 3. 在HttpServlet中,都方法都差不多

    ```java
    protected void doDelete(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
            String msg = lStrings.getString("http.method_delete_not_supported");
            this.sendMethodNotAllowed(req, resp, msg);
        }
    ```

    小结:

    ​	1.继承关系:HttpServlet -> GenericeServlet -> Servlet

    ​	2.Servlet中的核心方法:init(),service(),destory()

    ​	3.服务方法:当有请求过来时,service方法会自动响应(其实是tomcat容器调用的).在HttpServlet中我们会去分析请求的方式:到底是get,post,head还是delete等等,然后再去决定调用的是哪个do开头的方法.那么在HttpServlet中这些都方法默认都是405的实现风格,要我们子类去实现对应的方法,否则会去执行父类的方法

    ​	4.因此我们在新建Servlet时,我们才会去考虑请求方法,从而决定重写哪个do方法

    

    











