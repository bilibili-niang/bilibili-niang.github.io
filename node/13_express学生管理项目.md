### 设计操作数据的API文件模块

```javascript
/* 
students.js
数据操作模块,职责:
操作文件中的数据
只处理数据,
不关系业务
*/
var fs = require('fs')

// 获取所有学生列表
// returnn []
exports.find = function() {
}

// 添加保存学生
exports.save = function() {
}

// 更新学生
exports.update = function() {
}

// 删除学生
exports.delete = function() {
}
```

---

### 自己编写的步骤

- 处理模板
- 配置开放静态资源
- 配置模板引擎
- 简单路由:/students渲染静态页出来
- 路由设计
- 抽取路由模块
- 由于接下来一些业务操作都需要处理文件数据,我们需要封装student.js
- 先写好student.js文件结构
  - 查询所有学生列表的API find
  - findByid
  - save
  - updateByid
  - deleteByid
- 实现具体功能
  - 通过路由收到请求
  - 接收请求中的数据(get,post)
    - req.query
    - req.body
    - 调用数据操作API
    - 根据操作结果给客户端发送响应





