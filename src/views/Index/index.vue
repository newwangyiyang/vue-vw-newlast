<template>
    <div class="Index">
        <van-cell-group>
            <van-field v-validate="'required|email'" data-vv-as="邮箱" name="email" v-model="value" placeholder="请输入用户名" />
            <span class="error_msg">{{ errors.first('email') }}</span>
        </van-cell-group>
        <van-field v-validate="'required|phone'" data-vv-as="手机号" v-model="value1" required name="phone" />
        <span class="error_msg">{{ errors.first('phone') }}</span>
        <van-button @click="clickEvent" type="primary">提交</van-button>
    </div>
</template>

<script>
export default {
    name: 'Index',
    data() {
        return {
            value: '',
            value1: '',
            value2: '',
        }
    },
    mounted() {
        document.title = '';
    },
    methods: {
        clickEvent() {
            // console.log(this.$validator.validate());
            //验证所有输入项是否成功，根据result来进行判断
            this.$validator.validate().then(result => {
                console.log(result);
            })
        }
    },
}
</script>

<style scoped lang='less'>
.Index {
    min-height: 100vh;
    background-color: skyblue;
    img {
        display: block;
        width: 100%;
        height: 100%;
    }
}
</style>