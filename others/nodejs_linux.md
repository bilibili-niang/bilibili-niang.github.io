> 查看所有窗口

screen -ls

> 切换到目标窗口

screen -r 窗口号

> 切换到目标窗口,若没有,则会新建一个

screen -R 窗口号

> 强制杀死端口号/窗口号

kill -9 端口号/窗口号

> 查看哪个程序占用了80段口:

 netstat -lnp|grep 80

> 重启mysql服务(通过rpm包安装的MySQL):

service mysqld restart

