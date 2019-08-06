<template>
    <!-- <list loadmoreoffset="20" @loadmore="loadMore"> -->
    <list loadmoreoffset="100">
        <cell>
            <banner :imageList="imgList" style="margin-top: 10px"></banner>
        </cell>

        <cell v-for="article in articleList" :key="article.id">
            <article-item :article="article"></article-item>
        </cell>

        <loading class="loading" @loading="loadMore" :display="showLoading ? 'show' : 'hide'">
            <text>上拉加载...</text>
        </loading>
    </list>
</template>

<script>
import banner from '../../components/banner'
import Request from '../../common/request'
import {BANNER, ARTICLE_TOP, API} from '../../common/api'
import ArticleItem from '../../components/ArticleItem'
export default {
    components: {banner, ArticleItem},
    data() {
        return {
            imgList: [],
            articleList: [],
            page: 0,
            noMoreData: false,
            showLoading: false
        }
    },
    created() {
        this.getBanner()
        this.getArticleTop()
        this.getNews()
    },
    methods: {
        getBanner() {
            Request.get(BANNER).then((res) => {
                if (res.data.errorCode === 0) {
                    this.imgList = res.data.data
                }
            })
        },
        async getArticleTop() {
            let articleTop = await Request.get(ARTICLE_TOP)
            if (articleTop && articleTop.data.errorCode === 0) {
                if (articleTop.data.data.length > 0) {
                    this.articleList.push(...articleTop.data.data)
                }
            }
        },
        getNews() {
            Request.get(API.ARTICLE_LIST(this.page))
            .then((res) => {
                if (res.data.errorCode === 0) {
                    let data = res.data.data
                    this.page = data.curPage
                    if (this.page > data.pageCount) {
                        this.noMoreData = true
                    }
                    if (data.datas.length > 0) {
                        this.articleList.push(...data.datas)
                    }
                }
                this.showLoading = false
            })
            
        },
        loadMore() {
            if (!this.noMoreData) {
                this.showLoading = true
                this.getNews()
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.loading {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
    width: 750px;
}
</style>

