### 统一请求的编码:request

请求的方式不一样,返回请求的编码也不一样<br>
### get方式请求出现乱码 解决:
##### a.统一每一个变量的编码<br>

new String(旧编码,新编码);例如:
```jsp    
name = new String(name.getBytes("iso-8859-1"), "utf-8");
```

Tomcat7的默认编码是iso-8859-1,如果文件中指定使用utf-8,会报错


##### b.一次性修改server.xml,一次性更改Tomcat默认编码(utf-8)
在Tomcat的server.xml中修改,在:
```jsp
    <Connector port="8080" protocol="HTTP/1.1"
               connectionTimeout="20000"
               redirectPort="8443" />
```
后面改,添加后为:

```jsp
    <Connector port="8080" protocol="HTTP/1.1"
               connectionTimeout="20000"
               redirectPort="8443" URIEncoding="UTF-8" />
```
## 注意,以上方法仅适用于get的请求方式

---

### post方式:
```jsp
    request.setCharacterEncoding("utf-8");
```




