<template>
    <div class="Index">
        <van-cell-group>
            <van-field v-validate="'required|email'" data-vv-as="邮箱" name="email" v-model="value" placeholder="请输入用户名" />
            <span class="error_msg">{{ errors.first('email') }}</span>
        </van-cell-group>
        <van-field v-validate="'required|phone'" data-vv-as="手机号" v-model="value1" required name="phone" />
        <span class="error_msg">{{ errors.first('phone') }}</span>
        <van-button @click="clickEvent" type="primary">提交</van-button>
        <slide-bar :showTrue="showTrue">
            <div class="i_left_show">

            </div>
        </slide-bar>
        <van-button class="i_sliderbar_btn" @click="showTrue=!showTrue" type="primary">展示SlideBar</van-button>
    </div>
</template>

<script>
import SlideBar from '../../components/SlideBar/index';
export default {
    name: 'Index',
    data() {
        return {
            value: '',
            value1: '',
            value2: '',
            showTrue: false
        }
    },
    mounted() {
        document.title = '';
    },
    components: {
        SlideBar
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
    .i_left_show {
        position: fixed;
        left: 0;
        top: 0;
        height: 100vh;
        width: 60vw;
        background-color: teal
    }
    .i_sliderbar_btn {
        position: fixed;
        right: 0;
        bottom: 0;
    }
}
</style>