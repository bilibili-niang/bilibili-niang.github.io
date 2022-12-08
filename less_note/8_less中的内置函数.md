less中更支持一些js函数:
直接上html代码:
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
    <link rel="stylesheet/less" href="css/11.less">
    <script src="js/less.js"></script>
</head>
<body>
<div></div>
<script>
    /*
    由于less的底层就是用JavaScript实现的
    所以js中的一些常用函数在less中也支持
    但是有的方法只支持在node里面使用,不支持浏览器使用
    * */
    // 混杂方法
    /*image-size("file.jpg");*/ // =>100px 50px;

    // 数学

    /*
    ceil(2.1);// =>3 向上取整
    floor(2.1);// =>2 向下取整
    percentage(.3);// =>30% 转百分比
    round(1.67,1);// =>1.7 四舍五入,保留一位小数
    sqrt(25cm);// =>5cm 取平方根
    abs(-5cm);// => 5cm 取绝对值
    pi();// =>3.1415926...才圆周率 π
    max(3px,42px,1px,16px);// =>42px
    * */

    // 字符串
    /*
    replace("Hi Tom?","Tom","Jack"); //=> "Hi Jack"
    * */

    // 判断类型
    /*
    isnumber(56px);//=>true 是否含数字
    * */

    //颜色操作
    /*
    增加饱和度
    saturate(color,20%);
    减少饱和度
    desaturate(color,20%);
    增加亮度
    lighten(color,20%);
    减少亮度
    darken(color,20%);
    减低透明度
    fadein(color,10%^);
    * */

    //颜色混合
    /*
    每个RGB通道相乘,然后除以255
    * */
</script>
</body>
</html>
```
less:
```less
@str: "images/1.png";
// 字符串替换
@str2: replace(@str, "1", "2");

div {
  width: 200px;
  height: 200px;
  //background: url(@str2);
  // 降低颜色饱和度
  background: desaturate(yellow, 90%);
}

div:hover {
  // 增加颜色饱和度
  background: saturate(yellow, 90%);
}

```