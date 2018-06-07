<template>
  <div>
    <ul class="list">
      <li class="item" v-for="(item,key) of cities" :key="key">{{key}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 2rem;
  right: 0.2rem;
  bottom: 0;
  width: 1rem;
  text-size: .1625rem;

  .item {
    padding: 0.2rem 0.1rem;
    text-align: center;
    color: $bgColor;
  }
}
</style>
