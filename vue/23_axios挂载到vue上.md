> 将axios挂载到实例对象上,避免后面使用时再次引入:

在mian.js中:
```javascript
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false

/*
为vue实例挂在axios对象,在后面的使用中不再需要import导入
但是一般挂载时,挂在axios为$http
其实叫什么名字时无所谓的
那么在后面的组件中调用,使用this.$http即可
挂载后的优势在于后面的组件要使用时,不需要再导入
*/

/*
下面这个设置请求根路径是为了方便开发,在开发过程中,如果请求同一个根路径多次,那么可以直接为axios设置其根路径
* */
// axios.defaults.baseURL='请求根路径'
/*
把axios挂载到Vue.prototype上,供每个.Vue组件的实例直接使用
* */
axios.defaults.baseURL = 'http://icestone.work/getIndexList'
Vue.prototype.$http = axios

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: {App},
    template: '<App/>'
})
```

主要是这三行:  
其中baseUrl:下面这个设置请求根路径是为了方便开发,在开发过程中,如果请求同一个根路径多次,那么可以直接为axios设置其根路径
```javascript
import axios from 'axios'
axios.defaults.baseURL = 'http://icestone.work/getIndexList'
Vue.prototype.$http = axios
```

在组件中的使用:
```javascript
async getInfo () {
  const {data: res} = await this.$http.get('/')
  console.log(res)
}
```

> 缺点:

无法实现API接口的复用












