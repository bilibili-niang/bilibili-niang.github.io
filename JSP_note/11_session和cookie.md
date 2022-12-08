
session(存储于服务端)

cookie(存储于客户端,不是内置对象):cookie是由服务端生成的,在发送给客户端保存,相当于本地缓存的作用

作用:提高访问服务端的效率,但是安全性较差

* cookie是由键值对组成
 
javax.servlet.http.Cookie<br>
public Cookie(String name,String value)<br>
String getName():获取name<br>
String getValue():获取value<br>
void setMaxAge(int expiry):最大有效期(秒)<br>
服务端准备Cookie:<br>
    response.addCookie(Cookie cookie)<br>
页面跳转(转发,重定向)<br>
页面获取cookie:request.getCookies();<br>
<br>
a.服务端增加cookie:response对象;客户端获取对象,request对象<br>
b.不能直接获取某一个单独cookie,只能一次性将全部的cookie拿到<br>

除了自己设置的cookie,还有一个name为JSESSIONID的cookie<br>

建议cookie中不要用中文和特殊符号,只放数字和英文,若有中文,需要进行编码处理

---

* JSESSIONID的由来:
每一个客户端浏览器在第一次访问该服务器时(先会查询并匹配JSESSIONID,如果不匹配,则会生成),服务器端会在服务器端生成一个唯一的sessionID(此时为session对象), <br>
服务器端会生成一个cookie,其name=JSESSIONID,value为sessionID,返回给客户端,客户端将其存储为cookie,用作服务器端识别身份的凭证


客户端第二次请求时,服务端会先用客户端cookie中的JSESSIONID,去服务端的session中匹配,如果匹配成功,则说明该用户不是第一次登陆




---

* #### session:会话:一次开始到一次结束

session的同一次会话共享


---

* * session实现机制:第一次客户请求时,产生一个sessionID并复制给cookie的jsessionid然后发给客户端,最终,通过session的sessionID实现一一对应

* #### session方法:<br>
##### String getId():获取sessionId

##### boolean isNew():判断是否是新用户(第一次访问)

##### void invalidate():使session失效(退出登录,注销)

##### void setAttribute():

##### Object getAttribute():

##### setMaxInactiveInterval(秒):设置最大有效非活动时间

##### getMaxInactiveInterval():获取最大非活动有效时间

---

cookie和session的区别:

| 比较 | session | coookie |
|-----|---------|---------|
| 保存的位置 | 服务端 | 客户端 |
| 安全性 | 较安全 | 较不安全 |
| 保存的内容 | Object | String |




