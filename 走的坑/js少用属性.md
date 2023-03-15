> clientHeight

实例
获取 div 元素的高度,包含内边距(padding):

```javascript
var elmnt = document.getElementById("myDIV");
var txt = "div 元素的高度，包含内边距（padding）: " + elmnt.clientHeight + "px<br>";
txt += "div 元素的宽度，包含内边距（padding）: " + elmnt.clientWidth + "px";
```

clientHeight 属性是一个只读属性，它返回该元素的像素高度，高度包含内边距（padding），不包含边框（border），外边距（margin）和滚动条，是一个整数，单位是像素 px。

clientHeight 可以通过 CSS height + CSS padding - 水平滚动条高度 (如果存在)来计算.

