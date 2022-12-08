---
title: 常用类_String创建

author: IceStone
created: '2019-12-01T04:23:22Z'
tags: Java基础

---

# 常用类_String创建

![* 
* 
* 
* 
* 
1.String str = " 
ABCD" ; 
str = "ABCD" 
2. String str2 = new String( "ABCD"); 
public class StringDem02 { 
public static void main(String[] args) { 
String 
String 
String 
str = ' 
' ABCD" ; 
str2 - 
_ - new 
= "ABCD"; 
str3 ](images/79679ae5-1712-46e3-8b11-09408941bd21.png) 

![2.String str2 = new String("ABCD"); 
至 少 得 要 创 建 一 个 对 象 ， 因 为 使 用 了 new 在 堆 当 中 至 少 得 要 创 建 一 个 对 象 
看 一 下 ， 常 量 池 当 中 ， 有 没 有 传 入 的 字 苻 串 常 量 
如 果 说 没 有 得 话 ， 会 创 建 一 个 字 符 串 常 量 ， 放 到 常 量 池 当 中 ](images/3adaa29a-ea4b-4653-a834-0edb73e5ee27.png)![1String str 

"ABCD" 
f±#String str 
" 众 BCD " ； 创 建 字 符 串 
要 么 创 建 一 个 对 象 ， 要 么 不 创 建 
会 先 到 常 量 池 当 中 看 一 下 有 没 有 存 在 该 字 符 串 常 量 
如 果 说 已 经 有 了 ， 直 接 使 用 ， 不 会 创 建 新 的 地 址 
如 果 常 量 池 当 中 没 有 的 话 ， 就 会 在 常 量 没 当 中 创 建 一 个 对 象 ． ](images/cde3ffd4-bdfd-40b9-8a5a-e223a575cd1b.png)![public static void 

6 
7 
8 
9 
le 
11 
12 
13 
14 
15 
16 
17 
18 } 
19 
Console 
true 
true 
false 
fal se 
String 
String 
String 
String 
String 
String 
main (String[] args) { 
strl = "ABCD"; 
str2= ' 
str3 = 
str4 = 
new 
temp = "AB 
= temp + "CD" 
str5 
System. out. println(strl — 
str2); 
System.out.println(strl str3); 
system. out. println(strl str4);//fa1se 
System. out. println( strl 
str5); ](images/2bbe079e-87c5-4b11-b856-0af58a9b7d34.png)
