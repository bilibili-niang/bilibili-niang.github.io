#### 事件:

![](./images/19.png)

自己看

在配置文件中处理点击事件:

```java
package com.example.mybutton;
import androidx.appcompat.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.MotionEvent;
import android.view.View;
import android.widget.Button;

public class MainActivity extends AppCompatActivity {
    private static final String Tag = "lec";
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        Button btn = findViewById(R.id.btn);
//        点击事件
        btn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Log.e(Tag, "onClick: ");
            }
        });
//        长按事件
        btn.setOnLongClickListener(new View.OnLongClickListener() {
            @Override
            public boolean onLongClick(View v) {
                Log.e(Tag, "onLongClick: ");
                return false;
            }
        });
//        触摸事件
        btn.setOnTouchListener(new View.OnTouchListener() {
            @Override
            public boolean onTouch(View v, MotionEvent event) {
                Log.e(Tag, "onTouch: " + event.getAction());
                return false;
            }
        });
    }
}
```

或者在`activity_main.xml`中写入:

```xml
<Button
    android:id="@+id/btn"
    android:layout_width="200dp"
    android:layout_height="100dp"
    android:background="@drawable/btn_selector"
    android:backgroundTint="@color/btn_color_selector"
    android:onClick="leoClick"
    android:text="我是按钮" />
```

其中`leoClick`需要在`MainActivity`中创建方法:

```java
public void leoClick(View view) {
    Log.e(Tag, "onClick: ");
```

*注意*:此处使用引用的leoClick方法时,需要将之前监听的方法给去掉