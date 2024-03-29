
export default {
    methods: {
        getNavigator() {
            return weex.requireModule('navigator')
        },
        toBack() {
            if(WXEnvironment.platform.toLowerCase() === 'web') {
                this.$router.back()
            }  else {
                this.getNavigator().pop({animated: "true"})
            }
        },
        getBaseUrl(toUrl) {
            let bundleUrl = weex.config.bundleUrl;
            bundleUrl = String(bundleUrl);
            console.log('bundleUrl:', bundleUrl)
            let nativeBase;
            let isAndroidAssets =bundleUrl.indexOf('file://assets/') >= 0;

            let isiOSAssets = bundleUrl.indexOf('file:///') >= 0 && bundleUrl.indexOf('WeexDemo.app') > 0;
            if (isAndroidAssets) {
                nativeBase = 'file://assets/dist/' + toUrl + '.js';
            }
            else if (isiOSAssets) {
                nativeBase = bundleUrl.substring(0, bundleUrl.lastIndexOf('/') + 1) + toUrl + '.js';
            } else {
                let host = 'localhost:8081';
                let matches = /\/\/([^\/]+?)\//.exec(bundleUrl);
                if (matches && matches.length >= 2) {
                    host = matches[1];
                }
                nativeBase = 'http://' + host + '/' + toUrl + '.html';
            }
            return nativeBase;
        },
        push(to) {
            if(WXEnvironment.platform.toLowerCase() === 'web') {
                if (this.$router) {
                    this.$router.push(to)
                }
            } else {
                let path = this.getBaseUrl(to)
                this.getNavigator().push({
                    url: path,
                    animated: "true"
                })
            }
        },
        jumpWithParams(to, params) {
            if(WXEnvironment.platform.toLowerCase() === 'web') {
                if (this.$router) {
                    this.$router.push({name: to, query: params})
                }
            } else {
                let path = this.getBaseUrl(to);
                let q = this.createQuery(params)
                this.getNavigator().push({
                    url: path + q,
                    animated: "true"
                }, event => {
                    // modal.toast({ message: 'callback: ' + event })
                })
            }
        },
        // object 转 URL 参数
        createQuery(obj) {
            if(obj === null || obj === "" || obj.length === 0) {
                return ""
            }
            let url = '?';
            for (let key in obj) {
                if (obj[key] !== null) {
                    url += (key + '=' + encodeURIComponent(obj[key]) + '&');
                }
            }
            return url.substring(0, url.lastIndexOf('&'));
        },
        // 'xxx.js?name=aa' 转 {name: 'aa'}
        getQueryData(url) {
            url = url.substring(url.indexOf('.js?') + 3);
            let result = {};
            if (url.indexOf("?") != -1) {
                let str = url.substr(1);
                let strs = str.split("&");
                for (let i = 0; i < strs.length; i++) {
                    result[strs[i].split("=")[0]] = decodeURIComponent(strs[i].split("=")[1]);
                }
            }
            return result;
        },
        getQuery() {
            if (WXEnvironment.platform.toLowerCase() === 'web') {
                return this.$route.query;
            } else {
                return this.getQueryData(weex.config.bundleUrl);
            }
        }
    }
}