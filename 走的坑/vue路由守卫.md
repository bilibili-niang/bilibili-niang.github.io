> 正如其名，vue-router 提供的导航守卫主要用来通过跳转或取消的方式守卫导航。这里有很多方式植入路由导航中：全局的，单个路由独享的，或者组件级的。

全局注册:

```javascript
router.beforeEach((to, from, next) => {
    console.log(to, from, next)
    let nextRoute = ['Cart', 'Path', 'Path-Index', 'Order']
    // 是否是登录中
    let userInfo = JSON.stringify(localStorage.getItem('teaUserInfo'))
    // 当前进入的页面是不是需要验证的页面
    if (nextRoute.indexOf(to.name) >= 0) {
        if (!userInfo) {
            router.push('/login')
        }
    }
    next();
})
```



