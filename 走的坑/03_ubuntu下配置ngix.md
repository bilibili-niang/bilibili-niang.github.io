#### 常用命令

```shell
#开启nginx服务
service nginx start

#或者
sudo systemctl start nginx.service

#查看nginx状态
service nginx status

sudo systemctl status nginx.service

#停止nginx服务
service nginx stop
sudo systemctl stop nginx.service

#重启nginx服务
service nginx restart

sudo systemctl restart nginx.service

#查看ngix服务状态
systemctl status nginx.service

# 修改配置文件之后重新加载：
sudo nginx -s reload

#检查是否有问题
nginx -t

```

php：

```shell
# 启动
 service php8.1-fpm start
 service php8.1-fpm reload

# 停止
service php8.1-fpm stop

# 重启
service php8.1-fpm restart 

# 重载
 service php8.1-fpm reload 
 
 #查看状态
 systemctl status  php8.1-fpm
 # 或：
 systemctl status php8.1-fpm.service
```





#### 配置文件：

ubuntu下，https的配置文件在：

`/etc/nginx/sites-available/default`中

nginx中的配置：

```shell
server {
    listen       80; #监听80端口，接收http请求
    server_name  www.example.com; #就是网站地址
    root /usr/local/etc/nginx/www/your_project; # 准备存放代码工程的路径
    #路由到网站根目录www.example.com时候的处理
    location / {
        index index.php; #跳转到www.example.com/index.php
        autoindex on;
    }  
    #当请求网站下php文件的时候，反向代理到php-fpm
    location ~ \.php$ {
        fastcgi_split_path_info ^(.+\.php)(/.+)$;
        fastcgi_pass 127.0.0.1:9000;#nginx fastcgi进程监听的IP地址和端口
        #fastcgi_pass unix:/run/php/php7.2-fpm.sock;
        fastcgi_index index.php;
        include fastcgi_params;
    }
}

```



> 查看指定端口：

```shell
netstat -ap | grep 80
```

