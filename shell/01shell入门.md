#### helloworld.sh

sh文件开头可以指定使用的解析器:

如下面的`hello.sh`

```shell
#!/bin/sh

# 这是一行注释
```

创建一个文件:

```shell
[icestone@localhost scripts]$ touch hello.sh
```

尝试执行:

##### 1.直接sh:

```shell
[icestone@localhost scripts]$ ll
总用量 4
-rw-rw-r--. 1 icestone icestone 19 Nov  5 07:02 hello.sh
[icestone@localhost scripts]$ sh hello.sh 
hello world!
```

也可以使用:`bash hello.sh `

在执行脚本时,一般不用这样,

##### 2.直接输入脚本的绝对路径/相对路径:

```shell
[icestone@localhost scripts]$ /home/icestone/scripts/hello.sh
hello world!
[icestone@localhost scripts]$ 
```

但是在script目录下是无法直接`hello.sh`执行文件的,会把heello.sh当作一个命令,但是可以:

```shell
[icestone@localhost ~]$ ./scripts/hello.sh 
hello world!
[icestone@localhost ~]$ pwd
/home/icestone
[icestone@localhost ~]$ 
```

在script的父目录下使用相对路径来执行

##### 3.使用source执行:

这里使用相对/绝对路径都可以

```shell
[icestone@localhost scripts]$ source hello.sh 
hello world!
[icestone@localhost scripts]$ 
```

也可以:

```shell
[icestone@localhost scripts]$ . hello.sh 
hello world!
```









