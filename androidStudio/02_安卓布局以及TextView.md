#### TextView

它的属性有:

![](./images/4.png)



其中它的属性可以在布局文件中的`TextView`设置,或者是:

> 在`MainActivity`中同构id为其设置属性

*注意:*在`MainActivity`中为其设置属性实际上是讲设置的属性复制到layout中



---



#### `android:textStyle:`

> 设置字体样式,它的属性:

![](./images/5.png)

---

#### `android:textSize`:

> 设置字体的大小,

>  *注意*:此处的*单位为`sp`*,`sp`和`dp`都是安卓为了适配设计出的单位

---



#### `android:background`:

> 设置控件的背景色,此处可以为颜色或者是图片



---



#### `android:gravity`:

> 设置该元素在控件中的对齐方向,`TextView`为文字,`ImageView`中是图片等等,它的属性有:

自己看

```xml
    <attr name="gravity">
        <!-- Push object to the top of its container, not changing its size. -->
        <flag name="top" value="0x30" />
        <!-- Push object to the bottom of its container, not changing its size. -->
        <flag name="bottom" value="0x50" />
        <!-- Push object to the left of its container, not changing its size. -->
        <flag name="left" value="0x03" />
        <!-- Push object to the right of its container, not changing its size. -->
        <flag name="right" value="0x05" />
        <!-- Place object in the vertical center of its container, not changing its size. -->
        <flag name="center_vertical" value="0x10" />
        <!-- Grow the vertical size of the object if needed so it completely fills its container. -->
        <flag name="fill_vertical" value="0x70" />
        <!-- Place object in the horizontal center of its container, not changing its size. -->
        <flag name="center_horizontal" value="0x01" />
        <!-- Grow the horizontal size of the object if needed so it completely fills its container. -->
        <flag name="fill_horizontal" value="0x07" />
        <!-- Place the object in the center of its container in both the vertical and horizontal axis, not changing its size. -->
        <flag name="center" value="0x11" />
        <!-- Grow the horizontal and vertical size of the object if needed so it completely fills its container. -->
        <flag name="fill" value="0x77" />
        <!-- Additional option that can be set to have the top and/or bottom edges of
             the child clipped to its container's bounds.
             The clip will be based on the vertical gravity: a top gravity will clip the bottom
             edge, a bottom gravity will clip the top edge, and neither will clip both edges. -->
        <flag name="clip_vertical" value="0x80" />
        <!-- Additional option that can be set to have the left and/or right edges of
             the child clipped to its container's bounds.
             The clip will be based on the horizontal gravity: a left gravity will clip the right
             edge, a right gravity will clip the left edge, and neither will clip both edges. -->
        <flag name="clip_horizontal" value="0x08" />
        <!-- Push object to the beginning of its container, not changing its size. -->
        <flag name="start" value="0x00800003" />
        <!-- Push object to the end of its container, not changing its size. -->
        <flag name="end" value="0x00800005" />
    </attr>
```



---



#### 注意,正规开发的时候是不能这样写的:

> 正规开发中,layout中text的文字,文字颜色,控件的背景色都是不可以直接写在`activity_main`中的,是需要写在values文件夹下的

![](./images/6.png)



---



#### 在values中创建并引入:

`string.xml`:

```xml
<resources>
    <string name="app_name">My Application_study_1</string>
    <string name="tv_one">这是一个测试文字</string>
</resources>
```

`activity_main.xml`中引用text(`android:text="@string/tv_one"`):

```xml
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical">
    <TextView
        android:id="@+id/tv_one"
        android:layout_width="200dp"
        android:layout_height="200dp"
        android:background="#B1AEAE"
        android:gravity="center_horizontal"
        android:text="@string/tv_one"
        android:textColor="#FF000000"
        android:textSize="30sp"
        android:textStyle="italic" />
</LinearLayout>
```

颜色,背景色的引用也是如此,  

如果直接写入而不用引用的话是不利于适配的



---



### 带阴影的TextView:

> 它的属性:
>
> 自己看:

![](./images/7.png)

`android:shadowRadius`它的属性是数值

