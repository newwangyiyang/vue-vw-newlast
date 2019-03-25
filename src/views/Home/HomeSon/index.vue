<template>
    <div class="HomeSon">
        <p v-drag  @click="copy($event)">{{tel | toThousandFilter}}</p>
        <form @submit.prevent="scopeForm1" data-vv-scope="scope1">
            <van-cell-group>
                <van-field
                    v-model="oneValue"
                    required
                    clearable
                    label="用户名"
                    right-icon="question-o"
                    placeholder="请输入用户名"
                    name="oneValue"
                    v-validate="'required|phone'"
                    data-vv-as="手机号"
                    @click-right-icon="$toast('question')"
                />
                <span class="error_msg">{{ errors.first('scope1.oneValue') }}</span>
                <van-field
                    v-model="twoValue"
                    type="password"
                    label="密码"
                    placeholder="请输入密码"
                    required
                    name="twoValue"
                    v-validate="'required|min:5'"
                    data-vv-as="密码"
                />
                <span class="error_msg">{{ errors.first('scope1.twoValue') }}</span>
            </van-cell-group>
            <!-- 普通按钮 -->
            <van-button type="info" native-type="button" @click="onlyParamsValidator">单一参数校验</van-button> 
            <!-- 提交数据按钮 -->
            <van-button type="info" native-type="submit">提交</van-button>
        </form>
        <form @submit.prevent="scopeForm2" data-vv-scope="scope2">
            <van-cell-group>
                <van-field
                    v-model="threeValue"
                    required
                    clearable
                    label="用户名"
                    right-icon="question-o"
                    placeholder="请输入用户名"
                    name="threeValue"
                    v-validate="'required|phone'"
                    data-vv-as="手机号"
                    @click-right-icon="$toast('question')"
                />
                <span class="error_msg">{{ errors.first('scope2.threeValue') }}</span>
                <van-field
                    v-model="fourValue"
                    type="password"
                    label="密码"
                    placeholder="请输入密码"
                    required
                    name="fourValue"
                    v-validate="'required|min:5'"
                    data-vv-as="密码"
                />
                <span class="error_msg">{{ errors.first('scope2.fourValue') }}</span>
            </van-cell-group>
            <!-- 普通按钮 -->
            <van-button type="info" native-type="button" @click="pageAllParamsValidator">页面所有参数校验</van-button> 
            <!-- 提交数据按钮 -->
            <van-button type="info" native-type="submit">提交</van-button>
        </form>
    </div>
</template>

<script>
import clipboard from '@/utils/clipboard';

import sticky from '@/directives/sticky/index';
import drag from '@/directives/drag/index';
export default {
    name: 'HomeSon',
    data() {
        return {
            tel: 18592017737,
            // scope作用域1数据
            oneValue: '',
            twoValue: '',

            // scope作用域2数据
            threeValue: '',
            fourValue: '',

        }
    },
    //自定义指令
    directives: {
        sticky,
        drag
    },
    methods: {
        copy(e) {
            console.log(e)
            clipboard('HomeSon111', e);
        },
        scopeForm1() { //一个作用域下的参数校验
            this.$validator.validateAll('scope1').then(result => {
                console.log(result);
            })
        },
        scopeForm2() {//一个作用域下的参数校验
            this.$validator.validateAll('scope2').then(result => {
                console.log(result);
            })
        },
        onlyParamsValidator() { //只校验单个参数
            this.$validator.validate('scope1.twoValue').then(res => {  // 注意validate跟validateAll的区别使用
                console.log(res)
            })
        },
        pageAllParamsValidator() {
            this.$validator.validate().then(res => {
                console.log(res)
            })
        }
    },    
}
</script>

<style scoped lang='less'>
.HomeSon {
    font-size: 20px;
    color: teal;
    font-weight: 600;
    p {
        margin: 0;
    }
}
</style>