* 1.下载配置maven
>> [官网](http://maven.apache.org/download.cgi) ,[下载链接](https://mirror.bit.edu.cn/apache/maven/maven-3/3.6.3/binaries/apache-maven-3.6.3-bin.tar.gz) <br/>
> > a.配置`JAVA_HOME`<br/>
> b.配置`MAVEN_HOME` / `M2_HOME`<br/>
> c.将maven中的bin配置到path: %MAVEN HOME%\bin<br/>
> d.检验:命令行下输入`mvn -v`:<br/>
> ![](images/1.png)<br/>
> e.配置本地仓库:<br/>
> > 本地仓库需要在maven文件下的`conf`中的`seeting`中修改(默认值是:`${user.home}/.m2/repository`):<br/>
> 修改本地仓库,把圈起来的东西抄出来就行了:<br/>
> > ![](images/2.png)<br/>
> 修改后如图:<br/>
> ![](images/3.png)<br/>
>

* 2.使用maven:<br/>
>> 软件开发原则:约定 优于 配置<br/>
> >> 1.硬编码方式: job.setPath("d:\abc"")<br/>
>  2.配置方式:job 下写`conf.xml`<path>d:\abc</path><br/>
>  3.约定方式(使用默认值)<br/>
> 
>> maven约定结果目录:<br/>
>>> 执行项目去`main`中找,测试项目去`test`中找<br/>
> ![](images/4.png)<br/>
> 其中`maven_1`为模块名,<br/>
> `main`放主程序代码,<br/>
> `test`放测试代码,<br/>
> `resources`放资源代码/配置代码,<br/>
> `pom.xml`:项目对象模型<br/>

---

* maven的仓库:<br/>
> 本地仓库:<br/>
> 远程仓库:<br/>
> > 中央仓库<br/>
> 中央仓库镜像(对中央仓库的分流)<br/>
> 私服nexus<br/>
