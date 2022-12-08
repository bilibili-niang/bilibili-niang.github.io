* ### less中可以进行一些新增css3中的运算

html:
```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="utf-8">
    <meta name="renderer" content="webkit">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title></title>
    <!--<style>
        * {
            margin: 0;
            padding: 0;
        }
        // 使div元素水平居中
        div {
            // 一:
            width: 200px;
            height: 200px;
            background: blue;
            position: absolute;
            left: 50%;
            /*弊端:不利于编码,需要口算宽度的一半*/
            /*margin-left: -100px;*/

            // 二:
            /*弊端:transform是新增属性,有的浏览器不支持,所以不利于兼容,有一说一我觉得一般用的浏览器都兼容了吧*/
            /*transform: translateX(-50%);*/

            //三:
            /*在css3中新增了一个cala()函数,可以实现简单的运算*/
            /*弊端:css3新增的,有的不支持*/
            /*margin-left: calc(-200px / 2);*/
            /*margin-left: calc(-200px / 0.5);*/
        }
    </style>-->
    <link rel="stylesheet" href="css/05.css">
</head>
<body>
<div>
    
</div>
</body>
</html>
```
less代码实现:
```less
div {
  width: 200px;
  height: 200px;
  background: blue;
  position: absolute;
  left: 50%;
  /*less中新增的运算和css3中新增的运算一样,的支持+ - * / 运算*/
  /*运算时要添加单位*/
  margin-left: calc(-200px * 0.5);
}
```





















