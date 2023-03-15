html:
```vue
<template>
  <div class="searchHeader">
    <i class="el-icon-back" @click="backToIndex()"></i>
    <form @keyup.enter="goSearch()" @submit.prevent>
      <el-input round v-model="value" placeholder="搜索您喜欢的产品..."></el-input>
    </form>
    <el-button icon="el-icon-search" circle @click="goSearch()"></el-button>
  </div>
</template>

<script>
export default {
  name: "SearchHeader",
  methods: {
    backToIndex() {
      this.$router.back()
    },
    goSearch() {
      console.log('value的值:')
      // 如果搜索结果为空，直接返回

      if (!this.value) {
        return
      }
      // 判断之前有没有搜索的本地存储
      if (!localStorage.getItem("searchList")) {
        localStorage.setItem("searchList", "[]")
      } else {
        // 之前搜索过
        this.searchArr = JSON.parse(localStorage.getItem("searchList"))
      }
      // 增加数据
      // 给本地存储赋值
      this.searchArr.unshift(this.value);
      // 去重
      let newArr = new Set(this.searchArr);

      localStorage.setItem("searchList", JSON.stringify(Array.from(newArr)));

      /*
      this.$router.push({
        name: 'list'
      })*/
    }
  },
  data() {
    return {
      value: '',
      searchArr: ''
    }
  },

}
</script>

<style scoped lang="less">
.searchHeader {
  z-index: 3;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  background-color: #b0352f;
  height: 1.6rem;

  form {
    display: flex;
    align-items: center;
  }

  ::v-deep .el-input {
    width: 6.56rem;

    input {
      height: 0.8rem;
      display: flex;
      width: 6.5rem;
      border-radius: 16px;
    }
  }

  ::v-deep .el-icon-back {
    color: #FFFFFF;
    font-size: 0.7rem;
  }

}
</style>
```

其中注意:

```javascript
    goSearch() {
      console.log('value的值:')
      // 如果搜索结果为空，直接返回

      if (!this.value) {
        return
      }
      // 判断之前有没有搜索的本地存储
      if (!localStorage.getItem("searchList")) {
        localStorage.setItem("searchList", "[]")
      } else {
        // 之前搜索过
        this.searchArr = JSON.parse(localStorage.getItem("searchList"))
      }
      // 增加数据
      // 给本地存储赋值
      this.searchArr.unshift(this.value);
      // 去重
      let newArr = new Set(this.searchArr);
      localStorage.setItem("searchList", JSON.stringify(Array.from(newArr)));
      /*
      this.$router.push({
        name: 'list'
      })*/
    }
```

将搜索结果写入本地的session,key为searchList