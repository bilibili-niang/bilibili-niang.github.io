原理:  
![](images/img_8.png)  

> 在hadoop102中配置免密登录(按三次enter):  
> `ssh-keygen -t rsa`  
> 完成:  
> ![](images/img_9.png)  
> 然后查看这个目录,有一个私钥(上面的),和公钥(第二个)  
> ![](images/img_10.png)  
> 然后把私钥拷贝到hadoop103和hadoop104上:  
> `ssh-copy-id hadoop103`  
> then success:  
> ![](images/img_11.png)  
> 