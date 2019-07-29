<template>
    <div class="splash" :style="{height: mainHeight}" @click="toMain">
        <image :src="imagePath" style="width: 342px;height: 249px;"></image>
    </div>
</template>

<script>
import {getImagePath} from '../config/IconConfig'
import {Utils} from 'weex-ui'

export default {
  created () {
    this.imagePath = getImagePath('wan_android_logo', '.png');
    this.mainHeight = Utils.env.getScreenHeight();
    setTimeout(() => {
      this.$router.push({path: '/main'})
    }, 2000);

  },
  data () {
    return {
      imagePath: '',
      mainHeight: 0
    }
  }
}
</script>

<style lang="scss" scoped>
.splash {
    justify-content: center;
    width: 750px;
    height: 1334px;
    align-items: center;
    
}
</style>
