<template>
    <wxc-tab-bar :tab-titles="tabTitles"
               :tab-styles="tabStyles"
               title-type="iconFont"
               @wxcTabBarCurrentTabSelected="wxcTabBarCurrentTabSelected">
            <div class="item-container" :style="contentStyle"><home-page></home-page></div>
            <div class="item-container" :style="contentStyle"><text>体系</text></div>
            <div class="item-container" :style="contentStyle"><text>项目</text></div>
            <div class="item-container" :style="contentStyle"><text>我的主页</text></div>
    </wxc-tab-bar>
</template>

<script>
import {Utils, WxcTabBar} from 'weex-ui'
import {getIconFontPath} from '../config/IconConfig'
import {getRealScreenHeight} from '../config/Config'
import HomePage from './home/HomePage'

const tabIconFontTitles = [
  {
    title: '首页',
    codePoint: '\ue63e'
  },
  {
    title: '体系',
    codePoint: '\ue7aa'
  },
  {
    title: '项目',
    codePoint: '\ue628'
  },
  {
    title: '我的',
    codePoint: '\ue656'
  }
]

const tabIconFontStyles = {
  bgColor: '#FFFFFF',
  titleColor: '#666666',
  activeTitleColor: '#3c3f41',
  activeBgColor: '#FFFFFF',
  isActiveTitleBold: true,
  width: 200,
  height: 100,
  fontSize: 24,
  textPaddingLeft: 10,
  textPaddingRight: 10,
  iconFontSize: 40,
  iconFontMarginBottom: 4,
  iconFontColor: '#AAAAAA',
  activeIconFontColor: 'black',
  iconFontUrl: getIconFontPath("../")
}

export default {
  components: {
    WxcTabBar, HomePage
  },
  data: () => ({
    tabTitles: tabIconFontTitles,
    tabStyles: tabIconFontStyles
  }),
  created () {
    const { tabStyles } = this
    this.contentStyle = { height: (getRealScreenHeight(Utils) - tabStyles.height) + 'px' }
  },
  methods: {
    wxcTabBarCurrentTabSelected (e) {
      const index = e.page
      console.log(index)
    }
  }
}
</script>

<style scoped>
.item-container {
  width: 750px;
  overflow: scroll;
  align-items: center;
  background: #fff;
  border-bottom: 1px solid #cccccc;
}
</style>
