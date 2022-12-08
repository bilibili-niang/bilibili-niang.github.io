---
title: 常用类_system12月1号

author: IceStone
created: '2019-11-30T16:05:34Z'
tags: Java基础

---

# 常用类_system12月1号

![章 节 
18 常 用 ](images/45ea8c7d-f45e-43f2-91fb-3c77bdb23e86.png) 

主要讲系统中常用的方法(系统已经提供了很多我们可以直接使用的方法)

![system 
S'iSTEH 
SystenCoIor 
Sys tenException 
Systenyl avorHap 
SystenTray 
Tababl eviev 
TabbecFaneU1 
T abE ander 
compactl compact2. compact3 
java lang 
Class Object 
java. lang _ Object ](images/2dd37613-fd2f-4bd5-93ca-41481a4863b7.png)system使用是不需要导入的,它属于java,long的包,可以直接使用,为私有化的,不可创建对象


常用类一般都不允许创建对象,都私有化了构造器

System.out.println();

System的复制代码的一个方法

其中System.arrayscopy(数组A,从A的哪一位开始复制,数组B,从B的哪一位开始粘贴,从A中复制的长度);

![package ; 
import java. util. Arrays; 
public class try_l { 
public static void main(StringC] args) { 
int C] 
int C] desc=new int CIO]; 
System.arraycopy(src, srcPos: 2 ,desc, destPos: 2, length: 4) ; 
System . out . pri ntln (Arrays . toString (desc) ) ; ](images/cb954890-80c9-40ea-865c-a2ce90b433b2.png)输出结果:


![[ 0 ， 0 ， 3 ， 4 ， 5 ， 6 ， 0 ， 0 ， 0 ， 0 ] 
进 程 已 结 束 ， 退 出 代 码 @ ](images/5e5ebbe7-e2e4-4715-b9eb-ca4e20e038cc.png)Arrays.toString();


为遍历数组中的所有元素

![currentTimeMiIIis 
public ， 上 0 《 = 10n0 ： 0 饥 ， M 《 11t5 0 
返 回 当 前 时 间 （ 以 科 沩 軍 位 ） ． 话 注 意 ， 虽 然 返 回 值 的 时 间 单 位 为 种 ， 但 该 值 立 度 取 决 于 引 纍 作 系 统 ， # 目 司 肓 《 大 。 
有 关 诅 时 间 " 和 协 世 时 间 (UTC) 之 间 可 出 现 的 铿 差 异 的 讨 i 谲 类 别 “ 的 明 。 
莊 “ 70 年 1 月 1 日 间 自 咝 前 时 间 和 干 夜 之 间 的 差 过 ， 以 力 单 位 。 
另 请 0 见 ： 
1 列 ， 忤 多 搡 作 系 拼 以 月 十 科 力 軍 0 卩 时 间 。 ](images/0b140234-487b-44af-8831-46ed901664cd.png)System的一个方法,获取从1970年到现在的毫秒值,常用来计算一个程序运行所用时间


计算所用时间:

 
![package ; 
public class finished _ time { 
public static void main(StringC] args) 
long ; 
for( 
int ; 
System. out . println(i) ; 
long ; 
long 13=12-11 
System. out . print In (Il) ; 
System. out . print In (12) ; 
System. out . print In (13) ; ](images/80206a74-1a4c-467b-8fef-df41da18ce39.png)3


结果:(部分省略)

![1e0 
1575132473322 
1575132473342 
20 
进 程 已 结 束 ， 退 出 代 码 0 ](images/ff6dc17b-8f51-4678-b4e4-98eadbd22ff5.png)System.gc();


System的方法,立即启动垃圾回收机制

System.exit(0);

终止当前正在运行的jvm虚拟机,括号内一般填0来表示运行正常,填负数来表示系统运行不正常

