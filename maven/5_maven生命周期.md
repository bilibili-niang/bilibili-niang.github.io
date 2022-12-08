* maven的生命周期:<br/>
> package <br/>
> resources <br/>
> compile <br/>
> test

> 生命周期和构建的关系<br>
假设有命令 : a b c d e<br>
当执行某一个命令时,它会将之前的命令全部执行一次<br>

生命周期包含的阶段:三个阶段(每个阶段有好多个组成元素)<br/>
> clean lifecycle: 清理
> > pre-clean clean post-clean

> default lifecycle: 默认(常用)

> site lifecycle: 站点<br/>
> > `pre-site`:执行一些需要在生成站点之前完成的工作<br/>
> `site`:生成项目的站点文档<br/>
> `post-site`:执行一些需要在生成站点文档之后完成的工作，并且为部署做准备<br/>
执行--些需要在生成站点文档之后完成的工作，并且为部署做准备<br/>

> site-deploy

---

依赖排除:
当我们通过maven引入`A.jar`时,它会自动引入它依赖的`B.jar`
如果有:
A.jar(x.jar,y.jar,z.jar) 和 B.jar(p.jar,c.jar,i.jar)
A.jar和B.jar之间的依赖本质:z.java->c.java
依赖排除是:引入A.jar而不引入B.jar

比如在使用`commons-fileupload.jar` 我们实际开发时认为二者jar必须关联,可maven可能不这么认为

要使用排除时,只需要在`pom.xml`中添加即可


依赖的传递关系:
如果A.jar依赖B.jar,B.jar依赖C.jar
要使A.jar依赖于C.jar,当且仅当B.jar依赖于C.jar的范围是compile

