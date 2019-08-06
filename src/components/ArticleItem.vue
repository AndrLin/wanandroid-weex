<template>
    <div class="item" @click="toDetail">
        <div class="tag-wrap">
            <text class="top" v-if="article.type === 1">置顶</text>
            <text class="fresh" v-if="article.fresh">最新</text>
            <text class="type">{{article.superChapterName}}</text>
        </div>
        <div>
            <text class="title">{{article.title}}</text>
        </div>
        <div class="footer">
            <text class="author">by {{article.author}}</text>
            <text class="time">{{article.niceDate}}</text>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        article: {
            type: Object
        }
    },
    methods: {
        toDetail() {
            // this.jumpWithParams('web', {title: this.article.title, url: this.article.link})
            this.$router.push({path: '/web', query: {title: this.article.title, url: this.article.link}})
        }
    }
}
</script>


<style lang="scss" scoped>
.item {
    padding: 20px 40px;
    // border-bottom: 1px solid #ccc;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: #CCC;
    background-color: #FFF;
}
.tag-wrap {
    display: flex;
    flex-direction: row;
}
.top {
    // border: 1px solid red;
    border-width: 1px;
    border-style: solid;
    border-color: red;
    color: red;
    margin-right: 20px;
    padding: 5px 10px;
    font-size: 18px;
}
.fresh {
    // border: 1px solid blue;
    border-width: 1px;
    border-style: solid;
    border-color: blue;
    color: blue;
    margin-right: 20px;
    padding: 5px 10px;
    font-size: 18px;
}
.type {
    // border: 1px solid green;
    border-width: 1px;
    border-style: solid;
    border-color: green;
    color: green;
    padding: 5px 10px;
    font-size: 18px;
}
.title {
    margin-top: 20px;
}
.footer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 20px;
}
.author {
    color: #666;
    font-size: 24px;
}
.time {
    color: #666;
    font-size: 24px;
}
</style>

