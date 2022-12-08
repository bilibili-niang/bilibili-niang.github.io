---
title: 操作BOM对象:

author: IceStone
created: '2020-04-14T12:05:29.322Z'
tags: JavaScript

---

# 操作BOM对象:

* BOM:浏览器对象模型
 
 
* window(重要):

    * window代表浏览器窗口:

* Navigator:

    * 封装了浏览器的信息:
    * 大多数时候不会使用因为navigate可以认为修改
    * 不建议这些属性来判断和编写代码

* screen:

    * 屏幕的尺寸
screen.width

1536

screen.height

864


* location(重要):

    * location代表当前对象的URL信息

        * host(主机),
        * href
        * ,protocal(协议),
        * reload: f reload()(重新加载,刷新),
        * location.assign('http"//blog.kuangstudy.com/')(设置新的地址)


* document:

    * 代表当前页面:HTML,DOM文档树
    * 可以获取具体的文档数节点
    * 获取cookie:
    * 劫持cookie原理:

        * <script src="aa.js"></script>
        * 恶意人员获取你的cookie,盗取你的cookie传到服务器上

    * 服务器端可以设置httpOnly,设置为只读

* history:代表浏览器的历史记录

    * history.back()//后退
    * history.forward())//前进

window.innerHeight

734

window.innerWidth

662

window.outerHeight

852

window.outerWidth

593

navigator.appName

"Netscape"

navigator.userAgent

"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.92 Safari/537.36 Edg/81.0.416.53"

navigator.platform

"Win32"

document.title

"微软 Bing 搜索 - 国内版"

document.title='ni hao'

"ni hao"

document.cookie

""

 
 
 
* 操作DOM节点:

    * 更新:更新DOM节点
    * 遍历DOM节点:得到DOM节点
    * 添加:添加一个DOM节点
    * 要操作一个DOM节点,就必须获得这个DOM节点

* 获得DOM节点:
 
* 更新节点:

    * 修改文本的值:

        * id1.innerText='456798';

    * 插入HTML:

        * id1.innerHTML='<strong>132</strong>'

    * 更改css属性:

        * id1.style.color='red';


* 删除节点:

    * 步骤:

        * 先获取父节点,再通过父节点删除自己

    * father.removeChild(p1);

        * p1.parentElement;(获取元素的父节点)

    * 注意:删除是一个动态的过程,(原有三个节点,依次删除)在时刻变化的

        * father.removeChild(father.children[0])
        * father.removeChild(father.children[1])
        * father.removeChild(father.children[2])


* 插入节点:

    * 我们获得了某个DOM节点,假如这个DOM节点是空的,我们可以通过innerHTML就可以增加一个元素,但是如果这个节点已经存在元素,再次添加就会覆盖
    * 追加:
    * 创建一个标签实现插入:
    * 插入到后面:
    * 插入到前面:
    *  


//对应css的选择器

varh1=document.getElementsByTagName('h1');

varp1=document.getElementById('p1');

varp2=document.getElementsByClassName('p2');

varfather=document.getElementById('father');

//获取父元素下的所有子节点

varchilderns=father.children;

//father.firstChild

//father.lastChild

* 这是原生代码,之后我们的使用jQuery
 
list.appendChild(js)

<p id=​"js">​JAVAScript​</p>​

 
varnewp=document.createElement('p');//创建一个p标签

newp.id='newp';

newp.innerText='helloworld';

list.appendChild(newp);

varee=document.getElementById('ee');

varjs=document.getElementById('js');

varlist=document.getElementById('list');

//要包含的节点:insertBefore(newNode,targetNode)

list.insertBefore(js,ee);

 
 
 
 
 
 
 
 
 
 
