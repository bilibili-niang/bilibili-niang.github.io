```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <!--模型自带的版本号,不用管-->
    <modelVersion>4.0.0</modelVersion>
    <!--
    下面三个被称为gav
    用以生成坐标,在本地生成唯一标识
    <groupId>域名翻转.大项目名</groupId>
    <artifactId>子模块名</artifactId>
    <version>版本编号</version>
    -->
    <groupId>org.example</groupId>
    <artifactId>maven</artifactId>
    <version>1.0-SNAPSHOT</version>

    <!--name:名字,一般和模块名是一致的-->
    <name>maven</name>

    <!--依赖-->
    <!--
    在maven项目中,如果要使用一个当时存在的jar或模块,则可以通过依赖实现(去本地仓库,中央仓库去寻找)
    -->
    <dependencies>
        <dependency>
            <groupId>junit</groupId>
            <artifactId>junit</artifactId>
            <version>4.0</version>
            <!--控制依赖的范围
            值有:compile、test、provided、runtime、system、import
            -->
            <scope>test</scope>
        </dependency>
    </dependencies>


    <!--
    该属性下用户自定义一个或多个maven属性,减少maven配置的重复更方便了maven项目的统一管理
    -->
    <properties>
        <maven.compiler.source>8</maven.compiler.source>
        <maven.compiler.target>8</maven.compiler.target>
    </properties>

    <!--排除依赖关系:-->
    <!--排除beans-->
    <exclusions>
        <exclusion>
            <groupId>org.springframework</groupId>
            <artifactId>spring-beans</artifactId>
            <version>4.3.13.RELEASE</version>
        </exclusion>
    </exclusions>
</project>
```

关于

控制依赖的范围
值有:compile、test、provided、runtime、system、import,可以看这位老哥的[文章](https://blog.csdn.net/seasonsbin/article/details/79093647)