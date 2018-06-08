<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont">&#xe624;</span>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      请输入城市/景点/游玩主题
    </div>
    <router-link to='/city'>
      <div class="header-right">
        <!-- {{this.$store.state.city}} -->
        {{this.city}}
        <!-- {{this.doubleCity}} -->
        <span class="iconfont">&#xe6aa;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    ...mapState(['city'])
    // ...mapGetters(['doubleCity'])
  }
}
</script>
/*scoped 样式只对当前组件有效 */
<style lang="stylus" scoped>
// css 中使用 ~@  可以直接找到跟目录src
// @import '~@/assets/styles/varibles.styl'
@import '~styles/varibles.styl'
/* 1rem = html font-size = 16px
5.375rem
*/
.header {
  line-height:  $headerHeight;
  display: flex;
  background: $bgColor;
  color: $whiteTextColor;

  .header-left {
    width: 0.64rem;
    float: left;
    text-align: center;
  }

  .header-input {
    flex: 1;
    height: 0.64rem;
    line-height: 0.64rem;
    margin-top: 0.12rem;
    margin-left: 0.2rem;
    padding-left: 0.2rem;
    background: $whiteTextColor;
    border-radius: 0.1rem;
    color: #ccc;
  }

  .header-right {
    min-width: 1.04rem;
    padding: 0 0.1rem;
    float: left;
    text-align: center;
    color: $whiteTextColor;
  }
}
</style>
