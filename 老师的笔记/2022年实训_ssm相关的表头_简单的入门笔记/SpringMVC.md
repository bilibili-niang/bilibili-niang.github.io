tomcat默认WEB-INF目录是用来保存jar包和核心配置文件的，所以不允许外界访问WEB-INF目录



# SpringMVC

### 1.处理器映射器

处理器映射器可以理解为一个Map<URL,Handler>,HandlerMapping负责根据用户请求的URL找到对应的Handler(处理器)

### 2.处理器适配器

处理器适配器的作用是根据处理器映射器找到的Handler信息，去执行相关的Handler。不同的处理器映射出来的Handler对象时不一样的。不同的映射由不同的适配器来解析。

### 3.视图解析器

视图解析器进行视图解析时，将逻辑视图名解析成物理试图名，即具体的页面地址，再生成View视图对象返回。



### 4.前端控制器

DispatcherServlet用于拦截所有的请求



## SpringMVC工作流程

前端发送请求------》  前端控制器DispatherServlet拦截-------》处理器映射器HandlerMapping----》DispatherServlet -----》处理器适配器------》处理器Handler-----》数据响应回处理器是配置-----》数据返回到前端控制器-------》通过视图解析器处理视图和数据-------》将处理后的视图返回到DispatherServlet----》返回到前端页面

​																	

### 步骤：

1.浏览器向服务器发送请求，请求被前端控制器(DispatcherServlet)拦截。

2.DispatcherServlet拦截请求后，调用处理器映射器(HandlerMapping)。

3.HandlerMapping根据请求的URL找到具体的处理器（其实就是Controller），生成处理器对象以及处理器拦截器，一起返回给DispatcherServlet

4.DispatcherServlet通过HandlerMapping返回的信息选择处理器适配器(HandlerAdapter)

5.HandlerAdapter调用并执行处理器(Handler,也就是Controller)

6.Controller执行后，返回一个ModelAndView对象给HandlerAdapter ，包含有视图名和模型

7.HandlerAdapter 拿到ModelAndView再返回给DispatcherServlet 

8.DispatcherServlet 通过视图解析器(InternalResourcesViewResolver)将 ModelAndView解析成视图

9.InternalResourcesViewResolver将视图对象返回给DispatcherServlet 

10.DispatcherServlet 将视图渲染后返回给浏览器



## 常用注解

### @Controller

添加在类上方，告诉spring这是表现层,也就是处理器类



### @RequestMapping

1.标注在方法上时，用于映射该方法的请求路径

2.标注在类上时，在请求该类中的方法时，需要加类上@RequestMapping中的请求路径

#### @RequestMapping注解中的属性

value ： 值可以为单个，或者数组。表示请求1个或者多个请求路径

​	value = "/hehe"  表示单个请求路径

​	value = {"/hehe","/hh"}  表示多个请求路径



method：决定允许访问的请求方法

​	method = RequestMethod.POST  只允许post请求来调用该方法

​	method = RequestMethod.GET

​	method = RequestMethod.DELETE

​	method = RequestMethod.PUT



params：  规定请求中必须携带的参数

​	params = "username" 单个参数

​	params = {"username","password"} 多个参数



headers ：指定请求中必须包含有哪些请求头的值，才可以执行。

consumes： 指定请求中的提交内容类型。 例如可以规定内容必须为application/json

produces：指定返回的内容类型



以下四个注解与RequestMapping的作用类似，只不过分别表明了支持的请求类型

### @GetMapping  

支持Get请求  

### @PostMapping

支持post请求    通过表单提交

### @PutMapping   

支持put请求   ，通过表单提交

### @DeleteMapping

支持delete请求    通过表单提交

