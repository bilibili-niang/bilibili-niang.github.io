### path路径操作符

- path.basename
- path.dirname
- path.extname
- path.parse
  - 把一个路径专为对象
    - root根目录
    - dir目录
    - base包含后缀名的文件名
    - ext文件的扩展名
    - name不包含后缀名的文件名
- path.join
  - 当你需要进行路径拼接的时候,推荐使用这个方法,
- path.isAbsolute判断一个路径是否是绝对路径



### Node中的其他成员

> 在每个模块中,除了`require`,`exports`等模块相关API之外,还有两个特殊的成员,

- `__dirname`**动态获取**可以用来获取当前文件模块所属目录的绝对路径
- `__filename`**动态获取**可以用来获取当前文件的绝对路径
  - `__dirname`和`__filename`是不受node命令所属路径影响的
- 所以在拼接路径时,推荐使用`path.join()`来辅助拼接

>  在文件操作中,相对路径是不可靠的,因为在Node文件操作的路径背设计为相对于执行node命令所处的路径(不是bug,是有使用场景的)
>
> 所以,为了解决这个问题,很简单,只要把相对路径改为绝对路径即可