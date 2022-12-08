* less中可以通过when混合添加执行限定条件,只有条件满足(为真)才会执行混合中的代码<br>
when表达式中可以使用比较运算符(> < >= <= =),逻辑运算符,或检查函数来进行条件判断
```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="utf-8">
    <meta name="renderer" content="webkit">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title></title>
    <style>
        * {
            margin: 0;
            padding: 0;
        }
    </style>
    <link rel="stylesheet" href="css/14.css">
</head>
<body>
<div></div>
</body>
</html>
```
less:
```less
/*
less中可以通过when混合添加执行限定条件,只有条件满足(为真)才会执行混合中的代码
when表达式中可以使用比较运算符(> < >= <= =),逻辑运算符,或检查函数来进行条件判断
*/

/*.size(@width,@height) when (@width=100px) {
  width: @width;
  height: @height;
}*/

//() , () 就相当于js中的逻辑 或
//()and() 就相当于js中的逻辑 与

// 只有宽度为100或者高度为100,才会执行编译
/*.size(@width,@height) when (@width=100px), (@height=100px) {
  width: @width;
  height: @height;
}*/

//使用js内置函数进行判断:
// 只有传入单位是px,参会执行混合代码
.size(@width,@height) when (ispixel(@width)) {
  width: @width;
  height: @height;
}

div {
  .size(100px, 400px);
  background: red;
}
```



