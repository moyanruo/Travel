<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont">&#xe624;</span>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      请输入城市/景点/游玩主题
    </div>
    <div class="header-right">
      城市
      <span class="iconfont">&#xe6aa;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>
/*scoped 样式只对当前组件有效 */
<style lang="stylus" scoped>
//css 中使用 ~@  可以直接找到跟目录src
// @import '~@/assets/styles/varibles.styl'

@import '~styles/varibles.styl'

/* 1rem = html font-size = 16px
5.375rem
*/
.header {
  line-height: 2.6875rem;
  display: flex;
  background: $bgColor;
  color: #fff;

  .header-left {
    width: 2.1rem;
    float: left;
    text-align: center;
  }

  .header-input {
    flex: 1;
    height: 2rem;
    line-height: 2rem;
    margin-top: 0.35rem;
    margin-left: 0.625rem;
    padding-left: 1.25rem;
    background: #fff;
    border-radius: 0.3125rem;
    color: #ccc;
  }

  .header-right {
    width: 4rem;
    float: left;
    text-align: center;
  }
}
</style>
