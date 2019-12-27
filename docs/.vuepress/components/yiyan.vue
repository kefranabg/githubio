<template>
    <div class="hitokoto">hitokoto：{{hitokoto}}</div>
</template>

<script>
import {xhrGet} from '../util/util.js'
export default {
    name: 'yiyan',
    data(){
        return{
            hitokoto: ''
        }
    },
    mounted(){
        this.getHitokoto();
    },
    methods: {
        async getHitokoto(){
            const api = 'https://v1.hitokoto.cn/';
            const data = await xhrGet(api);
            const hitokoto = data.data.hitokoto;
            this.hitokoto = hitokoto;
        }
    }
}
</script>
<style scoped>
.hitokoto{font-size: 1em;line-height: 1.3;color: #6a8bad;text-align: center;}
</style>
