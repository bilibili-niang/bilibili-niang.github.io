### maven中的配置

#### 使用这三个表示坐标;

```xml
    <groupId>org.spring.demo</groupId>
    <artifactId>springdemo</artifactId>
    <version>1.0-SNAPSHOT</version>
```

- `groupId`
- `artifactId`
- `version`

#### dependencies

> 使用`dependencies`表示当前工程的所有依赖

这些依赖在第一次使用时会去仓库下载jar包

#### packaging

设置打包方式,例如下面设置打包为war包:

```xml
<packaging>war</packaging>
```



#### `provided`

像是下面这个依赖:

```xml
 <!-- ServletAPI -->
        <dependency>
            <groupId>javax.servlet</groupId>
            <artifactId>javax.servlet-api</artifactId>
            <version>3.1.0</version>
            <scope>provided</scope>
        </dependency>
```

这里`scope`表示作用域,但这里写`provided`意思是,在项目打包为war包时,不用打包这个依赖,服务器中会提供的
