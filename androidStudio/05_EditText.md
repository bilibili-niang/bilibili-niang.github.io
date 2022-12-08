### EditText

属性:
![](./images/20.png)

##### `inputType`:

`android:inputType`限制输入的类型

#### `drawableLeft`:在输入框中添加内部偏左的图像

```xml

<EditText
        android:layout_width="200dp"
        android:layout_height="100dp"
        android:hint="请输入用户名"
        android:textColorHint="#95a1aa"
        android:drawableLeft="@drawable/ic_baseline_accessibility_24"
        android:inputType="text"
        android:textColor="#95a1aa"/>
```

![](./images/21.png)

##### `drawablePadding`:文本框中图片距离文字的距离:

```xml

<EditText
        android:layout_width="200dp"
        android:layout_height="100dp"
        android:hint="请输入用户名"
        android:textColorHint="#95a1aa"
        android:drawableLeft="@drawable/ic_baseline_accessibility_24"
        android:inputType="text"
        android:drawablePadding="20dp"
        android:textColor="#95a1aa"/>
```

![](./images/22.png)

#### `paddingLeft`:文本框中内容距离边框的距离

```xml

<EditText
        android:layout_width="200dp"
        android:layout_height="100dp"
        android:hint="请输入用户名"
        android:textColorHint="#95a1aa"
        android:drawableLeft="@drawable/ic_baseline_accessibility_24"
        android:inputType="text"
        android:drawablePadding="20dp"
        android:paddingLeft="20dp"
        android:textColor="#95a1aa"/>
```

![image-20211010155531858](./images/23.png)

##### `background`:此处的background可以修改底部的线条颜色:

```xml

<EditText
        android:layout_width="200dp"
        android:layout_height="100dp"
        android:hint="请输入用户名"
        android:textColorHint="#95a1aa"
        android:drawableLeft="@drawable/ic_baseline_accessibility_24"
        android:inputType="text"
        android:drawablePadding="20dp"
        android:paddingLeft="20dp"
        android:background="@color/white"
        android:textColor="#95a1aa"/>
```

![](./images/24.png)



---

### ImageView

> 主要属性:

![](./images/25.png)

> 缩放类型:

![](./images/26.png)

#### `adjustViewBounds`:

> 它是和`maxWidth`,`maxHeight`一起使用,如果仅为控件设置了`maxWeight`或是`MaxHeight`,那么是没有作用的,只有同时设置了`android:adjustViewBounds="true"`,它们才会起限制作用

---

### ProgressBar

> 常见属性:

![](images/27.png)



---

### Notification与NotificationManager

> 创建一个NotificationManager

![](./images/28.png)



> 使用Builder构造器来创建Notification对象:

![](./images/29.png)



> 关于`channleid`:

![](images/30.png)

![](images/31.png)



> 关于通知时弹出的图标问题:

`.setSmallIcon`:小图标只能是Alpha图层(不能带颜色)

![](images/32.png)

使用案例:

目录结构:

![](images/34.png)

`MainActivity.java`:

```java
package com.example.notification;

import androidx.appcompat.app.AppCompatActivity;
import androidx.core.app.NotificationCompat;

import android.app.Notification;
import android.app.NotificationChannel;
import android.app.NotificationManager;
import android.app.PendingIntent;
import android.content.Intent;
import android.graphics.BitmapFactory;
import android.graphics.Color;
import android.os.Build;
import android.os.Bundle;
import android.view.View;

import java.io.NotActiveException;

public class MainActivity extends AppCompatActivity {
    private NotificationManager manager;
    private Notification notification;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        manager = (NotificationManager) getSystemService(NOTIFICATION_SERVICE);
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
//NotificationManager.IMPORTANCE_HIGH设置通知的重要级别
            NotificationChannel channel = new NotificationChannel("leo", "测试通知", NotificationManager.IMPORTANCE_HIGH);
//把channel放入通知管理类中
            manager.createNotificationChannel(channel);
        }

        Intent intent = new Intent(this, Notification.class);
        PendingIntent pendingIntent = PendingIntent.getActivity(this, 0, intent, 0);

//这里需要设置 channelid,为上面使用
        notification = new NotificationCompat.Builder(this, "leo")
                .setContentTitle("官方通知")
                .setContentText("世界那么大,你想去gogo吗")
                .setSmallIcon(R.drawable.ic_baseline_account_circle_24)
                .setLargeIcon(BitmapFactory.decodeResource(getResources(), R.drawable.test))
                .setColor(Color.parseColor("#ff0000"))
                .setContentIntent(pendingIntent)
                .setAutoCancel(true)
                .build();

//  设置下面三个即可显示通知了:
//  .setContentTitle("官方通知")
//  .setContentText("世界那么大,你想去gogo吗")
//  .setSmallIcon(R.drawable.ic_baseline_account_circle_24)

//  设置大图标的样式:
//  .setLargeIcon(BitmapFactory.decodeResource(getResources(),R.drawable.test))

//  设置小图标的颜色:
//  需要传入整数,所以需要用parseColor来转
//  .setColor(Color.parseColor("#ff0000"))

//  设置点击后进入应用:
//  .setContentIntent(pendingIntent)

//  设置在通知栏点击图标后自动取消通知:
//  .setAutoCancel(true)

    }

    public void sendNotification(View view) {
        manager.notify(1, notification);
    }

    public void cacelNotification(View view) {
//        此处的id应该和上面 sendNotification 中的id一致
        manager.cancel(1);

    }
}
```

