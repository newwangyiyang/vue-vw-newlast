<template>
    <div class="HomeSon" @click="copy($event)">
        <p v-drag>{{tel | toThousandFilter}}</p>
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
            tel: 18592017737
        }
    },
    //自定义指令
    directives: {
        sticky,
        drag
    },
    methods: {
        copy(e) {
            clipboard('HomeSon111', e);
        }
    },    
}
</script>

<style scoped lang='less'>
.HomeSon {
    font-size: 20px;
    color: teal;
    font-weight: 600;
}
</style>