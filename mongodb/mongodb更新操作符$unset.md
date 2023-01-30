---
title: mongodb更新操作符$unset

author: icestone
tags:
- mongodb
- 前端
- mongodb
- 数据库
- database

categories:  
  - mycodedb.person.find()//这里要删除ls的score字段,随便给一个值即可db.person.update({‘name’:‘ls’},{$unset:{‘score’:’’}})//注意:如果使用unset删除某一个字段,那么后面赋值为任何内容都不重要//删除文档字段中的字段db.person.update({name:‘ww’},{$unset:{‘book.price’:’’}})//删除数组字段中的元素,//这里删除中间的元素并不会修改它的长度,只会填为nu.  

created: Tue Mar 01 2022 00:00:00 GMT+0800 (中国标准时间)
---
> `mycode`

db.person.find()  
//这里要删除ls的score字段,随便给一个值即可  
db.person.update({‘name’:‘ls’},{$unset:{‘score’:’’}})

//注意:如果使用unset删除某一个字段,那么后面赋值为任何内容都不重要

//删除文档字段中的字段  
db.person.update({name:‘ww’},{$unset:{‘book.price’:’’}})  
//删除数组字段中的元素,  
//这里删除中间的元素并不会修改它的长度,只会填为null

> 下面的语句中删除目标删除tags的第三个str,但是在v5.0.1版本的mongodb中,它是只会以键值对的方式添加和删除  
> 例如:  
> \[外链图片转存失败,源站可能有防盗链机制,建议将图片保存下来直接上传(img-asvCXLLx-1646140114874)(/images/hBQJ2\_G1gdUj8en9ix\_Ws7WF.png)\]

    db.person.update({name:'ww'},{$unset:{'tags.3':''}})
    

结果:  
![[外链图片转存失败,源站可能有防盗链机制,建议将图片保存下来直接上传(img-Rdd5quzM-1646140114875)(/images/EUKbTaT9q5lwkseGhvjR1K0a.png)]](https://img-blog.csdnimg.cn/75d54b25090643f6a9263ff03d0d1bb5.png)

> 注意这里可能有误,一个tags是对象,一个tags是数组,我只是和老师的不一样,记一下

> `teacher's code`

1.$unset更新操作符  
KaTeX parse error: Expected '}', got 'EOF' at end of input: …et: 删除字段 格式 :{unset:{:’’, …}}

2.示例:  
// 删除普通字段  
db.person.update({name:‘ls’}, {KaTeX parse error: Expected 'EOF', got '}' at position 17: …nset:{score:''}}̲) // 注意点: 如果使用unset删除某一个字段, 那么后面赋值为任何的内容都不重要  
db.person.update({name:‘ls’}, {$unset:{age:‘www.it666.com’}})

// 删除文档字段中的字段  
db.person.update({name:‘ww’}, {KaTeX parse error: Expected 'EOF', got '}' at position 25: …ook.price': ''}}̲) // 删除数组字段中的元素…unset:{‘tags.1’: ‘’}})

3.注意点:  
3.1删除数组元素并不会影响数组的长度, 而是设置为Null  
3.2如果删除的字段不存在, 不会做任何操作