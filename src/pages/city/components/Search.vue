<template>
  <div class="search">
    <input class="search-input" type="text" placeholder="输入城市名或拼音">
  </div>
</template>
<script>
export default {
  name: 'CitySearch'
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.search {
  height: 2.5rem;
  padding: 0 .3rem;  //上下 左右
  background: $bgColor;

  .search-input {
    box-sizing: border-box;
    width: 100%;
    height: 2.3125rem;
    padding: 0 .1rem;
    line-height: 2.3125rem;
    text-align: center;
    border-radius: .5rem;
    color: #666;
  }
}
</style>
