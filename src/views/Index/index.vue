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
        <br />
        <van-uploader :after-read="onRead">
            点击上传压缩图片测试
        </van-uploader>

        <van-button @click="getOne" type="primary">刷新Vue</van-button>
        <div class="onepx_test">

        </div>
    </div>
</template>

<script>
import SlideBar from '../../components/SlideBar/index';
import Compressor from 'compressorjs';
import _ from 'lodash'
import { mapActions, mapGetters } from 'vuex';
export default {
    name: 'Index',
    inject: [ 'reload' ],
    data() {
        return {
            value: '',
            value1: '',
            value2: '',
            showTrue: false
        }
    },
    created() {
        //created也可初始化数据，进行初始化标题，获取url中携带的参数，
    },
    async mounted() {
        document.title = '';
        console.log(this.userInfo.name);
    },
    components: {
        SlideBar
    },
    computed: {
        ...mapGetters(['userInfo'])
    },
    methods: {
        ...mapActions(['getUserInfo']),
        clickEvent() {
            // console.log(this.$validator.validate());
            //验证所有输入项是否成功，根据result来进行判断
            this.$validator.validate().then(result => {
                console.log(result);
            })
        },
        //图片压缩测试上传
        onRead(file) {
            console.log(file);
            new Compressor(file.file, {
                quality: 0.6,
                success(result) {
                    console.log(result);
                    // const formData = new FormData();

                    // // The third parameter is required for server
                    // formData.append('file', result, result.name);

                    // // Send the compressed image file to server with XMLHttpRequest.
                    // axios.post('/path/to/upload', formData).then(() => {
                    //     console.log('Upload success');
                    // });
                },
                error(err) {
                    console.log(err.message);
                },
            });
        },
        getOne: _.debounce(() => {
            console.log(321)
        }, 300)
    },
    reload() {
        
    },
}
</script>

<style scoped lang='less'>
.Index {
    .fullscreen-bg('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552379499611&di=ca093a9afeeea7a458661f561b978cf2&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201410%2F10%2F20141010002206_uMZ4G.jpeg');
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
.onepx_test {
    height: 100px;
    width: 100px;
    background-color: red;
    .blur()
}
</style>