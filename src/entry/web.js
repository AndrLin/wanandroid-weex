import web from '../page/common/WebView.vue'
import mixins from '@/mixins/index'

Vue.mixin(mixins)

new Vue(Vue.util.extend({el: '#root', router}, web))
