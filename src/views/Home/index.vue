<template>
    <div class="Home">
        {{$store.getters.userInfo}}
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'Home',
    async mounted() {
        //调用store中home的action方法，通过ajax获取数据
        const res = await this.$store.dispatch('getUserInfo');
        console.log(res);
    }
}
</script>

<style scoped lang='less'>
.Home {
    min-height: 100vh;
}
</style>