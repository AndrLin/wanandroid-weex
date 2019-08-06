
let HOST = 'https://www.wanandroid.com'
export const BANNER = `${HOST}/banner/json`

// 置顶文章
export const ARTICLE_TOP = `${HOST}/article/top/json`

export const API = {
    // 首页文章列表
    ARTICLE_LIST: (page) => {
        return `${HOST}/article/list/${page}/json`
    }
}