`android:shadowDx`,`android:shadowDy`设置水平和垂直方向上阴影的偏移角度



---



### 实现跑马灯效果的TextView:



> `android:singleLine`:设置文字是否单行显示,
>
> 值为: `true`或者`false`



> `android:ellipsize`:设置文字省略的方式,如下面的代码中:

```xml
<TextView
    android:id="@+id/tv_two"
    android:layout_width="match_parent"
    android:layout_height="200dp"
    android:background="#B1AEAE"
    android:text="第二个测试文字,这是一个跑马灯效果的文字"
    android:textColor="#FF000000"
    android:textSize="30sp"
    android:textStyle="italic"
    android:singleLine="true"
    android:ellipsize="marquee"
    />
```

它显示的方式是:
![](./images/8.png)

其中后面显示的几个点点就是`android:ellipsize`的作用,在默认情况下它显示的是三个点,

而此时需要显示跑马灯效果,所以设置为:`android:ellipsize="marquee"`



> `android:marqueeRepeatLimit`:设置跑马
>
> +灯效果下文字循环的此时

其中`marquee_forever`为无限循环

但是此时它并没有开始运行,

*增加以下代码之后,点击它就可以运行了:*

> `android:clickable="true"`

设置元素是否可以被点击,但是在项目中不会这样用,这只是一中方式

> 第一种方式的代码：

```xml
<TextView
    android:id="@+id/tv_two"
    android:layout_width="match_parent"
    android:layout_height="200dp"
    android:background="#B1AEAE"
    android:clickable="true"
    android:ellipsize="marquee"
    android:focusable="true"
    android:focusableInTouchMode="true"
    android:marqueeRepeatLimit="marquee_forever"
    android:singleLine="true"
    android:text="第二个测试文字,这是一个跑马灯效果的文字"
    android:textColor="#FF000000"
    android:textSize="30sp"
    android:textStyle="italic" />
```



> 第二种方式,自定义一个textView:

在java代码中创建自己的TextView:

![](./images/9.png)

在其中写入:

```java
package com.example.myapplication_study_1;

import android.content.Context;
import android.util.AttributeSet;
import android.view.View;
import android.widget.TextView;

import androidx.annotation.Nullable;

public class MyTextView extends androidx.appcompat.widget.AppCompatTextView {

    public MyTextView(Context context) {
        super(context);
    }

    public MyTextView(Context context, @Nullable AttributeSet attrs) {
        super(context, attrs);
    }

    public MyTextView(Context context, @Nullable AttributeSet attrs, int defStyleAttr) {
        super(context, attrs, defStyleAttr);
    }

    //    表示我们的TextView获取焦点
    @Override
    public boolean isFocused() {
        return true;
    }
}
```

在activity_main.xml中使用时,需要引入改包下的类来代替原来的TextView标签:

```xml
<com.example.myapplication_study_1.MyTextView
    android:id="@+id/tv_two"
    android:layout_width="match_parent"
    android:layout_height="200dp"
    android:background="#B1AEAE"
    android:ellipsize="marquee"
    android:focusable="true"
    android:focusableInTouchMode="true"
    android:marqueeRepeatLimit="marquee_forever"
    android:singleLine="true"
    android:text="第二个测试文字,这是一个跑马灯效果的文字"
    android:textColor="#FF000000"
    android:textSize="30sp"
    android:textStyle="italic" />
```

此时运行起来即可实现跑马灯效果,不用去点击



> 第三种方式:

```xml
<!--    <com.example.myapplication_study_1.MyTextView-->
<TextView
    android:id="@+id/tv_two"
    android:layout_width="match_parent"
    android:layout_height="200dp"
    android:background="#B1AEAE"
    android:ellipsize="marquee"
    android:focusable="true"
    android:focusableInTouchMode="true"
    android:marqueeRepeatLimit="marquee_forever"
    android:singleLine="true"
    android:text="第二个测试文字,这是一个跑马灯效果的文字"
    android:textColor="#FF000000"
    android:textSize="30sp"
    android:textStyle="italic">
    <requestFocus />
</TextView>
```

即可

