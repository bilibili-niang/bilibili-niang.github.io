---
title: 集合-List-迭代修改报错

author: IceStone
created: '2019-12-07T13:36:24Z'
tags: Java基础

---

# 集合-List-迭代修改报错

(并发修改异常)

![](images/95c72174-62ea-4221-918a-da2bf26dc423.png)it.remove();是可以的


 
可以删除当前正在迭代的元素(正在遍历的元素next)

同样,在迭代时用

集合名称.add("元素");

也是不允许的

 
 
 
 
![](images/56079ea2-70d0-4004-80f6-00c7da5b4f56.png)  

![](images/d005e155-9402-4416-a040-f26ef16b9b17.png)  

![](images/5c1e18cd-101b-4326-a035-8e8955c4a492.png) 

