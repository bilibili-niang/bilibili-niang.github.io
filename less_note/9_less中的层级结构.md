* 如果在某一选择器的 {} 中直接写上了其他的选择器,会自动转换成后代选择器,如:
```less
.father{
  .son{
  
  }
}
```
此时编译为css就是(好像这个有点废话了):
```css
.father .son{

}
```

* & 的作用是,告诉less在转换时,不要用后代来转换,直接拼接在当前选择器的后面即可
例如:
```less
.father {
  width: 300px;
  height: 300px;
  background: red;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  .son {
    &:hover {
      background: skyblue;
    }
    width: 200px;
    height: 200px;
    background: blue;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
```
编译的css:
```css
.father {
  width: 300px;
  height: 300px;
  background: red;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.father .son {
  width: 200px;
  height: 200px;
  background: blue;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.father .son:hover {
  background: skyblue;
}
```
此时符合我们的预期效果:鼠标hover到son上面变颜色,hover在father上不会改变<br>
那么来看下less代码son中的hover如果前面不加 `&` 有啥效果

less
```less

.father {
  width: 300px;
  height: 300px;
  background: red;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  .son {
    // 如果此时的 hover 前面不加 & ,那么转换成css时,会将hover样式添加给 father 和 son,
    // 但是在浏览器中 hover 并不起作用
    :hover {
      background: skyblue;
    }

    width: 200px;
    height: 200px;
    background: blue;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
```
编译的css:
```css
.father {
  width: 300px;
  height: 300px;
  background: red;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
.father .son {
  width: 200px;
  height: 200px;
  background: blue;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.father .son :hover {
  background: skyblue;
}
```
此时发现,你hover哪个都不变,不符合预期效果

 `&`还是很好用的,其他用法可以查看 [这位老哥](https://blog.csdn.net/AV_woaijava/article/details/106353298?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522160718045919215668840218%2522%252C%2522scm%2522%253A%252220140713.130102334.pc%255Fall.%2522%257D&request_id=160718045919215668840218&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~first_rank_v2~rank_v29-2-106353298.first_rank_v2_pc_rank_v29&utm_term=less%E4%B8%AD&spm=1018.2118.3001.4449) 的博客 

使用 & 提哦按家子元素:
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
    <style>
        * {
            margin: 0;
            padding: 0;
        }
    </style>
    <link rel="stylesheet" href="css/12_2.css">
</head>
<body>
<div class="father">
    <!--    <div class="son"></div>-->
</div>
</body>
</html>
```
less:
```less
.father {
  width: 300px;
  height: 300px;
  background: red;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /*  .son {
      &:hover {
        background: skyblue;
      }

      width: 200px;
      height: 200px;
      background: blue;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }*/
  &::before {
    content: "子元素";
    display: block;
    background: #b32323;
    width: 100px;
    height: 100px;
  }
}
```

