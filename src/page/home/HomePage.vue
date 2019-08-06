<template>
    <div style="background-color: #fff">
        <div class="search">
            <text class="search-text iconfont">{{'\ue651'}} 搜索关键字以空格形式隔开</text>
        </div>
        <wxc-tab-page 
            ref="wxc-tab-page"
            :tab-titles="tabTitles"
            :tab-styles="tabStyles"
            :tab-page-height="tabPageHeight"
            title-type="text">
            
            <div class="item-container" :style="{ height: (tabPageHeight - tabStyles.height) + 'px' }">
                <news></news>
            </div>
            <div class="item-container" :style="{ height: (tabPageHeight - tabStyles.height) + 'px' }">
                <news></news>
            </div>
            <div class="item-container" :style="{ height: (tabPageHeight - tabStyles.height) + 'px' }">
                <news></news>
            </div>
        
        </wxc-tab-page>

    </div>
</template>

<script>
import {WxcTabPage, WxcPanItem, Utils} from 'weex-ui'
import {primaryColor} from '../../config/Config'
import News from './News'
export default {
    components: {
        WxcTabPage, WxcPanItem, News
    },
    data () {
        return {
            tabTitles: [
                {title: '最新'}, {title: '项目'}, {title: '公众号'}
            ],
            tabStyles: {
                bgColor: '#FFFFFF',
                titleColor: '#666666',
                activeTitleColor: '#3c3f41',
                activeBgColor: '#FFFFFF',
                isActiveTitleBold: true,
                width: 250,
                height: 60,
                fontSize: 24,
                hasActiveBottom: true,
                activeBottomColor: primaryColor,
                activeBottomHeight: 6,
                activeBottomWidth: 120,
                // normalBottomColor: 'rgba(0,0,0,0.4)',
                // normalBottomHeight: 2
            },
            tabPageHeight: 1000
        }
    },
    created() {
        this.tabPageHeight = Utils.env.getPageHeight() - 100
    },
}
</script>


<style lang="scss" scoped>
.iconfont {
    font-family: wxcIconFont;
}
.search {
    width: 650px;
    height: 60px;
    background-color: #ededed;
    border-radius: 180px;
    justify-content: center;
    align-items: center;
    padding-left: 20px;
    margin: 20px 50px;
}
.search-text {
    color: #666;
    font-size: 24px;
}
.item-container {
  width: 750px;
  align-items: center;
}
</style>