`NotificationActivity.java`:

```java
package com.example.notification;

import android.app.Activity;
import android.os.Bundle;
import android.util.Log;

import androidx.annotation.Nullable;

public class NotificationActivity extends Activity {

    @Override
    protected void onCreate(@Nullable Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        Log.e("leo", "onCreate: 进入Notification");
    }
}
```

`activity_mail.xml`:

```xml
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
              xmlns:app="http://schemas.android.com/apk/res-auto"
              xmlns:tools="http://schemas.android.com/tools"
              android:layout_width="match_parent"
              android:layout_height="match_parent"
              android:orientation="vertical">

    <Button
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:onClick="sendNotification"
            android:text="发出通知"/>

    <Button
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:onClick="cacelNotification"
            android:text="取消通知"/>
</LinearLayout>
```

> 图片自己找



---

### Toolbar

> 常见属性:

![](images/33.png)

- 什么是`toolbar`?

在一个新建app中的:

![image-20211013144024315](images/35.png)

圈出来的就是,它的配置在:
`src > main > res > themes.xml`中:

```xml

<resources xmlns:tools="http://schemas.android.com/tools">
    <!-- Base application theme. -->
    <!-- 下面这一行就是 -->
    <style name="Theme.MyApplication_study_1" parent="Theme.MaterialComponents.DayNight.DarkActionBar">
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

> 若不想显示toolbar:

```xml

<style name="Theme.MyApplication_study_1" parent="Theme.MaterialComponents.DayNight.NoActionBar">
</style>
```

> 如果想要实现标题居中的效果:

```xml
<!--    如果要使title居中,需要使用下面的方式:
此时如果在它的左侧添加返回箭头,那么也不会改变标题居中的位置
-->
<androidx.appcompat.widget.Toolbar
        android:layout_width="match_parent"
        android:layout_height="?attr/actionBarSize"
        android:layout_marginTop="20dp"
        app:navigationIcon="@drawable/ic_baseline_arrow_back_24"
        android:background="#ffff00">

    <TextView
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:layout_gravity="center"
            android:text="标题"/>
</androidx.appcompat.widget.Toolbar>
```

效果:

![image-20211013164523015](images/36.png)

> 注意:

```java
//一定要注意toolbar的导包问题,导入的应该是androidx下的包
import androidx.appcompat.widget.Toolbar;
```

---

### AlterDialog

> 它的属性:

![image-20211013165053783](images/37.png)

> 文件结构:

![image-20211013171127114](images/38.png)

#### 使用:

`MainActivity.java`:

```java
package com.example.myalterdialog;
import androidx.appcompat.app.AlertDialog;
import androidx.appcompat.app.AppCompatActivity;

import android.content.DialogInterface;
import android.os.Bundle;
import android.util.Log;
import android.view.View;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }

    public void leoClick(View view) {
        View DialogView = getLayoutInflater().inflate(R.layout.dialog_view, null);

        AlertDialog.Builder builder = new AlertDialog.Builder(this);
//        此处使用了.create() 之后需要显示，所以使用了 .show()
//        因为返回的对象不同,所以最后ode的两个: .create() , .show()他们的顺序是不能乱的

        /*
        注意此处的: setPositiveButton
        它接受两个参数,第一个是按钮上的文字,第二个是监听,

        要注意:第二个设置的监听,导入的是:
        new DialogInterface.OnClickListener()
        这是一个细节

        要注意,一个弹窗是可以设置三个按钮的: 确定(setPositiveButton),取消(setNegativeButton),中间(setNeutralButton)

        三个按钮的排布是与按钮的类型有关的,不同手机显示出来可能是不同的,这个不是很重要

        如果在dialog弹出的对话框中使用自定义布局的话,就需要设置 .setView()
        它需要传入一个布局,而且传入的布局需要引入:
        View DialogView = getLayoutInflater().inflate(R.layout.dialog_view, null);
        * */
        builder.setIcon(R.mipmap.ic_launcher)
                .setTitle("对话框弹出")
                .setMessage("今天你吃了没")
                .setView(DialogView)
                .setPositiveButton("确定", new DialogInterface.OnClickListener() {
                    @Override
                    public void onClick(DialogInterface dialogInterface, int i) {
                        Log.e("leo", "onClick: 确定");
                    }
                })
                .setNegativeButton("取消", new DialogInterface.OnClickListener() {
                    @Override
                    public void onClick(DialogInterface dialogInterface, int i) {
                        Log.e("leo", "onClick: 取消");
                    }
                })
                .setNeutralButton("中间", new DialogInterface.OnClickListener() {
                    @Override
                    public void onClick(DialogInterface dialogInterface, int i) {
                        Log.e("leo", "onClick: 中间");
                    }
                })
                .create()
                .show();
    }
}
```

`activity_main.xml`:

```xml
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
              xmlns:app="http://schemas.android.com/apk/res-auto"
              xmlns:tools="http://schemas.android.com/tools"
              android:layout_width="match_parent"
              android:layout_height="match_parent"
              tools:context=".MainActivity">
    <Button
            android:text="显示对话框"
            android:onClick="leoClick"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
    />
