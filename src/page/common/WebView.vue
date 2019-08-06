<template>
    <div>
        <wxc-minibar
            title="详情"
            background-color="#FFFFFF"
            @wxcMinibarLeftButtonClicked="back"></wxc-minibar>

        <web :src="url" class="web-content"></web>
    </div>
</template>

<script>
import { WxcMinibar } from 'weex-ui'
export default {
    components: {
        WxcMinibar
    },
    data() {
        return {
            title: '',
            url: ''
        }
    },
    created() {
        this.title = this.$route.query.title
        this.url = this.$route.query.url
    },
    methods: {
        back() {
            this.$router.go(-1)
        }
    }
}
</script>

<style scoped>
.web-content {
    position: fixed;
    left: 0;
    top: 90;
    right: 0;
    bottom: 0;
}
</style>
