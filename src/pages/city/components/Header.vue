<template>
  <div class="header">
    城市选择
    <router-link to='/'>
      <span class="iconfont header-back">&#xe624;</span>
    </router-link>
  </div>
</template>
<script>
export default {
  name: 'CityHeader'
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.header {
  position: relative;
  height: $headerHeight;
  line-height: $headerHeight;
  overflow: hidden;
  text-align: center;
  color: $whiteTextColor;
  background: $bgColor;
  font-size: 1rem;

  .header-back {
    position: absolute;
    top: 0;
    left: 0;
    width: 3rem;
    text-align: center;
    font-size: 1rem;
    color: $whiteTextColor;
  }
}
</style>