</LinearLayout>
```

`dialog_view.xml`:

```xml
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
              android:layout_width="match_parent"
              android:layout_height="match_parent"
              android:background="@color/teal_200"
              android:orientation="horizontal">
    <ImageView
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:src="@mipmap/ic_launcher"/>
    <TextView
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:text="哈哈,天气很好"/>
</LinearLayout>
```

> 注意:dialog中要使用呢自定义布局的话,就需要引入`dialog_view.xml`的布局,实现:

![](images/39.png)

#### 引入其他布局:

如下面的结构,要将`dialog_view.xml`引入:
![image-20211013171451145](images/40.png)

那么就需要在`MainActivity.java`中引入:

```java
package com.example.myalterdialog;

import androidx.appcompat.app.AlertDialog;
import androidx.appcompat.app.AppCompatActivity;

import android.content.DialogInterface;
import android.os.Bundle;
import android.util.Log;
import android.view.View;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
// 下面这句就是引入:
        View DialogView = getLayoutInflater().inflate(R.layout.dialog_view, null);
    }
}
```

---

### PopupWindow:

> 常见方法:

![image-20211013171923826](images/41.png)

> 例子:

文件目录结构:
![image-20211013175046782](images/42.png)

`MainActivity.java`:

```java
package com.example.mypopupwindow;

import androidx.appcompat.app.AppCompatActivity;

import android.nfc.Tag;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.PopupWindow;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }

    public void leoClick(View view) {
        View popupView = getLayoutInflater().inflate(R.layout.popu_view, null);
        Button bt1 = popupView.findViewById(R.id.bt1);
        Button bt2 = popupView.findViewById(R.id.bt2);

//        为了方便，这里一般会在创建的时候传参
        /*
        这里的: ViewGroup.LayoutParams.WRAP_CONTENT 可以直接填入数字( ),但是一般是写入 ViewGroup.LayoutParams.WRAP_CONTENT 为了让他和父元素的大小契合

        showAsDropDown 设定偏移方向和位置,可以填入数值或者是获取某一个控件的宽度/高度来进行偏移,如:
        popupWindow.showAsDropDown(view, view.getWidth(), -view.getHeight())
        或者是:
        popupWindow.showAsDropDown(view, 300, 300)
        也可以不填写数值,直接让PopupWindow显示在控件的正下方
        popupWindow.showAsDropDown(view);

        setFocusable(boolean focusable) 设置是否获取焦点
        该属性可以通过传参时传入,或者是在后面为其设置属性
        若为true,则在点开popupwindow时,点击空白处可以收起popupwindow,
        若为false,则点开popupwindow后无法将其取消

        popupWindow.setBackgroundDrawable()
        接受一个Drawable,在点击popupwindow后显示的背景
        * */
        PopupWindow popupWindow = new PopupWindow(popupView, ViewGroup.LayoutParams.WRAP_CONTENT, ViewGroup.LayoutParams.WRAP_CONTENT, true);

        popupWindow.setBackgroundDrawable(getResources().getDrawable(R.drawable.banner));

        popupWindow.showAsDropDown(view);


        bt1.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Log.e("TAG", "你是住在 上海 吗");
            }
        });

//        项目中在处理popupwindow时一般是点击一个里面的按钮后popuwindow会退出
        bt2.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Log.e("TAG", "你是住在 北京 吗");
//                设置点击该按钮后就关闭popupwindow
                popupWindow.dismiss();
            }
        });
    }
}
```

`popu_view.xml`:

```xml
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
              android:layout_width="match_parent"
              android:layout_height="match_parent"
              android:background="@mipmap/ic_launcher"
              android:orientation="vertical">

    <Button
            android:id="@+id/bt1"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:padding="5dp"
            android:text="上海"
            android:textSize="18sp"/>

    <Button
            android:id="@+id/bt2"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:padding="5dp"
            android:text="北京"
            android:textSize="18sp"/>

</LinearLayout>
```

`activity_main.xml`:

```xml
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
              xmlns:app="http://schemas.android.com/apk/res-auto"
              xmlns:tools="http://schemas.android.com/tools"
              android:layout_width="match_parent"
              android:layout_height="match_parent"
              tools:context=".MainActivity">

    <Button
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:onClick="leoClick"
            android:text="弹出PopupWindow"/>

</LinearLayout>
```

