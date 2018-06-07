<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">北京</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper" v-for="item of hotCities" :key="item.id">
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item,key) of cities" :key="key">
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list">
          <div class="item" v-for="city of item" :key="city.id">{{city.name}}</div>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
import Bscroll from 'better-scroll'
export default {
  name: 'CityList',
  props: {
    cities: Object,
    hotCities: Array
  },
  mounted () {
    this.sroll = new Bscroll(this.$refs.wrapper)
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.border-topbottom {
  &:before {
    border-color: #777;
  }

  &:after {
    border-color: #777;
  }
}

.list {
  overflow: hidden;
  position: absolute;
  top: 5.125rem;
  left: 0;
  bottom: 0;
  right: 0;

  .title {
    line-height: 2.1875rem;
    background: #eee;
    padding-left: 0.3125rem;
    color: #666;
    font-size: 0.875rem;
  }

  .button-list {
    overflow: hidden;
    padding: 0.1rem 0.6rem 0.1rem 0.1rem;

    .button-wrapper {
      float: left;
      width: 31.33%;
      padding: 0.2rem 0.2rem;

      .button {
        text-align: center;
        border: 0.03125rem solid #ccc;
        padding: 0.3rem;
        border-radius: 0.3rem;
      }
    }
  }

  .item-list {
    .item {
      line-height: 2.8125rem;
      color: #666;
      padding-left: 0.5rem;
      border-bottom: 0.0625rem solid #ccc;
    }
  }
}
</style>
