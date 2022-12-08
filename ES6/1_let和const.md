ES6 ->ECMA标准
ES的进化:

↓<br>
js<br>
↓<br>
ES7,ES8<br>
↓<br>
ES5.x<br>
↓<br>
ECMA-262 -> ES1.0<br>
↓<br>
ES2015 ->ES6<br>
↓<br>
每年六月份发布一个版本<br>
↓<br>
ESnext:'下一代js语言'

---

关于定义(声明)变量:<br>
>之前 : 
>>var a=12;<br> 
>>
>>作用域:<br>
>>全局<br>
>>函数作用域<br>


>>现在 : <br>
>>let    相当于之前的var<br>
>const  常量,定义好了不能再改变<br>
>
>>let 注意:<br>
>>1.没有预解析,不存在变量提升<br>
>>在代码块内,只要let定义变量,在之前使用,都会报错<br>
>>必须先定义完了再使用,如:
>>```html
>><!--补充:-->
>><script >
>>let a=12;
>>function fn(){
>>    alert(a)//TDZ暂时性死区
>>    let a=5;//TDZ结束
>>}
>>fn();
>></script>
>>```
>>2.在同一个作用域里不能重复定义变量<br>
>>3.for 循环,for循环里面是父级作用域,里面又一个
>
>>const:特性和let一样<br>
>>const定义的变量无法修改,是常量<br>
>>const定义完变量,必须有值,不能后赋值<br>
>
>
>>块级作用域: {  }<br>
>>if , for , while等的{ }内的代码块
