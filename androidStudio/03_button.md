### button的属性:

| 属性值 | 作用 |
| ------------------ | ------------------ |
| android:drawable    |    //放一个drawable资源 |
| android:drawableTop        |//可拉伸要绘制的文本的上面 |
| android:drawableBottom |    //可拉伸要绘制的文本的下面 |
| android:drawableLeft |    //可拉伸要绘制的文本的左侧 |
| android:drawableRight    | //可拉伸要绘制的文本的右侧 |
| android:text        |    //设置显示的文本 |
| android:textColor    |    //设置显示文本的颜色 |
| android:textSize        | //设置显示文本字体大小 |
| android:background |        //可拉伸使用的背景 |
| android:onClick        |    //设置点击事件 |

### Button的状态

| 状态 | 作用 |
| ---- | ---- | 
| android:state_pressed  |  //是否按下，如一个按钮触摸或者点击。 |
| android:state_focused  |  //是否取得焦点，比如用户选择了一个文本框。 |
| android:state_hovered  |  //光标是否悬停，通常与focused state相同，它是4.0的新特性 |
| android:state_selected  | //被选中状态 |
| android:state_checkable  | //组件是否能被check。如：RadioButton是可以被check的。 |
| android:state_checked    | //被checked了，如：一个RadioButton可以被check了。 |
| android:state_enabled  |    //能够接受触摸或者点击事件 |
| android:state_activated  | //被激活 |
| android:state_window_focused  | //应用程序是否在前台，当有通知栏被拉下来或者一个对话框弹出的时候应用程序就不在前台了 |

*注意*:如果通过下面这种方式直接修改是不会显示背景色的:

```xml

<Button
        android:text="我是按钮"
        android:background="@color/black"
        android:layout_width="200dp"
        android:layout_height="100dp"/>
```

需要修改下面的文件:

```shell
res > values > themes.xml
```

```xml

<resources xmlns:tools="http://schemas.android.com/tools">
    <!-- Base application theme. -->
    <style name="Theme.MyApplication_study_1" parent="Theme.MaterialComponents.DayNight.DarkActionBar.Bridge">
        <!-- Primary brand color. -->
        <item name="colorPrimary">@color/purple_500</item>
        <item name="colorPrimaryVariant">@color/purple_700</item>
        <item name="colorOnPrimary">@color/white</item>
        <!-- Secondary brand color. -->
        <item name="colorSecondary">@color/teal_200</item>
        <item name="colorSecondaryVariant">@color/teal_700</item>
        <item name="colorOnSecondary">@color/black</item>
        <!-- Status bar color. -->
        <item name="android:statusBarColor" tools:targetApi="l">?attr/colorPrimaryVariant</item>
        <!-- Customize your theme here. -->
    </style>
</resources>
```

*注意*:在style中`.Bridge`是新增的

测试在跑app时就可以看到背景色了:

![](./images/13.png)

---

#### 设置按钮在点击和非点击状态下的背景图片:

在该目录下创建按钮在点击和非点击时的状态:

![](./images/14.png)

代码:

```xml
<?xml version="1.0" encoding="utf-8"?>
<selector xmlns:android="http://schemas.android.com/apk/res/android">
    <item android:drawable="@drawable/ic_baseline_accessibility_24" android:state_pressed="true"/>
    <item android:drawable="@drawable/ic_baseline_account_balance_24" android:state_pressed="false"/>
</selector>
```

自己看吧,

此时`activity_main.xml`中的代码:

```xml

<Button
        android:layout_width="200dp"
        android:layout_height="100dp"
        android:backgroundTint="@color/black"
        android:background="@drawable/btn_selector"
        android:text="我是按钮"/>
```

在drawable下创建的有背景图片:

![](./images/15.png)

*注意*:此处的`android:drawable`中不可以填颜色,只能给图片

此时在运行后即可实现:

<video src="./images/16.mp4"></video>



> 此时如果想要给背景图片换个颜色:

```xml

<Button
        android:layout_width="200dp"
        android:layout_height="100dp"
        android:backgroundTint="@color/black"
        android:background="@drawable/btn_selector"
        android:text="我是按钮"/>
```

运行:

<video src="./images/17.mp4"></video>

*注意*:此时它被点击和非点击时的state的背景颜色是一样的,如果先要设置不一致,则需要在文件中添加selector:

在该文件中添加:
![](./images/18.png)

添加:

```xml
<?xml version="1.0" encoding="utf-8"?>
<selector xmlns:android="http://schemas.android.com/apk/res/android">
    <item android:color="#ffff0000" android:state_pressed="true"/>
    <item android:color="#ff00ff"/>
</selector>
```

其中设置了btn在被点击和没有被点击时的颜色

使用时需要在`activity_main.xml`中引用:

```xml

<Button
        android:layout_width="200dp"
        android:layout_height="100dp"
        android:background="@drawable/btn_selector"
        android:backgroundTint="@color/btn_color_selector"
        android:text="我是按钮"/>
```

---

#### `android:foreground`

> 设置前景色

```xml

<Button
        android:layout_width="200dp"
        android:layout_height="100dp"
        android:background="@drawable/btn_selector"
        android:backgroundTint="@color/btn_color_selector"
        android:text="我是按钮"
        android:foreground="@color/black"
/>
```

但是它会遮住字体的颜色

前景色可以像之前的`android:background="@drawable/btn_selector"`一样,用selector,也可以直接写入颜色

