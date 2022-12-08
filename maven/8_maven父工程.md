1.建立父工程,父工程的打包方式为pom


2.父工程的依赖需要写在`dependencyManagement`里面,不同于子项目

```xml

<dependencyManagement>
    <dependencies>
        <dependency>
            
        </dependency>
    </dependencies>
</dependencyManagement>
```

为当前工程继承一个父工程:
1.加入父工程gav
2.当前工程的pom文件到父工程pom文件的相对路径
```xml
<parent>
    
</parent>
```

