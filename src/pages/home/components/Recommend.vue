<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <!-- router-lin 标签上加上 tag ，则标签就不会被渲染成 a 标签，而是被渲染成 tag 里面指定的标签 -->
      <router-link class="item border-bottom" v-for="item of recommendList" :key="item.id" tag="li" :to="'/detail/' + item.id">
        <img :src="item.imgUrl" alt="" class="item-img">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    recommendList: Array
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
@import '~styles/varibles.styl'
.title
  margin-top 0.2rem
  line-height 0.8rem
  background #eee
  text-indent 0.2rem
.item
  overflow hidden
  display flex
  height 1.9rem
  .item-img
    width 1.7rem
    height 1.7rem
    padding 0.1rem
  .item-info
    flex 1
    padding 0.1rem
    min-width 0
    .item-title
      line-height 0.54rem
      font-size 0.32rem
      ellipsis()
    .item-desc
      line-height 0.4rem
      color #ccc
      ellipsis()
    .item-button
      line-height 0.44rem
      margin-top 0.16rem
      background #ff9300
      padding 0 0.2rem
      border-radius 0.6rem
      color $whiteTextColor
</style>
