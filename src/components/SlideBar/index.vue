<template>
    <transition v-if="showTrue" enter-active-class="animated fadeInLeft" leave-active-class="animated fadeOutLeft">
        <slot>

        </slot>
    </transition>
</template>

<script>
export default {
    name: "SlideBar",
    props: {
        showTrue: {
            type: Boolean,
            default: false,
            required: true
        }
    }
}
</script>

<style scoped lang="less">
@import '../../assets/css/animate.css';
</style>