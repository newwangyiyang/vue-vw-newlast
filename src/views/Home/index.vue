<template>
    <div class="Home">
        {{$store.getters.userInfo}}
        <router-view></router-view>
        <van-button @click="$router.replace({name: 'Index'})" type="primary">返回Index页面</van-button>
    </div>
</template>

<script>
import {mapMutations} from 'vuex';
export default {
    name: 'Home',
    async mounted() {
        //调用store中home的action方法，通过ajax获取数据
        // const res = await this.$store.dispatch('getUserInfo');
        // console.log(res);
        this.SET_USERINFO({name: '王一扬'});
    },
    methods: {
        ...mapMutations(['SET_USERINFO'])
    }
}
</script>

<style scoped lang='less'>
.Home {
    min-height: 100vh;
}
</style>