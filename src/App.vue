<template>
  <div id="app">
    <router-view v-if="reloadViewAlive"/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      reloadViewAlive: true
    }
  },
  provide() {
    // 该方法并不支持刷新vuex的store中的状态state
    // 只是Vue页面重载了
    return {
      reload: this.reload
    }
  },
  methods: {
    reload() {
      this.reloadViewAlive = false
      this.$nextTick(() => {
        this.reloadViewAlive = true
      });
    }
  },
}
</script>

<style lang="less">
img {
  content: normal !important;
}

//定义全局输入错误提示信息
.error_msg {
    display: block;
    padding-left: 10px;
    color: #e74c3c;
    font-size: 12px;
    line-height: 16px;
}
.success_msg {
    display: block;
    padding-left: 10px;
    color: #2ecc71;
    font-size: 12px;
    line-height: 16px;
}
</style>
