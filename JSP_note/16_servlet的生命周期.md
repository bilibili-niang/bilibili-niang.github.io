#### 生命周期:

从出生到死亡的过程就是生命周期,对应servlet中的三个方法:init(),service(),destroy()

默认情况下:

#### 1.第一次接受请求时,这个servlet会被进行实例化,初始化,然后服务

#### 2.从第二次请求开始,每一次都是服务

#### 3.当容器关闭时,其中所有的servlet实例会被销毁,调用销毁方法

#### 4.servlet实例tomcat只会创建一个

所有的请求都是通过这个实例去响应的.默认情况下,tomcat才会去实例化,初始化.好处:提高启动速度.缺点:第一次请求时,耗时较长

​		得出结论:如果需要提高响应速度,我们应该设置servlet的初始时机:

#### 5.servlet的初始化时机:

​		默认是第一次接受请求时,实例化,初始化

​		我们可以通过修改web.xml中`load-on-startup`来修改其启动顺序:

```xml
    <servlet>
        <servlet-name>Demo02Servlet</servlet-name>
        <servlet-class>com.atguige.serlvlets.Demo02Servlet</servlet-class>
        <load-on-startup>1</load-on-startup>
    </servlet>
    <servlet-mapping>
        <servlet-name>Demo02Servlet</servlet-name>
        <url-pattern>/demo02</url-pattern>
    </servlet-mapping>
```

​		修改的值越小,启动顺序越靠前,尽量不要写负数

#### 6.servlet在单例,不安全

servlet在容器中是:单例的,线程不安全的

* 单例:

所有请求都是同一个实例去响应

* 线程不安全:

一个线程需要根据这个实例中的某个成员变量值去做逻辑判断,但是在中间某个时机,另一个线程改变了这个成员变量的值,从而导致了第一个线程的执行路径发生了变化

尽量不要在servlet中定义成员变量,如果不得不定义成员变量,那么不要去根据成员变量的值去做一些逻辑判断







