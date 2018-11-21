<template>
  <div id="app">
    <router-view/>
  </div>
</template>

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
