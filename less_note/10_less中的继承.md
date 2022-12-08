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
    <link rel="stylesheet" href="css/13.css">
</head>
<body>
<div class="father">
    <div class="son"></div>
</div>
</body>
</html>
```
less中如果不用继承:
```less
// 不使用继承:
.center {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.father {
  width: 300px;
  height: 300px;
  background: red;
  .center();
  .son {
    width: 200px;
    height: 200px;
    background: blue;
    .center();
  }
}
```

使用继承:
```less
.center {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
  width: 300px;
  height: 300px;
  background: red;
  .son:extend(.center) {
    width: 200px;
    height: 200px;
    background: blue;
  }
}
```
(我觉得两种代码都差不多,使用的时候我个人更习惯使用前者)
