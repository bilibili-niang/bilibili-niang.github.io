* maven的作用:

>a.管理jar
>>i.增加第三方jar(commons-fileupload.jar commons-io.jar)<br/>
ii.管理jar包之间的一览关系(例如当你告诉了使用`commons-fileupload.jar`,它发现这个包依赖于`commons-io.jar`时,它会自动下载依赖关联的所有jar,并且不会冲突)<br/>

>b.将项目拆分成若干个模块
>>当一个项目有`UI`,`Service`,`Dao`层,并且每层代码很多时,maven可以将这三个层拆分为模块,同时可以将多个模块(/项目)合并为一个项目

>c.maven的概念:
>>它是一个基于java平台的自动化构建工具(make->ant->maven->gradle)<br/>
maven可以:清理
* 编译,
* 测试,
* 报告,
* 打包
* 安装
部署
