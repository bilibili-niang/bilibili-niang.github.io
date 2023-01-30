---
title: Bootstrap3代码模板

author: icestone
tags:
- Bootstrap

categories:  
  - 先放网址: Bootstrap中文网或者直接看3的文档:Bootstra3中文文档Bootstrap3下载链接:生产版,代码经过压缩代码未压缩版上代码模板:&lt;!DOCTYPE html&gt;&lt;html lang="zh-CN"&gt;&lt;head&gt;    &lt;meta charset="utf-8"&gt;    &lt;!--可以让部分国产浏览器默认采用高速模式渲染页面--&gt;    &lt;meta name="renderer" content=  

created: Thu Jul 30 2020 00:00:00 GMT+0800 (中国标准时间)
---
先放网址: [Bootstrap中文网](https://www.bootcss.com/)  
还有一个也是Bootstrap的:[逐浪官网](http://code.z01.com/)  
或者直接看3的文档:[Bootstra3中文文档](https://v3.bootcss.com/getting-started/#download)  
Bootstrap3下载链接:  
[生产版,代码经过压缩](https://github-production-release-asset-2e65be.s3.amazonaws.com/2126244/9c5b6db6-5245-11e6-800b-b1e5008b1179?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIWNJYAX4CSVEH53A%2F20200730%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20200730T143830Z&X-Amz-Expires=300&X-Amz-Signature=49b8bd5c5ca6950622d277cd4abb69eff10b2fe8c07405dc6bc415d699581c5c&X-Amz-SignedHeaders=host&actor_id=60811236&repo_id=2126244&response-content-disposition=attachment%3B%20filename%3Dbootstrap-3.3.7-dist.zip&response-content-type=application%2Foctet-stream)  
[代码未压缩版](https://codeload.github.com/twbs/bootstrap/zip/v3.3.7)

* * *

上代码模板:

    <!DOCTYPE html>
    <html lang="zh-CN">
    <head>
        <meta charset="utf-8">
        <!--可以让部分国产浏览器默认采用高速模式渲染页面-->
        <meta name="renderer" content="webkit">
        <!--为了让 IE 浏览器运行最新的渲染模式下-->
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <!--为了保证在移动端能够正常的显示-->
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>自己网页的标题</title>
        <!-- 导入Bootstrap的CSS文件 -->
        <link rel="stylesheet" href="bootstrap3/css/bootstrap.css">
    
        <!--导入respond.js文件的目的, 是为了能够在IE8以及IE8以下的浏览器中使用媒体查询-->
        <!--导入html5shiv.js文件的目的, 是为了能够在IE8以及IE8以下的浏览器中使用H5新增的标签-->
        <!--
        [if xxx] ![endif]这个是IE中的条件注释, 只有在IE浏览器下才会执行
        以下代码的含义: 如果当前是IE9以下的浏览器, 那么就导入以下的两个JS文件
        -->
        <!--[if lt IE 9]>
    <script src="js/html5shiv.js"></script>-->
        <script src="bootstrap3/js/html5shiv.js"></script>
        <script src="bootstrap3/js/respond.js"></script>
        <![endif]-->
    </head>
    <body>
    
    
    <!-- jQuery (Bootstrap 的所有 JavaScript 插件都依赖 jQuery，所以必须放在前边) -->
    <script src="bootstrap3/js/jquery-1.12.4.js"></script>
    <!-- 加载 Bootstrap 的所有 JavaScript 插件。你也可以根据需要只加载单个插件。 -->
    <script src="bootstrap3/js/bootstrap.js"></script>
    </body>
    </html>
    

我的代码路径(若是复制了代码记得改路径):  
![在这里插入图片描述](https://img-blog.csdnimg.cn/20200730224138997.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2ljZV9zdG9uZV9rYWk=,size_16,color_FFFFFF,t_70)

* * *

推荐直接复制模板,然后整个快捷键爽歪歪  
[查看如何设置代码模板](https://blog.csdn.net/ice_stone_kai/article/details/107702650)