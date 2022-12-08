---
title: 危险的SetUID

author: IceStone
created: '2020-02-02T09:45:24.051Z'
tags: Linux

---

# 危险的SetUID

* 关键目录应该严格控制写权限，比如：“/”,"/usr"等
* 用户的密码设置要严格遵守密码三原则
* 对希同中默认应该具有SetUID权限的文件作一列表，定时检查有没有这之外的文件被设置了SetUID权限
